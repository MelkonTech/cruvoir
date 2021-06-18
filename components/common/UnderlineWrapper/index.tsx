import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function UnderlineWrapper(props: {
  children: ReactNode
  className?: string
  isPermanent?: boolean
}) {
  return <span className={cn(styles.underline, {'is-permanent': props.isPermanent}, props.className)}>
    {props.children}
  </span>
}
