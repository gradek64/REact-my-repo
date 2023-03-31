/* eslint-disable no-underscore-dangle,class-methods-use-this */

class User {
  constructor() {
    this.defaultLoginState = 'guest'
    this.defaultId = '123456'
    this.defaultGuestId = '4872089363'
    this.defaultFirstName = 'Anakin'
    this.defaultEmail = 'anakin.skywalker@darkside.com'
    this.defaultPostcode = 'SE11'
    this.setDefaults()
  }

  setDefaults() {
    this._loginState = this.defaultLoginState
    this._customerId = this.defaultId
    this._firstName = this.defaultFirstName
    this._email = this.defaultEmail
    this._postcode = this.defaultPostcode
  }

  toJson() {
    return {
      loginState: this.loginState,
      customerId: this._customerId,
      firstName: this._firstName,
      email: this._email,
      postcode: this._postcode,
    }
  }

  fromJson(json) {
    this.loginState = json.loginState || this.defaultLoginState
    this._customerId = json.customerId
    this._firstName = json.firstName
    this._email = json.email
    this._postcode = json.postcode || this.defaultPostcode
  }

  reset() {
    this.setDefaults()
  }

  get loginState() {
    return this._loginState
  }

  set loginState(loginState) {
    this._loginState = loginState
  }

  get customerId() {
    return this.loginState === 'guest' ? this.defaultGuestId : this._customerId
  }

  get firstName() {
    return this.loginState === 'guest' ? '' : this._firstName
  }

  get email() {
    return this.loginState === 'guest' ? '' : this._email
  }

  set email(email) {
    this._email = email
  }

  get postcode() {
    return this.loginState === 'guest' ? '' : this._postcode
  }

  set postcode(postcode) {
    this._postcode = postcode
  }

  get loginOptions() {
    return {
      'logged in': {
        description: 'Logged in User',
        value: 'logged in',
        info: 'The user is logged in'
      },
      guest: {
        description: 'Guest User',
        value: 'guest',
        info: 'The user is logged out'
      },
      recognised: {
        description: 'Recognised User',
        value: 'recognised',
        info: 'The user is recognised'
      }
    }
  }
}

module.exports = User
