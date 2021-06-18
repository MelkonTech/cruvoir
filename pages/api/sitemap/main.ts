import {ApolloClient, InMemoryCache} from 'apollo-boost'
import {contentToSitemapXML, urlToSitemapXMLItem} from './common/helpers'
import {nameToHandle, prismicClient} from 'components/common/helpers'
import {NextApiRequest, NextApiResponse} from 'next'
import {createHttpLink} from 'apollo-link-http'
import fetch from 'node-fetch'
import getConfig from 'next/config'
import Prismic from 'prismic-javascript'
import ProductsQuery from './graphql/products.graphql'
import {vendors} from 'settings/vendors'
const {publicRuntimeConfig} = getConfig()
const itemsPerPage = 250

const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: createHttpLink({
    credentials: 'same-origin',
    fetch      : fetch,

    headers: {

      // Accept and Content-Type headers are required by Storefront API
      accept                             : 'application/json',
      'content-type'                     : 'application/json',
      'x-shopify-storefront-access-token': publicRuntimeConfig.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
    },

    uri: publicRuntimeConfig.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL,
  }),
})

async function productsByGender(gender, lastCursor = null, result = []) {
  try {
    const {data} = await client.query({
      query: ProductsQuery,

      variables: {
        ...lastCursor ? {after: lastCursor} : {},
        first: itemsPerPage,
        query: `tag:"${gender}"`,
      },
    })

    for(const product of data.products.edges)
      result.push({
        date        : product.node.updatedAt,
        gender,
        handle      : product.node.handle,
        vendorHandle: nameToHandle(product.node.vendor),
      })

    if(data.products.pageInfo.hasNextPage)
      result.push(...await productsByGender(
        gender,
        data.products.edges[data.products.edges.length - 1].cursor,
        result,
      ))
  } catch(error){
    console.error(error)
  }

  return result
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const products = [...await productsByGender('men'), ...await productsByGender('women')]
  let productUrls = ''

  for(const product of products)
    productUrls += urlToSitemapXMLItem({
      date: product.date,
      url : `https://cruvoir.com/${product.gender}/shop/item/${product.vendorHandle}/${product.handle}`,
    })

  const featuredMenuPrismicResponse = {
    men  : await prismicClient(null).query([Prismic.Predicates.at('document.type', 'mens_featured_menu')], {}),
    women: await prismicClient(null).query([Prismic.Predicates.at('document.type', 'womens_featured_menu')], {}),
  }

  let featureMenuLinks = ''

  for(const gender in featuredMenuPrismicResponse)
    for(const result of featuredMenuPrismicResponse[gender].results)
      for(const category in result.data)
        for(const item of result.data[category])
          featureMenuLinks += urlToSitemapXMLItem({url: item.url.url})

  let vendorsLinks = ''

  for(const gender in vendors)
    for(const vendor of vendors[gender])
      vendorsLinks += urlToSitemapXMLItem({
        url: `https://cruvoir.com/${gender}/shop/collection/${vendor.collection}/category/all/subcategory/all`,
      })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/xml')
  res.end(contentToSitemapXML(featureMenuLinks + productUrls + vendorsLinks))
}
