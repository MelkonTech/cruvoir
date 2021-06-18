import * as R from 'ramda'
import {useContext, useEffect, useMemo, useState} from 'react'
import {CartContext} from 'components/common/CartContext'
import {CartItem} from 'components/common/types'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {findGenderInProductTags} from 'components/common/helpers'
import {Layout} from 'components/common/Layout'
import {Row} from './Row'
import {Sidebar} from './Sidebar'
import styles from './index.css'
import {Suggestions} from 'components/common/Suggestions'
import {useTranslation} from 'i18n'

export function Cart(props: {
  userToken?: string | null
}) {
  const {t} = useTranslation()
  const cartCtx = useContext(CartContext)

  const [randomProductID, setRandomProductID] = useState<string>('')

  // Generate random product id only on the client-side, as there is no simple way to share it between client and server
  useEffect(() => {
    if(!randomProductID)
      setRandomProductID(
        R.compose(
          R.nth(Math.floor(Math.random() * cartCtx.cartItems.length)),
          R.map<CartItem, string>(i => i.variant.product.id),
        )(cartCtx.cartItems),
      )
  }, [cartCtx.cartItems, randomProductID])

  const isEmpty = useMemo(() => R.length(cartCtx.cartItems) === 0, [cartCtx.cartItems])

  useEffect(
    () => {
      cartCtx.fetchInventoryQuantityOfProducts(R.map(R.path(['variant', 'product', 'id']), cartCtx.cartItems))
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartCtx.cartItems],
  )

  return <Layout className={styles.cart}>
    <h1 className="title">{t('myShoppingBag')}</h1>

    {isEmpty && <EmptyMessage className="empty-message">
      {t('emptyCartMessage')}
    </EmptyMessage>}

    {!isEmpty && <div className="section">
      <div className="list styled-scrollbar">
        <table className="table">
          <tbody className="body">
            {R.map(item => <Row key={item.id} className="row" data={item} />, cartCtx.cartItems)}
          </tbody>
        </table>
      </div>

      <Sidebar
        applyPromoCode={cartCtx.applyPromoCode}
        discount={cartCtx.discount}
        removePromoCode={cartCtx.removePromoCode}
        className="sidebar"
        gender={findGenderInProductTags(cartCtx.cartItems[0].variant.product.tags)}
        subtotal={cartCtx.subtotal}
        total={cartCtx.total}
        userToken={props.userToken}
      />
    </div>}

    <Suggestions className="suggestions" productId={randomProductID} />
  </Layout>
}
