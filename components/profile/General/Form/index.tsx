import {Checkbox, Input} from 'components/common/form'
import {Form as FormikForm, useFormikContext} from 'formik'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function Form(props: {
  className?: string
}) {
  const {t} = useTranslation()
  const {dirty, isValid, isSubmitting, resetForm} = useFormikContext()

  return <FormikForm className={cn(styles.form, props.className)}>
    <Input className="field" type="text" name="firstName" placeholder={`${t('name')} *`} />
    <Input className="field" type="text" name="lastName" placeholder={`${t('lastName')} *`} />
    <Input className="field" type="text" name="email" placeholder={`${t('email')} *`} />
    <Input className="field" type="text" name="phone" placeholder={`${t('supportedPhoneFormats')} *`} />
    <Checkbox caption={t('subscribeToTheNewsletter')} className="field" name="acceptsMarketing" />

    <div className="actions">
      <Button
        appearance="outline"
        className="button"
        disabled={!dirty}
        onClick={resetForm as () => void}
        width="flex"
      >
        {t('restoreForm')}
      </Button>

      <Button
        className="button"
        disabled={!isValid || !dirty}
        isLoading={isSubmitting}
        isSubmit
        width="flex"
      >
        {t('saveForm')}
      </Button>
    </div>
  </FormikForm>
}
