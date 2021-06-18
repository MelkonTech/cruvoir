import * as R from 'ramda'
import {Home as BlogHome} from 'components/blog/Home'
import getConfig from 'next/config'
import {isServer} from 'components/common/helpers'
import Prismic from 'prismic-javascript'
import {prismicClient} from 'components/common/helpers'
import {Women} from 'components/home/Women'
const {publicRuntimeConfig} = getConfig()
const blogHost = () => publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL.replace(/https?:\/\//, '')

const Home = props => {
  if(props.host === blogHost())
    return <BlogHome {...props} />
  else
    return <Women {...props} />
}

Home.getInitialProps = async params => {
  // Blog and the main app are hosted on different domains
  if((isServer() ? params.req.headers.host : location.host) === blogHost())
    return await BlogHome.getInitialProps(params)

  const topPostsResponse = await prismicClient(params.req).query(
    [Prismic.Predicates.at('document.type', 'post'), Prismic.Predicates.at('my.post.is_top', true)],
    {orderings: '[my.post.date desc]'},
  )

  return {
    cmsContent: R.path(['results', '0', 'data'], await prismicClient(params.req).query([
      Prismic.Predicates.at('document.id', publicRuntimeConfig.NEXT_PUBLIC_PRISMIC_WOMENSHOMEPAGE_ID),
    ], {})),

    topPosts: R.map(
      result => R.mergeRight(result.data, {tags: result && result.tags, uid: result.uid}),
      topPostsResponse.results,
    ),
  }
}

export default Home
