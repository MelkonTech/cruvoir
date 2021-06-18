import * as R from 'ramda'
import {NextApiRequest, NextApiResponse} from 'next'
import fetch from 'node-fetch'
import {objectToFetchPostParams} from 'components/common/helpers'

/*
Fetch the list of terms and select those that match the pattern

curl -X POST https://api.poeditor.com/v2/terms/list \
  -d api_token="e5b59bb2650ac5f326481180090d7665" \
  -d id="298541" \
  -d language="en" \
*/
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json')

  try {
    res.statusCode = 200
    
    res.end(JSON.stringify(
      R.filter<{term: string}>(term => Boolean(term.term.match(/^product(Description|Title)\-/)))((await (await fetch(
        'https://api.poeditor.com/v2/terms/list',

        {
          body: objectToFetchPostParams({
            api_token: process.env.PO_API_TOKEN,
            id       : process.env.PO_PROJECT_ID,
            language : req.query.lang.toString(),
          }),

          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          method : 'POST',
        },
      )).json()).result.terms),
    ))
  } catch(error) {
    res.statusCode = 503
    res.end(JSON.stringify({message: 'Error while requesting translations', success: false}))
  }
}
