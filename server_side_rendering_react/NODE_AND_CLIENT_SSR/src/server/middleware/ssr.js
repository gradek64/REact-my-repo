import React from 'react';
import logger from 'node-color-log';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../../shared/components/App';
import routes from '../../shared/routes';

const ssrMiddleware = (req, res, next) => {
  logger.color('yellow').bold().log('requested req.url', req.url);
  //this goes through all routes in application;
  const activeRoute =
    routes.find((route, i) => matchPath(req.url, route)) || {};

  logger.color('yellow').bold().log('activeRoute', activeRoute);

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
      const context = { data };
      logger
        .color('yellow')
        .bold()
        .log('requested req.url in promise response', req.url);
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
            <!-- this has been generated by config/client/webpack.dev.config -->
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
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