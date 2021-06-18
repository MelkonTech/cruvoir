import * as R from 'ramda'
import {Elements, RichText} from 'prismic-reactjs'
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from 'react-share'
import {getCookie, prismicClient} from 'components/common/helpers'
import React, {useCallback, useMemo, useState} from 'react'
import cn from 'classnames'
import Error from 'next/error'
import {Gallery} from './Gallery'
import getConfig from 'next/config'
import {getHeroImagePath} from 'components/common/helpers'
import Head from 'next/head'
import {Icon} from 'components/common/Icon'
import {ImagePreview} from 'components/common/ImagePreview'
import {Layout} from 'components/common/Layout'
import {Link} from 'components/common/Link'
import moment from 'moment'
import {Post} from 'components/common/types'
import {PostImage} from './types'
import {Image as PreviewImage} from 'components/common/types'
import Prismic from 'prismic-javascript'
import {ProductSliderByCollection} from 'components/common/ProductSliderByCollection'
import styles from './index.css'
import {usePopup} from '@ottofeller/hooks'
import {useTranslation} from 'i18n'
import {VideoPlayer} from 'components/common/VideoPlayer'
const {publicRuntimeConfig} = getConfig()
const propsWithUniqueKey = (props, key) => Object.assign(props || {}, {key})

// https://prismic.io/docs/reactjs/beyond-the-api/html-serializer
const blogHtmlSerializer = (type, element, content, children, key) => {
  if(type === Elements.paragraph)
    return React.createElement('p', propsWithUniqueKey({className: 'paragraph'}, key), children)

  if(type === Elements.image)
    return React.createElement(
      'img',
      propsWithUniqueKey({alt: element.alt || '', className: 'image', src: element.url}, key),
    )

  return null
}

function Details(props: {
  post: Post
}) {
  const relatedCollectionSlug = useMemo(() => {
    if(!props.post.related_collection)
      return 'women'

    return props.post.related_collection.split('/collections/')[1] || props.post.related_collection
  }, [props.post.related_collection])

  const {t, i18n} = useTranslation()
  const previewPopup = usePopup()
  const [initialPreviewSlideNumber, setInitialPreviewSlideNumber] = useState(0)

  const images = useMemo(() => R.map(R.applySpec({
    image    : galleryImage => R.pathOr(galleryImage.image.url, ['image', 'large', 'url'], galleryImage),
    thumbnail: R.path(['image', 'url']),
  }), R.propOr([], 'gallery', props.post)), [props.post])

  const showPreviewPopup = useCallback(i => {
    previewPopup.show()
    setInitialPreviewSlideNumber(i)
  }, [previewPopup])

  if(!props.post)
    return <Error statusCode={404} />

  const title = RichText.asText(props.post.title)
  const excerpt = RichText.asText(props.post.excerpt || [])
  const introImagePath = getHeroImagePath(props.post.content)
  const videoPath = props.post?.video?.url

  return <Layout className={styles.list} isBlogDomain>
    <Head>
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:url" property="og:url" content={`${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`} />
      {introImagePath && !videoPath && <meta key="og:image" property="og:image" content={introImagePath} />}
      {videoPath && <meta key="og:video" property="og:video" content={videoPath} />}
      <meta key="og:description" property="og:description" content={excerpt} />
    </Head>

    <div className={cn('header', {'has-image-or-video': introImagePath || videoPath})}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="intro">{excerpt}</p>

        <time className="date" dateTime={props.post.date}>
          {moment(props.post.date)
            .locale(i18n.language || i18n.options['defaultLanguage'])
            .format('MMMM D, YYYY')}
        </time>

        {props.post.author && <div className="author">By {props.post.author}</div>}
        <hr className="divider" />

        <div className="footer">
          {props.post.tags.length > 0 && <div className="tags">
            <div className="title">{t('tags')}:</div>

            <div className="list">
              {props.post.tags.map(tag => <Link
                as={`/t/${tag}`}
                className="tag"
                href={`/t/[tagslug]?tagslug=${tag}`}
                key={tag}
              >{tag}</Link>)}
            </div>
          </div>}

          <div className="socials">
            <FacebookShareButton
              className="link"
              quote={title}
              url={`${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`}
            >
              <Icon className="icon" name="facebook" />
            </FacebookShareButton>

            <PinterestShareButton
              className="link"
              description={title}
              media={introImagePath}
              url={`${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`}
            >
              <Icon className="icon" name="pinterest" />
            </PinterestShareButton>

            <TwitterShareButton
              className="link"
              title={title}
              url={`${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`}
            >
              <Icon className="icon" name="twitter" />
            </TwitterShareButton>
          </div>
        </div>
      </div>

      {introImagePath && !videoPath && <img alt={title} className="image" src={introImagePath} />}

      {videoPath && <VideoPlayer
        className="video"
        isVideoAutoplayable={props.post.is_video_autoplayable}
        videoUrl={videoPath}
      />}
    </div>

    <div className="content">
      <RichText render={props.post.content} htmlSerializer={blogHtmlSerializer} />
    </div>

    {!R.isEmpty(images) && <Gallery className="gallery" images={images} showPreviewPopup={showPreviewPopup} />}

    <ImagePreview
      className={cn('preview', {'is-shown': previewPopup.isShown})}
      closePreview={previewPopup.hide}
      initialSlideNumber={initialPreviewSlideNumber}

      images={R.compose<PostImage[], string[], PreviewImage[]>(
        R.map(R.applySpec({
          altText    : props.post.title,
          id         : R.identity,
          originalSrc: R.identity,
        })),

        R.pluck('image'),
      )(images)}

      title={props.post.title}
    />

    <div className="collections">
      <h2 className="title">{t('shopNow')}</h2>

      <ProductSliderByCollection
        className="slider"
        handle={relatedCollectionSlug}
      />
    </div>
  </Layout>
}

Details.getServerSideProps = async params => {
  const isPreview = params.query.slug === 'preview'

  let post

  const postReponse = (await prismicClient(params.req).query(
    [
      isPreview
        ? Prismic.Predicates.at('document.type', 'post')
        : Prismic.Predicates.at('my.post.uid', params.query.slug),
    ],

    isPreview ? {ref: getCookie({ctx: {req: params.req}, name: Prismic.previewCookie})} : {},
  )).results[0]

  if(postReponse)
    post = R.merge({tags: postReponse.tags, uid: postReponse.uid}, postReponse.data)

  if(!post) {
    post = {props: {}}

    params.res.statusCode = 404
    return post
  }

  return {props: {
    hasPageTransition: true,
    post,
  }}
}

export {Details}
