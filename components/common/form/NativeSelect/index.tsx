import * as R from 'ramda'
import {capfirst} from 'components/common/helpers'
import {ChangeEvent} from 'react'
import cn from 'classnames'
import styles from './index.css'

export function NativeSelect(props: {
  className?: string
  disabled?: boolean
  errorMessage?: string
  isInvalid?: boolean
  name?: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: {value: string, label: string}[]
  value: string | number
}) {
  return <div className={cn(styles.select, props.className, {'is-disabled': props.disabled})}>
    <select
      className="input"
      disabled={props.disabled}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
    >
      {R.map(option => <option key={option.value} value={option.value}>{option.label}</option>, props.options)}
    </select>

    {props.isInvalid && props.errorMessage && <div className="error-message">{capfirst(props.errorMessage)}</div>}
  </div>
}
