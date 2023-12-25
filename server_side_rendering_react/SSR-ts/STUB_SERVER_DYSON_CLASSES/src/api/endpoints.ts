import {
  prepayApiEndpoint,
  accountApiEndpoint,
  sessionManagerEndpoint,
  getUserInfoApiEndpoint,
  marketingPreferencesApiEndpoint,
} from '../helpers/apiUrlHelpers'

const prepay = prepayApiEndpoint()
const account = accountApiEndpoint()
const session = sessionManagerEndpoint()
const getUserInfo = getUserInfoApiEndpoint()
const marketing = marketingPreferencesApiEndpoint()

interface Endpoints {
  getWallet: (userId: string) => string
  //user
  getUserInfo: () => string
  checkUserAccountExists: () => string
  createUserAccount: () => string
  patchCustomer: (snapshotId: string) => string
  marketingPreferences: (email: string) => string
  saveMarketingPreferences: () => string
  createAnonymousSession: () => string
}

const endpoints: Endpoints = {
  // Wallet
  getWallet: (userId) => `${account}/users/${userId}/wallet`,
  // User
  getUserInfo: () => `${getUserInfo}`,
  checkUserAccountExists: () => `${account}/users:check`,
  createUserAccount: () => `${account}/users`,
  patchCustomer: (checkoutId) => `${prepay}/checkouts/${checkoutId}/customer`,
  marketingPreferences: (email) => `${marketing}?email=${email}`,
  saveMarketingPreferences: () => `${marketing}`,
  // Session
  createAnonymousSession: () => `${session}/sessions/anonymous`,
}

export default endpoints
