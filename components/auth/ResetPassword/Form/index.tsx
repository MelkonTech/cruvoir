import {Form as FormikForm, useFormikContext} from 'formik'
import {Button} from 'components/common/Button'
import {Input} from 'components/common/form'
import {useTranslation} from 'i18n'

export function Form(props: {
  errorMessages: string[]
}) {
  const {isValid, isSubmitting} = useFormikContext()
  const {t} = useTranslation()

  return <FormikForm className="form">
    <div className="note span--2">{t('enterNewPassword')}</div>
    <Input className="field span--2" type="password" name="password" placeholder={t('password')} />
    <Input className="field span--2" type="password" name="password2" placeholder={t('confirmPassword')} />

    {props.errorMessages.length > 0 && <div className="error-message span--2">
      {props.errorMessages.map(message => <div className="row" key={message}>{message}</div>)}
    </div>}

    <Button
      className="button span--2"
      disabled={!isValid}
      isLoading={isSubmitting}
      isSubmit
      width="flex"
    >
      {t('setNewPassword')}
    </Button>
  </FormikForm>
}
