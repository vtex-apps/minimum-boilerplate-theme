/* eslint-disable no-console */

import axios from 'axios'

export async function holidays(ctx: Context) {
  const {
    clients: {},
    vtex: { authToken },
  } = ctx

  const account = ctx.headers['x-vtex-account']

  // const { consultantId } = await json(req)

  const holidaysUrl = `http://${account}.vtexcommercestable.com.br/api/logistics/pvt/configuration/holidays`

  const { data: _holidays } = await axios.get(holidaysUrl, {
    headers: {
      'VtexIdclientAutCookie': authToken,
      'X-Vtex-Use-Https': 'true'
    },
  })

  ctx.set('Content-Type', 'application/json')
  ctx.set('Cache-Control', 'no-cache, no-store')

  let result = _holidays;
  if(!holidays) result = "no holidays"

  ctx.response.status = 200
  ctx.response.body = result
}
