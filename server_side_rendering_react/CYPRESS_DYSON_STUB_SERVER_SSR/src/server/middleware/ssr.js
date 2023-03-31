import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import logger from 'node-color-log';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../../shared/components/App';
import routes, { processRoutes } from '../../shared/routes';
import { createMemoryHistory } from 'history';
import configureStore from '../../shared/Redux/store';

const ssrMiddleware = (req, res, next) => {
  logger.color('yellow').bold().log('requested req.url', req.url);

  /******** Redux server setup ******/

  // set initial store to be passed to client in window._data
  const initialState = {
    data: [],
  };

  //U can not use BrowserRouter cause the routes are processed on server not a client
  const memoryHistory = createMemoryHistory({ initialEntries: [req.url] });
  const store = configureStore(memoryHistory, initialState);

  /******/

  // Waits for asynchronous actions like API calls
  // before rendering the HTML
  const waitForAsyncActions = processRoutes(undefined, store, req);

  Promise.all(waitForAsyncActions)
    .then(() => {
      logger
        .color('yellow')
        .bold()
        .log('requested req.url in promise response', req.url);

      //get store that is passed to __INITIAL_REDUX_DATA
      const state = store.getState();

      const markup = renderToString(
        <ReduxProvider store={store}>
          <StaticRouter location={req.url} context={{}}>
            <App />
          </StaticRouter>
        </ReduxProvider>
      );

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
          </head>
  
          <body>
            <div id="app">${markup}</div>
          </body>
          <!-- below only works with dev-server is the hydrate react part that melts bundle.js into sever output
          
          from :

          output: {
            path: path.join(__dirname, '../../', 'src'),
            filename: 'bundle.js',
          },
          
          -->
         <script   type="text/javascript" src="/bundle.js" defer></script>
        </html>
      `);
    })
    .catch(next);
};

export default ssrMiddleware;
