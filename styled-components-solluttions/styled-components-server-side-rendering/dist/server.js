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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(1);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _ServerSiteTemplate = __webpack_require__(7);

var _ServerSiteTemplate2 = _interopRequireDefault(_ServerSiteTemplate);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <-- importing ServerStyleSheet

var port = 3000;
var server = (0, _express2.default)();

// Creating a single index route to server our React application from.
server.get('/', function (req, res) {
  /**
   * This is where all the magic happens with Styled Components and
   * rendering our React application to string so we can insert it
   * into our HTML template to send to the client.
   */
  var sheet = new _styledComponents.ServerStyleSheet();

  /*
     it is possible to render your react component on the server site as a string  that means
    behind the scenes method 
       *** renderToString() *** 
     will render your component and spits out teh string outcome out of it, this method it will
    also work on the client site but the idea is to use it on the server site to spead up the 
    process of loading the page
       is method provided by React itselft (not addtional library needed)
      that works either or server or client site (but mosly used by server site)
      that allows to render component as a string => ready for browser to inject that string into html markup
   */

  /*
    according to styled-components documentation 
    `The collectStyles method wraps your element in a provider`
         but in our case both do the same:
         renderToString(<App />)  === renderToString(sheet.collectStyles(<App />))
         
    styled-components method  collectStyles() will collect styles needed for rendering the wrapped
    component
  */

  var ComponentAppContent = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_App2.default, null))); // <-- collecting styles
  var stylesofComponentApp = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  var title = 'Server side Rendering with Styled Components';

  /*
     ServerSiteTemplate is a React component that is beign rendered behind the scenes 
     and it is output as 'string' in res.send response in node
   */
  res.send((0, _ServerSiteTemplate2.default)({
    ComponentAppContent: ComponentAppContent,
    stylesofComponentApp: stylesofComponentApp, // <-- passing the styles to our Html template
    title: title
  }));
  /* res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
   //res.write(body, "utf-8");
  const stream = renderToNodeStream(
    ServerSiteTemplate({
      ComponentAppContent: '<p>yhdshshd</p>',
      stylesofComponentApp, // <-- passing the styles to our Html template
      title
    })
  );
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.end();
  }); */
});

server.listen(port);
console.log('Serving at http://localhost:' + port);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 50%;\n  height: 50%;\n  font-size: 40px;\n  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 50%;\n  height: 50%;\n  font-size: 40px;\n  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SomeComponent = __webpack_require__(6);

var _SomeComponent2 = _interopRequireDefault(_SomeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Our single Styled Component definition
var AppContainer = _styledComponents2.default.div(_templateObject);

var App = function App() {
  return _react2.default.createElement(
    AppContainer,
    null,
    _react2.default.createElement(
      'div',
      null,
      (0, _server.renderToString)(_react2.default.createElement(_SomeComponent2.default, null))
    ),
    _react2.default.createElement(
      'div',
      null,
      '\uD83D\uDC85'
    )
  );
};

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SomeComponentrenderToString = function SomeComponentrenderToString() {
  return 'this is some component';
};
exports.default = SomeComponentrenderToString;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
var Html = function Html(_ref) {
  var body = _ref.ComponentAppContent,
      styles = _ref.stylesofComponentApp,
      title = _ref.title;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      " + styles + "\n    </head>\n    <body style=\"margin:0\">\n      <div>this div has been rendered on the server site !!</div>\n      <div >\n      <h1>This header is rendered on the server site below is react content\n      <div id=\"app\" style=\"border:1px dotted green\">" + body + "</div>\n      </div>\n      </body>\n  </html>\n";
};

exports.default = Html;

/***/ })
/******/ ]);