import cn from 'classnames'
import {Gender} from 'components/common/types'
import {Icon} from 'components/common/Icon'
import {Link} from 'components/common/Link'
import {Menu} from './Menu'
import {Search} from './Search'
import styles from './index.css'
import {usePopup} from 'components/common/hooks'

export function Header(props: {
  className?: string
  gender: Gender
  isBlogDomain: boolean
  isCompact: boolean
}) {
  const menuPopup = usePopup(false)
  const menuIntactId = 'main-menu'
  const searchPopup = usePopup(false)
  const searchIntactId = 'search-popup'

  return <nav className={cn(styles.header, {'is-compact': props.isCompact}, props.className)}>
    <Link className="logo" href="/">CRUVOIR</Link>

    <button className="search-button" data-intact-id={searchIntactId} onClick={searchPopup.show}>
      <Icon className="icon" name="search" />
    </button>

    <button className="menu-button" data-intact-id={menuIntactId} onClick={menuPopup.show}>
      <Icon className="icon" name="menu" />
    </button>

    <Menu
      className={cn('menu-popup', {'is-shown': menuPopup.isShown})}
      close={menuPopup.close}
      gender={props.gender}
      intactId={menuIntactId}
      isBlogDomain={props.isBlogDomain}
    />

    <Search
      className={cn('search-popup', {'is-shown': searchPopup.isShown})}
      close={searchPopup.close}
      intactId={searchIntactId}
      isShown={searchPopup.isShown}
      isBlogDomain={props.isBlogDomain}
    />
  </nav>
}
