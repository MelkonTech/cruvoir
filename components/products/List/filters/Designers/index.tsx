import * as R from 'ramda'
import {CheckboxGroup} from 'components/products/List/filters/common/CheckboxGroup'
import {getGender} from 'components/common/helpers'
import {nameToHandle} from 'components/common/helpers'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'
import {vendors} from 'settings/vendors'

export function Designers(props: {
  className?: string
  isBlogDomain?: boolean
}) {
  const {t} = useTranslation()
  const router = useRouter()
  const gender = getGender(router, props.isBlogDomain)

  return <CheckboxGroup
    className={props.className}
    isCollapsed
    name="vendors"
    title={t('designers')}

    variants={R.map(vendor => ({
      title: vendor.title,
      value: nameToHandle(vendor.title),
    }), vendors[gender])}
  />
}
