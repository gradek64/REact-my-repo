import { WCSUserState } from '../../../src/types/api'

const SessionManager = require('../../data/SessionManager')

const wcsLoginState = {
  'logged in': WCSUserState.LOGGEDIN,
  guest: WCSUserState.GUEST,
  recognised: WCSUserState.RECOGNISED,
}

const wcsGetUserInfo = {
  path: '/webapp/wcs/stores/servlet/GetUserInfo',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    const sessionData = SessionManager.getSession(req)
    const user = sessionData.user
    const basket = sessionData.basket
    const store = sessionData.store

    return {
      userId: user.loginState === 'guest' ? '' : '2044798',
      userState: wcsLoginState[user.loginState],
      emailAddress: user.email,
      trolleyCount: basket.getSnapshotLines().length,
      firstName: user.firstName,
      postCode: user.loginState === 'guest' ? null : store.currentStore.postcode,
    }
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    return res.status(200).send(res.body)
  },
}

module.exports = wcsGetUserInfo
