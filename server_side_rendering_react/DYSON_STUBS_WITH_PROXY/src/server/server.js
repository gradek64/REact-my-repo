import express from 'express';
import logger from 'node-color-log';
import path from 'path';
import ssrMiddleware from '../server/middleware/ssr';
import { stubDashboardProxy } from '../server/middleware/proxy';
const app = express();
app.set('views', path.join(__dirname, '/views'));
/*
it is important to set dist as static folder for express server 
without this the <script src="dist/bundle.js"> will be treated as link not a file
*/
app.use(express.static('dist'));

//manipulate routes

app.use('/login', (req, res, next) => {
  console.log('SSR login route');
  next();
});

// Dashboard stubs
app.use('/dashboard', stubDashboardProxy);

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
app.listen(PORT, () => {
  logger.info(`server web running on port:${PORT}`);
});
