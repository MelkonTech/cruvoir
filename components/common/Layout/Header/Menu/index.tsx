import {Currency as CurrencyType, Gender} from 'components/common/types'
import {config as i18nConfig, useTranslation} from 'i18n'
import {useCallback, useContext, useMemo, useRef} from 'react'
import {addTranslationsFromPO} from 'components/common/helpers'
import {CartContext} from 'components/common/CartContext'
import {CategoryItem} from './CategoryItem'
import cn from 'classnames'
import {CurrencyContext} from 'components/common/CurrencyContext'
import {Dropdown} from './Dropdown'
import {FeaturedMenuContext} from 'components/common/FeaturedMenuContext'
import {GenderLinks} from './GenderLinks'
import getConfig from 'next/config'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import {useClickOutside} from 'components/common/hooks'
import {UserContext} from 'components/common/UserContext'
import {UserMenu} from './UserMenu'
import {WishListContext} from 'components/common/WishListContext'
const {publicRuntimeConfig} = getConfig()

const currenciesMap: Record<CurrencyType, {full: string, short: string}> = {
  CAD: {full: 'CAD (C$)', short: 'CAD (C$)'},
  EUR: {full: 'EUR (€)', short: 'EUR (€)'},
  GBP: {full: 'GBP (£)', short: 'GBP (£)'},
  USD: {full: 'USD ($)', short: 'USD ($)'},
}

const languagesMap = {
  de: {full: 'Deutsch', short: 'De'},
  en: {full: 'English', short: 'En'},
  es: {full: 'Espanol', short: 'Es'},
  fr: {full: 'Français', short: 'Fr'},
}

const processMenuItemLabel = (label: string) => {
  return label.split(' ').join('\u00A0')
}

export function Menu(props: {
  className?: string
  close: () => void
  gender: Gender
  intactId: string
  isBlogDomain: boolean
}) {
  const {i18n, t} = useTranslation()
  const close = props.close
  const cartCtx = useContext(CartContext)
  const currencyContext = useContext(CurrencyContext)
  const userCtx = useContext(UserContext)
  const wishListCtx = useContext(WishListContext)
  const featuredMenuCtx = useContext(FeaturedMenuContext)

  const changeCurrency = useCallback(currency => {
    currencyContext.setActivePersistent(currency)
    close()
  }, [close, currencyContext])

  const changeLanguage = useCallback(async newLanguage => {
    // English translations are already loaded from Shopify, no need in requesting translations service
    i18n.changeLanguage(newLanguage)
    close()

    if(newLanguage === 'en')
      return

    try {
      addTranslationsFromPO({
        i18n,
        lang: newLanguage,

        translations: await (
          await fetch(`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/translations/${newLanguage}/products`)
        ).json(),
      })

      // The order of i18n.addResources() and i18n.changeLanguage() calls is important
      i18n.changeLanguage(newLanguage)
    } catch(error) {
      console.error(error)
    }
  }, [close, i18n])

  const welcomeMessage = useMemo(() => {
    if(!userCtx.user)
      return

    return userCtx.user.firstName ? t('helloUsername', {userName: userCtx.user.firstName}) : userCtx.user.email
  }, [t, userCtx.user])

  const featuredMenuItemsWithNewAndViewAll = useMemo(() => [
    {
      category   : 'all',
      collection : 'all',
      list       : [],
      subcategory: 'all',
      title      : 'view all',
    },

    {
      category   : 'all',
      collection : `${props.gender}s-new`,
      list       : [],
      subcategory: 'all',
      title      : 'New',
    },

    ...featuredMenuCtx[props.gender],
  ], [featuredMenuCtx, props.gender])

  const popupRef = useRef(null)
  useClickOutside({callback: close, intactId: props.intactId, reference: popupRef})

  return <div className={props.className} ref={popupRef}>
    <button className="button" onClick={close}>
      <Icon className="icon" name="cross" />
    </button>

    <div className="section">
      <div className="scroll">
        {userCtx.user && <div className="welcome">
          <div className="message">
            {welcomeMessage}
          </div>

          <hr className="divider" />
        </div>}

        <div className="navigation">
          <GenderLinks
            className="gender"
            close={close}
            gender={props.gender}
            isBlogDomain={props.isBlogDomain}
          />

          <div className="list">
            {featuredMenuItemsWithNewAndViewAll.map(item => <CategoryItem
              /* eslint-disable-next-line max-len */
              as={`/${props.gender}/shop/collection/${item.collection}/category/${item.category}/subcategory/${item.subcategory}${item.tag ? `?tags=${item.tag}` : ''}`}
              close={close}
              hasAppDomain={props.isBlogDomain}
              /* eslint-disable-next-line max-len */
              href="/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]"
              intactId={props.intactId}
              items={item.list}
              key={item.title}
              popupRef={popupRef}
            >
              {processMenuItemLabel(t(item.title))}
            </CategoryItem>)}
          </div>
        </div>

        <div className="actions">
          <hr className="divider" />

          <Link className="link type--cart" href="/cart" onClick={close}>
            <Icon className="icon type--cart" name="cart" />
            {processMenuItemLabel(t('myBag'))}

            <span className={cn('counter', {'is-active': cartCtx.itemsCount > 0})}>
              {cartCtx.itemsCount > 99 ? ':)' : cartCtx.itemsCount}
            </span>
          </Link>

          <Link
            as={`/wish/${props.gender}/category/all/subcategory/all`}
            className="link type--wish"
            href="/wish/[gender]/category/[category]/subcategory/[subcategory]"
            onClick={close}
          >
            <Icon className="icon type--wish" name={wishListCtx.list.length > 0 ? 'wish-fill' : 'wish'} />
            {processMenuItemLabel(t('myWishList'))}
          </Link>

          <hr className="divider" />

          <Dropdown
            className="dropdown type--language"
            currentItem={i18n.language}
            intactId="languages-menu"
            list={i18nConfig.allLanguages}
            onChange={changeLanguage}
            translations={languagesMap}
          />

          <hr className="divider" />

          <Dropdown
            className="dropdown type--currency"
            currentItem={currencyContext.active}
            intactId="currencies-menu"
            list={Object.keys(currenciesMap)}
            onChange={changeCurrency}
            translations={currenciesMap}
          />

          <hr className="divider" />
          <UserMenu className="user-menu-wrapper type--user" closeMenu={close} welcomeMessage={welcomeMessage} />
        </div>
      </div>
    </div>
  </div>
}
