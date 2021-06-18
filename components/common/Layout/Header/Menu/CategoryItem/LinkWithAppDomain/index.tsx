import getConfig from 'next/config'
import NextLink from 'next/link'
import {ReactNode} from 'react'
const {publicRuntimeConfig} = getConfig()

export function LinkWithAppDomain(props: {
  as: string
  children: ReactNode
  className?: string
  hasAppDomain?: boolean
  href: string
  onClick?: () => void
  title?: string
}) {
  return props.hasAppDomain
    ? <a
      className={props.className}
      href={`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}${props.as}`}
      onClick={props.onClick}
      title={props.title}
    >{props.children}</a>

    : <NextLink as={props.as} href={props.href}>
      <a className={props.className} onClick={props.onClick} title={props.title}>{props.children}</a>
    </NextLink>
}
