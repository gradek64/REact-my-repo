import DysonStubHelper from './DysonStubHelper'

// Stub endpoints
const STUB_SESSION_ENDPOINT = '/login-stub/session'
const STUB_USER_ENDPOINT = '/login-stub/user'
const STUB_LOGIN_SERVICE_ENDPOINT = '/login-stub/loginService'

class StubHelper {
  constructor() {
    const { baseUrl, dysonStubCookie } = Cypress.config()
    this.dysonHelper = new DysonStubHelper(baseUrl, dysonStubCookie)
  }

  resetMockSession() {
    this.dysonHelper.callStub(STUB_SESSION_ENDPOINT, 'reset')
  }

  setMockedUserLoginState(state) {
    const userType = {
      guest: 'GuestUser',
      'logged out': 'GuestUser',
      recognised: 'recognised',
      'logged in': 'logged in',
    }
    this.dysonHelper.callStub(STUB_USER_ENDPOINT, 'setLoginState', userType[state])
  }

  getMockedUserLoginState() {
    return this.dysonHelper.callStub(STUB_USER_ENDPOINT).then((res) => {
      const { body: { loginState: state } = {} } = res
      return state
    })
  }

  setLoginService(type, state) {
    this.dysonHelper.callStub(STUB_LOGIN_SERVICE_ENDPOINT, type, state)
  }
}

export default new StubHelper()
