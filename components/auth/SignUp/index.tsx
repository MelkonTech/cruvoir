import * as R from 'ramda'
import * as Yup from 'yup'
import {useCallback, useContext, useState} from 'react'
import {AuthModal} from 'components/auth/common/AuthModal'
import {AuthModalContext} from 'components/common/AuthModalContext'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import {Form} from './Form'
import {Formik} from 'formik'
import SignUpMutation from './graphql/signup.graphql'
import {useMutation} from '@apollo/react-hooks'
import {useTranslation} from 'i18n'

export function SignUp() {
  const {t} = useTranslation()
  const [signUpErrors, setSignUpErrors] = useState([])
  const [isSignUpDone, setIsSignUpDone] = useState(false)
  const authModalCtx = useContext(AuthModalContext)
  const close = useCallback(() => authModalCtx.setActive(null), [authModalCtx])
  const showSignIn = useCallback(() => authModalCtx.setActive('signin'), [authModalCtx])
  const [signup] = useMutation(SignUpMutation)

  const validationSchema = Yup.object().shape({
    email    : Yup.string().email().required(),
    password : Yup.string().required(),
    password2: Yup.string().required().oneOf([Yup.ref('password'), null], t('passwordsMustMatch')),
  })

  const initialValues = {
    acceptsMarketing: false,
    email           : '',
    firstName       : '',
    lastName        : '',
    password        : '',
    password2       : '',
    phone           : '',
  }

  const submit = useCallback(async (values, actions) => {
    try {
      const r = await signup({variables: {
        input: {
          acceptsMarketing: values.acceptsMarketing,
          email           : values.email,
          firstName       : values.firstName,
          lastName        : values.lastName,
          password        : values.password,

          // Shopify doesn't accept empty string as phone
          ...values.phone ? {phone: values.phone} : {},
        },
      }})

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerCreate)

      if(R.length(errors))
        return setSignUpErrors(errors)

      actions.resetForm()
      return setIsSignUpDone(true)
    } catch(e) {
      return setSignUpErrors([t('signUpFailed')])
    }
  }, [signup, t])

  return <AuthModal close={close}>
    <div className="header">
      <button onClick={showSignIn} className="button">{t('signIn')}</button>
      <button className={cn('button', 'is-selected')}>{t('signUp')}</button>
    </div>

    <div className="content">
      {isSignUpDone
        ? <div className="form">
          <div className="note span--2">{t('signUpDone')}</div>
          <Button className="button span--2" onClick={showSignIn} width="flex">{t('signIn')}</Button>
        </div>

        : <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          <Form errorMessages={signUpErrors} />
        </Formik>
      }

      <button className="close-button" onClick={close} type="button">
        {t('cancel')}
      </button>
    </div>
  </AuthModal>
}
