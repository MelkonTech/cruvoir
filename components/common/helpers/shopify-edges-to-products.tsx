import * as R from 'ramda'
import {Product} from 'components/common/types'

export const shopifyEdgesToProducts = params => R.compose<{
  collectionByHandle: {products: {edges: {node: Product}[]}}},
  {node: Product}[],
  Product[]
>(
  R.pluck('node'),
  R.pathOr([], R.filter(Boolean, [params.queryName, 'products', 'edges'])),
)(params.data)
