import 'intersection-observer'
import * as R from 'ramda'
import {useCallback, useEffect, useRef, useState} from 'react'
import {BlogPostCard} from 'components/common/BlogPostCard'
import {getHeroImagePath} from 'components/common/helpers'
import {Header} from 'components/blog/common/Header'
import {Layout} from 'components/common/Layout'
import {Link} from 'components/common/Link'
import {Post} from 'components/common/types'
import Prismic from 'prismic-javascript'
import {prismicClient} from 'components/common/helpers'
import {PromoCard} from 'components/blog/common/PromoCard'
import {RichText} from 'prismic-reactjs'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {useTranslation} from 'i18n'
const itemsPerPage = 6

function Home(props: {
  posts: Post[]
  pathname: string
  query: Record<string, string>
  topPosts: Post[]
  totalPages: number
}) {
  const {t} = useTranslation()
  const loadMoreRef = useRef()
  const [posts, setPosts] = useState(props.posts || [])
  const [page, setPage] = useState<number>(1)
  const [isMorePostsLoading, setIsMorePostsLoading] = useState(false)

  const fetchMore = useCallback(async () => {
    setIsMorePostsLoading(true)

    const postsResponse = await prismicClient().query(
      [Prismic.Predicates.at('document.type', 'post'), Prismic.Predicates.not('my.post.is_top', true)],
      {orderings: '[my.post.date desc]', page: page + 1, pageSize: itemsPerPage},
    )

    const newPosts: Post[] = R.map(
      result => R.mergeRight(result.data as Post, {uid: result.uid}),
      postsResponse.results,
    )

    setPage(R.inc)
    setPosts(loadedPosts => [...loadedPosts, ...newPosts])
    setIsMorePostsLoading(false)
  }, [page])

  useEffect(() => {
    if(isMorePostsLoading)
      return () => {}

    const target = loadMoreRef.current

    const io = new IntersectionObserver(
      async entries => {
        if(entries && entries[0].isIntersecting && page < props.totalPages)
          await fetchMore()
      },

      {root: null, rootMargin: '350px', threshold: 1.0},
    )

    io.observe(target)
    return () => io.unobserve(target)
  }, [fetchMore, isMorePostsLoading, page, props.totalPages])

  return <Layout className={styles.list} isBlogDomain>
    <div className="section type--top-stories">
      <Header className="header">{t('topStories')}</Header>

      <div className="list">
        {props.topPosts.map(post => <PromoCard
          as={`/${post.uid}`}
          className="item"
          date={post.date}
          description={RichText.asText(post.excerpt || [])}
          href={`/[gender]?gender=${post.uid}`}
          imagePath={getHeroImagePath(post.content)}
          key={post.uid}
          slug={post.uid}
          tags={post.tags}
          title={RichText.asText(post.title)}
          videoPath={R.pathOr('', ['video', 'url'], post)}
        />)}
      </div>
    </div>

    <div className="section type--more-stories">
      <Header
        additionalContent={props.totalPages > itemsPerPage && <UnderlineWrapper className="link" isPermanent>
          <Link href="/posts">{t('seeAllStories')}</Link>
        </UnderlineWrapper>}

        className="header"
      >{t('moreStories')}</Header>

      <div className="list">
        {posts.map(post => <BlogPostCard
          as={`/${post.uid}`}
          className="item"
          date={post.date}
          href={`/[gender]?gender=${post.uid}`}
          imagePath={getHeroImagePath(post.content)}
          key={post.uid}
          slug={post.uid}
          title={RichText.asText(post.title)}
          videoPath={R.pathOr('', ['video', 'url'], post)}
        />)}
      </div>

      <div className="intersection-observer-anchor" ref={loadMoreRef} />
      {isMorePostsLoading && <div className="loading-message">{t('loading')}</div>}
      {page === props.totalPages && <div className="empty-message">{t('noBlogPostsFound')}</div>}
    </div>
  </Layout>
}

Home.getInitialProps = async params => {
  const topPostsResponse = await prismicClient(params.req).query(
    [Prismic.Predicates.at('document.type', 'post'), Prismic.Predicates.at('my.post.is_top', true)],
    {orderings: '[my.post.date desc]'},
  )

  const postsResponse = await prismicClient(params.req).query(
    [Prismic.Predicates.at('document.type', 'post'), Prismic.Predicates.not('my.post.is_top', true)],
    {orderings: '[my.post.date desc]', pageSize: itemsPerPage},
  )

  return {
    hasPageTransition: true,

    posts: R.map(
      result => R.mergeRight(result.data, {uid: result.uid}),
      postsResponse.results,
    ),

    topPosts: R.map(
      result => R.mergeRight(result.data, {tags: result.tags, uid: result.uid}),
      topPostsResponse.results,
    ),

    totalPages: postsResponse.total_pages,
  }
}

export {Home}
