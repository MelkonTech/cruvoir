import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function PageAnimation(props: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn(styles.pageAnimation, props.className)}>
    {props.children}
  </div>
}
