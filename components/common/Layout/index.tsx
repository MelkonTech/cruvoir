import {ReactNode, useContext} from 'react'
import {AuthModalContext} from 'components/common/AuthModalContext'
import cn from 'classnames'
import {Footer} from './Footer'
import {ForgotPassword} from 'components/auth/ForgotPassword'
import {getGender} from 'components/common/helpers'
import {Header} from './Header'
import {NewsletterPopup} from './NewsletterPopup'
import {ScrollToTopButton} from './ScrollToTopButton'
import {SignIn} from 'components/auth/SignIn'
import {SignUp} from 'components/auth/SignUp'
import styles from './index.css'
import {useRouter} from 'next/router'

export function Layout(props: {
  children: ReactNode
  className?: string
  hero?: ReactNode
  isBlogDomain?: boolean
}) {
  const authModalCtx = useContext(AuthModalContext)
  const router = useRouter()
  const gender = getGender(router, props.isBlogDomain)

  return <div className={cn(styles.layout, {'has-hero': props.hero})}>
    <ScrollToTopButton className="anchor" />

    <Header
      className="header"
      gender={gender}
      isBlogDomain={props.isBlogDomain}
      isCompact={props.isBlogDomain || router && (/\/(women|men)?$/i).test(router.asPath)}
    />

    {props.hero}
    <div className={cn('content', props.className)}>{props.children}</div>
    <Footer className="footer" gender={gender} isBlogDomain={props.isBlogDomain} />
    {authModalCtx.active === 'signin' && <SignIn />}
    {authModalCtx.active === 'forgot' && <ForgotPassword />}
    {authModalCtx.active === 'signup' && <SignUp />}
    <NewsletterPopup />
  </div>
}
