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
/* harmony import */ var _serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../serverRenderingHelpers */ "./src/server/serverRenderingHelpers.js");









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
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), "</script>\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
  })["catch"](next);
};
/* harmony default export */ __webpack_exports__["default"] = (ssrMiddleware);

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
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
/* harmony import */ var _server_middleware_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/middleware/ssr */ "./src/server/middleware/ssr.js");





var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

//set public folder for loading static files
app.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, '../public/')));

// Renders the app
app.use(_server_middleware_ssr__WEBPACK_IMPORTED_MODULE_4__["default"]);
var PORT = 3389;
// Preload all the chunks then start the app
react_loadable__WEBPACK_IMPORTED_MODULE_1___default.a.preloadAll().then(function () {
  app.listen(PORT, function () {
    node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.info("node server running on:".concat(PORT));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, "src/server"))

/***/ }),

/***/ "./src/server/serverRenderingHelpers.js":
/*!**********************************************!*\
  !*** ./src/server/serverRenderingHelpers.js ***!
  \**********************************************/
/*! exports provided: getJsFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsFiles", function() { return getJsFiles; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// Gets all the chunked JS files as well as the base 'client' file. 'client'
// must be the last thing loaded as it depends on the prev files.
var getJsFiles = function getJsFiles() {
  var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var files = [];
  console.log('chunk modules:::', modules);
  [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(modules), ['bundle']).forEach(function (module) {
    files.push("".concat(module === 'bundle' ?
    //this is being served from dev-server from src/bundle.js and src/chunk-file.js , those files are invisible in dev-server mode
    '/bundle' : "/chunk-".concat(module), ".js"));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, files.map(function (file) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      key: file,
      type: "text/javascript",
      defer: true,
      charSet: "UTF-8",
      src: file
    });
  }));
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./src/shared/routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navbar */ "./src/shared/components/Navbar.jsx");
/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NoMatch */ "./src/shared/components/NoMatch.jsx");
/* harmony import */ var _routesWithSubRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routesWithSubRoutes */ "./src/shared/routesWithSubRoutes.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var App = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(App, _Component);
  var _super = _createSuper(App);
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (route) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routesWithSubRoutes__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: route.path || '404'
        }, route));
      })));
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Grid = function Grid(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    loading = _useState2[0],
    isLoading = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    repos = _useState4[0],
    laodRepos = _useState4[1];
  /* 
     //__isBrowser__ id defined in webpack.config as global
     if (__isBrowser__) {
       repos = window.__INITIAL_DATA__;
       delete window.__INITIAL_DATA__;
     } else {
       repos = this.props.staticContext.data;
     } */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    isLoading(true);
    props.fetchInitialData(props.match.params.id).then(function (repos) {
      console.log(props.match.params.id);
      laodRepos(repos);
      isLoading(false);
    });
  }, [props.match.params.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "LOADING"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    }
  }, !loading && repos.map(function (_ref) {
    var name = _ref.name,
      owner = _ref.owner,
      stargazers_count = _ref.stargazers_count,
      html_url = _ref.html_url;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: name,
      style: {
        margin: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: html_url
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "@", owner.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, stargazers_count, " stars")));
  })));
};
Grid.getInitialActions = function (_ref2) {
  var req = _ref2.req,
    match = _ref2.match;
  var id = match.params.id;
  var cookie = req.get('cookie') || '';
  return GET_COLLECTION_SNAPSHOT({
    id: id,
    cookie: cookie
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/shared/components/Home.jsx":
/*!****************************************!*\
  !*** ./src/shared/components/Home.jsx ***!
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


function Home() {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
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

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: fourOhFourRoute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourOhFourRoute", function() { return fourOhFourRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ "./src/shared/components/Home.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Grid */ "./src/shared/components/Grid.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/shared/api.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/shared/containers/index.js");






// Has no path, must be the last thing in the tree
//U need to add react to this file cause we use JSX below in 404 route
var fourOhFourRoute = {
  component: function component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, 'U could be lost.. U came to 404');
  },
  pageTitle: '404 Not Found',
  pageDescription: '',
  pageDataTest: 'four-oh-four'
};
var routes = [{
  path: "/",
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: "/guest",
  pageTitle: "Guest Checkout",
  pageDescription: "",
  pageDataTest: "guest-checkout-page",
  component: _containers__WEBPACK_IMPORTED_MODULE_4__["GuestCheckoutContainer"],
  routes: [],
  analytics: {}
}, {
  path: "/popular/:id",
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_2__["default"],
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return Object(_api__WEBPACK_IMPORTED_MODULE_3__["fetchPopularRepos"])(path.split("/").pop());
  }
}, /* 404 page */
fourOhFourRoute];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/shared/routesWithSubRoutes.js":
/*!*******************************************!*\
  !*** ./src/shared/routesWithSubRoutes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);




// Passes `props.routes` to the child component, which must render them as Routes inside a Switch
var RouteWithSubRoutes = function RouteWithSubRoutes(route) {
  var componentProps = route || {};
  if (route.children) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: route.path,
      children: function children(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(route.children, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, componentProps, {
          routes: route.routes
        }));
      }
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: route.path,
    render: function render(props) {
      console.log('props of route compoent', props);
      console.log('route', route);
      console.log('componentProps', componentProps);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(route.component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, componentProps, {
        routes: route.routes
      }));
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (RouteWithSubRoutes);

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/server/server.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/server.js */"./src/server/server.js");


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTm9NYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzV2l0aFN1YlJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiXSwibmFtZXMiOlsic3NyTWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm5leHQiLCJsb2dnZXIiLCJjb2xvciIsImJvbGQiLCJsb2ciLCJ1cmwiLCJhY3RpdmVSb3V0ZSIsInJvdXRlcyIsImZpbmQiLCJyb3V0ZSIsImkiLCJtYXRjaFBhdGgiLCJwcm9taXNlIiwiZmV0Y2hJbml0aWFsRGF0YSIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJkYXRhIiwiY29udGV4dCIsIm1vZHVsZXMiLCJhcHBIdG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsIm1vZHVsZU5hbWUiLCJwdXNoIiwiQm9keUNvbnRlbnRBbmRTY3JpcHRzIiwiY2xpZW50IiwibW9kdWxlc0NodW5rcyIsIl9faHRtbCIsImdldEpzRmlsZXMiLCJzZXJ2ZXJIdG1sIiwic2VuZCIsInNlcmlhbGl6ZSIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJqb2luIiwiX19kaXJuYW1lIiwiUE9SVCIsIkxvYWRhYmxlIiwicHJlbG9hZEFsbCIsImxpc3RlbiIsImluZm8iLCJmaWxlcyIsImNvbnNvbGUiLCJmb3JFYWNoIiwibW9kdWxlIiwibWFwIiwiZmlsZSIsImZldGNoUG9wdWxhclJlcG9zIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwiZmV0Y2giLCJqc29uIiwicmVwb3MiLCJpdGVtcyIsImVycm9yIiwid2FybiIsIkFwcCIsIkNvbXBvbmVudCIsIkdyaWQiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGluZyIsImlzTG9hZGluZyIsImxhb2RSZXBvcyIsInVzZUVmZmVjdCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJuYW1lIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJsb2dpbiIsImdldEluaXRpYWxBY3Rpb25zIiwiY29va2llIiwiZ2V0IiwiR0VUX0NPTExFQ1RJT05fU05BUFNIT1QiLCJIb21lIiwiY291bnQiLCJzZXRDb3VudCIsIk5hdmJhciIsImxhbmd1YWdlcyIsInBhcmFtIiwiZm9udFdlaWdodCIsIk5vTWF0Y2giLCJHdWVzdENoZWNrb3V0Q29udGFpbmVyIiwibG9hZGVyIiwiZm91ck9oRm91clJvdXRlIiwiY29tcG9uZW50IiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZURhdGFUZXN0IiwiZXhhY3QiLCJhbmFseXRpY3MiLCJzcGxpdCIsInBvcCIsIlJvdXRlV2l0aFN1YlJvdXRlcyIsImNvbXBvbmVudFByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVB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akIsTUFBTSxFQUFFLGdCQUFDaUQsS0FBSyxFQUFLO01BQ25CbEIsT0FBTyxDQUFDekMsR0FBRyxDQUFDLHlCQUF5QixFQUFFMkQsS0FBSyxDQUFDO01BQzdDbEIsT0FBTyxDQUFDekMsR0FBRyxDQUFDLE9BQU8sRUFBRUssS0FBSyxDQUFDO01BQzNCb0MsT0FBTyxDQUFDekMsR0FBRyxDQUFDLGdCQUFnQixFQUFFb0csY0FBYyxDQUFDO01BQzdDLG9CQUFPLDJEQUFDLEtBQUssQ0FBQyxTQUFTLDRFQUFLekMsS0FBSyxFQUFNeUMsY0FBYztRQUFFLE1BQU0sRUFBRS9GLEtBQUssQ0FBQ0Y7TUFBTyxHQUFHO0lBQUE7RUFBRSxFQUNqRjtBQUVOLENBQUM7QUFFY2dHLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCakMsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9zZXJ2ZXIvY2h1bmstXCIgKyBjaHVua0lkICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9jaHVua3MvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi8uLi9zaGFyZWQvcm91dGVzXCI7XG5pbXBvcnQgeyBnZXRKc0ZpbGVzIH0gZnJvbSBcIi4uL3NlcnZlclJlbmRlcmluZ0hlbHBlcnNcIjtcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoXCJ5ZWxsb3dcIikuYm9sZCgpLmxvZyhcInJlcXVlc3RlZCByZXEudXJsXCIsIHJlcS51cmwpO1xuICAvL3RoaXMgZ29lcyB0aHJvdWdoIGFsbCByb3V0ZXMgaW4gYXBwbGljYXRpb247XG4gIGNvbnN0IGFjdGl2ZVJvdXRlID1cbiAgICByb3V0ZXMuZmluZCgocm91dGUsIGkpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xuXG4gIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwiYWN0aXZlUm91dGVcIiwgYWN0aXZlUm91dGUpO1xuXG4gIGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5mZXRjaEluaXRpYWxEYXRhXG4gICAgPyBhY3RpdmVSb3V0ZS5mZXRjaEluaXRpYWxEYXRhKHJlcS5wYXRoKVxuICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgcHJvbWlzZVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0geyBkYXRhIH07XG5cbiAgICAgIC8vIEFzIHdlIGFyZSBjb2RlIHNwbGl0dGluZywgd2UgbmVlZCB0byBmaW5kIG91dCB3aGljaCBjaHVua3NcbiAgICAgIC8vIHRoZSBTU1IgdXNlcyBzbyB0aGUgY2xpZW50IGNhbiB1c2UgdGhlbS4gPExvYWRhYmxlLkNhcHR1cmU+XG4gICAgICAvLyB0YWtlcyBhIHJlcG9ydCBwcm9wIHdoaWNoIGlzIGNhbGxlZCB3aGVuZXZlciBhIGNodW5rIGlzIHVzZWQuXG4gICAgICBjb25zdCBtb2R1bGVzID0gW107XG5cbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoXCJ5ZWxsb3dcIilcbiAgICAgICAgLmJvbGQoKVxuICAgICAgICAubG9nKFwicmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZVwiLCByZXEudXJsKTtcblxuICAgICAgLy8gUmVuZGVyIHRoZSBwYXJ0IG9mIHRoZSBhcHAgdGhhdCBnZXRzIGh5ZHJhdGVkIG9uIHRoZSBjbGllbnRcbiAgICAgIGNvbnN0IGFwcEh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPExvYWRhYmxlLkNhcHR1cmUgcmVwb3J0PXsobW9kdWxlTmFtZSkgPT4gbW9kdWxlcy5wdXNoKG1vZHVsZU5hbWUpfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgPC9Mb2FkYWJsZS5DYXB0dXJlPlxuICAgICAgKTtcblxuICAgICAgY29uc3QgQm9keUNvbnRlbnRBbmRTY3JpcHRzID0gKHsgY2xpZW50LCBtb2R1bGVzQ2h1bmtzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNsaWVudCB9fSAvPlxuICAgICAgICAgICAge2dldEpzRmlsZXMobW9kdWxlc0NodW5rcyl9XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2VydmVySHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8Qm9keUNvbnRlbnRBbmRTY3JpcHRzIGNsaWVudD17YXBwSHRtbH0gbW9kdWxlc0NodW5rcz17bW9kdWxlc30gLz5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XG4gICAgICAgICAgPCEtLSB0aGlzIGhhcyBiZWVuIGdlbmVyYXRlZCBieSBjb25maWcvY2xpZW50L3dlYnBhY2suZGV2LmNvbmZpZyAtLT5cbiAgICAgICAgICA8c2NyaXB0PndpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoZGF0YSl9PC9zY3JpcHQ+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAke3NlcnZlckh0bWx9XG4gICAgICA8L2h0bWw+XG4gICAgICBgKTtcbiAgICB9KVxuICAgIC5jYXRjaChuZXh0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNzck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ25vZGUtY29sb3ItbG9nJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHNzck1pZGRsZXdhcmUgZnJvbSAnLi4vc2VydmVyL21pZGRsZXdhcmUvc3NyJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vL3NldCBwdWJsaWMgZm9sZGVyIGZvciBsb2FkaW5nIHN0YXRpYyBmaWxlc1xuYXBwLnVzZSgnL3B1YmxpYycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvJykpKTtcblxuLy8gUmVuZGVycyB0aGUgYXBwXG5hcHAudXNlKHNzck1pZGRsZXdhcmUpO1xuXG5jb25zdCBQT1JUID0gMzM4OTtcbi8vIFByZWxvYWQgYWxsIHRoZSBjaHVua3MgdGhlbiBzdGFydCB0aGUgYXBwXG5Mb2FkYWJsZS5wcmVsb2FkQWxsKCkudGhlbigoKSA9PiB7XG4gIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGxvZ2dlci5pbmZvKGBub2RlIHNlcnZlciBydW5uaW5nIG9uOiR7UE9SVH1gKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEdldHMgYWxsIHRoZSBjaHVua2VkIEpTIGZpbGVzIGFzIHdlbGwgYXMgdGhlIGJhc2UgJ2NsaWVudCcgZmlsZS4gJ2NsaWVudCdcbi8vIG11c3QgYmUgdGhlIGxhc3QgdGhpbmcgbG9hZGVkIGFzIGl0IGRlcGVuZHMgb24gdGhlIHByZXYgZmlsZXMuXG5leHBvcnQgY29uc3QgZ2V0SnNGaWxlcyA9IChtb2R1bGVzID0gW10pID0+IHtcbiAgY29uc3QgZmlsZXMgPSBbXTtcblxuICBjb25zb2xlLmxvZygnY2h1bmsgbW9kdWxlczo6OicsIG1vZHVsZXMpO1xuICBbLi4ubW9kdWxlcywgJ2J1bmRsZSddLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIGZpbGVzLnB1c2goXG4gICAgICBgJHtcbiAgICAgICAgbW9kdWxlID09PSAnYnVuZGxlJ1xuICAgICAgICAgID8gLy90aGlzIGlzIGJlaW5nIHNlcnZlZCBmcm9tIGRldi1zZXJ2ZXIgZnJvbSBzcmMvYnVuZGxlLmpzIGFuZCBzcmMvY2h1bmstZmlsZS5qcyAsIHRob3NlIGZpbGVzIGFyZSBpbnZpc2libGUgaW4gZGV2LXNlcnZlciBtb2RlXG4gICAgICAgICAgICAnL2J1bmRsZSdcbiAgICAgICAgICA6IGAvY2h1bmstJHttb2R1bGV9YFxuICAgICAgfS5qc2BcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2ZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHR5cGU9J3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICBkZWZlclxuICAgICAgICAgIGNoYXJTZXQ9J1VURi04J1xuICAgICAgICAgIHNyYz17ZmlsZX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyUmVwb3MgKGxhbmd1YWdlID0gJ2FsbCcpIHtcbiAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYClcblxuICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLnRoZW4oKHJlcG9zKSA9PiByZXBvcy5pdGVtcylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBOb01hdGNoIGZyb20gXCIuL05vTWF0Y2hcIjtcbmltcG9ydCBSb3V0ZVdpdGhTdWJSb3V0ZXMgZnJvbSAnLi4vcm91dGVzV2l0aFN1YlJvdXRlcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlKSA9PiAoPFJvdXRlV2l0aFN1YlJvdXRlcyBrZXk9e3JvdXRlLnBhdGggfHwgJzQwNCd9IHsuLi5yb3V0ZX0gLz4pKX1cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdyaWQgPSAocHJvcHMpID0+IHsgXG5cbiAgY29uc3QgW2xvYWRpbmcsIGlzTG9hZGluZ10gID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3JlcG9zLCBsYW9kUmVwb3NdICA9IHVzZVN0YXRlKG51bGwpXG4gLyogXG4gICAgLy9fX2lzQnJvd3Nlcl9fIGlkIGRlZmluZWQgaW4gd2VicGFjay5jb25maWcgYXMgZ2xvYmFsXG4gICAgaWYgKF9faXNCcm93c2VyX18pIHtcbiAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgICBkZWxldGUgd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9zID0gdGhpcy5wcm9wcy5zdGF0aWNDb250ZXh0LmRhdGE7XG4gICAgfSAqL1xuICBcblxuICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlzTG9hZGluZyh0cnVlKVxuXG4gICAgICAgIHByb3BzLmZldGNoSW5pdGlhbERhdGEocHJvcHMubWF0Y2gucGFyYW1zLmlkKS50aGVuKChyZXBvcykgPT57XG4gICAgICAgICAgY29uc29sZS5sb2cocHJvcHMubWF0Y2gucGFyYW1zLmlkKVxuICAgICAgICAgIGxhb2RSZXBvcyhyZXBvcyk7XG4gICAgICAgICAgaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcblxuICAgIH0sW3Byb3BzLm1hdGNoLnBhcmFtcy5pZF0pIFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICB7bG9hZGluZyAmJiA8cD5MT0FESU5HPC9wPn1cbiAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICB7IWxvYWRpbmcgJiYgcmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3sgbWFyZ2luOiAzMCB9fT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2h0bWxfdXJsfT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgIDxsaT57c3RhcmdhemVyc19jb3VudH0gc3RhcnM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8Lz5cbiAgICApO1xuXG59XG5cblxuR3JpZC5nZXRJbml0aWFsQWN0aW9ucyA9ICh7IHJlcSwgbWF0Y2ggfSkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXNcbiAgY29uc3QgY29va2llID0gcmVxLmdldCgnY29va2llJykgfHwgJydcblxuICByZXR1cm4gR0VUX0NPTExFQ1RJT05fU05BUFNIT1QoeyBpZCwgY29va2llIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gRGVjbGFyZSBhIG5ldyBzdGF0ZSB2YXJpYWJsZSwgd2hpY2ggd2UnbGwgY2FsbCBcImNvdW50XCJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgICBwYXJhbTogXCJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgcGFyYW06IFwiamF2YXNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSdWJ5XCIsXG4gICAgICBwYXJhbTogXCJydWJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlB5dGhvblwiLFxuICAgICAgcGFyYW06IFwicHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgIHBhcmFtOiBcImphdmFcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwYXJhbX0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICB0bz17YC9wb3B1bGFyLyR7cGFyYW19YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gdG89e2AvZ3Vlc3RgfT5cbiAgICAgICAgICB7XCJjaHVuayBsb2FkZWQgR3Vlc3RDaGVja291dENvbnRhaW5lclwifVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vTWF0Y2ggKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBGb3VyIE9oIEZvdXJcbiAgICA8L2Rpdj5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcblxuZXhwb3J0IGNvbnN0IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT5cbiAgICBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImd1ZXN0Q2hlY2tvdXRcIiwgd2VicGFja1ByZWxvYWQ6IDEgKi8gXCIuL0d1ZXN0Q2hlY2tvdXRDb250YWluZXIvR3Vlc3RDaGVja291dENvbnRhaW5lclwiXG4gICAgKSxcbiAgbG9hZGluZzogKCkgPT4gPGRpdj57XCJsb2FkaW5nIGNvbXBvbmVudFwifTwvZGl2PixcblxuICBtb2R1bGVzOiBbXCJndWVzdENoZWNrb3V0XCJdLFxufSk7XG4vL21vZHVsZXM6IG9wdGlvbmFsIGFycmF5IG9mIHBhdGggdG8gbG9hZCBkYXRhIG9iamVjdCBmcm9tIHNlcnZlciBzdGF0aWMgZmlsZXMgYXMgc29tZS5qc29uIHRvIHlvdXIgY29tcG9uZW50XG4vL2xvYWRpbmc6IGNvbXBvbmVudCB0byBkaXNwbGF5IG9uY2UgaW1wb3J0IGNvbXBvbmVudCBsb2Fkc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyBHdWVzdENoZWNrb3V0Q29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyc1wiO1xuXG4gLy8gSGFzIG5vIHBhdGgsIG11c3QgYmUgdGhlIGxhc3QgdGhpbmcgaW4gdGhlIHRyZWVcbiAvL1UgbmVlZCB0byBhZGQgcmVhY3QgdG8gdGhpcyBmaWxlIGNhdXNlIHdlIHVzZSBKU1ggYmVsb3cgaW4gNDA0IHJvdXRlXG5leHBvcnQgY29uc3QgZm91ck9oRm91clJvdXRlID0ge1xuICBjb21wb25lbnQ6ICgpPT4oPGRpdj57J1UgY291bGQgYmUgbG9zdC4uIFUgY2FtZSB0byA0MDQnfTwvZGl2PiksXG4gIHBhZ2VUaXRsZTogJzQwNCBOb3QgRm91bmQnLFxuICBwYWdlRGVzY3JpcHRpb246ICcnLFxuICBwYWdlRGF0YVRlc3Q6ICdmb3VyLW9oLWZvdXInLFxufVxuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBgL2d1ZXN0YCxcbiAgICBwYWdlVGl0bGU6IFwiR3Vlc3QgQ2hlY2tvdXRcIixcbiAgICBwYWdlRGVzY3JpcHRpb246IFwiXCIsXG4gICAgcGFnZURhdGFUZXN0OiBcImd1ZXN0LWNoZWNrb3V0LXBhZ2VcIixcbiAgICBjb21wb25lbnQ6IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIsXG4gICAgcm91dGVzOiBbXSxcbiAgICBhbmFseXRpY3M6IHt9LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcG9wdWxhci86aWRcIixcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSBcIlwiKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KFwiL1wiKS5wb3AoKSksXG4gIH0sXG4gIC8qIDQwNCBwYWdlICovXG4gIGZvdXJPaEZvdXJSb3V0ZSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gUGFzc2VzIGBwcm9wcy5yb3V0ZXNgIHRvIHRoZSBjaGlsZCBjb21wb25lbnQsIHdoaWNoIG11c3QgcmVuZGVyIHRoZW0gYXMgUm91dGVzIGluc2lkZSBhIFN3aXRjaFxuY29uc3QgUm91dGVXaXRoU3ViUm91dGVzID0gKHJvdXRlKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudFByb3BzID0gcm91dGUgfHwge31cblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9e3JvdXRlLnBhdGh9XG4gICAgICAgIGNoaWxkcmVuPXsocHJvcHMpID0+IDxyb3V0ZS5jaGlsZHJlbiB7Li4ucHJvcHN9IHsuLi5jb21wb25lbnRQcm9wc30gcm91dGVzPXtyb3V0ZS5yb3V0ZXN9IC8+fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD17cm91dGUucGF0aH1cbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncHJvcHMgb2Ygcm91dGUgY29tcG9lbnQnLCBwcm9wcylcbiAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZScsIHJvdXRlKVxuICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFByb3BzJywgY29tcG9uZW50UHJvcHMpXG4gICAgICByZXR1cm4gPHJvdXRlLmNvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5jb21wb25lbnRQcm9wc30gcm91dGVzPXtyb3V0ZS5yb3V0ZXN9IC8+fX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlV2l0aFN1YlJvdXRlc1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=