const superagent = require('superagent')
const { CreateSession, CreateInstrumentPaypal } = require('./PaypalOrchestratorData')

const getPaypalToken = () =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        body: { sessionId },
      } = await superagent
        .post(CreateSession.url)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .auth(CreateSession.auth.username, CreateSession.auth.password)
        .send(JSON.stringify(CreateSession.body))

      const {
        body: {
          PayPal: { token },
        },
      } = await superagent
        .post(CreateInstrumentPaypal.url.replace('{{sessionId}}', sessionId))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .auth(CreateInstrumentPaypal.auth.username, CreateInstrumentPaypal.auth.password)
        .send(JSON.stringify(CreateInstrumentPaypal.body))

      resolve(token)
    } catch (err) {
      reject(err)
    }
  })

module.exports = getPaypalToken
