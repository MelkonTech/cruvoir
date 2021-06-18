import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'

export function Item(props: {
  children: string
  className?: string
  clear: () => void
}) {
  return <div className={cn(styles.item, props.className)}>
    <span className="title">{decodeURI(props.children)}</span>

    <button className="button" onClick={props.clear} type="button">
      <Icon className="icon" name="cross" />
    </button>
  </div>
}
