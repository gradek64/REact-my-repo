const config = {
  MULTIPLE_SESSIONS: process.env.MULTIPLE_SESSIONS === 'true',
  STUB_PORT: process.env.STUB_PORT || '3011',
  COOKIE_NAME: 'dyson_login_session'
}

module.exports = config
