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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/App */ "./src/shared/components/App.jsx");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");
/* harmony import */ var _serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../serverRenderingHelpers */ "./src/server/serverRenderingHelpers.tsx");
/**
 *  this file will render HTML markup with the container that react hydrates on id='app'
 *  <div id='app' dangerouslySetInnerHTML={{ __html: client }} />
 *
 * */











var ssrMiddleware = function ssrMiddleware(req, res, next) {
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url', req.url);
  //this goes through all routes in application;
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_8__["default"].find(function (route, i) {
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

    // Create a context for styled-components to insert inline CSS
    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__["ServerStyleSheet"]();
    node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url in promise response', req.url);

    // Render the part of the app that gets hydrated on the client
    var appHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__["StyleSheetManager"], {
      sheet: sheet.instance
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_4___default.a.Capture, {
      report: function report(moduleName) {
        return modules.push(moduleName);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
      location: req.url,
      context: context
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], null))))));
    var BodyContentAndScripts = function BodyContentAndScripts(_ref) {
      var client = _ref.client,
        modulesChunks = _ref.modulesChunks;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: client
        }
      }), Object(_serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_9__["getJsFiles"])(modulesChunks));
    };
    var serverHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyContentAndScripts, {
      client: appHtml,
      modulesChunks: modules
    }));
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(data), "</script>\n\n          <!-- this will add any css without you doing anything in client -->\n          <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN\" crossorigin=\"anonymous\">\n          <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL\" crossorigin=\"anonymous\"></script>\n          <!---->\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
  }).catch(next);
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



var path = __webpack_require__(/*! path */ "path");

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

/* you need to set public path so you can serve you static files as css files, images etc

express.static(path.join(process.cwd(), 'public')))

will produce path depending what env are you in for localhost will direct to your user directory as:

'Users/greg.gil/dev/REact-my-repo/server_side_rendering_react/SSR-ts/with_css_and_styled_components/public'
*/

app.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path.join(process.cwd(), 'public')));

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

/***/ "./src/shared/App.styles.ts":
/*!**********************************!*\
  !*** ./src/shared/App.styles.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _templateObject;

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n/*!!! those rules will override the rules set in server site markup html template !!!*/\n  \n  #app {\n    border: 1px dotted green;\n  }\n"])));
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

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
  }).catch(function (error) {
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
/* harmony import */ var _shared_App_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/App.styles */ "./src/shared/App.styles.ts");







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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_App_styles__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (_ref) {
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

/***/ "./src/shared/components/ParamsQuery.styles.ts":
/*!*****************************************************!*\
  !*** ./src/shared/components/ParamsQuery.styles.ts ***!
  \*****************************************************/
/*! exports provided: animationInDuration, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationInDuration", function() { return animationInDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var animationInDuration = 200;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "ParamsQuerystyles__Form",
  componentId: "sc-1jfhs7q-0"
})(["display:flex;flex-direction:column;position:relative;margin:10px;h3{color:green;font-style:italic;}label{padding-left:5px;}"]);

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
/* harmony import */ var _ParamsQuery_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ParamsQuery.styles */ "./src/shared/components/ParamsQuery.styles.ts");


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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ParamsQuery_styles__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Tell us what language do you prefer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
  }, "JavaScript")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Tell us your age bracket if you don`t mind"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
            dictionary: _objectSpread(_objectSpread(_objectSpread({}, zxcvbnCommonPackage.default.dictionary), zxcvbnEnPackage.default.dictionary), {}, {
              userInputs: userInputs || []
            }),
            graphs: zxcvbnCommonPackage.default.adjacencyGraphs,
            translations: zxcvbnEnPackage.default.translations
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


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
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

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLnN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ob01hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFyYW1zUXVlcnkuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXJhbXNRdWVyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRJbnB1dENoZWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZFN0cmVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlbHBlck1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1jb2xvci1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInNzck1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwibG9nZ2VyIiwiY29sb3IiLCJib2xkIiwibG9nIiwidXJsIiwiYWN0aXZlUm91dGUiLCJyb3V0ZXMiLCJmaW5kIiwicm91dGUiLCJpIiwibWF0Y2hQYXRoIiwicHJvbWlzZSIsImZldGNoSW5pdGlhbERhdGEiLCJwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiZGF0YSIsImNvbnRleHQiLCJtb2R1bGVzIiwic2hlZXQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwiYXBwSHRtbCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlN0eWxlU2hlZXRNYW5hZ2VyIiwiaW5zdGFuY2UiLCJMb2FkYWJsZSIsIkNhcHR1cmUiLCJyZXBvcnQiLCJtb2R1bGVOYW1lIiwicHVzaCIsIlN0YXRpY1JvdXRlciIsImxvY2F0aW9uIiwiQXBwIiwiQm9keUNvbnRlbnRBbmRTY3JpcHRzIiwiX3JlZiIsImNsaWVudCIsIm1vZHVsZXNDaHVua3MiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0SnNGaWxlcyIsInNlcnZlckh0bWwiLCJzZW5kIiwiY29uY2F0Iiwic2VyaWFsaXplIiwiY2F0Y2giLCJyZXF1aXJlIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInN0YXRpYyIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiUE9SVCIsInByZWxvYWRBbGwiLCJsaXN0ZW4iLCJpbmZvIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmlsZXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJmb3JFYWNoIiwibW9kdWxlIiwibWFwIiwiZmlsZSIsImluZGV4Iiwia2V5Iiwic3JjIiwidHlwZSIsImRlZmVyIiwiY2hhclNldCIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwicmVuZGVyIiwiQXBwU3R5bGUiLCJOYXZiYXIiLCJTd2l0Y2giLCJleGFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJSb3V0ZSIsInByb3BzIiwiX2V4dGVuZHMiLCJOb01hdGNoIiwiR3JpZCIsIl90aGlzIiwiY2FsbCIsIl9faXNCcm93c2VyX18iLCJzdGF0aWNDb250ZXh0Iiwic3RhdGUiLCJsb2FkaW5nIiwiZmV0Y2hSZXBvcyIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXRjaCIsInBhcmFtcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxhbmciLCJfdGhpczIiLCJzZXRTdGF0ZSIsIl90aGlzJHN0YXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJuYW1lIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJocmVmIiwibG9naW4iLCJIb21lIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb3VudCIsInNldENvdW50IiwiUGFzc3dvcmRJbnB1dCIsIm9uQ2xpY2siLCJsYW5ndWFnZXMiLCJwYXJhbSIsIk5hdkxpbmsiLCJhY3RpdmVTdHlsZSIsImZvbnRXZWlnaHQiLCJ0byIsImFuaW1hdGlvbkluRHVyYXRpb24iLCJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIndpdGhDb25maWciLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudElkIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJzZXRRdWVyeVBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwiX3VzZUxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJxdWVyeVBhcmFtc09iaiIsInVzZU1lbW8iLCJxdWVyeVN0cmluZ1RvT2JqZWN0IiwicmVhZFF1ZXJ5UHJvcGVydHkiLCJzZXRMYW5ndWFnZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYWdlIiwic2V0QWdlIiwib25WYWx1ZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsInVwZGF0ZVF1ZXJ5T2JqZWN0IiwidXBkYXRlUXVlcnlQcm9wZXJ0eSIsImNyZWF0ZVF1ZXJ5U3RyaW5nIiwiU3R5bGVkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZSIsImh0bWxGb3IiLCJfcmVmJGVtYWlsIiwiZW1haWwiLCJzZXRWYWx1ZSIsInN0cmVuZ3RoIiwic2V0U3RyZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJfcmVmMiIsIm5ld1ZhbHVlIiwiZ2V0UGFzc3dvcmRTdHJlbmd0aCIsInVzZUVmZmVjdCIsInNldE9wdGlvbnMiLCJfcmVmMyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2Iiwic2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMiLCJzdG9wIiwidXNlcklucHV0cyIsInp4Y3ZibkNvbW1vblBhY2thZ2UiLCJ6eGN2Ym5FblBhY2thZ2UiLCJzZW50IiwienhjdmJuT3B0aW9ucyIsImRpY3Rpb25hcnkiLCJfb2JqZWN0U3ByZWFkIiwiZGVmYXVsdCIsImdyYXBocyIsImFkamFjZW5jeUdyYXBocyIsInRyYW5zbGF0aW9ucyIsIl94IiwicGFzc3dvcmQiLCJfenhjdmJuIiwienhjdmJuIiwic2NvcmUiLCJHdWVzdENoZWNrb3V0Q29udGFpbmVyIiwiX2RlZmluZVByb3BlcnR5IiwibG9hZGVyIiwid2VicGFjayIsInByb3BlcnR5IiwicXVlcnlPYmplY3QiLCJ1cGRhdGUiLCJzdHIiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJVUkxTZWFyY2hQYXJhbXNPYmoiLCJVUkxTZWFyY2hQYXJhbXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJlcnIiLCJmIiwiUGFyYW1zUXVlcnkiLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRGF0YVRlc3QiLCJhbmFseXRpY3MiLCJz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Yy9QLHFFQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNyQix5RTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL3NlcnZlci9jaHVuay1cIiArIGNodW5rSWQgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2NodW5rcy9cIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqICB0aGlzIGZpbGUgd2lsbCByZW5kZXIgSFRNTCBtYXJrdXAgd2l0aCB0aGUgY29udGFpbmVyIHRoYXQgcmVhY3QgaHlkcmF0ZXMgb24gaWQ9J2FwcCdcbiAqICA8ZGl2IGlkPSdhcHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2xpZW50IH19IC8+XG4gKlxuICogKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2dnZXIgZnJvbSAnbm9kZS1jb2xvci1sb2cnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0LCBTdHlsZVNoZWV0TWFuYWdlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4uLy4uL3NoYXJlZC9yb3V0ZXMnO1xuaW1wb3J0IHsgZ2V0SnNGaWxlcyB9IGZyb20gJy4uL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMnO1xuXG5jb25zdCBzc3JNaWRkbGV3YXJlID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGxvZ2dlci5jb2xvcigneWVsbG93JykuYm9sZCgpLmxvZygncmVxdWVzdGVkIHJlcS51cmwnLCByZXEudXJsKTtcbiAgLy90aGlzIGdvZXMgdGhyb3VnaCBhbGwgcm91dGVzIGluIGFwcGxpY2F0aW9uO1xuICBjb25zdCBhY3RpdmVSb3V0ZSA9XG4gICAgcm91dGVzLmZpbmQoKHJvdXRlLCBpKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fTtcblxuICBsb2dnZXIuY29sb3IoJ3llbGxvdycpLmJvbGQoKS5sb2coJ2FjdGl2ZVJvdXRlJywgYWN0aXZlUm91dGUpO1xuXG4gIGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5mZXRjaEluaXRpYWxEYXRhXG4gICAgPyBhY3RpdmVSb3V0ZS5mZXRjaEluaXRpYWxEYXRhKHJlcS5wYXRoKVxuICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgcHJvbWlzZVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0geyBkYXRhIH07XG5cbiAgICAgIC8vIEFzIHdlIGFyZSBjb2RlIHNwbGl0dGluZywgd2UgbmVlZCB0byBmaW5kIG91dCB3aGljaCBjaHVua3NcbiAgICAgIC8vIHRoZSBTU1IgdXNlcyBzbyB0aGUgY2xpZW50IGNhbiB1c2UgdGhlbS4gPExvYWRhYmxlLkNhcHR1cmU+XG4gICAgICAvLyB0YWtlcyBhIHJlcG9ydCBwcm9wIHdoaWNoIGlzIGNhbGxlZCB3aGVuZXZlciBhIGNodW5rIGlzIHVzZWQuXG4gICAgICBjb25zdCBtb2R1bGVzID0gW107XG5cbiAgICAgIC8vIENyZWF0ZSBhIGNvbnRleHQgZm9yIHN0eWxlZC1jb21wb25lbnRzIHRvIGluc2VydCBpbmxpbmUgQ1NTXG4gICAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG5cbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpO1xuXG4gICAgICAvLyBSZW5kZXIgdGhlIHBhcnQgb2YgdGhlIGFwcCB0aGF0IGdldHMgaHlkcmF0ZWQgb24gdGhlIGNsaWVudFxuICAgICAgY29uc3QgYXBwSHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiBzdHlsZWQtY29tcG9uZW50cyBzdXBwb3J0cyBjb25jdXJyZW50IHNlcnZlciBzaWRlIHJlbmRlcmluZywgd2l0aCBzdHlsZXNoZWV0IHJlaHlkcmF0aW9uLiBcbiAgICAgICAgICAgIFRoZSBiYXNpYyBpZGVhIGlzIHRoYXQgZXZlcnl0aW1lIHlvdSByZW5kZXIgeW91ciBhcHAgb24gdGhlIHNlcnZlciwgXG4gICAgICAgICAgICB5b3UgY2FuIGNyZWF0ZSBhIFNlcnZlclN0eWxlU2hlZXQgYW5kIGFkZCBhIHByb3ZpZGVyIHRvIHlvdXIgUmVhY3QgdHJlZSxcbiAgICAgICAgICAgIHRoYXQgYWNjZXB0cyBzdHlsZXMgdmlhIGEgY29udGV4dCBBUEkuXG4gICAgICBcbiAgICAgICAgICAgIFN0eWxlU2hlZXRNYW5hZ2VyIHdyYXBwZXIgY3JlYXRlIGNvbnRleHQgdGhhdCBpcyB0aGUgcGFzc2VkIHRvIG1haW4gQXBwIGNvbXBvbmVudFxuICAgICAgICAgICovfVxuICAgICAgICAgIDxTdHlsZVNoZWV0TWFuYWdlciBzaGVldD17c2hlZXQuaW5zdGFuY2V9PlxuICAgICAgICAgICAgPExvYWRhYmxlLkNhcHR1cmUgcmVwb3J0PXsobW9kdWxlTmFtZSkgPT4gbW9kdWxlcy5wdXNoKG1vZHVsZU5hbWUpfT5cbiAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgICAgIDwvTG9hZGFibGUuQ2FwdHVyZT5cbiAgICAgICAgICA8L1N0eWxlU2hlZXRNYW5hZ2VyPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IEJvZHlDb250ZW50QW5kU2NyaXB0cyA9ICh7IGNsaWVudCwgbW9kdWxlc0NodW5rcyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPSdhcHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2xpZW50IH19IC8+XG4gICAgICAgICAgICB7Z2V0SnNGaWxlcyhtb2R1bGVzQ2h1bmtzKX1cbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzZXJ2ZXJIdG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxCb2R5Q29udGVudEFuZFNjcmlwdHMgY2xpZW50PXthcHBIdG1sfSBtb2R1bGVzQ2h1bmtzPXttb2R1bGVzfSAvPlxuICAgICAgKTtcblxuICAgICAgcmVzLnNlbmQoYFxuICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8IS0tIHRoaXMgaGFzIGJlZW4gZ2VuZXJhdGVkIGJ5IGNvbmZpZy9jbGllbnQvd2VicGFjay5kZXYuY29uZmlnIC0tPlxuICAgICAgICAgIDxzY3JpcHQ+d2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSAke3NlcmlhbGl6ZShkYXRhKX08L3NjcmlwdD5cblxuICAgICAgICAgIDwhLS0gdGhpcyB3aWxsIGFkZCBhbnkgY3NzIHdpdGhvdXQgeW91IGRvaW5nIGFueXRoaW5nIGluIGNsaWVudCAtLT5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4zLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LVQzYzZDb0lpNnVMckE5VG5lTkVvYTdSeG5hdHpqY0RTQ21HMU1YeFNSMUdBc1hFVi9Ed3d5a2MyTVBLOE0ySE5cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4zLjIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1DNlJ6c3luTTlrV0RyTU5lVDg3Ymg5NU9HTnlaUGhjVE5YajFOVzdSdUJDc3lOL28wamxwY1Y4UXlxNDZjRGZMXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8IS0tLS0+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAke3NlcnZlckh0bWx9XG4gICAgICA8L2h0bWw+XG4gICAgICBgKTtcbiAgICB9KVxuICAgIC5jYXRjaChuZXh0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNzck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gXCIuL21pZGRsZXdhcmUvc3NyXCI7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vKiB5b3UgbmVlZCB0byBzZXQgcHVibGljIHBhdGggc28geW91IGNhbiBzZXJ2ZSB5b3Ugc3RhdGljIGZpbGVzIGFzIGNzcyBmaWxlcywgaW1hZ2VzIGV0Y1xuXG5leHByZXNzLnN0YXRpYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycpKSlcblxud2lsbCBwcm9kdWNlIHBhdGggZGVwZW5kaW5nIHdoYXQgZW52IGFyZSB5b3UgaW4gZm9yIGxvY2FsaG9zdCB3aWxsIGRpcmVjdCB0byB5b3VyIHVzZXIgZGlyZWN0b3J5IGFzOlxuXG4nVXNlcnMvZ3JlZy5naWwvZGV2L1JFYWN0LW15LXJlcG8vc2VydmVyX3NpZGVfcmVuZGVyaW5nX3JlYWN0L1NTUi10cy93aXRoX2Nzc19hbmRfc3R5bGVkX2NvbXBvbmVudHMvcHVibGljJ1xuKi9cblxuYXBwLnVzZSgnL3B1YmxpYycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJykpKVxuXG5cbi8vIFJlbmRlcnMgdGhlIGFwcFxuYXBwLnVzZShzc3JNaWRkbGV3YXJlKTtcblxuY29uc3QgUE9SVCA9IDMzODk7XG4vLyBQcmVsb2FkIGFsbCB0aGUgY2h1bmtzIHRoZW4gc3RhcnQgdGhlIGFwcFxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xuICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgbm9kZSBzZXJ2ZXIgcnVubmluZyBvbjoke1BPUlR9YCk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuXG4vLyBHZXRzIGFsbCB0aGUgY2h1bmtlZCBKUyBmaWxlcyBhcyB3ZWxsIGFzIHRoZSBiYXNlICdjbGllbnQnIGZpbGUuICdjbGllbnQnXG4vLyBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIGxvYWRlZCBhcyBpdCBkZXBlbmRzIG9uIHRoZSBwcmV2IGZpbGVzLlxuXG50eXBlIFNjcmlwdFRhZ0tleXMgPSBQYXJ0aWFsPEhUTUxTY3JpcHRFbGVtZW50PjtcblxuLy90aGlzIGZpbGUgbmVlZHMgdG8gYmUgLnRzeCBub3QgdHMgY2F1c2UgaXQgcmV0dXJuIGh0bWwgZWxlbWVudCBcblxuXG5leHBvcnQgY29uc3QgZ2V0SnNGaWxlcyA9IChtb2R1bGVzID0gW10pOiBTY3JpcHRUYWdLZXlzW10gPT4ge1xuICBsZXQgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gY29uc29sZS5sb2coXCJjaHVuayBtb2R1bGVzOjo6XCIsIG1vZHVsZXMpO1xuICBbLi4ubW9kdWxlcywgXCJidW5kbGVcIl0uZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgZmlsZXMucHVzaChcbiAgICAgIGAke21vZHVsZSA9PT0gXCJidW5kbGVcIlxuICAgICAgICA/IC8vY2xpZW50L2J1bmRsZS5qcycgaGFzIHRvIG1hdGNoIG91dHB1dDogeyAuLi4sZmlsZW5hbWU6IFwiY2xpZW50L2J1bmRsZS5qc1wiLH0gZm9yIGRldiBzZXJ2ZXIgZGV2ZWxvcG1lbnRcbiAgICAgICAgXCIvY2xpZW50L2J1bmRsZVwiXG4gICAgICAgIDogYC9jbGllbnQvY2h1bmstJHttb2R1bGV9YFxuICAgICAgfS5qc2BcbiAgICApO1xuICB9KTtcblxuXG5cblxuICByZXR1cm4gZmlsZXMubWFwKChmaWxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBTY3JpcHRUYWdLZXlzID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgPHNjcmlwdCBzcmM9JHtmaWxlfT48L3NjcmlwdD46IGxvYWRpbmcuLi5gKTtcblxuICAgIHJldHVybiA8c2NyaXB0IGtleT17YHNjcmlwdDAke2luZGV4fWB9IHNyYz17ZmlsZX0gdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBkZWZlciBjaGFyU2V0PSd1dGYtOCc+PC9zY3JpcHQ+XG4gIH0pXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuLyohISEgdGhvc2UgcnVsZXMgd2lsbCBvdmVycmlkZSB0aGUgcnVsZXMgc2V0IGluIHNlcnZlciBzaXRlIG1hcmt1cCBodG1sIHRlbXBsYXRlICEhISovXG4gIFxuICAjYXBwIHtcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgZ3JlZW47XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyUmVwb3MgKGxhbmd1YWdlID0gJ2FsbCcpIHtcbiAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYClcblxuICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLnRoZW4oKHJlcG9zKSA9PiByZXBvcy5pdGVtcylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgTm9NYXRjaCBmcm9tICcuL05vTWF0Y2gnO1xuXG5pbXBvcnQgQXBwU3R5bGUgZnJvbSAnLi4vLi4vc2hhcmVkL0FwcC5zdHlsZXMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBcHBTdHlsZSAvPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgIGV4YWN0PXshIWV4YWN0fVxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFJvdXRlIHJlbmRlcj17KHByb3BzKSA9PiA8Tm9NYXRjaCB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgcmVwb3M7XG4gICAgLy9fX2lzQnJvd3Nlcl9fIGlkIGRlZmluZWQgaW4gd2VicGFjay5jb25maWcgYXMgZ2xvYmFsXG4gICAgaWYgKF9faXNCcm93c2VyX18pIHtcbiAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgICBkZWxldGUgd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9zID0gdGhpcy5wcm9wcy5zdGF0aWNDb250ZXh0LmRhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zLFxuICAgICAgbG9hZGluZzogcmVwb3MgPyBmYWxzZSA6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMuZmV0Y2hSZXBvcyA9IHRoaXMuZmV0Y2hSZXBvcy5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcykge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuICBmZXRjaFJlcG9zKGxhbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIHRoaXMucHJvcHMuZmV0Y2hJbml0aWFsRGF0YShsYW5nKS50aGVuKChyZXBvcykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgcmVwb3MsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCByZXBvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gPHA+TE9BRElORzwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3sgbWFyZ2luOiAzMCB9fT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2h0bWxfdXJsfT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgIDxsaT57c3RhcmdhemVyc19jb3VudH0gc3RhcnM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tICcuL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRJbnB1dENoZWNrJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gRGVjbGFyZSBhIG5ldyBzdGF0ZSB2YXJpYWJsZSwgd2hpY2ggd2UnbGwgY2FsbCBcImNvdW50XCJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+UGFzc3dvcmQgaW5wdXQgc3Rlbmd0aCB3ZWJwYWNrIGxhb2QgbGlicmF5cnk8L2gzPlxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz5cbiAgICAgIDxwPllvdSBjbGlja2VkIHtjb3VudH0gdGltZXM8L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9PkNsaWNrIG1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBsYW5ndWFnZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJBbGxcIixcbiAgICAgIHBhcmFtOiBcImFsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXG4gICAgICBwYXJhbTogXCJqYXZhc2NyaXB0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJ1YnlcIixcbiAgICAgIHBhcmFtOiBcInJ1YnlcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQeXRob25cIixcbiAgICAgIHBhcmFtOiBcInB5dGhvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhXCIsXG4gICAgICBwYXJhbTogXCJqYXZhXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtsYW5ndWFnZXMubWFwKCh7IG5hbWUsIHBhcmFtIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17cGFyYW19PlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICBhY3RpdmVTdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgdG89e2AvcG9wdWxhci8ke3BhcmFtfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19IHRvPXtgL2d1ZXN0YH0+XG4gICAgICAgICAge1wiY2h1bmsgbG9hZGVkIEd1ZXN0Q2hlY2tvdXRDb250YWluZXJcIn1cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uSW5EdXJhdGlvbiA9IDIwMFxuXG5pbnRlcmZhY2UgRm9ybVByb3BzIHtcbiAgcGFkZGluZz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybTxGb3JtUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjoxMHB4O1xuXG4gIGgzIHtcbiAgICBjb2xvcjpncmVlbjtcbiAgICBmb250LXN0eWxlOml0YWxpYztcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlSGlzdG9yeSBhbGxvd3MgdG8gc2V0IHF1ZXJ5IHBhcmFtcyBieSBoaXN0b3J5LnB1c2gge3NlYXJjaDpzdHJpbmd9XG4vLyB1c2VMb2NhdGlvbiBhbGxvd3MgdG8gZ2V0IHF1ZXJ5IHBhcmFtcyBnZXQgc2VhcmNoIG9iamVjdCBhbmQgZG8gc29tZXRoaW5nIHdpdGggdGhlbVxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXBkYXRlUXVlcnlQcm9wZXJ0eSwgcmVhZFF1ZXJ5UHJvcGVydHksIGNyZWF0ZVF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZ1RvT2JqZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlck1ldGhvZHMnXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9QYXJhbXNRdWVyeS5zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgZnVuY3Rpb24gc2V0UXVlcnlQYXJhbXMocXVlcnlTdHJpbmc6IHN0cmluZykge1xuICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gZ2V0IHRoZSBzZWFyY2ggKHF1ZXJ5IHN0cmluZykgZnJvbSB0aGUgbG9jYXRpb25cbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUxvY2F0aW9uKClcblxuICAvLyAxIGlmIHNlYXJjaCBvYmplY3QgZXhpc3RzIHRoZW4gY29udmVydCBzZWFyY2ggc3RyaW5nIHRvIG9iamVjdFxuICBjb25zdCBxdWVyeVBhcmFtc09iaiA9IHVzZU1lbW8oKCkgPT4gcXVlcnlTdHJpbmdUb09iamVjdChzZWFyY2gpLCBbc2VhcmNoXSk7XG5cbiAgLy8gMi4xIHVwZGF0ZSBsb2NhbCBzdGF0ZSBmcm9tIHVybCBwYXJhbXMgaWYgcGFyYW1zIGV4aXN0cyBcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShyZWFkUXVlcnlQcm9wZXJ0eSgnbGFuZ3VhZ2UnLCBxdWVyeVBhcmFtc09iaikgfHwgXCJcIilcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKHJlYWRRdWVyeVByb3BlcnR5KCdhZ2UnLCBxdWVyeVBhcmFtc09iaikgfHwgXCJcIilcblxuICAvLyAyLjIgdXBkYXRlIGxvY2FsIHN0YXRlIGJhc2VkIG9uIHVzZXIgcmFkaW8gYnV0dG9uIGNsaWNrIFxuICBjb25zdCBvblZhbHVlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGV2ZW50LnRhcmdldFxuXG4gICAgLy91cGRhdGUgdXJsIHF1ZXJ5IHBhcmFtXG4gICAgaWYgKG5hbWUgPT09ICdmYXZfbGFuZ3VhZ2UnKSB7XG4gICAgICAvL3VwZGF0ZSBzdGF0ZVxuICAgICAgc2V0TGFuZ3VhZ2UodmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVRdWVyeU9iamVjdCA9IHVwZGF0ZVF1ZXJ5UHJvcGVydHkoJ2xhbmd1YWdlJywgdmFsdWUsIHF1ZXJ5UGFyYW1zT2JqKVxuICAgICAgLy91cGRhdGUgdXJsIHdpdGggbmV3IHN0cmluZyBxdWVyeSBwdXNoZWQgdG8gaGlzdG9yeSBcbiAgICAgIHNldFF1ZXJ5UGFyYW1zKGNyZWF0ZVF1ZXJ5U3RyaW5nKHVwZGF0ZVF1ZXJ5T2JqZWN0KSlcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdmYXZfYWdlJykge1xuICAgICAgLy91cGRhdGUgc3RhdGVcbiAgICAgIHNldEFnZSh2YWx1ZSlcbiAgICAgIGNvbnN0IHVwZGF0ZVF1ZXJ5T2JqZWN0ID0gdXBkYXRlUXVlcnlQcm9wZXJ0eSgnYWdlJywgdmFsdWUsIHF1ZXJ5UGFyYW1zT2JqKVxuICAgICAgLy91cGRhdGUgdXJsIHdpdGggbmV3IHN0cmluZyBxdWVyeSBwdXNoZWQgdG8gaGlzdG9yeSBcbiAgICAgIHNldFF1ZXJ5UGFyYW1zKGNyZWF0ZVF1ZXJ5U3RyaW5nKHVwZGF0ZVF1ZXJ5T2JqZWN0KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuRm9ybT5cbiAgICAgIDxoMz5UZWxsIHVzIHdoYXQgbGFuZ3VhZ2UgZG8geW91IHByZWZlcjwvaDM+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiSFRNTFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiaHRtbFwiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkhUTUxcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImh0bWxcIj5IVE1MPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkNTU1wifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiY3NzXCIgbmFtZT1cImZhdl9sYW5ndWFnZVwiIHZhbHVlPVwiQ1NTXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjc3NcIj5DU1M8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiSmF2YVNjcmlwdFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiamF2YXNjcmlwdFwiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImphdmFTY3JpcHRcIj5KYXZhU2NyaXB0PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzPlRlbGwgdXMgeW91ciBhZ2UgYnJhY2tldCBpZiB5b3UgZG9uYHQgbWluZDwvaDM+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17YWdlID09PSBcImJlbG93MThcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmF2X2FnZVwiIHZhbHVlPVwiYmVsb3cxOFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaHRtbFwiPmJlbG93IDE4PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2FnZSA9PT0gXCJhYm92ZTE4XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cImZhdl9hZ2VcIiB2YWx1ZT1cImFib3ZlMThcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNzc1wiPmFib3ZlIDE4PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkLkZvcm0+XG4gICk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucywgZ2V0UGFzc3dvcmRTdHJlbmd0aCB9IGZyb20gJy4uL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRTdHJlbmd0aCdcblxuXG5cbmludGVyZmFjZSBQYXNzd29yZElucHV0UHJvcHMge1xuICAgIGVtYWlsPzogc3RyaW5nXG59XG5cbmNvbnN0IFBhc3N3b3JkSW5wdXQgPSAoe1xuICAgIGVtYWlsID0gJycsXG59OiBQYXNzd29yZElucHV0UHJvcHMpID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzdHJlbmd0aCwgc2V0U3RyZW5ndGhdID0gdXNlU3RhdGUoJycpXG5cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG5ld1ZhbHVlIH0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuXG4gICAgICAgIHNldFN0cmVuZ3RoKGdldFBhc3N3b3JkU3RyZW5ndGgobmV3VmFsdWUpKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNldE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyhbZW1haWxdKVxuICAgICAgICB9XG4gICAgICAgIHNldE9wdGlvbnMoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgWW91ciBwYXNzd29yZCBzdHJlbmd0aDogPHN0cm9uZyBkYXRhLXRlc3Q9J3Bhc3N3b3JkLWlucHV0LXN0cmVuZ3RoJz57c3RyZW5ndGh9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dCIsImltcG9ydCB7IHp4Y3ZibiwgenhjdmJuT3B0aW9ucyB9IGZyb20gJ0B6eGN2Ym4tdHMvY29yZSdcblxuZXhwb3J0IGNvbnN0IHNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zID0gYXN5bmMgKHVzZXJJbnB1dHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgenhjdmJuQ29tbW9uUGFja2FnZSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInp4Y3ZibkNvbW1vblBhY2thZ2VcIiAqLyAnQHp4Y3Zibi10cy9sYW5ndWFnZS1jb21tb24nKVxuICAgIGNvbnN0IHp4Y3ZibkVuUGFja2FnZSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInp4Y3ZibkVuUGFja2FnZVwiICovICdAenhjdmJuLXRzL2xhbmd1YWdlLWVuJylcblxuICAgIHp4Y3Zibk9wdGlvbnMuc2V0T3B0aW9ucyh7XG4gICAgICAgIGRpY3Rpb25hcnk6IHtcbiAgICAgICAgICAgIC4uLnp4Y3ZibkNvbW1vblBhY2thZ2UuZGVmYXVsdC5kaWN0aW9uYXJ5LFxuICAgICAgICAgICAgLi4uenhjdmJuRW5QYWNrYWdlLmRlZmF1bHQuZGljdGlvbmFyeSxcbiAgICAgICAgICAgIHVzZXJJbnB1dHM6IHVzZXJJbnB1dHMgfHwgW11cbiAgICAgICAgfSxcbiAgICAgICAgZ3JhcGhzOiB6eGN2Ym5Db21tb25QYWNrYWdlLmRlZmF1bHQuYWRqYWNlbmN5R3JhcGhzLFxuICAgICAgICB0cmFuc2xhdGlvbnM6IHp4Y3ZibkVuUGFja2FnZS5kZWZhdWx0LnRyYW5zbGF0aW9uc1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXNzd29yZFN0cmVuZ3RoID0gKHBhc3N3b3JkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghcGFzc3dvcmQpIHJldHVybiAnJ1xuXG4gICAgY29uc3QgeyBzY29yZSB9ID0genhjdmJuKHBhc3N3b3JkKVxuXG4gICAgLy8genhjdmJuIGdpdmVzIHVzIGFuIGludGVnZXIgc2NvcmUgb3V0IG9mIDQgKGluY2x1ZGluZyAwIG91dCBvZiA0KVxuICAgIHN3aXRjaCAoc2NvcmUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gJ1dlYWsnXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICdNZWRpdW0nXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnU3Ryb25nJ1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuXG5leHBvcnQgY29uc3QgR3Vlc3RDaGVja291dENvbnRhaW5lciA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PlxuICAgIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZ3Vlc3RDaGVja291dFwiLCB3ZWJwYWNrUHJlbG9hZDogMSAqLyBcIi4vR3Vlc3RDaGVja291dENvbnRhaW5lci9HdWVzdENoZWNrb3V0Q29udGFpbmVyXCJcbiAgICApLFxuICBsb2FkaW5nOiAoKSA9PiA8ZGl2PntcImxvYWRpbmcgY29tcG9uZW50XCJ9PC9kaXY+LFxuXG4gIG1vZHVsZXM6IFtcImd1ZXN0Q2hlY2tvdXRcIl0sXG59KTtcbi8vbW9kdWxlczogb3B0aW9uYWwgYXJyYXkgb2YgcGF0aCB0byBsb2FkIGRhdGEgb2JqZWN0IGZyb20gc2VydmVyIHN0YXRpYyBmaWxlcyBhcyBzb21lLmpzb24gdG8geW91ciBjb21wb25lbnRcbi8vbG9hZGluZzogY29tcG9uZW50IHRvIGRpc3BsYXkgb25jZSBpbXBvcnQgY29tcG9uZW50IGxvYWRzXG4iLCIvLyBjcmVhdGVzIGEgcXVlcnkgc3RyaW5nIGZyb20gcXVlcnkgb2JqZWN0XG5cblxuZXhwb3J0IGludGVyZmFjZSBxdWVyeU9iamVjdEludCB7XG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBkZXBhcnRtZW50Pzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRRdWVyeVByb3BlcnR5KHByb3BlcnR5OiBzdHJpbmcsIHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIHJldHVybiBxdWVyeU9iamVjdFtwcm9wZXJ0eV1cbn07XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXVlcnlQcm9wZXJ0eShwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICBsZXQgdXBkYXRlID0ge31cbiAgICBpZiAocHJvcGVydHkgJiYgdmFsdWUpIHVwZGF0ZSA9IHsgW3Byb3BlcnR5XTogdmFsdWUgfVxuICAgIHJldHVybiB7IC4uLnF1ZXJ5T2JqZWN0LCAuLi51cGRhdGUgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5U3RyaW5nKHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIGNvbnN0IHN0cjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcXVlcnlPYmplY3QpXG4gICAgICAgIGlmIChxdWVyeU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3ApfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeU9iamVjdFtwcm9wXSl9YCk7XG4gICAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xufTtcblxuLy8gdHVybnMgcXVlcnkgc3RyaW5nIGJhY2sgaW50byBhbiBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqZWN0KHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnlPYmplY3QgPSB7fVxuICAgIGNvbnN0IFVSTFNlYXJjaFBhcmFtc09iaiA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIFVSTFNlYXJjaFBhcmFtc09iaikge1xuICAgICAgICBxdWVyeU9iamVjdFtrZXldID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5T2JqZWN0O1xufTsiLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IFBhcmFtc1F1ZXJ5IGZyb20gJy4vY29tcG9uZW50cy9QYXJhbXNRdWVyeSc7XG5pbXBvcnQgeyBmZXRjaFBvcHVsYXJSZXBvcyB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgR3Vlc3RDaGVja291dENvbnRhaW5lciB9IGZyb20gXCIuL2NvbnRhaW5lcnNcIjtcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcXVlcnknLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogUGFyYW1zUXVlcnksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBgL2d1ZXN0YCxcbiAgICBwYWdlVGl0bGU6ICdHdWVzdCBDaGVja291dCcsXG4gICAgcGFnZURlc2NyaXB0aW9uOiAnJyxcbiAgICBwYWdlRGF0YVRlc3Q6ICdndWVzdC1jaGVja291dC1wYWdlJyxcbiAgICBjb21wb25lbnQ6IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIsXG4gICAgcm91dGVzOiBbXSxcbiAgICBhbmFseXRpY3M6IHt9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9wb3B1bGFyLzppZCcsXG4gICAgY29tcG9uZW50OiBHcmlkLFxuICAgIGZldGNoSW5pdGlhbERhdGE6IChwYXRoID0gJycpID0+IGZldGNoUG9wdWxhclJlcG9zKHBhdGguc3BsaXQoJy8nKS5wb3AoKSksXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAenhjdmJuLXRzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1jb2xvci1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==