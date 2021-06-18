import {ReactNode, useCallback, useState} from 'react'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {useTranslation} from 'i18n'

export function CollapsableSection(props: {
  children: ReactNode
  className?: string
  clear?: () => void
  isClearButtonShown?: boolean
  isCollapsed?: boolean
  numberOfSelected?: number
  title: string
}) {
  const {t} = useTranslation()
  const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed)
  const toggleCollapsed = useCallback(() => setIsCollapsed(!isCollapsed), [isCollapsed])

  return <div className={cn(styles.collapsableSection, props.className, {'is-collapsed': isCollapsed})}>
    <div className="header">
      <button className="title-button" onClick={toggleCollapsed} type="button">
        {props.title}
        <span className={cn('counter', {'is-shown': props.numberOfSelected > 0})}>{props.numberOfSelected}</span>
      </button>

      <UnderlineWrapper className={cn('clear-button', {'is-shown': props.isClearButtonShown})}>
        <button className="button" onClick={props.clear} type="button">{t('clear')}</button>
      </UnderlineWrapper>

      <div className="icons">
        <Icon className="icon" name="minus" />
        <Icon className="icon" name="minus" />
      </div>
    </div>

    <div className={cn('list styled-scrollbar', {'is-shown': !isCollapsed})}>
      {props.children}
    </div>
  </div>
}
