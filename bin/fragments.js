#!/usr/bin/env node
require('dotenv').config()
const fetch = require('node-fetch')
const fs = require('fs')

fetch(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL, {
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,

    variables: {},
  }),

  headers: {
    accept                             : 'application/json',
    'content-type'                     : 'application/json',
    'x-shopify-storefront-access-token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
  },

  method: 'POST',
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    result.data.__schema.types = result.data.__schema.types.filter(
      type => type.possibleTypes !== null,
    )

    fs.writeFile('../fragments-types.json', JSON.stringify(result.data), err => {
      if(err)
        console.error('Error writing fragmentTypes file', err)
      else
        console.log('Fragment types successfully extracted!')
    })
  })
