import * as R from 'ramda'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import {objectToQueryString} from 'components/common/helpers'
import styles from './index.css'

export function Pagination(props: {
  className?: string
  page: number
  pathname: string
  query: Record<string, string>
  totalPages: number
}) {
  let linkAs: string
  const nextPageNum = Math.min(props.totalPages, props.page + 1)
  const prevPageNum = Math.max(1, props.page - 1)

  if(props.query.gender && props.query.month)
    linkAs = `/${props.query.gender}/${props.query.month}`

  else if(props.query.tagslug)
    linkAs = `/t/${props.query.tagslug}`

  else
    linkAs = '/'

  return <div className={cn(styles.pagination, props.className)}>
    <Link
      as={`${linkAs}?page=${prevPageNum}`}
      className={cn('link', {'is-disabled': props.page === 1})}
      href={`${props.pathname}?${objectToQueryString(R.assoc('page', prevPageNum, props.query))}`}
    >
      <Icon className="icon" name="arrow-left" />
    </Link>

    <Link
      as={`${linkAs}?page=${nextPageNum}`}
      className={cn('link', {'is-disabled': props.page === props.totalPages})}
      href={`${props.pathname}?${objectToQueryString(R.assoc( 'page', nextPageNum, props.query))}`}
    >
      <Icon className="icon" name="arrow-right" />
    </Link>
  </div>
}
