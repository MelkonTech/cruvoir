import * as R from 'ramda'
import {Fragment, useCallback, useContext, useEffect, useMemo, useState} from 'react'

import {
  getFirstVariantPrice, getInitialVariantOptions, getUnavailableOptions, getVariantOptionByName,
} from 'components/common/helpers'

import {Image, Product, Variant} from 'components/common/types'
import {Breadcrumbs} from 'components/common/Breadcrumbs'
import cn from 'classnames'
import {Designers} from 'components/common/Designers'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Form} from './Form'
import {Formik} from 'formik'
import {ImagePreview} from 'components/common/ImagePreview'
import {Layout} from 'components/common/Layout'
import {Placeholder} from './Placeholder'
import {productPath} from 'components/common/helpers'
import ProductQuery from './graphql/product.graphql'
import {RecentContext} from 'components/common/RecentContext'
import {Slider} from './Slider'
import styles from './index.css'
import {Suggestions} from 'components/common/Suggestions'
import {usePopup} from 'components/common/hooks'
import {useQuery} from '@apollo/react-hooks'
import {useTranslation} from 'i18n'
const isFirstVariantAvailable = variants => R.pathOr(null, ['node', 'availableForSale'], variants[0])

export function Details(props: {
  isBlogDomain?: boolean
  query: Record<string, string>
}) {
  const {data: productData, loading: productLoading} = useQuery(ProductQuery, {variables: {handle: props.query.handle}})
  const product: Product = useMemo(() => R.pathOr({} as Product, ['productByHandle'], productData), [productData])
  const recentCtx = useContext(RecentContext)

  const path = useMemo(
    () => productPath(R.pathOr([], ['tags'], product)),
    [product],
  )

  const options = useMemo(
    () => R.pathOr([], ['options'], product),
    [product],
  )

  const images = useMemo(
    () => R.map((image: {node: Image}) => image.node, R.pathOr([], ['images', 'edges'], product)),
    [product],
  )

  const variants = useMemo(
    () => R.sort(
      (a: {node: Variant}, b: {node: Variant}) => +b.node.availableForSale - +a.node.availableForSale,
      R.pathOr([], ['variants', 'edges'], product),
    ),

    [product],
  )

  const findMatchingVariantByOptions = useCallback((variantOptions): Variant | null => R.compose<
    {node: Variant}[],
    {node: Variant},
    Variant | null
  >(
    R.propOr(null, 'node'),

    R.find(variant => {
      for(let key in variantOptions)
        if(
          !getVariantOptionByName(key, variant.node) ||
          getVariantOptionByName(key, variant.node) !== variantOptions[key]
        )
          return false

      return true
    }),
  )(variants), [variants])

  const [price, setPrice] = useState(getFirstVariantPrice(variants, 'priceV2'))
  const [compareAtPrice, setCompareAtPrice] = useState(getFirstVariantPrice(variants, 'compareAtPriceV2'))
  const [isAvailableForSale, setIsAvailableForSale] = useState(isFirstVariantAvailable(variants))

  const initialVariantOptions = useMemo(
    () => getInitialVariantOptions(variants),
    [variants],
  )

  const [selectedVariant, setSelectedVariant] = useState(findMatchingVariantByOptions(initialVariantOptions))

  const [unavailableOptions, setUnavailableOptions] = useState(
    getUnavailableOptions(initialVariantOptions, options, variants),
  )

  const updatePriceAndAvailability = useCallback(values => {
    const matchingVariant = findMatchingVariantByOptions(values)
    setSelectedVariant(matchingVariant)
    setPrice(matchingVariant.priceV2)
    setCompareAtPrice(matchingVariant.compareAtPriceV2)
    setIsAvailableForSale(matchingVariant.availableForSale)
    setUnavailableOptions(getUnavailableOptions(values, options, variants))
  }, [findMatchingVariantByOptions, options, setSelectedVariant, variants])

  const {t} = useTranslation()
  const submit = useCallback(() => {}, [])

  useEffect(() => {
    if(
      recentCtx.isReady && !R.isEmpty(product) && R.map(item => item.id, recentCtx.products).indexOf(product.id) === -1
    )
      recentCtx.saveToRecent(product)
  }, [recentCtx, product])

  useEffect(
    () => {
      setSelectedVariant(findMatchingVariantByOptions(initialVariantOptions))
      setPrice(getFirstVariantPrice(variants, 'priceV2'))
      setCompareAtPrice(getFirstVariantPrice(variants, 'compareAtPriceV2'))
      setUnavailableOptions(getUnavailableOptions(initialVariantOptions, options, variants))
    },

    [findMatchingVariantByOptions, initialVariantOptions, options, product, setSelectedVariant, variants],
  )

  // Set up the availability of the variant on the initial load
  // This function is only called during client side rendering
  useEffect(() => setIsAvailableForSale(isFirstVariantAvailable(variants)), [variants])

  const breadcrumbs = useMemo(() => {
    const result = []

    if(path.gender)
      result.push({
        as: `/${path.gender.toLowerCase()}/shop/collection/all/category/all/subcategory/all`,

        // eslint-disable-next-line max-len
        href: `/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]?category=all&collection=all&gender=${path.gender.toLowerCase()}&subcategory=all`,

        title: path.gender,
      })

    if(path.category)
      result.push({
        as: `/${path.gender.toLowerCase()}/shop/collection/all/category/${path.category.toLowerCase()}/subcategory/all`,

        // eslint-disable-next-line max-len
        href: `/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]?category=${path.category.toLowerCase()}&collection=all&gender=${path.gender.toLowerCase()}&subcategory=all`,

        title: path.category,
      })

    return result
  }, [path])

  const previewPopup = usePopup()
  const [initialPreviewSlideNumber, setInitialPreviewSlideNumber] = useState(0)

  const showPreviewPopup = useCallback(i => {
    previewPopup.show()
    setInitialPreviewSlideNumber(i)
  }, [previewPopup])

  return <Layout>
    {productLoading && <Placeholder />}

    {!productLoading && <Formik
      initialValues={initialVariantOptions}
      onSubmit={submit}
      validate={updatePriceAndAvailability}
    >
      <Fragment>
        {R.isEmpty(product) && <EmptyMessage className={styles.emptyMessage}>
          {t('thisProductDoesnTExist')}
        </EmptyMessage>}

        {!R.isEmpty(product) && <div className={styles.details}>
          <Breadcrumbs className="breadcrumbs" items={breadcrumbs} />

          <div className="section">
            {images.length === 0
              ? <EmptyMessage className="empty-message">{t('noImage')}</EmptyMessage>

              : <Slider
                className="gallery"
                images={images}
                showPreview={showPreviewPopup}
                title={product.title}
              />
            }

            <Form
              className="content"
              compareAtPrice={compareAtPrice}
              featuredImage={images[0]}
              gender={path.gender || 'women'}
              isAvailableForSale={isAvailableForSale}
              options={options}
              price={price}
              product={product}
              selectedVariant={selectedVariant}
              unavailableOptions={unavailableOptions}
            />
          </div>

          <Suggestions className="suggestions" productId={product.id} />
          <Designers className="designers" isBlogDomain={props.isBlogDomain} />

          <ImagePreview
            className={cn('preview', {'is-shown': previewPopup.isShown})}
            closePreview={previewPopup.close}
            initialSlideNumber={initialPreviewSlideNumber}
            images={images}
            title={product.title}
          />
        </div>}
      </Fragment>
    </Formik>}
  </Layout>
}
