import * as R from 'ramda'
import {Country} from 'components/common/types'
import {useMemo} from 'react'

export function useShippingLocations(countries: Country[], countryCode?: string | null) {
  const currentCountry = useMemo(() => {
    if(!countryCode)
      return null

    return R.find<Country>(R.propEq('code', countryCode), countries || [])
  }, [countries, countryCode])

  return useMemo(() => ({
    currentCountry: currentCountry,
  }), [currentCountry])
}
