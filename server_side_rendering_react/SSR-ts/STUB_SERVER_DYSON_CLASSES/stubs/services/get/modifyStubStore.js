const SessionManager = require('../../data/SessionManager')
const storeDatasets = require('../../data/Store/StoreDatasets')

const modifyStubStore = {
  path: '/payment-stub/store',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const store = sessionData.store
    if (query.type === 'storeData') {
      if (storeDatasets[value]) {
        store.updateStore(value)
        console.log(`API: Set store data - ${storeDatasets[value].legacyName}`)
      } else {
        return { error: 'Store not found' }
      }
    }

    if (query.type === 'setMissingStoreData') {
      if (value === 'true') {
        store.hasMissingStoreInfo = true
        store.updateStore('111')
        console.log(`API: Set store data - missing store info`)
      } else {
        store.reset()
      }
    }

    SessionManager.saveSession(sessionData, req)
    return store.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubStore
