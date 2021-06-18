import * as R from 'ramda'
import {capfirst} from 'components/common/helpers'
import {catalogHierarchy} from 'settings'

// Returns product's gender, category and subcategory based on its tags
export const productPath = (tags: string[]): {category?: string, gender?: string, subcategory?: string} => {
  const gender = (R.find(tag => R.includes(tag.toLowerCase(), R.keys(catalogHierarchy)), tags) || '').toLowerCase()

  if(!gender)
    return {}

  const category = (R.find(
    tag => R.includes(tag && tag.toLowerCase(), R.pluck('title')(catalogHierarchy[gender].categories)),
    tags,
  ) || '').toLowerCase()

  const categoryObj: {subcategories: {tags: string[]}[]} = catalogHierarchy[gender]
    ? R.find<{
      subcategories: {tags: string[]}[]
      title: string
    }>(R.propEq('title', category), catalogHierarchy[gender].categories)

    : {subcategories: []}

  const subcategory: string = categoryObj
    ? (R.find(
      tag => R.includes(tag.toLowerCase(), R.compose<
        {tags: string[]}[],
        string[][],
        string[]
      >(R.flatten, R.pluck('tags'))(categoryObj.subcategories)),

      tags,
    ) || '').toLowerCase()

    : ''

  return {
    category   : capfirst(category),
    gender     : capfirst(gender),
    subcategory: capfirst(subcategory),
  }
}
