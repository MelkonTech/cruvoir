import * as R from 'ramda'
import {NextApiRequest, NextApiResponse} from 'next'
import fetch from 'node-fetch'
import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.body.checkoutId)
    return res.status(500).json({error: 'Unique id of the checkout is missing'})

  if(!req.body.creditCard)
    return res.status(500).json({error: 'Credit card info is required'})

  if(R.any(
    (key: string) => R.anyPass([R.isEmpty, R.isNil])(req.body.creditCard[key]),
    ['number', 'first_name', 'last_name', 'month', 'year', 'verification_value'],
  ))
    return res.status(500).json({error: 'Credit card info is incomplete'})

  try {
    let paymentSessionId
    let recentFetchResponse

    try {
      // Submit payment intent and grab the session id
      recentFetchResponse = await fetch(serverRuntimeConfig.NEXT_SERVER_CREATE_SHOPIFY_STRIPE_INTENT_API_URL, {
        body: JSON.stringify({credit_card: req.body.creditCard}),

        headers: {
          accept                  : 'application/json',
          'content-type'          : 'application/json',
          'x-shopify-access-token': serverRuntimeConfig.NEXT_SERVER_SHOPIFY_ADMIN_API_TOKEN,
        },

        method: 'POST',
      })

      paymentSessionId = (await recentFetchResponse.json()).id
    } catch(error) {
      console.error(error)

      return res.status(recentFetchResponse.status).json({
        error: `Error while creating the payment's session: ${recentFetchResponse.statusText}`,
      })
    }

    res.status(200).json({paymentSessionId})
  } catch(error) {
    console.error(error)
    res.status(500).json({error})
  }
}
