(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../scripts/jsonToLoad.json":2}],2:[function(require,module,exports){
module.exports={"data":{"name":"Colombia","capital":"Bogotá"}}
},{}]},{},[1]);
