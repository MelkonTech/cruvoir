import getConfig from 'next/config'
import Prismic from 'prismic-javascript' 
const {publicRuntimeConfig} = getConfig()

export const prismicClient = (req = null) => Prismic.client(
  publicRuntimeConfig.NEXT_PUBLIC_PRISMIC_API_URL,
  createClientOptions(req),
)

const createClientOptions = (req = null) => req ? {req} : {}
