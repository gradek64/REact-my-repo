import nconf from 'nconf';

// Initialise with arguments and env variables
nconf.argv().env();

// Set the default environment to production
nconf.defaults({
  NODE_ENV: 'production',
  NEW_RELIC_HOME: './config/newrelic',
});

const config = nconf.get('ENV_CONFIG') || nconf.get('NODE_ENV');

// Load environment constants for environment
nconf.file({ file: `./config/envconfig/envconfig.${config}.json` });

// STUB_URL will be set for feature branches
if (nconf.get('ENV_CONFIG') === 'remoteStub') {
  nconf.set(
    'ARGOS_URL',
    nconf.get('ARGOS_URL').replace('stub-login-service', nconf.get('STUB_URL'))
  );
  nconf.set(
    'HABITAT_URL',
    nconf
      .get('HABITAT_URL')
      .replace('stub-login-service', nconf.get('STUB_URL'))
  );
}

// Pass all values into process.env
process.env = nconf.get();

// Log out the endpoints we're using to make debugging easier
if (config !== 'test') {
  console.log(
    JSON.stringify({
      name: 'serverLogger',
      msg: `Configuration for "${config}":`,
      envconfig: {
        NODE_ENV: nconf.get('NODE_ENV'),
        ENV_CONFIG: nconf.get('ENV_CONFIG'),
        HEADER_ENV: nconf.get('HEADER_ENV'),
        TEALIUM_ENV: nconf.get('TEALIUM_ENV'),
        ARGOS_URL: nconf.get('ARGOS_URL'),
        HABITAT_URL: nconf.get('HABITAT_URL'),
        IOVATION: nconf.get('IOVATION'),
        VAULT_ROLE: nconf.get('VAULT_ROLE'),
        VAULT_ENV: nconf.get('VAULT_ENV'),
        CONSUL_ENV: nconf.get('CONSUL_ENV'),
      },
    })
  );
}

export { nconf };
