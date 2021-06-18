import * as R from 'ramda'
import {appendURLQueryParams, getUrlAs, getUrlHref, objectToFetchPostParams} from 'components/common/helpers'
import {Fragment, useMemo} from 'react'
import {camelToDash} from 'components/common/helpers'
import {catalogHierarchy} from 'settings'
import {CheckboxGroup} from 'components/products/List/filters/common/CheckboxGroup'
import cn from 'classnames'
import {CollapsableSection} from 'components/products/List/filters/common/CollapsableSection'
import {Link} from 'components/common/Link'
import {useTranslation} from 'i18n'

export function Category(props: {
  className?: string
  isWishListRequested?: boolean
  query: Record<string, string>
}) {
  const {t} = useTranslation()

  const subcategories = useMemo(() => R.compose(
    R.pathOr([], ['subcategories']),
    R.find(R.propEq('title', props.query.category)),
  )(catalogHierarchy[props.query.gender].categories), [props.query])

  const tags = useMemo(() => R.compose(
    R.pathOr([], ['tags']),
    R.find(R.propEq('title', props.query.subcategory)),
  )(subcategories), [props.query.subcategory, subcategories])

  const queryParamsString = R.compose(
    objectToFetchPostParams,
    R.reject(R.anyPass([R.isEmpty, R.isNil])),
  )({search: props.query.search})

  if(props.query.subcategory !== 'all' && !R.isEmpty(tags))
    return <CheckboxGroup
      className={props.className}
      name="tags"
      title={t('categories')}

      variants={R.map(tag => ({
        title: tag,
        value: camelToDash(tag),
      }), tags)}
    />

  return <CollapsableSection
    className={props.className}
    title={t('categories')}
  >
    {(props.query.category === 'all' || R.isEmpty(subcategories)) && <Fragment>
      {R.map(
        (category: {title: string}) => {
          const linkParams = {
            category           : camelToDash(category.title),
            collection         : props.query.collection,
            gender             : props.query.gender,
            isWishListRequested: props.isWishListRequested,
          }

          return <Link
            as={appendURLQueryParams(getUrlAs(linkParams), queryParamsString)}
            className={cn('link', {'is-selected': camelToDash(category.title) === props.query.category})}
            href={appendURLQueryParams(getUrlHref(linkParams), queryParamsString)}
            key={category.title}
          >{t(category.title)}</Link>
        },

        catalogHierarchy[props.query.gender].categories,
      )}
    </Fragment>}

    {props.query.category !== 'all' && (props.query.subcategory === 'all' || R.isEmpty(tags)) && <Fragment>
      {R.map(
        (subcategory: {title: string}) => {
          const linkParams = {
            category           : camelToDash(props.query.category),
            collection         : props.query.collection,
            gender             : props.query.gender,
            isWishListRequested: props.isWishListRequested,
            subcategory        : camelToDash(subcategory.title),
          }

          return <Link
            as={appendURLQueryParams(getUrlAs(linkParams), queryParamsString)}
            className={cn('link', {'is-selected': camelToDash(subcategory.title) === props.query.subcategory})}
            href={appendURLQueryParams(getUrlHref(linkParams), queryParamsString)}
            key={subcategory.title}
          >{t(subcategory.title)}</Link>
        },

        subcategories,
      )}
    </Fragment>}
  </CollapsableSection>
}
