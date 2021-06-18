import Cookies from 'js-cookie'

// To be sure that ctx contains req (express server request) object don't use is-server helper here
export const getCookie = params => params.ctx && params.ctx.req

  // On server side
  ? params.ctx.req.cookies[params.name] || null

  // On client side
  : Cookies.get(params.name) || null
