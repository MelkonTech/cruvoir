import cn from 'classnames'
import {Layout} from 'components/common/Layout'
import {ReactNode} from 'react'
import styles from './index.css'

export function HomeLayout(props: {
  children: ReactNode
  className?: string
}) {
  return <Layout className={cn(styles.homeLayout, props.className)}>
    {props.children}
  </Layout>
}
