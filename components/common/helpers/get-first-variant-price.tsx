import * as R from 'ramda'
import {Price} from 'components/common/types'
export const getFirstVariantPrice = (variants, priceType) => R.pathOr(null as Price, ['node', priceType], variants[0])
