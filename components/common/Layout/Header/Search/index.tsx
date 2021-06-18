import * as R from 'ramda'
import {appendURLQueryParams, getUrlAs, getUrlHref, objectToFetchPostParams} from 'components/common/helpers'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import cn from 'classnames'
import fieldStyles from 'components/common/form/Input/index.css'
import {getGender} from 'components/common/helpers'
import {Icon} from 'components/common/Icon'
import styles from './index.css'
import {useClickOutside} from 'components/common/hooks'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'

export function Search(props: {
  className?: string
  close: () => void
  intactId: string
  isShown: boolean
  isBlogDomain?: boolean
}) {
  const {t} = useTranslation()
  const close = props.close
  const router = useRouter()
  const searchFieldRef = useRef(null)

  // Here and down below query check is required for tests
  const [searchValue, setSearchValue] = useState(decodeURI(R.pathOr('', ['query', 'search'], router).toString()))

  const urlBaseParams = useMemo(() => ({
    category   : R.pathOr(null, ['query', 'category'], router),
    collection : R.pathOr(null, ['query', 'collection'], router),
    gender     : getGender(router, props.isBlogDomain),
    subcategory: R.pathOr(null, ['query', 'subcategory'], router),
  }), [router, props.isBlogDomain])

  const submit = useCallback(
    () => {
      if(!R.isEmpty(searchFieldRef.current.value)) {
        setSearchValue(searchFieldRef.current.value)

        const queryParamsString = R.compose(
          objectToFetchPostParams,
          R.reject(R.anyPass([R.isEmpty, R.isNil])),
        )({
          search : searchFieldRef.current.value,
          tags   : R.pathOr(null, ['query', 'tags'], router),
          vendors: R.pathOr(null, ['query', 'vendors'], router),
        })

        router.push(
          appendURLQueryParams(getUrlHref(urlBaseParams), queryParamsString),
          appendURLQueryParams(getUrlAs(urlBaseParams), queryParamsString),
        ).then(() => window.scrollTo(0, 0))
      }
    },

    [router, urlBaseParams],
  )

  const submitSearchField = useCallback(
    e => {
      if(e.key === 'Enter')
        submit()
    },

    [submit],
  )

  const closeSearchField = useCallback(
    e => {
      if(e.key === 'Escape')
        close()
    },

    [close],
  )

  const clearSearchField = useCallback(
    () => {
      if(!R.isNil(R.pathOr(null, ['query', 'search'], router))) {
        const queryParamsString = R.compose(
          objectToFetchPostParams,
          R.reject(R.anyPass([R.isEmpty, R.isNil])),
        )({
          maxPrice: R.pathOr(null, ['query', 'maxPrice'], router),
          minPrice: R.pathOr(null, ['query', 'minPrice'], router),
          tags    : R.pathOr(null, ['query', 'tags'], router),
          vendors : R.pathOr(null, ['query', 'vendors'], router),
        })

        router.push(
          appendURLQueryParams(getUrlHref(urlBaseParams), queryParamsString),
          appendURLQueryParams(getUrlAs(urlBaseParams), queryParamsString),
        ).then(searchFieldRef.current.focus())
      }

      setSearchValue('')
    },

    [router, urlBaseParams],
  )

  const showClearSearchFieldButton = useCallback(
    event => {
      setSearchValue(event.currentTarget.value)
    },

    [],
  )

  const popupRef = useRef(null)
  useClickOutside({callback: close, intactId: props.intactId, reference: popupRef})

  useEffect(() => {
    if(props.isShown)
      setTimeout(() => {searchFieldRef.current.focus()}, 100)
  }, [props.isShown, searchFieldRef])

  return <div className={cn(styles.search, props.className)} ref={popupRef}>
    <div className={cn('button type--search')} onClick={submit}>
      <Icon className="icon" name="search" />
    </div>

    <div className={cn('field', fieldStyles.input)}>
      <input
        className="input"
        onChange={showClearSearchFieldButton}
        onKeyPress={submitSearchField}
        onKeyUp={closeSearchField}
        ref={searchFieldRef}
        type="search"
        value={searchValue}
      />

      <div className={cn('label', {'is-focused': searchValue})}>{t('whatAreYouLookingFor')}</div>
    </div>

    <button
      className={cn('button type--clear', {'is-shown': searchValue})}
      onClick={clearSearchField}
    >
      <Icon className="icon" name="cross-thin" />
    </button>

  </div>
}
