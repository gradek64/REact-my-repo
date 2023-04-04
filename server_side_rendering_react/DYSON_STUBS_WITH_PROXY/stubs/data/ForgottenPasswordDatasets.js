/* eslint-disable no-param-reassign */
// Forgotten Password Datasets
function setupDefault(loginService) {
  loginService.setForgottenPassword('Default', 200)
}
function setupEmailNotRegistered(loginService) {
  loginService.setForgottenPassword('EmailNotRegistered', 200)
}
function setupInvalidEmail(loginService) {
  loginService.setForgottenPassword('InvalidEmail', 400, 'INVALID_EMAIL')
}
function setupNotificationServiceError(loginService) {
  loginService.setForgottenPassword('NotificationServiceError', 500, 'EMAIL_NOT_SENT_ERROR')
}
function setupInternalServerError(loginService) {
  loginService.setForgottenPassword('InternalServerError', 500)
}
function setupRequestTimeout(loginService) {
  loginService.setForgottenPassword('RequestTimeout', 500)
}
function setupUiTimeout(loginService) {
  loginService.setForgottenPassword('UiTimeout', null)
}
function setupJsError(loginService) {
  loginService.setForgottenPassword('JsError', null)
}
function setupParseError(loginService) {
  loginService.setForgottenPassword('ParseError', null)
}

const forgottenPasswordDatasets = {
  Default: {
    description: '200: Successful Request',
    info: 'Successful change password requested',
    setup: setupDefault,
  },
  EmailNotRegistered: {
    description: '200: Email not registered',
    info: 'Email id not registered with Argos',
    setup: setupEmailNotRegistered,
  },
  InvalidEmail: {
    description: '400: Missing/Invalid Email',
    info: 'Missing or invalid email',
    setup: setupInvalidEmail
  },
  NotificationServiceError: {
    description: '500: Notification service error',
    info: 'Notification service error',
    setup: setupNotificationServiceError
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

module.exports = forgottenPasswordDatasets
