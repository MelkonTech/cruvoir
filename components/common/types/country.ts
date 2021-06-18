export type Country = {
  code: string
  name: string

  provinces: {
    name: string
    code: string
  }[]
}
