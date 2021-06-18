import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function Header(props: {
  additionalContent?: ReactNode
  children: ReactNode
  className?: string
}) {
  return <div className={cn(styles.header, props.className)}>
    <h2 className="title">{props.children}</h2>
    {props.additionalContent}
  </div>
}
