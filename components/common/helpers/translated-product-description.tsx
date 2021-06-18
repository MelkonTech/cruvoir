import {Product} from 'components/common/types'

// If description translation exists for current language returns it, ottherwise returns default english description
export const translatedProductDescription = (params: {
  i18n: {exists: (string) => boolean}
  product: Product
  t: (string) => string
}) => {
  const translationKey = `productDescription-${params.product.handle}`
  return params.i18n.exists(translationKey) ? params.t(translationKey) : params.product.descriptionHtml
}
