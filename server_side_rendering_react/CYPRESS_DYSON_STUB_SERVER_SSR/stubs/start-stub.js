/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const dyson = require('dyson')
const config = require('./config')

const options = {
  configDir: './stubs/services',
  exposeRequest: true
}

const app = express()
const configs = dyson.getConfigurations(options)

if (config.MULTIPLE_SESSIONS) {
  app.use(session({
    name: config.COOKIE_NAME,
    secret: 'very nice multi session login stub',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: 'auto' },
    store: new FileStore({ path: './stubs/sessions' })
  }))
}

dyson.registerServices(app, options, configs)

app.listen(config.STUB_PORT)
console.log(`Login Stub is running at: http://localhost:${config.STUB_PORT}\n`)
