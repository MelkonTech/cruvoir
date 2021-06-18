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
      as="/shopping-at-cruvoir"
      className="link"
      href="/shopping-at-cruvoir"
    >{t('shoppingAtCruvoir')}</Link>

    <Link
      activeClassName="is-selected"
      as="/shipping-and-handling"
      className="link"
      href="/shipping-and-handling"
    >{t('shippingAndHandling')}</Link>

    <Link
      activeClassName="is-selected"
      as="/returns"
      className="link"
      href="/returns"
    >{t('returns')}</Link>

    <Link
      activeClassName="is-selected"
      as="/privacy-policy"
      className="link"
      href="/privacy-policy"
    >{t('privacyPolicy')}</Link>
  </div>
}
