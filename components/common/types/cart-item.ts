import {Variant} from 'components/common/types'

export type CartItem = {
  id: string
  quantity: number
  title: string
  variant: Variant
}
