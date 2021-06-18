import * as R from 'ramda'
import {createContext, ReactNode, useMemo} from 'react'
import {FeaturedMenuItem} from 'components/common/types'
import {Gender} from 'components/common/types'
type PrismicResponse = {results: {data: Record<string, object[]>}[]}

type FeaturedMenuItems = {
  category: string
  collection: string
  tag?: string[]
  subcategory: string
  title: string
  list: FeaturedMenuItem[]
}[]

type ContextValue = {
  men: FeaturedMenuItems
  women: FeaturedMenuItems
}

export const FeaturedMenuContext = createContext<ContextValue>({
  men  : [],
  women: [],
})

const prismicResponseToFeaturedMenuItems = R.compose<
  PrismicResponse,
  Record<string, object[]>,
  [string, object[]][],
  FeaturedMenuItems
>(
  R.map(menuSection => ({
    category  : menuSection[0] !== 'designers' ? 'all' : menuSection[0],
    collection: 'all',

    list: R.compose<object[], object[], FeaturedMenuItem[]>(
      R.map(menuItem => {
        const url = R.pathOr('', ['url', 'url'], menuItem)
        const title = R.pathOr('', ['title', 0, 'text'], menuItem)

        const routeParam = (name: string): string => (new RegExp(`/${name}/(.*?)/`, 'i')
          .exec(`${url.split('?')[0]}/`) || [])[1]

        return {
          category   : routeParam('category'),
          collection : routeParam('collection'),
          gender     : url.replace(/https?:\/\//, '').split('/')[1] as Gender,
          image      : R.pathOr(null, ['image', 'url'], menuItem),
          subcategory: routeParam('subcategory'),
          tag        : url.match(/tags=/i) ? url.split('tags=')[1].split('&')[0].split(',') : null,
          title,
          ...!url.match(/men\/shop/gi) && {url},
        }
      }),

      // Prismic sometimes sends empty items
      R.filter(R.path(['title', 0, 'text'])),
    )(menuSection[1]),

    subcategory: 'all',
    title      : menuSection[0],
  })),

  R.toPairs,
  R.pathOr<Record<string, object[]>>({}, ['results', 0, 'data']),
)

export function FeaturedMenuContextProvider(props: {
  children: ReactNode
  menPrismicResponse: PrismicResponse
  womenPrismicResponse: PrismicResponse
}) {
  const value = useMemo(() => ({
    men  : prismicResponseToFeaturedMenuItems(props.menPrismicResponse),
    women: prismicResponseToFeaturedMenuItems(props.womenPrismicResponse),
  }), [props.menPrismicResponse, props.womenPrismicResponse])

  return <FeaturedMenuContext.Provider value={value}>
    {props.children}
  </FeaturedMenuContext.Provider>
}
