import {ArchiveList} from './ArchiveList'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import styles from './index.css'
import {TagsList} from './TagsList'

export function Sidebar(props: {
  className?: string
  close: () => void
  featuredTags: string[]
  selectedMonth: number
  selectedTag: string
  selectedYear: number
}) {
  return <div className={cn(styles.sidebar, props.className)}>
    <div className="active-layer" onClick={props.close} />

    <div className="wrapper">
      <div className="button-section">
        <button className="button" onClick={props.close}>
          <Icon className="icon" name="filter-to-close" />
        </button>
      </div>

      <div className="scroll styled-scrollbar">
        <ArchiveList
          className="section"
          selectedMonth={props.selectedMonth}
          selectedYear={props.selectedYear}
        />

        <TagsList
          className="section"
          selectedTag={props.selectedTag}
          featuredTags={props.featuredTags}
        />
      </div>
    </div>
  </div>
}
