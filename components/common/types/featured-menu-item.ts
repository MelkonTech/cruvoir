import {Gender} from 'components/common/types'

export type FeaturedMenuItem = {
  category: string
  collection: string
  collectionName?: string
  gender: Gender
  image?: string
  subcategory: string
  tag?: string[]
  title: string
  url?: string
}
