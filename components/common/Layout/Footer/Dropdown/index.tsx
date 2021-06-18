import {useClickOutside, usePopup} from 'components/common/hooks'
import cn from 'classnames'
import {Link} from 'components/common/Link'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {useRef} from 'react'

export function Dropdown(props: {
  children: string
  className?: string
  intactId: string

  items: {
    href: string
    isHtmlLink?: boolean
    title: string
  }[]
}) {
  const popup = usePopup(false)
  const popupRef = useRef(null)
  useClickOutside({callback: popup.close, intactId: props.intactId, reference: popupRef})

  return <div className={cn(styles.dropdown, props.className)}>
    <div className={cn('popup', {'is-shown': popup.isShown})} ref={popupRef}>
      {props.items.map(item => item.isHtmlLink
        ? <a className="link" href={item.href} key={item.title}>{item.title}</a>

        : <Link
          className="link"
          href={item.href}
          key={item.title}
          onClick={popup.close}
        >
          {item.title}
        </Link>)}
    </div>

    <UnderlineWrapper className="link">
      <button className="button" data-intact-id={props.intactId} onClick={popup.toggle}>
        {props.children}
      </button>
    </UnderlineWrapper>
  </div>
}
