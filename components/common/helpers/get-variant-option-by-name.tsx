import * as R from 'ramda'
import {Variant} from 'components/common/types/variant'

export const getVariantOptionByName = (name: string, variant: Variant): string | number => R.pathOr(
  null,
  ['value'],
  R.find(option => option.name === name, variant.selectedOptions),
)
