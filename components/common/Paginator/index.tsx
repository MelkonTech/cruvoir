import * as R from 'ramda'
import {appendURLQueryParams, objectToFetchPostParams} from 'components/common/helpers'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import styles from './index.css'
import {useMemo} from 'react'

export function Paginator(props: {
  className?: string
  nextLinkAs?: string
  nextLinkHref?: string
  previousLinkAs?: string
  previousLinkHref?: string
  queryParams?: any
}) {
  const queryParamsString = useMemo(() => R.compose(
    objectToFetchPostParams,
    R.filter(Boolean),
  )(props.queryParams || {}), [props.queryParams])

  return <div className={cn(styles.paginator, props.className)}>
    <Link
      className={cn('link', {'is-disabled': !props.previousLinkAs})}
      as={props.previousLinkAs ? appendURLQueryParams(props.previousLinkAs, queryParamsString) : ''}
      href={props.previousLinkHref ? appendURLQueryParams(props.previousLinkHref, queryParamsString) : ''}
    >
      <Icon name="arrow-left" />
    </Link>

    <Link
      className={cn('link', {'is-disabled': !props.nextLinkAs})}
      as={props.nextLinkAs ? appendURLQueryParams(props.nextLinkAs, queryParamsString) : ''}
      href={props.nextLinkHref ? appendURLQueryParams(props.nextLinkHref, queryParamsString) : ''}
    >
      <Icon name="arrow-right" />
    </Link>
  </div>
}
