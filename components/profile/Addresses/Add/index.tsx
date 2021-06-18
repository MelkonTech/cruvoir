import * as R from 'ramda'
import {useCallback, useContext, useMemo, useState} from 'react'
import {addressValidationSchema} from 'components/profile/Addresses/common/helpers'
import {ApolloQueryResult} from 'apollo-client'
import cn from 'classnames'
import CreateCustomerAddressMutation from './graphql/create-customer-address.graphql'
import {Form} from 'components/profile/Addresses/common/Form'
import {Formik} from 'formik'
import styles from './index.css'
import {useMutation} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function Add(props: {
  addressesRefetch: (params?: any) => Promise<ApolloQueryResult<any>>
  className?: string
  cancel: () => void
}) {
  const {t} = useTranslation()
  const userCtx = useContext(UserContext)
  const [submitErrors, setSubmitErrors] = useState([])
  const [create] = useMutation(CreateCustomerAddressMutation)
  const cancel = props.cancel
  const addressesRefetch = props.addressesRefetch

  const submit = useCallback(async values => {
    let errors = []

    try {
      const r = await create({variables: {
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
      }})

      errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerAddressCreate)
    } catch(e) {
      errors = R.compose(
        R.pluck('message'), R.pathOr([], ['graphQLErrors']),
      )(e) || [t('creatingAShippingAddressFailed')]
    }

    if(R.isEmpty(errors)){
      await addressesRefetch()
      cancel()
    }

    else
      setSubmitErrors(errors)
  }, [addressesRefetch, cancel, create, t, userCtx.accessToken])

  const initialValues = {
    address1 : '',
    address2 : '',
    city     : '',
    country  : 'United States',
    firstName: '',
    lastName : '',
    phone    : '',
    province : '',
    zip      : '',
  }

  const validationSchema = useMemo(() => addressValidationSchema(t), [t])

  return <div className={cn(styles.creatingCustomerAddressForm, props.className)}>
    {!R.isEmpty(submitErrors) && <div className="error-message">
      {R.map(message => <div className="row" key={message}>{message}</div>, submitErrors)}
    </div>}

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      <Form className="form" cancel={cancel} isAdd />
    </Formik>
  </div>
}
