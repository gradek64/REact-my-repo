import { SerialisableStubObject, UserStub } from 'types/stubs'

export default class User implements SerialisableStubObject<UserStub> {
  private _userType: string
  private _loginState: string
  private _title: string
  private _firstName: string
  private _lastName: string
  private _email: string
  private _homePhone: string
  private _mobilePhone: string
  private _marketingPreferences: UserStub['marketingPreferences']

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      userType: this._userType,
      loginState: this._loginState,
      title: this._title,
      firstName: this._firstName,
      lastName: this._lastName,
      email: this._email,
      homePhone: this._homePhone,
      mobilePhone: this._mobilePhone,
      marketingPreferences: { ...this._marketingPreferences },
    }
  }

  fromJson(json: UserStub) {
    this._userType = json.userType
    this._loginState = json.loginState || ''
    this._title = json.title
    this._firstName = json.firstName
    this._lastName = json.lastName
    this._email = json.email
    this._homePhone = json.homePhone
    this._mobilePhone = json.mobilePhone
    this._marketingPreferences = { ...json.marketingPreferences }
  }

  setDefaults() {
    this._userType = 'Default'
    this._loginState = ''
    this._title = 'Mr'
    this._firstName = ''
    this._lastName = ''
    this._email = ''
    this._homePhone = ''
    this._mobilePhone = ''
    this._marketingPreferences = { ARGOS: null, TU: null, HABITAT: null, responseStatus: 200 }
  }

  reset() {
    this.setDefaults()
  }

  rename(first: string, last: string) {
    this._firstName = first
    this._lastName = last
    this._email = `${first}.${last}@darkside.com`
  }

  get userOptions() {
    return {
      hasEmail: this.email !== '',
    }
  }

  get userType() {
    return this._userType
  }

  set userType(value) {
    this._userType = value
  }

  get loginState() {
    return this._loginState
  }

  set loginState(loginState) {
    this._loginState = loginState
  }

  get title() {
    return this._title
  }

  set title(value) {
    this._title = value
  }

  get firstName() {
    return this._firstName
  }

  set firstName(value) {
    this._firstName = value
  }

  get lastName() {
    return this._lastName
  }

  set lastName(value) {
    this._lastName = value
  }

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
  }

  get homePhone() {
    return this._homePhone
  }

  set homePhone(value) {
    this._homePhone = value
  }

  get mobilePhone() {
    return this._mobilePhone
  }

  set mobilePhone(value) {
    this._mobilePhone = value
  }

  get marketingPreferences() {
    return this._marketingPreferences
  }

  set marketingPreferences(value) {
    this._marketingPreferences = value
  }
}
