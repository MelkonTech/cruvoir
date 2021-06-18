import * as R from 'ramda'
import * as Yup from 'yup'
import {addressFields, FormValues} from './types'
import {Country, Gender, ShippingAddress, ShippingRate} from 'components/common/types'
import {Fragment, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {Button} from 'components/common/Button'
import {CartContext} from 'components/common/CartContext'
import cn from 'classnames'
import {Field} from 'components/common/form/common/Field'
import {Form} from './Form'
import {Formik} from 'formik'
import getConfig from 'next/config'
import inputStyles from 'components/common/form/Input/index.css'
import {PayWithCard} from './PayWithCard'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import ShippingAddressQuery from './graphql/checkout.graphql'
import styles from './index.css'
import {usePopup} from '@ottofeller/hooks'
import {useQuery} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'
const {publicRuntimeConfig} = getConfig()

export function Sidebar(props: {
  applyPromoCode: (code: string) => Promise<void>
  discount: {code: string | null, typename: 'PricingPercentageValue' | 'MoneyV2', value: string | number}
  className?: string
  gender: Gender
  removePromoCode: () => Promise<void>
  subtotal: number
  total: number
  userToken?: string | null
}) {
  const {t} = useTranslation()
  const applyPromoCode = props.applyPromoCode
  const removePromoCode = props.removePromoCode
  const [promoCode, setPromoCode] = useState('')
  const [promoCodeError, setPromoCodeError] = useState('')
  const [promoCodeLoading, setIsPromoCodeLoading] = useState(false)

  const applyPromo = useCallback(async event => {
    event.preventDefault()
    setIsPromoCodeLoading(true)
    setPromoCodeError('')

    try {
      await applyPromoCode(promoCode)
    } catch(e) {
      console.log(e)
      setPromoCodeError(e)
    } finally {
      setIsPromoCodeLoading(false)
    }
  }, [applyPromoCode, promoCode])

  const removePromo = useCallback(async event => {
    event.preventDefault()
    setIsPromoCodeLoading(true)
    setPromoCodeError('')

    try {
      await removePromoCode()
    } catch(e) {
      setPromoCodeError(e)
    } finally {
      setIsPromoCodeLoading(false)
    }

    setPromoCode('')
  }, [removePromoCode])

  /*
    step = 0 - promo code
    step = 1 - shipping address
    step = 2 - shipping method
    step = 3 - confirm and pay
  */
  const [step, setStep] = useState(0)

  const goBack = useCallback(callback => {
    callback()
    const prevStep = step - 1

    if(prevStep >= 0)
      setStep(prevStep)
  }, [step])

  const goNext = useCallback(callback => {
    callback()
    const nextStep = step + 1

    if(nextStep < 4)
      setStep(nextStep)
  }, [step])

  const [isOrderPaid, setIsOrderPaid] = useState(false)
  const cartCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)

  const {data: checkoutData, refetch, startPolling, stopPolling} = useQuery(
    ShippingAddressQuery,

    {
      skip     : !cartCtx.checkoutId || !cartCtx.shippingAddress,
      variables: {id: cartCtx.checkoutId},
    },
  )

  const shippingInfo = useMemo(() => ({
    address: R.path<ShippingAddress>(['node', 'shippingAddress'], checkoutData),

    availableRates: R.path<{
      ready: boolean
      shippingRates: ShippingRate[]
    }>(['node', 'availableShippingRates'], checkoutData),

    line: R.path<ShippingRate>(['node', 'shippingLine'], checkoutData),
  }), [checkoutData])

  const shippingCost = Number(R.pathOr(0, ['priceV2', 'amount'], shippingInfo.line))

  const initialValues = useMemo<FormValues>(() => ({
    ...shippingInfo.address && {
      ...R.pick(addressFields, shippingInfo.address),
      country : shippingInfo.address.countryCodeV2,
      province: shippingInfo.address.provinceCode,
    },

    email            : R.path(['node', 'email'], checkoutData) || R.path(['user', 'email'], userCtx) || null,
    predefinedAddress: '',
    shippingLine     : R.pathOr('', ['handle'], shippingInfo.line),
  }), [checkoutData, shippingInfo.address, shippingInfo.line, userCtx])

  const validationSchema = Yup.object().shape({
    address1 : Yup.string().required(),
    country  : Yup.string().required(),
    email    : Yup.string().email().required(),
    firstName: Yup.string().required(),
    lastName : Yup.string().required(),
    zip      : Yup.string().required(),
  })

  const payWithCardPopup = usePopup()

  const submit = useCallback(async () => {
    cartCtx.clearCart()
    window.location.href = checkoutData.node.webUrl

    // TODO Enable it back when Stripe checkout is ready
    // payWithCardPopup.show()
  }, [cartCtx, checkoutData])

  const completeCheckoutWithPaymentSessionId = useCallback(async () => {
    cartCtx.clearCart()
    setIsOrderPaid(true)
  }, [cartCtx])

  const [countries, setCountries] = useState([])

  useEffect(() => {
    (async () => {try {
      setCountries(await (await fetch(`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/countries/list`)).json() || [])
    } catch(e) {
      console.error(e)
    }})()
  }, [])

  return <div className={cn(styles.sidebar, props.className)}>
    <div className="section">
      <div className="calculations">
        <div className="section">
          <div className="label">{t('subtotal')}:</div>
          <PriceWithCompareAt className="value" price={props.subtotal} />
        </div>

        <div className="section">
          <div className="label">{`${t('promo')}:`}</div>

          {props.discount.typename === 'MoneyV2' && <PriceWithCompareAt
            className="value"
            price={props.discount.value}
          />}

          {props.discount.typename === 'PricingPercentageValue' && <div className="value">
            {props.discount.value}%
          </div>}
        </div>

        {Number(props.discount.value) === 0 && <form
          className={cn('promo-form', {'is-shown': step === 0})}
          onSubmit={applyPromo}
        >
          <Field className="field" errorMessage={promoCodeError} isInvalid={Boolean(promoCodeError)}>
            <div className={inputStyles.input}>
              <input
                className="input"
                //eslint-disable-next-line react/jsx-no-bind
                onChange={e => setPromoCode(e.currentTarget.value)}
                type="text"
                value={promoCode}
              />

              <div className={cn('label', {'is-focused': promoCode})}>{t('enterYourPromoHere')}</div>
            </div>
          </Field>

          <Button
            appearance="outline"
            className="button"
            disabled={!promoCode}
            isLoading={promoCodeLoading}
            isSubmit
            width="narrow"
          >
            {t('ok')}
          </Button>
        </form>}

        {Number(props.discount.value) !== 0 && <form
          className={cn('promo-form', {'is-shown': step === 0})}
          onSubmit={removePromo}
        >
          <Field className="field" errorMessage={promoCodeError} isInvalid={Boolean(promoCodeError)}>
            <div className={inputStyles.input}>
              <input
                className="input"
                disabled
                type="text"
                value={props.discount.code}
              />

              <div className={cn('label', {'is-focused': props.discount.code})}>{t('enterYourPromoHere')}</div>
            </div>
          </Field>

          <Button
            appearance="outline"
            className="button"
            icon="cross"
            isLoading={promoCodeLoading}
            isSubmit
            width="narrow"
          />
        </form>}
      </div>

      <Formik
        enableReinitialize
        validateOnMount
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        <Fragment>
          {!isOrderPaid && <Fragment>
            <Form
              availableShippingRates={shippingInfo.availableRates}
              checkoutId={cartCtx.checkoutId}
              className="form-wrapper"
              countries={countries as Country[]}
              gender={props.gender}
              goBack={goBack}
              goNext={goNext}
              promoCodeLoading={promoCodeLoading}
              refetch={refetch}
              shippingCost={shippingCost}
              startPolling={startPolling}
              step={step}
              stopPolling={stopPolling}
              total={props.total}
              userToken={props.userToken}
            />
          </Fragment>}

          {isOrderPaid && <p style={{display: 'block', fontSize: 14, marginTop: 16}}>
            {t('yourOrderIsAboutToBeFulfilled')}
          </p>}
        </Fragment>
      </Formik>
    </div>

    {/* Default first and last names are not import, it's ok to fail silently */}
    {checkoutData && <PayWithCard
      checkoutId={checkoutData.node.id}
      onSuccess={completeCheckoutWithPaymentSessionId}
      popup={payWithCardPopup}
      shippingAddress={shippingInfo.address}
      total={props.total}
    />}
  </div>
}
