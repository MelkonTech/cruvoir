import cn from 'classnames'
import {Link} from 'components/common/Link'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function Sidebar(props: {
  className?: string
}) {
  const {t} = useTranslation()

  return <div className={cn(styles.sidebar, props.className)}>
    <Link
      activeClassName="is-selected"
      as="/profile/general"
      className="link"
      href="/profile/general"
    >{t('generalSettings')}</Link>

    <Link
      activeClassName="is-selected"
      as="/profile/addresses"
      className="link"
      href="/profile/addresses"
    >{t('shippingAddress_plural')}</Link>

    <Link
      activeClassName="is-selected"
      as="/profile/orders"
      className="link"
      href="/profile/orders"
    >{t('orderHistory_plural')}</Link>
  </div>
}
