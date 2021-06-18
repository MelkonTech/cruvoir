import {Checkbox, Input} from 'components/common/form'
import {Form as FormikForm, useFormikContext} from 'formik'
import {Button} from 'components/common/Button'
import {useTranslation} from 'i18n'

export function Form(props: {
  errorMessages: string[]
}) {
  const {isValid, isSubmitting} = useFormikContext()
  const {t} = useTranslation()

  return <FormikForm className="form">
    <Input className="field span--1" type="text" name="firstName" placeholder={t('name')} />
    <Input className="field span--1" type="text" name="lastName" placeholder={t('lastName')} />
    <Input className="field span--2" type="email" name="email" placeholder={t('email')} />
    <Input className="field span--2" type="tel" name="phone" placeholder={t('phone')} />
    <Input className="field span--2" type="password" name="password" placeholder={t('password')} />
    <Input className="field span--2" type="password" name="password2" placeholder={t('confirmPassword')} />
    <Checkbox className="field span--2" caption={t('get10OffWhenYouSignUp')} name="acceptsMarketing" />

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
      {t('createAccount')}
    </Button>
  </FormikForm>
}
