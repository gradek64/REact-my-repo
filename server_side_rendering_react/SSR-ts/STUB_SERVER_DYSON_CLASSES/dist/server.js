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

/***/ "./src/shared/components/Login.tsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Login.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var MyComponent = function MyComponent() {
  var handlePostRequest = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var url, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            //this will have to handle different env as UAT2 and PROD and DEV
            //only DEV hardcoded
            url = 'http://localhost:3011/login';
            _context.prev = 1;
            _context.next = 4;
            return fetch(url, {
              method: 'POST',
              credentials: 'include',
              // include cookies in the request
              headers: {
                'Content-Type': 'application/json'
                // Add any additional headers as needed
              },

              body: JSON.stringify({})
            });
          case 4:
            response = _context.sent;
            console.log('response', response);
            if (response.ok) {
              _context.next = 8;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 8:
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.error('Error:', _context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 10]]);
    }));
    return function handlePostRequest() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handlePostRequest
  }, "Make POST Request"));
};
/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

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
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Login */ "./src/shared/components/Login.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/shared/api.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ "./src/shared/containers/index.js");






var routes = [{
  path: '/',
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/query',
  exact: true,
  component: _components_ParamsQuery__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/login',
  exact: true,
  component: _components_Login__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/guest",
  pageTitle: 'Guest Checkout',
  pageDescription: '',
  pageDataTest: 'guest-checkout-page',
  component: _containers__WEBPACK_IMPORTED_MODULE_5__["GuestCheckoutContainer"],
  routes: [],
  analytics: {}
}, {
  path: '/popular/:id',
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchPopularRepos"])(path.split('/').pop());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTm9NYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1BhcmFtc1F1ZXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkU3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvaGVscGVyTWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1jb2xvci1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbInNzck1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwibG9nZ2VyIiwiY29sb3IiLCJib2xkIiwibG9nIiwidXJsIiwiYWN0aXZlUm91dGUiLCJyb3V0ZXMiLCJmaW5kIiwicm91dGUiLCJpIiwibWF0Y2hQYXRoIiwicHJvbWlzZSIsImZldGNoSW5pdGlhbERhdGEiLCJwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiZGF0YSIsImNvbnRleHQiLCJtb2R1bGVzIiwiYXBwSHRtbCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJMb2FkYWJsZSIsIkNhcHR1cmUiLCJyZXBvcnQiLCJtb2R1bGVOYW1lIiwicHVzaCIsIlN0YXRpY1JvdXRlciIsImxvY2F0aW9uIiwiQXBwIiwiQm9keUNvbnRlbnRBbmRTY3JpcHRzIiwiX3JlZiIsImNsaWVudCIsIm1vZHVsZXNDaHVua3MiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0SnNGaWxlcyIsInNlcnZlckh0bWwiLCJzZW5kIiwiY29uY2F0Iiwic2VyaWFsaXplIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsIlBPUlQiLCJwcmVsb2FkQWxsIiwibGlzdGVuIiwiaW5mbyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZpbGVzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZm9yRWFjaCIsIm1vZHVsZSIsIm1hcCIsImZpbGUiLCJpbmRleCIsImtleSIsInNyYyIsInR5cGUiLCJkZWZlciIsImNoYXJTZXQiLCJmZXRjaFBvcHVsYXJSZXBvcyIsImxhbmd1YWdlIiwiZW5jb2RlZFVSSSIsImVuY29kZVVSSSIsImZldGNoIiwianNvbiIsInJlcG9zIiwiaXRlbXMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiX2NyZWF0ZUNsYXNzIiwidmFsdWUiLCJyZW5kZXIiLCJOYXZiYXIiLCJTd2l0Y2giLCJleGFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJSb3V0ZSIsInByb3BzIiwiX2V4dGVuZHMiLCJOb01hdGNoIiwiR3JpZCIsIl90aGlzIiwiY2FsbCIsIl9faXNCcm93c2VyX18iLCJzdGF0aWNDb250ZXh0Iiwic3RhdGUiLCJsb2FkaW5nIiwiZmV0Y2hSZXBvcyIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXRjaCIsInBhcmFtcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxhbmciLCJfdGhpczIiLCJzZXRTdGF0ZSIsIl90aGlzJHN0YXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJuYW1lIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJocmVmIiwibG9naW4iLCJIb21lIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb3VudCIsInNldENvdW50IiwiUGFzc3dvcmRJbnB1dCIsIm9uQ2xpY2siLCJNeUNvbXBvbmVudCIsImhhbmRsZVBvc3RSZXF1ZXN0IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VudCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJ0MCIsInN0b3AiLCJsYW5ndWFnZXMiLCJwYXJhbSIsIk5hdkxpbmsiLCJhY3RpdmVTdHlsZSIsImZvbnRXZWlnaHQiLCJ0byIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwic2V0UXVlcnlQYXJhbXMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsIl91c2VMb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwicXVlcnlQYXJhbXNPYmoiLCJ1c2VNZW1vIiwicXVlcnlTdHJpbmdUb09iamVjdCIsInJlYWRRdWVyeVByb3BlcnR5Iiwic2V0TGFuZ3VhZ2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFnZSIsInNldEFnZSIsIm9uVmFsdWVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ1cGRhdGVRdWVyeU9iamVjdCIsInVwZGF0ZVF1ZXJ5UHJvcGVydHkiLCJjcmVhdGVRdWVyeVN0cmluZyIsImZsZXhEaXJlY3Rpb24iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJlIiwiaHRtbEZvciIsIl9yZWYkZW1haWwiLCJlbWFpbCIsInNldFZhbHVlIiwic3RyZW5ndGgiLCJzZXRTdHJlbmd0aCIsImhhbmRsZUNoYW5nZSIsIl9yZWYyIiwibmV3VmFsdWUiLCJnZXRQYXNzd29yZFN0cmVuZ3RoIiwidXNlRWZmZWN0Iiwic2V0T3B0aW9ucyIsIl9yZWYzIiwic2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMiLCJGcmFnbWVudCIsInVzZXJJbnB1dHMiLCJ6eGN2Ym5Db21tb25QYWNrYWdlIiwienhjdmJuRW5QYWNrYWdlIiwienhjdmJuT3B0aW9ucyIsImRpY3Rpb25hcnkiLCJfb2JqZWN0U3ByZWFkIiwiZ3JhcGhzIiwiYWRqYWNlbmN5R3JhcGhzIiwidHJhbnNsYXRpb25zIiwiX3giLCJwYXNzd29yZCIsIl96eGN2Ym4iLCJ6eGN2Ym4iLCJzY29yZSIsIkd1ZXN0Q2hlY2tvdXRDb250YWluZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2FkZXIiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsInByb3BlcnR5IiwicXVlcnlPYmplY3QiLCJ1cGRhdGUiLCJzdHIiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiVVJMU2VhcmNoUGFyYW1zT2JqIiwiVVJMU2VhcmNoUGFyYW1zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwiZXJyIiwiZiIsIlBhcmFtc1F1ZXJ5IiwiTG9naW4iLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRGF0YVRlc3QiLCJhbmFseXRpY3MiLCJzcGxpdCIsInBvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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cEI4RSxTQUFTLEVBQUVRLHdEQUFJO0VBQ2Z2RixnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQTtJQUFBLElBQUNDLElBQUksR0FBQXVDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7SUFBQSxPQUFLZSw4REFBaUIsQ0FBQ3RELElBQUksQ0FBQ2dQLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUFBO0FBQzNFLENBQUMsQ0FDRjtBQUVjeFAscUVBQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q3JCLHlFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vc2VydmVyL2NodW5rLVwiICsgY2h1bmtJZCArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvY2h1bmtzL1wiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcblxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vLi4vc2hhcmVkL3JvdXRlc1wiO1xuaW1wb3J0IHsgZ2V0SnNGaWxlcyB9IGZyb20gXCIuLi9zZXJ2ZXJSZW5kZXJpbmdIZWxwZXJzXCI7XG5cbmNvbnN0IHNzck1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbG9nZ2VyLmNvbG9yKFwieWVsbG93XCIpLmJvbGQoKS5sb2coXCJyZXF1ZXN0ZWQgcmVxLnVybFwiLCByZXEudXJsKTtcbiAgLy90aGlzIGdvZXMgdGhyb3VnaCBhbGwgcm91dGVzIGluIGFwcGxpY2F0aW9uO1xuICBjb25zdCBhY3RpdmVSb3V0ZSA9XG4gICAgcm91dGVzLmZpbmQoKHJvdXRlLCBpKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fTtcblxuICBsb2dnZXIuY29sb3IoXCJ5ZWxsb3dcIikuYm9sZCgpLmxvZyhcImFjdGl2ZVJvdXRlXCIsIGFjdGl2ZVJvdXRlKTtcblxuICBjb25zdCBwcm9taXNlID0gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YVxuICAgID8gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YShyZXEucGF0aClcbiAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIHByb21pc2VcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9O1xuXG4gICAgICAvLyBBcyB3ZSBhcmUgY29kZSBzcGxpdHRpbmcsIHdlIG5lZWQgdG8gZmluZCBvdXQgd2hpY2ggY2h1bmtzXG4gICAgICAvLyB0aGUgU1NSIHVzZXMgc28gdGhlIGNsaWVudCBjYW4gdXNlIHRoZW0uIDxMb2FkYWJsZS5DYXB0dXJlPlxuICAgICAgLy8gdGFrZXMgYSByZXBvcnQgcHJvcCB3aGljaCBpcyBjYWxsZWQgd2hlbmV2ZXIgYSBjaHVuayBpcyB1c2VkLlxuICAgICAgY29uc3QgbW9kdWxlcyA9IFtdO1xuXG4gICAgICBsb2dnZXJcbiAgICAgICAgLmNvbG9yKFwieWVsbG93XCIpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZyhcInJlcXVlc3RlZCByZXEudXJsIGluIHByb21pc2UgcmVzcG9uc2VcIiwgcmVxLnVybCk7XG5cbiAgICAgIC8vIFJlbmRlciB0aGUgcGFydCBvZiB0aGUgYXBwIHRoYXQgZ2V0cyBoeWRyYXRlZCBvbiB0aGUgY2xpZW50XG4gICAgICBjb25zdCBhcHBIdG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxMb2FkYWJsZS5DYXB0dXJlIHJlcG9ydD17KG1vZHVsZU5hbWUpID0+IG1vZHVsZXMucHVzaChtb2R1bGVOYW1lKX0+XG4gICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvTG9hZGFibGUuQ2FwdHVyZT5cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IEJvZHlDb250ZW50QW5kU2NyaXB0cyA9ICh7IGNsaWVudCwgbW9kdWxlc0NodW5rcyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjbGllbnQgfX0gLz5cbiAgICAgICAgICAgIHtnZXRKc0ZpbGVzKG1vZHVsZXNDaHVua3MpfVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNlcnZlckh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPEJvZHlDb250ZW50QW5kU2NyaXB0cyBjbGllbnQ9e2FwcEh0bWx9IG1vZHVsZXNDaHVua3M9e21vZHVsZXN9IC8+XG4gICAgICApO1xuXG4gICAgICByZXMuc2VuZChgXG4gICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+U1NSIHdpdGggUlI8L3RpdGxlPlxuICAgICAgICAgIDwhLS0gdGhpcyBoYXMgYmVlbiBnZW5lcmF0ZWQgYnkgY29uZmlnL2NsaWVudC93ZWJwYWNrLmRldi5jb25maWcgLS0+XG4gICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9ICR7c2VyaWFsaXplKGRhdGEpfTwvc2NyaXB0PlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLi9zdHlsZS5jc3NcIiAvPlxuXG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAke3NlcnZlckh0bWx9XG4gICAgICA8L2h0bWw+XG4gICAgICBgKTtcbiAgICB9KVxuICAgIC5jYXRjaChuZXh0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNzck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gXCIuL21pZGRsZXdhcmUvc3NyXCI7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuLi9zdGF0aWMnKSlcblxuLy8gUmVuZGVycyB0aGUgYXBwXG5hcHAudXNlKHNzck1pZGRsZXdhcmUpO1xuXG5jb25zdCBQT1JUID0gMzM4OTtcbi8vIFByZWxvYWQgYWxsIHRoZSBjaHVua3MgdGhlbiBzdGFydCB0aGUgYXBwXG5Mb2FkYWJsZS5wcmVsb2FkQWxsKCkudGhlbigoKSA9PiB7XG4gIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGxvZ2dlci5pbmZvKGBub2RlIHNlcnZlciBydW5uaW5nIG9uOiR7UE9SVH1gKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5cbi8vIEdldHMgYWxsIHRoZSBjaHVua2VkIEpTIGZpbGVzIGFzIHdlbGwgYXMgdGhlIGJhc2UgJ2NsaWVudCcgZmlsZS4gJ2NsaWVudCdcbi8vIG11c3QgYmUgdGhlIGxhc3QgdGhpbmcgbG9hZGVkIGFzIGl0IGRlcGVuZHMgb24gdGhlIHByZXYgZmlsZXMuXG5cbnR5cGUgU2NyaXB0VGFnS2V5cyA9IFBhcnRpYWw8SFRNTFNjcmlwdEVsZW1lbnQ+O1xuXG4vL3RoaXMgZmlsZSBuZWVkcyB0byBiZSAudHN4IG5vdCB0cyBjYXVzZSBpdCByZXR1cm4gaHRtbCBlbGVtZW50IFxuXG5cbmV4cG9ydCBjb25zdCBnZXRKc0ZpbGVzID0gKG1vZHVsZXMgPSBbXSk6IFNjcmlwdFRhZ0tleXNbXSA9PiB7XG4gIGxldCBmaWxlczogc3RyaW5nW10gPSBbXTtcblxuICAvLyBjb25zb2xlLmxvZyhcImNodW5rIG1vZHVsZXM6OjpcIiwgbW9kdWxlcyk7XG4gIFsuLi5tb2R1bGVzLCBcImJ1bmRsZVwiXS5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICBmaWxlcy5wdXNoKFxuICAgICAgYCR7bW9kdWxlID09PSBcImJ1bmRsZVwiXG4gICAgICAgID8gLy9jbGllbnQvYnVuZGxlLmpzJyBoYXMgdG8gbWF0Y2ggb3V0cHV0OiB7IC4uLixmaWxlbmFtZTogXCJjbGllbnQvYnVuZGxlLmpzXCIsfSBmb3IgZGV2IHNlcnZlciBkZXZlbG9wbWVudFxuICAgICAgICBcIi9jbGllbnQvYnVuZGxlXCJcbiAgICAgICAgOiBgL2NsaWVudC9jaHVuay0ke21vZHVsZX1gXG4gICAgICB9LmpzYFxuICAgICk7XG4gIH0pO1xuXG5cblxuXG4gIHJldHVybiBmaWxlcy5tYXAoKGZpbGU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IFNjcmlwdFRhZ0tleXMgPT4ge1xuICAgIGxvZ2dlci5pbmZvKGA8c2NyaXB0IHNyYz0ke2ZpbGV9Pjwvc2NyaXB0PjogbG9hZGluZy4uLmApO1xuXG4gICAgcmV0dXJuIDxzY3JpcHQga2V5PXtgc2NyaXB0MCR7aW5kZXh9YH0gc3JjPXtmaWxlfSB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIGRlZmVyIGNoYXJTZXQ9J3V0Zi04Jz48L3NjcmlwdD5cbiAgfSlcbn1cbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyUmVwb3MgKGxhbmd1YWdlID0gJ2FsbCcpIHtcbiAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYClcblxuICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLnRoZW4oKHJlcG9zKSA9PiByZXBvcy5pdGVtcylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBOb01hdGNoIGZyb20gXCIuL05vTWF0Y2hcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgIGV4YWN0PXshIWV4YWN0fVxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFJvdXRlIHJlbmRlcj17KHByb3BzKSA9PiA8Tm9NYXRjaCB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgcmVwb3M7XG4gICAgLy9fX2lzQnJvd3Nlcl9fIGlkIGRlZmluZWQgaW4gd2VicGFjay5jb25maWcgYXMgZ2xvYmFsXG4gICAgaWYgKF9faXNCcm93c2VyX18pIHtcbiAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgICBkZWxldGUgd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9zID0gdGhpcy5wcm9wcy5zdGF0aWNDb250ZXh0LmRhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zLFxuICAgICAgbG9hZGluZzogcmVwb3MgPyBmYWxzZSA6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMuZmV0Y2hSZXBvcyA9IHRoaXMuZmV0Y2hSZXBvcy5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcykge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuICBmZXRjaFJlcG9zKGxhbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIHRoaXMucHJvcHMuZmV0Y2hJbml0aWFsRGF0YShsYW5nKS50aGVuKChyZXBvcykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgcmVwb3MsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCByZXBvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gPHA+TE9BRElORzwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3sgbWFyZ2luOiAzMCB9fT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2h0bWxfdXJsfT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgIDxsaT57c3RhcmdhemVyc19jb3VudH0gc3RhcnM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSAnLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkSW5wdXRDaGVjaydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIERlY2xhcmUgYSBuZXcgc3RhdGUgdmFyaWFibGUsIHdoaWNoIHdlJ2xsIGNhbGwgXCJjb3VudFwiXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlBhc3N3b3JkIGlucHV0IHN0ZW5ndGggd2VicGFjayBsYW9kIGxpYnJheXJ5PC9oMz5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSAnLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkSW5wdXRDaGVjaydcbmNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vdGhpcyB3aWxsIGhhdmUgdG8gaGFuZGxlIGRpZmZlcmVudCBlbnYgYXMgVUFUMiBhbmQgUFJPRCBhbmQgREVWXG4gICAgLy9vbmx5IERFViBoYXJkY29kZWRcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExL2xvZ2luJztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgLy8gaW5jbHVkZSBjb29raWVzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIC8vIEFkZCBhbnkgYWRkaXRpb25hbCBoZWFkZXJzIGFzIG5lZWRlZFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSksXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaWYgbmVlZGVkXG4gICAgICAvL2NvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBvc3RSZXF1ZXN0fT5NYWtlIFBPU1QgUmVxdWVzdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgICBwYXJhbTogXCJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgcGFyYW06IFwiamF2YXNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSdWJ5XCIsXG4gICAgICBwYXJhbTogXCJydWJ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUHl0aG9uXCIsXG4gICAgICBwYXJhbTogXCJweXRob25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVwiLFxuICAgICAgcGFyYW06IFwiamF2YVwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7bGFuZ3VhZ2VzLm1hcCgoeyBuYW1lLCBwYXJhbSB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3BhcmFtfT5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgIHRvPXtgL3BvcHVsYXIvJHtwYXJhbX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgICAgPGxpPlxuICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSB0bz17YC9ndWVzdGB9PlxuICAgICAgICAgIHtcImNodW5rIGxvYWRlZCBHdWVzdENoZWNrb3V0Q29udGFpbmVyXCJ9XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9NYXRjaCAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEZvdXIgT2ggRm91clxuICAgIDwvZGl2PlxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbi8vIHVzZUhpc3RvcnkgYWxsb3dzIHRvIHNldCBxdWVyeSBwYXJhbXMgYnkgaGlzdG9yeS5wdXNoIHtzZWFyY2g6c3RyaW5nfVxuLy8gdXNlTG9jYXRpb24gYWxsb3dzIHRvIGdldCBxdWVyeSBwYXJhbXMgZ2V0IHNlYXJjaCBvYmplY3QgYW5kIGRvIHNvbWV0aGluZyB3aXRoIHRoZW1cbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVwZGF0ZVF1ZXJ5UHJvcGVydHksIHJlYWRRdWVyeVByb3BlcnR5LCBjcmVhdGVRdWVyeVN0cmluZywgcXVlcnlTdHJpbmdUb09iamVjdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9oZWxwZXJNZXRob2RzJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBmdW5jdGlvbiBzZXRRdWVyeVBhcmFtcyhxdWVyeVN0cmluZzogc3RyaW5nKSB7XG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIHNlYXJjaDogcXVlcnlTdHJpbmdcbiAgICB9KTtcbiAgfTtcblxuICAvLyBnZXQgdGhlIHNlYXJjaCAocXVlcnkgc3RyaW5nKSBmcm9tIHRoZSBsb2NhdGlvblxuICBjb25zdCB7IHNlYXJjaCB9ID0gdXNlTG9jYXRpb24oKVxuXG4gIC8vIDEgaWYgc2VhcmNoIG9iamVjdCBleGlzdHMgdGhlbiBjb252ZXJ0IHNlYXJjaCBzdHJpbmcgdG8gb2JqZWN0XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zT2JqID0gdXNlTWVtbygoKSA9PiBxdWVyeVN0cmluZ1RvT2JqZWN0KHNlYXJjaCksIFtzZWFyY2hdKTtcblxuICAvLyAyLjEgdXBkYXRlIGxvY2FsIHN0YXRlIGZyb20gdXJsIHBhcmFtcyBpZiBwYXJhbXMgZXhpc3RzIFxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKHJlYWRRdWVyeVByb3BlcnR5KCdsYW5ndWFnZScsIHF1ZXJ5UGFyYW1zT2JqKSB8fCBcIlwiKVxuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUocmVhZFF1ZXJ5UHJvcGVydHkoJ2FnZScsIHF1ZXJ5UGFyYW1zT2JqKSB8fCBcIlwiKVxuXG4gIC8vIDIuMiB1cGRhdGUgbG9jYWwgc3RhdGUgYmFzZWQgb24gdXNlciByYWRpbyBidXR0b24gY2xpY2sgXG4gIGNvbnN0IG9uVmFsdWVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gZXZlbnQudGFyZ2V0XG5cbiAgICAvL3VwZGF0ZSB1cmwgcXVlcnkgcGFyYW1cbiAgICBpZiAobmFtZSA9PT0gJ2Zhdl9sYW5ndWFnZScpIHtcbiAgICAgIC8vdXBkYXRlIHN0YXRlXG4gICAgICBzZXRMYW5ndWFnZSh2YWx1ZSlcbiAgICAgIGNvbnN0IHVwZGF0ZVF1ZXJ5T2JqZWN0ID0gdXBkYXRlUXVlcnlQcm9wZXJ0eSgnbGFuZ3VhZ2UnLCB2YWx1ZSwgcXVlcnlQYXJhbXNPYmopXG4gICAgICAvL3VwZGF0ZSB1cmwgd2l0aCBuZXcgc3RyaW5nIHF1ZXJ5IHB1c2hlZCB0byBoaXN0b3J5IFxuICAgICAgc2V0UXVlcnlQYXJhbXMoY3JlYXRlUXVlcnlTdHJpbmcodXBkYXRlUXVlcnlPYmplY3QpKVxuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gJ2Zhdl9hZ2UnKSB7XG4gICAgICAvL3VwZGF0ZSBzdGF0ZVxuICAgICAgc2V0QWdlKHZhbHVlKVxuICAgICAgY29uc3QgdXBkYXRlUXVlcnlPYmplY3QgPSB1cGRhdGVRdWVyeVByb3BlcnR5KCdhZ2UnLCB2YWx1ZSwgcXVlcnlQYXJhbXNPYmopXG4gICAgICAvL3VwZGF0ZSB1cmwgd2l0aCBuZXcgc3RyaW5nIHF1ZXJ5IHB1c2hlZCB0byBoaXN0b3J5IFxuICAgICAgc2V0UXVlcnlQYXJhbXMoY3JlYXRlUXVlcnlTdHJpbmcodXBkYXRlUXVlcnlPYmplY3QpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXtsYW5ndWFnZSA9PT0gXCJIVE1MXCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgaWQ9XCJodG1sXCIgbmFtZT1cImZhdl9sYW5ndWFnZVwiIHZhbHVlPVwiSFRNTFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaHRtbFwiPkhUTUw8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiQ1NTXCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgaWQ9XCJjc3NcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJDU1NcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNzc1wiPkNTUzwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXtsYW5ndWFnZSA9PT0gXCJKYXZhU2NyaXB0XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgaWQ9XCJqYXZhc2NyaXB0XCIgbmFtZT1cImZhdl9sYW5ndWFnZVwiIHZhbHVlPVwiSmF2YVNjcmlwdFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiamF2YVNjcmlwdFwiPkphdmFTY3JpcHQ8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD50ZWxsIHVzIHlvdXIgYWdlIGJyYWNrZXQgaWYgeW91IGRvbmB0IG1pbmQ8L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17YWdlID09PSBcImJlbG93MThcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmF2X2FnZVwiIHZhbHVlPVwiYmVsb3cxOFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaHRtbFwiPmJlbG93IDE4PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2FnZSA9PT0gXCJhYm92ZTE4XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cImZhdl9hZ2VcIiB2YWx1ZT1cImFib3ZlMThcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNzc1wiPmFib3ZlIDE4PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybSA+XG4gICk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucywgZ2V0UGFzc3dvcmRTdHJlbmd0aCB9IGZyb20gJy4uL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRTdHJlbmd0aCdcblxuXG5cbmludGVyZmFjZSBQYXNzd29yZElucHV0UHJvcHMge1xuICAgIGVtYWlsPzogc3RyaW5nXG59XG5cbmNvbnN0IFBhc3N3b3JkSW5wdXQgPSAoe1xuICAgIGVtYWlsID0gJycsXG59OiBQYXNzd29yZElucHV0UHJvcHMpID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzdHJlbmd0aCwgc2V0U3RyZW5ndGhdID0gdXNlU3RhdGUoJycpXG5cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG5ld1ZhbHVlIH0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuXG4gICAgICAgIHNldFN0cmVuZ3RoKGdldFBhc3N3b3JkU3RyZW5ndGgobmV3VmFsdWUpKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNldE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyhbZW1haWxdKVxuICAgICAgICB9XG4gICAgICAgIHNldE9wdGlvbnMoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgWW91ciBwYXNzd29yZCBzdHJlbmd0aDogPHN0cm9uZyBkYXRhLXRlc3Q9J3Bhc3N3b3JkLWlucHV0LXN0cmVuZ3RoJz57c3RyZW5ndGh9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dCIsImltcG9ydCB7IHp4Y3ZibiwgenhjdmJuT3B0aW9ucyB9IGZyb20gJ0B6eGN2Ym4tdHMvY29yZSdcblxuZXhwb3J0IGNvbnN0IHNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zID0gYXN5bmMgKHVzZXJJbnB1dHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgenhjdmJuQ29tbW9uUGFja2FnZSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInp4Y3ZibkNvbW1vblBhY2thZ2VcIiAqLyAnQHp4Y3Zibi10cy9sYW5ndWFnZS1jb21tb24nKVxuICAgIGNvbnN0IHp4Y3ZibkVuUGFja2FnZSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInp4Y3ZibkVuUGFja2FnZVwiICovICdAenhjdmJuLXRzL2xhbmd1YWdlLWVuJylcblxuICAgIHp4Y3Zibk9wdGlvbnMuc2V0T3B0aW9ucyh7XG4gICAgICAgIGRpY3Rpb25hcnk6IHtcbiAgICAgICAgICAgIC4uLnp4Y3ZibkNvbW1vblBhY2thZ2UuZGVmYXVsdC5kaWN0aW9uYXJ5LFxuICAgICAgICAgICAgLi4uenhjdmJuRW5QYWNrYWdlLmRlZmF1bHQuZGljdGlvbmFyeSxcbiAgICAgICAgICAgIHVzZXJJbnB1dHM6IHVzZXJJbnB1dHMgfHwgW11cbiAgICAgICAgfSxcbiAgICAgICAgZ3JhcGhzOiB6eGN2Ym5Db21tb25QYWNrYWdlLmRlZmF1bHQuYWRqYWNlbmN5R3JhcGhzLFxuICAgICAgICB0cmFuc2xhdGlvbnM6IHp4Y3ZibkVuUGFja2FnZS5kZWZhdWx0LnRyYW5zbGF0aW9uc1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXNzd29yZFN0cmVuZ3RoID0gKHBhc3N3b3JkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghcGFzc3dvcmQpIHJldHVybiAnJ1xuXG4gICAgY29uc3QgeyBzY29yZSB9ID0genhjdmJuKHBhc3N3b3JkKVxuXG4gICAgLy8genhjdmJuIGdpdmVzIHVzIGFuIGludGVnZXIgc2NvcmUgb3V0IG9mIDQgKGluY2x1ZGluZyAwIG91dCBvZiA0KVxuICAgIHN3aXRjaCAoc2NvcmUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gJ1dlYWsnXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICdNZWRpdW0nXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnU3Ryb25nJ1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuXG5leHBvcnQgY29uc3QgR3Vlc3RDaGVja291dENvbnRhaW5lciA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PlxuICAgIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZ3Vlc3RDaGVja291dFwiLCB3ZWJwYWNrUHJlbG9hZDogMSAqLyBcIi4vR3Vlc3RDaGVja291dENvbnRhaW5lci9HdWVzdENoZWNrb3V0Q29udGFpbmVyXCJcbiAgICApLFxuICBsb2FkaW5nOiAoKSA9PiA8ZGl2PntcImxvYWRpbmcgY29tcG9uZW50XCJ9PC9kaXY+LFxuXG4gIG1vZHVsZXM6IFtcImd1ZXN0Q2hlY2tvdXRcIl0sXG59KTtcbi8vbW9kdWxlczogb3B0aW9uYWwgYXJyYXkgb2YgcGF0aCB0byBsb2FkIGRhdGEgb2JqZWN0IGZyb20gc2VydmVyIHN0YXRpYyBmaWxlcyBhcyBzb21lLmpzb24gdG8geW91ciBjb21wb25lbnRcbi8vbG9hZGluZzogY29tcG9uZW50IHRvIGRpc3BsYXkgb25jZSBpbXBvcnQgY29tcG9uZW50IGxvYWRzXG4iLCIvLyBjcmVhdGVzIGEgcXVlcnkgc3RyaW5nIGZyb20gcXVlcnkgb2JqZWN0XG5cblxuZXhwb3J0IGludGVyZmFjZSBxdWVyeU9iamVjdEludCB7XG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBkZXBhcnRtZW50Pzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRRdWVyeVByb3BlcnR5KHByb3BlcnR5OiBzdHJpbmcsIHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIHJldHVybiBxdWVyeU9iamVjdFtwcm9wZXJ0eV1cbn07XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXVlcnlQcm9wZXJ0eShwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICBsZXQgdXBkYXRlID0ge31cbiAgICBpZiAocHJvcGVydHkgJiYgdmFsdWUpIHVwZGF0ZSA9IHsgW3Byb3BlcnR5XTogdmFsdWUgfVxuICAgIHJldHVybiB7IC4uLnF1ZXJ5T2JqZWN0LCAuLi51cGRhdGUgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5U3RyaW5nKHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIGNvbnN0IHN0cjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcXVlcnlPYmplY3QpXG4gICAgICAgIGlmIChxdWVyeU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3ApfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeU9iamVjdFtwcm9wXSl9YCk7XG4gICAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xufTtcblxuLy8gdHVybnMgcXVlcnkgc3RyaW5nIGJhY2sgaW50byBhbiBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqZWN0KHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnlPYmplY3QgPSB7fVxuICAgIGNvbnN0IFVSTFNlYXJjaFBhcmFtc09iaiA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIFVSTFNlYXJjaFBhcmFtc09iaikge1xuICAgICAgICBxdWVyeU9iamVjdFtrZXldID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5T2JqZWN0O1xufTsiLCJpbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL2NvbXBvbmVudHMvR3JpZCc7XG5pbXBvcnQgUGFyYW1zUXVlcnkgZnJvbSAnLi9jb21wb25lbnRzL1BhcmFtc1F1ZXJ5JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBHdWVzdENoZWNrb3V0Q29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXJzJztcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcXVlcnknLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogUGFyYW1zUXVlcnksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IExvZ2luLFxuICB9LFxuICB7XG4gICAgcGF0aDogYC9ndWVzdGAsXG4gICAgcGFnZVRpdGxlOiAnR3Vlc3QgQ2hlY2tvdXQnLFxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJycsXG4gICAgcGFnZURhdGFUZXN0OiAnZ3Vlc3QtY2hlY2tvdXQtcGFnZScsXG4gICAgY29tcG9uZW50OiBHdWVzdENoZWNrb3V0Q29udGFpbmVyLFxuICAgIHJvdXRlczogW10sXG4gICAgYW5hbHl0aWNzOiB7fSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9wdWxhci86aWQnLFxuICAgIGNvbXBvbmVudDogR3JpZCxcbiAgICBmZXRjaEluaXRpYWxEYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KCcvJykucG9wKCkpLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9