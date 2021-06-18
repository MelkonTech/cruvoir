import {Form as FormikForm, useFormikContext} from 'formik'
import {useCallback, useEffect, useMemo} from 'react'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import CreditCardInput from 'react-credit-card-input'
import {Input} from 'components/common/form'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function Form(props: {
  className: string
  close: () => void
  shippingFirstName: string
  shippingLastName: string
}) {
  const {isValid, isSubmitting, setFieldValue, values} = useFormikContext<{
    cvc: string
    expiry: string
    firstName: string
    lastName: string
    number: string
  }>()

  const {t} = useTranslation()
  const setCVC = useCallback(event => setFieldValue('cvc', event.target.value), [setFieldValue])
  const setExpiry = useCallback(event => setFieldValue('expiry', event.target.value), [setFieldValue])
  const setNumber = useCallback(event => setFieldValue('number', event.target.value), [setFieldValue])
  const cardNumberInputProps = useMemo(() => ({onChange: setNumber, value: values.number}), [setNumber, values])
  const cardExpiryInputProps = useMemo(() => ({onChange: setExpiry, value: values.expiry}), [setExpiry, values])
  const cardCVCInputProps = useMemo(() => ({onChange: setCVC, value: values.cvc}), [setCVC, values])

  useEffect(() => {
    setFieldValue('firstName', props.shippingFirstName)
    setFieldValue('lastName', props.shippingLastName)
  }, [props.shippingFirstName, props.shippingLastName, setFieldValue])

  return <FormikForm className={cn(styles.form, props.className)}>
    <div className="fields">
      <Input
        className="field"
        type="text"
        isErrorMessageHidden
        name="firstName"
        placeholder={t('firstName')}
      />

      <Input
        className="field"
        type="text"
        isErrorMessageHidden
        name="lastName"
        placeholder={t('lastName')}
      />

      <div className="card-details">
        <CreditCardInput
          cardNumberInputProps={cardNumberInputProps}
          cardExpiryInputProps={cardExpiryInputProps}
          cardCVCInputProps={cardCVCInputProps}
          fieldClassName="card-details-field"
        />
      </div>
    </div>

    <div className="buttons">
      <Button
        className="button"
        disabled={!isValid}
        isLoading={isSubmitting}
        isSubmit
        width="flex"
      >{t('confirmAndPay')}</Button>
    </div>
  </FormikForm>
}
