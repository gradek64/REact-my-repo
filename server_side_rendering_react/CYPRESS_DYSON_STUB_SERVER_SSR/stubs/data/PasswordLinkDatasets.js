/* eslint-disable no-param-reassign */
// Password Link Datasets
function setupDefault(loginService) {
  loginService.setPasswordLink('Default', 200)
}
function setupInvalidLink(loginService) {
  loginService.setPasswordLink('InvalidLink', 400, 'INVALID_LINK')
}
function setupUnverifiedLink(loginService) {
  loginService.setPasswordLink('UnverifiedLink', 500)
}
function setupInternalServerError(loginService) {
  loginService.setPasswordLink('InternalServerError', 500)
}
function setupRequestTimeout(loginService) {
  loginService.setPasswordLink('RequestTimeout', 500)
}
function setupUiTimeout(loginService) {
  loginService.setPasswordLink('UiTimeout', null)
}
function setupJsError(loginService) {
  loginService.setPasswordLink('JsError', null)
}
function setupParseError(loginService) {
  loginService.setPasswordLink('ParseError', null)
}

const passwordLinkDatasets = {
  Default: {
    description: '200: Successful Request',
    info: 'Valid Password link',
    setup: setupDefault,
  },
  InvalidLink: {
    description: '400: Invalid Link',
    info: 'Invalid link or expired link',
    setup: setupInvalidLink
  },
  UnverifiedLink: {
    description: '500: Couldn\'t verify link',
    info: 'Couldn\'t verify link',
    setup: setupUnverifiedLink
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

module.exports = passwordLinkDatasets
