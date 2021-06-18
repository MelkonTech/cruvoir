import * as R from 'ramda'
import {useCallback, useState} from 'react'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import {ListItem} from 'components/blog/List/Sidebar/common/ListItem'
import listItemStyles from 'components/blog/List/Sidebar/common/ListItem/index.css'
import styles from './index.css'
import {useTranslation} from 'i18n'

const monthNames = [
  'january', 'february', 'march', 'april', 'may', 'june', 'july',
  'august', 'september', 'october', 'november', 'december',
]

export function List(props: {
  selectedMonth: number
  selectedYear: number
  year: number
}) {
  const {t} = useTranslation()
  const [isContentShown, setContentShown] = useState(true)
  const toggleFolding = useCallback(() => setContentShown(isShown => !isShown), [])

  return <div className={cn(styles.list, {'is-folded': isContentShown})}>
    <header
      className={cn(listItemStyles.listItem, 'header', {'is-selected': props.selectedYear === props.year})}
      onClick={toggleFolding}
    >
      {props.year.toString()}
      <Icon className="icon" name="next-arrow" />
    </header>

    <div className="content">
      {R.map(month => <ListItem
        className={cn('link', {'is-selected': props.selectedYear === props.year && props.selectedMonth === month})}
        key={month}
        href={`/[gender]/[month]?gender=${props.year}&month=${String(month).padStart(2, '0')}`}
        as={`/${props.year}/${String(month).padStart(2, '0')}`}
      >
        {t(`monthName.${monthNames[month - 1]}`)}
      </ListItem>, R.range(1, 13))}
    </div>
  </div>
}
