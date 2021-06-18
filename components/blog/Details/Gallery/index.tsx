import cn from 'classnames'
import {memo} from 'react'
import {PostImage} from '../types'
import {Slider} from 'components/common/Slider'
import styles from './index.css'

export const Gallery = memo(function Gallery(props: {
  className?: string
  images: PostImage[]
  showPreviewPopup: (i: number) => void
}) {
  return <Slider
    className={cn(styles.gallery, props.className)}
    hasNavigation
    noStyles
  >
    {props.images.map((image: PostImage, index) => <div
      className="slide"
      key={image.thumbnail}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={() => props.showPreviewPopup(index)}
    >
      <img className="image" src={image.thumbnail} />
    </div>)}
  </Slider>
})
