const SessionManager = require('../../data/SessionManager')
const datacashErrorDataset = require('../../data/Payments/DatacashErrorDataset')

const modifyStubDatacashError = {
  path: '/payment-stub/datacash-error',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const datacashError = sessionData.datacashError
    if (query.type === 'datacashError') {
      if (datacashErrorDataset[value]) {
        datacashError.setError(datacashErrorDataset[value])
        console.log(`API: Set error message - ${datacashErrorDataset[value].description}`)
      } else {
        return { error: 'Error not found' }
      }
    }
    if (query.type === 'showDatacashError') {
      datacashError.showDatacashError = !datacashError.showDatacashError
    }
    SessionManager.saveSession(sessionData, req)
    return datacashError.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubDatacashError
