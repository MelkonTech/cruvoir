import {MouseEvent, ReactNode} from 'react'
import cn from 'classnames'
import NextLink from 'next/link'
import {useRouter} from 'next/router'

export function Link(props: {
  activeClassName?: string
  as?: string
  children: ReactNode
  className?: string
  isOpenInNewWindow?: boolean
  href: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  rel?: string
  title?: string
}) {
  const router = useRouter()

  return <NextLink {...props.as && {as: props.as}} href={props.href}>
    <a
      className={cn(props.className, {[props.activeClassName]: props.activeClassName && router.asPath === props.as})}
      rel={props.rel}
      onClick={props.onClick}
      {...props.isOpenInNewWindow && {target: '_blank'}}
      title={props.title}
    >{props.children}</a>
  </NextLink>
}
