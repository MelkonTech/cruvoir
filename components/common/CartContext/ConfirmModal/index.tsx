import cn from 'classnames'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Image} from 'components/common/types'
import {PopupCart} from 'components/common/CartContext/common/PopupCart'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function ConfirmModal(props: {
  close: () => void
  itemsCount: number

  product: {
    title: string
    vendor: string
    image?: Image
  }

  subtotal: number
}) {
  const {t} = useTranslation()

  return <PopupCart
    subtotal={props.subtotal}
    close={props.close}
    counterValue={props.itemsCount}
    title={t('itSBeenAddedToYourBag')}
  >
    <div className="content">
      <div className={cn('item', styles.item)}>
        {props.product.image && <img
          className="image"
          src={props.product.image.transformedSrc}
          alt={props.product.image.altText}
        />}

        {!props.product.image && <EmptyMessage className="empty-message">{t('noImage')}</EmptyMessage>}
        <div className="vendor">{props.product.vendor}</div>
        <div className="title">{props.product.title}</div>
      </div>
    </div>
  </PopupCart>
}
