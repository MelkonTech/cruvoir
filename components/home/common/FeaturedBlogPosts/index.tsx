import * as R from 'ramda'
import {BlogPostCard} from 'components/common/BlogPostCard'
import cn from 'classnames'
import getConfig from 'next/config'
import {getHeroImagePath} from 'components/common/helpers'
import {memo} from 'react'
import {Post} from 'components/common/types'
import {RichText} from 'prismic-reactjs'
import {Slider} from 'components/common/Slider'
import styles from './index.css'
const {publicRuntimeConfig} = getConfig()

export const FeaturedBlogPosts = memo(function FeaturedBlogPosts(props: {
  className?: string
  posts: Post[]
}) {
  return <Slider className={cn(styles.featuredBlogPosts, props.className)} hasNavigation noStyles>
    {props.posts.map((post, postIndex) => <div className="slide" key={`post-${postIndex}`}>
      <BlogPostCard
        isAbsoluteHref
        date={post.date}
        href={`${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${post.uid}`}
        key={`post-${postIndex}`}
        imagePath={getHeroImagePath(post.content)}
        slug={post.uid}
        title={RichText.asText(post.title)}
        videoPath={R.pathOr('', ['video', 'url'], post)}
      />
    </div>)}
  </Slider>
})
