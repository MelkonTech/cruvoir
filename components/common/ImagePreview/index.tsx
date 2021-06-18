import cn from 'classnames'
import {Slider as CommonSlider} from 'components/common/Slider'
import {Icon} from 'components/common/Icon'
import {Image} from 'components/common/types'
import {Slide} from './Slide'
import styles from './index.css'
import {useEffect} from 'react'

export function ImagePreview(props: {
  className?: string
  closePreview: () => void
  initialSlideNumber:number
  images: Image[]
  title: string
}) {
  const closePreview = props.closePreview

  useEffect(() => {
    const handler = e => {
      if(e.key === 'Escape')
        closePreview()
    }

    document.addEventListener('keyup', handler)
    return () => document.removeEventListener('keyup', handler)
  }, [closePreview])

  return <div className={cn(styles.preview, props.className)}>
    <CommonSlider
      className="slider"
      hasKeyboardNavigation
      hasNavigation
      hasNumeration
      initialSlideNumber={props.initialSlideNumber}
      noStyles
    >
      {props.images.map(image => <Slide
        className="slide"
        image={image}
        key={image.id}
        title={props.title}
      />)}
    </CommonSlider>

    <button className="button" onClick={props.closePreview} >
      <Icon className="icon" name="cross" />
    </button>
  </div>
}
