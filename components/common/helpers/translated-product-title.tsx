import {Product} from 'components/common/types'

// If title translation exists for current language returns it, ottherwise returns default english title
export const translatedProductTitle = (params: {
  i18n: {exists: (string) => boolean}
  product: Pick<Product, 'handle' | 'title'>
  t: (string) => string
}) => {
  const translationKey = `productTitle-${params.product.handle}`
  return params.i18n.exists(translationKey) ? params.t(translationKey) : params.product.title
}
