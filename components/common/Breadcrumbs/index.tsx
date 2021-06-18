import * as R from 'ramda'
import cn from 'classnames'
import {Link} from 'components/common/Link'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'


export function Breadcrumbs(props: {
  className?: string
  isLastCrumbHidden?: boolean

  items: {
    as?: string
    href?: string
    title: string
  }[]
}) {
  return <div className={cn(styles.breadcrumbs, props.className)}>
    {(props.isLastCrumbHidden ? R.init(props.items) : props.items).map(
      item => <span key={item.title} className="item">
        {item.href
          ? <UnderlineWrapper>
            <Link as={item.as} href={item.href}>{item.title}</Link>
          </UnderlineWrapper>

          : <span>{item.title}</span>
        }

        <span>{' / '}</span>
      </span>,
    )}
  </div>
}
