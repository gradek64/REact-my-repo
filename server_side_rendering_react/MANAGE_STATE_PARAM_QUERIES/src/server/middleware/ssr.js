import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import logger from 'node-color-log';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../shared/components/App';
import { processRoutes } from '../../shared/routes';
import { createMemoryHistory } from 'history';

const ssrMiddleware = (req, res, next) => {
  logger.color('yellow').bold().log('requested req.url', req.url);

  /******** Redux server setup ******/

  // set initial store to be passed to client in window._data
  const initialState = {
    promotions: {},
  };

  //U can not use BrowserRouter cause the routes are processed on server not a client
  const memoryHistory = createMemoryHistory({ initialEntries: [req.url] });
  // const store = configureStore(memoryHistory, initialState);

  /******/

  // Waits for asynchronous actions like API calls
  // before rendering the HTML
  // undefined is a way of not setting a value for the first param in this case
  // processRoutes(routesProcessing = routes,store, req) = undefined will cause routesProcessing = routes so will take default of the function
  const waitForAsyncActions = [processRoutes(
    undefined,
    memoryHistory,
    initialState,
    req,
    res
  )];

    Promise.all(waitForAsyncActions)
    // Promise all resolve all promises result in array so [store]
    .then(([store]) => {
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
