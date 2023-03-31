/* eslint-disable no-param-reassign */
// Login Datasets
function setupDefault(loginService) {
  loginService.setLogin('Default', 200, [], 0)
}
function setupMissingEmail(loginService) {
  loginService.setLogin('MissingEmail', 400, ['MISSING_EMAIL'])
}
function setupMissingPassword(loginService) {
  loginService.setLogin('MissingPassword', 400, ['MISSING_PASSWORD'])
}
function setupMissingCredentials(loginService) {
  loginService.setLogin('MissingCredentials', 400, ['MISSING_EMAIL', 'MISSING_PASSWORD'])
}
function setupInvalidEmail(loginService) {
  loginService.setLogin('InvalidEmail', 400, ['INVALID_EMAIL'])
}
function setupInvalidPassword(loginService) {
  loginService.setLogin('InvalidPassword', 400, ['INVALID_PASSWORD'])
}
function setupInvalidCredentials(loginService) {
  loginService.setLogin('InvalidCredentials', 400, ['INVALID_EMAIL', 'INVALID_PASSWORD'])
}
function setupMissingOrigin(loginService) {
  loginService.setLogin('MissingOrigin', 400, ['MISSING_ORIGIN'])
}
function setupAuthenticationError(loginService) {
  loginService.setLogin('AuthenticationError', 401)
}
function setupInternalServerError(loginService) {
  loginService.setLogin('InternalServerError', 500)
}
function setupRequestTimeout(loginService) {
  loginService.setLogin('RequestTimeout', 500)
}
function setupUiTimeout(loginService) {
  loginService.setLogin('UiTimeout', null)
}
function setupJsError(loginService) {
  loginService.setLogin('JsError', null)
}
function setupParseError(loginService) {
  loginService.setLogin('ParseError', null)
}

const loginDatasets = {
  Default: {
    description: '200: Successful login',
    info: 'E-mail and password match an existing Argos account',
    setup: setupDefault,
  },
  MissingEmail: {
    description: '400: Missing Email',
    info: 'No email has been submitted',
    setup: setupMissingEmail,
  },
  MissingPassword: {
    description: '400: Missing Password',
    info: 'No password has been submitted',
    setup: setupMissingPassword
  },
  MissingCredentials: {
    description: '400: Missing Credentials',
    info: 'Both email and password have not been submitted',
    setup: setupMissingCredentials
  },
  InvalidEmail: {
    description: '400: Invalid Email',
    info: 'Invalid email format',
    setup: setupInvalidEmail
  },
  InvalidPassword: {
    description: '400: Invalid Password',
    info: 'Invalid password format',
    setup: setupInvalidPassword
  },
  InvalidCredentials: {
    description: '400: Invalid Credentials',
    info: 'Both email and password have not the correct format',
    setup: setupInvalidCredentials
  },
  MissingOrigin: {
    description: '400: Missing Origin',
    info: 'No origin has been submitted',
    setup: setupMissingOrigin
  },
  AuthenticationError: {
    description: '401: AuthenticationError',
    info: 'E-mail and password don t match an existing Argos account',
    setup: setupAuthenticationError
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
