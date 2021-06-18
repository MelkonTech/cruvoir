import * as R from 'ramda'
import {findGenderInProductTags, normalizeCartItemForRead} from 'components/common/helpers'
import {useContext, useMemo} from 'react'
import {CartContext} from 'components/common/CartContext'
import {CartItem} from 'components/common/types'
import cn from 'classnames'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import {Quantity} from './Quantity'
import styles from './index.css'
import {translatedProductTitle} from 'components/common/helpers'
import {useTranslation} from 'i18n'

export function Row(props: {
  data: CartItem
  className?: string
}) {
  const {t, i18n} = useTranslation()
  const cartCtx = useContext(CartContext)
  const normalizeCartItem = useMemo(() => normalizeCartItemForRead(props.data), [props.data])

  const gender = useMemo(() => findGenderInProductTags(
    props.data.variant.product.tags,
  ), [props.data.variant.product.tags])

  const productTitle = translatedProductTitle({
    i18n,
    product: {handle: normalizeCartItem.handle, title: normalizeCartItem.title},
    t,
  })

  return <tr className={cn(styles.row, props.className)}>
    <td className="cell card">
      <div className="section">
        {normalizeCartItem.image
          ? <img alt={normalizeCartItem.image.altText} className="image" src={normalizeCartItem.image.transformedSrc} />
          : <EmptyMessage className="empty-message">{t('noImage')}</EmptyMessage>
        }

        <div className="content">
          <div className="vendor">{normalizeCartItem.vendor}</div>

          <Link
            as={`/${gender}/shop/item/${normalizeCartItem.vendor}/${normalizeCartItem.handle}`}
            className="title"
            // eslint-disable-next-line max-len
            href={`/[gender]/shop/item/[vendor]/[handle]?gender=${gender}&vendor=${normalizeCartItem.vendor}&handle=${normalizeCartItem.handle}`}
            title={productTitle}
          >{productTitle}</Link>
        </div>
      </div>
    </td>

    {(normalizeCartItem.options || []).map(o => <td key={o.name} className="cell option">
      {`${t(o.name)}: ${o.value}`}
    </td>)}

    <td className="cell field">
      <Quantity
        className="input"

        // Do not allow quantity going over the stock
        maxQuantity={
          R.pathOr(1, [props.data.variant.product.id, props.data.variant.id], cartCtx.inventoryQuantityOfProducts)
        }

        updateProduct={cartCtx.updateProduct}
        variantID={props.data.variant.id}
        value={props.data.quantity}
      />
    </td>

    <td className="cell price">
      <PriceWithCompareAt price={+props.data.variant.priceV2.amount * props.data.quantity} />
    </td>

    <td className="cell action">
      <button
        className="button"
        //eslint-disable-next-line react/jsx-no-bind
        onClick={() => cartCtx.removeProduct(props.data.variant.id)}
        title={t('remove')}
      >
        <Icon className="icon" name="cross" />
      </button>
    </td>
  </tr>
}
