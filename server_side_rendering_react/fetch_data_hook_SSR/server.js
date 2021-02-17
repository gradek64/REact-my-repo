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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _api = __webpack_require__(7);

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
  var configProps = { data: null };

  //BEFORE we renderToString <App /> component we need to fetch data on server site and then
  //renderToString() will spit out the outcome;

  (0, _api.fetchPopularRepos)().then(function (data) {
    var updatedPropsData = _extends({}, configProps, { data: data });
    var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, updatedPropsData));

    res.send('\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR with RR</title>\n        <script>window.__INITIAL_DATA__ = \n        ' + (0, _serializeJavascript2.default)(updatedPropsData) + '</script>\n        <script src="/bundle.js" defer></script>\n      </head>\n\n      <body>\n        <div id="app">' + markup + '</div>\n      </body>\n    </html>\n  ');
  });
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var data = _ref.data;

  //in this case once clint loads we dont do any interactions so
  //this example dosnt have that feature U can get that with routes for example
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      { style: { display: 'flex', flexWrap: 'wrap' } },
      data.map(function (_ref2) {
        var name = _ref2.name,
            owner = _ref2.owner,
            stargazers_count = _ref2.stargazers_count,
            html_url = _ref2.html_url;
        return _react2.default.createElement(
          'li',
          { key: name, style: { margin: 30 } },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: html_url },
                name
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '@',
              owner.login
            ),
            _react2.default.createElement(
              'li',
              null,
              stargazers_count,
              ' stars'
            )
          )
        );
      })
    )
  );
};

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPopularRepos = fetchPopularRepos;

var _isomorphicFetch = __webpack_require__(8);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//this particular fetch 'isomorphic-fetch' allows you to fetch data either on server or client

function fetchPopularRepos() {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

  var encodedURI = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

  return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
    return data.json();
  }).then(function (repos) {
    return repos.items;
  }).catch(function (error) {
    console.warn(error);
    return null;
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ })
/******/ ]);