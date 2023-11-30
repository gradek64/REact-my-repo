import express from "express";
import Loadable from "react-loadable";
import logger from "node-color-log";
import path from "path";
import ssrMiddleware from "./middleware/ssr";
//if the library does not support import (because is old) like the one below
//1. Try to find different up-to-date library 
//2. use require as the documetatio suggest as last resort
const utils = require('utils')._;

const app = express();

const getMeArray = utils.arrayify('abc')
console.log('getMeArray', getMeArray)

//set dist to be static folder for scripts
app.use(express.static("dist"));
//set public folder for loading static files
app.use("/public", express.static(path.join(__dirname, "../public/")));

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
// Preload all the chunks then start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    logger.info(`magic happens on port:${PORT}`);
  });
});
