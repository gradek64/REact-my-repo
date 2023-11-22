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
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color("yellow").bold().log("requested req.url", req.url);
  //this goes through all routes in application;
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_7__["default"].find(function (route, i) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(req.url, route);
  }) || {};
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color("yellow").bold().log("activeRoute", activeRoute);
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var context = {
      data: data
    };

    // As we are code splitting, we need to find out which chunks
    // the SSR uses so the client can use them. <Loadable.Capture>
    // takes a report prop which is called whenever a chunk is used.
    var modules = [];
    node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color("yellow").bold().log("requested req.url in promise response", req.url);

    // Render the part of the app that gets hydrated on the client
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
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), "</script>\n          <link rel=\"stylesheet\" type=\"text/css\" href=\"./style.css\" />\n\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/ssr */ "./src/server/middleware/ssr.js");




var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('../static'));

// Renders the app
app.use(_middleware_ssr__WEBPACK_IMPORTED_MODULE_3__["default"]);
var PORT = 3389;
// Preload all the chunks then start the app
react_loadable__WEBPACK_IMPORTED_MODULE_1___default.a.preloadAll().then(function () {
  app.listen(PORT, function () {
    node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.info("node server running on:".concat(PORT));
  });
});

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
  var files = [];

  // console.log("chunk modules:::", modules);
  [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(modules), ["bundle"]).forEach(function (module) {
    files.push("".concat(module === "bundle" ?
    //client/bundle.js' has to match output: { ...,filename: "client/bundle.js",} for dev server development
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
    var repos;
    //__isBrowser__ id defined in webpack.config as global
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

/***/ "./src/shared/components/ParamsQuery.tsx":
/*!***********************************************!*\
  !*** ./src/shared/components/ParamsQuery.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helperMethods */ "./src/shared/helperMethods.ts");


// useHistory allows to set query params by history.push {search:string}
// useLocation allows to get query params get search object and do something with them


function Home() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  function setQueryParams(queryString) {
    history.push({
      search: queryString
    });
  }
  ;

  // get the search (query string) from the location
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])(),
    search = _useLocation.search;

  // 1 if search object exists then convert search string to object
  var queryParamsObj = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["queryStringToObject"])(search);
  }, [search]);

  // 2.1 update local state from url params if params exists 
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["readQueryProperty"])('language', queryParamsObj) || ""),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    language = _useState2[0],
    setLanguage = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["readQueryProperty"])('age', queryParamsObj) || ""),
    _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    age = _useState4[0],
    setAge = _useState4[1];

  // 2.2 update local state based on user radio button click 
  var onValueChange = function onValueChange(event) {
    var _event$target = event.target,
      value = _event$target.value,
      name = _event$target.name;

    //update url query param
    if (name === 'fav_language') {
      //update state
      setLanguage(value);
      var updateQueryObject = Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["updateQueryProperty"])('language', value, queryParamsObj);
      //update url with new string query pushed to history 
      setQueryParams(Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["createQueryString"])(updateQueryObject));
    }
    if (name === 'fav_age') {
      //update state
      setAge(value);
      var _updateQueryObject = Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["updateQueryProperty"])('age', value, queryParamsObj);
      //update url with new string query pushed to history 
      setQueryParams(Object(_shared_helperMethods__WEBPACK_IMPORTED_MODULE_3__["createQueryString"])(_updateQueryObject));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    checked: language === "HTML",
    onChange: function onChange(e) {
      return onValueChange(e);
    },
    type: "radio",
    id: "html",
    name: "fav_language",
    value: "HTML"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "html"
  }, "HTML")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    checked: language === "CSS",
    onChange: function onChange(e) {
      return onValueChange(e);
    },
    type: "radio",
    id: "css",
    name: "fav_language",
    value: "CSS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "css"
  }, "CSS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    checked: language === "JavaScript",
    onChange: function onChange(e) {
      return onValueChange(e);
    },
    type: "radio",
    id: "javascript",
    name: "fav_language",
    value: "JavaScript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "javaScript"
  }, "JavaScript")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "tell us your age bracket if you don`t mind"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    checked: age === "below18",
    onChange: function onChange(e) {
      return onValueChange(e);
    },
    type: "radio",
    name: "fav_age",
    value: "below18"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "html"
  }, "below 18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    checked: age === "above18",
    onChange: function onChange(e) {
      return onValueChange(e);
    },
    type: "radio",
    name: "fav_age",
    value: "above18"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "css"
  }, "above 18")));
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
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_PasswordStrength_PasswordStrength__WEBPACK_IMPORTED_MODULE_4__["setPasswordStrengthOptions"])([email]);
            case 2:
            case "end":
              return _context.stop();
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



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var setPasswordStrengthOptions = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(userInputs) {
    var zxcvbnCommonPackage, zxcvbnEnPackage;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
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
    }, _callee);
  }));
  return function setPasswordStrengthOptions(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getPasswordStrength = function getPasswordStrength(password) {
  if (!password) return '';
  var _zxcvbn = Object(_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_3__["zxcvbn"])(password),
    score = _zxcvbn.score;

  // zxcvbn gives us an integer score out of 4 (including 0 out of 4)
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
}, "modules", ["guestCheckout"]));
//modules: optional array of path to load data object from server static files as some.json to your component
//loading: component to display once import component loads

/***/ }),

/***/ "./src/shared/helperMethods.ts":
/*!*************************************!*\
  !*** ./src/shared/helperMethods.ts ***!
  \*************************************/
/*! exports provided: readQueryProperty, updateQueryProperty, createQueryString, queryStringToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readQueryProperty", function() { return readQueryProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQueryProperty", function() { return updateQueryProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryString", function() { return createQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStringToObject", function() { return queryStringToObject; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// creates a query string from query object

function readQueryProperty(property, queryObject) {
  return queryObject[property];
}
;
function updateQueryProperty(property, value, queryObject) {
  var update = {};
  if (property && value) update = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, property, value);
  return _objectSpread(_objectSpread({}, queryObject), update);
}
;
function createQueryString(queryObject) {
  var str = [];
  for (var prop in queryObject) if (queryObject.hasOwnProperty(prop)) {
    str.push("".concat(encodeURIComponent(prop), "=").concat(encodeURIComponent(queryObject[prop])));
  }
  return str.join("&");
}
;

// turns query string back into an object
function queryStringToObject(queryString) {
  var queryObject = {};
  var URLSearchParamsObj = new URLSearchParams(queryString);
  var _iterator = _createForOfIteratorHelper(URLSearchParamsObj),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      queryObject[key] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return queryObject;
}
;

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
/* harmony import */ var _components_ParamsQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ParamsQuery */ "./src/shared/components/ParamsQuery.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/shared/api.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/shared/containers/index.js");





var routes = [{
  path: '/',
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/query',
  exact: true,
  component: _components_ParamsQuery__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: "/guest",
  pageTitle: 'Guest Checkout',
  pageDescription: '',
  pageDataTest: 'guest-checkout-page',
  component: _containers__WEBPACK_IMPORTED_MODULE_4__["GuestCheckoutContainer"],
  routes: [],
  analytics: {}
}, {
  path: '/popular/:id',
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_api__WEBPACK_IMPORTED_MODULE_3__["fetchPopularRepos"])(path.split('/').pop());
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05vTWF0Y2guanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXJhbXNRdWVyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRJbnB1dENoZWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZFN0cmVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlbHBlck1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAenhjdmJuLXRzL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAenhjdmJuLXRzL2xhbmd1YWdlLWNvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiJdLCJuYW1lcyI6WyJzc3JNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsImxvZ2dlciIsImNvbG9yIiwiYm9sZCIsImxvZyIsInVybCIsImFjdGl2ZVJvdXRlIiwicm91dGVzIiwiZmluZCIsInJvdXRlIiwiaSIsIm1hdGNoUGF0aCIsInByb21pc2UiLCJmZXRjaEluaXRpYWxEYXRhIiwicGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRhdGEiLCJjb250ZXh0IiwibW9kdWxlcyIsImFwcEh0bWwiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTG9hZGFibGUiLCJDYXB0dXJlIiwicmVwb3J0IiwibW9kdWxlTmFtZSIsInB1c2giLCJTdGF0aWNSb3V0ZXIiLCJsb2NhdGlvbiIsIkFwcCIsIkJvZHlDb250ZW50QW5kU2NyaXB0cyIsIl9yZWYiLCJjbGllbnQiLCJtb2R1bGVzQ2h1bmtzIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldEpzRmlsZXMiLCJzZXJ2ZXJIdG1sIiwic2VuZCIsImNvbmNhdCIsInNlcmlhbGl6ZSIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJQT1JUIiwicHJlbG9hZEFsbCIsImxpc3RlbiIsImluZm8iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWxlcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImZvckVhY2giLCJtb2R1bGUiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJrZXkiLCJzcmMiLCJ0eXBlIiwiZGVmZXIiLCJjaGFyU2V0IiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwicmVuZGVyIiwiTmF2YmFyIiwiU3dpdGNoIiwiZXhhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiUm91dGUiLCJwcm9wcyIsIl9leHRlbmRzIiwiTm9NYXRjaCIsIkdyaWQiLCJfdGhpcyIsImNhbGwiLCJfX2lzQnJvd3Nlcl9fIiwic3RhdGljQ29udGV4dCIsInN0YXRlIiwibG9hZGluZyIsImZldGNoUmVwb3MiLCJiaW5kIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImNvbXBvbmVudERpZE1vdW50IiwibWF0Y2giLCJwYXJhbXMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsYW5nIiwiX3RoaXMyIiwic2V0U3RhdGUiLCJfdGhpcyRzdGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibmFtZSIsIm93bmVyIiwic3RhcmdhemVyc19jb3VudCIsImh0bWxfdXJsIiwibWFyZ2luIiwiaHJlZiIsImxvZ2luIiwiSG9tZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnQiLCJzZXRDb3VudCIsIlBhc3N3b3JkSW5wdXQiLCJvbkNsaWNrIiwibGFuZ3VhZ2VzIiwicGFyYW0iLCJOYXZMaW5rIiwiYWN0aXZlU3R5bGUiLCJmb250V2VpZ2h0IiwidG8iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInNldFF1ZXJ5UGFyYW1zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJfdXNlTG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsInF1ZXJ5UGFyYW1zT2JqIiwidXNlTWVtbyIsInF1ZXJ5U3RyaW5nVG9PYmplY3QiLCJyZWFkUXVlcnlQcm9wZXJ0eSIsInNldExhbmd1YWdlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZ2UiLCJzZXRBZ2UiLCJvblZhbHVlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwidXBkYXRlUXVlcnlPYmplY3QiLCJ1cGRhdGVRdWVyeVByb3BlcnR5IiwiY3JlYXRlUXVlcnlTdHJpbmciLCJmbGV4RGlyZWN0aW9uIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZSIsImh0bWxGb3IiLCJfcmVmJGVtYWlsIiwiZW1haWwiLCJzZXRWYWx1ZSIsInN0cmVuZ3RoIiwic2V0U3RyZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJfcmVmMiIsIm5ld1ZhbHVlIiwiZ2V0UGFzc3dvcmRTdHJlbmd0aCIsInVzZUVmZmVjdCIsInNldE9wdGlvbnMiLCJfcmVmMyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2Iiwic2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMiLCJzdG9wIiwiRnJhZ21lbnQiLCJ1c2VySW5wdXRzIiwienhjdmJuQ29tbW9uUGFja2FnZSIsInp4Y3ZibkVuUGFja2FnZSIsInNlbnQiLCJ6eGN2Ym5PcHRpb25zIiwiZGljdGlvbmFyeSIsIl9vYmplY3RTcHJlYWQiLCJncmFwaHMiLCJhZGphY2VuY3lHcmFwaHMiLCJ0cmFuc2xhdGlvbnMiLCJfeCIsInBhc3N3b3JkIiwiX3p4Y3ZibiIsInp4Y3ZibiIsInNjb3JlIiwiR3Vlc3RDaGVja291dENvbnRhaW5lciIsIl9kZWZpbmVQcm9wZXJ0eSIsImxvYWRlciIsIndlYnBhY2siLCJyZXF1aXJlIiwicHJvcGVydHkiLCJxdWVyeU9iamVjdCIsInVwZGF0ZSIsInN0ciIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJVUkxTZWFyY2hQYXJhbXNPYmoiLCJVUkxTZWFyY2hQYXJhbXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJlcnIiLCJmIiwiUGFyYW1zUXVlcnkiLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRGF0YVRlc3QiLCJhbmFseXRpY3MiLCJzcGxpdCIsInBvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9zZXJ2ZXIvY2h1bmstXCIgKyBjaHVua0lkICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9jaHVua3MvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi8uLi9zaGFyZWQvcm91dGVzXCI7XG5pbXBvcnQgeyBnZXRKc0ZpbGVzIH0gZnJvbSBcIi4uL3NlcnZlclJlbmRlcmluZ0hlbHBlcnNcIjtcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoXCJ5ZWxsb3dcIikuYm9sZCgpLmxvZyhcInJlcXVlc3RlZCByZXEudXJsXCIsIHJlcS51cmwpO1xuICAvL3RoaXMgZ29lcyB0aHJvdWdoIGFsbCByb3V0ZXMgaW4gYXBwbGljYXRpb247XG4gIGNvbnN0IGFjdGl2ZVJvdXRlID1cbiAgICByb3V0ZXMuZmluZCgocm91dGUsIGkpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xuXG4gIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwiYWN0aXZlUm91dGVcIiwgYWN0aXZlUm91dGUpO1xuXG4gIGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5mZXRjaEluaXRpYWxEYXRhXG4gICAgPyBhY3RpdmVSb3V0ZS5mZXRjaEluaXRpYWxEYXRhKHJlcS5wYXRoKVxuICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgcHJvbWlzZVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0geyBkYXRhIH07XG5cbiAgICAgIC8vIEFzIHdlIGFyZSBjb2RlIHNwbGl0dGluZywgd2UgbmVlZCB0byBmaW5kIG91dCB3aGljaCBjaHVua3NcbiAgICAgIC8vIHRoZSBTU1IgdXNlcyBzbyB0aGUgY2xpZW50IGNhbiB1c2UgdGhlbS4gPExvYWRhYmxlLkNhcHR1cmU+XG4gICAgICAvLyB0YWtlcyBhIHJlcG9ydCBwcm9wIHdoaWNoIGlzIGNhbGxlZCB3aGVuZXZlciBhIGNodW5rIGlzIHVzZWQuXG4gICAgICBjb25zdCBtb2R1bGVzID0gW107XG5cbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoXCJ5ZWxsb3dcIilcbiAgICAgICAgLmJvbGQoKVxuICAgICAgICAubG9nKFwicmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZVwiLCByZXEudXJsKTtcblxuICAgICAgLy8gUmVuZGVyIHRoZSBwYXJ0IG9mIHRoZSBhcHAgdGhhdCBnZXRzIGh5ZHJhdGVkIG9uIHRoZSBjbGllbnRcbiAgICAgIGNvbnN0IGFwcEh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPExvYWRhYmxlLkNhcHR1cmUgcmVwb3J0PXsobW9kdWxlTmFtZSkgPT4gbW9kdWxlcy5wdXNoKG1vZHVsZU5hbWUpfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgPC9Mb2FkYWJsZS5DYXB0dXJlPlxuICAgICAgKTtcblxuICAgICAgY29uc3QgQm9keUNvbnRlbnRBbmRTY3JpcHRzID0gKHsgY2xpZW50LCBtb2R1bGVzQ2h1bmtzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNsaWVudCB9fSAvPlxuICAgICAgICAgICAge2dldEpzRmlsZXMobW9kdWxlc0NodW5rcyl9XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2VydmVySHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8Qm9keUNvbnRlbnRBbmRTY3JpcHRzIGNsaWVudD17YXBwSHRtbH0gbW9kdWxlc0NodW5rcz17bW9kdWxlc30gLz5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XG4gICAgICAgICAgPCEtLSB0aGlzIGhhcyBiZWVuIGdlbmVyYXRlZCBieSBjb25maWcvY2xpZW50L3dlYnBhY2suZGV2LmNvbmZpZyAtLT5cbiAgICAgICAgICA8c2NyaXB0PndpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoZGF0YSl9PC9zY3JpcHQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIuL3N0eWxlLmNzc1wiIC8+XG5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICR7c2VydmVySHRtbH1cbiAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuaW1wb3J0IHNzck1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkZGxld2FyZS9zc3JcIjtcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4uL3N0YXRpYycpKVxuXG4vLyBSZW5kZXJzIHRoZSBhcHBcbmFwcC51c2Uoc3NyTWlkZGxld2FyZSk7XG5cbmNvbnN0IFBPUlQgPSAzMzg5O1xuLy8gUHJlbG9hZCBhbGwgdGhlIGNodW5rcyB0aGVuIHN0YXJ0IHRoZSBhcHBcbkxvYWRhYmxlLnByZWxvYWRBbGwoKS50aGVuKCgpID0+IHtcbiAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYG5vZGUgc2VydmVyIHJ1bm5pbmcgb246JHtQT1JUfWApO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcblxuLy8gR2V0cyBhbGwgdGhlIGNodW5rZWQgSlMgZmlsZXMgYXMgd2VsbCBhcyB0aGUgYmFzZSAnY2xpZW50JyBmaWxlLiAnY2xpZW50J1xuLy8gbXVzdCBiZSB0aGUgbGFzdCB0aGluZyBsb2FkZWQgYXMgaXQgZGVwZW5kcyBvbiB0aGUgcHJldiBmaWxlcy5cblxudHlwZSBTY3JpcHRUYWdLZXlzID0gUGFydGlhbDxIVE1MU2NyaXB0RWxlbWVudD47XG5cbi8vdGhpcyBmaWxlIG5lZWRzIHRvIGJlIC50c3ggbm90IHRzIGNhdXNlIGl0IHJldHVybiBodG1sIGVsZW1lbnQgXG5cblxuZXhwb3J0IGNvbnN0IGdldEpzRmlsZXMgPSAobW9kdWxlcyA9IFtdKTogU2NyaXB0VGFnS2V5c1tdID0+IHtcbiAgbGV0IGZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiY2h1bmsgbW9kdWxlczo6OlwiLCBtb2R1bGVzKTtcbiAgWy4uLm1vZHVsZXMsIFwiYnVuZGxlXCJdLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIGZpbGVzLnB1c2goXG4gICAgICBgJHttb2R1bGUgPT09IFwiYnVuZGxlXCJcbiAgICAgICAgPyAvL2NsaWVudC9idW5kbGUuanMnIGhhcyB0byBtYXRjaCBvdXRwdXQ6IHsgLi4uLGZpbGVuYW1lOiBcImNsaWVudC9idW5kbGUuanNcIix9IGZvciBkZXYgc2VydmVyIGRldmVsb3BtZW50XG4gICAgICAgIFwiL2NsaWVudC9idW5kbGVcIlxuICAgICAgICA6IGAvY2xpZW50L2NodW5rLSR7bW9kdWxlfWBcbiAgICAgIH0uanNgXG4gICAgKTtcbiAgfSk7XG5cblxuXG5cbiAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogU2NyaXB0VGFnS2V5cyA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYDxzY3JpcHQgc3JjPSR7ZmlsZX0+PC9zY3JpcHQ+OiBsb2FkaW5nLi4uYCk7XG5cbiAgICByZXR1cm4gPHNjcmlwdCBrZXk9e2BzY3JpcHQwJHtpbmRleH1gfSBzcmM9e2ZpbGV9IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgZGVmZXIgY2hhclNldD0ndXRmLTgnPjwvc2NyaXB0PlxuICB9KVxufVxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyAobGFuZ3VhZ2UgPSAnYWxsJykge1xuICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgKVxuXG4gIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigocmVwb3MpID0+IHJlcG9zLml0ZW1zKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvcilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vTm9NYXRjaFwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgZXhhY3Q9eyEhZXhhY3R9XG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLnJlc3R9IC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8Um91dGUgcmVuZGVyPXsocHJvcHMpID0+IDxOb01hdGNoIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCByZXBvcztcbiAgICAvL19faXNCcm93c2VyX18gaWQgZGVmaW5lZCBpbiB3ZWJwYWNrLmNvbmZpZyBhcyBnbG9iYWxcbiAgICBpZiAoX19pc0Jyb3dzZXJfXykge1xuICAgICAgcmVwb3MgPSB3aW5kb3cuX19JTklUSUFMX0RBVEFfXztcbiAgICAgIGRlbGV0ZSB3aW5kb3cuX19JTklUSUFMX0RBVEFfXztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwb3MgPSB0aGlzLnByb3BzLnN0YXRpY0NvbnRleHQuZGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVwb3MsXG4gICAgICBsb2FkaW5nOiByZXBvcyA/IGZhbHNlIDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5mZXRjaFJlcG9zID0gdGhpcy5mZXRjaFJlcG9zLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnJlcG9zKSB7XG4gICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlByb3BzLm1hdGNoLnBhcmFtcy5pZCAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG4gIGZldGNoUmVwb3MobGFuZykge1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfSkpO1xuXG4gICAgdGhpcy5wcm9wcy5mZXRjaEluaXRpYWxEYXRhKGxhbmcpLnRoZW4oKHJlcG9zKSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICByZXBvcyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIHJlcG9zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiA8cD5MT0FESU5HPC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgIHtyZXBvcy5tYXAoKHsgbmFtZSwgb3duZXIsIHN0YXJnYXplcnNfY291bnQsIGh0bWxfdXJsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtuYW1lfSBzdHlsZT17eyBtYXJnaW46IDMwIH19PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aHRtbF91cmx9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPkB7b3duZXIubG9naW59PC9saT5cbiAgICAgICAgICAgICAgPGxpPntzdGFyZ2F6ZXJzX2NvdW50fSBzdGFyczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2snXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZWNsYXJlIGEgbmV3IHN0YXRlIHZhcmlhYmxlLCB3aGljaCB3ZSdsbCBjYWxsIFwiY291bnRcIlxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5QYXNzd29yZCBpbnB1dCBzdGVuZ3RoIHdlYnBhY2sgbGFvZCBsaWJyYXlyeTwvaDM+XG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPlxuICAgICAgPHA+WW91IGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgcGFyYW06IFwiYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgIHBhcmFtOiBcImphdmFzY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUnVieVwiLFxuICAgICAgcGFyYW06IFwicnVieVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlB5dGhvblwiLFxuICAgICAgcGFyYW06IFwicHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgIHBhcmFtOiBcImphdmFcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwYXJhbX0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICB0bz17YC9wb3B1bGFyLyR7cGFyYW19YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gdG89e2AvZ3Vlc3RgfT5cbiAgICAgICAgICB7XCJjaHVuayBsb2FkZWQgR3Vlc3RDaGVja291dENvbnRhaW5lclwifVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vTWF0Y2ggKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBGb3VyIE9oIEZvdXJcbiAgICA8L2Rpdj5cbiAgKVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2VIaXN0b3J5IGFsbG93cyB0byBzZXQgcXVlcnkgcGFyYW1zIGJ5IGhpc3RvcnkucHVzaCB7c2VhcmNoOnN0cmluZ31cbi8vIHVzZUxvY2F0aW9uIGFsbG93cyB0byBnZXQgcXVlcnkgcGFyYW1zIGdldCBzZWFyY2ggb2JqZWN0IGFuZCBkbyBzb21ldGhpbmcgd2l0aCB0aGVtXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1cGRhdGVRdWVyeVByb3BlcnR5LCByZWFkUXVlcnlQcm9wZXJ0eSwgY3JlYXRlUXVlcnlTdHJpbmcsIHF1ZXJ5U3RyaW5nVG9PYmplY3QgfSBmcm9tICcuLi8uLi9zaGFyZWQvaGVscGVyTWV0aG9kcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgZnVuY3Rpb24gc2V0UXVlcnlQYXJhbXMocXVlcnlTdHJpbmc6IHN0cmluZykge1xuICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gZ2V0IHRoZSBzZWFyY2ggKHF1ZXJ5IHN0cmluZykgZnJvbSB0aGUgbG9jYXRpb25cbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUxvY2F0aW9uKClcblxuICAvLyAxIGlmIHNlYXJjaCBvYmplY3QgZXhpc3RzIHRoZW4gY29udmVydCBzZWFyY2ggc3RyaW5nIHRvIG9iamVjdFxuICBjb25zdCBxdWVyeVBhcmFtc09iaiA9IHVzZU1lbW8oKCkgPT4gcXVlcnlTdHJpbmdUb09iamVjdChzZWFyY2gpLCBbc2VhcmNoXSk7XG5cbiAgLy8gMi4xIHVwZGF0ZSBsb2NhbCBzdGF0ZSBmcm9tIHVybCBwYXJhbXMgaWYgcGFyYW1zIGV4aXN0cyBcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShyZWFkUXVlcnlQcm9wZXJ0eSgnbGFuZ3VhZ2UnLCBxdWVyeVBhcmFtc09iaikgfHwgXCJcIilcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKHJlYWRRdWVyeVByb3BlcnR5KCdhZ2UnLCBxdWVyeVBhcmFtc09iaikgfHwgXCJcIilcblxuICAvLyAyLjIgdXBkYXRlIGxvY2FsIHN0YXRlIGJhc2VkIG9uIHVzZXIgcmFkaW8gYnV0dG9uIGNsaWNrIFxuICBjb25zdCBvblZhbHVlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGV2ZW50LnRhcmdldFxuXG4gICAgLy91cGRhdGUgdXJsIHF1ZXJ5IHBhcmFtXG4gICAgaWYgKG5hbWUgPT09ICdmYXZfbGFuZ3VhZ2UnKSB7XG4gICAgICAvL3VwZGF0ZSBzdGF0ZVxuICAgICAgc2V0TGFuZ3VhZ2UodmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVRdWVyeU9iamVjdCA9IHVwZGF0ZVF1ZXJ5UHJvcGVydHkoJ2xhbmd1YWdlJywgdmFsdWUsIHF1ZXJ5UGFyYW1zT2JqKVxuICAgICAgLy91cGRhdGUgdXJsIHdpdGggbmV3IHN0cmluZyBxdWVyeSBwdXNoZWQgdG8gaGlzdG9yeSBcbiAgICAgIHNldFF1ZXJ5UGFyYW1zKGNyZWF0ZVF1ZXJ5U3RyaW5nKHVwZGF0ZVF1ZXJ5T2JqZWN0KSlcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdmYXZfYWdlJykge1xuICAgICAgLy91cGRhdGUgc3RhdGVcbiAgICAgIHNldEFnZSh2YWx1ZSlcbiAgICAgIGNvbnN0IHVwZGF0ZVF1ZXJ5T2JqZWN0ID0gdXBkYXRlUXVlcnlQcm9wZXJ0eSgnYWdlJywgdmFsdWUsIHF1ZXJ5UGFyYW1zT2JqKVxuICAgICAgLy91cGRhdGUgdXJsIHdpdGggbmV3IHN0cmluZyBxdWVyeSBwdXNoZWQgdG8gaGlzdG9yeSBcbiAgICAgIHNldFF1ZXJ5UGFyYW1zKGNyZWF0ZVF1ZXJ5U3RyaW5nKHVwZGF0ZVF1ZXJ5T2JqZWN0KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiSFRNTFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiaHRtbFwiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkhUTUxcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImh0bWxcIj5IVE1MPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkNTU1wifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiY3NzXCIgbmFtZT1cImZhdl9sYW5ndWFnZVwiIHZhbHVlPVwiQ1NTXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjc3NcIj5DU1M8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiSmF2YVNjcmlwdFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiamF2YXNjcmlwdFwiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImphdmFTY3JpcHRcIj5KYXZhU2NyaXB0PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+dGVsbCB1cyB5b3VyIGFnZSBicmFja2V0IGlmIHlvdSBkb25gdCBtaW5kPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2FnZSA9PT0gXCJiZWxvdzE4XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cImZhdl9hZ2VcIiB2YWx1ZT1cImJlbG93MThcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImh0bWxcIj5iZWxvdyAxODwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXthZ2UgPT09IFwiYWJvdmUxOFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXZfYWdlXCIgdmFsdWU9XCJhYm92ZTE4XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjc3NcIj5hYm92ZSAxODwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0gPlxuICApO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMsIGdldFBhc3N3b3JkU3RyZW5ndGggfSBmcm9tICcuLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkU3RyZW5ndGgnXG5cblxuXG5pbnRlcmZhY2UgUGFzc3dvcmRJbnB1dFByb3BzIHtcbiAgICBlbWFpbD86IHN0cmluZ1xufVxuXG5jb25zdCBQYXNzd29yZElucHV0ID0gKHtcbiAgICBlbWFpbCA9ICcnLFxufTogUGFzc3dvcmRJbnB1dFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc3RyZW5ndGgsIHNldFN0cmVuZ3RoXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlOiBuZXdWYWx1ZSB9ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcblxuICAgICAgICBzZXRTdHJlbmd0aChnZXRQYXNzd29yZFN0cmVuZ3RoKG5ld1ZhbHVlKSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZXRPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMoW2VtYWlsXSlcbiAgICAgICAgfVxuICAgICAgICBzZXRPcHRpb25zKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFlvdXIgcGFzc3dvcmQgc3RyZW5ndGg6IDxzdHJvbmcgZGF0YS10ZXN0PSdwYXNzd29yZC1pbnB1dC1zdHJlbmd0aCc+e3N0cmVuZ3RofTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkSW5wdXQiLCJpbXBvcnQgeyB6eGN2Ym4sIHp4Y3Zibk9wdGlvbnMgfSBmcm9tICdAenhjdmJuLXRzL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyA9IGFzeW5jICh1c2VySW5wdXRzPzogKHN0cmluZyB8IG51bWJlcilbXSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHp4Y3ZibkNvbW1vblBhY2thZ2UgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6eGN2Ym5Db21tb25QYWNrYWdlXCIgKi8gJ0B6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uJylcbiAgICBjb25zdCB6eGN2Ym5FblBhY2thZ2UgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6eGN2Ym5FblBhY2thZ2VcIiAqLyAnQHp4Y3Zibi10cy9sYW5ndWFnZS1lbicpXG5cbiAgICB6eGN2Ym5PcHRpb25zLnNldE9wdGlvbnMoe1xuICAgICAgICBkaWN0aW9uYXJ5OiB7XG4gICAgICAgICAgICAuLi56eGN2Ym5Db21tb25QYWNrYWdlLmRlZmF1bHQuZGljdGlvbmFyeSxcbiAgICAgICAgICAgIC4uLnp4Y3ZibkVuUGFja2FnZS5kZWZhdWx0LmRpY3Rpb25hcnksXG4gICAgICAgICAgICB1c2VySW5wdXRzOiB1c2VySW5wdXRzIHx8IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGdyYXBoczogenhjdmJuQ29tbW9uUGFja2FnZS5kZWZhdWx0LmFkamFjZW5jeUdyYXBocyxcbiAgICAgICAgdHJhbnNsYXRpb25zOiB6eGN2Ym5FblBhY2thZ2UuZGVmYXVsdC50cmFuc2xhdGlvbnNcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFzc3dvcmRTdHJlbmd0aCA9IChwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKSByZXR1cm4gJydcblxuICAgIGNvbnN0IHsgc2NvcmUgfSA9IHp4Y3ZibihwYXNzd29yZClcblxuICAgIC8vIHp4Y3ZibiBnaXZlcyB1cyBhbiBpbnRlZ2VyIHNjb3JlIG91dCBvZiA0IChpbmNsdWRpbmcgMCBvdXQgb2YgNClcbiAgICBzd2l0Y2ggKHNjb3JlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuICdXZWFrJ1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAnTWVkaXVtJ1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1N0cm9uZydcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcblxuZXhwb3J0IGNvbnN0IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT5cbiAgICBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImd1ZXN0Q2hlY2tvdXRcIiwgd2VicGFja1ByZWxvYWQ6IDEgKi8gXCIuL0d1ZXN0Q2hlY2tvdXRDb250YWluZXIvR3Vlc3RDaGVja291dENvbnRhaW5lclwiXG4gICAgKSxcbiAgbG9hZGluZzogKCkgPT4gPGRpdj57XCJsb2FkaW5nIGNvbXBvbmVudFwifTwvZGl2PixcblxuICBtb2R1bGVzOiBbXCJndWVzdENoZWNrb3V0XCJdLFxufSk7XG4vL21vZHVsZXM6IG9wdGlvbmFsIGFycmF5IG9mIHBhdGggdG8gbG9hZCBkYXRhIG9iamVjdCBmcm9tIHNlcnZlciBzdGF0aWMgZmlsZXMgYXMgc29tZS5qc29uIHRvIHlvdXIgY29tcG9uZW50XG4vL2xvYWRpbmc6IGNvbXBvbmVudCB0byBkaXNwbGF5IG9uY2UgaW1wb3J0IGNvbXBvbmVudCBsb2Fkc1xuIiwiLy8gY3JlYXRlcyBhIHF1ZXJ5IHN0cmluZyBmcm9tIHF1ZXJ5IG9iamVjdFxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgcXVlcnlPYmplY3RJbnQge1xuICAgIHBhZ2U6IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZGVwYXJ0bWVudD86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUXVlcnlQcm9wZXJ0eShwcm9wZXJ0eTogc3RyaW5nLCBxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICByZXR1cm4gcXVlcnlPYmplY3RbcHJvcGVydHldXG59O1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5UHJvcGVydHkocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgcXVlcnlPYmplY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+KSB7XG4gICAgbGV0IHVwZGF0ZSA9IHt9XG4gICAgaWYgKHByb3BlcnR5ICYmIHZhbHVlKSB1cGRhdGUgPSB7IFtwcm9wZXJ0eV06IHZhbHVlIH1cbiAgICByZXR1cm4geyAuLi5xdWVyeU9iamVjdCwgLi4udXBkYXRlIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVyeVN0cmluZyhxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICBjb25zdCBzdHI6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHF1ZXJ5T2JqZWN0KVxuICAgICAgICBpZiAocXVlcnlPYmplY3QuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKGAke2VuY29kZVVSSUNvbXBvbmVudChwcm9wKX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlPYmplY3RbcHJvcF0pfWApO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbn07XG5cbi8vIHR1cm5zIHF1ZXJ5IHN0cmluZyBiYWNrIGludG8gYW4gb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iamVjdChxdWVyeVN0cmluZzogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5T2JqZWN0ID0ge31cbiAgICBjb25zdCBVUkxTZWFyY2hQYXJhbXNPYmogPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBVUkxTZWFyY2hQYXJhbXNPYmopIHtcbiAgICAgICAgcXVlcnlPYmplY3Rba2V5XSA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBxdWVyeU9iamVjdDtcbn07IiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCBQYXJhbXNRdWVyeSBmcm9tICcuL2NvbXBvbmVudHMvUGFyYW1zUXVlcnknO1xuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIgfSBmcm9tIFwiLi9jb250YWluZXJzXCI7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3F1ZXJ5JyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IFBhcmFtc1F1ZXJ5LFxuICB9LFxuICB7XG4gICAgcGF0aDogYC9ndWVzdGAsXG4gICAgcGFnZVRpdGxlOiAnR3Vlc3QgQ2hlY2tvdXQnLFxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJycsXG4gICAgcGFnZURhdGFUZXN0OiAnZ3Vlc3QtY2hlY2tvdXQtcGFnZScsXG4gICAgY29tcG9uZW50OiBHdWVzdENoZWNrb3V0Q29udGFpbmVyLFxuICAgIHJvdXRlczogW10sXG4gICAgYW5hbHl0aWNzOiB7fSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9wdWxhci86aWQnLFxuICAgIGNvbXBvbmVudDogR3JpZCxcbiAgICBmZXRjaEluaXRpYWxEYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KCcvJykucG9wKCkpLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9