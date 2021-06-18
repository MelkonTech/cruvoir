import * as R from 'ramda'
import {ChangeEvent, Fragment, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {Form as FormikForm, useFormikContext} from 'formik'
import {Input, Radio, Select} from 'components/common/form'
import {ShippingAddress, ShippingRate} from 'components/common/types'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import {ConvertCurrency} from 'components/common/ConvertCurrency'
import {Country} from 'components/common/types'
import {CurrencyContext} from 'components/common/CurrencyContext'
import CustomerAddressesQuery from '../graphql/customer-addresses.graphql'
import {FormValues} from '../types'
import {Gender} from 'components/common/types'
import {Loading} from 'components/common/Loading'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import UpdateAddress from '../graphql/update-address.graphql'
import UpdateEmail from '../graphql/update-email.graphql'
import UpdateShippingLine from '../graphql/update-shipping-line.graphql'
import {useRouter} from 'next/router'
import {useShippingLocations} from 'components/common/hooks/use-shipping-locations'
import {useTranslation} from 'i18n'
type GraphQLFieldError = {field: string[], message: string}
type Option = {label: string, value: string}
type Province = {code: string, name: string}

export function Form(props: {
  availableShippingRates?: {ready: boolean, shippingRates: ShippingRate[]}
  checkoutId: string
  className: string
  countries: Country[]
  gender: Gender
  goBack: (callback: () => void) => void
  goNext: (callback: () => void) => void
  promoCodeLoading: boolean
  refetch: (params?: any) => Promise<any>
  shippingCost: number
  startPolling: (interval: number) => void
  step: number
  stopPolling: () => void
  total: number
  userToken?: string | null
}) {
  const currencyCtx = useContext(CurrencyContext)
  const startPolling = props.startPolling
  const stopPolling = props.stopPolling
  const refetch = props.refetch

  const {data: addressesData} = useQuery(CustomerAddressesQuery, {
    skip     : !props.userToken,
    variables: {customerAccessToken: props.userToken},
  })

  const [shippingLineError, setShippingLineError] = useState('')

  const {
    resetForm, setValues, setFieldError, setFieldValue, setFieldTouched, setTouched, submitForm, values,
    isValid, isSubmitting,
  } = useFormikContext<FormValues>()

  const {t} = useTranslation()
  const [usePredefinedAddress, setUsePredefinedAddress] = useState(false)
  const [updateAddress] = useMutation(UpdateAddress)
  const [updateEmail] = useMutation(UpdateEmail)
  const [updateShippingLine] = useMutation(UpdateShippingLine)
  const clearProvince = useCallback(() => setFieldValue('province', ''), [setFieldValue])
  const {currentCountry} = useShippingLocations(props.countries, values.country)

  const countriesOptions = useMemo(() => R.compose(
    R.prepend({label: '', value: ''}),
    R.map<Country, {label: string, value: string}>(c => ({label: c.name, value: c.code})),
  )(props.countries || []), [props.countries])

  const provincesOptions = useMemo<Option[]>(() => R.compose<Province[], Option[], Option[]>(
    R.prepend({label: '', value: ''}),
    R.map<Province, Option>(p => ({label: p.name, value: p.code})),
  )(R.pathOr<Province[]>([], ['provinces'], currentCountry)), [currentCountry])

  const customerAddresses = useMemo(() => R.compose(
    R.pluck('node'),
    R.pathOr<{node: ShippingAddress}[]>([],['customer', 'addresses', 'edges']),
  )(addressesData), [addressesData])

  const customerAddressesOptions = useMemo(() => R.compose(
    R.prepend({label: 'Enter new address', value: ''}),

    R.map((item: ShippingAddress) => ({
      label: R.join(', ', item.formatted),
      value: item.id,
    })),
  )(customerAddresses), [customerAddresses])

  // Checkouts may have asynchronous operations that can take time to finish. If you want to complete a checkout or ensure
  // all the fields are populated and up to date, polling is required until the value is true.
  const isShippingRatesReady = useMemo(() => R.pathOr(
    false,
    ['ready'],
    props.availableShippingRates,
  ), [props.availableShippingRates])

  const [isWaitingForRates, setIsWaitingForRates] = useState(false)

  useEffect(() => {
    if(!isShippingRatesReady && isWaitingForRates)
      startPolling(100)
    else if(isShippingRatesReady && isWaitingForRates) {
      setIsWaitingForRates(false)
      stopPolling()
    }
  }, [isShippingRatesReady, isWaitingForRates, startPolling, stopPolling])

  const [isAddressApplying, setAddressApplying] = useState(false)

  const addressFromValues = useCallback(
    R.compose(R.join(', '), R.values, R.pick(['address1', 'city', 'province', 'zip', 'country'])),
    [],
  )

  const shippingRates = useMemo(() => R.pathOr<ShippingRate[]>(
    [],
    ['shippingRates'],
    props.availableShippingRates,
  ), [props.availableShippingRates])

  const [appliedAddress, setAppliedAddress] = useState(R.isEmpty(shippingRates) ? '' : addressFromValues(values))

  const applyAddress = useCallback(async (address: FormValues) => {
    setAddressApplying(true)
    let updateAddressResponse
    let updateEmailResponse

    try {
      updateAddressResponse = await updateAddress({variables: {
        checkoutId: props.checkoutId,

        shippingAddress: R.pick(
          ['address1', 'address2', 'city', 'country', 'firstName', 'lastName', 'phone', 'province', 'zip'],
          address,
        ),
      }})

      // Email is required for the completion of a checkout
      updateEmailResponse = await updateEmail({variables: {checkoutId: props.checkoutId, email: address.email}})
    } catch(e) {
      setShippingLineError(t('shippingLineUnexpectedError'))
    }

    const errors = R.compose<{checkoutUserErrors: GraphQLFieldError[]}[], GraphQLFieldError[][], GraphQLFieldError[]>(
      R.flatten,
      R.pluck('checkoutUserErrors'),
    )([updateAddressResponse.data.checkoutShippingAddressUpdateV2, updateEmailResponse.data.checkoutEmailUpdateV2])

    if(!R.isEmpty(errors)) {
      R.forEach(err => {
        setFieldTouched((err.field[1] || err.field[0]) as keyof FormValues, true, false)
        setFieldError((err.field[1] || err.field[0]) as keyof FormValues, err.message)
      }, errors)

      setAddressApplying(false)
      return
    }

    await refetch()
    setIsWaitingForRates(true)
    setTouched({})
    setAddressApplying(false)
    setAppliedAddress(addressFromValues(address))
  }, [
    addressFromValues, props.checkoutId, refetch, setAppliedAddress, setFieldError, setFieldTouched, setTouched, t,
    updateAddress, updateEmail,
  ])

  const [isShippingRateApplying, setIsShippingRateApplying] = useState(false)

  const applyShippingRate = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    setIsShippingRateApplying(true)
    let r

    try {
      r = await updateShippingLine({variables: {
        checkoutId        : props.checkoutId,
        shippingRateHandle: event.currentTarget.value,
      }})
    } catch(e) {
      setShippingLineError(t('shippingLineUnexpectedError'))
    }

    const errors = R.pathOr<{field: string[], message: string}[]>(
      [], ['checkoutUserErrors'],
      r.data.checkoutShippingAddressUpdateV2,
    )

    if(!R.isEmpty(errors)) {
      R.forEach(err => {
        setFieldTouched(err.field[1] as keyof FormValues, true, false)
        setFieldError(err.field[1] as keyof FormValues, err.message)
      }, errors)

      setIsShippingRateApplying(false)
      return
    }

    await refetch()
    setIsWaitingForRates(true)
    setIsShippingRateApplying(false)
  }, [props.checkoutId, refetch, setFieldError, setFieldTouched, t, updateShippingLine])

  const selectAddress = useCallback(
    async (event: ChangeEvent<HTMLSelectElement>) => {
      setUsePredefinedAddress(!!event.currentTarget.value)

      if(!event.currentTarget.value) {
        resetForm()
        return
      }

      const newAddress = R.find<{country: string, id: string, province: string}>(
        R.propEq('id', event.currentTarget.value),
        customerAddresses,
      )

      const newValues = {
        ...values,
        predefinedAddress: event.currentTarget.value,
        ...newAddress,

        ...{
          country: R.find<Option>(R.propEq('label', newAddress.country), countriesOptions).value,

          province: R.find<Province>(
            R.propEq('name', newAddress.province),
            R.find<Country>(R.propEq('name', newAddress.country), props.countries || []).provinces,
          ).code,
        },
      }

      setValues(newValues)
      await applyAddress(newValues)
    },

    [applyAddress, countriesOptions, customerAddresses, props.countries, resetForm, setValues, values],
  )

  useEffect(() => {
    if(!appliedAddress)
      setAppliedAddress(addressFromValues(values))
  }, [addressFromValues, appliedAddress, setAppliedAddress, values])

  const isShippingSelected = Boolean(R.prop('shippingLine', values))
  const router = useRouter()
  const goBack = props.goBack
  const goNext = props.goNext

  const goToShopping = useCallback(() => router.push(
    // eslint-disable-next-line max-len
    `/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]?category=all&collection=all&gender=${props.gender}&subcategory=all`,
    `/${props.gender}/shop/collection/all/category/all/subcategory/all`,
  ), [props.gender, router])

  const buttonOptions = useMemo(() => ({
    back: [
      {
        callback  : goToShopping,
        isDisabled: props.promoCodeLoading,
        isLoading : false,
        label     : t('continueShopping'),
      },

      {
        callback  : () => {},
        isDisabled: !isValid || isSubmitting || isAddressApplying,
        isLoading : false,
        label     : t('cancel'),
      },

      {
        callback  : () => {},
        isDisabled: isShippingRateApplying,
        isLoading : false,
        label     : t('backToShippingAddress'),
      },

      {
        callback  : () => {},
        isDisabled: false,
        isLoading : false,
        label     : t('backToShippingMethod'),
      },
    ],

    next: [
      {
        callback  : () => {},
        isDisabled: props.promoCodeLoading,
        isLoading : false,
        label     : t('proceedToCheckout'),
      },

      {
        callback  : () => applyAddress(values),
        isDisabled: !isValid || isSubmitting || isAddressApplying,
        isLoading : isAddressApplying,
        label     : t('applyShippingAddress'),
      },

      {
        callback  : () => {},
        isDisabled: isShippingRateApplying || !values.shippingLine,
        isLoading : isShippingRateApplying,
        label     : t('applyShippingMethod'),
      },

      {
        callback  : submitForm,
        isDisabled: !isValid || !isShippingSelected || isSubmitting,
        isLoading : isSubmitting,
        label     : `${t('confirmAndPay')}`,
      },
    ],
  }), [
    applyAddress, goToShopping, isAddressApplying, isValid, isShippingRateApplying, isShippingSelected, isSubmitting,
    props.promoCodeLoading, submitForm, t, values,
  ])

  const clickGoBackButton = useCallback(() => {
    goBack(buttonOptions.back[props.step].callback)
  }, [buttonOptions.back, goBack, props.step])

  const clickGoNextButton = useCallback(() => {
    goNext(buttonOptions.next[props.step].callback)
  }, [buttonOptions.next, goNext, props.step])

  return <FormikForm className={props.className}>
    <div className={cn('shipping-addresss-section', {'is-form-shown': props.step === 1, 'is-shown': props.step > 0})}>
      <div className="divider" />
      <div className="label">{t('shippingAddress')}:</div>
      <div className="value">{appliedAddress}</div>

      <div className="form">
        <Select
          className="field span--2"
          onChange={selectAddress}
          name="predefinedAddress"
          options={customerAddressesOptions}
        />

        <Select
          className="field span--1"
          disabled={usePredefinedAddress}
          onChange={clearProvince}
          name="country"
          options={countriesOptions}
        />

        <Input
          className="field span--1"
          name="email"
          placeholder="Email"
          type="text"
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="firstName"
          placeholder={t('firstName')}
          type="text"
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="lastName"
          placeholder={t('lastName')}
          type="text"
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="address1"
          placeholder={`${t('address')} 1`}
          type="text"
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="address2"
          placeholder={`${t('address')} 2`}
          type="text"
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="city"
          placeholder={t('city')}
          type="text"
        />

        <Select
          className="field span--1"
          disabled={usePredefinedAddress}
          name="province"
          options={provincesOptions}
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="zip"
          placeholder={t('zip')}
          type="text"
        />

        <Input
          className="field span--1"
          disabled={usePredefinedAddress}
          name="phone"
          placeholder={`${t('phone')} +16135551111`}
          type="text"
        />
      </div>
    </div>

    <div className={cn('shipping-method-section', {'is-form-shown': props.step === 2, 'is-shown': props.step > 1})}>
      <div className="divider" />
      <div className="label">{t('shippingMethod')}:</div>
      <PriceWithCompareAt className="value" price={props.shippingCost} />

      <div className="form">
        <Loading isShown={isWaitingForRates} />
        {shippingLineError && <div className="error-message span--2">{shippingLineError}</div>}

        {R.map(rate => <div key={rate.handle} className="field span--2">
          <Radio
            caption={<Fragment>
              {rate.title}
              {' - '}
              <ConvertCurrency from="USD" to={currencyCtx.active}>{Number(rate.priceV2.amount)}</ConvertCurrency>
            </Fragment>}

            name="shippingLine"
            onChange={applyShippingRate}
            value={rate.handle}
          />
        </div>, shippingRates)}
      </div>
    </div>

    <div className={cn('total-section', {'is-shown': props.step > 2})}>
      <div className="divider" />
      <div className="label">{t('orderTotal')}:</div>
      <PriceWithCompareAt className="value" price={props.total} />
    </div>

    <div className="action-buttons">
      <Button
        appearance="outline"
        className="button"
        disabled={buttonOptions.back[props.step].isDisabled}
        isLoading={buttonOptions.back[props.step].isLoading}
        onClick={clickGoBackButton}
        width="flex"
      >{buttonOptions.back[props.step].label}</Button>

      <Button
        className="button"
        disabled={buttonOptions.next[props.step].isDisabled}
        isLoading={buttonOptions.next[props.step].isLoading}
        onClick={clickGoNextButton}
        width="flex"
      >{buttonOptions.next[props.step].label}</Button>
    </div>
  </FormikForm>
}
