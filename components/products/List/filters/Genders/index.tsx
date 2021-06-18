import * as R from 'ramda'
import {appendURLQueryParams, getUrlAs, getUrlHref, objectToFetchPostParams} from 'components/common/helpers'
import {CollapsableSection} from 'components/products/List/filters/common/CollapsableSection'
import {Fragment} from 'react'
import {Link} from 'components/common/Link'
import {useTranslation} from 'i18n'

export function Genders(props: {
  className?: string
  isWishListRequested?: boolean
  query: Record<string, string>
}) {
  const {t} = useTranslation()

  const queryParamsString = R.compose(
    objectToFetchPostParams,
    R.reject(R.anyPass([R.isEmpty, R.isNil])),
  )({search: props.query.search})

  return <CollapsableSection
    className={props.className}
    isCollapsed
    title={t('gender')}
  >
    <Fragment>
      {R.map(gender => <Link
        as={appendURLQueryParams(getUrlAs({
          collection         : props.query.collection,
          gender             : gender,
          isWishListRequested: props.isWishListRequested,
        }), queryParamsString)}

        className="link"

        href={appendURLQueryParams(getUrlHref({
          collection         : props.query.collection,
          gender             : gender,
          isWishListRequested: props.isWishListRequested,
        }), queryParamsString)}

        key={gender}
      >{t(gender)}</Link>, ['men', 'women'])}
    </Fragment>
  </CollapsableSection>
}
