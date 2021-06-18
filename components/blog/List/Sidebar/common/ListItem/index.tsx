import cn from 'classnames'
import {Link} from 'components/common/Link'
import {ReactNode} from 'react'
import styles from './index.css'

export function ListItem(props: {
  as: string
  children: ReactNode
  className?: string
  href: string
}) {
  return <Link
    as={props.as}
    className={cn(styles.listItem, props.className)}
    href={props.href}
  >
    {props.children}
  </Link>
}
