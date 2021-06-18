import * as R from 'ramda'
import {isServer, prismicClient} from 'components/common/helpers'
import {BlogPostCard} from 'components/common/BlogPostCard'
import {Breadcrumbs} from 'components/common/Breadcrumbs'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import {EmptyMessage} from 'components/common/EmptyMessage'
import getConfig from 'next/config'
import {getHeroImagePath} from 'components/common/helpers'
import {Layout} from 'components/common/Layout'
import moment from 'moment'
import {Pagination} from './Pagination'
import {Post} from 'components/common/types'
import Prismic from 'prismic-javascript'
import {RichText} from 'prismic-reactjs'
import {Sidebar} from './Sidebar'
import styles from './index.css'
import {useMemo} from 'react'
import {usePopup} from 'components/common/hooks'
import {useTranslation} from 'i18n'
const {publicRuntimeConfig} = getConfig()
const blogHost = () => publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL.replace(/https?:\/\//, '')

function List(props: {
  featuredTags: string[]
  month: number
  page: number
  posts: Post[]
  pathname: string
  tag?: string
  query: Record<string, string>
  totalPages: number
  year: number
}) {
  const {t, i18n} = useTranslation()

  const breadcrumbs = useMemo(() => {
    const result = [{as: '/', href: '/', title: t('allStories')}]

    if(props.tag)
      result.push({as: null, href: null, title: props.tag})

    if(props.year && props.month)
      result.push({
        as  : null,
        href: null,

        title: moment(`${props.year}-${props.month}`, 'YYYY-M')
          .locale(i18n.language || i18n.options['defaultLanguage'])
          .format('MMMM YYYY'),
      })

    return result
  }, [i18n.language, i18n.options, props.month, props.tag, props.year, t])

  const sidebarPopup = usePopup(false)

  if(!props.posts)
    return <div>{t('loading')}</div>

  return <Layout className={styles.list} isBlogDomain>
    <Breadcrumbs className="breadcrumbs" items={breadcrumbs} />

    <Button
      appearance="outline"
      className="button"
      onClick={sidebarPopup.show}
    >
      {t('showArchive')}
    </Button>

    <Sidebar
      className={cn('sidebar', {'is-shown': sidebarPopup.isShown})}
      close={sidebarPopup.close}
      featuredTags={props.featuredTags}
      selectedMonth={props.month}
      selectedTag={props.tag}
      selectedYear={props.year}
    />

    <div className="list">
      {props.posts.map(post => <BlogPostCard
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

      {props.totalPages > 1 && <Pagination
        className="pagination"
        page={props.page}
        pathname={props.pathname}
        query={props.query}
        totalPages={props.totalPages}
      />}

      {props.posts.length === 0 && <EmptyMessage className="empty-message">
        {t('noBlogPostsFound')}
      </EmptyMessage>}
    </div>
  </Layout>
}

List.getInitialProps = async params => {
  const itemsPerPage = 15
  const page = Number(R.pathOr('1', ['query', 'page'], params))
  const month = Number(R.path(['query', 'month'], params)) || null

  // Blog URLs intersect with the URLs of the rest of the app
  const year = Number(R.path(['query', 'gender'], params)) || null

  const tag = params.query.tagslug

  const featuredTags = R.compose<
    {tags: string[]}[],
    string[][],
    string[],
    string[]
  >(R.uniq, R.flatten, R.pluck('tags'))((await prismicClient(params.req).query(
    [Prismic.Predicates.at('document.type', 'post')],
    {page: 1, pageSize: 100},
  )).results)

  // GraphQL API would not allow implementing the pagination like in the old blog
  const postsResponse = await prismicClient(params.req).query(
    [
      Prismic.Predicates.at('document.type', 'post'),
      ...tag ? [Prismic.Predicates.at('document.tags', [tag])] : [],
      ...month ? [Prismic.Predicates.month('my.post.date', month)] : [],
      ...year ? [Prismic.Predicates.year('my.post.date', year)] : [],
    ],

    {orderings: '[my.post.date desc]', page, pageSize: itemsPerPage},
  )

  const totalPages = postsResponse.total_pages

  const posts = R.map(
    result => R.merge(result.data, {tags: result.tags, uid: result.uid}),
    postsResponse.results,
  )

  if((isServer() ? params.req.headers.host : location.host) !== blogHost())
    params.res.statusCode = 404

  return {
    featuredTags,
    hasPageTransition: true,
    month,
    page,
    posts,
    tag,
    totalPages,
    year,
  }
}

export {List}
