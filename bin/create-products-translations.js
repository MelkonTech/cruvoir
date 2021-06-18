#!/usr/bin/env node
function objectToFetchPostParams(object) {
  return R.join('&')(R.map(R.join('='), R.toPairs(object)))
}

const fetch = require('node-fetch')
const fs = require('fs')
const R = require('ramda')

// Test project credentials — 299949 aaed89cb94794f3f4eab5d678df52e4c
const parser = require('csv-parse')({delimiter: ','}, async (err, products) => {
  for(product of products) {
    // Ignora vairants — they don't store title/description info
    if(!product[1])
      continue

    const productDescriptionTerm = `productDescription-${product[0]}`
    const productTitleTerm = `productTitle-${product[0]}`

    await fetch(
      'https://api.poeditor.com/v2/terms/add',
  
      {
        body: objectToFetchPostParams({
          api_token: process.env.PO_API_TOKEN,
          data     : JSON.stringify([{term: productDescriptionTerm}, {term: productTitleTerm}]),
          id       : process.env.PO_PROJECT_ID,
          language : 'en',
        }),
  
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        method : 'POST',
      },
    )
  
    await fetch(
      'https://api.poeditor.com/v2/languages/update',
  
      {
        body: objectToFetchPostParams({
          api_token: process.env.PO_API_TOKEN,
  
          data: JSON.stringify([
            {fuzzy: 0, term: productDescriptionTerm, translation: {content: product[1]}},
            {fuzzy: 0, term: productTitleTerm, translation: {content: product[2]}},
          ]),
  
          id      : process.env.PO_PROJECT_ID,
          language: 'en',
        }),
  
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        method : 'POST',
      },
    )
  }
})

fs.createReadStream(process.argv[2]).pipe(parser)
