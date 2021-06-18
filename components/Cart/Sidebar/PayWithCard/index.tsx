import * as R from 'ramda'
import * as Yup from 'yup'
import {useCallback, useMemo, useState} from 'react'
import cn from 'classnames'
import CompleteCheckout from './graphql/complete-checkout.graphql'
import {Form} from './Form'
import {Formik} from 'formik'
import moment from 'moment'
import {Portal} from 'components/common/Portal'
import {ShippingAddress} from 'components/common/types'
import styles from './index.css'
import {useMutation} from '@apollo/react-hooks'
import {useTranslation} from 'i18n'

export function PayWithCard(props: {
  checkoutId: string
  onSuccess?: (paymentSessionId: string) => void
  popup: {hide: () => void, isShown: boolean, show: () => void}
  shippingAddress: ShippingAddress
  total: number
}) {
  const {t} = useTranslation()
  const [error, setError] = useState<string>(null)
  const [completeCheckout] = useMutation(CompleteCheckout)

  const initialValues = useMemo(() => ({
    firstName: props.shippingAddress.firstName,
    lastName : props.shippingAddress.lastName,
  }), [props.shippingAddress.firstName, props.shippingAddress.lastName])

  const pay = useCallback(async values => {
    setError(null)

    // Create the payment session (payment intent in terms of Stripe)
    const paymentSessionId = R.propOr<null, {paymentSessionId: string}, null>(
      null,
      'paymentSessionId',

      await (await fetch('/api/payment/create', {
        body: JSON.stringify({
          amount    : props.total,
          checkoutId: props.checkoutId,

          creditCard: {
            first_name        : values.firstName,
            last_name         : values.lastName,
            month             : values.expiry.split('/')[0].trim(),
            number            : values.number.replace(/\s+/gi, ''),
            verification_value: values.cvc,
            year              : values.expiry.split('/')[1].trim(),
          },
        }),

        headers: {accept: 'application/json', 'content-type': 'application/json'},
        method : 'POST',
      })).json(),
    )

    if(!paymentSessionId) {
      setError('Error while processing the payment. Please check the card details or try again later.')
      return
    }

    const completeCheckoutResponse = await completeCheckout({variables: {
      checkoutId: props.checkoutId,

      payment: {
        billingAddress: {
          address1 : props.shippingAddress.address1,
          city     : props.shippingAddress.city,
          country  : props.shippingAddress.country,
          firstName: props.shippingAddress.firstName,
          lastName : props.shippingAddress.lastName,
          province : props.shippingAddress.province,
          zip      : props.shippingAddress.zip,
        },

        idempotencyKey: moment().valueOf().toString(),
        paymentAmount : {amount: props.total, currencyCode: 'USD'},
        paymentData   : paymentSessionId,
        type          : 'VAULT',
      },
    }})

    if(!R.path(['data', 'checkoutCompleteWithTokenizedPaymentV3', 'payment', 'id'], completeCheckoutResponse)) {
      setError(R.path(
        ['data', 'checkoutCompleteWithTokenizedPaymentV3', 'checkoutUserErrors', '0', 'message'],
        completeCheckoutResponse,
      ))

      return
    }

    props.popup.hide()
    props.onSuccess(paymentSessionId)
  }, [completeCheckout, props])

  const validationSchema = Yup.object().shape({
    cvc      : Yup.string().length(3).required(),
    expiry   : Yup.string().length(7).required(),
    firstName: Yup.string().required(),
    lastName : Yup.string().required(),
    number   : Yup.string().min(14).required(),
  })

  return <Portal selector="#portal-root">
    <div className={cn(styles.paywithcardPopup, {'is-shown': props.popup.isShown})}>
      <div className="section">
        <h2 className="title">{t('paymentDetails')}</h2>
        <div style={{color: 'red', fontSize: 12, marginBottom: 8, textAlign: 'center'}}>{error}</div>

        <Formik
          initialValues={initialValues}
          isInitialValid={false}
          validationSchema={validationSchema}
          onSubmit={pay}
        >
          <Form
            className="form"
            close={props.popup.hide}
            shippingFirstName={props.shippingAddress.firstName}
            shippingLastName={props.shippingAddress.lastName}
          />
        </Formik>
      </div>

      <button className="close-button" onClick={props.popup.hide} type="button">
        {t('cancel')}
      </button>
    </div>
  </Portal>
}
