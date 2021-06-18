import {CSSProperties, MouseEvent, ReactNode} from 'react'
import cn from 'classnames'
import {Icon as IconType} from 'components/common/types'
import styles from './index.css'

export function Button(props: {
  appearance?: 'outline' | 'transparent'
  children?: ReactNode
  className?: string
  disabled?: boolean
  disabledMessage?: string
  icon?: IconType
  intactId?: string
  isLoading?: boolean
  isSubmit?: boolean
  noFill?: boolean
  onClick?: (event: MouseEvent) => void | Promise<any>
  width?: 'narrow' | 'flex'
}) {
  return <button
    className={cn(
      styles.button,
      props.className,
      `appearance--${props.appearance || 'fill'}`,
      `width--${props.width || 'regular'}`,

      {
        'has-icon'   : props.icon,
        'is-disabled': props.disabled || props.isLoading,
        'is-loading' : props.isLoading,
      },
    )}

    disabled={props.disabled || props.isLoading}
    data-intact-id={props.intactId}
    onClick={props.onClick}
    style={{'--icon': `var(--icon--image-${props.icon})`} as CSSProperties}
    type={props.isSubmit ? 'submit' : 'button'}
  >
    <span className="background">{props.disabled && props.disabledMessage || props.children}</span>
    <span className="foreground" aria-hidden>{props.disabled && props.disabledMessage || props.children}</span>
  </button>
}
