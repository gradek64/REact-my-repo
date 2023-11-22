import express from 'express';
import logger from 'node-color-log';
import path from 'path';
import ssrMiddleware from '../server/middleware/ssr';

const app = express();
app.set('views', path.join(__dirname, '/views'));

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
app.listen(PORT, () => {
  logger.info(`client web running on port:${PORT}`);
});
