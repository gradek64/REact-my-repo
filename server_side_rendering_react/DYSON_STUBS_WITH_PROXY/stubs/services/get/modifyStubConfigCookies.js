const APILogger = require('../../helpers/APILogger')

const modifyStubConfigCookies = {
  path: '/login-stub/configCookies',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (req, res) => {
    const { query } = req
    const { value } = query

    if (query.type === 'setBrandConfigCookie') {
      APILogger(`API: Set the brand cookie to ${value}`)
      res.cookie('brand', value)
    }
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = modifyStubConfigCookies
