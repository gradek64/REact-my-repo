const SessionManager = require('../../data/SessionManager')
const snapshotServiceDatasets = require('../../data/SnapshotService/SnapshotServiceDatasets').default
const addressDatasets = require('../../data/Address/AddressDatasets').default

const modifySnapshotService = {
  path: '/payment-stub/snapshot-service',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const snapshotService = sessionData.snapshotService
    const { user } = sessionData

    if (query.type === 'snapshotInitialisation') {
      const newState = snapshotServiceDatasets.snapshotInitialisation[value]
      if (newState) {
        // If setting payment billing address missing error, also set addresses to 0
        if (value === 'PaymentMissingBillingAddress') {
          addressDatasets.NoAddresses.setupAddress(user)
          console.log(`API: Set address - ${addressDatasets.NoAddresses.description}`)
        }

        snapshotService.setSnapshotInitialisation(newState)
        console.log(`API: Setup snapshot service - snapshot initialisation - ${newState.description}`)
      } else {
        return { error: "'Snapshot initialisation' response type not found" }
      }
    }

    if (query.type === 'snapshotGet') {
      const newState = snapshotServiceDatasets.snapshotGet[value]
      if (newState) {
        snapshotService.setSnapshotGet(newState)
        console.log(`API: Setup snapshot service - snapshot get - ${newState.description}`)
      } else {
        return { error: "'Get Snapshot' response type not found" }
      }
    }

    if (query.type === 'prepareForCheckout') {
      const newState = snapshotServiceDatasets.prepareForCheckout[value]
      if (newState) {
        snapshotService.setPrepareForCheckout(newState)
        console.log(`API: Setup snapshot service - prepare for checkout - ${newState.description}`)
      } else {
        return { error: "'Prepare For Checkout' response type not found" }
      }
    }

    if (query.type === 'calculatePrices') {
      const newState = snapshotServiceDatasets.calculatePrices[value]
      if (newState) {
        snapshotService.setCalculatePrices(newState)
        console.log(`API: Setup snapshot service - calculate prices - ${newState.description}`)
      } else {
        return { error: "'Calculate Prices' response type not found" }
      }
    }

    if (query.type === 'snapshotStatus') {
      const newState = snapshotServiceDatasets.snapshotStatus[value]
      if (newState) {
        snapshotService.updateSnapshotStatus(newState)
        console.log(`API: Setup snapshot service - snapshot status - ${newState.description}`)
      } else {
        return { error: "'Snapshot status' response type not found" }
      }
    }

    if (query.type === 'hasOrderId') {
      if (value === 'true') {
        snapshotService.setOrderId('1234567890')
      } else {
        snapshotService.setOrderId(null)
      }
    }

    if (query.type === 'brandMismatch') {
      snapshotService.setBrandMismatch(value === 'true')
    }

    if (query.type === 'customerType') {
      snapshotService.setCustomerType(value)
    }

    if (query.type === 'isWcsHandover') {
      console.log(`API: Set isWcsHandover to ${value}`)
      snapshotService.isWcsHandover = value === 'true'
    }

    SessionManager.saveSession(sessionData, req)
    return snapshotService.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifySnapshotService
