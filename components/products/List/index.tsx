import * as R from 'ramda'
import * as Yup from 'yup'

import {
  appendURLQueryParams, dashToCamel, getGender, getUrlAs, getUrlHref, nameToHandle, objectToFetchPostParams,
  shopifyEdgesToProducts,
} from 'components/common/helpers'

import {Fragment, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {Product, ProductsFilter} from 'components/common/types'
import {AppliedFilters} from './AppliedFilters'
import {Breadcrumbs} from 'components/common/Breadcrumbs'
import {Button} from 'components/common/Button'
import {CartContext} from 'components/common/CartContext'
import cn from 'classnames'
import CollectionQuery from './graphql/collection.graphql'
import {CurrencyContext} from 'components/common/CurrencyContext'
import debounce from 'debounce'
import {Designers} from 'components/common/Designers'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Form} from './Form'
import {Formik} from 'formik'
import {Icon} from 'components/common/Icon'
import {Layout} from 'components/common/Layout'
import {ProductCard} from 'components/common/ProductCard'
import {Placeholder as ProductCardPlaceholder} from 'components/common/ProductCard/Placeholder'
import ProductsNodesQuery from './graphql/products-nodes.graphql'
import ProductsQuery from './graphql/products.graphql'
import {Select} from 'components/common/form'
import styles from './index.css'
import {usePopup} from 'components/common/hooks'
import {useQuery} from '@apollo/react-hooks'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'
import {vendors} from 'settings/vendors'
import {WishListContext} from 'components/common/WishListContext'
const defaultItemsPerPage = 24

export function List(props: {
  asPath: string
  isBlogDomain?: boolean
  isWishListRequested?: boolean
  query: Record<string, string>
}) {
  const router = useRouter()
  const gender = getGender(router, props.isBlogDomain)
  const isCollectionRequested = props.query.collection && props.query.collection !== 'all'

  const isDesignerCollectionRequested = R.contains(
    props.query.collection,
    R.map(item => nameToHandle(item.title), vendors[gender]),
  )

  const wishListCtx = useContext(WishListContext)
  const currencyCtx = useContext(CurrencyContext)
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)
  const showMore = useCallback(() => {setItemsPerPage(itemsPerPage + defaultItemsPerPage)}, [itemsPerPage])
  const sortingOrDefault: string = R.propOr('created_at,reverse', 'sorting', props.query)

  const sortKey = useMemo<string>(() => R.compose<string, string[], string>(
    R.head,
    R.split(','),
  )(sortingOrDefault), [sortingOrDefault])

  const isReverseSorting = useMemo(() => R.compose(
    R.includes('reverse'),
  )(sortingOrDefault), [sortingOrDefault])

  // Wish list uses the same layout as category page
  const {data: wishListProductsData} = useQuery<{nodes?: Product[]}>(
    ProductsNodesQuery,
    {skip: !props.isWishListRequested, variables: {ids: R.pluck('product_id', wishListCtx.list)}},
  )

  const {data: productsData, loading: productsLoading} = useQuery<{
    products: {edges: {node: Product}[]}
  }>(ProductsQuery, {
    skip: isCollectionRequested || props.isWishListRequested,

    variables: {
      first  : itemsPerPage,
      sortKey: sortKey.toUpperCase(),
      ...isReverseSorting ? {reverse: true} : {},

      query: R.compose(R.join(' AND '), R.filter(R.identity))([
        props.query.minPrice && `variants.price:>=${currencyCtx.convert({
          from : currencyCtx.active,
          to   : 'USD',
          value: Number(props.query.minPrice),
        })}`,

        props.query.maxPrice && `variants.price:<=${currencyCtx.convert({
          from : currencyCtx.active,
          to   : 'USD',
          value: Number(props.query.maxPrice),
        })}`,

        props.query.search && props.query.search,
        props.query.gender !== 'all' && `tag:"${props.query.gender}"`,
        props.query.category !== 'all' && `tag:"${props.query.category}"`,
        props.query.subcategory !== 'all' && `tag:"${props.query.subcategory}"`,
        props.query.tags && `(${props.query.tags.split(',').map(tag => `tag:"${decodeURI(tag)}"`).join(' OR ')})`,
        props.query.colors && `(${props.query.colors.split(',').map(tag => `tag:color_${tag}`).join(' OR ')})`,

        props.query.vendors && `(${
          props.query.vendors.split(',').map(vendor => `tag:${decodeURI(vendor)}`).join(' OR ')
        })`,
      ]),
    },
  })

  const [collectionCursor, setCollectionCursor] = useState(null)

  const {data: collectionData, loading: collectionLoading} = useQuery(CollectionQuery, {
    skip: !isCollectionRequested,

    variables: {
      after : collectionCursor,
      handle: props.query.collection,
    },
  })

  const fetchedCollectionProducts = useMemo(
    () => R.pathOr([], ['collectionByHandle', 'products', 'edges'], collectionData),
    [collectionData],
  )

  // .cursor is required later on, so do not resolve down to .node here
  const lastCollectionProductsCursor = useMemo(
    () => collectionData && !R.isEmpty(fetchedCollectionProducts) && R.last(fetchedCollectionProducts).cursor,
    [collectionData, fetchedCollectionProducts],
  )

  // Eagerly show collection products — in order to do SSR
  const [collectionProducts, setCollectionProducts] = useState<Product[]>(
    isCollectionRequested
      ? shopifyEdgesToProducts({
        data     : collectionData,
        queryName: 'collectionByHandle',
      })

      : [],
  )

  // While aggregating pages of a collection check the name of collection from the query string corresponds
  // to the name of aggregated collection. This is required to reset aggregated collection products data whenURL changes.
  const [lastAggregatedCollectionName, setLastAggregatedCollectionName] = useState<string>(props.query.collection)

  const cartCtx = useContext(CartContext)

  useEffect(
    () => {
      setCollectionProducts(oldCollectionProducts => {
        // Navigating from non-empty collection to another collection which is empty
        if(lastAggregatedCollectionName !== props.query.collection && R.isEmpty(fetchedCollectionProducts)) {
          setLastAggregatedCollectionName(props.query.collection)
          return []
        }

        // collectionProducts is prefilled with the first page of data that passed in as useState() as a param
        // This helps to avoid duplicating of the first page.
        if(
          !(
            collectionData &&
            !R.isEmpty(fetchedCollectionProducts) &&
            R.prop('id', oldCollectionProducts[0]) !== collectionData.collectionByHandle.products.edges[0].node.id
          )
        )
          return oldCollectionProducts

        const products = shopifyEdgesToProducts({
          data     : collectionData,
          queryName: 'collectionByHandle',
        })

        // Collection name has changed in the URL
        if(lastAggregatedCollectionName !== props.query.collection) {
          setLastAggregatedCollectionName(props.query.collection)
          return products
        }

        // This triggers a fetch of the next collection page if one is available
        // Collections has no query param, so in order to ensure filtering all products of a collection ust be fetched
        if(R.pathOr(false, ['collectionByHandle', 'products', 'pageInfo', 'hasNextPage'], collectionData))
          setCollectionCursor(lastCollectionProductsCursor)

        return R.concat(oldCollectionProducts, products)
      })
    },

    [
      collectionData, fetchedCollectionProducts, lastAggregatedCollectionName, lastCollectionProductsCursor,
      props.query.collection,
    ],
  )

  useEffect(
    () => {
      cartCtx.fetchInventoryQuantityOfProducts(R.pluck('id', shopifyEdgesToProducts({data: productsData})))
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productsData],
  )

  // Reset collection products array when collection is changed on category page
  useEffect(() => setCollectionCursor(null), [collectionData])

  const page = R.pathOr(1, ['page'], props.query)

  const checkTags = useCallback((filter, product: Product) => {
    const normalizedTags = R.map(R.compose(
      R.join('-'),
      R.split(' '),
      R.toLower,
    ))(R.propOr([], 'tags', product))

    if(typeof filter === 'string')
      if(filter !== 'all')
        return R.includes(R.toLower(filter), normalizedTags)

      else
        return true

    else
      return R.any(tag => R.includes(tag, filter))(normalizedTags)
  }, [])

  const normalizeQueryTags = useCallback(
    tags => R.compose(
      R.map(R.compose(
        R.join('-'),
        R.split(' '),
        decodeURI,
      )),

      R.split(','),
    )(tags),

    [],
  )

  const filterProductsOnClient = useCallback(R.pipe(

    // Filter by one or more designers
    (items: Product[]) => items.filter(item => props.query.vendors
      ? checkTags(normalizeQueryTags(props.query.vendors), item)
      : true,
    ),

    // By one or more tags
    // Tags come after category and subcategory in hierarchy, for example — Clothing > Jackets > Leather Jackets
    (items: Product[]) => items.filter(item => props.query.tags
      ? checkTags(normalizeQueryTags(props.query.tags), item)
      : true,
    ),

    // By one or more colors
    (items: Product[]) => items.filter(item => props.query.colors

      ? checkTags(
        normalizeQueryTags(R.map(colorTag => `color_${colorTag}`, props.query.colors.split(',')).join(',')),
        item,
      )

      : true,
    ),

    // By min price
    (items: Product[]) => items.filter(item => props.query.minPrice
      ? R.pathOr(0, ['priceRange', 'minVariantPrice', 'amount'], item) >= currencyCtx.convert({
        from : currencyCtx.active,
        to   : 'USD',
        value: Number(props.query.minPrice),
      })

      : true,
    ),

    // By max price
    (items: Product[]) => items.filter(item => props.query.maxPrice
      ? R.pathOr(0, ['priceRange', 'minVariantPrice', 'amount'], item) <= currencyCtx.convert({
        from : currencyCtx.active,
        to   : 'USD',
        value: Number(props.query.maxPrice),
      })

      : true,
    ),

    // By category and subcategory
    (items: Product[]) => items.filter(item => checkTags(props.query.subcategory, item)),
    (items: Product[]) => items.filter(item => checkTags(props.query.category, item)),

    // By gender
    (items: Product[]) => items.filter(item => {
      if(props.query.gender !== 'all')
        return checkTags(props.query.gender, item)
      else
        return true
    }),

    // Sort products
    (items: Product[]) => R.isEmpty(sortKey) ? items : items.sort((a, b) => {
      if(sortKey === 'price') {
        const aValue = Number(R.pathOr(0, ['priceRange', 'minVariantPrice', 'amount'], a))
        const bValue = Number(R.pathOr(0, ['priceRange', 'minVariantPrice', 'amount'], b))

        if(aValue > bValue)
          return 1
        else if(aValue < bValue)
          return -1
        else
          return 0
      }

      if(!a || !b || a[sortKey] > b[sortKey])
        return 1
      else if(a[sortKey] < b[sortKey])
        return -1
      else
        return 0
    }),

    (items: Product[]) => isReverseSorting ? R.reverse(items) : items,
  ), [checkTags, normalizeQueryTags, props.query])

  const filteredCollectionProducts = useMemo(
    () => filterProductsOnClient(collectionProducts),
    [collectionProducts, filterProductsOnClient],
  )

  const filteredWishListProducts = useMemo(
    () => filterProductsOnClient(R.pathOr([], ['nodes'], wishListProductsData)),
    [filterProductsOnClient, wishListProductsData],
  )

  const products = useMemo(
    () => {
      const nonEmpty = R.filter(Boolean)
      const slicePage = R.slice((page - 1) * itemsPerPage, page * itemsPerPage)

      if(isCollectionRequested)
        return nonEmpty(slicePage(filteredCollectionProducts))
      else if(props.isWishListRequested)
        return nonEmpty(slicePage(filteredWishListProducts))
      else
        return nonEmpty(shopifyEdgesToProducts({data: productsData}))
    },

    [
      filteredCollectionProducts, filteredWishListProducts, isCollectionRequested, itemsPerPage, productsData, page,
      props.isWishListRequested,
    ],
  )

  const urlBaseParams = useMemo(() => ({
    category           : props.query.category,
    collection         : props.query.collection,
    gender             : props.query.gender,
    isWishListRequested: props.isWishListRequested,
    subcategory        : props.query.subcategory,
  }), [props.isWishListRequested, props.query])

  const {t} = useTranslation()
  const pageInfo: {hasNextPage: boolean} = R.path(['products', 'pageInfo'], productsData)

  const hasClientFilteredProductsNextPage = useMemo(
    () => {
      const hasNextPage = R.compose(R.not, R.isEmpty, R.slice(page * itemsPerPage, Infinity))

      if(isCollectionRequested)
        return hasNextPage(filteredCollectionProducts)
      else if(props.isWishListRequested)
        return hasNextPage(filteredWishListProducts)

      return false
    },

    [
      itemsPerPage, filteredCollectionProducts, filteredWishListProducts, isCollectionRequested, page,
      props.isWishListRequested,
    ],
  )

  const hasNextPage = isCollectionRequested || props.isWishListRequested
    ? hasClientFilteredProductsNextPage
    : R.prop('hasNextPage', pageInfo)

  const collectionLinkQueryParams = {
    category           : 'all',
    collection         : props.query.collection,
    gender             : props.query.gender,
    isWishListRequested: props.isWishListRequested,
    subcategory        : 'all',
  }

  const categoryLinkQueryParams = {
    category           : props.query.category,
    collection         : props.query.collection,
    gender             : props.query.gender,
    isWishListRequested: props.isWishListRequested,
    subcategory        : 'all',
  }

  const submit = useCallback(
    values => {
      const queryParams = {...props.query.search ? {search: props.query.search} : {}, ...values} || {}

      const queryParamsString: string = R.compose(
        (queryString: string) => queryString.replace(/%2C/g, ','),
        objectToFetchPostParams,
        R.reject(R.isEmpty),
        R.map<Record<string, string>, Record<string, string>>(encodeURIComponent),
      )(queryParams)

      router.push(
        appendURLQueryParams(getUrlHref(urlBaseParams), queryParamsString),
        appendURLQueryParams(getUrlAs(urlBaseParams), queryParamsString),
      )

      // Drop to the first page if data changed
      setItemsPerPage(defaultItemsPerPage)
    },

    [props.query, router, urlBaseParams],
  )

  const debounceSubmit = useMemo(() => debounce(submit, 1000), [submit])

  const getQueryParamArray = useCallback(
    paramName => R.compose(
      R.filter(Boolean),
      R.split(','),
      R.pathOr('', [paramName]),
    )(props.query),

    [props.query],
  )

  const initialValues = useMemo<ProductsFilter>(() => ({
    colors  : getQueryParamArray('colors'),
    maxPrice: R.propOr('', 'maxPrice', props.query),
    minPrice: R.propOr('', 'minPrice', props.query),
    sorting : sortingOrDefault,
    tags    : getQueryParamArray('tags'),
    vendors : getQueryParamArray('vendors'),
  }), [getQueryParamArray, props.query, sortingOrDefault])

  const validationSchema = Yup.object().shape({
    maxPrice: Yup.number().max(99999).min(1).test(
      'max-bigger-than-min',
      t('maxPriceMustBeBiggerThan'),

      function (value) {
        return !this.parent.maxPrice || !this.parent.minPrice || this.parent.minPrice < value
      }),

    minPrice: Yup.number().max(99999).min(1),
  })

  const queryParamsString = R.compose(
    objectToFetchPostParams,
    R.reject(R.anyPass([R.isEmpty, R.isNil])),
  )({search: props.query.search})

  const filtersLgPopup = usePopup(true)
  const filtersMdPopup = usePopup(false)

  // Eagerly show collection products — in order to do SSR
  return <Layout className={cn(styles.list, {'has-sidebar': filtersLgPopup.isShown})}>
    <Breadcrumbs
      className="breadcrumbs"
      isLastCrumbHidden={!props.query.search}

      items={[
        ...isCollectionRequested ? [{
          ...props.query.gender === 'all' ? {} : {
            as  : appendURLQueryParams(getUrlAs({collection: props.query.collection}), queryParamsString),
            href: appendURLQueryParams(getUrlHref({collection: props.query.collection}), queryParamsString),
          },

          title: R.pathOr('', ['collectionByHandle', 'title'], collectionData),
        }] : [],

        ...props.isWishListRequested ? [{
          ...props.query.gender === 'all' ? {} : {
            as  : appendURLQueryParams(getUrlAs({isWishListRequested: true}), queryParamsString),
            href: appendURLQueryParams(getUrlHref({isWishListRequested: true}), queryParamsString),
          },

          title: t('wishList'),
        }] : [],

        ...props.query.gender === 'all' ? [] : [{
          ...props.query.category === 'all' ? {} : {
            as  : appendURLQueryParams(getUrlAs(collectionLinkQueryParams), queryParamsString),
            href: appendURLQueryParams(getUrlHref(collectionLinkQueryParams), queryParamsString),
          },

          title: t(props.query.gender),
        }],

        ...props.query.category === 'all' ? [] : [{
          ...props.query.subcategory === 'all' ? {} : {
            as  : appendURLQueryParams(getUrlAs(categoryLinkQueryParams), queryParamsString),
            href: appendURLQueryParams(getUrlHref(categoryLinkQueryParams), queryParamsString),
          },

          title: t(dashToCamel(props.query.category)),
        }],

        ...props.query.subcategory === 'all' ? [] : [{title: t(dashToCamel(props.query.subcategory))}],

        {
          title: props.query.search && `"${props.query.search}"` ||
            t(props.query.subcategory.replace('all', '')) ||
            t(props.query.category.replace('all', '')) ||
            t(props.query.gender.replace('all', '')) ||
            /* eslint-disable-next-line max-len */
            (props.query.collection || '').replace('all', '') && R.path(['collectionByHandle', 'title'], collectionData) ||
            t('wishList'),
        },
      ]}
    />

    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={debounceSubmit}
      validationSchema={validationSchema}
    >
      <Fragment>
        <div className="header">
          <button
            className={cn('button resolution--lg', {'is-collapsed': !filtersLgPopup.isShown})}
            onClick={filtersLgPopup.toggle}
          >
            <span className="title">{t('filterBy')}</span>

            <div className="icons">
              <Icon className="icon" name="filter-to-close" />
              <Icon className="icon" name="filter-to-open" />
            </div>
          </button>

          <button
            className={cn('button resolution--md', {'is-collapsed': !filtersMdPopup.isShown})}
            onClick={filtersMdPopup.toggle}
          >
            <span className="title">{t('filterBy')}</span>

            <div className="icons">
              <Icon className="icon" name="filter-to-close" />
              <Icon className="icon" name="filter-to-open" />
            </div>
          </button>

          <AppliedFilters className="applied-filters" />

          {!R.isEmpty(products) && <Select
            className="field"
            isUppercase
            name="sorting"

            options={[
              {label: t('createdNewestFirst'), value: 'created_at,reverse'},
              {label: t('createdOldestFirst'), value: 'created_at'},
              {label: t('updatedNewestFirst'), value: 'updated_at,reverse'},
              {label: t('updatedOldestFirst'), value: 'updated_at'},
              {label: t('vendorAZ'), value: 'vendor'},
              {label: t('vendorZA'), value: 'vendor,reverse'},
            ]}
          />}
        </div>

        <Form
          className={cn('sidebar', {'is-lg-shown': filtersLgPopup.isShown, 'is-md-shown': filtersMdPopup.isShown})}
          close={filtersMdPopup.close}
          initialValues={initialValues}
          isBlogDomain={props.isBlogDomain}
          isDesignerCollectionRequested={isDesignerCollectionRequested}
          isWishListRequested={props.isWishListRequested}
          query={props.query}
        />
      </Fragment>
    </Formik>

    <div className="content">
      {(productsLoading || collectionLoading) && R.isEmpty(products) && <div className="list">
        {R.map(i => <ProductCardPlaceholder key={i} />, R.range(0, defaultItemsPerPage))}
      </div>}

      {!R.isEmpty(products) && <Fragment>
        <div
          className={cn(
            'list',
            {'is-muted': productsLoading || collectionLoading && !collectionCursor},
          )}
        >
          {R.map(
            (product: Product) => <ProductCard
              className="card"
              key={product.id}
              product={product}
            />,

            products,
          )}
        </div>

        <Button
          appearance="outline"
          className="button"
          disabled={!hasNextPage}
          disabledMessage={t('noMoreItemsToLoad')}
          isLoading={productsLoading}
          onClick={showMore}
        >
          {t('showMore')}
        </Button>
      </Fragment>}

      {R.isEmpty(products) && !productsLoading && !collectionLoading && <EmptyMessage className="empty-message">
        {t('noProductsFound')}
      </EmptyMessage>}
    </div>

    <Designers className="designers" isBlogDomain={props.isBlogDomain} />
  </Layout>
}
