const SessionManager = require('../../data/SessionManager')
const { addPromotionResponseDatasets } = require('../../data/Promotions/Datasets/PromotionDatasets')
const { deletePromotionResponseData } = require('../../data/Promotions/Datasets/DeletePromotionsDatasets')

const modifyStubPromotions = {
  path: '/payment-stub/promotions',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const promotion = sessionData.promotion

    if (query.type === 'promotionResponse') {
      if (addPromotionResponseDatasets[value]) {
        promotion.updateAddPromotionResponse(addPromotionResponseDatasets[value])
        console.log(`API: Setup Add promotion response as - ${addPromotionResponseDatasets[value].description}`)
      } else {
        return { error: 'Add Promotion response dataset not found' }
      }
    }

    if (query.type === 'deletePromoResponse') {
      if (deletePromotionResponseData[value]) {
        promotion.updateDeletePromotionResponse(deletePromotionResponseData[value])
        console.log(`API: Setup Delete promotion response as - ${deletePromotionResponseData[value].description}`)
      } else {
        return { error: 'Delete Promotion response dataset not found' }
      }
    }

    if (query.type === 'expireSubsequentPromos') {
      promotion.shouldExpireSubsequentPromos = !promotion.shouldExpireSubsequentPromos
      console.log(`API: ${promotion.shouldExpireSubsequentPromos ? 'Expire' : "Don't expire"} subsequent promotions`)
    }

    SessionManager.saveSession(sessionData, req)
    return promotion.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubPromotions
