import {Fragment, useContext} from 'react'
import {Currency} from 'components/common/types'
import {CurrencyContext} from 'components/common/CurrencyContext'

function ConvertCurrency(props: {
  children: string | number
  from: Currency
  rates?: Record<Currency, number>
  ratesLastUpdatedAt?: string
  to: Currency
}) {
  const currencyContext = useContext(CurrencyContext)
  const currencyPrefix: Record<Currency, string> = {CAD: 'C$', EUR: '€', GBP: '£', USD: '$'}

  if(currencyContext.rates)
    return <Fragment>
      {currencyPrefix[props.to]}{(parseFloat(props.children.toString()) * currencyContext.rates[props.to]).toFixed(2)}
    </Fragment>

  else
    return <Fragment>…</Fragment>
}

export {ConvertCurrency}
