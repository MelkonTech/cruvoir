import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function Promo(props: {
  children: ReactNode
  className?: String
}) {
  return <div className={cn(styles.promo, props.className)}>{props.children}</div>
}
