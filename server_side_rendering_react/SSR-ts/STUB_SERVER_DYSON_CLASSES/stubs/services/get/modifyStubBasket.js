const SessionManager = require('../../data/SessionManager')
const { promotionDatasets } = require('../../data/Promotions/Datasets/PromotionDatasets')

const modifyStubBasket = {
  path: '/payment-stub/basket',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const { basket, orderRetrieval } = sessionData

    if (query.type === 'promoData') {
      if (promotionDatasets[value]) {
        promotionDatasets[value].setupPromos(basket)
        console.log(`API: Set basket data - ${promotionDatasets[value].description}`)
      } else {
        return { error: 'Promo Dataset not found' }
      }
    }

    if (query.type === 'reset') {
      basket.reset()
      orderRetrieval.buildOrders(basket.shipments.length)
      console.log('API: Reset basket data')
    }

    SessionManager.saveSession(sessionData, req)
    return basket.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubBasket
