import * as R from 'ramda'

// param1=value1&param2=value2
export const objectToFetchPostParams = (object: Record<string, string | number>) => R.join('&')(R.map(
  R.join('='),
  R.toPairs(object),
))
