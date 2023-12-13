# Dyson Stub server

## Getting started

### Requirements

It has the same requirements as the website.

It uses the following modules:

- `express`: Web server
- `express-session`: Default express module to handle multiple web sessions
- `session-file-store`: Module to store the sessions on the file system
- `dyson`: Module to implement stub responses
- `handlebars`: Module to use response template

### Stub UI payment website

The latest develop code using the Dyson Stub is accessible here:

```
http://ui-payment-stub.service.eu-west-1.dev.deveng.systems
```

The Dyson Stub is configured using the dashboard:

```
http://ui-payment-stub.service.eu-west-1.dev.deveng.systems/dashboard
```

The stub service docker container is build using ./stubs/Dockerfile

### Start the Dyson Stub server locally

```
$ yarn start:api
```

Start the ui-payment and Dyson Stub server with multiple sessions feature

```
$ yarn start:sessions
```

### Open the Dyson Dashboard

From the ui-payment website:

```
http://localhost:3000/dashboard
```

From the Dyson Stub server:

```
http://localhost:3011
```

## Available Endpoints

### Stub endpoints:

- `GET /`: Display the Dyson Dashboard (based on the controlPanel handlebars template)
- `GET /payment-stub/session`: Get/Reset/Destroy the current session
- `GET /payment-stub/basket`: Setup the basket data

## Stubs Folders

The Dyson stub files are contained in

```
./stubs
```

The subfolders are:

- data: contains the data used by the stubs
- helpers: contains helpers class (e.g. API Logger for console.log)
- services: contains the configuration of the rules for the GET and POST calls
- sessions: contains the sessions created when using the server with different web browsers (if MULTIPLE_SESSIONS === 'true')

## Multiple Sessions Management

### Server Configuration

The Dyson Stub server is configured in the script

```
./scripts/start-stub.js
```

The Dyson Stub server used a single session for all browsers by default.

In order to use multiple sessions, the environment variable `MULTIPLE_SESSIONS` should be equal to 'true'.

When a web browser access the server, a session cookie 'dyson_stub_session' is created.

The session is initialised with the default value of the SessionData object.

The sessions are stored on the file system in the folder:

```
./stubs/sessions/
```

### Session Data

The `SessionManager` class handles a single or multiple sessions depending on the `MULTIPLE_SESSIONS` config.
It returns a `SessionData` object and abstract away the session management.

The session data is stored in JSON format.
When receiving a request, the session data is used to instantiate a `SessionData` object.

`SessionData` gives access to the other Data objects (e.g `payment`, `User`, `Basket`, `Store` and `Confirmation`).

```javascript
const sessionData = SessionManager.getSession(req)
const user = sessionData.user
const store = sessionData.store
```

In order to persist session data changes, the `SessionData` object needs to be saved.

```javascript
SessionManager.saveSession(sessionData, req)
```

All the Data objects need to implement `toJson()` and `fromJson(json)` methods for the serialisation / deserialization of `SessionData`. Only important Data object properties get persisted in the session data.

#### Example

For the `Basket` object, we persist only the basket type and not the entire product lists

```javascript
  toJson() {
    return {
      basketType: this.basketType
    }
  }

  fromJson(json) {
    this._basketType = json.basketType
  }
```
