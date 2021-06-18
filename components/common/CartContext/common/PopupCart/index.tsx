import {ReactNode, useCallback} from 'react'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import {Icon} from 'components/common/Icon'
import {Portal} from 'components/common/Portal'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import styles from './index.css'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'

export function PopupCart(props: {
  children: ReactNode
  className?: string
  close: () => void
  counterValue: number
  subtotal: number
  title: string
}) {
  const {t} = useTranslation()
  const router = useRouter()
  const close = props.close

  const goToBag = useCallback(async () => {
    close()
    await router.push('/cart')
  }, [close, router])

  return <Portal selector="#portal-root">
    <div className={cn(styles.popupCart, props.className)}>
      <header className="header">
        <h2 className="title">
          {props.title}

          <span className={cn('counter', {'is-active': props.counterValue > 0})}>
            {props.counterValue > 99 ? ':)' : props.counterValue}
          </span>
        </h2>

        <button className="button" onClick={close}>
          <Icon className="icon" name="cross" />
        </button>
      </header>

      {props.children}

      <div className="section">
        <div className="label">{t('bagSubtotal')}</div>
        <PriceWithCompareAt className="value" price={props.subtotal} />
        <Button onClick={goToBag} className="button" width="flex">{t('goToMyShoppingBag')}</Button>
      </div>
    </div>
  </Portal>
}
