const SessionManager = require('../../data/SessionManager')
const { APILogger } = require('../../helpers')

const wcsloginService = {
  path: '/fraud/v1/subs/:subscriberId/checks',
  template(req) {
    const sessionData = SessionManager.getSession(req)
    const { result } = sessionData.iovationService
    const { accountCode } = req.body

    return {
      accountCode,
      details: {
        device: {
          alias: '712322039485795409'
        }
      },
      result
    }
  },
  render(req, res) {
    APILogger(`${req.path} 200 ${JSON.stringify(res.body)}`)
    return res.status(200).send(res.body)
  }
}

module.exports = wcsloginService
