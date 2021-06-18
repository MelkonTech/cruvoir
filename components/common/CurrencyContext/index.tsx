import {createContext, ReactNode, useCallback, useEffect, useMemo, useState} from 'react'
import Cookies from 'js-cookie'
import {Currency} from 'components/common/types'
import moment from 'moment'
const ratesUpdatesMinutesInterval = 10

type CurrencyContextType = {
  active: Currency
  convert: (params: {from: Currency, to: Currency, value: number}) => number
  rates: Record<Currency, number>
  ratesLastUpdatedAt: string
  setActive: (active: Currency) => void
  setActivePersistent: (active: Currency) => void
  setRates: (rates: Record<Currency, number>) => void
  setRatesLastUpdatedAt: (ratesLastUpdatedAt: string) => void
}

export const CurrencyContext = createContext<CurrencyContextType>({
  active               : null,
  convert              : () => null,
  rates                : null,
  ratesLastUpdatedAt   : null,
  setActive            : () => null,
  setActivePersistent  : () => null,
  setRates             : () => null,
  setRatesLastUpdatedAt: () => null,
})

export function CurrencyContextProvider(props: {
  children: ReactNode
  initialCurrency: Currency
  initialRates: Record<Currency, number>
  initialRatesLastUpdatedAt: string
}) {
  const [active, setActive] = useState<Currency>(props.initialCurrency)

  const [rates, setRates] = useState<Record<Currency, number>>(
    props.initialCurrency === 'USD' && !props.initialRates
      ? {CAD: 1, EUR: 1, GBP: 1, USD: 1}
      : props.initialRates,
  )

  const [ratesLastUpdatedAt, setRatesLastUpdatedAt] = useState<string>(props.initialRatesLastUpdatedAt)

  const setActivePersistent = useCallback((value: Currency) => {
    setActive(value)
    Cookies.set('currency', value)
  }, [setActive])

  // Fetch rates if N minutes were passed since the last update
  useEffect(() => {
    if(
      !ratesLastUpdatedAt || moment(ratesLastUpdatedAt, moment.ISO_8601)
        .add(ratesUpdatesMinutesInterval, 'minutes').isBefore(moment())
    )
      fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(async response => {
          console.log('Fetching currency rates')
          const json = await response.json()
          const newRates = json.rates ?? {}
          const newRatesLastUpdatedAt = moment().format()
          setRates(newRates)
          setRatesLastUpdatedAt(newRatesLastUpdatedAt)

          // There is no way the request will be finished during SSR — thus use browser cookies
          Cookies.set('currencyRates', JSON.stringify(newRates))
          Cookies.set('currencyRatesLastUpdatedAt', newRatesLastUpdatedAt)
        })

        .catch(console.error)
  }, [ratesLastUpdatedAt])

  const convert = useCallback(
    params => params.value / rates[params.from] * rates[params.to],
    [rates],
  )

  const contextObj = useMemo(
    () => ({
      active,
      convert,
      rates,
      ratesLastUpdatedAt,
      setActive,
      setActivePersistent,
      setRates,
      setRatesLastUpdatedAt,
    }),

    [
      active,
      convert,
      rates,
      ratesLastUpdatedAt,
      setActive,
      setActivePersistent,
      setRates,
      setRatesLastUpdatedAt,
    ],
  )

  return <CurrencyContext.Provider value={contextObj}>{props.children}</CurrencyContext.Provider>
}
