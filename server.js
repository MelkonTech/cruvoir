require('dotenv').config()
const basicAuth = require('express-basic-auth')
const express = require('express')
const cookieParser = require('cookie-parser')
const next = require('next')
const port = parseInt(process.env.APP_PORT, 10) || 3000
const host = process.env.APP_HOST || '127.0.0.1'
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const server = express()
const handler = app.getRequestHandler()
const nextI18next = require('./i18n')
const nextI18NextMiddleware = require('next-i18next/middleware').default

app.prepare().then(() => {
  server.use(cookieParser())
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('/health', (req, res) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.header('Expires', '-1')
    res.header('Pragma', 'no-cache')
    res.send('ok')
  })

  if(process.env.APP_HOST === 'cruvoirdev.store')
    server.use(basicAuth({challenge: true, users: {devtest: 'devpassword1'}}))

  // Get rid of a trailing slash
  server.use((req, res, nextStep) => {
    req.url = req.url.replace(/\/$/, '').replace(/\/\?$/, '') || '/'
    nextStep()
  })

  server.get('*', handler)
  server.post('*', handler)

  server.listen(port, () => console.log(`> Ready on http://${host}:${port}`))
})
