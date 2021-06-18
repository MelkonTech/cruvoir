import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function Section(props: {
  children: ReactNode
  className?: string
  title: string
}) {
  return <div className={cn(styles.section, props.className)}>
    <h2 className="title">{props.title}</h2>
    {props.children}
  </div>
}
