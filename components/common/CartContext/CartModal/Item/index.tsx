import * as R from 'ramda'
import {ChangeEvent, useCallback, useMemo} from 'react'
import {findGenderInProductTags, normalizeCartItemForRead} from 'components/common/helpers'
import {CartItem} from 'components/common/types'
import cn from 'classnames'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import {NativeSelect} from 'components/common/form'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import styles from './index.css'
import {translatedProductTitle} from 'components/common/helpers'
import {useTranslation} from 'i18n'

export function Item(props: {
  cartItem: CartItem
  className?: string
  maxQuantity: number
  removeProduct: (variantID: string) => void
  updateProduct: (params: {quantity: number, variantID: string}) => void
}) {
  const {t, i18n} = useTranslation()
  const item = useMemo(() => normalizeCartItemForRead(props.cartItem), [props.cartItem])
  const removeProduct = props.removeProduct
  const updateProduct = props.updateProduct
  const remove = useCallback(() => removeProduct(item.variantID), [item.variantID, removeProduct])

  const update = useCallback((event: ChangeEvent<HTMLSelectElement>) => updateProduct({
    quantity : parseInt(event.currentTarget.value, 10),
    variantID: item.variantID,
  }), [item.variantID, updateProduct])

  const quantityOptions = useMemo(
    () => R.map(i => ({label: String(i), value: String(i)}))(R.range(1, props.maxQuantity + 1)),
    [props.maxQuantity],
  )

  const gender = useMemo(() => findGenderInProductTags(
    props.cartItem.variant.product.tags,
  ), [props.cartItem.variant.product])

  return <div className={cn(props.className, styles.item)}>
    {item.image
      ? <img className="image" src={item.image.transformedSrc} alt={item.image.altText} />
      : <EmptyMessage className="empty-message">{t('noImage')}</EmptyMessage>
    }

    <div className="content">
      <header className="header">
        <div className="vendor">{item.vendor}</div>

        <button className="button" onClick={remove} >
          <Icon className="icon" name="cross" />
        </button>
      </header>

      <Link
        as={`/${gender}/shop/item/${item.vendor}/${item.handle}`}
        href={`/[gender]/shop/item/[vendor]/[handle]?gender=${gender}&vendor=${item.vendor}&handle=${item.handle}`}
        className="title"
      >{translatedProductTitle({i18n, product: {handle: item.handle, title: item.title}, t})}</Link>

      {R.map(o => <div key={o.name} className="section">
        <div className="label">{`${t(o.name)}:`}</div>
        <div className="value">{o.value}</div>
      </div>, item.options || [])}

      <NativeSelect
        className="input"
        onChange={update}
        value={item.quantity}
        options={quantityOptions}
      />

      <PriceWithCompareAt
        className="price"
        compareAtPrice={item.compareAtPrice ? Number(item.compareAtPrice) * item.quantity : null}
        price={Number(item.price) * item.quantity}
      />
    </div>
  </div>
}
