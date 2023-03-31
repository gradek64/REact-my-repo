const SessionManager = require('../../data/SessionManager')
const APILogger = require('../../helpers/APILogger')

const wcsLoginState = {
  'logged in': 'LOGGEDIN',
  guest: 'GUEST',
  recognised: 'RECOGNISED',
}

const wcsGetUserInfo = {
  path: '/webapp/wcs/stores/servlet/GetUserInfo',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    if (Object.keys(req.cookies).length === 0) {
      APILogger(`Warning: call made without cookies: ${req.path}`)
    }
    const sessionData = SessionManager.getSession(req)
    const { user } = sessionData

    return {
      userId: user.customerId,
      userState: wcsLoginState[user.loginState],
      emailAddress: user.email,
      trolleyCount: 0,
      firstName: user.firstName,
      postCode: user.postcode,
    }
  },
  render: (req, res) => {
    const { user } = SessionManager.getSession(req)
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.cookie('stubbed_userState_cookie', wcsLoginState[user.loginState])
    APILogger(`${req.path} 200 ${JSON.stringify(res.body)}`)
    return res.status(200).send(res.body)
  }
}

module.exports = wcsGetUserInfo
