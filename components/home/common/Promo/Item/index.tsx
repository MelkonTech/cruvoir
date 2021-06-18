import {CSSProperties, Fragment} from 'react'
import cn from 'classnames'
import {Link} from 'components/common/Link'
import {PromoItemData} from 'components/home/common/types'
import styles from './index.css'
import {useTranslation} from 'i18n'
import {VideoPlayer} from 'components/common/VideoPlayer'

export function Item(props: {
  className?: string
  data?: PromoItemData
  gender: string
  lgColSpan: number
  lgRowSpan: number
  isVideoAutoplayable?: boolean
  mdColSpan: number
  mdRowSpan: number
  type?: string
  videoUrl?: string
}) {
  const {t} = useTranslation()

  if(!props.data && !props.videoUrl)
    return null

  return <Fragment>
    {props.type === 'image' && <div
      className={cn(styles.item, props.className)}

      style={{
        '--lg-col-span': props.lgColSpan,
        '--lg-row-span': props.lgRowSpan,
        '--md-col-span': props.mdColSpan,
        '--md-row-span': props.mdRowSpan,
      } as CSSProperties}
    >
      <div className="picture">
        {props.data.image && <img alt={props.data.title} className="image" src={props.data.image.url} />}
      </div>

      <div className="content">
        <h2 className="title">{props.data.title}</h2>
        {props.data.url.url && <a className="link" href={props.data.url.url}>{t('shopNow')}</a>}

        {!props.data.url.url && <Link
          className="link"

          // eslint-disable-next-line max-len
          as={`/${props.gender}/shop/collection/${props.data.collection || 'all'}/category/${props.data.category || 'all'}/subcategory/${props.data.subcategory || 'all'}`}

          href="/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]"
        >{t('shopNow')}</Link>}
      </div>
    </div>}

    {props.type === 'video' && <VideoPlayer
      className={props.className}
      isVideoAutoplayable={props.isVideoAutoplayable}

      style={{
        '--lg-col-span': props.lgColSpan,
        '--lg-row-span': props.lgRowSpan,
        '--md-col-span': props.mdColSpan,
        '--md-row-span': props.mdRowSpan,
      } as CSSProperties}

      videoUrl={props.videoUrl}
    />}
  </Fragment>
}
