import {ReactNode, useCallback, useState} from 'react'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'

export function StaticPageCollapsableSection(props: {
  children: ReactNode
  className?: string
  isCollapsed?: boolean
  title: string
}) {
  const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed)
  const toggleCollapsed = useCallback(() => setIsCollapsed(!isCollapsed), [isCollapsed])

  return <div className={cn(styles.staticPageCollapsableSection, props.className, {'is-collapsed': isCollapsed})}>
    <div className="header">
      <button className="title-button" onClick={toggleCollapsed} type="button">{props.title}</button>

      <div className="icons">
        <Icon className="icon" name="minus" />
        <Icon className="icon" name="minus" />
      </div>
    </div>

    <div className={cn('content styled-scrollbar', {'is-shown': !isCollapsed})}>
      {props.children}
    </div>
  </div>
}
