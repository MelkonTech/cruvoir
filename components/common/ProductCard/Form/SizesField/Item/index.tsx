import cn from 'classnames'
import {Field} from 'formik'
import styles from './index.css'

export function Item(props: {
  className?: string
  isAvailableForSale?: boolean
  name: string
  value: string
}) {
  return <div className={cn(styles.item, props.className)}>
    <div className="marker">
      {props.value}
    </div>

    <Field
      className={cn('input', {'is-disabled': !props.isAvailableForSale})}
      type="radio"
      name={props.name}
      value={props.value}
    />
  </div>
}
