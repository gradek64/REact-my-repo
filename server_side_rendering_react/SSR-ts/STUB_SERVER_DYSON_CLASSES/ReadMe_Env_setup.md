# Intro
when we deal with diffrent enviroment as development, testing and production is good to keep your code easisly addapt so you can run your app and api for above enviroments.

# Before you start

It is important to understand how webpack is shaping your entry point as 'server.js' file before you can understand the setup of nconf module. When webpack start compiling your server code it will start reading your entry file and `server.js `building your code with all imports paths, it will read all your imports paths.

Once compiling is finishished, it will create bundle file and place it in `dist/server.bundle.js`

Last job is to run the `dist/server.bundle.js` with all the imports being in the same file `server.bundle.js`. At this point all of the paths has been converted to `common.js` fand are accessable for `dist/server.bundle.js`.

Steps taken by wepback when compiling:
  - accessing an entry point `server.jsx`
  - scans the file and start compiling by 
    - reading all the imports and INITILISING every module
    - once all the code is read it will compile it to single file and place it `dist/server.bundle.js`
  - finally it will run your entry point compiled version as `dist/server.bundle.js`

## Packages

To start with Dyson server with TypeScript you need below packages:
  - `nconf` (config file as simple key-value store with support for both local and remote storage)
  - `dotenv` (Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env)

```bash
yarn add nconf@^0.10.0 dotenv@^16.3.1

```

It is always good idea to pass all you ENV config into node Proce
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

