const SessionManager = require('../../data/SessionManager')

const getStubbedPNPL = {
  path: '/pnpl',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { user: { loginState } } = SessionManager.getSession(req)
    const collectionUrl = origin => `/login${loginState === 'logged in' ? '-stub/login/success?origin' : '?pageName'}=${origin}`
    return `
      <html>
        <head>
          <title>PNPL</title>
        </head>
        <body>
          <h1>Pay Now / Pay Later</h1>
          <ul>
            <li><a href="${collectionUrl('payNow')}">Pay now (prepay)</a></li>
            <li><a href="${collectionUrl('mandatoryPrepay')}">Pay now (mandatory prepay)</a></li>
          </ul>
        </body>
      </html>
    `
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = getStubbedPNPL
