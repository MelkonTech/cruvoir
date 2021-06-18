import {Form as FormikForm, useFormikContext} from 'formik'
import {Button} from 'components/common/Button'
import {Input} from 'components/common/form'
import {MouseEvent} from 'react'
import {useTranslation} from 'i18n'

export function Form(props: {
  errorMessages: string[]
  showSignUp: (e: MouseEvent<HTMLButtonElement>) => void
}) {
  const {isValid, isSubmitting} = useFormikContext()
  const {t} = useTranslation()

  return <FormikForm className="form">
    <div className="note span--2">{t('forgotPassword.message')}</div>
    <Input className="field span--2" type="email" name="email" placeholder={t('email')} />

    {props.errorMessages.length > 0 && <div className="error-message span--2">
      {props.errorMessages.map(message => <div className="row" key={message}>{message}</div>)}
    </div>}

    <div className="note span--2">
      {t('newCustomer')}?
      {' '}
      <button className="text-button" onClick={props.showSignUp} type="button">{t('registerNow')}</button>
    </div>

    <Button
      className="button span--2"
      disabled={!isValid}
      isLoading={isSubmitting}
      isSubmit
      width="flex"
    >
      {t('restorePassword')}
    </Button>
  </FormikForm>
}
