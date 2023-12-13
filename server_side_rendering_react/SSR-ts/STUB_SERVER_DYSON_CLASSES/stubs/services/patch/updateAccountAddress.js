const SessionManager = require('../../data/SessionManager')

const updateAccountAddress = {
  path: '/account-api/users/:userId/address/:addressId',
  method: 'PATCH',
  delay: 200,
  cache: false,
  render: (req, res) => {
    const sessionData = SessionManager.getSession(req)
    const user = sessionData.user

    /* Error handling */
    const { statusCode, error } = user.addresses.getUpdateAccountAddressResponse()
    if (error) {
      return res.status(statusCode).send({ error })
    }

    const newAddress = req.body
    const oldAddressId = req.params.addressId

    const updatedAddress = user.addresses.updateAccountAddress(oldAddressId, newAddress)

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    return res.status(200).send(updatedAddress)
  },
}

module.exports = updateAccountAddress
