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
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url', req.url);
  //this goes through all routes in application;
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_7__["default"].find(function (route, i) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(req.url, route);
  }) || {};
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('activeRoute', activeRoute);
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var context = {
      data: data
    };

    // As we are code splitting, we need to find out which chunks
    // the SSR uses so the client can use them. <Loadable.Capture>
    // takes a report prop which is called whenever a chunk is used.
    var modules = [];
    node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url in promise response', req.url);

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
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), "</script>\n          \n          <!-- this will add any css without you doing anything in client it will pull files from static public folder -->\n          <link href=\"./public/css/bootstrap.css\" rel=\"stylesheet\" >\n          <script src=\"./public/js/bootstrap.js\"></script>\n          <!---->\n\n          <!-- main css file with tailing config inside -->\n\n          <link href=\"./public/css/main.css\" rel=\"stylesheet\">\n\n          <!-- tailing output file after compiling -->\n\n          <link href=\"./public/dist/css/mainOutput.css\" rel=\"stylesheet\">\n\n          <!---->\n\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);





var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

/* you need to set public path so you can serve you static files as css files, images etc

express.static(path.join(process.cwd(), 'public')))

will produce path depending what env are you in for localhost will direct to your user directory as:

'Users/greg.gil/dev/REact-my-repo/server_side_rendering_react/SSR-ts/with_css_and_styled_components/public'
*/

app.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_4___default.a.join(process.cwd(), 'public')));

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


function Home() {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-3xl font-bold underline text-sky-400"
  }, "Hello world from Tailwind!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05vTWF0Y2guanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXJhbXNRdWVyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvaGVscGVyTWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiXSwibmFtZXMiOlsic3NyTWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm5leHQiLCJsb2dnZXIiLCJjb2xvciIsImJvbGQiLCJsb2ciLCJ1cmwiLCJhY3RpdmVSb3V0ZSIsInJvdXRlcyIsImZpbmQiLCJyb3V0ZSIsImkiLCJtYXRjaFBhdGgiLCJwcm9taXNlIiwiZmV0Y2hJbml0aWFsRGF0YSIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJkYXRhIiwiY29udGV4dCIsIm1vZHVsZXMiLCJhcHBIdG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkxvYWRhYmxlIiwiQ2FwdHVyZSIsInJlcG9ydCIsIm1vZHVsZU5hbWUiLCJwdXNoIiwiU3RhdGljUm91dGVyIiwibG9jYXRpb24iLCJBcHAiLCJCb2R5Q29udGVudEFuZFNjcmlwdHMiLCJfcmVmIiwiY2xpZW50IiwibW9kdWxlc0NodW5rcyIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRKc0ZpbGVzIiwic2VydmVySHRtbCIsInNlbmQiLCJjb25jYXQiLCJzZXJpYWxpemUiLCJhcHAiLCJleHByZXNzIiwidXNlIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJQT1JUIiwicHJlbG9hZEFsbCIsImxpc3RlbiIsImluZm8iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWxlcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImZvckVhY2giLCJtb2R1bGUiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJrZXkiLCJzcmMiLCJ0eXBlIiwiZGVmZXIiLCJjaGFyU2V0IiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwicmVuZGVyIiwiTmF2YmFyIiwiU3dpdGNoIiwiZXhhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiUm91dGUiLCJwcm9wcyIsIl9leHRlbmRzIiwiTm9NYXRjaCIsIkdyaWQiLCJfdGhpcyIsImNhbGwiLCJfX2lzQnJvd3Nlcl9fIiwic3RhdGljQ29udGV4dCIsInN0YXRlIiwibG9hZGluZyIsImZldGNoUmVwb3MiLCJiaW5kIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImNvbXBvbmVudERpZE1vdW50IiwibWF0Y2giLCJwYXJhbXMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJsYW5nIiwiX3RoaXMyIiwic2V0U3RhdGUiLCJfdGhpcyRzdGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibmFtZSIsIm93bmVyIiwic3RhcmdhemVyc19jb3VudCIsImh0bWxfdXJsIiwibWFyZ2luIiwiaHJlZiIsImxvZ2luIiwiSG9tZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnQiLCJzZXRDb3VudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJsYW5ndWFnZXMiLCJwYXJhbSIsIk5hdkxpbmsiLCJhY3RpdmVTdHlsZSIsImZvbnRXZWlnaHQiLCJ0byIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwic2V0UXVlcnlQYXJhbXMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsIl91c2VMb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwicXVlcnlQYXJhbXNPYmoiLCJ1c2VNZW1vIiwicXVlcnlTdHJpbmdUb09iamVjdCIsInJlYWRRdWVyeVByb3BlcnR5Iiwic2V0TGFuZ3VhZ2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFnZSIsInNldEFnZSIsIm9uVmFsdWVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ1cGRhdGVRdWVyeU9iamVjdCIsInVwZGF0ZVF1ZXJ5UHJvcGVydHkiLCJjcmVhdGVRdWVyeVN0cmluZyIsImZsZXhEaXJlY3Rpb24iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJlIiwiaHRtbEZvciIsIkd1ZXN0Q2hlY2tvdXRDb250YWluZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2FkZXIiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsInByb3BlcnR5IiwicXVlcnlPYmplY3QiLCJ1cGRhdGUiLCJfb2JqZWN0U3ByZWFkIiwic3RyIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiVVJMU2VhcmNoUGFyYW1zT2JqIiwiVVJMU2VhcmNoUGFyYW1zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwiZXJyIiwiZiIsIlBhcmFtc1F1ZXJ5IiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZURhdGFUZXN0IiwiYW5hbHl0aWNzIiwic3BsaXQiLCJwb3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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a0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9zZXJ2ZXIvY2h1bmstXCIgKyBjaHVua0lkICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9jaHVua3MvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2dnZXIgZnJvbSAnbm9kZS1jb2xvci1sb2cnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5cbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi8uLi9zaGFyZWQvcm91dGVzJztcbmltcG9ydCB7IGdldEpzRmlsZXMgfSBmcm9tICcuLi9zZXJ2ZXJSZW5kZXJpbmdIZWxwZXJzJztcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoJ3llbGxvdycpLmJvbGQoKS5sb2coJ3JlcXVlc3RlZCByZXEudXJsJywgcmVxLnVybCk7XG4gIC8vdGhpcyBnb2VzIHRocm91Z2ggYWxsIHJvdXRlcyBpbiBhcHBsaWNhdGlvbjtcbiAgY29uc3QgYWN0aXZlUm91dGUgPVxuICAgIHJvdXRlcy5maW5kKChyb3V0ZSwgaSkgPT4gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKSkgfHwge307XG5cbiAgbG9nZ2VyLmNvbG9yKCd5ZWxsb3cnKS5ib2xkKCkubG9nKCdhY3RpdmVSb3V0ZScsIGFjdGl2ZVJvdXRlKTtcblxuICBjb25zdCBwcm9taXNlID0gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YVxuICAgID8gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YShyZXEucGF0aClcbiAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIHByb21pc2VcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9O1xuXG4gICAgICAvLyBBcyB3ZSBhcmUgY29kZSBzcGxpdHRpbmcsIHdlIG5lZWQgdG8gZmluZCBvdXQgd2hpY2ggY2h1bmtzXG4gICAgICAvLyB0aGUgU1NSIHVzZXMgc28gdGhlIGNsaWVudCBjYW4gdXNlIHRoZW0uIDxMb2FkYWJsZS5DYXB0dXJlPlxuICAgICAgLy8gdGFrZXMgYSByZXBvcnQgcHJvcCB3aGljaCBpcyBjYWxsZWQgd2hlbmV2ZXIgYSBjaHVuayBpcyB1c2VkLlxuICAgICAgY29uc3QgbW9kdWxlcyA9IFtdO1xuXG4gICAgICBsb2dnZXJcbiAgICAgICAgLmNvbG9yKCd5ZWxsb3cnKVxuICAgICAgICAuYm9sZCgpXG4gICAgICAgIC5sb2coJ3JlcXVlc3RlZCByZXEudXJsIGluIHByb21pc2UgcmVzcG9uc2UnLCByZXEudXJsKTtcblxuICAgICAgLy8gUmVuZGVyIHRoZSBwYXJ0IG9mIHRoZSBhcHAgdGhhdCBnZXRzIGh5ZHJhdGVkIG9uIHRoZSBjbGllbnRcbiAgICAgIGNvbnN0IGFwcEh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPExvYWRhYmxlLkNhcHR1cmUgcmVwb3J0PXsobW9kdWxlTmFtZSkgPT4gbW9kdWxlcy5wdXNoKG1vZHVsZU5hbWUpfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgPC9Mb2FkYWJsZS5DYXB0dXJlPlxuICAgICAgKTtcblxuICAgICAgY29uc3QgQm9keUNvbnRlbnRBbmRTY3JpcHRzID0gKHsgY2xpZW50LCBtb2R1bGVzQ2h1bmtzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2FwcCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjbGllbnQgfX0gLz5cbiAgICAgICAgICAgIHtnZXRKc0ZpbGVzKG1vZHVsZXNDaHVua3MpfVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNlcnZlckh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPEJvZHlDb250ZW50QW5kU2NyaXB0cyBjbGllbnQ9e2FwcEh0bWx9IG1vZHVsZXNDaHVua3M9e21vZHVsZXN9IC8+XG4gICAgICApO1xuXG4gICAgICByZXMuc2VuZChgXG4gICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+U1NSIHdpdGggUlI8L3RpdGxlPlxuICAgICAgICAgIDwhLS0gdGhpcyBoYXMgYmVlbiBnZW5lcmF0ZWQgYnkgY29uZmlnL2NsaWVudC93ZWJwYWNrLmRldi5jb25maWcgLS0+XG4gICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9ICR7c2VyaWFsaXplKGRhdGEpfTwvc2NyaXB0PlxuICAgICAgICAgIFxuICAgICAgICAgIDwhLS0gdGhpcyB3aWxsIGFkZCBhbnkgY3NzIHdpdGhvdXQgeW91IGRvaW5nIGFueXRoaW5nIGluIGNsaWVudCBpdCB3aWxsIHB1bGwgZmlsZXMgZnJvbSBzdGF0aWMgcHVibGljIGZvbGRlciAtLT5cbiAgICAgICAgICA8bGluayBocmVmPVwiLi9wdWJsaWMvY3NzL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi9wdWJsaWMvanMvYm9vdHN0cmFwLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPCEtLS0tPlxuXG4gICAgICAgICAgPCEtLSBtYWluIGNzcyBmaWxlIHdpdGggdGFpbGluZyBjb25maWcgaW5zaWRlIC0tPlxuXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi4vcHVibGljL2Nzcy9tYWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cblxuICAgICAgICAgIDwhLS0gdGFpbGluZyBvdXRwdXQgZmlsZSBhZnRlciBjb21waWxpbmcgLS0+XG5cbiAgICAgICAgICA8bGluayBocmVmPVwiLi9wdWJsaWMvZGlzdC9jc3MvbWFpbk91dHB1dC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG5cbiAgICAgICAgICA8IS0tLS0+XG5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICR7c2VydmVySHRtbH1cbiAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuaW1wb3J0IHNzck1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkZGxld2FyZS9zc3JcIjtcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cblxuXG4vKiB5b3UgbmVlZCB0byBzZXQgcHVibGljIHBhdGggc28geW91IGNhbiBzZXJ2ZSB5b3Ugc3RhdGljIGZpbGVzIGFzIGNzcyBmaWxlcywgaW1hZ2VzIGV0Y1xuXG5leHByZXNzLnN0YXRpYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycpKSlcblxud2lsbCBwcm9kdWNlIHBhdGggZGVwZW5kaW5nIHdoYXQgZW52IGFyZSB5b3UgaW4gZm9yIGxvY2FsaG9zdCB3aWxsIGRpcmVjdCB0byB5b3VyIHVzZXIgZGlyZWN0b3J5IGFzOlxuXG4nVXNlcnMvZ3JlZy5naWwvZGV2L1JFYWN0LW15LXJlcG8vc2VydmVyX3NpZGVfcmVuZGVyaW5nX3JlYWN0L1NTUi10cy93aXRoX2Nzc19hbmRfc3R5bGVkX2NvbXBvbmVudHMvcHVibGljJ1xuKi9cblxuYXBwLnVzZSgnL3B1YmxpYycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJykpKVxuXG4vLyBSZW5kZXJzIHRoZSBhcHBcbmFwcC51c2Uoc3NyTWlkZGxld2FyZSk7XG5cbmNvbnN0IFBPUlQgPSAzMzg5O1xuLy8gUHJlbG9hZCBhbGwgdGhlIGNodW5rcyB0aGVuIHN0YXJ0IHRoZSBhcHBcbkxvYWRhYmxlLnByZWxvYWRBbGwoKS50aGVuKCgpID0+IHtcbiAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYG5vZGUgc2VydmVyIHJ1bm5pbmcgb246JHtQT1JUfWApO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcblxuLy8gR2V0cyBhbGwgdGhlIGNodW5rZWQgSlMgZmlsZXMgYXMgd2VsbCBhcyB0aGUgYmFzZSAnY2xpZW50JyBmaWxlLiAnY2xpZW50J1xuLy8gbXVzdCBiZSB0aGUgbGFzdCB0aGluZyBsb2FkZWQgYXMgaXQgZGVwZW5kcyBvbiB0aGUgcHJldiBmaWxlcy5cblxudHlwZSBTY3JpcHRUYWdLZXlzID0gUGFydGlhbDxIVE1MU2NyaXB0RWxlbWVudD47XG5cbi8vdGhpcyBmaWxlIG5lZWRzIHRvIGJlIC50c3ggbm90IHRzIGNhdXNlIGl0IHJldHVybiBodG1sIGVsZW1lbnQgXG5cblxuZXhwb3J0IGNvbnN0IGdldEpzRmlsZXMgPSAobW9kdWxlcyA9IFtdKTogU2NyaXB0VGFnS2V5c1tdID0+IHtcbiAgbGV0IGZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiY2h1bmsgbW9kdWxlczo6OlwiLCBtb2R1bGVzKTtcbiAgWy4uLm1vZHVsZXMsIFwiYnVuZGxlXCJdLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIGZpbGVzLnB1c2goXG4gICAgICBgJHttb2R1bGUgPT09IFwiYnVuZGxlXCJcbiAgICAgICAgPyAvL2NsaWVudC9idW5kbGUuanMnIGhhcyB0byBtYXRjaCBvdXRwdXQ6IHsgLi4uLGZpbGVuYW1lOiBcImNsaWVudC9idW5kbGUuanNcIix9IGZvciBkZXYgc2VydmVyIGRldmVsb3BtZW50XG4gICAgICAgIFwiL2NsaWVudC9idW5kbGVcIlxuICAgICAgICA6IGAvY2xpZW50L2NodW5rLSR7bW9kdWxlfWBcbiAgICAgIH0uanNgXG4gICAgKTtcbiAgfSk7XG5cblxuXG5cbiAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogU2NyaXB0VGFnS2V5cyA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYDxzY3JpcHQgc3JjPSR7ZmlsZX0+PC9zY3JpcHQ+OiBsb2FkaW5nLi4uYCk7XG5cbiAgICByZXR1cm4gPHNjcmlwdCBrZXk9e2BzY3JpcHQwJHtpbmRleH1gfSBzcmM9e2ZpbGV9IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgZGVmZXIgY2hhclNldD0ndXRmLTgnPjwvc2NyaXB0PlxuICB9KVxufVxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyAobGFuZ3VhZ2UgPSAnYWxsJykge1xuICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgKVxuXG4gIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigocmVwb3MpID0+IHJlcG9zLml0ZW1zKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvcilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vTm9NYXRjaFwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgZXhhY3Q9eyEhZXhhY3R9XG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLnJlc3R9IC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8Um91dGUgcmVuZGVyPXsocHJvcHMpID0+IDxOb01hdGNoIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCByZXBvcztcbiAgICAvL19faXNCcm93c2VyX18gaWQgZGVmaW5lZCBpbiB3ZWJwYWNrLmNvbmZpZyBhcyBnbG9iYWxcbiAgICBpZiAoX19pc0Jyb3dzZXJfXykge1xuICAgICAgcmVwb3MgPSB3aW5kb3cuX19JTklUSUFMX0RBVEFfXztcbiAgICAgIGRlbGV0ZSB3aW5kb3cuX19JTklUSUFMX0RBVEFfXztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwb3MgPSB0aGlzLnByb3BzLnN0YXRpY0NvbnRleHQuZGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVwb3MsXG4gICAgICBsb2FkaW5nOiByZXBvcyA/IGZhbHNlIDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5mZXRjaFJlcG9zID0gdGhpcy5mZXRjaFJlcG9zLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnJlcG9zKSB7XG4gICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlByb3BzLm1hdGNoLnBhcmFtcy5pZCAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG4gIGZldGNoUmVwb3MobGFuZykge1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfSkpO1xuXG4gICAgdGhpcy5wcm9wcy5mZXRjaEluaXRpYWxEYXRhKGxhbmcpLnRoZW4oKHJlcG9zKSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICByZXBvcyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIHJlcG9zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiA8cD5MT0FESU5HPC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgIHtyZXBvcy5tYXAoKHsgbmFtZSwgb3duZXIsIHN0YXJnYXplcnNfY291bnQsIGh0bWxfdXJsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtuYW1lfSBzdHlsZT17eyBtYXJnaW46IDMwIH19PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aHRtbF91cmx9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPkB7b3duZXIubG9naW59PC9saT5cbiAgICAgICAgICAgICAgPGxpPntzdGFyZ2F6ZXJzX2NvdW50fSBzdGFyczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2snXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZWNsYXJlIGEgbmV3IHN0YXRlIHZhcmlhYmxlLCB3aGljaCB3ZSdsbCBjYWxsIFwiY291bnRcIlxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdW5kZXJsaW5lIHRleHQtc2t5LTQwMFwiPlxuICAgICAgICBIZWxsbyB3b3JsZCBmcm9tIFRhaWx3aW5kIVxuICAgICAgPC9oMT5cbiAgICAgIDxwPllvdSBjbGlja2VkIHtjb3VudH0gdGltZXM8L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9PkNsaWNrIG1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBsYW5ndWFnZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJBbGxcIixcbiAgICAgIHBhcmFtOiBcImFsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXG4gICAgICBwYXJhbTogXCJqYXZhc2NyaXB0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJ1YnlcIixcbiAgICAgIHBhcmFtOiBcInJ1YnlcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQeXRob25cIixcbiAgICAgIHBhcmFtOiBcInB5dGhvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhXCIsXG4gICAgICBwYXJhbTogXCJqYXZhXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtsYW5ndWFnZXMubWFwKCh7IG5hbWUsIHBhcmFtIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17cGFyYW19PlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICBhY3RpdmVTdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgdG89e2AvcG9wdWxhci8ke3BhcmFtfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19IHRvPXtgL2d1ZXN0YH0+XG4gICAgICAgICAge1wiY2h1bmsgbG9hZGVkIEd1ZXN0Q2hlY2tvdXRDb250YWluZXJcIn1cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlSGlzdG9yeSBhbGxvd3MgdG8gc2V0IHF1ZXJ5IHBhcmFtcyBieSBoaXN0b3J5LnB1c2gge3NlYXJjaDpzdHJpbmd9XG4vLyB1c2VMb2NhdGlvbiBhbGxvd3MgdG8gZ2V0IHF1ZXJ5IHBhcmFtcyBnZXQgc2VhcmNoIG9iamVjdCBhbmQgZG8gc29tZXRoaW5nIHdpdGggdGhlbVxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXBkYXRlUXVlcnlQcm9wZXJ0eSwgcmVhZFF1ZXJ5UHJvcGVydHksIGNyZWF0ZVF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZ1RvT2JqZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlck1ldGhvZHMnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGZ1bmN0aW9uIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgc2VhcmNoOiBxdWVyeVN0cmluZ1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGdldCB0aGUgc2VhcmNoIChxdWVyeSBzdHJpbmcpIGZyb20gdGhlIGxvY2F0aW9uXG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgLy8gMSBpZiBzZWFyY2ggb2JqZWN0IGV4aXN0cyB0aGVuIGNvbnZlcnQgc2VhcmNoIHN0cmluZyB0byBvYmplY3RcbiAgY29uc3QgcXVlcnlQYXJhbXNPYmogPSB1c2VNZW1vKCgpID0+IHF1ZXJ5U3RyaW5nVG9PYmplY3Qoc2VhcmNoKSwgW3NlYXJjaF0pO1xuXG4gIC8vIDIuMSB1cGRhdGUgbG9jYWwgc3RhdGUgZnJvbSB1cmwgcGFyYW1zIGlmIHBhcmFtcyBleGlzdHMgXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUocmVhZFF1ZXJ5UHJvcGVydHkoJ2xhbmd1YWdlJywgcXVlcnlQYXJhbXNPYmopIHx8IFwiXCIpXG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZShyZWFkUXVlcnlQcm9wZXJ0eSgnYWdlJywgcXVlcnlQYXJhbXNPYmopIHx8IFwiXCIpXG5cbiAgLy8gMi4yIHVwZGF0ZSBsb2NhbCBzdGF0ZSBiYXNlZCBvbiB1c2VyIHJhZGlvIGJ1dHRvbiBjbGljayBcbiAgY29uc3Qgb25WYWx1ZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXRcblxuICAgIC8vdXBkYXRlIHVybCBxdWVyeSBwYXJhbVxuICAgIGlmIChuYW1lID09PSAnZmF2X2xhbmd1YWdlJykge1xuICAgICAgLy91cGRhdGUgc3RhdGVcbiAgICAgIHNldExhbmd1YWdlKHZhbHVlKVxuICAgICAgY29uc3QgdXBkYXRlUXVlcnlPYmplY3QgPSB1cGRhdGVRdWVyeVByb3BlcnR5KCdsYW5ndWFnZScsIHZhbHVlLCBxdWVyeVBhcmFtc09iailcbiAgICAgIC8vdXBkYXRlIHVybCB3aXRoIG5ldyBzdHJpbmcgcXVlcnkgcHVzaGVkIHRvIGhpc3RvcnkgXG4gICAgICBzZXRRdWVyeVBhcmFtcyhjcmVhdGVRdWVyeVN0cmluZyh1cGRhdGVRdWVyeU9iamVjdCkpXG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnZmF2X2FnZScpIHtcbiAgICAgIC8vdXBkYXRlIHN0YXRlXG4gICAgICBzZXRBZ2UodmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVRdWVyeU9iamVjdCA9IHVwZGF0ZVF1ZXJ5UHJvcGVydHkoJ2FnZScsIHZhbHVlLCBxdWVyeVBhcmFtc09iailcbiAgICAgIC8vdXBkYXRlIHVybCB3aXRoIG5ldyBzdHJpbmcgcXVlcnkgcHVzaGVkIHRvIGhpc3RvcnkgXG4gICAgICBzZXRRdWVyeVBhcmFtcyhjcmVhdGVRdWVyeVN0cmluZyh1cGRhdGVRdWVyeU9iamVjdCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkhUTUxcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImh0bWxcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJIVE1MXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJodG1sXCI+SFRNTDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXtsYW5ndWFnZSA9PT0gXCJDU1NcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImNzc1wiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkNTU1wiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3NzXCI+Q1NTPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkphdmFTY3JpcHRcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImphdmFzY3JpcHRcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJKYXZhU2NyaXB0XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJqYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPnRlbGwgdXMgeW91ciBhZ2UgYnJhY2tldCBpZiB5b3UgZG9uYHQgbWluZDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXthZ2UgPT09IFwiYmVsb3cxOFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXZfYWdlXCIgdmFsdWU9XCJiZWxvdzE4XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJodG1sXCI+YmVsb3cgMTg8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17YWdlID09PSBcImFib3ZlMThcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmF2X2FnZVwiIHZhbHVlPVwiYWJvdmUxOFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3NzXCI+YWJvdmUgMTg8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtID5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcblxuZXhwb3J0IGNvbnN0IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT5cbiAgICBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImd1ZXN0Q2hlY2tvdXRcIiwgd2VicGFja1ByZWxvYWQ6IDEgKi8gXCIuL0d1ZXN0Q2hlY2tvdXRDb250YWluZXIvR3Vlc3RDaGVja291dENvbnRhaW5lclwiXG4gICAgKSxcbiAgbG9hZGluZzogKCkgPT4gPGRpdj57XCJsb2FkaW5nIGNvbXBvbmVudFwifTwvZGl2PixcblxuICBtb2R1bGVzOiBbXCJndWVzdENoZWNrb3V0XCJdLFxufSk7XG4vL21vZHVsZXM6IG9wdGlvbmFsIGFycmF5IG9mIHBhdGggdG8gbG9hZCBkYXRhIG9iamVjdCBmcm9tIHNlcnZlciBzdGF0aWMgZmlsZXMgYXMgc29tZS5qc29uIHRvIHlvdXIgY29tcG9uZW50XG4vL2xvYWRpbmc6IGNvbXBvbmVudCB0byBkaXNwbGF5IG9uY2UgaW1wb3J0IGNvbXBvbmVudCBsb2Fkc1xuIiwiLy8gY3JlYXRlcyBhIHF1ZXJ5IHN0cmluZyBmcm9tIHF1ZXJ5IG9iamVjdFxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgcXVlcnlPYmplY3RJbnQge1xuICAgIHBhZ2U6IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZGVwYXJ0bWVudD86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUXVlcnlQcm9wZXJ0eShwcm9wZXJ0eTogc3RyaW5nLCBxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICByZXR1cm4gcXVlcnlPYmplY3RbcHJvcGVydHldXG59O1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5UHJvcGVydHkocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgcXVlcnlPYmplY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+KSB7XG4gICAgbGV0IHVwZGF0ZSA9IHt9XG4gICAgaWYgKHByb3BlcnR5ICYmIHZhbHVlKSB1cGRhdGUgPSB7IFtwcm9wZXJ0eV06IHZhbHVlIH1cbiAgICByZXR1cm4geyAuLi5xdWVyeU9iamVjdCwgLi4udXBkYXRlIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVyeVN0cmluZyhxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICBjb25zdCBzdHI6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHF1ZXJ5T2JqZWN0KVxuICAgICAgICBpZiAocXVlcnlPYmplY3QuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKGAke2VuY29kZVVSSUNvbXBvbmVudChwcm9wKX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlPYmplY3RbcHJvcF0pfWApO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbn07XG5cbi8vIHR1cm5zIHF1ZXJ5IHN0cmluZyBiYWNrIGludG8gYW4gb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iamVjdChxdWVyeVN0cmluZzogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5T2JqZWN0ID0ge31cbiAgICBjb25zdCBVUkxTZWFyY2hQYXJhbXNPYmogPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBVUkxTZWFyY2hQYXJhbXNPYmopIHtcbiAgICAgICAgcXVlcnlPYmplY3Rba2V5XSA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBxdWVyeU9iamVjdDtcbn07IiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCBQYXJhbXNRdWVyeSBmcm9tICcuL2NvbXBvbmVudHMvUGFyYW1zUXVlcnknO1xuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIgfSBmcm9tIFwiLi9jb250YWluZXJzXCI7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3F1ZXJ5JyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IFBhcmFtc1F1ZXJ5LFxuICB9LFxuICB7XG4gICAgcGF0aDogYC9ndWVzdGAsXG4gICAgcGFnZVRpdGxlOiAnR3Vlc3QgQ2hlY2tvdXQnLFxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJycsXG4gICAgcGFnZURhdGFUZXN0OiAnZ3Vlc3QtY2hlY2tvdXQtcGFnZScsXG4gICAgY29tcG9uZW50OiBHdWVzdENoZWNrb3V0Q29udGFpbmVyLFxuICAgIHJvdXRlczogW10sXG4gICAgYW5hbHl0aWNzOiB7fSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9wdWxhci86aWQnLFxuICAgIGNvbXBvbmVudDogR3JpZCxcbiAgICBmZXRjaEluaXRpYWxEYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KCcvJykucG9wKCkpLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1jb2xvci1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==