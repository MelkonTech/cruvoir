import * as R from 'ramda'
import {CartItem, NormalizedCartItem} from 'components/common/types'
import {Image} from 'components/common/types'

export const normalizeCartItemForRead = (item: CartItem): NormalizedCartItem => ({
  compareAtPrice: R.path<string | number>(['amount'], item.variant.compareAtPriceV2),
  handle        : item.variant.product.handle,
  id            : item.id,

  image: R.compose(
    R.path<Image>(['node']),
    R.head,
  )(item.variant.product.images.edges),

  options  : item.variant.selectedOptions,
  price    : item.variant.priceV2.amount,
  quantity : item.quantity,
  title    : item.variant.product.title,
  variantID: item.variant.id,
  vendor   : item.variant.product.vendor,
})
