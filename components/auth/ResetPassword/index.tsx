import * as R from 'ramda'
import * as Yup from 'yup'
import {useCallback, useContext, useState} from 'react'
import {AuthModal} from 'components/auth/common/AuthModal'
import {Form} from './Form'
import {Formik} from 'formik'
import {Layout} from 'components/common/Layout'
import ResetMutation from './graphql/reset.graphql'
import {useMutation} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'

export function ResetPassword(props: {asPath: string}) {
  const router = useRouter()
  const {t} = useTranslation()
  const [reset] = useMutation(ResetMutation)
  const [submitErrors, setSubmitErrors] = useState([])
  const userCtx = useContext(UserContext)
  const close = useCallback(() => router.push('/'), [router])

  const submit = useCallback(async (values, actions) => {
    try {
      const r = await reset({variables: {
        password: values.password,
        resetUrl: `https://cruvoir.com${props.asPath}`,
      }})

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerResetByUrl)

      if(R.length(errors))
        return setSubmitErrors(errors)

      userCtx.saveToken({
        expiresAt: new Date(r.data.customerResetByUrl.customerAccessToken.expiresAt),
        token    : r.data.customerResetByUrl.customerAccessToken.accessToken,
      })

      actions.resetForm()
      await close()
    } catch(e) {
      console.error(e)

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['graphQLErrors']),
      )(e)

      setSubmitErrors(errors || [t('recoverFailed')])
    }
  }, [close, props.asPath, reset, t, userCtx])

  const initialValues = {
    password : '',
    password2: '',
  }

  const validationSchema = Yup.object().shape({
    password : Yup.string().required(),
    password2: Yup.string().required().oneOf([Yup.ref('password'), null], t('passwordsMustMatch')),
  })

  return <Layout>
    <AuthModal close={close}>
      <div className="header">
        <h2 className="title">{t('resetYourPassword')}</h2>
      </div>

      <div className="content">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          <Form errorMessages={submitErrors} />
        </Formik>

        <button className="close-button" onClick={close} type="button">
          {t('cancel')}
        </button>
      </div>
    </AuthModal>
  </Layout>
}
