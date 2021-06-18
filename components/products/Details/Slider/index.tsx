import cn from 'classnames'
import {Slider as CommonSlider} from 'components/common/Slider'
import {Image} from 'components/common/types'
import {Slide} from './Slide'
import styles from './index.css'

export function Slider(props: {
  className?: string
  images: Image[]
  showPreview: (i: number) => void
  title: string
}) {
  return <CommonSlider
    className={cn(styles.slider, props.className)}
    hasNumeration
    hasThumbs
    images={props.images}
    listClassName="styled-scrollbar"
    noStyles
  >
    {props.images.map((image, i) => <Slide
      className="slide"
      image={image}
      index={i}
      key={image.id}
      showPreview={props.showPreview}
      title={props.title}
    />)}
  </CommonSlider>
}
