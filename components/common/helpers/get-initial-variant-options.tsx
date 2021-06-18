import * as R from 'ramda'
import {VariantOption} from 'components/common/types'

export const getInitialVariantOptions = variants => R.reduce(
  (obj, option: VariantOption) => R.assoc(option.name, option.value, obj),
  {},
  R.pathOr([], ['node', 'selectedOptions'], variants[0]),
)
