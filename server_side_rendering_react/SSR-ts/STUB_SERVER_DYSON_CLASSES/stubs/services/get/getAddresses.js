const SessionManager = require('../../data/SessionManager')

const getAddresses = {
  path: '/account-api/users/:id/addresses',
  method: 'GET',
  delay: 100,
  cache: false,
  render: (req, res) => {
    const sessionData = SessionManager.getSession(req)
    const user = sessionData.user

    if (req.params.id === 'null' || req.params.id === 'undefined') {
      // TODO: return the MISSING_COOKIES error body
      return res.sendStatus(401)
    }

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')

    /* Error handling */
    const { statusCode, error } = user.addresses.getAccountAddressesResponse()
    if (error) {
      return res.status(statusCode).send({ error })
    }

    return res.status(200).send({ addresses: user.addresses.getAccountAddresses() })
  },
}

module.exports = getAddresses
