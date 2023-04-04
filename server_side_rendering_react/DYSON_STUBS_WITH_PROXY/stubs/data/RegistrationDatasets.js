/* eslint-disable no-param-reassign */
// Login Datasets
function setupDefault(loginService) {
  loginService.setRegistration('Default', 200)
}
function setupMissingEmail(loginService) {
  loginService.setRegistration('MissingEmail', 400, 'MISSING_EMAIL')
}
function setupInvalidEmail(loginService) {
  loginService.setRegistration('InvalidEmail', 400, 'INVALID_EMAIL')
}
function setupInvalidOrigin(loginService) {
  loginService.setRegistration('InvalidOrigin', 400, 'INVALID_ORIGIN')
}
function setupConflictError(loginService) {
  loginService.setRegistration('ConflictError', 409, 'EMAIL_ALREADY_EXIST')
}
function setupInternalServerError(loginService) {
  loginService.setRegistration('InternalServerError', 500)
}
function setupRequestTimeout(loginService) {
  loginService.setRegistration('RequestTimeout', 500)
}
function setupUiTimeout(loginService) {
  loginService.setRegistration('UiTimeout', null)
}
function setupJsError(loginService) {
  loginService.setRegistration('JsError', null)
}
function setupParseError(loginService) {
  loginService.setRegistration('ParseError', null)
}

const loginDatasets = {
  Default: {
    description: '200: Email is unregistered',
    info: 'Email is not associated with any Argos accounts and user can proceed to registration form',
    setup: setupDefault,
  },
  MissingEmail: {
    description: '400: Missing Email',
    info: 'No email has been submitted',
    setup: setupMissingEmail,
  },
  InvalidEmail: {
    description: '400: Invalid Email',
    info: 'Invalid email format',
    setup: setupInvalidEmail
  },
  InvalidOrigin: {
    description: '400: Invalid Origin',
    info: 'The origin supplied is invalid',
    setup: setupInvalidOrigin
  },
  ConflictError: {
    description: '409: Email already registered',
    info: 'Email already registered with an Argos account',
    setup: setupConflictError
  },
  InternalServerError: {
    description: '500: Internal Server Error',
    info: 'Internal Server Error',
    setup: setupInternalServerError
  },
  RequestTimeout: {
    description: '500: Request Timeout',
    info: 'The request timed out',
    setup: setupRequestTimeout
  },
  UiTimeout: {
    description: 'UI call handler time out',
    info: 'API failed to respond within XHR handler\'s wait limit',
    setup: setupUiTimeout
  },
  JsError: {
    description: 'UI encounters a JavaScript error',
    info: 'An error occurred in the UI',
    setup: setupJsError
  },
  ParseError: {
    description: 'Error parsing response',
    info: 'A malformed JSON response causes a parsing error',
    setup: setupParseError
  }
}

module.exports = loginDatasets
