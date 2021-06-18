import {useClickOutside, usePopup} from 'components/common/hooks'
import cn from 'classnames'
import {Item} from './Item'
import {useRef} from 'react'

export function Dropdown(props: {
  className?: string
  currentItem: string
  intactId: string
  list: string[]
  onChange: (item: string) => void
  translations: Record<string, {full: string, short: string}>
}) {
  const popup = usePopup()
  const popupRef = useRef(null)
  useClickOutside({callback: popup.close, intactId: props.intactId, reference: popupRef})

  return <div className={props.className}>
    <button className="button" data-intact-id={props.intactId} onClick={popup.toggle}>
      {props.translations[props.currentItem] && props.translations[props.currentItem].short}
    </button>

    <div className={cn('list', {'is-shown': popup.isShown})} ref={popupRef}>
      {props.list.sort().map(item => <Item
        action={props.onChange}
        className={cn('item', {'is-selected': item === props.currentItem})}
        isShown={popup.isShown}
        key={item}
        onClick={popup.toggle}
        value={item}
      >
        {props.translations[item].full}
      </Item>)}
    </div>
  </div>
}
