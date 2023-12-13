const SessionManager = require('../../data/SessionManager')
const walletDataset = require('../../data/Wallet/WalletDataset')

const modifyStubWallet = {
  path: '/payment-stub/wallet',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const wallet = sessionData.wallet
    const walletData = walletDataset.walletData
    const walletResponseData = walletDataset.walletResponseData

    // Handle wallet updates
    if (query.type === 'walletData') {
      if (walletData[value]) {
        walletData[value].setupWallet(wallet)
        console.log(`API: Setup wallet data as - ${walletData[value].description}`)
      } else {
        return { error: 'Wallet dataset not found' }
      }
    }

    // Handle wallet response udpates
    if (query.type === 'walletResponseData') {
      if (walletResponseData[value]) {
        walletResponseData[value].setupWallet(wallet)
        console.log(`API: Setup wallet response as - ${walletResponseData[value].description}`)
      } else {
        return { error: 'Wallet response dataset not found' }
      }
    }

    SessionManager.saveSession(sessionData, req)
    return wallet.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubWallet
