import express from 'express';
import Loadable from 'react-loadable';
import logger from 'node-color-log';
import path from 'path';
import ssrMiddleware from '../server/middleware/ssr';

const app = express();

//set public folder for loading static files
app.use('/public', express.static(path.join(__dirname, '../public/')));

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
// Preload all the chunks then start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    logger.info(`node server running on:${PORT}`);
  });
});
