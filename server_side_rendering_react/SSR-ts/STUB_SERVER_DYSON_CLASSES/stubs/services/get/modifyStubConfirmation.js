const SessionManager = require('../../data/SessionManager')
const fulfilmentDatasets = require('../../data/Confirmation/FulfilmentDatasets')
const ShipmentStartTimeDatasets = require('../../data/Confirmation/ShipmentStartTimeDatasets')
const ConfirmationDatasets = require('../../data/Confirmation/ConfirmationDataset')

const modifyStubConfirmation = {
  path: '/payment-stub/confirmation',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const { confirmation } = sessionData
    let dataset

    if (query.type === 'fulfilmentData') {
      dataset = fulfilmentDatasets[value]
      if (dataset) {
        confirmation.fulfilmentSet = value

        switch (value) {
          case 'pending1Fulfilment':
          case 'pending2Fulfilments':
            confirmation.confirmationType = 'OrderPending'
            break
          case 'partiallyPlaced1FulfilledAnd1Rejected':
          case 'partiallyPlaced1FulfilledAnd1Failed':
            confirmation.confirmationType = 'OrderPartiallyPlaced'
            break
          case 'partiallyFulfilled1FulfilledAnd1Pending':
            confirmation.confirmationType = 'OrderPartiallyFulfilled'
            break
          case 'rejected1Rejected':
          case 'rejected2Rejected':
          case 'rejected1RejectedAnd1Failed':
            confirmation.confirmationType = 'OrderRejected'
            break
          case 'failed1Failed':
          case 'failed2Failed':
          case 'failed1FailedAnd1Rejected':
            confirmation.confirmationType = 'OrderFailed'
            break
          case 'exception1Pending':
            confirmation.confirmationType = 'OrderException'
            break
          default:
            confirmation.confirmationType = 'OrderPlaced'
            break
        }

        console.log(`API: Set confirmation data - ${dataset.description}`)
      } else {
        return { error: 'Fulfilment option not found' }
      }
    }
    if (query.type === 'shipmentStartTime') {
      dataset = ShipmentStartTimeDatasets[value]
      if (dataset) {
        confirmation.shipmentStartTime = value
        console.log(`API: Set confirmation data - ${dataset.description}`)
      } else {
        return { error: 'Shipment start time option not found' }
      }
    }
    if (query.type === 'confirmationResponse') {
      dataset = ConfirmationDatasets[value]
      if (dataset) {
        confirmation.confirmationType = value
        console.log(`API: Set confirmation data - ${dataset.description}`)
      } else {
        return { error: `Confirmation response dataset not found for '${value}'` }
      }
    }

    SessionManager.saveSession(sessionData, req)
    return confirmation.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubConfirmation
