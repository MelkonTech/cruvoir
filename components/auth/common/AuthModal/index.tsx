import {MouseEvent, ReactNode} from 'react'
import styles from './index.css'

export function AuthModal(props: {
  children: ReactNode
  close: (e: MouseEvent) => void
}) {
  return <div className={styles.authModal}>
    <div className="background" onClick={props.close} />

    <div className="window">
      {props.children}
    </div>
  </div>
}
