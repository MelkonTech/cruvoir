import * as R from 'ramda'
import * as Yup from 'yup'
import {Fragment, useCallback, useContext, useState} from 'react'
import {AuthModal} from 'components/auth/common/AuthModal'
import {AuthModalContext} from 'components/common/AuthModalContext'
import {Form} from './Form'
import {Formik} from 'formik'
import RecoverMutation from './graphql/recover.graphql'
import {useMutation} from '@apollo/react-hooks'
import {useTranslation} from 'i18n'

export function ForgotPassword() {
  const [isFormSubmitDone, setIsFormSubmitDone] = useState(false)
  const [submitErrors, setSubmitErrors] = useState([])
  const [recover] = useMutation(RecoverMutation)

  const {t} = useTranslation()
  const authModalCtx = useContext(AuthModalContext)
  const close = useCallback(() => authModalCtx.setActive(null), [authModalCtx])
  const showSignUp = useCallback(() => authModalCtx.setActive('signup'), [authModalCtx])

  const submit = useCallback(async (values, actions) => {
    try {
      const r = await recover({variables: values})

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerRecover)

      if(R.length(errors))
        return setSubmitErrors(errors)

      actions.resetForm()
      setIsFormSubmitDone(true)
    } catch(e) {
      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['graphQLErrors']),
      )(e)

      setSubmitErrors(errors || [t('recoverFailed')])
    }
  }, [recover, t])

  const initialValues = {'email': ''}
  const validationSchema = Yup.object().shape({email: Yup.string().email().required()})

  return <AuthModal close={close}>
    <div className="header">
      <h2 className="title">{t('forgotYourPassword')}</h2>
    </div>

    <div className="content">
      {isFormSubmitDone
        ? <div className="form">
          <div className="note span--2">{t('recoverPasswordEmailSent')}</div>
          <button className="button span--2" onClick={close} type="button">{t('close')}</button>
        </div>

        : <Fragment>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            <Form showSignUp={showSignUp} errorMessages={submitErrors} />
          </Formik>

          <button className="close-button" onClick={close} type="button">
            {t('cancel')}
          </button>
        </Fragment>
      }
    </div>
  </AuthModal>
}
