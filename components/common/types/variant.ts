import {Price} from './price'
import {Product} from './product'
import {VariantOption} from './variant-option'

export interface Variant {
  id: string
  availableForSale: boolean
  compareAtPriceV2?: Price
  inventoryQuantity?: number
  selectedOptions: VariantOption[]
  priceV2: Price
  product: Product
}
