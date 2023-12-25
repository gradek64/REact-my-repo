import nconf from 'nconf'
import * as dotenv from 'dotenv'

// Initialise with arguments and env variables
nconf.argv().env()

// Set the default environment to production
nconf.defaults({
  NODE_ENV: 'production',
  // NEW_RELIC_HOME: './config/newrelic',
  DISABLE_AUTOMATIC_RESUME: 'false',
})

const config = nconf.get('ENV_CONFIG') || nconf.get('NODE_ENV')

// Load environment constants for environment
nconf.file({ file: `./config/envconfig/envconfig.${config}.json` })

if (config === 'stub') {
  dotenv.config({ path: '.env.local' })
  nconf.set('ADDRESS_FINDER_API_KEY', process.env.ADDRESS_FINDER_API_KEY)
}

// STUB_URL will be set for feature branches
// TODO: See ticket BOFS-4265 - investigate similar functionality that can deploy feature or preview deployments in Bosun
// if (nconf.get('ENV_CONFIG') === 'remoteStub') {
//   nconf.set('GATEWAY_API', nconf.get('GATEWAY_API').replace('stub-payment-service', nconf.get('STUB_URL')))
//   nconf.set('ACCOUNT_API', nconf.get('ACCOUNT_API').replace('stub-payment-service', nconf.get('STUB_URL')))
//   nconf.set('WCS_API', nconf.get('WCS_API').replace('stub-payment-service', nconf.get('STUB_URL')))
//   nconf.set(
//     'SESSION_MANAGER_API',
//     nconf.get('SESSION_MANAGER_API').replace('stub-payment-service', nconf.get('STUB_URL')),
//   )
//   nconf.set(
//     'MARKETING_PREFERENCE_API',
//     nconf.get('MARKETING_PREFERENCE_API').replace('stub-payment-service', nconf.get('STUB_URL')),
//   )
// }

// Pass all values into process.env
process.env = nconf.get()

// Log out the endpoints we're using to make debugging easier
if (config !== 'test') {
  console.log(
    JSON.stringify({
      name: 'serverLogger',
      msg: `Configuration for "${config}":`,
      envconfig: {
        NODE_ENV: nconf.get('NODE_ENV'),
        ENV_CONFIG: nconf.get('ENV_CONFIG'),
        GATEWAY_API: nconf.get('GATEWAY_API'),
        ACCOUNT_API: nconf.get('ACCOUNT_API'),
        WCS_API: nconf.get('WCS_API'),
        SESSION_MANAGER_API: nconf.get('SESSION_MANAGER_API'),
        MARKETING_PREFERENCE_API: nconf.get('MARKETING_PREFERENCE_API'),
        RECEIPT_API: nconf.get('RECEIPT_API'),
        CONSUL_ENV: nconf.get('CONSUL_ENV'),
        BOSUN_CONFIG_MAP: nconf.get('BOSUN_CONFIG_MAP'),
        VAULT_ENV: nconf.get('VAULT_ENV'),
        BOSUN_ENV: nconf.get('BOSUN_ENV'),
      },
    }),
  )
}

export { nconf }
