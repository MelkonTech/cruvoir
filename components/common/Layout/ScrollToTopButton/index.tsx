import {useCallback, useEffect, useRef, useState} from 'react'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'
import {useTranslation} from 'i18n'

// How many  % have to scroll down the page to appear "Back to top" button.
const anchorMargin = 20

export function ScrollToTopButton(props: {
  className?: string
}) {
  const {t} = useTranslation()
  const scrollToTopAnchorRef = useRef(null)
  const [isScrollToTopButtonShown, setScrollToTopButtonShown] = useState(false)
  const scrollToTop = useCallback(() => scrollToTopAnchorRef.current.scrollIntoView({behavior: 'smooth'}), [])

  useEffect(() => {
    if('IntersectionObserver' in window) {
      const scrollToTopAnchorElement = scrollToTopAnchorRef.current

      const observer = new IntersectionObserver(
        entries => setScrollToTopButtonShown(!entries[0].isIntersecting),
        {rootMargin: `${anchorMargin}% 0% 0% 0%`},
      )

      observer.observe(scrollToTopAnchorElement)
      return () => observer.unobserve(scrollToTopAnchorElement)
    }

    else{
      const handleScroll = () => setScrollToTopButtonShown(window.scrollY > anchorMargin * window.innerHeight / 100)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div className={cn(styles.scrollToTopButton, props.className)} ref={scrollToTopAnchorRef}>
    <button
      className={cn('button', {'is-shown': isScrollToTopButtonShown})}
      onClick={scrollToTop}
      title={t('backToTop')}
    >
      <Icon className="icon" name="scroll-to-top-arrow" />
    </button>
  </div>
}
