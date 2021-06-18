import {PrismicBlock} from './prismic-block'

export type Post = {
  author: string
  content: PrismicBlock[]
  date: string
  excerpt?: PrismicBlock[]
  related_collection?: string | null
  gallery?: {image: {large?: {url: string}, url: string}}[]
  id: string
  is_video_autoplayable?: boolean
  slug?: string
  tags?: string[]
  title: string
  uid?: string
  video?: {url: string}
}
