/* eslint-disable no-param-reassign */
// Password Change Datasets
function setupDefault(loginService) {
  loginService.setPasswordChange('Default', 200)
}
function setupInvalidLink(loginService) {
  loginService.setPasswordChange('InvalidLink', 400, ['INVALID_LINK'])
}
function setupMissingEmail(loginService) {
  loginService.setPasswordChange('MissingEmail', 400, ['MISSING_LOGONID'])
}
function setupMissingPassword(loginService) {
  loginService.setPasswordChange('MissingPassword', 400, ['MISSING_LOGONPASSWORD'])
}
function setupMissingVerifyPassword(loginService) {
  loginService.setPasswordChange('MissingVerifyPassword', 400, ['MISSING_LOGONPASSWORDVERIFY'])
}
function setupMissingFieldValues(loginService) {
  loginService.setPasswordChange('MissingFieldValues', 400, ['MISSING_LOGONPASSWORD', 'MISSING_LOGONPASSWORDVERIFY'])
}
function setupInvalidEmail(loginService) {
  loginService.setPasswordChange('InvalidEmail', 400, ['PASSWORDS_POLICY_VIOLATED'])
}
function setupInvalidPassword(loginService) {
  loginService.setPasswordChange('InvalidPassword', 400, ['PASSWORDS_POLICY_VIOLATED'])
}
function setupPasswordMismatch(loginService) {
  loginService.setPasswordChange('PasswordMismatch', 400, ['PASSWORDS_POLICY_VIOLATED'])
}
function setupInternalServerError(loginService) {
  loginService.setPasswordChange('InternalServerError', 500)
}
function setupRequestTimeout(loginService) {
  loginService.setPasswordChange('RequestTimeout', 500)
}
function setupUiTimeout(loginService) {
  loginService.setPasswordChange('UiTimeout', null)
}
function setupJsError(loginService) {
  loginService.setPasswordChange('JsError', null)
}
function setupParseError(loginService) {
  loginService.setPasswordChange('ParseError', null)
}

const passwordChangeDatasets = {
  Default: {
    description: '200: Successful Request',
    info: 'Password updated successfully',
    setup: setupDefault,
  },
  InvalidLink: {
    description: '400: Invalid Link',
    info: 'Invalid or expired link',
    setup: setupInvalidLink
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
  MissingVerifyPassword: {
    description: '400: Missing Verify Password',
    info: 'No verify password has been submitted',
    setup: setupMissingVerifyPassword
  },
  MissingFieldValues: {
    description: '400: Missing Field Values',
    info: 'Both password and verify password have not been submitted',
    setup: setupMissingFieldValues
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
  PasswordMismatch: {
    description: '400: Password Mismatch',
    info: 'Verify password mismatch',
    setup: setupPasswordMismatch
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

module.exports = passwordChangeDatasets
