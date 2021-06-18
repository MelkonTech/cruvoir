import {RefObject, useCallback, useEffect} from 'react'

export function useClickOutside(params: {
  callback: Function
  intactId: string
  reference: RefObject<Element>
}) {
  const click = useCallback(e => {
    if(
      params.reference.current &&
      !params.reference.current.contains(e.target) &&
      !e.target.closest(`[data-intact-id="${params.intactId}"]`)
    )
      params.callback()
  }, [params])

  useEffect(() => {
    window.addEventListener('click', click)
    return () => window.removeEventListener('click', click)
  }, [click])
}
