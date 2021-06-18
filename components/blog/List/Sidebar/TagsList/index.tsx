import * as R from 'ramda'
import cn from 'classnames'
import {ListItem} from '../common/ListItem'
import {Section} from '../common/Section'
import {useTranslation} from 'i18n'

export function TagsList(props: {
  className?: string
  featuredTags: string[]
  selectedTag: string
}) {
  const {t} = useTranslation()

  return <Section className={props.className} title={t('tags')}>
    {R.map(tag => <ListItem
      as={`/t/${tag}`}
      className={cn('link', {'is-selected': props.selectedTag === tag})}
      href={`/t/[tagslug]?tagslug=${tag}`}
      key={tag}
    >
      {tag}
    </ListItem>, props.featuredTags)}
  </Section>
}
