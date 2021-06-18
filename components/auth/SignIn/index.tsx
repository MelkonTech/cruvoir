import * as R from 'ramda'
import * as Yup from 'yup'
import {useCallback, useContext, useState} from 'react'
import {AuthModal} from 'components/auth/common/AuthModal'
import {AuthModalContext} from 'components/common/AuthModalContext'
import cn from 'classnames'
import {Form} from './Form'
import {Formik} from 'formik'
import SignIpMutation from './graphql/signin.graphql'
import {useMutation} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function SignIn() {
  const {t} = useTranslation()
  const [signInErrors, setSignInErrors] = useState([])
  const authModalCtx = useContext(AuthModalContext)
  const close = useCallback(() => authModalCtx.setActive(null), [authModalCtx])
  const showSignUp = useCallback(() => authModalCtx.setActive('signup'), [authModalCtx])
  const showForgot = useCallback(() => authModalCtx.setActive('forgot'), [authModalCtx])
  const [signin] = useMutation(SignIpMutation)
  const userCtx = useContext(UserContext)

  const submit = useCallback(async (values, actions) => {
    try {
      const r = await signin({variables: {input: R.omit(['rememberMe'], values)}})

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerAccessTokenCreate)

      if(R.length(errors))
        return setSignInErrors(errors)

      const expiresAt = new Date(r.data.customerAccessTokenCreate.customerAccessToken.expiresAt)
      const token = r.data.customerAccessTokenCreate.customerAccessToken.accessToken
      userCtx.saveToken({expiresAt: values.rememberMe ? expiresAt : null, token: token})
      actions.resetForm()
      close()
    } catch(e) {
      return setSignInErrors([t('signInFailed')])
    }
  }, [close, signin, t, userCtx])

  const validationSchema = Yup.object().shape({
    email   : Yup.string().email().required(),
    password: Yup.string().required(),
  })

  const initialValues = {
    email     : '',
    password  : '',
    rememberMe: false,
  }

  return <AuthModal close={close}>
    <div className="header">
      <button className={cn('button', 'is-selected')}>{t('signIn')}</button>
      <button onClick={showSignUp} className="button">{t('signUp')}</button>
    </div>

    <div className="content">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        <Form errorMessages={signInErrors} showForgot={showForgot}/>
      </Formik>

      <button className="close-button" onClick={close} type="button">
        {t('cancel')}
      </button>
    </div>
  </AuthModal>
}
