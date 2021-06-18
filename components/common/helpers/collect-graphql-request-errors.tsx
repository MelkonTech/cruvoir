import * as R from 'ramda'

export const collectGraphqlRequestErrors = error => R.is(String, error)
  ? error

  : R.pluck(
    'message',
    R.pathOr([], ['result', 'errors'], error.networkError).concat(error.graphQLErrors || []),
  )
