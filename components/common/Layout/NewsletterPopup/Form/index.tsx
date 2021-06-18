import {Form as FormikForm, useFormikContext} from 'formik'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import {Input} from 'components/common/form'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function Form(props: {
  className: string
  close: () => void
}) {
  const {isValid, isSubmitting} = useFormikContext()
  const {t} = useTranslation()

  return <FormikForm className={cn(styles.form, props.className)}>
    <div className="fields">
      <Input
        className="field"
        type="text"
        isErrorMessageHidden
        name="name"
        placeholder={t('name')}
      />

      <Input
        className="field"
        type="email"
        isErrorMessageHidden
        name="email"
        placeholder={t('email')}
      />
    </div>

    <div className="buttons">
      <Button
        appearance="outline"
        className="button"
        onClick={props.close}
        width="flex"
      >{t('noThanks')}</Button>

      <Button
        className="button"
        disabled={!isValid}
        isLoading={isSubmitting}
        isSubmit
        width="flex"
      >{t('signUp')}</Button>
    </div>
  </FormikForm>
}
