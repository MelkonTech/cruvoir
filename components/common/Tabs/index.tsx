import * as R from 'ramda'
import cn from 'classnames'
import {ReactNode} from 'react'
import styles from './index.css'

export function Tabs(props: {
  activeTab: string
  children: ReactNode
  className?: string

  tabs: {
    caption: string
    id: string
  }[]

  setActiveTab: Function
}) {
  return <div className={cn(styles.tabs, props.className)}>
    <div className="buttons">
      {R.map(tab => <button
        className={cn('button', {'is-active': tab.id === props.activeTab})}
        key={tab.id}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => props.setActiveTab(tab.id)}
        type="button"
      >{tab.caption}</button>, props.tabs)}
    </div>

    {props.children}
  </div>
}
