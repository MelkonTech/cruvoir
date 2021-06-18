import * as R from 'ramda'
import {Language, POTerm} from 'components/common/types'
import {i18n} from 'i18n'

export const addTranslationsFromPO = (params: {
  i18n: typeof i18n
  lang: Language
  translations: POTerm[]
}) => params.i18n.addResources(
  params.lang,
  'common',

  R.compose<POTerm[], [string, string][], Record<string, string>>(
    R.fromPairs,
    R.map<POTerm, [string, string]>((term: POTerm) => [term.term, term.translation.content]),
  )(params.translations),
)
