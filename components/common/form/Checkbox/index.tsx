import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'
import {useField} from 'formik'

export function Checkbox(props: {
  caption: string | ReactNode
  className?: string
  name: string
}) {
  const [field] = useField(props.name)

  return <label className={cn(styles.checkbox, props.className)}>
    <input checked={Boolean(field.value)} className="input" type="checkbox" {...field} />
    <span className="caption">{props.caption}</span>
  </label>
}
