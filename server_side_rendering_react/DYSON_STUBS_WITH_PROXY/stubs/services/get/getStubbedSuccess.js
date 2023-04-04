const validOrigins = ['payNow', 'mandatoryPrepay', 'delivery']

const journeyContent = (origin, journey) => {
  const loginJourney = journey === 'login'
  let journeyText = ''
  if (loginJourney && validOrigins.includes(origin)) {
    journeyText = `
      <h1>Successful login</h1>
      <h2>${origin === 'delivery' ? 'Delivery flow (delivery slots page)' : 'Collection flow (payment page)'}</h2>
    `
  }
  return journeyText
}

const originContent = (origin, journey) => (
  validOrigins.includes(origin)
    ? `<p>Successful ${journey} with origin: <span data-e2e='login-success-origin'>${origin}</span></p>`
    : `<p>${origin} is not a valid origin</p>`
)

const cookieContent = (cookies) => {
  const cookieKeys = Object.keys(cookies)
  if (cookieKeys.length) {
    let cookieText = ''
    cookieKeys.forEach((key) => {
      cookieText += `<p>Cookie &ldquo;${key}&rdquo; was sent with value &ldquo;${cookies[key]}&rdquo;</p>`
    })
    return cookieText
  }
  return '<p>No cookie\'s sent. That makes me sad :(</p>'
}

const getStubbedSuccess = {
  path: '/login-stub/:journey/success',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { cookies, params, query } = req
    const { journey } = params
    const { origin } = query
    return `
      <html>
        <body>
          ${journeyContent(origin, journey)}
          ${originContent(origin, journey)}
          ${cookieContent(cookies)}
        </body>
      </html>
    `
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  }
}

module.exports = getStubbedSuccess
