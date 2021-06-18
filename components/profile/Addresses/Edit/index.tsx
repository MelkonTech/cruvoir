import * as R from 'ramda'
import {useCallback, useContext, useMemo, useState} from 'react'
import {addressValidationSchema} from 'components/profile/Addresses/common/helpers'
import {ApolloQueryResult} from 'apollo-client'
import cn from 'classnames'
import {Form} from 'components/profile/Addresses/common/Form'
import {Formik} from 'formik'
import {ShippingAddress} from 'components/common/types'
import styles from './index.css'
import UpdateCustomerAddressMutation from './graphql/update-customer-address.graphql'
import {useMutation} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function Edit(props: {
  address: ShippingAddress
  addressesRefetch: (params?: any) => Promise<ApolloQueryResult<any>>
  cancel: () => void
  className?: string
}) {
  const {t} = useTranslation()
  const userCtx = useContext(UserContext)
  const [submitErrors, setSubmitErrors] = useState([])
  const [update] = useMutation(UpdateCustomerAddressMutation)
  const addressId = props.address.id
  const cancel = props.cancel
  const addressesRefetch = props.addressesRefetch

  const submit = useCallback(async values => {
    let errors = []

    try {
      const r = await update({variables: {
        address: {
          address1 : values.address1,
          address2 : values.address2,
          city     : values.city,
          company  : values.company,
          country  : values.country,
          firstName: values.firstName,
          lastName : values.lastName,
          phone    : values.phone,
          province : values.province,
          zip      : values.zip,

          // Shopify doesn't accept empty string as phone
          ...values.phone ? {phone: values.phone} : {},
        },

        customerAccessToken: userCtx.accessToken,
        id                 : addressId,
      }})

      errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerAddressUpdate)
    } catch(e) {
      errors = R.compose(
        R.pluck('message'), R.pathOr([], ['graphQLErrors']),
      )(e) || [t('updatingAShippingAddressFailed')]
    }

    if(R.isEmpty(errors)) {
      await addressesRefetch()
      cancel()
    }

    else
      setSubmitErrors(errors)
  }, [addressesRefetch, addressId, cancel, update, t, userCtx.accessToken])

  const initialValues = {
    address1 : props.address.address1,
    address2 : props.address.address2,
    city     : props.address.city,
    country  : props.address.country,
    firstName: props.address.firstName,
    lastName : props.address.lastName,
    phone    : props.address.phone,
    province : props.address.province,
    zip      : props.address.zip,
  }

  const validationSchema = useMemo(() => addressValidationSchema(t), [t])

  return <div className={cn(styles.updatingCustomerAddressForm, props.className)}>
    {!R.isEmpty(submitErrors) && <div className="error-message">
      {R.map(message => <div className="row" key={message}>{message}</div>, submitErrors)}
    </div>}

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      <Form className="form" cancel={cancel} />
    </Formik>
  </div>
}
