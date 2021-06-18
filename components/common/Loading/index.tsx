import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'

export function Loading(props: {
  className?: string
  isShown?: boolean
}) {
  return <div className={cn(styles.loading, props.className, {'is-shown': props.isShown})}>
    <Icon className="icon" name="loading" />
  </div>
}
