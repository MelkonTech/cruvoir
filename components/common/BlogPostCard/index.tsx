import cn from 'classnames'
import {Link} from 'components/common/Link'
import moment from 'moment'
import styles from './index.css'
import {useTranslation} from 'i18n'
const colorNames = ['aquamarine', 'orchid', 'mediumpurple']

export function BlogPostCard(props: {
  as?: string
  className?: string
  date: string
  href: string
  imagePath: string
  isAbsoluteHref?: boolean
  slug: string
  title: string
  videoPath?: string
}) {
  const {i18n} = useTranslation()

  return <div className={cn(styles.card, props.className)}>
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

    {props.isAbsoluteHref
      ? <a className="title" href={props.href}>{props.title}</a>
      : <Link as={props.as} className="title" href={props.href}>{props.title}</Link>
    }

    <time className="date" dateTime={props.date}>
      {moment(props.date).locale(i18n.language || i18n.options['defaultLanguage']).format('MMMM D, YYYY')}
    </time>
  </div>
}
