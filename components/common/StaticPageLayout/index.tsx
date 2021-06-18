import cn from 'classnames'
import {Layout} from 'components/common/Layout'
import {ReactNode} from 'react'
import {Sidebar} from './Sidebar'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function StaticPageLayout(props: {
  children: ReactNode
  className?: string
}) {
  const {t} = useTranslation()

  return <Layout className={cn(styles.staticPageLayout, props.className)}>
    <h1 className="title">{t('infoCenter')}</h1>
    <Sidebar className="sidebar" />
    {props.children}
  </Layout>
}
