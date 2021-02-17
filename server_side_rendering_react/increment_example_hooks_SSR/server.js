/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(3);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(5);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));

/*
  SERVER SITE
  * We want to render <App/> component on the server side
  * The way it work it will compile component with its initial state 
  * by sending props as configProps = { initialCount: 3 }
  * then method renderToString(<App {...configProps} />); 
  * will render our component as string and attached to markup
  * and server role ends here, to interact with component client browser will take over
  BROWSER SITE 
  * One important thing to notice is <APP > on the server site has to be 
  * INDENTICAL to the one on server (so the same props , no expections )
  * the way to pass props to browser clint <APP> component is by window glabal variable
  * <script>window.__INITIAL_DATA__ = ${serialize(configProps)}</script>
  * it is good practice to desctructure your props thefore they dont have to be 
  * explicitly defined what makes it easier to mantain both server and client site of <App /> componnet
  * <App {...window.__INITIAL_DATA__} /> we utilize our glabal variable configuration as destructured props
*/

app.get('*', function (req, res) {
  var configProps = { initialCount: 5 };
  var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, configProps));
  res.send('\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR with RR</title>\n        <script>window.__INITIAL_DATA__ = \n' + (0, _serializeJavascript2.default)(configProps) + '</script>\n<script src="/bundle.js" defer></script>\n      </head>\n\n      <body>\n      <style>\n        #app {\n          background-color:green;\n          display:flex;\n          align-items: center;\n          justify-content: center;\n        }\n        p {\n          text-align:center;\n        }\n      </style>\n        <div id="app">' + markup + '</div>\n      </body>\n    </html>\n  ');
});

app.listen(3000, function () {
  console.log('Server is listening on port: 3000');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var initialCount = _ref.initialCount;

  var _React$useState = _react2.default.useState(initialCount),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      count
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return setCount(count + 1);
        } },
      'increment'
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return setCount(count - 1);
        } },
      'decrement'
    )
  );
};

exports.default = App;

/***/ })
/******/ ]);