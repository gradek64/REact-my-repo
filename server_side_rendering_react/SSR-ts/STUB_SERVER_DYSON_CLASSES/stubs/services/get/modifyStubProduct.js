const SessionManager = require('../../data/SessionManager')
const productDataset = require('../../data/Products/ProductDatasets')

const modifyStubProduct = {
  path: '/payment-stub/product',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const product = sessionData.productService
    const productResponseData = productDataset.productResponseData

    // Handle product stub response udpates
    if (query.type === 'productResponseData') {
      if (productResponseData[value]) {
        productResponseData[value].setupProduct(product)
        console.log(`API: Setup product response as - ${productResponseData[value].description}`)
      } else {
        return { error: 'Product response dataset not found' }
      }
    }

    SessionManager.saveSession(sessionData, req)
    return product.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubProduct
