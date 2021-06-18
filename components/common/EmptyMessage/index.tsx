import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function EmptyMessage(props: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn(styles.emptyMessage, props.className)}>
    {props.children}
  </div>
}
