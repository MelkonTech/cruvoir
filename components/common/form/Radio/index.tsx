import {ChangeEvent, ReactNode, useCallback} from 'react'
import {Field as FormikField, useField} from 'formik'
import {Field} from 'components/common/form/common/Field'
import styles from './index.css'

export function Radio(props: {
  className?: string
  disabled?: boolean
  isErrorMessageHidden?: boolean
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  caption: string | ReactNode
  value?: any
}) {
  const [field, meta] = useField(props.name)
  const isInvalid = meta.error && meta.touched

  const change = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event)

    if(typeof props.onChange === 'function')
      props.onChange(event)
  }, [field, props])

  return <Field
    className={props.className}
    disabled={props.disabled}
    errorMessage={meta.error}
    isErrorMessageHidden={props.isErrorMessageHidden}
    isInvalid={isInvalid}
  >
    <label className={styles.radio}>
      <FormikField
        {...field}
        className="input"
        disabled={props.disabled}
        onChange={change}
        type="radio"
        name={props.name}
        value={props.value}
      />

      <span className="caption">{props.caption}</span>
    </label>
  </Field>
}
