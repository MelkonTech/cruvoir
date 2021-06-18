import * as R from 'ramda'
import {APICountry, Country} from 'components/common/types'
import {ApolloClient, InMemoryCache} from 'apollo-boost'
import {NextApiRequest, NextApiResponse} from 'next'
import {createHttpLink} from 'apollo-link-http'
import fetch from 'node-fetch'
import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig()
import LocationsQuery from 'components/common/graphql/locations.graphql'
import LRU from 'lru-cache'

const cache = new LRU({maxAge: 1000 * 60 * 60}) // maxAge in ms
const cacheKey = 'countries'

async function getCountries() {
  const cachedData = cache.get(cacheKey)

  if(cachedData)
    return cachedData

  const client = new ApolloClient({
    cache: new InMemoryCache(),

    link: createHttpLink({
      credentials: 'same-origin',
      fetch      : fetch,

      headers: {

        // Accept and Content-Type headers are required by Storefront API
        accept                  : 'application/json',
        'content-type'          : 'application/json',
        'x-shopify-access-token': serverRuntimeConfig.NEXT_SERVER_SHOPIFY_ADMIN_API_TOKEN,
      },

      uri: serverRuntimeConfig.NEXT_SERVER_SHOPIFY_ADMIN_API_URL,
    }),
  })

  const {data} = await client.query({query: LocationsQuery})

  const countries = R.compose(
    R.map<APICountry, Country>(c => ({
      code     : c.country.code.countryCode,
      name     : c.country.name,
      provinces: R.map(R.pick(['name', 'code']), c.country.provinces),
    })),

    R.flatten,

    R.map((node: {profileLocationGroups: any[]}) => R.map(
      (group: {countriesInAnyZone: any[]}) => group.countriesInAnyZone,
      node.profileLocationGroups,
    )),

    R.pluck('node'),
  )(R.pathOr([], ['deliveryProfiles', 'edges'], data))

  cache.set(cacheKey, countries)
  return countries
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const countries = await getCountries()
    res.status(200).json(countries)
  } catch(error) {
    console.log(error)
    res.status(500).json({error: true})
  }
}
