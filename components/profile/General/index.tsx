import * as R from 'ramda'
import * as Yup from 'yup'
import {useCallback, useContext, useMemo, useState} from 'react'
import cn from 'classnames'
import {Form} from './Form'
import {Formik} from 'formik'
import {ProfileLayout} from 'components/profile/common/ProfileLayout'
import styles from './index.css'
import UpdateCustomerMutation from './graphql/update-customer.graphql'
import {useMutation} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function General(props: {
  className?: string
}) {
  const {t} = useTranslation()
  const userCtx = useContext(UserContext)
  const [submitErrors, setSubmitErrors] = useState([])
  const [update] = useMutation(UpdateCustomerMutation)

  const submit = useCallback(async values => {
    setSubmitErrors([])

    try {
      const r = await update({variables: {
        customer: {
          acceptsMarketing: values.acceptsMarketing,
          email           : values.email,
          firstName       : values.firstName,
          lastName        : values.lastName,

          // Shopify doesn't accept empty string as phone
          ...values.phone ? {phone: values.phone} : {},
        },

        customerAccessToken: userCtx.accessToken,
      }})

      setSubmitErrors(R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerUpdate))
    } catch(e) {
      setSubmitErrors(R.compose(R.pluck('message'), R.pathOr([], ['graphQLErrors']))(e) || [t('profileUpdateFailed')])
    }
  }, [t, update, userCtx.accessToken])

  const initialValues = useMemo(() => ({
    acceptsMarketing: R.pathOr(false, ['user', 'acceptsMarketing'], userCtx),
    email           : R.pathOr('', ['user', 'email'], userCtx),
    firstName       : R.pathOr('', ['user', 'firstName'], userCtx),
    lastName        : R.pathOr('', ['user', 'lastName'], userCtx),
    phone           : R.pathOr('', ['user', 'phone'], userCtx),
  }), [userCtx])

  const validationSchema = useMemo(() => Yup.object().shape({
    email: Yup.string().email().required(),
    phone: Yup.string().matches(/^[0-9\+\-\(\) ]*$/, t('phoneNumberIsNotValid')),
  }), [t])

  return <ProfileLayout className={cn(styles.general, props.className)}>
    <div className="content">
      {!R.isEmpty(submitErrors) && <div className="error-message">
        {R.map(message => <div className="row" key={message}>{message}</div>, submitErrors)}
      </div>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        <Form className="form" />
      </Formik>
    </div>
  </ProfileLayout>
}
