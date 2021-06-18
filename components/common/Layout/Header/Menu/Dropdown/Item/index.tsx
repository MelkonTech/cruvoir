import {useCallback} from 'react'

export function Item(props: {
  action: (item: string) => void
  className?: string
  children: string
  isShown: boolean
  onClick: () => void
  value: string
}) {
  const action = props.action
  const onClick = props.onClick

  const click = useCallback(() => {
    if(props.isShown)
      action(props.value)

    onClick()
  }, [action, onClick, props.isShown, props.value])

  return <div className={props.className}>
    <button className="button" onClick={click}>
      {props.children}
    </button>
  </div>
}
