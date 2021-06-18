import cn from 'classnames'
import {Dropdown} from './Dropdown'
import {Gender} from 'components/common/types'
import getConfig from 'next/config'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import {Newsletter} from './Newsletter'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {useTranslation} from 'i18n'
const {publicRuntimeConfig} = getConfig()

export function Footer(props: {
  className?: string
  gender: Gender
  isBlogDomain?: boolean
}) {
  const {t} = useTranslation()

  return <footer className={cn(styles.footer, props.className)}>
    <div className="section">
      <div className="copyrights">
        <span className="string string--first">© 2020 Cruvoir corp.</span>
        <span className="string string--second">{t('allRightsReserved')}</span>
      </div>

      <div className="socials">
        <a className="link" href="http://facebook.com/Cruvoir" target="_blank" title="Facebook">
          <Icon className="icon" name="facebook" />
        </a>

        <a className="link" href="/" target="_blank" title="Twitter">
          <Icon className="icon" name="twitter" />
        </a>

        <a className="link" href="http://instagram.com/cruvoir" target="_blank" title="Instagram">
          <Icon className="icon" name="instagram" />
        </a>

        <a className="link" href="/" target="_blank" title="Tumblr">
          <Icon className="icon" name="tumblr" />
        </a>
      </div>
    </div>

    <div className="links">

      <UnderlineWrapper className="link">
        <Link href='contact-us'>
          {t('contacts')}
        </Link>
      </UnderlineWrapper>

      <Dropdown
        className="dropdown"
        intactId="faq-dropdown"

        items={[
          {href: '/shopping-at-cruvoir', title: t('shoppingAtCruvoir')},
          {href: '/shipping-and-handling', title: t('shippingAndHandling')},
          {href: '/returns', title: t('returns')},
          {href: '/privacy-policy', title: t('privacyPolicy')},
        ]}
      >FAQ</Dropdown>

      <UnderlineWrapper className="link">
        {props.isBlogDomain
          ? <a href={publicRuntimeConfig.NEXT_PUBLIC_APP_URL} target="_blank">
            {t('shop')}
          </a>

          : <a href={publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL} target="_blank">
            {t('blog')}
          </a>
        }
      </UnderlineWrapper>
    </div>

    <div className="newsletter">
      <h3 className="title">{t('get10OffWhenYouSignUp')}</h3>
      <Newsletter className="form" />
    </div>
  </footer>
}
