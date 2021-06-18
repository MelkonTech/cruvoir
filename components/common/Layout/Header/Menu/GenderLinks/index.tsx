import cn from 'classnames'
import {Gender} from 'components/common/types'
import getConfig from 'next/config'
import {Link} from 'components/common/Link'
import styles from './index.css'
import {useTranslation} from 'i18n'
const {publicRuntimeConfig} = getConfig()

export function GenderLinks(props: {
  className?: string
  close: () => void
  gender: Gender
  isBlogDomain: boolean
}) {
  const {t} = useTranslation()

  return <div className={cn(styles.genderLinks, props.className)}>
    {props.isBlogDomain
      ? <a
        className={cn('link', {'is-selected': props.gender === 'women'})}
        href={`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/women`}
        onClick={props.close}
      >
        {t('women')}
      </a>

      : <Link
        as="/women"
        className={cn('link', {'is-selected': props.gender === 'women'})}
        href="/[gender]?gender=women"
        onClick={props.close}
      >
        {t('women')}
      </Link>
    }

    {props.isBlogDomain
      ? <a
        className={cn('link', {'is-selected': props.gender === 'men'})}
        href={`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/men`}
        onClick={props.close}
      >
        {t('men')}
      </a>

      : <Link
        as="/men"
        className={cn('link', {'is-selected': props.gender === 'men'})}
        href="/[gender]?gender=men"
        onClick={props.close}
      >
        {t('men')}
      </Link>
    }
  </div>
}
