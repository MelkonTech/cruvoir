import * as R from 'ramda'
import {List} from './List'
import {Section} from '../common/Section'
import {useTranslation} from 'i18n'

export function ArchiveList(props: {
  className?: string
  selectedMonth: number
  selectedYear: number
}) {
  const {t} = useTranslation()
  const currentYear = (new Date).getFullYear()

  return <Section className={props.className} title={t('archive')}>
    {R.map(
      year => <List
        key={year}
        selectedMonth={props.selectedMonth}
        selectedYear={props.selectedYear}
        year={year}
      />,

      R.reverse(R.range(currentYear - 5, currentYear + 1)),
    )}
  </Section>
}
