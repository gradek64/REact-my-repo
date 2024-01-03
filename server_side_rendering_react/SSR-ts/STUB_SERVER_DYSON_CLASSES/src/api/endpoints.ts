import {
  accountApiEndpoint,
  sessionManagerEndpoint
} from '../helpers/apiUrlHelpers'


const account = accountApiEndpoint()
const session = sessionManagerEndpoint()
interface Endpoints {
  getWallet: (userId: string) => string
  createAnonymousSession: () => string
}

const endpoints: Endpoints = {
  // Wallet
  getWallet: (userId) => `${account}/users/${userId}/wallet`,

  // Session
  createAnonymousSession: () => `${session}/sessions/anonymous`,
}

export default endpoints
