import * as R from 'ramda'

export const objectToQueryString = (object: Record<string, string | number>) => R.map(
  value => `${value[0]}=${encodeURIComponent(value[1])}`,
  R.toPairs(object),
).join('&')
