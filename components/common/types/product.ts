import {Image} from './image'
import {Option} from './option'
import {Price} from './price'
import {Variant} from './variant'

export interface Product {
  id: string
  descriptionHtml?: string
  handle: string
  productType?: string
  tags?: string[]
  title: string
  vendor: string

  options?: Option[]

  priceRange?: {
    minVariantPrice: Price
  }

  images: {
    edges: {
      node: Image
    }[]
  }

  variants?: {
    edges: {
      node: Variant
    }[]
  }
}
