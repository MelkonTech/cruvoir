import * as R from 'ramda'
import {PrismicBlock} from 'components/common/types'

export const getHeroImagePath = R.compose<
  PrismicBlock[],
  PrismicBlock,
  string
>(R.propOr('', 'url'), R.find(R.propEq('type', 'image')))
