import {NextApiRequest, NextApiResponse} from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json')

  try {
    const body = JSON.parse(req.body)

    const content = await (await fetch(process.env.SENDGRID_API_URL, {
      body: JSON.stringify({
        contacts: [{
          email     : body.email,
          first_name: body.name,
        }],
      }),

      headers: {
        accept        : 'application/json',
        authorization : `Bearer ${process.env.SENDGRID_API_TOKEN}`,
        'content-type': 'application/json',
      },

      method: 'PUT',
    })).text()

    console.log(content)
  } catch(error) {
    console.error(error)
    res.statusCode = 500
    res.end(JSON.stringify({success: false}))
  }

  res.statusCode = 200
  res.end(JSON.stringify({success: true}))
}
