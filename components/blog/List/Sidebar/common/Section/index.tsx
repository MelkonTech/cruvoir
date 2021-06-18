import cn from 'classnames'
import {Header} from 'components/blog/common/Header'
import {ReactNode} from 'react'
import styles from './index.css'

export function Section(props: {
  children: ReactNode
  className?: string
  title: string
}) {
  return <div className={cn(styles.section, props.className)}>
    <Header className="title">{props.title}</Header>
    <div className={cn('list styled-scrollbar', props.className)}>{props.children}</div>
  </div>
}
