import {useCallback, useContext} from 'react'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'
import {WishListContext} from 'components/common/WishListContext'

export function WishButton(props: {
  className: string
  productId: string
}) {
  const wishListCtx = useContext(WishListContext)

  const toggleThisProductFromWishList = useCallback(
    () => wishListCtx.isWished(props.productId)
      ? wishListCtx.remove(props.productId)
      : wishListCtx.add(props.productId),

    [props.productId, wishListCtx],
  )

  return <div
    className={cn(
      styles.wishButton,
      props.className,
      {'is-activated': wishListCtx.isWished(props.productId)},
    )}

    onClick={toggleThisProductFromWishList}
  >
    <Icon className="icon" name="wish" />
    <Icon className="icon" name="wish-fill" />
  </div>
}
