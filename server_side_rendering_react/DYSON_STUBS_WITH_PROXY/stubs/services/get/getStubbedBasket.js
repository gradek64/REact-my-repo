const SessionManager = require('../../data/SessionManager')

const getStubbedBasket = {
  path: '/basket',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { user: { loginState } } = SessionManager.getSession(req)
    const deliveryUrl = `/login${loginState === 'logged in' ? '-stub/login/success?origin' : '?pageName'}=delivery`
    return `
      <html>
        <head>
          <title>Basket</title>
        </head>
        <body>
          <h1>Basket</h1>
          <ul>
            <li><a href="/pnpl">Continue with collection</a></li>
            <li><a href="${deliveryUrl}">Continue with delivery</a></li>
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

module.exports = getStubbedBasket
