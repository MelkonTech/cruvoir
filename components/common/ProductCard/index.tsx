import * as R from 'ramda'
import {Fragment, useCallback, useMemo, useState} from 'react'

import {
  getFirstVariantPrice, getInitialVariantOptions, getUnavailableOptions, getVariantOptionByName,
} from 'components/common/helpers'

import {nameToHandle, productPath} from 'components/common/helpers'
import {Product, Variant} from 'components/common/types'
import cn from 'classnames'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Form} from './Form'
import {Formik} from 'formik'
import {Link} from 'components/common/Link'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import styles from './index.css'
import {useTranslation} from 'i18n'
import {WishButton} from 'components/common/WishButton'

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md#adding-non-standard-attributes
declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: 'eager' | 'lazy'
  }
}

export function ProductCard(props: {
  className?: string
  product: Product
}) {
  const {t} = useTranslation()
  const path = productPath(props.product.tags)
  const gender = R.pathOr('', ['gender'], path).toLowerCase()
  const vendorHandle = nameToHandle(props.product.vendor)

  const options = useMemo(
    () => R.reject(R.propEq('name', 'Color'), R.pathOr([], ['options'], props.product)),
    [props.product],
  )

  const variants = useMemo(
    () => R.sort(
      (a: {node: Variant}, b: {node: Variant}) => +b.node.availableForSale - +a.node.availableForSale,
      R.pathOr([], ['variants', 'edges'], props.product)),
    [props.product],
  )

  const [price, setPrice] = useState(getFirstVariantPrice(variants, 'priceV2'))
  const [compareAtPrice, setCompareAtPrice] = useState(getFirstVariantPrice(variants, 'compareAtPriceV2'))

  const [isAvailableForSale, setIsAvailableForSale] = useState(R.pathOr(
    null,
    ['node', 'availableForSale'],
    variants[0],
  ))

  const initialVariantOptions = useMemo(
    () => getInitialVariantOptions(variants),
    [variants],
  )

  const [unavailableOptions, setUnavailableOptions] = useState(
    getUnavailableOptions(initialVariantOptions, options, variants),
  )

  const updatePriceAndAvailability = useCallback(values => {
    const matchingVariant = R.find(variant => {
      for(let key in values)
        if(!getVariantOptionByName(key, variant.node) || getVariantOptionByName(key, variant.node) !== values[key])
          return false

      return true
    }, variants)

    setPrice(matchingVariant.node.priceV2)
    setCompareAtPrice(matchingVariant.node.compareAtPriceV2)
    setIsAvailableForSale(matchingVariant.node.availableForSale)
    setUnavailableOptions(getUnavailableOptions(values, options, variants))
  }, [options, variants])

  const submit = useCallback(
    () => {},
    [],
  )

  const [isErrorImageShown, setIsErrorImageShown] = useState(false)
  const showErrorImage = useCallback(() => setIsErrorImageShown(true), [])

  return <Formik
    initialValues={initialVariantOptions}
    onSubmit={submit}
    validate={updatePriceAndAvailability}
  >
    <div className={cn(styles.card, props.className)}>
      <div className="picture">
        {!isErrorImageShown && !R.isEmpty(props.product.images.edges) && <Fragment>
          <img
            src={props.product.images.edges[0].node.transformedSrc}
            alt={props.product.images.edges[0].node.altText || props.product.title}
            className="image"
            loading="lazy"
            onError={showErrorImage}
          />

          {props.product.images.edges[1] && <img
            src={props.product.images.edges[1].node.transformedSrc}
            alt={props.product.images.edges[1].node.altText || props.product.title}
            className="image"
            loading="lazy"
            onError={showErrorImage}
          />}
        </Fragment>}

        {(isErrorImageShown || R.isEmpty(props.product.images.edges)) && <EmptyMessage className="empty-message">
          {t('noImage')}
        </EmptyMessage>}
      </div>

      <div className="section">
        <div className="vendor">{props.product.vendor}</div>

        <Link
          as={`/${gender}/shop/item/${vendorHandle}/${props.product.handle}`}

          /* eslint-disable-next-line max-len */
          href={`/[gender]/shop/item/[vendor]/[handle]?gender=${gender}&vendor=${vendorHandle}&handle=${props.product.handle}`}

          className="title"
        >{props.product.title}</Link>

        <PriceWithCompareAt
          className="price"
          compareAtPrice={R.path(['amount'], compareAtPrice)}
          price={Number(price.amount)}
        />
      </div>

      <WishButton className="wish-button" productId={props.product.id} />

      <Form
        className="form"
        isAvailableForSale={isAvailableForSale}
        options={options}
        product={props.product}
        unavailableOptions={unavailableOptions}
        variants={variants}
      />
    </div>
  </Formik>
}
