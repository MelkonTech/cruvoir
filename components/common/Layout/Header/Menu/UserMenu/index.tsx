import {useCallback, useContext, useRef} from 'react'
import {useClickOutside, usePopup} from 'components/common/hooks'
import {AuthModalContext} from 'components/common/AuthModalContext'
import cn from 'classnames'
import {Link} from 'components/common/Link'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function UserMenu(props: {
  className?: string
  closeMenu: () => void
  welcomeMessage: string
}) {
  const {t} = useTranslation()
  const authModalCtx = useContext(AuthModalContext)
  const userCtx = useContext(UserContext)
  const closeMenu = props.closeMenu
  const popup = usePopup()
  const popupRef = useRef(null)
  const intactId = 'user-menu'
  useClickOutside({callback: popup.close, intactId: intactId, reference: popupRef})

  const showSignIn = useCallback(() => {
    authModalCtx.setActive('signin')
    closeMenu()
    popup.close()
  }, [authModalCtx, closeMenu, popup])

  const signOut = useCallback(() => {
    userCtx.signOut()
    closeMenu()
    popup.close()
  }, [closeMenu, popup, userCtx])

  const close = useCallback(() => {
    closeMenu()
    popup.close()
  }, [closeMenu, popup])

  return <div className={props.className}>
    {userCtx.user
      ? <div className="dropdown">
        <button className="button" data-intact-id={intactId} onClick={popup.toggle}>{props.welcomeMessage}</button>

        <div className={cn('list', {'is-shown': popup.isShown})} ref={popupRef}>
          <Link className="link" href="/profile/general" onClick={close}>{t('profileSetting_plural')}</Link>
          <Link className="link" href="/profile/addresses" onClick={close}>{t('shippingAddress_plural')}</Link>
          <Link className="link" href="/profile/orders" onClick={close}>{t('orderHistory_plural')}</Link>
          <button className="link" onClick={signOut}>{t('signOut')}</button>
        </div>
      </div>

      : <button className="link" onClick={showSignIn}>{t('signIn')}</button>
    }
  </div>
}
