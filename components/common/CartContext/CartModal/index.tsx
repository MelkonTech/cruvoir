import * as R from 'ramda'
import {useContext, useEffect} from 'react'
import {CartContext} from 'components/common/CartContext'
import {CartItem} from 'components/common/types'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Item} from './Item'
import {PopupCart} from 'components/common/CartContext/common/PopupCart'
import {useTranslation} from 'i18n'

export function CartModal(props: {
  close: () => void
  itemsCount: number
  items: CartItem[]
  removeProduct: (variantID: string) => void
  subtotal: number
  updateProduct: (params: {quantity: number, variantID: string}) => void
}) {
  const cartCtx = useContext(CartContext)
  const {t} = useTranslation()

  useEffect(
    () => {
      cartCtx.fetchInventoryQuantityOfProducts(R.map(R.path(['variant', 'product', 'id']), props.items))
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.items],
  )

  return <PopupCart
    subtotal={props.subtotal}
    close={props.close}
    counterValue={props.itemsCount}
    title={t('yourShoppingCart')}
  >
    {R.length(props.items) > 0 && <div className="content">
      {R.map(item => <Item
        className="item"
        removeProduct={props.removeProduct}
        updateProduct={props.updateProduct}
        key={item.id}
        cartItem={item}

        // Do not allow quantity going over the stock
        maxQuantity={R.pathOr(1, [item.variant.product.id, item.variant.id], cartCtx.inventoryQuantityOfProducts)}
      />, props.items)}
    </div>}

    {R.length(props.items) === 0 && <EmptyMessage className="empty-message">{t('emptyCartMessage')}</EmptyMessage>}
  </PopupCart>
}
