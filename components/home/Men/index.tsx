import * as R from 'ramda'
import {FeaturedBlogPosts} from 'components/home/common/FeaturedBlogPosts'
import {HomeLayout} from 'components/home/common/HomeLayout'
import {Post} from 'components/common/types'
import {ProductSliderByCollection} from 'components/common/ProductSliderByCollection'
import {ProductsSlider} from 'components/common/ProductsSlider'
import {Promo} from 'components/home/common/Promo'
import {Item as PromoItem} from 'components/home/common/Promo/Item'
import {PromoItemData} from 'components/home/common/types'
import {RecentContext} from 'components/common/RecentContext'
import {Section} from 'components/home/common/Section'
import {useContext} from 'react'
import {useTranslation} from 'i18n'

export function Men(props: {
  cmsContent: {
    featured_collection?: string
    is_video_autoplayable: boolean
    promo: PromoItemData[]
    video: {url?: string}
  }

  topPosts: Post[]
}) {
  const {t} = useTranslation()
  const recentCtx = useContext(RecentContext)
  const hasVideo = props.cmsContent.video && props.cmsContent.video.url

  const featuredCollectionSlug = R.propOr<string, {featured_collection?: string}, ''>(
    '',
    'featured_collection',
    props.cmsContent,
  )

  return <HomeLayout>
    <Promo className="promo">
      {!hasVideo && <PromoItem
        className="item"
        data={props.cmsContent.promo[0]}
        gender="men"
        lgColSpan={4}
        lgRowSpan={2}
        mdColSpan={2}
        mdRowSpan={1}
        type="image"
      />}

      {hasVideo && <PromoItem
        className="item"
        gender="men"
        lgColSpan={4}
        lgRowSpan={2}
        isVideoAutoplayable={props.cmsContent.is_video_autoplayable}
        mdColSpan={2}
        mdRowSpan={1}
        type="video"
        videoUrl={props.cmsContent.video.url}
      />}

      <PromoItem
        className="item"
        data={props.cmsContent.promo[hasVideo ? 0 : 1]}
        gender="men"
        lgColSpan={1}
        lgRowSpan={1}
        mdColSpan={1}
        mdRowSpan={1}
        type="image"
      />

      <PromoItem
        className="item"
        data={props.cmsContent.promo[hasVideo ? 1 : 2]}
        gender="men"
        lgColSpan={1}
        lgRowSpan={1}
        mdColSpan={1}
        mdRowSpan={1}
        type="image"
      />

      <PromoItem
        className="item"
        data={props.cmsContent.promo[hasVideo ? 2 : 3]}
        gender="men"
        lgColSpan={2}
        lgRowSpan={2}
        mdColSpan={2}
        mdRowSpan={2}
        type="image"
      />

      <PromoItem
        className="item"
        data={props.cmsContent.promo[hasVideo ? 3 : 4]}
        gender="men"
        lgColSpan={1}
        lgRowSpan={1}
        mdColSpan={1}
        mdRowSpan={1}
        type="image"
      />

      <PromoItem
        className="item"
        data={props.cmsContent.promo[hasVideo ? 4 : 5]}
        gender="men"
        lgColSpan={1}
        lgRowSpan={1}
        mdColSpan={1}
        mdRowSpan={1}
        type="image"
      />
    </Promo>

    {Boolean(featuredCollectionSlug) && <Section className="section" title={t('featured')}>
      <ProductSliderByCollection
        className="section"
        handle={featuredCollectionSlug.split('/collections/')[1] || featuredCollectionSlug}
      />
    </Section>}

    {recentCtx.isReady && recentCtx.products.length > 0 && <Section className="section" title={t('recentlyViewed')}>
      <ProductsSlider className="section" products={recentCtx.products} />
    </Section>}

    <Section className="section" title={t('featuredInOurBlog')}>
      <FeaturedBlogPosts className="section" posts={props.topPosts} />
    </Section>
  </HomeLayout>
}
