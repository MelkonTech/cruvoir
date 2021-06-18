import * as R from 'ramda'
import {Details} from 'components/blog/Details'
import Error from 'next/error'
import getConfig from 'next/config'
import {isServer} from 'components/common/helpers'
import {Men} from 'components/home/Men'
import Prismic from 'prismic-javascript'
import {prismicClient} from 'components/common/helpers'
import {useRouter} from 'next/router'
import {Women} from 'components/home/Women'
const {publicRuntimeConfig} = getConfig()
const blogHost = () => publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL.replace(/https?:\/\//, '')

const Home = props => {
  const router = useRouter()

  if(props.host === blogHost())
    return <Details {...props} />

  else if(router.query.gender === 'men')
    return <Men {...props} />

  else if(router.query.gender === 'women')
    return <Women {...props} />

  return <Error statusCode={404} />
}


export const getServerSideProps = async params => {
  // Blog and the main app are hosted on different domains
  if((isServer() ? params.req.headers.host : location.host) === blogHost())
    return await Details.getServerSideProps(R.assocPath(['query', 'slug'], params.query.gender, params))

  if(!R.includes(params.query.gender, ['men', 'women']))
    params.res.statusCode = 404

  const topPostsResponse = await prismicClient(params.req).query(
    [Prismic.Predicates.at('document.type', 'post'), Prismic.Predicates.at('my.post.is_top', true)],
    {orderings: '[my.post.date desc]'},
  )

  return {props: {
    cmsContent: R.path(['results', '0', 'data'], await prismicClient(params.req).query([
      Prismic.Predicates.at(
        'document.id',

        params.query.gender === 'women'
          ? publicRuntimeConfig.NEXT_PUBLIC_PRISMIC_WOMENSHOMEPAGE_ID
          : publicRuntimeConfig.NEXT_PUBLIC_PRISMIC_MENSHOMEPAGE_ID,
      ),
    ], {})),

    topPosts: R.map(
      result => R.mergeRight(result.data, {tags: result.tags, uid: result.uid}),
      topPostsResponse.results,
    ),
  }}
}

export default Home
