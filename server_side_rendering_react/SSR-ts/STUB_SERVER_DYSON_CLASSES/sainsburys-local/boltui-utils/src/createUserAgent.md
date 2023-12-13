# createUserAgent

Creates a user agent to be used by our Node services when calling other
services. This allows those services to identify who is calling their
endpoints.

**Note**: this is all totally optional, unless you're making an API call that's
routed through Akamai (if you're using the Argos header as a service, then this
applies to you).

## Usage

The function outputs a user agent with the following format:

```
<name>/<env> (v<version>) <token>
```

The version and token are optional. Examples:

```js
// ui-service/production
createUserAgent('ui-service', 'production')

// ui-service/production (v1)
createUserAgent('ui-service', 'production', { version: 1 }) // can be a number
createUserAgent('ui-service', 'production', { version: '1.0.0' }) // or a string

// ui-service/production a1b2c3d4e5f6g7h8i9
createUserAgent('ui-service', 'production', { token: 'a1b2c3d4e5f6g7h8i9' })

// ui-service/production (v1) a1b2c3d4e5f6g7h8i9
createUserAgent('ui-service', 'production', { version: 1, token: 'a1b2c3d4e5f6g7h8i9' })
```

## Why set a user agent?

User agents in general are good microservice etiquette, they make it easier to
trace and debug things, easier to judge the impact of an API change, give an
always up-to-date indication of your dependencies, tell you who's doing weird
things with your API, which teams aren't updating to the latest version, etc.

Most of us are using a library to make API calls, each of which will set their
own user agent (e.g. `node-fetch/1.0`, `node-superagent/3.8.3`, `axios/0.21.1`).
Firstly, this doesn't follow the etiquette. More importantly, if all our
services are making calls like this, it can look suspicously like an attack on
the API. Akamai's bot detection systems have in the past blocked our own
services... so setting a user agent makes it less likely your service will be
impacted by these systems.

## What's in a good user agent?

Every service should have a unique user agent, so that it's instantly
identifiable.

The user agent should be made up of multiple parts:

- name
  - the name of your service
  - should be unique within your deployment system, e.g. if you have ui-service-sit1 and ui-service-sit2 then they need unique user agents
- env
  - the environment your service is deployed to
- version
  - the version of your service
  - can be omitted if your service name is versioned (e.g. ui-service-v1)
- token
  - used in Akamai to monitor traffic
  - request a token for your app on the Akamai board
    - example: https://sainsburys-jira.valiantys.net/browse/AKAMAI-1429

Future considerations: identify where the service is deployed? e.g. Mesos vs
AWS vs some fancy serverless thing vs an Arduino powering your team's dashboard.

## If you can't set the user agent header

If you can't send your service's user agent (maybe because the service you're
calling expects a different user agent, like a customer's user agent) then
you'll need to agree a different way to send it.
