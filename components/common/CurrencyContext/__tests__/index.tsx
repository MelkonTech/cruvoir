import {CurrencyContext, CurrencyContextProvider} from 'components/common/CurrencyContext'
import {Fragment, useContext} from 'react'
import {act} from 'react-dom/test-utils'
import Cookies from 'js-cookie'
import moment from 'moment'
import {mount} from 'enzyme'
jest.mock('js-cookie')

describe('Currency context', () => {
  const defaultValue = 'GBP'
  let currencyContextInstance

  const Test = () => {
    const currencyContext = useContext(CurrencyContext)
    currencyContextInstance = currencyContext
    return <Fragment>{currencyContext.active}</Fragment>
  }

  const mountedContext = mount(<CurrencyContextProvider
    initialCurrency={defaultValue}
    initialRates={{CAD: 1, EUR: 1, GBP: 1, USD: 1}}

    // Prevent calling fetch()
    initialRatesLastUpdatedAt={moment().subtract(5, 'minutes').format()}
  >
    <p><Test /></p>
  </CurrencyContextProvider>)

  it('sets up the default value', async () => {
    expect(mountedContext.find('p').text()).toEqual(defaultValue)
  })

  it('sets up the cookie value', async () => {
    const newCurrencyValue = 'CAD'

    await act(async () => {
      currencyContextInstance.setActivePersistent(newCurrencyValue)
      await mountedContext.update()
    })

    expect(Cookies.get('currency')).toBe(newCurrencyValue)
  })
})
