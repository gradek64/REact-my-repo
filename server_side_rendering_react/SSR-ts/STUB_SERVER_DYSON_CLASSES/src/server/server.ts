/**
 * THIS IS : YOUR APP NODE.js SERVER
 *
 **/


import express from "express";
import Loadable from "react-loadable";
import logger from "node-color-log";

// Must be imported first so that env variables are correctly set
import { nconf } from '../../config/envconfig/envConfig' // eslint-disable-line import/order
import ssrMiddleware from "./middleware/ssr";
import {
  stubDashboardProxy,
  stubEndpointProxy,
  accountServiceProxy,
} from './middleware/proxy'

const app = express();

// ---- proxies -----

app.use('/account-api', accountServiceProxy)

// Dashboard stubs
const envConfig = nconf.get('ENV_CONFIG') || nconf.get('NODE_ENV')
if (envConfig === 'stub' || envConfig === 'remoteStub') {

  //access index page of stubs 3011 on 3100/dashboard
  app.use('/dashboard', stubDashboardProxy)

  //access /payment-stub/ page of stubs 3011 on 3100/payment-stub 
  //payment-stub is used to modify dashboard ,
  app.use('/payment-stub', stubEndpointProxy)
}

// ---- end of proxies -----


//-- static assets on back-end server
app.use(express.static('../static'))

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
// Preload all the chunks then start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    logger.info(`node server running on:${PORT}`);
  });
});
