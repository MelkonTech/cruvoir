import * as R from 'ramda'
import {Gender} from 'components/common/types'

export const getGender = (router, isBlogDomain) => (
  isBlogDomain
    ? 'women'
    : R.pathOr('women', ['query', 'gender'], router).replace('all', 'women')
) as Gender
