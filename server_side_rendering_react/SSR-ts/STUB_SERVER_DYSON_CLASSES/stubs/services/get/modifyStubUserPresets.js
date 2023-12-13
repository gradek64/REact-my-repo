import SessionManager from '../../data/SessionManager'
import userDatasets from '../../data/User/UserDatasets'

import { SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS } from '../../data/UserSessionManager/UserSessionManager'

/**
 * Helpers to quickly switch an address into specific presets
 */
const modifyStubAddressPresets = {
  path: '/payment-stub/user-presets',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (req, res) => {
    const { type = '', value = '' } = req.query || {}
    const sessionData = SessionManager.getSession(req)
    const { user, snapshotService } = sessionData

    userDatasets.Default.setupUser(user)
    userDatasets.GuestUser.setupUser(user)

    // customer type = registered
    // customer type = guest
    // customer type = none

    if (type === 'auth') {
      if (value === 'noAuth') {
        res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
        userDatasets.GuestUser.setupUser(user)
        snapshotService.setCustomerType('REGISTERED')
      }

      if (value === 'noLink') {
        res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
        userDatasets.Default.setupUser(user)
        snapshotService.setCustomerType('NONE')
      }

      if (value === 'guestValidNoAddressData') {
        res.cookie(SESSION_COOKIE_NAME, 'anonymous', SESSION_COOKIE_OPTIONS)
        userDatasets.GuestUserNoAddressData.setupUser(user)
        snapshotService.setCustomerType('GUEST')
      }

      if (value === 'guestValid') {
        res.cookie(SESSION_COOKIE_NAME, 'anonymous', SESSION_COOKIE_OPTIONS)
        userDatasets.GuestUser.setupUser(user)
        snapshotService.setCustomerType('GUEST')
      }

      if (value === 'guestInvalidRegistered') {
        res.cookie(SESSION_COOKIE_NAME, 'anonymous', SESSION_COOKIE_OPTIONS)
        userDatasets.GuestUser.setupUser(user)
        snapshotService.setCustomerType('REGISTERED')
      }

      if (value === 'guestInvalidGuest') {
        res.cookie(SESSION_COOKIE_NAME, 'anonymous', SESSION_COOKIE_OPTIONS)
        userDatasets.GuestUser.setupUser(user)
        snapshotService.setCustomerType('GUEST')
        // todo error
      }

      if (value === 'registeredValid') {
        res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
        userDatasets.Default.setupUser(user)
        snapshotService.setCustomerType('REGISTERED')
      }

      if (value === 'registeredInvalidRegistered') {
        res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
        userDatasets.Default.setupUser(user)
        snapshotService.setCustomerType('REGISTERED')
        // todo error
      }

      if (value === 'registeredInvalidGuest') {
        res.clearCookie(SESSION_COOKIE_NAME, SESSION_COOKIE_OPTIONS)
        userDatasets.Default.setupUser(user)
        snapshotService.setCustomerType('GUEST')
      }
    }

    SessionManager.saveSession(sessionData, req)

    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.sendStatus(200)
  },
}

module.exports = modifyStubAddressPresets
