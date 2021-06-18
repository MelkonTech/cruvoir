import cn from 'classnames'
import {CSSProperties} from 'react'
import {Icon as IconType} from 'components/common/types'
import styles from './index.css'

export function Icon(props: {
  className?: string
  name: IconType
}) {
  return <div
    className={cn(styles.icon, props.className)}

    style={{
      '--color': `var(--icon--color-${props.name})`,
      '--image': `var(--icon--image-${props.name})`,
    } as CSSProperties}
  />
}
