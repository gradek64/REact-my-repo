import SessionManager from '../../data/SessionManager'
import snapshotServiceDatasets from '../../data/SnapshotService/SnapshotServiceDatasets'

const addAddress = {
  path: '/account-api/users/:id/address',
  method: 'POST',
  delay: 100,
  cache: false,
  render: (req, res) => {
    const sessionData = SessionManager.getSession(req)
    const { user, snapshotService } = sessionData

    /* Error handling */
    const { statusCode, error } = user.addresses.getAddAccountAddressResponse()
    if (error) {
      return res.status(statusCode).send({ error })
    }

    const newAddress = req.body
    const newAddressWithId = user.addresses.addAccountAddress(newAddress)

    if (['PaymentMissingBillingAddress', 'PaymentInvalidTitle'].includes(snapshotService.snapshotInitialisation.type)) {
      const newState = snapshotServiceDatasets.snapshotInitialisation.SnapshotInitialised
      snapshotService.setSnapshotInitialisation(newState)
      console.log(`API: Reset snapshot after successfull add address - ${newState.description}`)
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    return res.status(200).send(newAddressWithId)
  },
}

module.exports = addAddress
