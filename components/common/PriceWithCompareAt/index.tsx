import cn from 'classnames'
import {ConvertCurrency} from 'components/common/ConvertCurrency'
import {CurrencyContext} from 'components/common/CurrencyContext'
import styles from './index.css'
import {useContext} from 'react'

export function PriceWithCompareAt(props: {
  className?: string
  compareAtPrice?: number | null | undefined
  hasPercent?: boolean
  price: number | string
}) {
  const currencyContext = useContext(CurrencyContext)

  return <div className={cn(styles.priceWithCompareAt, props.className)}>
    <div className="price">
      <ConvertCurrency from="USD" to={currencyContext.active}>
        {props.price}
      </ConvertCurrency>
    </div>

    {props.compareAtPrice && <div className="compare-at-price">
      <ConvertCurrency from="USD" to={currencyContext.active}>
        {props.compareAtPrice}
      </ConvertCurrency>
    </div>}

    {props.compareAtPrice && props.hasPercent && <div className="percent">
      {`-${(100 - Number(props.price) * 100 / props.compareAtPrice).toFixed(0)}%`}
    </div>}
  </div>
}
