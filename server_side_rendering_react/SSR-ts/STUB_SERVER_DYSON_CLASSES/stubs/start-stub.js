/**
 * THIS IS : YOUR STUB NODE.js SERVER as back-end API server
 *
 * */

// Allows us to use import/export in any other file
require('@babel/register');
require('regenerator-runtime/runtime');

const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const dyson = require('dyson');
const chalk = require('chalk');
const path = require('path');

const PORT = process.env.PORT || 3011;

// move them to config in envcofig file
const config = require('./config').default;

const options = {
  configDir: path.join(__dirname, './services'),
  exposeRequest: true,
};
const configs = dyson.getConfigurations(options);

const app = express();

console.log('app!!!');;
// ----middleware
app.use(cookieParser());
const {
  checkoutAuth,
  accountAuth,
  setApiCheckoutResponses,
} = require('./middleware');

if (config.MULTIPLE_SESSIONS) {
  chalk.bgBlueBright('---Local STUBS running MULTIPLE_SESSIONS');
  app.use(
    session({
      name: config.COOKIE_NAME,
      secret: 'very nice multi session stub',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: 'auto' },
      store: new FileStore({ path: 'stubs/sessions' }),
    })
  );
}

app.use((req, res, next) => {
  req.brand = req.cookies.brand || 'ARGOS';

  next();
});

app.use('/checkout-api-v2', checkoutAuth, setApiCheckoutResponses);
app.use('/account-api', accountAuth);
  /* 
  // POST route example
  app.post('/login', (req, res) => {
    console.log('LOGIN');
    // Assuming you want to set a cookie named 'user' with the value 'john_doe'
    res.cookie('user', 'john_doe');

    // Your other logic for handling the POST request goes here

    // Send a response indicating that the POST request has been completed
    res.status(200).send('POST request completed successfully!');
  }); */
// ---- middleware
console.log('all middleware!!!');
// --- static assets
app.use('/images', express.static(path.join(process.cwd(), 'images')));
app.use('/public', express.static(path.join(process.cwd(), 'public')));

// -- run dyson server
dyson.registerServices(app, options, configs);
app.listen(PORT, () => {
  console.log('STUBS server running on :',PORT)
});
