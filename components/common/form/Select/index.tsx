import {ChangeEvent, useCallback} from 'react'
import cn from 'classnames'
import {NativeSelect} from '../NativeSelect'
import {useField} from 'formik'

export function Select(props: {
  className?: string
  disabled?: boolean
  name: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  options: {value: string, label: string}[]
  isUppercase?: boolean
}) {
  const [field, meta] = useField(props.name)
  const isInvalid = meta.error && meta.touched

  const onChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    field.onChange(event)

    if(typeof props.onChange === 'function')
      props.onChange(event)
  }, [field, props])

  return <NativeSelect
    {...field}
    value={field.value || ''}
    className={cn(props.className, {'is-invalid': isInvalid, 'is-uppercased': props.isUppercase})}
    disabled={props.disabled}
    onChange={onChange}
    options={props.options}
    name={props.name}
    isInvalid={isInvalid}
    errorMessage={meta.error}
  />
}
