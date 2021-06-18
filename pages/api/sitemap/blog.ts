import * as R from 'ramda'
import {contentToSitemapXML, urlToSitemapXMLItem} from './common/helpers'
import {NextApiRequest, NextApiResponse} from 'next'
import Prismic from 'prismic-javascript'
import {prismicClient} from 'components/common/helpers'
const itemsPerPage = 100

async function blogPostUIDs() {
  const response = await prismicClient(null).query(
    [Prismic.Predicates.at('document.type', 'post')],
    {pageSize: itemsPerPage},
  )

  let result = []

  for(const post of response.results)
    result.push(post)

  if(response.total_pages > 1) {
    const data = await Promise.allSettled([
      ...R.times(R.identity, response.total_pages - 1).map(
        idx => prismicClient(null).query(
          [Prismic.Predicates.at('document.type', 'post')],

          // Do not take the result of an existing first page.
          {page: idx + 2, pageSize: itemsPerPage},
        ),
      ),
    ])

    for(const idx in data)
      if(data[idx].status === 'fulfilled')

        // @ts-ignore
        for(const post of data[idx].value.results)
          result.push(post)
  }

  return result.map(({last_publication_date: date, uid}) => ({date, uid}))
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/xml')

  res.end(contentToSitemapXML(
    (await blogPostUIDs()).map(({date, uid}) => urlToSitemapXMLItem({date, url: `https://blog.cruvoir.com/${uid}`})).join(''),
  ))
}
