export type APICountry = {
  country: {
    code: {
      countryCode: string
    }

    name: string

    provinces: {
      name: string
      code: string
    }[]
  }
}
