import * as R from 'ramda'
import {catalogHierarchy} from 'settings'

type Subcategory = {tags?: string[]}

export function findGenderInProductTags(tags: string[] | undefined): 'men' | 'women' {
  const productTags = R.map(R.toLower, tags || [])

  if(R.includes('women', productTags))
    return 'women'

  if(R.includes('men', productTags))
    return 'men'

  const menTags = R.compose(
    R.map(R.toLower),
    R.filter(Boolean),
    R.chain<Subcategory, string | undefined>(R.prop('tags')),
    R.chain<{subcategories: Subcategory[]}, Subcategory>(R.prop('subcategories')),
  )(catalogHierarchy.men.categories)

  if(R.length(R.intersection(productTags, menTags)) > 0)
    return 'men'

  return 'women'
}
