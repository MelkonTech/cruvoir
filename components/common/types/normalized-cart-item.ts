import {Image, VariantOption} from 'components/common/types'

export type NormalizedCartItem = {
  compareAtPrice: string | number
  handle: string
  id: string
  image: Image
  options: VariantOption[]
  price: string | number
  quantity: number
  title: string
  variantID: string
  vendor: string
}
