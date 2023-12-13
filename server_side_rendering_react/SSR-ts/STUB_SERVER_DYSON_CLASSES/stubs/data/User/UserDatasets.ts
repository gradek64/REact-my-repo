import User from './User'
import { AddressType } from 'types/stubs'

function setUser(user: User, userType = 'Default') {
  user.reset()
  user.userType = userType

  switch (userType) {
    case 'GuestUser':
    case 'GuestUserNoAddressData':
      user.loginState = 'guest'
      break
    case 'RecognisedUser':
      user.loginState = 'recognised'
      break
    default:
      user.loginState = 'logged in'
  }

  if (userType === 'GuestUserNoAddressData') {
    user.addresses.setAddressType(AddressType.BLANK_ADDRESS)
  } else {
    user.firstName = 'Anakin'
    user.lastName = 'Skywalker'
    user.email = 'anakin.skywalker@darkside.com'
    user.mobilePhone = userType === 'NoMobileUser' ? '' : '07890123456'
  }

  if (userType === 'SecondaryUser') {
    user.rename('Obiwan', 'Kenobi')
  }

  return user
}

// Default user
function setDefaultUser(user) {
  return setUser(user)
}

// User with no mobile
function setNoMobileUser(user) {
  return setUser(user, 'NoMobileUser')
}

// Secondary user
function setSecondaryUser(secondaryUser) {
  return setUser(secondaryUser, 'SecondaryUser')
}

// Logged out (recognised) user
function setRecognisedUser(user) {
  return setUser(user, 'RecognisedUser')
}

// Logged out (guest) user
function setGuestUser(user) {
  return setUser(user, 'GuestUser')
}

// Logged out (guest) user with no address data
function setGuestUserNoAddressData(user) {
  return setUser(user, 'GuestUserNoAddressData')
}

const userDatasets = {
  Default: {
    description: 'LOGGEDIN | Default User',
    setupUser: setDefaultUser,
  },
  NoMobileUser: {
    description: 'LOGGEDIN | User with No Mobile',
    setupUser: setNoMobileUser,
  },
  SecondaryUser: {
    description: 'LOGGEDIN | Secondary User',
    setupUser: setSecondaryUser,
  },
  RecognisedUser: {
    description: 'RECOGNISED | Logged Out User',
    setupUser: setRecognisedUser,
  },
  GuestUser: {
    description: 'GUEST | Logged Out User',
    setupUser: setGuestUser,
  },
  GuestUserNoAddressData: {
    description: 'GUEST | Logged Out User (No Address Data)',
    setupUser: setGuestUserNoAddressData,
  },
}

export default userDatasets
