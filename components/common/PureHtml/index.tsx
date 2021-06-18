import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function PureHtml(props: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn(styles.pureHtml, props.className)}>
    {props.children}
  </div>
}
