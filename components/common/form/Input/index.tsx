import cn from 'classnames'
import {Field} from 'components/common/form/common/Field'
import styles from './index.css'
import {useField} from 'formik'

export function Input(props: {
  className?: string
  disabled?: boolean
  isErrorMessageHidden?: boolean
  name: string
  placeholder?: string
  type: string
}) {
  const [field, meta] = useField(props.name)
  const isInvalid = meta.error && meta.touched

  return <Field
    className={props.className}
    disabled={props.disabled}
    errorMessage={meta.error}
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
  >
    <div className={styles.input}>
      <input
        {...field}
        className="input"
        disabled={props.disabled}
        placeholder={props.placeholder}
        type={props.type}
        value={field.value || ''}
      />

      {props.placeholder && <div className={cn('label', {'is-focused': field.value})}>{props.placeholder}</div>}
    </div>
  </Field>
}
