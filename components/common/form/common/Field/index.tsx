import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function Field(props: {
  children: ReactNode
  className?: string
  disabled?: boolean
  errorMessage?: string
  isErrorMessageHidden?: boolean
  isInvalid?: boolean
}) {
  return <div
    className={cn(styles.field, props.className, {'is-disabled': props.disabled, 'is-invalid': props.isInvalid})}
  >
    {props.children}

    {props.isInvalid && props.errorMessage && !props.isErrorMessageHidden && <div className="error-message">
      {props.errorMessage}
    </div>}
  </div>
}
