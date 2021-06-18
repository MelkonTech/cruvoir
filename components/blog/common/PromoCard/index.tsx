import cn from 'classnames'
import {Link} from 'components/common/Link'
import moment from 'moment'
import styles from './index.css'
import {useTranslation} from 'i18n'
const colorNames = ['aquamarine', 'orchid', 'mediumpurple']

export function PromoCard(props: {
  as: string
  className?: string
  date: string
  description: string
  href: string
  imagePath: string
  slug: string
  tags: string[]
  title: string
  videoPath?: string
}) {
  const {i18n} = useTranslation()

  return <div className={cn(styles.promoCard, props.className)}>
    <div className="section">
      <div className="header">
        <Link as={props.as} className="title" href={props.href}>{props.title}</Link>
        {' '}

        <time className="date" dateTime={props.date}>
          {moment(props.date).locale(i18n.language || i18n.options['defaultLanguage']).format('MMMM D, YYYY')}
        </time>
      </div>

      <p className="description">{props.description}</p>

      <div className="tags">
        {props.tags.map(tag => <div className="tag" key={tag}>{tag}</div>)}
      </div>
    </div>

    <div
      className={cn(
        'picture',

        {[`background-color--${colorNames[
          Array
            .from(props.slug)
            .map((char, index) => props.slug.charCodeAt(index))
            .reduce((a, b) => a + b, 0) % colorNames.length
        ]}`]: !props.imagePath},
      )}
    >
      {props.imagePath && !props.videoPath && <img alt={props.title} className="image" src={props.imagePath} />}
      {props.videoPath && <video className="video" src={props.videoPath} />}
    </div>
  </div>
}
