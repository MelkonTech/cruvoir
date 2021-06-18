import {RefObject, useCallback} from 'react'
import {useClickOutside, usePopup} from 'components/common/hooks'
import cn from 'classnames'
import {FeaturedMenuItem} from 'components/common/types'
import {Icon} from 'components/common/Icon'
import {LinkWithAppDomain} from './LinkWithAppDomain'
import {useTranslation} from 'i18n'

export function CategoryItem(props: {
  as: string
  children: string
  close: () => void
  className?: string
  hasAppDomain: boolean
  href: string
  intactId: string
  items: FeaturedMenuItem[]
  popupRef: RefObject<Element>
}) {
  const {t} = useTranslation()
  const popup = usePopup()
  const close = props.close

  const popupClose = useCallback(() => {
    close()
    popup.close()
  }, [close, popup])

  useClickOutside({callback: close, intactId: props.intactId, reference: props.popupRef})

  return props.items.length
    ? <div className={cn('dropdown', props.className)}>
      <button className="button" onClick={popup.show}>
        {props.children}
        <Icon className="icon" name="next-arrow" />
      </button>

      <div className={cn('layer', {'is-shown': popup.isShown})}>
        <button className="link" onClick={popup.close}>
          <Icon className="icon" name="back-arrow" />
          <span className="title">{props.children}</span>
        </button>

        <hr className="divider" />

        {props.items.map(item => <LinkWithAppDomain
          /* eslint-disable-next-line max-len */
          as={`/${item.gender}/shop/collection/${item.collection}/category/${item.category}/subcategory/${item.subcategory}${item.tag ? `?tags=${item.tag}` : ''}`}
          className={cn('link', {'has-image': item.image})}
          hasAppDomain={props.hasAppDomain}
          /* eslint-disable-next-line max-len */
          href="/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]"
          key={`${item.title}/${item.collectionName}/${item.image || ''}`}
          onClick={popupClose}
        >
          {item.image && <div className="picture">
            <img
              alt={item.collectionName ? item.collectionName : t(item.title)}
              className="image"
              src={item.image}
            />
          </div>}

          <span className="title">{item.collectionName ? item.collectionName : t(item.title)}</span>
        </LinkWithAppDomain>)}
      </div>
    </div>

    : <LinkWithAppDomain
      as={props.as}
      className="link"
      hasAppDomain={props.hasAppDomain}
      href={props.href}
      onClick={props.close}
    >
      {props.children}
    </LinkWithAppDomain>
}
