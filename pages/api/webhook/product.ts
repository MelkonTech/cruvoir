import {NextApiRequest, NextApiResponse} from 'next'
import crypto from 'crypto'
import fetch from 'node-fetch'
import getRawBody from 'raw-body'
import {objectToFetchPostParams} from 'components/common/helpers'

/*
When product create/update webhook is received do the following:

* Add the term
  curl -X POST https://api.poeditor.com/v2/terms/add \
    -d api_token="e5b59bb2650ac5f326481180090d7665" \
    -d id="298541" \
    -d language="en" \
    -d data="[{\"term\":\"project<ID>Description\"}, {\"term\":\"project<ID>Title\"}]"

* Update the term's translation value:
  curl -X POST https://api.poeditor.com/v2/languages/update \
    -d api_token="e5b59bb2650ac5f326481180090d7665" \
    -d id="298541" \
    -d language="en" \
    -d data="[
      {\"term\":\"project<ID>Description\", \"translation\": {\"content\": \"Ho-ho\"}, \"fuzzy\": 0},
      {\"term\":\"project<ID>Title\", \"translation\": {\"content\": \"Ha-ha\"}, \"fuzzy\": 0},
    ]"
*/
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json')
  const rawBody = await getRawBody(req)

  if(req.headers['x-shopify-hmac-sha256'] !== crypto
    .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRET)
    .update(rawBody.toString('utf8'), 'utf8')
    .digest('base64')
  ) {
    res.statusCode = 403
    res.end(JSON.stringify({message: 'Signature is invalid', success: false}))
    return
  }

  console.log('Received ============================================================')
  const jsonBody = JSON.parse(rawBody.toString('utf-8'))
  const productDescriptionTerm = `productDescription-${jsonBody.handle}`
  const productTitleTerm = `productTitle-${jsonBody.handle}`
  console.log(jsonBody)

  const createTermResponse = await fetch(
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

  const updateLanguageResponse = await fetch(
    'https://api.poeditor.com/v2/languages/update',

    {
      body: objectToFetchPostParams({
        api_token: process.env.PO_API_TOKEN,

        data: JSON.stringify([
          {fuzzy: 0, term: productDescriptionTerm, translation: {content: jsonBody.title}},
          {fuzzy: 0, term: productTitleTerm, translation: {content: jsonBody.body_html}},
        ]),

        id      : process.env.PO_PROJECT_ID,
        language: 'en',
      }),

      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method : 'POST',
    },
  )

  console.log('\n')
  console.log('Create term =========================================================')
  console.log(await createTermResponse.json())
  console.log('\n')
  console.log('Update language =====================================================')
  console.log(await updateLanguageResponse.json())
  console.log('\n')
  console.log('End =================================================================')
  console.log('\n')
  res.statusCode = 200
  res.end(JSON.stringify({success: true}))
}

export const config = {api: {bodyParser: false}}
