import {Children, Fragment, ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import cn from 'classnames'
import {Image} from 'components/common/types'
import styles from './index.css'

export function Slider(props: {
  children: ReactNode
  className?: string
  emptyMessage?: string | ReactNode
  hasKeyboardNavigation?: boolean
  hasNavigation?: boolean
  hasNumeration?: boolean
  hasPagination?: boolean
  hasThumbs?: boolean
  images?: Image[]
  initialSlideNumber?: number
  listClassName?: string
  noStyles?: boolean
}) {
  const listRef = useRef(null)
  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(false)
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false)

  const scrollToNextSlide = useCallback(() => {
    listRef.current.scroll({
      behavior: 'smooth',
      left    : listRef.current.scrollLeft + listRef.current.clientWidth,
    })
  }, [])

  const scrollToPrevSlide = useCallback(() => {
    listRef.current.scroll({
      behavior: 'smooth',
      left    : listRef.current.scrollLeft - listRef.current.clientWidth,
    })
  }, [])

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const selectSlide = useCallback(e => {
    // offset * slideIndex
    listRef.current.scrollLeft = listRef.current.offsetWidth * Array.from(
      e.currentTarget.parentElement.children,
    ).indexOf(e.currentTarget)
  }, [])

  useEffect(() => {
    if(!listRef.current || !listRef.current.scroll)
      return

    if(Number.isInteger(props.initialSlideNumber))
      listRef.current.scroll({
        behavior: 'auto',
        left    : listRef.current.querySelector('.slide').offsetWidth * props.initialSlideNumber,
      })
  }, [props.initialSlideNumber])

  useEffect(() => {
    if(!listRef.current)
      return

    const handleResize = () => {
      listRef.current.scrollLeft = listRef.current.scrollLeft
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [listRef])

  useEffect(() => {
    if(!listRef.current)
      return

    const element = listRef.current

    const scrollHandler = () => {
      setPrevButtonDisabled(element.scrollLeft < element.clientWidth / 2)
      setNextButtonDisabled(element.scrollLeft > element.scrollWidth - element.clientWidth * 1.5)

      setCurrentSlideIndex(
        Math.floor((element.scrollLeft + element.offsetWidth / 2) / element.offsetWidth),
      )
    }

    scrollHandler()
    element.addEventListener('scroll', scrollHandler)
    return () => element.removeEventListener('scroll', scrollHandler)
  }, [props.children])

  useEffect(() => {
    if(props.hasKeyboardNavigation) {
      const handlerPrev = e => {
        if(e.key === 'ArrowLeft')
          scrollToPrevSlide()
      }

      document.addEventListener('keyup', handlerPrev)
      return () => document.removeEventListener('keyup', handlerPrev)
    }
  }, [props.hasKeyboardNavigation, scrollToPrevSlide])

  useEffect(() => {
    if(props.hasKeyboardNavigation) {
      const handler = e => {
        if(e.key === 'ArrowRight')
          scrollToNextSlide()
      }

      document.addEventListener('keyup', handler)
      return () => document.removeEventListener('keyup', handler)
    }
  }, [props.hasKeyboardNavigation, scrollToNextSlide])

  return <div className={cn({[styles.slider]: !props.noStyles}, props.className)}>
    {Children.count(props.children) > 0
      ? <Fragment>
        <div className={cn('list', props.listClassName)} ref={listRef}>
          {props.children}

          {props.hasThumbs && props.images && <div className="thumbs">
            {props.images.map((item, index) => <div
              className={cn('item', {'is-selected': index === currentSlideIndex})}
              key={index}
              onClick={selectSlide}
            >
              <img alt={item.altText} className="image" src={item.originalSrc} />
            </div>)}
          </div>}
        </div>

        {Children.count(props.children) > 1 && <Fragment>
          {props.hasNavigation && <div className="navigation">
            <button
              className={cn('button', 'type--prev', {
                'is-disabled': isPrevButtonDisabled,
                'is-shown'   : !isPrevButtonDisabled || !isNextButtonDisabled,
              })}

              onClick={scrollToPrevSlide}
              type="button"
            />

            <button
              className={cn('button', 'type--next', {
                'is-disabled': isNextButtonDisabled,
                'is-shown'   : !isPrevButtonDisabled || !isNextButtonDisabled,
              })}

              onClick={scrollToNextSlide}
              type="button"
            />
          </div>}

          {props.hasNumeration && <div className="numeration">
            {`${currentSlideIndex + 1} / ${Children.count(props.children)}`}
          </div>}

          {props.hasPagination && <div className="pagination">
            {Children.map(props.children, (item, index) => <button
              className={cn('button', {'is-selected': index === currentSlideIndex})}
              key={index}
              onClick={selectSlide}
              type="button"
            />)}
          </div>}
        </Fragment>}
      </Fragment>

      : props.emptyMessage
        ? typeof props.emptyMessage === 'object'
          ? props.emptyMessage
          : <div className="empty-message">{props.emptyMessage}</div>

        : <div className="empty-message">No results</div>
    }
  </div>
}
