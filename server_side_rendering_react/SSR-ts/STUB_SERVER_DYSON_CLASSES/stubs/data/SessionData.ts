

import User from './User/User'
import Wallet from './Wallet/Wallet'
import userDatasets from './User/UserDatasets'
import UserSessionManager from './UserSessionManager/UserSessionManager'
import { SessionDataObject, SerialisableStubObject } from 'types/stubs'

const DEFAULT_USER = 'Default'


export default class SessionData {
  user: User
  wallet: Wallet
  userSessionManager: UserSessionManager

  setDefaults() {
    this.user.reset()
    this.wallet.reset()
    this.userSessionManager.reset()

    this.setup()
  }

  constructor(json?: SessionDataObject) {
    this.user = new User()
    this.wallet = new Wallet()
    this.userSessionManager = new UserSessionManager()


    if (!json) {
      this.setDefaults()
    } else {
      this.user.fromJson(json.user)
      this.orderPayments.fromJson(json.orderPayments)
      this.wallet.fromJson(json.wallet)
      this.userSessionManager.fromJson(json.userSessionManager)
    }
  }

  toJson() {
    return {
      wallet: this.wallet.toJson(),
      userSessionManager: this.userSessionManager.toJson(),
      // note: when these get typed, make sure they go back into the same order
      user: this.user.toJson(),
    }
  }

  setup() {
    userDatasets[DEFAULT_USER].setupUser(this.user)
  }

  reset() {
    this.setDefaults()
  }
}
