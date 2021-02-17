import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../shared/App';
import routes from '../shared/routes';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

  /*   const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve(); */

  /*
    this experiment shows that we will never fetch external data from server 
    but will still render server site markup but only with the structure
    as navbar (which are static not coming from exteranal call, they simply can be configured 
    in front-end)

    whole idea is to fetch data in a sever and render the markup with the data 
    but it brings extra complexity traking what to laod in client and what in server 
    it could be beter to load structure in sever and leave any async code for client
    clearly for maintance reason still user will see something on page as Navbar etc...
    debatable....

*/
  const promise = activeRoute.fetchInitialData
    ? Promise.resolve()
    : Promise.resolve();

  promise
    .then(data => {
      const context = { data };
      /*
       **
       * StaticRouter component.
       * It’s called StaticRouter since the location never actually changes.
       * It takes in two required props: location and context.
       * location is the current location being requested by the user (req.url)
       * and context needs to be an object that can contain any information about the render
       * - we’ll use a blank context object for now
       *
       *
       */
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
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <h1>this is rendered on server site</h1>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
    })
    .catch(next);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
