import {useField, useFormikContext} from 'formik'
import {Field} from 'components/common/form/common/Field'
import Select from 'react-select'
import styles from './index.css'
import {useCallback} from 'react'

export function Autocomplete(props: {
  className?: string
  disabled?: boolean
  name: string
  options: {label: string, value: string}[]
  onChange?: (value: string) => void
  value: {label: string, value: string}
}) {
  const onChange = props.onChange
  const [field, meta] = useField(props.name)
  const {setFieldValue} = useFormikContext()

  const setValue = useCallback(obj => {
    setFieldValue(props.name, obj.value)

    if(typeof onChange === 'function')
      onChange(obj.value)
  }, [onChange, props.name, setFieldValue])

  return <Field
    isInvalid={meta.error && meta.touched}
    errorMessage={meta.error}
    className={props.className}
    disabled={props.disabled}
  >
    <Select
      className={styles.autocomplete}
      classNamePrefix="autocomplete"
      id={`select-${field.name}`}
      inputId={`input-${field.name}`}
      isDisabled={props.disabled}
      onChange={setValue}
      options={props.options}
      value={props.value}
    />
  </Field>
}
