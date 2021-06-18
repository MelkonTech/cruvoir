import cn from 'classnames'
import {Image} from 'components/common/types'
import styles from './index.css'
import {useCallback} from 'react'

export function Slide(props: {
  className?: string
  image: Image
  index: number
  showPreview: (i: number) => void
  title: string
}) {
  const showPreview = props.showPreview

  const show = useCallback(() => {
    showPreview(props.index)
  }, [props.index, showPreview])

  return <div className={cn(styles.slide, props.className)} onClick={show}>
    <img
      alt={props.image.altText || props.title}
      className="image"
      src={props.image.originalSrc}
    />
  </div>
}
