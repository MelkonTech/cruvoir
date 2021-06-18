import {useEffect, useMemo, useState} from 'react'

export function useViewport(props: {
  initial?: boolean
  onResize?: (_: Number) => void
} = {initial: false}) {
  const [viewportWidth, setViewportWidth] = useState<number>()
  const [isLoaded, setIsLoaded] = useState(props.initial)

  useEffect(() => {
    setIsLoaded(true)
    setViewportWidth(window.innerWidth)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)

      if(props.onResize)
        props.onResize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [props])

  return useMemo(() => ({
    isLoaded,
    width: viewportWidth,
  }), [isLoaded, viewportWidth])
}
