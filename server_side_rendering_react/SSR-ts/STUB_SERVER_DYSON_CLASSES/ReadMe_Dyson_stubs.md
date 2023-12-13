# Intro

Is definitely good idea to run a stubs server that allows you to mock data for you api responses so you dont need to wait for the back-end to finish its part as long as you know what the contract is going to look like

Pros: 
  - quick api response based on contracts
  - type safety with contract object propeties check with libraries as ZOD

Cons:
  - you data can quickly become stale and it does not match actual real server data
  - maintance of stub server 

So as you can see there same amout of prons and cons for running a stub server, but there a slight benefit of having stubs server for simple not being stuck for development (continous delivery) so practically you might get more time for your work as developement-> testing -> deployment

## Dyson Setup

To start with Dyson server with TypeScript you need below packages:
  - `express` (node server)
  - `dyson` (stub server that works with express)
  - `express-session`: Default express module to handle multiple web sessions
  - `session-file-store`: Module to store the sessions on the file system
  - `cross-env` (for settings env variables same way, regardless of plafform mac OS or Windows)
  - `ts-node` (typescrit support for node js)
  - `handlebars`: Module to use response template

```bash
yarn add ts-node@^10.9.1 dyson@^2.0.4 cross-env@^6.0.3 handlebars@^4.7.7 express-session@^1.17.0 express@^4.18.2  session-file-store@^1.3.0

```

Also to be able to import modules without require we need those babel library 
```bash
yarn add @babel/register@^7.18.9 

```

also for the node18 You need those or libriries need for Payment stubs that I stole from 

```bash
yarn add path-to-regexp@^6.2.1
yarn add dayjs@1.8.20
yarn add superagent@3.8.3
yarn add connected-react-router@6.6.1
yarn add uuid@^9.0.1

```



## Runing stub server 
  - single session 

  - multi session (with `express-session` middleware)

