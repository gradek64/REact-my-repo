'use strict';

/* 
var fs = require('fs');
module.exports = function (callback) {
  fs.readFile('/etc/passwd', function (err, data) {
    callback(err, data);
  });
};
 */

/* require('./passwords')=function (callback) {
  fs.readFile('/etc/passwd', function (err, data) {
    callback(err, data);
  });
}; */
var loadHandler = function loadHandler(e) {
  var file = require('../scripts/jsonToLoad.json');
  //callback(err, data);
  console.log(JSON.parse(file));
};

var loadButton = document.querySelector('.loadJSON');
loadButton.addEventListener('click', loadHandler);