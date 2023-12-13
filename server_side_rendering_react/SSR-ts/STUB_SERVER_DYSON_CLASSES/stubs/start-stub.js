const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const dyson = require('dyson');
const path = require('path');

// Allows us to use import/export in any other file
require('@babel/register');
require('regenerator-runtime/runtime');

console.log('fine');
const config = require('./config').default;
const {
  checkoutAuth,
  accountAuth,
  setApiCheckoutResponses,
} = require('./middleware');

const options = {
  configDir: path.join(__dirname, './services'),
  exposeRequest: true,
};
console.log('fine1');

const app = express();
const configs = dyson.getConfigurations(options);

if (config.MULTIPLE_SESSIONS) {
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
console.log('fine2');

app.use(cookieParser());
app.use((req, res, next) => {
  req.brand = req.cookies.brand || 'ARGOS';

  next();
});

app.use('/checkout-api-v2', checkoutAuth, setApiCheckoutResponses);
app.use('/account-api', accountAuth);
console.log('fine3');

// POST route example
app.post('/login', (req, res) => {
  console.log('LOGIN');
  // Assuming you want to set a cookie named 'user' with the value 'john_doe'
  res.cookie('user', 'john_doe');

  // Your other logic for handling the POST request goes here

  // Send a response indicating that the POST request has been completed
  res.status(200).send('POST request completed successfully!');
});

app.use('/images', express.static(path.join(process.cwd(), 'images')));
app.use('/public', express.static(path.join(process.cwd(), 'public')));

dyson.registerServices(app, options, configs);

app.listen(3011, () => {
  console.log('Stub server started');
});
