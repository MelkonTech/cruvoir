import cn from 'classnames'
import {Image} from 'components/common/types'
import styles from './index.css'

export function Slide(props: {
  className?: string
  image: Image
  title: string
}) {
  return <div className={cn(styles.slide, props.className)}>
    <img
      alt={props.image.altText || props.title}
      className="image"
      src={props.image.originalSrc}
    />
  </div>
}
