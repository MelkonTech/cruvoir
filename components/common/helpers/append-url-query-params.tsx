import * as R from 'ramda'

// Append query params to a link which already has query params
export const appendURLQueryParams = (
  link: string, queryParamsString: string,
) => `${link.replace(/\?.*/, '')}?${R.compose(
  R.join('&'),
  R.filter(Boolean),
  R.concat([queryParamsString]),
  R.tail,
  R.split('?'),
)(link)}`
