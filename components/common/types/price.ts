import {Currency} from './currency'

export interface Price {
  amount: number | string
  currencyCode: Currency
}
