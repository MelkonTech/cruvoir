require('dotenv').config()
const R = require('ramda')

module.exports = R.compose(
  require('next-optimized-images'),
  require('next-plugin-graphql'),
  require('@zeit/next-css'),
)({
  cssLoaderOptions: {
    localIdentName: '[local]__[hash:base64:5]',
  },

  cssModules: true,

  publicRuntimeConfig: {
    ITEMS_PER_PAGE: 50,
    ...R.pickBy((_, key) => key.startsWith('NEXT_PUBLIC_'), process.env),
  },

  serverRuntimeConfig: R.pickBy((_, key) => key.startsWith('NEXT_SERVER_'), process.env),
})
