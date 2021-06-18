import * as R from 'ramda'
import {Product} from 'components/common/types'
import ProductQuery from './graphql/product.graphql'
import {ProductsSlider} from 'components/common/ProductsSlider'
import {useMemo} from 'react'
import {useQuery} from '@apollo/react-hooks'

export function ProductSliderByCollection(props: {
  className?: string
  handle: string
}) {
  const {data: productData, loading: productLoading} = useQuery(
    ProductQuery,
    {variables: {handle: props.handle}},
  )

  const newCollectionProducts: Product[] = useMemo(
    () => R.compose<
      {collectionByHandle: {products: {edges: {node: Product}[]}}},
      {node: Product}[],
      Product[]
    >(
      R.pluck('node'),
      R.pathOr<{node: Product}[]>([], ['collectionByHandle', 'products', 'edges']),
    )(productData),

    [productData],
  )

  return !productLoading && newCollectionProducts.length > 0 && <ProductsSlider
    className={props.className}
    products={newCollectionProducts}
  />
}
