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
const loadHandler = (e) => {
  import('/modules/my-module.js').then((module) => {
    module.loadPageInto(module);
  });
  //callback(err, data);
  console.log(JSON.parse(file));
};

const loadButton = document.querySelector('.loadJSON');
loadButton.addEventListener('click', loadHandler);