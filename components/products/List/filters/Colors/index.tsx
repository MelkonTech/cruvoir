import * as R from 'ramda'
import {CheckboxGroup} from 'components/products/List/filters/common/CheckboxGroup'
import {colors} from './colors'
import {useMemo} from 'react'
import {useTranslation} from 'i18n'

export function Colors(props: {
  className?: string
}) {
  const {t} = useTranslation()

  const variants = useMemo(() => R.map(color => ({
    title: color,
    value: color,
  }), colors), [])

  return <CheckboxGroup
    className={props.className}
    isCollapsed
    name="colors"
    title={t('color_plural')}
    variants={variants}
  />
}
