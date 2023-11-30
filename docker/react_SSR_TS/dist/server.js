/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./server/chunk-" + chunkId + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/chunks/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/middleware/ssr.js":
/*!**************************************!*\
  !*** ./src/server/middleware/ssr.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/App */ "./src/shared/components/App.jsx");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");
/* harmony import */ var _serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../serverRenderingHelpers */ "./src/server/serverRenderingHelpers.tsx");










var ssrMiddleware = function ssrMiddleware(req, res, next) {
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url', req.url); //this goes through all routes in application;

  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_7__["default"].find(function (route, i) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(req.url, route);
  }) || {};
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('activeRoute', activeRoute);
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var context = {
      data: data
    }; // As we are code splitting, we need to find out which chunks
    // the SSR uses so the client can use them. <Loadable.Capture>
    // takes a report prop which is called whenever a chunk is used.

    var modules = [];
    node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url in promise response', req.url); // Render the part of the app that gets hydrated on the client

    var appHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_4___default.a.Capture, {
      report: function report(moduleName) {
        return modules.push(moduleName);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
      location: req.url,
      context: context
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_App__WEBPACK_IMPORTED_MODULE_6__["default"], null))));

    var BodyContentAndScripts = function BodyContentAndScripts(_ref) {
      var client = _ref.client,
          modulesChunks = _ref.modulesChunks;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: client
        }
      }), Object(_serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_8__["getJsFiles"])(modulesChunks));
    };

    var serverHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyContentAndScripts, {
      client: appHtml,
      modulesChunks: modules
    }));
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), "</script>\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
  })["catch"](next);
};

/* harmony default export */ __webpack_exports__["default"] = (ssrMiddleware);

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/ssr */ "./src/server/middleware/ssr.js");




 //if the library does not support import (because is old) like the one below
//1. Try to find different up-to-date library 
//2. use require as the documetatio suggest as last resort

var utils = __webpack_require__(/*! utils */ "utils")._;

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var getMeArray = utils.arrayify('abc');
console.log('getMeArray', getMeArray); //set dist to be static folder for scripts

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("dist")); //set public folder for loading static files

app.use("/public", express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, "../public/"))); // Renders the app

app.use(_middleware_ssr__WEBPACK_IMPORTED_MODULE_4__["default"]);
var PORT = 3389; // Preload all the chunks then start the app

react_loadable__WEBPACK_IMPORTED_MODULE_1___default.a.preloadAll().then(function () {
  app.listen(PORT, function () {
    node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.info("magic happens on port:".concat(PORT));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, "src/server"))

/***/ }),

/***/ "./src/server/serverRenderingHelpers.tsx":
/*!***********************************************!*\
  !*** ./src/server/serverRenderingHelpers.tsx ***!
  \***********************************************/
/*! exports provided: getJsFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsFiles", function() { return getJsFiles; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_2__);


 // Gets all the chunked JS files as well as the base 'client' file. 'client'
// must be the last thing loaded as it depends on the prev files.

//this file needs to be .tsx not ts cause it return html element 
var getJsFiles = function getJsFiles() {
  var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var files = []; // console.log("chunk modules:::", modules);

  [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(modules), ["bundle"]).forEach(function (module) {
    files.push("".concat(module === "bundle" ? //client/bundle.js' has to match output: { ...,filename: "client/bundle.js",} for dev server development
    "/client/bundle" : "/client/chunk-".concat(module), ".js"));
  });
  return files.map(function (file, index) {
    node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.info("<script src=".concat(file, "></script>: loading..."));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      key: "script0".concat(index),
      src: file,
      type: "text/javascript",
      defer: true,
      charSet: "utf-8"
    });
  });
};

/***/ }),

/***/ "./src/shared/api.js":
/*!***************************!*\
  !*** ./src/shared/api.js ***!
  \***************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPopularRepos", function() { return fetchPopularRepos; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

function fetchPopularRepos() {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  var encodedURI = encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(language, "&sort=stars&order=desc&type=Repositories"));
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI).then(function (data) {
    return data.json();
  }).then(function (repos) {
    return repos.items;
  })["catch"](function (error) {
    console.warn(error);
    return null;
  });
}

/***/ }),

/***/ "./src/shared/components/App.jsx":
/*!***************************************!*\
  !*** ./src/shared/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./src/shared/routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navbar */ "./src/shared/components/Navbar.jsx");
/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NoMatch */ "./src/shared/components/NoMatch.jsx");







var _excluded = ["path", "exact", "component"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var App = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, App);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            Component = _ref.component,
            rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
          key: path,
          path: path,
          exact: !!exact,
          render: function render(props) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, rest));
          }
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        render: function render(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NoMatch__WEBPACK_IMPORTED_MODULE_11__["default"], props);
        }
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/shared/components/Grid.jsx":
/*!****************************************!*\
  !*** ./src/shared/components/Grid.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Grid = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Grid);

    _this = _super.call(this, props);
    var repos; //__isBrowser__ id defined in webpack.config as global

    if (false) {} else {
      repos = _this.props.staticContext.data;
    }

    _this.state = {
      repos: repos,
      loading: repos ? false : true
    };
    _this.fetchRepos = _this.fetchRepos.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.repos) {
        this.fetchRepos(this.props.match.params.id);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchRepos(this.props.match.params.id);
      }
    }
  }, {
    key: "fetchRepos",
    value: function fetchRepos(lang) {
      var _this2 = this;

      this.setState(function () {
        return {
          loading: true
        };
      });
      this.props.fetchInitialData(lang).then(function (repos) {
        return _this2.setState(function () {
          return {
            repos: repos,
            loading: false
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          repos = _this$state.repos;

      if (loading === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "LOADING");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexWrap: "wrap"
        }
      }, repos.map(function (_ref) {
        var name = _ref.name,
            owner = _ref.owner,
            stargazers_count = _ref.stargazers_count,
            html_url = _ref.html_url;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: name,
          style: {
            margin: 30
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: html_url
        }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, "@", owner.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, stargazers_count, " stars")));
      }));
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/shared/components/Home.tsx":
/*!****************************************!*\
  !*** ./src/shared/components/Home.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PasswordStrength_PasswordInputCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordStrength/PasswordInputCheck */ "./src/shared/components/PasswordStrength/PasswordInputCheck.tsx");



function Home() {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Password input stength webpack laod librayry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PasswordStrength_PasswordInputCheck__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, "Click me"));
}

/***/ }),

/***/ "./src/shared/components/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/shared/components/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function Navbar() {
  var languages = [{
    name: "All",
    param: "all"
  }, {
    name: "JavaScript",
    param: "javascript"
  }, {
    name: "Ruby",
    param: "ruby"
  }, {
    name: "Python",
    param: "python"
  }, {
    name: "Java",
    param: "java"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, languages.map(function (_ref) {
    var name = _ref.name,
        param = _ref.param;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: param
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      activeStyle: {
        fontWeight: "bold"
      },
      to: "/popular/".concat(param)
    }, name));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      fontWeight: "bold"
    },
    to: "/guest"
  }, "chunk loaded GuestCheckoutContainer")));
}

/***/ }),

/***/ "./src/shared/components/NoMatch.jsx":
/*!*******************************************!*\
  !*** ./src/shared/components/NoMatch.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoMatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NoMatch() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Four Oh Four");
}

/***/ }),

/***/ "./src/shared/components/PasswordStrength/PasswordInputCheck.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/components/PasswordStrength/PasswordInputCheck.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PasswordStrength_PasswordStrength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PasswordStrength/PasswordStrength */ "./src/shared/components/PasswordStrength/PasswordStrength.ts");




/* eslint-disable no-param-reassign */



var PasswordInput = function PasswordInput(_ref) {
  var _ref$email = _ref.email,
      email = _ref$email === void 0 ? '' : _ref$email;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      strength = _useState4[0],
      setStrength = _useState4[1];

  var handleChange = function handleChange(event) {
    var _ref2 = event.target,
        newValue = _ref2.value;
    setStrength(Object(_PasswordStrength_PasswordStrength__WEBPACK_IMPORTED_MODULE_4__["getPasswordStrength"])(newValue));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var setOptions = /*#__PURE__*/function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_PasswordStrength_PasswordStrength__WEBPACK_IMPORTED_MODULE_4__["setPasswordStrengthOptions"])([email]);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function setOptions() {
        return _ref3.apply(this, arguments);
      };
    }();

    setOptions();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "password",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Your password strength: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    "data-test": "password-input-strength"
  }, strength)));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordInput);

/***/ }),

/***/ "./src/shared/components/PasswordStrength/PasswordStrength.ts":
/*!********************************************************************!*\
  !*** ./src/shared/components/PasswordStrength/PasswordStrength.ts ***!
  \********************************************************************/
/*! exports provided: setPasswordStrengthOptions, getPasswordStrength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordStrengthOptions", function() { return setPasswordStrengthOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPasswordStrength", function() { return getPasswordStrength; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxcvbn-ts/core */ "@zxcvbn-ts/core");
/* harmony import */ var _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var setPasswordStrengthOptions = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(userInputs) {
    var zxcvbnCommonPackage, zxcvbnEnPackage;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @zxcvbn-ts/language-common */ "@zxcvbn-ts/language-common", 7));

          case 2:
            zxcvbnCommonPackage = _context.sent;
            _context.next = 5;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @zxcvbn-ts/language-en */ "@zxcvbn-ts/language-en", 7));

          case 5:
            zxcvbnEnPackage = _context.sent;
            _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_3__["zxcvbnOptions"].setOptions({
              dictionary: _objectSpread(_objectSpread(_objectSpread({}, zxcvbnCommonPackage["default"].dictionary), zxcvbnEnPackage["default"].dictionary), {}, {
                userInputs: userInputs || []
              }),
              graphs: zxcvbnCommonPackage["default"].adjacencyGraphs,
              translations: zxcvbnEnPackage["default"].translations
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setPasswordStrengthOptions(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getPasswordStrength = function getPasswordStrength(password) {
  if (!password) return '';

  var _zxcvbn = Object(_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_3__["zxcvbn"])(password),
      score = _zxcvbn.score; // zxcvbn gives us an integer score out of 4 (including 0 out of 4)


  switch (score) {
    case 0:
    case 1:
      return 'Weak';

    case 2:
    case 3:
      return 'Medium';

    case 4:
      return 'Strong';

    default:
      return '';
  }
};

/***/ }),

/***/ "./src/shared/containers/index.js":
/*!****************************************!*\
  !*** ./src/shared/containers/index.js ***!
  \****************************************/
/*! exports provided: GuestCheckoutContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestCheckoutContainer", function() { return GuestCheckoutContainer; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);



var GuestCheckoutContainer = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | guestCheckout */ "guestCheckout").then(__webpack_require__.bind(null, /*! ./GuestCheckoutContainer/GuestCheckoutContainer */ "./src/shared/containers/GuestCheckoutContainer/GuestCheckoutContainer.jsx"));
  },
  modules: ["./GuestCheckoutContainer/GuestCheckoutContainer"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./GuestCheckoutContainer/GuestCheckoutContainer */ "./src/shared/containers/GuestCheckoutContainer/GuestCheckoutContainer.jsx")];
  },
  loading: function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "loading component");
  }
}, "modules", ["guestCheckout"])); //modules: optional array of path to load data object from server static files as some.json to your component
//loading: component to display once import component loads

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ "./src/shared/components/Home.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Grid */ "./src/shared/components/Grid.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/shared/api.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/shared/containers/index.js");




var routes = [{
  path: "/",
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: "/guest",
  pageTitle: "Guest Checkout",
  pageDescription: "",
  pageDataTest: "guest-checkout-page",
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["GuestCheckoutContainer"],
  routes: [],
  analytics: {}
}, {
  path: "/popular/:id",
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return Object(_api__WEBPACK_IMPORTED_MODULE_2__["fetchPopularRepos"])(path.split("/").pop());
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/server/server.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/server.ts */"./src/server/server.ts");


/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@zxcvbn-ts/core":
/*!**********************************!*\
  !*** external "@zxcvbn-ts/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@zxcvbn-ts/core");

/***/ }),

/***/ "@zxcvbn-ts/language-common":
/*!*********************************************!*\
  !*** external "@zxcvbn-ts/language-common" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@zxcvbn-ts/language-common");

/***/ }),

/***/ "@zxcvbn-ts/language-en":
/*!*****************************************!*\
  !*** external "@zxcvbn-ts/language-en" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@zxcvbn-ts/language-en");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "node-color-log":
/*!*********************************!*\
  !*** external "node-color-log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-color-log");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "utils":
/*!************************!*\
  !*** external "utils" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("utils");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05vTWF0Y2guanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkSW5wdXRDaGVjay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRTdHJlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAenhjdmJuLXRzL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAenhjdmJuLXRzL2xhbmd1YWdlLWNvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbHNcIiJdLCJuYW1lcyI6WyJzc3JNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsImxvZ2dlciIsImNvbG9yIiwiYm9sZCIsImxvZyIsInVybCIsImFjdGl2ZVJvdXRlIiwicm91dGVzIiwiZmluZCIsInJvdXRlIiwiaSIsIm1hdGNoUGF0aCIsInByb21pc2UiLCJmZXRjaEluaXRpYWxEYXRhIiwicGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRhdGEiLCJjb250ZXh0IiwibW9kdWxlcyIsImFwcEh0bWwiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwibW9kdWxlTmFtZSIsInB1c2giLCJCb2R5Q29udGVudEFuZFNjcmlwdHMiLCJjbGllbnQiLCJtb2R1bGVzQ2h1bmtzIiwiX19odG1sIiwiZ2V0SnNGaWxlcyIsInNlcnZlckh0bWwiLCJzZW5kIiwic2VyaWFsaXplIiwidXRpbHMiLCJyZXF1aXJlIiwiXyIsImFwcCIsImV4cHJlc3MiLCJnZXRNZUFycmF5IiwiYXJyYXlpZnkiLCJjb25zb2xlIiwidXNlIiwiam9pbiIsIl9fZGlybmFtZSIsIlBPUlQiLCJMb2FkYWJsZSIsInByZWxvYWRBbGwiLCJsaXN0ZW4iLCJpbmZvIiwiZmlsZXMiLCJmb3JFYWNoIiwibW9kdWxlIiwibWFwIiwiZmlsZSIsImluZGV4IiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiZXJyb3IiLCJ3YXJuIiwiQXBwIiwiZXhhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwicHJvcHMiLCJHcmlkIiwiX19pc0Jyb3dzZXJfXyIsInN0YXRpY0NvbnRleHQiLCJzdGF0ZSIsImxvYWRpbmciLCJmZXRjaFJlcG9zIiwiYmluZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsYW5nIiwic2V0U3RhdGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJuYW1lIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJsb2dpbiIsIkhvbWUiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJOYXZiYXIiLCJsYW5ndWFnZXMiLCJwYXJhbSIsImZvbnRXZWlnaHQiLCJOb01hdGNoIiwiUGFzc3dvcmRJbnB1dCIsImVtYWlsIiwidmFsdWUiLCJzZXRWYWx1ZSIsInN0cmVuZ3RoIiwic2V0U3RyZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5ld1ZhbHVlIiwiZ2V0UGFzc3dvcmRTdHJlbmd0aCIsInVzZUVmZmVjdCIsInNldE9wdGlvbnMiLCJzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyIsInVzZXJJbnB1dHMiLCJ6eGN2Ym5Db21tb25QYWNrYWdlIiwienhjdmJuRW5QYWNrYWdlIiwienhjdmJuT3B0aW9ucyIsImRpY3Rpb25hcnkiLCJncmFwaHMiLCJhZGphY2VuY3lHcmFwaHMiLCJ0cmFuc2xhdGlvbnMiLCJwYXNzd29yZCIsInp4Y3ZibiIsInNjb3JlIiwiR3Vlc3RDaGVja291dENvbnRhaW5lciIsImxvYWRlciIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VEYXRhVGVzdCIsImFuYWx5dGljcyIsInNwbGl0IiwicG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vc2VydmVyL2NodW5rLVwiICsgY2h1bmtJZCArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvY2h1bmtzL1wiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ25vZGUtY29sb3ItbG9nJztcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vc2hhcmVkL3JvdXRlcyc7XG5pbXBvcnQgeyBnZXRKc0ZpbGVzIH0gZnJvbSAnLi4vc2VydmVyUmVuZGVyaW5nSGVscGVycyc7XG5cbmNvbnN0IHNzck1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbG9nZ2VyLmNvbG9yKCd5ZWxsb3cnKS5ib2xkKCkubG9nKCdyZXF1ZXN0ZWQgcmVxLnVybCcsIHJlcS51cmwpO1xuICAvL3RoaXMgZ29lcyB0aHJvdWdoIGFsbCByb3V0ZXMgaW4gYXBwbGljYXRpb247XG4gIGNvbnN0IGFjdGl2ZVJvdXRlID1cbiAgICByb3V0ZXMuZmluZCgocm91dGUsIGkpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xuXG4gIGxvZ2dlci5jb2xvcigneWVsbG93JykuYm9sZCgpLmxvZygnYWN0aXZlUm91dGUnLCBhY3RpdmVSb3V0ZSk7XG5cbiAgY29uc3QgcHJvbWlzZSA9IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGFcbiAgICA/IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGEocmVxLnBhdGgpXG4gICAgOiBQcm9taXNlLnJlc29sdmUoKTtcblxuICBwcm9taXNlXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7IGRhdGEgfTtcblxuICAgICAgLy8gQXMgd2UgYXJlIGNvZGUgc3BsaXR0aW5nLCB3ZSBuZWVkIHRvIGZpbmQgb3V0IHdoaWNoIGNodW5rc1xuICAgICAgLy8gdGhlIFNTUiB1c2VzIHNvIHRoZSBjbGllbnQgY2FuIHVzZSB0aGVtLiA8TG9hZGFibGUuQ2FwdHVyZT5cbiAgICAgIC8vIHRha2VzIGEgcmVwb3J0IHByb3Agd2hpY2ggaXMgY2FsbGVkIHdoZW5ldmVyIGEgY2h1bmsgaXMgdXNlZC5cbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBbXTtcblxuICAgICAgbG9nZ2VyXG4gICAgICAgIC5jb2xvcigneWVsbG93JylcbiAgICAgICAgLmJvbGQoKVxuICAgICAgICAubG9nKCdyZXF1ZXN0ZWQgcmVxLnVybCBpbiBwcm9taXNlIHJlc3BvbnNlJywgcmVxLnVybCk7XG5cbiAgICAgIC8vIFJlbmRlciB0aGUgcGFydCBvZiB0aGUgYXBwIHRoYXQgZ2V0cyBoeWRyYXRlZCBvbiB0aGUgY2xpZW50XG4gICAgICBjb25zdCBhcHBIdG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxMb2FkYWJsZS5DYXB0dXJlIHJlcG9ydD17KG1vZHVsZU5hbWUpID0+IG1vZHVsZXMucHVzaChtb2R1bGVOYW1lKX0+XG4gICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvTG9hZGFibGUuQ2FwdHVyZT5cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IEJvZHlDb250ZW50QW5kU2NyaXB0cyA9ICh7IGNsaWVudCwgbW9kdWxlc0NodW5rcyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPSdhcHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2xpZW50IH19IC8+XG4gICAgICAgICAgICB7Z2V0SnNGaWxlcyhtb2R1bGVzQ2h1bmtzKX1cbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzZXJ2ZXJIdG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxCb2R5Q29udGVudEFuZFNjcmlwdHMgY2xpZW50PXthcHBIdG1sfSBtb2R1bGVzQ2h1bmtzPXttb2R1bGVzfSAvPlxuICAgICAgKTtcblxuICAgICAgcmVzLnNlbmQoYFxuICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8IS0tIHRoaXMgaGFzIGJlZW4gZ2VuZXJhdGVkIGJ5IGNvbmZpZy9jbGllbnQvd2VicGFjay5kZXYuY29uZmlnIC0tPlxuICAgICAgICAgIDxzY3JpcHQ+d2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSAke3NlcmlhbGl6ZShkYXRhKX08L3NjcmlwdD5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICR7c2VydmVySHRtbH1cbiAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gXCIuL21pZGRsZXdhcmUvc3NyXCI7XG4vL2lmIHRoZSBsaWJyYXJ5IGRvZXMgbm90IHN1cHBvcnQgaW1wb3J0IChiZWNhdXNlIGlzIG9sZCkgbGlrZSB0aGUgb25lIGJlbG93XG4vLzEuIFRyeSB0byBmaW5kIGRpZmZlcmVudCB1cC10by1kYXRlIGxpYnJhcnkgXG4vLzIuIHVzZSByZXF1aXJlIGFzIHRoZSBkb2N1bWV0YXRpbyBzdWdnZXN0IGFzIGxhc3QgcmVzb3J0XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJ3V0aWxzJykuXztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBnZXRNZUFycmF5ID0gdXRpbHMuYXJyYXlpZnkoJ2FiYycpXG5jb25zb2xlLmxvZygnZ2V0TWVBcnJheScsIGdldE1lQXJyYXkpXG5cbi8vc2V0IGRpc3QgdG8gYmUgc3RhdGljIGZvbGRlciBmb3Igc2NyaXB0c1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcImRpc3RcIikpO1xuLy9zZXQgcHVibGljIGZvbGRlciBmb3IgbG9hZGluZyBzdGF0aWMgZmlsZXNcbmFwcC51c2UoXCIvcHVibGljXCIsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vcHVibGljL1wiKSkpO1xuXG4vLyBSZW5kZXJzIHRoZSBhcHBcbmFwcC51c2Uoc3NyTWlkZGxld2FyZSk7XG5cbmNvbnN0IFBPUlQgPSAzMzg5O1xuLy8gUHJlbG9hZCBhbGwgdGhlIGNodW5rcyB0aGVuIHN0YXJ0IHRoZSBhcHBcbkxvYWRhYmxlLnByZWxvYWRBbGwoKS50aGVuKCgpID0+IHtcbiAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYG1hZ2ljIGhhcHBlbnMgb24gcG9ydDoke1BPUlR9YCk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuXG4vLyBHZXRzIGFsbCB0aGUgY2h1bmtlZCBKUyBmaWxlcyBhcyB3ZWxsIGFzIHRoZSBiYXNlICdjbGllbnQnIGZpbGUuICdjbGllbnQnXG4vLyBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIGxvYWRlZCBhcyBpdCBkZXBlbmRzIG9uIHRoZSBwcmV2IGZpbGVzLlxuXG50eXBlIFNjcmlwdFRhZ0tleXMgPSBQYXJ0aWFsPEhUTUxTY3JpcHRFbGVtZW50PjtcblxuLy90aGlzIGZpbGUgbmVlZHMgdG8gYmUgLnRzeCBub3QgdHMgY2F1c2UgaXQgcmV0dXJuIGh0bWwgZWxlbWVudCBcblxuXG5leHBvcnQgY29uc3QgZ2V0SnNGaWxlcyA9IChtb2R1bGVzID0gW10pOiBTY3JpcHRUYWdLZXlzW10gPT4ge1xuICBsZXQgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gY29uc29sZS5sb2coXCJjaHVuayBtb2R1bGVzOjo6XCIsIG1vZHVsZXMpO1xuICBbLi4ubW9kdWxlcywgXCJidW5kbGVcIl0uZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgZmlsZXMucHVzaChcbiAgICAgIGAke21vZHVsZSA9PT0gXCJidW5kbGVcIlxuICAgICAgICA/IC8vY2xpZW50L2J1bmRsZS5qcycgaGFzIHRvIG1hdGNoIG91dHB1dDogeyAuLi4sZmlsZW5hbWU6IFwiY2xpZW50L2J1bmRsZS5qc1wiLH0gZm9yIGRldiBzZXJ2ZXIgZGV2ZWxvcG1lbnRcbiAgICAgICAgXCIvY2xpZW50L2J1bmRsZVwiXG4gICAgICAgIDogYC9jbGllbnQvY2h1bmstJHttb2R1bGV9YFxuICAgICAgfS5qc2BcbiAgICApO1xuICB9KTtcblxuXG5cblxuICByZXR1cm4gZmlsZXMubWFwKChmaWxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBTY3JpcHRUYWdLZXlzID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgPHNjcmlwdCBzcmM9JHtmaWxlfT48L3NjcmlwdD46IGxvYWRpbmcuLi5gKTtcblxuICAgIHJldHVybiA8c2NyaXB0IGtleT17YHNjcmlwdDAke2luZGV4fWB9IHNyYz17ZmlsZX0gdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBkZWZlciBjaGFyU2V0PSd1dGYtOCc+PC9zY3JpcHQ+XG4gIH0pXG59XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhclJlcG9zIChsYW5ndWFnZSA9ICdhbGwnKSB7XG4gIGNvbnN0IGVuY29kZWRVUkkgPSBlbmNvZGVVUkkoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXN0YXJzOj4xK2xhbmd1YWdlOiR7bGFuZ3VhZ2V9JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZ0eXBlPVJlcG9zaXRvcmllc2ApXG5cbiAgcmV0dXJuIGZldGNoKGVuY29kZWRVUkkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgIC50aGVuKChyZXBvcykgPT4gcmVwb3MuaXRlbXMpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgTm9NYXRjaCBmcm9tIFwiLi9Ob01hdGNoXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtyb3V0ZXMubWFwKCh7IHBhdGgsIGV4YWN0LCBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBleGFjdD17ISFleGFjdH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ucmVzdH0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxSb3V0ZSByZW5kZXI9eyhwcm9wcykgPT4gPE5vTWF0Y2ggey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IHJlcG9zO1xuICAgIC8vX19pc0Jyb3dzZXJfXyBpZCBkZWZpbmVkIGluIHdlYnBhY2suY29uZmlnIGFzIGdsb2JhbFxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgICByZXBvcyA9IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBvcyA9IHRoaXMucHJvcHMuc3RhdGljQ29udGV4dC5kYXRhO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXBvcyxcbiAgICAgIGxvYWRpbmc6IHJlcG9zID8gZmFsc2UgOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLmZldGNoUmVwb3MgPSB0aGlzLmZldGNoUmVwb3MuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucmVwb3MpIHtcbiAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2UHJvcHMubWF0Y2gucGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgZmV0Y2hSZXBvcyhsYW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICB0aGlzLnByb3BzLmZldGNoSW5pdGlhbERhdGEobGFuZykudGhlbigocmVwb3MpID0+XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHJlcG9zLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcmVwb3MgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIDxwPkxPQURJTkc8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAge3JlcG9zLm1hcCgoeyBuYW1lLCBvd25lciwgc3RhcmdhemVyc19jb3VudCwgaHRtbF91cmwgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9IHN0eWxlPXt7IG1hcmdpbjogMzAgfX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+QHtvd25lci5sb2dpbn08L2xpPlxuICAgICAgICAgICAgICA8bGk+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSAnLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkSW5wdXRDaGVjaydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIERlY2xhcmUgYSBuZXcgc3RhdGUgdmFyaWFibGUsIHdoaWNoIHdlJ2xsIGNhbGwgXCJjb3VudFwiXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlBhc3N3b3JkIGlucHV0IHN0ZW5ndGggd2VicGFjayBsYW9kIGxpYnJheXJ5PC9oMz5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgICBwYXJhbTogXCJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgcGFyYW06IFwiamF2YXNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSdWJ5XCIsXG4gICAgICBwYXJhbTogXCJydWJ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUHl0aG9uXCIsXG4gICAgICBwYXJhbTogXCJweXRob25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVwiLFxuICAgICAgcGFyYW06IFwiamF2YVwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7bGFuZ3VhZ2VzLm1hcCgoeyBuYW1lLCBwYXJhbSB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3BhcmFtfT5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgIHRvPXtgL3BvcHVsYXIvJHtwYXJhbX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgICAgPGxpPlxuICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSB0bz17YC9ndWVzdGB9PlxuICAgICAgICAgIHtcImNodW5rIGxvYWRlZCBHdWVzdENoZWNrb3V0Q29udGFpbmVyXCJ9XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9NYXRjaCAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEZvdXIgT2ggRm91clxuICAgIDwvZGl2PlxuICApXG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMsIGdldFBhc3N3b3JkU3RyZW5ndGggfSBmcm9tICcuLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkU3RyZW5ndGgnXG5cblxuXG5pbnRlcmZhY2UgUGFzc3dvcmRJbnB1dFByb3BzIHtcbiAgICBlbWFpbD86IHN0cmluZ1xufVxuXG5jb25zdCBQYXNzd29yZElucHV0ID0gKHtcbiAgICBlbWFpbCA9ICcnLFxufTogUGFzc3dvcmRJbnB1dFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc3RyZW5ndGgsIHNldFN0cmVuZ3RoXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlOiBuZXdWYWx1ZSB9ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcblxuICAgICAgICBzZXRTdHJlbmd0aChnZXRQYXNzd29yZFN0cmVuZ3RoKG5ld1ZhbHVlKSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZXRPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMoW2VtYWlsXSlcbiAgICAgICAgfVxuICAgICAgICBzZXRPcHRpb25zKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFlvdXIgcGFzc3dvcmQgc3RyZW5ndGg6IDxzdHJvbmcgZGF0YS10ZXN0PSdwYXNzd29yZC1pbnB1dC1zdHJlbmd0aCc+e3N0cmVuZ3RofTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkSW5wdXQiLCJpbXBvcnQgeyB6eGN2Ym4sIHp4Y3Zibk9wdGlvbnMgfSBmcm9tICdAenhjdmJuLXRzL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyA9IGFzeW5jICh1c2VySW5wdXRzPzogKHN0cmluZyB8IG51bWJlcilbXSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHp4Y3ZibkNvbW1vblBhY2thZ2UgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6eGN2Ym5Db21tb25QYWNrYWdlXCIgKi8gJ0B6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uJylcbiAgICBjb25zdCB6eGN2Ym5FblBhY2thZ2UgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6eGN2Ym5FblBhY2thZ2VcIiAqLyAnQHp4Y3Zibi10cy9sYW5ndWFnZS1lbicpXG5cbiAgICB6eGN2Ym5PcHRpb25zLnNldE9wdGlvbnMoe1xuICAgICAgICBkaWN0aW9uYXJ5OiB7XG4gICAgICAgICAgICAuLi56eGN2Ym5Db21tb25QYWNrYWdlLmRlZmF1bHQuZGljdGlvbmFyeSxcbiAgICAgICAgICAgIC4uLnp4Y3ZibkVuUGFja2FnZS5kZWZhdWx0LmRpY3Rpb25hcnksXG4gICAgICAgICAgICB1c2VySW5wdXRzOiB1c2VySW5wdXRzIHx8IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGdyYXBoczogenhjdmJuQ29tbW9uUGFja2FnZS5kZWZhdWx0LmFkamFjZW5jeUdyYXBocyxcbiAgICAgICAgdHJhbnNsYXRpb25zOiB6eGN2Ym5FblBhY2thZ2UuZGVmYXVsdC50cmFuc2xhdGlvbnNcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFzc3dvcmRTdHJlbmd0aCA9IChwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKSByZXR1cm4gJydcblxuICAgIGNvbnN0IHsgc2NvcmUgfSA9IHp4Y3ZibihwYXNzd29yZClcblxuICAgIC8vIHp4Y3ZibiBnaXZlcyB1cyBhbiBpbnRlZ2VyIHNjb3JlIG91dCBvZiA0IChpbmNsdWRpbmcgMCBvdXQgb2YgNClcbiAgICBzd2l0Y2ggKHNjb3JlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuICdXZWFrJ1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAnTWVkaXVtJ1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1N0cm9uZydcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcblxuZXhwb3J0IGNvbnN0IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT5cbiAgICBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImd1ZXN0Q2hlY2tvdXRcIiwgd2VicGFja1ByZWxvYWQ6IDEgKi8gXCIuL0d1ZXN0Q2hlY2tvdXRDb250YWluZXIvR3Vlc3RDaGVja291dENvbnRhaW5lclwiXG4gICAgKSxcbiAgbG9hZGluZzogKCkgPT4gPGRpdj57XCJsb2FkaW5nIGNvbXBvbmVudFwifTwvZGl2PixcblxuICBtb2R1bGVzOiBbXCJndWVzdENoZWNrb3V0XCJdLFxufSk7XG4vL21vZHVsZXM6IG9wdGlvbmFsIGFycmF5IG9mIHBhdGggdG8gbG9hZCBkYXRhIG9iamVjdCBmcm9tIHNlcnZlciBzdGF0aWMgZmlsZXMgYXMgc29tZS5qc29uIHRvIHlvdXIgY29tcG9uZW50XG4vL2xvYWRpbmc6IGNvbXBvbmVudCB0byBkaXNwbGF5IG9uY2UgaW1wb3J0IGNvbXBvbmVudCBsb2Fkc1xuIiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyBHdWVzdENoZWNrb3V0Q29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyc1wiO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBgL2d1ZXN0YCxcbiAgICBwYWdlVGl0bGU6IFwiR3Vlc3QgQ2hlY2tvdXRcIixcbiAgICBwYWdlRGVzY3JpcHRpb246IFwiXCIsXG4gICAgcGFnZURhdGFUZXN0OiBcImd1ZXN0LWNoZWNrb3V0LXBhZ2VcIixcbiAgICBjb21wb25lbnQ6IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIsXG4gICAgcm91dGVzOiBbXSxcbiAgICBhbmFseXRpY3M6IHt9LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcG9wdWxhci86aWRcIixcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSBcIlwiKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KFwiL1wiKS5wb3AoKSksXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAenhjdmJuLXRzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1jb2xvci1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==