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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: queryParamsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryParamsReducer", function() { return queryParamsReducer; });
/* eslint-disable no-param-reassign */
var queryParamsReducer = function queryParamsReducer(acc, action) {
  if (action && acc === '') {
    acc += "?".concat(action);
  } else if (action) {
    acc += "&".concat(action);
  }
  return acc;
};

/***/ }),

/***/ "./src/server/middleware/proxy.js":
/*!****************************************!*\
  !*** ./src/server/middleware/proxy.js ***!
  \****************************************/
/*! exports provided: stubDashboardProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stubDashboardProxy", function() { return stubDashboardProxy; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);
//url module is part of node



/**
 * About mod_proxy and mod_alias

Redirection is used when the requested URL is somewhere else, and the browser itself will connect to the other server.
Proxying is used when the requested URL is somewhere else, but the server will do the connection. In this case the browser will even not be aware of that.
Since you want to have access to have access to some applications from the outside of your local network
proxying is more appropriate, so you don't have to open and forward multiple ports from the outside.
Proxying is generally used to pass requests to other HTTP servers
Redirect will redirect your request to the same domain as  <Redirect to={`${confirmationError}?type=credit`} />
 * 
 * */
// proxy('http://localhost:3011' this has to be main domain
var stubDashboardProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3011', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    //this redirects to main domain 'http://localhost:3011'
    return url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path;

    //this what you redirect to as http://localhost:3011/basket
    return '/basket';
  }
});

/***/ }),

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/App */ "./src/shared/components/App.jsx");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_Redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/Redux/store */ "./src/shared/Redux/store.js");










var ssrMiddleware = function ssrMiddleware(req, res, next) {
  node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.color('yellow').bold().log('requested req.url', req.url);

  /******** Redux server setup ******/

  // set initial store to be passed to client in window._data
  var initialState = {
    data: []
  };

  //U can not use BrowserRouter cause the routes are processed on server not a client
  var memoryHistory = Object(history__WEBPACK_IMPORTED_MODULE_8__["createMemoryHistory"])({
    initialEntries: [req.url]
  });
  var store = Object(_shared_Redux_store__WEBPACK_IMPORTED_MODULE_9__["default"])(memoryHistory, initialState);

  /******/

  // Waits for asynchronous actions like API calls
  // before rendering the HTML
  var waitForAsyncActions = Object(_shared_routes__WEBPACK_IMPORTED_MODULE_7__["processRoutes"])(undefined, store, req);
  Promise.all(waitForAsyncActions).then(function () {
    node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.color('yellow').bold().log('requested req.url in promise response', req.url);

    //get store that is passed to __INITIAL_REDUX_DATA
    var state = store.getState();
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
      location: req.url,
      context: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_App__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
    res.send("\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <title>SSR with RR</title>\n          </head>\n  \n          <body>\n            <div id=\"app\">".concat(markup, "</div>\n          </body>\n          <!-- below only works with dev-server is the hydrate react part that melts bundle.js into sever output\n          \n          from :\n\n          output: {\n            path: path.join(__dirname, '../../', 'src'),\n            filename: 'bundle.js',\n          },\n          \n          -->\n         <script   type=\"text/javascript\" src=\"/bundle.js\" defer></script>\n        </html>\n      "));
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
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_middleware_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/middleware/ssr */ "./src/server/middleware/ssr.js");
/* harmony import */ var _server_middleware_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/middleware/proxy */ "./src/server/middleware/proxy.js");





var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.set('views', path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '/views'));
/*
it is important to set dist as static folder for express server 
without this the <script src="dist/bundle.js"> will be treated as link not a file
*/
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('dist'));

//manipulate routes

app.use('/login', function (req, res, next) {
  console.log('SSR login route');
  next();
});

// Dashboard stubs
app.use('/dashboard', _server_middleware_proxy__WEBPACK_IMPORTED_MODULE_4__["stubDashboardProxy"]);

// Renders the app
app.use(_server_middleware_ssr__WEBPACK_IMPORTED_MODULE_3__["default"]);
var PORT = 3389;
app.listen(PORT, function () {
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.info("server web running on port:".concat(PORT));
});
/* WEBPACK VAR INJECTION */}.call(this, "src/server"))

/***/ }),

/***/ "./src/shared/Redux/actions/actions.js":
/*!*********************************************!*\
  !*** ./src/shared/Redux/actions/actions.js ***!
  \*********************************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/shared/api.js");




// 2 functions need to be supplied (classic thunk function)
var fetchData = function fetchData(afterLastSlash) {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_api__WEBPACK_IMPORTED_MODULE_2__["fetchPopularRepos"])(afterLastSlash[0]);
          case 2:
            res = _context.sent;
            dispatch({
              type: "STORE_DATA",
              payload: {
                data: res
              }
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/shared/Redux/reducers/dataReducer.js":
/*!**************************************************!*\
  !*** ./src/shared/Redux/reducers/dataReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialState = [];
var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "STORE_DATA":
      return action.payload.data;
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dataReducer);

//structure
//dataReducer = []
/*
  data:dataReducer
*/

/***/ }),

/***/ "./src/shared/Redux/reducers/index.js":
/*!********************************************!*\
  !*** ./src/shared/Redux/reducers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_dataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/dataReducer */ "./src/shared/Redux/reducers/dataReducer.js");




/**
 * @param {} history either browser or memory history(server site static router)
 */
var createRootReducer = function createRootReducer(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    data: _reducers_dataReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

/***/ }),

/***/ "./src/shared/Redux/store.js":
/*!***********************************!*\
  !*** ./src/shared/Redux/store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/shared/Redux/reducers/index.js");





function configureStore(browserOrMemoryHistory, preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(browserOrMemoryHistory),
  // root reducer with router state
  preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(browserOrMemoryHistory),
  // for dispatching history actions
  redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));
  return store;
}

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
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_1__);


function fetchPopularRepos() {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var encodedURI = encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(language, "&sort=stars&order=desc&type=Repositories"));
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color("yellow").bold().log("GET:", encodedURI);
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
          exact: exact,
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

/***/ "./src/shared/components/Field/Field.jsx":
/*!***********************************************!*\
  !*** ./src/shared/components/Field/Field.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);



var _excluded = ["type", "id", "name", "label", "className", "sectionStyling", "hintText"];
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */


var Field = function Field(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    id = _ref.id,
    name = _ref.name,
    label = _ref.label,
    className = _ref.className,
    sectionStyling = _ref.sectionStyling,
    hintText = _ref.hintText,
    otherAttr = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);
  var fieldName = name || id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "form-group ".concat(sectionStyling)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: id,
    className: "form-group__label"
  }, label, hintText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "form-group__hint"
  }, hintText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group__input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    "aria-required": true,
    type: type,
    name: fieldName,
    id: id,
    className: "form-group__input".concat(className ? " ".concat(className) : '')
  }, otherAttr))));
};
Field.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  hintText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  id: function id(props, propName, componentName) {
    // Apply `isRequired` conditionally to fields which aren't `hidden`
    var propValue = props[propName];
    if (!propValue) {
      return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(propValue, "`."));
    }
    if (typeof propValue !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(propValue), "` supplied to `").concat(componentName, "`, expected `string`."));
    }
  },
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  otherAttr: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string),
  sectionStyling: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./src/shared/components/Grid.jsx":
/*!****************************************!*\
  !*** ./src/shared/components/Grid.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/actions/actions */ "./src/shared/Redux/actions/actions.js");




//thunk redux action

var Grid = function Grid(props) {
  //this state has been generated in server site (ssr.js)
  var repos = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.data;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
    repo_name = _useParams.repo_name;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //check if data has been already fetched on server
    //in this case since state.data is shared between routes
    //u need check if global webpack const is __isBrowser__ set
    if (false) {}
  }, [repo_name, dispatch]); //check based on param change

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, repos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    }
  }, repos.map(function (_ref) {
    var name = _ref.name,
      owner = _ref.owner,
      stargazers_count = _ref.stargazers_count,
      html_url = _ref.html_url;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: name,
      style: {
        margin: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: html_url
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "@", owner.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, stargazers_count, " stars")));
  })));
};
Grid.getInitialActions = function (_ref2) {
  var req = _ref2.req,
    match = _ref2.match;
  var _req$headers = req.headers,
    headers = _req$headers === void 0 ? {} : _req$headers;
  //this does not work for me popular/:id = req.param.id
  var textAfterLastSlash = req.url.match(/[^\/]+$/);
  // const { cookie = null } = headers;

  //pass cookie to first thunk method
  return Object(_Redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(textAfterLastSlash);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "this routes is to show that hooks take over in browser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, "Click me"));
}

/***/ }),

/***/ "./src/shared/components/Login/Login.jsx":
/*!***********************************************!*\
  !*** ./src/shared/components/Login/Login.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Field/Field */ "./src/shared/components/Field/Field.jsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers */ "./src/reducers/index.js");




var emailField = function emailField(emailAddress) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "email",
    id: "email",
    name: "logonId",
    label: "Email address",
    defaultValue: emailAddress,
    autoComplete: "email",
    maxLength: "60",
    "data-track-config": "trolleySignInField_errorMessage|Trolley SignIn Field Error Message",
    autoFocus: true
  });
};
var signedInUserEmailField = function signedInUserEmailField(emailAddress) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "xs-row xs-12--none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "xs-stack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "data-e2e": "email-address-label"
  }, emailAddress), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    kind: "link",
    type: "submit",
    formAction: "?logOff=true&redirectToReferer=true",
    formNoValidate: true,
    "data-e2e": "not-you-link",
    id: "notYouLink",
    "data-track-click": "trolleySignIn_notYou|TrolleySignIn Not You"
  }, "Not you?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "hidden",
    name: "logonId",
    id: "email",
    defaultValue: emailAddress
  }));
};
var Login = function Login(_ref) {
  var logonId = _ref.logonId,
    logonPassword = _ref.logonPassword,
    error = _ref.error,
    _ref$recognised = _ref.recognised,
    recognised = _ref$recognised === void 0 ? false : _ref$recognised,
    _ref$pageName = _ref.pageName,
    pageName = _ref$pageName === void 0 ? 'unknown' : _ref$pageName,
    _ref$emailAddress = _ref.emailAddress,
    emailAddress = _ref$emailAddress === void 0 ? '' : _ref$emailAddress,
    successUrl = _ref.successUrl,
    _ref$brand = _ref.brand,
    brand = _ref$brand === void 0 ? 'arg' : _ref$brand,
    _ref$allowGuest = _ref.allowGuest,
    allowGuest = _ref$allowGuest === void 0 ? false : _ref$allowGuest;
  var registerAndGuestOnTop = true;
  var queryParams = [recognised ? 'logOff=true' : null, allowGuest ? 'allowGuest=true' : null, "pageName=".concat(pageName), successUrl ? "successUrl=".concat(encodeURIComponent(successUrl)) : null];
  var queryString = queryParams.reduce(_reducers__WEBPACK_IMPORTED_MODULE_3__["queryParamsReducer"], '');
  var registerLink = "/register".concat(queryString);
  var guestCheckoutLink = "".concat(successUrl).concat(successUrl && successUrl.indexOf('?') > -1 ? '&' : '?', "guest=true");
  var apiError = error && error('trolleySignInSystem_errorMessage|Trolley SignIn System Error Message');
  var passwordFieldHintText = apiError && 'Hint - this includes 2 letters and 1 number' || '';
  var headingText = recognised ? 'Please sign in again' : 'Sign in';
  var getBrandClassName = function getBrandClassName(currentBrand) {
    return currentBrand === 'arg' ? '' : " ".concat(currentBrand, "-variation");
  };
  var RegisteredSection = function RegisteredSection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      "data-test": "forms-registered-user-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "h2 text-center bold",
      "data-e2e": "login-page-title"
    }, headingText), apiError, brand === 'hab' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center"
    }, "Sign in to your Argos account or create a new one, then we'll take you to check out."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      method: "post",
      noValidate: true,
      className: "form-group"
    }, !recognised && emailField(logonId), recognised && emailAddress && signedInUserEmailField(emailAddress), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "password",
      id: "password",
      name: "logonPassword",
      label: "Password",
      defaultValue: logonPassword,
      autoComplete: "password",
      maxLength: "60",
      className: "hasShowHide".concat(getBrandClassName(brand)),
      "data-track-config": "trolleySignInField_errorMessage|Trolley SignIn Field Error Message",
      hintText: passwordFieldHintText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      kind: "link",
      as: "a",
      href: "/forgotten-password",
      className: "button-link",
      "data-e2e": "forgot-password-link",
      "data-track-click": "trolleySignIn_forgotPassword|TrolleySignIn Forgot Password"
    }, "Forgotten your password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      hasLoading: true,
      "data-e2e": "login-submit-button",
      "data-track-submit": "trolleySignIn_signIn|TrolleySignIn SignIn",
      full: true
    }, "Sign in securely")));
  };
  var RegisterAndGuestSection = function RegisterAndGuestSection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      "data-test": "forms-new-customers-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "h2 text-center bold",
      "data-e2e": "login-page-title"
    }, "New Customers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "form-cta font-bold text-center"
    }, "newCustomer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-customer-cta-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      hasLoading: true,
      as: "a",
      kind: "secondary",
      "data-btn-with-loading": true,
      "data-e2e": "register-link",
      href: registerLink,
      full: true,
      "data-track-click": "trolleySignIn_register|TrolleySignin Register"
    }, "Create an account"), allowGuest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      as: "a",
      kind: "secondary",
      hasLoading: true,
      "data-btn-with-loading": true,
      "data-e2e": "guest-checkout-link",
      href: guestCheckoutLink,
      full: true,
      "data-track-click": "trolleySignIn_interaction|Trolley SignIn Continue As a Guest Button|trolley:accountSignIn:continueasaguestbutton"
    }, "Continue as a guest"))));
  };
  var LoginForms = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RegisterAndGuestSection, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RegisteredSection, null)];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-test": "login-forms"
  }, !registerAndGuestOnTop ? LoginForms.reverse() : LoginForms);
};
Login.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  logonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  logonPassword: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  recognised: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  emailAddress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pageName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  successUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['arg', 'hab', 'tuc']),
  allowGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

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
  /*
    those link have to be a tags or Link cause the page has to be reloaded in order to work in server site 
  */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 'home'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 'routesWithRedux'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/routes-with-redux"
  }, "routes with Redux Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 'nestedRoutes'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/nested-routes"
  }, "nested Routes Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 'switchWithNestedRoutes'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/switch-with-nested-routes"
  }, "switch-with-nested-routes Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 'switchWithNestedRoutes'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/login"
  }, "LOGIN page done for Cypress testing"))));
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

/***/ "./src/shared/components/RoutesWithRedux.jsx":
/*!***************************************************!*\
  !*** ./src/shared/components/RoutesWithRedux.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_nestedRoutesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/nestedRoutesData */ "./src/shared/data/nestedRoutesData.js");


//sample data and components

function Home() {
  // this hook returns up to now url for nested routes
  // in this case the parent route is /nested-routes
  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
    upToNowUrl = _useRouteMatch.url;
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
  var TopLanguagesNavBar = function TopLanguagesNavBar() {
    return languages.map(function (_ref) {
      var name = _ref.name,
        param = _ref.param;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: param
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/popular/".concat(param)
      }, name));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Languages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopLanguagesNavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Client NaV link with redux example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/popular/javascript"
  }, "Nav Link javascript with Redux"));
}

/***/ }),

/***/ "./src/shared/components/routeNesting/NestedRoutes.jsx":
/*!*************************************************************!*\
  !*** ./src/shared/components/routeNesting/NestedRoutes.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_Topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/Topic */ "./src/shared/components/routeNesting/comps/Topic.jsx");
/* harmony import */ var _data_nestedRoutesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/nestedRoutesData */ "./src/shared/data/nestedRoutesData.js");


//sample data and components


function Home() {
  // this hook returns up to now url for nested routes
  // in this case the parent route is /nested-routes
  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
    path = _useRouteMatch.path,
    upToNowUrl = _useRouteMatch.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "nested routes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, _data_nestedRoutesData__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref) {
    var description = _ref.description,
      topicRoute = _ref.topicRoute;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: topicRoute
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "".concat(upToNowUrl, "/").concat(topicRoute)
    }, description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(path, "/:topicId")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_Topic__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/***/ }),

/***/ "./src/shared/components/routeNesting/Switch_Exact_Nested_Routes.jsx":
/*!***************************************************************************!*\
  !*** ./src/shared/components/routeNesting/Switch_Exact_Nested_Routes.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchRoutes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/Users */ "./src/shared/components/routeNesting/comps/Users.jsx");



var currentRouteHere = "/switch-with-nested-routes";
function SwitchRoutes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "example of switch statement with exact route "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "<Route path=\"", "".concat(currentRouteHere, "/users"), "\" exact /> ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), " has to be exact if it woun t be it would fall to the next create route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "ab1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "".concat(currentRouteHere, "/users")
  }, "/users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "ab2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "".concat(currentRouteHere, "/users/create")
  }, "/users/create"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(currentRouteHere, "/users"),
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_Users__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(currentRouteHere, "/users/create")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_Users__WEBPACK_IMPORTED_MODULE_2__["CreateUser"], null))));
}

/***/ }),

/***/ "./src/shared/components/routeNesting/comps/Topic.jsx":
/*!************************************************************!*\
  !*** ./src/shared/components/routeNesting/comps/Topic.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_nestedRoutesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/nestedRoutesData */ "./src/shared/data/nestedRoutesData.js");



var Topic = function Topic() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
    topicId = _useParams.topicId;
  var topic = _data_nestedRoutesData__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (_ref) {
    var topicRoute = _ref.topicRoute;
    return topicRoute === topicId;
  });
  var resources = topic.resources;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, resources.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, resources.description));
};
/* harmony default export */ __webpack_exports__["default"] = (Topic);

/***/ }),

/***/ "./src/shared/components/routeNesting/comps/Users.jsx":
/*!************************************************************!*\
  !*** ./src/shared/components/routeNesting/comps/Users.jsx ***!
  \************************************************************/
/*! exports provided: default, CreateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SampleUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SampleUsers = function SampleUsers() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Greg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Stefano"));
};
var CreateUser = function CreateUser() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "this is sample text for CreateUser");
};


/***/ }),

/***/ "./src/shared/data/nestedRoutesData.js":
/*!*********************************************!*\
  !*** ./src/shared/data/nestedRoutesData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nestedRoutesData = [{
  description: "how the <Link> tag works ?",
  topicRoute: "linkTag",
  resources: {
    name: "<Link> tag",
    description: "Link tag it will always work on client and does not reload the page"
  }
}, {
  description: "how the the <a> tags work ?",
  topicRoute: "aTag",
  resources: {
    name: "<a> tag",
    description: "a tag will always reload the page causing server to re-run"
  }
}, {
  description: "const {url} =useRouteMatch() hook",
  topicRoute: "read-url-parameters",
  resources: {
    name: "const {url} = useRouteMatch()",
    description: "{url} used for nested links, cause ti will return something as: topics/react-router"
  }
}, {
  description: "const {path} =useRouteMatch() hook",
  topicRoute: "read-path-parameters",
  resources: {
    name: "const {path} = useRouteMatch()",
    description: "{path} used for nested routes, cause it will retain param as  path/:topicId"
  }
}, {
  description: "const {topicId} = useParams() hook",
  topicRoute: "read-params",
  resources: {
    name: "const {topicId} = useParams()",
    description: "used for getting /:topicId param "
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (nestedRoutesData);

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: processRoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processRoutes", function() { return processRoutes; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ "./src/shared/components/Home.jsx");
/* harmony import */ var _components_routeNesting_NestedRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/routeNesting/NestedRoutes */ "./src/shared/components/routeNesting/NestedRoutes.jsx");
/* harmony import */ var _components_routeNesting_Switch_Exact_Nested_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/routeNesting/Switch_Exact_Nested_Routes */ "./src/shared/components/routeNesting/Switch_Exact_Nested_Routes.jsx");
/* harmony import */ var _components_RoutesWithRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RoutesWithRedux */ "./src/shared/components/RoutesWithRedux.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Grid */ "./src/shared/components/Grid.jsx");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login/Login */ "./src/shared/components/Login/Login.jsx");







var routes = [{
  path: '/',
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/nested-routes',
  component: _components_routeNesting_NestedRoutes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/routes-with-redux',
  component: _components_RoutesWithRedux__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/switch-with-nested-routes',
  component: _components_routeNesting_Switch_Exact_Nested_Routes__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/popular/:repo_name',
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: '/login',
  component: _components_Login_Login__WEBPACK_IMPORTED_MODULE_6__["default"]
}];

// Recursively fetch data
var processRoutes = function processRoutes() {
  var routesProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : routes;
  var store = arguments.length > 1 ? arguments[1] : undefined;
  var req = arguments.length > 2 ? arguments[2] : undefined;
  //return new Promise((resolve, reject) => {
  // Will contain routes that will be processed in the next recursion
  var next = [];

  // Map through the routes and find any that match the current path

  return routesProcessing.map(function (route) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(req.url, route);
    if (match) {
      var reduxAction;

      // If the route has sub-routes, queue them for the next recursion
      // if (route.routes) next.push(...route.routes);

      // Check if the component is a lazy-loaded Loadable wrapper
      /* if (route.component?.contextTypes?.loadable) {
          const LoadableContainer = route.component
          const component = new LoadableContainer()?.state?.loaded?.default
          if (component?.getInitialActions) {
            initialAction = component.getInitialActions({ req, match })
          }
        } */

      // Regular non-lazy component that check for initialActions
      if (route.component.getInitialActions) {
        reduxAction = route.component.getInitialActions({
          req: req,
          match: match
        });
      }

      //this promise has to be resolved even though there are not any other initial actions or nested routes
      if (reduxAction) {
        console.log('reduxAction', reduxAction);
        return store.dispatch(reduxAction);
      }
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/server/server.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/server.js */"./src/server/server.js");


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

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbWlkZGxld2FyZS9wcm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21pZGRsZXdhcmUvc3NyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvUmVkdXgvYWN0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvUmVkdXgvcmVkdWNlcnMvZGF0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9SZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9GaWVsZC9GaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ob01hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUm91dGVzV2l0aFJlZHV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL05lc3RlZFJvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9Td2l0Y2hfRXhhY3RfTmVzdGVkX1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9jb21wcy9Ub3BpYy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9jb21wcy9Vc2Vycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL25lc3RlZFJvdXRlc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtcHJveHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJxdWVyeVBhcmFtc1JlZHVjZXIiLCJhY2MiLCJhY3Rpb24iLCJzdHViRGFzaGJvYXJkUHJveHkiLCJwcm94eSIsInByb3h5UmVxUGF0aFJlc29sdmVyIiwicmVxIiwidXJsIiwicGFyc2UiLCJwYXRoIiwic3NyTWlkZGxld2FyZSIsInJlcyIsIm5leHQiLCJsb2dnZXIiLCJjb2xvciIsImJvbGQiLCJsb2ciLCJpbml0aWFsU3RhdGUiLCJkYXRhIiwibWVtb3J5SGlzdG9yeSIsImNyZWF0ZU1lbW9yeUhpc3RvcnkiLCJpbml0aWFsRW50cmllcyIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJ3YWl0Rm9yQXN5bmNBY3Rpb25zIiwicHJvY2Vzc1JvdXRlcyIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm1hcmt1cCIsInJlbmRlclRvU3RyaW5nIiwic2VuZCIsImFwcCIsImV4cHJlc3MiLCJzZXQiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiY29uc29sZSIsIlBPUlQiLCJsaXN0ZW4iLCJpbmZvIiwiZmV0Y2hEYXRhIiwiYWZ0ZXJMYXN0U2xhc2giLCJkaXNwYXRjaCIsImZldGNoUG9wdWxhclJlcG9zIiwidHlwZSIsInBheWxvYWQiLCJkYXRhUmVkdWNlciIsImNyZWF0ZVJvb3RSZWR1Y2VyIiwiaGlzdG9yeSIsImNvbWJpbmVSZWR1Y2VycyIsInJvdXRlciIsImNvbm5lY3RSb3V0ZXIiLCJicm93c2VyT3JNZW1vcnlIaXN0b3J5IiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwiZmV0Y2giLCJqc29uIiwicmVwb3MiLCJpdGVtcyIsImVycm9yIiwid2FybiIsIkFwcCIsInJvdXRlcyIsIm1hcCIsImV4YWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsInByb3BzIiwiRmllbGQiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNsYXNzTmFtZSIsInNlY3Rpb25TdHlsaW5nIiwiaGludFRleHQiLCJvdGhlckF0dHIiLCJmaWVsZE5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJwcm9wVmFsdWUiLCJFcnJvciIsIm9iamVjdE9mIiwiR3JpZCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1c2VQYXJhbXMiLCJyZXBvX25hbWUiLCJ1c2VFZmZlY3QiLCJfX2lzQnJvd3Nlcl9fIiwiZGlzcGxheSIsImZsZXhXcmFwIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJsb2dpbiIsImdldEluaXRpYWxBY3Rpb25zIiwibWF0Y2giLCJoZWFkZXJzIiwidGV4dEFmdGVyTGFzdFNsYXNoIiwiSG9tZSIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImVtYWlsRmllbGQiLCJlbWFpbEFkZHJlc3MiLCJzaWduZWRJblVzZXJFbWFpbEZpZWxkIiwiTG9naW4iLCJsb2dvbklkIiwibG9nb25QYXNzd29yZCIsInJlY29nbmlzZWQiLCJwYWdlTmFtZSIsInN1Y2Nlc3NVcmwiLCJicmFuZCIsImFsbG93R3Vlc3QiLCJyZWdpc3RlckFuZEd1ZXN0T25Ub3AiLCJxdWVyeVBhcmFtcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwicmVkdWNlIiwicmVnaXN0ZXJMaW5rIiwiZ3Vlc3RDaGVja291dExpbmsiLCJpbmRleE9mIiwiYXBpRXJyb3IiLCJwYXNzd29yZEZpZWxkSGludFRleHQiLCJoZWFkaW5nVGV4dCIsImdldEJyYW5kQ2xhc3NOYW1lIiwiY3VycmVudEJyYW5kIiwiUmVnaXN0ZXJlZFNlY3Rpb24iLCJSZWdpc3RlckFuZEd1ZXN0U2VjdGlvbiIsIkxvZ2luRm9ybXMiLCJyZXZlcnNlIiwib25lT2ZUeXBlIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJvbmVPZiIsIk5hdmJhciIsIk5vTWF0Y2giLCJ1c2VSb3V0ZU1hdGNoIiwidXBUb05vd1VybCIsImxhbmd1YWdlcyIsInBhcmFtIiwiVG9wTGFuZ3VhZ2VzTmF2QmFyIiwibmVzdGVkUm91dGVzRGF0YSIsImRlc2NyaXB0aW9uIiwidG9waWNSb3V0ZSIsImN1cnJlbnRSb3V0ZUhlcmUiLCJTd2l0Y2hSb3V0ZXMiLCJUb3BpYyIsInRvcGljSWQiLCJ0b3BpYyIsImZpbmQiLCJyZXNvdXJjZXMiLCJTYW1wbGVVc2VycyIsIkNyZWF0ZVVzZXIiLCJOZXN0ZWRSb3V0ZXMiLCJSb3V0ZXNXaXRoUmVkdXgiLCJOZXN0ZWRSb3V0ZXNTd2l0Y2giLCJyb3V0ZXNQcm9jZXNzaW5nIiwicm91dGUiLCJtYXRjaFBhdGgiLCJyZWR1eEFjdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCLENBQUlDLEdBQUcsRUFBRUMsTUFBTSxFQUFLO0VBQ2pELElBQUlBLE1BQU0sSUFBSUQsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUN4QkEsR0FBRyxlQUFRQyxNQUFNLENBQUU7RUFDckIsQ0FBQyxNQUFNLElBQUlBLE1BQU0sRUFBRTtJQUNqQkQsR0FB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LENBQUM7VUFBRTFHLEdBQUcsRUFBSEEsR0FBRztVQUFFMkcsS0FBSyxFQUFMQTtRQUFNLENBQUMsQ0FBQztNQUNqRTs7TUFFQTtNQUNBLElBQUlpRSxXQUFXLEVBQUU7UUFDZnpJLE9BQU8sQ0FBQ3pCLEdBQUcsQ0FBQyxhQUFhLEVBQUVrSyxXQUFXLENBQUM7UUFDdkMsT0FBTzVKLEtBQUssQ0FBQ3lCLFFBQVEsQ0FBQ21JLFdBQVcsQ0FBQztNQUNwQztJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVjeEcscUVBQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRXJCLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5leHBvcnQgY29uc3QgcXVlcnlQYXJhbXNSZWR1Y2VyID0gKGFjYywgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24gJiYgYWNjID09PSAnJykge1xuICAgIGFjYyArPSBgPyR7YWN0aW9ufWBcbiAgfSBlbHNlIGlmIChhY3Rpb24pIHtcbiAgICBhY2MgKz0gYCYke2FjdGlvbn1gXG4gIH1cbiAgcmV0dXJuIGFjY1xufVxuIiwiLy91cmwgbW9kdWxlIGlzIHBhcnQgb2Ygbm9kZVxuaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XG5cbi8qKlxuICogQWJvdXQgbW9kX3Byb3h5IGFuZCBtb2RfYWxpYXNcblxuUmVkaXJlY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSByZXF1ZXN0ZWQgVVJMIGlzIHNvbWV3aGVyZSBlbHNlLCBhbmQgdGhlIGJyb3dzZXIgaXRzZWxmIHdpbGwgY29ubmVjdCB0byB0aGUgb3RoZXIgc2VydmVyLlxuUHJveHlpbmcgaXMgdXNlZCB3aGVuIHRoZSByZXF1ZXN0ZWQgVVJMIGlzIHNvbWV3aGVyZSBlbHNlLCBidXQgdGhlIHNlcnZlciB3aWxsIGRvIHRoZSBjb25uZWN0aW9uLiBJbiB0aGlzIGNhc2UgdGhlIGJyb3dzZXIgd2lsbCBldmVuIG5vdCBiZSBhd2FyZSBvZiB0aGF0LlxuU2luY2UgeW91IHdhbnQgdG8gaGF2ZSBhY2Nlc3MgdG8gaGF2ZSBhY2Nlc3MgdG8gc29tZSBhcHBsaWNhdGlvbnMgZnJvbSB0aGUgb3V0c2lkZSBvZiB5b3VyIGxvY2FsIG5ldHdvcmtcbnByb3h5aW5nIGlzIG1vcmUgYXBwcm9wcmlhdGUsIHNvIHlvdSBkb24ndCBoYXZlIHRvIG9wZW4gYW5kIGZvcndhcmQgbXVsdGlwbGUgcG9ydHMgZnJvbSB0aGUgb3V0c2lkZS5cblByb3h5aW5nIGlzIGdlbmVyYWxseSB1c2VkIHRvIHBhc3MgcmVxdWVzdHMgdG8gb3RoZXIgSFRUUCBzZXJ2ZXJzXG5SZWRpcmVjdCB3aWxsIHJlZGlyZWN0IHlvdXIgcmVxdWVzdCB0byB0aGUgc2FtZSBkb21haW4gYXMgIDxSZWRpcmVjdCB0bz17YCR7Y29uZmlybWF0aW9uRXJyb3J9P3R5cGU9Y3JlZGl0YH0gLz5cbiAqIFxuICogKi9cbi8vIHByb3h5KCdodHRwOi8vbG9jYWxob3N0OjMwMTEnIHRoaXMgaGFzIHRvIGJlIG1haW4gZG9tYWluXG5leHBvcnQgY29uc3Qgc3R1YkRhc2hib2FyZFByb3h5ID0gcHJveHkoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMScsIHtcbiAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+IHtcbiAgICAvL3RoaXMgcmVkaXJlY3RzIHRvIG1haW4gZG9tYWluICdodHRwOi8vbG9jYWxob3N0OjMwMTEnXG4gICAgcmV0dXJuIHVybC5wYXJzZShyZXEudXJsKS5wYXRoO1xuXG4gICAgLy90aGlzIHdoYXQgeW91IHJlZGlyZWN0IHRvIGFzIGh0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9iYXNrZXRcbiAgICByZXR1cm4gJy9iYXNrZXQnO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IHJvdXRlcywgeyBwcm9jZXNzUm91dGVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JvdXRlcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vLi4vc2hhcmVkL1JlZHV4L3N0b3JlJztcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoJ3llbGxvdycpLmJvbGQoKS5sb2coJ3JlcXVlc3RlZCByZXEudXJsJywgcmVxLnVybCk7XG5cbiAgLyoqKioqKioqIFJlZHV4IHNlcnZlciBzZXR1cCAqKioqKiovXG5cbiAgLy8gc2V0IGluaXRpYWwgc3RvcmUgdG8gYmUgcGFzc2VkIHRvIGNsaWVudCBpbiB3aW5kb3cuX2RhdGFcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRhdGE6IFtdLFxuICB9O1xuXG4gIC8vVSBjYW4gbm90IHVzZSBCcm93c2VyUm91dGVyIGNhdXNlIHRoZSByb3V0ZXMgYXJlIHByb2Nlc3NlZCBvbiBzZXJ2ZXIgbm90IGEgY2xpZW50XG4gIGNvbnN0IG1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXM6IFtyZXEudXJsXSB9KTtcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShtZW1vcnlIaXN0b3J5LCBpbml0aWFsU3RhdGUpO1xuXG4gIC8qKioqKiovXG5cbiAgLy8gV2FpdHMgZm9yIGFzeW5jaHJvbm91cyBhY3Rpb25zIGxpa2UgQVBJIGNhbGxzXG4gIC8vIGJlZm9yZSByZW5kZXJpbmcgdGhlIEhUTUxcbiAgY29uc3Qgd2FpdEZvckFzeW5jQWN0aW9ucyA9IHByb2Nlc3NSb3V0ZXModW5kZWZpbmVkLCBzdG9yZSwgcmVxKTtcblxuICBQcm9taXNlLmFsbCh3YWl0Rm9yQXN5bmNBY3Rpb25zKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpO1xuXG4gICAgICAvL2dldCBzdG9yZSB0aGF0IGlzIHBhc3NlZCB0byBfX0lOSVRJQUxfUkVEVVhfREFUQVxuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFJlZHV4UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXt7fX0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvUmVkdXhQcm92aWRlcj5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8L2hlYWQ+XG4gIFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICA8IS0tIGJlbG93IG9ubHkgd29ya3Mgd2l0aCBkZXYtc2VydmVyIGlzIHRoZSBoeWRyYXRlIHJlYWN0IHBhcnQgdGhhdCBtZWx0cyBidW5kbGUuanMgaW50byBzZXZlciBvdXRwdXRcbiAgICAgICAgICBcbiAgICAgICAgICBmcm9tIDpcblxuICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uLycsICdzcmMnKSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICAgIC0tPlxuICAgICAgICAgPHNjcmlwdCAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gJy4uL3NlcnZlci9taWRkbGV3YXJlL3Nzcic7XG5pbXBvcnQgeyBzdHViRGFzaGJvYXJkUHJveHkgfSBmcm9tICcuLi9zZXJ2ZXIvbWlkZGxld2FyZS9wcm94eSc7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcvdmlld3MnKSk7XG4vKlxuaXQgaXMgaW1wb3J0YW50IHRvIHNldCBkaXN0IGFzIHN0YXRpYyBmb2xkZXIgZm9yIGV4cHJlc3Mgc2VydmVyIFxud2l0aG91dCB0aGlzIHRoZSA8c2NyaXB0IHNyYz1cImRpc3QvYnVuZGxlLmpzXCI+IHdpbGwgYmUgdHJlYXRlZCBhcyBsaW5rIG5vdCBhIGZpbGVcbiovXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdkaXN0JykpO1xuXG4vL21hbmlwdWxhdGUgcm91dGVzXG5cbmFwcC51c2UoJy9sb2dpbicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zb2xlLmxvZygnU1NSIGxvZ2luIHJvdXRlJyk7XG4gIG5leHQoKTtcbn0pO1xuXG4vLyBEYXNoYm9hcmQgc3R1YnNcbmFwcC51c2UoJy9kYXNoYm9hcmQnLCBzdHViRGFzaGJvYXJkUHJveHkpO1xuXG4vLyBSZW5kZXJzIHRoZSBhcHBcbmFwcC51c2Uoc3NyTWlkZGxld2FyZSk7XG5cbmNvbnN0IFBPUlQgPSAzMzg5O1xuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGxvZ2dlci5pbmZvKGBzZXJ2ZXIgd2ViIHJ1bm5pbmcgb24gcG9ydDoke1BPUlR9YCk7XG59KTtcbiIsImltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xuXG4vLyAyIGZ1bmN0aW9ucyBuZWVkIHRvIGJlIHN1cHBsaWVkIChjbGFzc2ljIHRodW5rIGZ1bmN0aW9uKVxuZXhwb3J0IGNvbnN0IGZldGNoRGF0YSA9IChhZnRlckxhc3RTbGFzaCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIC8vbmVlZHMgdG8gcmV0dXJuIHByb21pc2UgZm9yIGZpbmFsIFByb21pc2UuYWxsKFtwcm9taXNlc10pIGluIHNzci5qc1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFBvcHVsYXJSZXBvcyhhZnRlckxhc3RTbGFzaFswXSk7XG4gIGRpc3BhdGNoKHsgdHlwZTogXCJTVE9SRV9EQVRBXCIsIHBheWxvYWQ6IHsgZGF0YTogcmVzIH0gfSk7XG59O1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmNvbnN0IGRhdGFSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTVE9SRV9EQVRBXCI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuZGF0YTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhUmVkdWNlcjtcblxuLy9zdHJ1Y3R1cmVcbi8vZGF0YVJlZHVjZXIgPSBbXVxuLypcbiAgZGF0YTpkYXRhUmVkdWNlclxuKi9cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciB9IGZyb20gXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCI7XG5cbmltcG9ydCBkYXRhIGZyb20gXCIuLi9yZWR1Y2Vycy9kYXRhUmVkdWNlclwiO1xuXG4vKipcbiAqIEBwYXJhbSB7fSBoaXN0b3J5IGVpdGhlciBicm93c2VyIG9yIG1lbW9yeSBoaXN0b3J5KHNlcnZlciBzaXRlIHN0YXRpYyByb3V0ZXIpXG4gKi9cbmNvbnN0IGNyZWF0ZVJvb3RSZWR1Y2VyID0gKGhpc3RvcnkpID0+XG4gIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgZGF0YSxcbiAgICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSksXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb290UmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShicm93c2VyT3JNZW1vcnlIaXN0b3J5LCBwcmVsb2FkZWRTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGNyZWF0ZVJvb3RSZWR1Y2VyKGJyb3dzZXJPck1lbW9yeUhpc3RvcnkpLCAvLyByb290IHJlZHVjZXIgd2l0aCByb3V0ZXIgc3RhdGVcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBjb21wb3NlKFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgICByb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJPck1lbW9yeUhpc3RvcnkpLCAvLyBmb3IgZGlzcGF0Y2hpbmcgaGlzdG9yeSBhY3Rpb25zXG4gICAgICAgIHRodW5rTWlkZGxld2FyZVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICByZXR1cm4gc3RvcmU7XG59XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyhsYW5ndWFnZSA9IFwiYWxsXCIpIHtcbiAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShcbiAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYFxuICApO1xuICBsb2dnZXIuY29sb3IoXCJ5ZWxsb3dcIikuYm9sZCgpLmxvZyhcIkdFVDpcIiwgZW5jb2RlZFVSSSk7XG5cbiAgcmV0dXJuIGZldGNoKGVuY29kZWRVUkkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgIC50aGVuKChyZXBvcykgPT4gcmVwb3MuaXRlbXMpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vTm9NYXRjaFwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgZXhhY3Q9e2V4YWN0fVxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFJvdXRlIHJlbmRlcj17KHByb3BzKSA9PiA8Tm9NYXRjaCB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgRmllbGQgPSAoeyB0eXBlID0gJ3RleHQnLCBpZCwgbmFtZSwgbGFiZWwsIGNsYXNzTmFtZSwgc2VjdGlvblN0eWxpbmcsIGhpbnRUZXh0LCAuLi5vdGhlckF0dHIgfSkgPT4ge1xuICBjb25zdCBmaWVsZE5hbWUgPSBuYW1lIHx8IGlkXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwICR7c2VjdGlvblN0eWxpbmd9YH0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBfX2xhYmVsXCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgeyBoaW50VGV4dCAmJiA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwX19oaW50XCI+e2hpbnRUZXh0fTwvc3Bhbj4gfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cF9faW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXQgYXJpYS1yZXF1aXJlZCB0eXBlPXt0eXBlfSBuYW1lPXtmaWVsZE5hbWV9IGlkPXtpZH0gY2xhc3NOYW1lPXtgZm9ybS1ncm91cF9faW5wdXQke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9IHsuLi5vdGhlckF0dHJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuRmllbGQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpbnRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICAgIC8vIEFwcGx5IGBpc1JlcXVpcmVkYCBjb25kaXRpb25hbGx5IHRvIGZpZWxkcyB3aGljaCBhcmVuJ3QgYGhpZGRlbmBcbiAgICBjb25zdCBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVGhlIHByb3AgXFxgJHtwcm9wTmFtZX1cXGAgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIFxcYCR7Y29tcG9uZW50TmFtZX1cXGAsIGJ1dCBpdHMgdmFsdWUgaXMgXFxgJHtwcm9wVmFsdWV9XFxgLmApXG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCBwcm9wIFxcYCR7cHJvcE5hbWV9XFxgIG9mIHR5cGUgXFxgJHt0eXBlb2YgcHJvcFZhbHVlfVxcYCBzdXBwbGllZCB0byBcXGAke2NvbXBvbmVudE5hbWV9XFxgLCBleHBlY3RlZCBcXGBzdHJpbmdcXGAuYClcbiAgICB9XG4gIH0sXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdGhlckF0dHI6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgc2VjdGlvblN0eWxpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLy90aHVuayByZWR1eCBhY3Rpb25cbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi9SZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcblxuY29uc3QgR3JpZCA9IChwcm9wcykgPT4ge1xuICAvL3RoaXMgc3RhdGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGluIHNlcnZlciBzaXRlIChzc3IuanMpXG4gIGNvbnN0IHJlcG9zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHJlcG9fbmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL2NoZWNrIGlmIGRhdGEgaGFzIGJlZW4gYWxyZWFkeSBmZXRjaGVkIG9uIHNlcnZlclxuICAgIC8vaW4gdGhpcyBjYXNlIHNpbmNlIHN0YXRlLmRhdGEgaXMgc2hhcmVkIGJldHdlZW4gcm91dGVzXG4gICAgLy91IG5lZWQgY2hlY2sgaWYgZ2xvYmFsIHdlYnBhY2sgY29uc3QgaXMgX19pc0Jyb3dzZXJfXyBzZXRcbiAgICBpZiAoX19pc0Jyb3dzZXJfXykge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKHJlcG9fbmFtZSkpO1xuICAgIH1cbiAgfSwgW3JlcG9fbmFtZSwgZGlzcGF0Y2hdKTsgLy9jaGVjayBiYXNlZCBvbiBwYXJhbSBjaGFuZ2VcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVwb3MgJiYgKFxuICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtuYW1lfSBzdHlsZT17eyBtYXJnaW46IDMwIH19PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aHRtbF91cmx9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntzdGFyZ2F6ZXJzX2NvdW50fSBzdGFyczwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkdyaWQuZ2V0SW5pdGlhbEFjdGlvbnMgPSAoeyByZXEsIG1hdGNoIH0pID0+IHtcbiAgY29uc3QgeyBoZWFkZXJzID0ge30gfSA9IHJlcTtcbiAgLy90aGlzIGRvZXMgbm90IHdvcmsgZm9yIG1lIHBvcHVsYXIvOmlkID0gcmVxLnBhcmFtLmlkXG4gIGNvbnN0IHRleHRBZnRlckxhc3RTbGFzaCA9IHJlcS51cmwubWF0Y2goL1teXFwvXSskLyk7XG4gIC8vIGNvbnN0IHsgY29va2llID0gbnVsbCB9ID0gaGVhZGVycztcblxuICAvL3Bhc3MgY29va2llIHRvIGZpcnN0IHRodW5rIG1ldGhvZFxuICByZXR1cm4gZmV0Y2hEYXRhKHRleHRBZnRlckxhc3RTbGFzaCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZWNsYXJlIGEgbmV3IHN0YXRlIHZhcmlhYmxlLCB3aGljaCB3ZSdsbCBjYWxsIFwiY291bnRcIlxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj50aGlzIHJvdXRlcyBpcyB0byBzaG93IHRoYXQgaG9va3MgdGFrZSBvdmVyIGluIGJyb3dzZXI8L2gyPlxuICAgICAgPHA+WW91IGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4uL0ZpZWxkL0ZpZWxkJztcbmltcG9ydCB7IHF1ZXJ5UGFyYW1zUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3JlZHVjZXJzJztcblxuY29uc3QgZW1haWxGaWVsZCA9IChlbWFpbEFkZHJlc3MpID0+IChcbiAgPEZpZWxkXG4gICAgdHlwZT0nZW1haWwnXG4gICAgaWQ9J2VtYWlsJ1xuICAgIG5hbWU9J2xvZ29uSWQnXG4gICAgbGFiZWw9J0VtYWlsIGFkZHJlc3MnXG4gICAgZGVmYXVsdFZhbHVlPXtlbWFpbEFkZHJlc3N9XG4gICAgYXV0b0NvbXBsZXRlPSdlbWFpbCdcbiAgICBtYXhMZW5ndGg9JzYwJ1xuICAgIGRhdGEtdHJhY2stY29uZmlnPSd0cm9sbGV5U2lnbkluRmllbGRfZXJyb3JNZXNzYWdlfFRyb2xsZXkgU2lnbkluIEZpZWxkIEVycm9yIE1lc3NhZ2UnXG4gICAgYXV0b0ZvY3VzXG4gIC8+XG4pO1xuXG5jb25zdCBzaWduZWRJblVzZXJFbWFpbEZpZWxkID0gKGVtYWlsQWRkcmVzcykgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSd4cy1yb3cgeHMtMTItLW5vbmUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3hzLXN0YWNrJz5cbiAgICAgICAgPHAgZGF0YS1lMmU9J2VtYWlsLWFkZHJlc3MtbGFiZWwnPntlbWFpbEFkZHJlc3N9PC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2luZD0nbGluaydcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgZm9ybUFjdGlvbj0nP2xvZ09mZj10cnVlJmFtcDtyZWRpcmVjdFRvUmVmZXJlcj10cnVlJ1xuICAgICAgICAgIGZvcm1Ob1ZhbGlkYXRlXG4gICAgICAgICAgZGF0YS1lMmU9J25vdC15b3UtbGluaydcbiAgICAgICAgICBpZD0nbm90WW91TGluaydcbiAgICAgICAgICBkYXRhLXRyYWNrLWNsaWNrPSd0cm9sbGV5U2lnbkluX25vdFlvdXxUcm9sbGV5U2lnbkluIE5vdCBZb3UnXG4gICAgICAgID5cbiAgICAgICAgICBOb3QgeW91P1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxGaWVsZFxuICAgICAgdHlwZT0naGlkZGVuJ1xuICAgICAgbmFtZT0nbG9nb25JZCdcbiAgICAgIGlkPSdlbWFpbCdcbiAgICAgIGRlZmF1bHRWYWx1ZT17ZW1haWxBZGRyZXNzfVxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTG9naW4gPSAoe1xuICBsb2dvbklkLFxuICBsb2dvblBhc3N3b3JkLFxuICBlcnJvcixcbiAgcmVjb2duaXNlZCA9IGZhbHNlLFxuICBwYWdlTmFtZSA9ICd1bmtub3duJyxcbiAgZW1haWxBZGRyZXNzID0gJycsXG4gIHN1Y2Nlc3NVcmwsXG4gIGJyYW5kID0gJ2FyZycsXG4gIGFsbG93R3Vlc3QgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJBbmRHdWVzdE9uVG9wID0gdHJ1ZTtcblxuICBjb25zdCBxdWVyeVBhcmFtcyA9IFtcbiAgICByZWNvZ25pc2VkID8gJ2xvZ09mZj10cnVlJyA6IG51bGwsXG4gICAgYWxsb3dHdWVzdCA/ICdhbGxvd0d1ZXN0PXRydWUnIDogbnVsbCxcbiAgICBgcGFnZU5hbWU9JHtwYWdlTmFtZX1gLFxuICAgIHN1Y2Nlc3NVcmwgPyBgc3VjY2Vzc1VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzdWNjZXNzVXJsKX1gIDogbnVsbCxcbiAgXTtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVBhcmFtcy5yZWR1Y2UocXVlcnlQYXJhbXNSZWR1Y2VyLCAnJyk7XG4gIGNvbnN0IHJlZ2lzdGVyTGluayA9IGAvcmVnaXN0ZXIke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgY29uc3QgZ3Vlc3RDaGVja291dExpbmsgPSBgJHtzdWNjZXNzVXJsfSR7XG4gICAgc3VjY2Vzc1VybCAmJiBzdWNjZXNzVXJsLmluZGV4T2YoJz8nKSA+IC0xID8gJyYnIDogJz8nXG4gIH1ndWVzdD10cnVlYDtcblxuICBjb25zdCBhcGlFcnJvciA9XG4gICAgZXJyb3IgJiZcbiAgICBlcnJvcihcbiAgICAgICd0cm9sbGV5U2lnbkluU3lzdGVtX2Vycm9yTWVzc2FnZXxUcm9sbGV5IFNpZ25JbiBTeXN0ZW0gRXJyb3IgTWVzc2FnZSdcbiAgICApO1xuICBjb25zdCBwYXNzd29yZEZpZWxkSGludFRleHQgPVxuICAgIChhcGlFcnJvciAmJiAnSGludCAtIHRoaXMgaW5jbHVkZXMgMiBsZXR0ZXJzIGFuZCAxIG51bWJlcicpIHx8ICcnO1xuICBjb25zdCBoZWFkaW5nVGV4dCA9IHJlY29nbmlzZWQgPyAnUGxlYXNlIHNpZ24gaW4gYWdhaW4nIDogJ1NpZ24gaW4nO1xuXG4gIGNvbnN0IGdldEJyYW5kQ2xhc3NOYW1lID0gKGN1cnJlbnRCcmFuZCkgPT5cbiAgICBjdXJyZW50QnJhbmQgPT09ICdhcmcnID8gJycgOiBgICR7Y3VycmVudEJyYW5kfS12YXJpYXRpb25gO1xuXG4gIGNvbnN0IFJlZ2lzdGVyZWRTZWN0aW9uID0gKCkgPT4gKFxuICAgIDxzZWN0aW9uIGRhdGEtdGVzdD0nZm9ybXMtcmVnaXN0ZXJlZC11c2VyLXNlY3Rpb24nPlxuICAgICAgPGgxIGNsYXNzTmFtZT0naDIgdGV4dC1jZW50ZXIgYm9sZCcgZGF0YS1lMmU9J2xvZ2luLXBhZ2UtdGl0bGUnPlxuICAgICAgICB7aGVhZGluZ1RleHR9XG4gICAgICA8L2gxPlxuICAgICAge2FwaUVycm9yfVxuICAgICAge2JyYW5kID09PSAnaGFiJyAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgIFNpZ24gaW4gdG8geW91ciBBcmdvcyBhY2NvdW50IG9yIGNyZWF0ZSBhIG5ldyBvbmUsIHRoZW4gd2UmYXBvcztsbFxuICAgICAgICAgIHRha2UgeW91IHRvIGNoZWNrIG91dC5cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICAgIDxmb3JtIG1ldGhvZD0ncG9zdCcgbm9WYWxpZGF0ZSBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICB7IXJlY29nbmlzZWQgJiYgZW1haWxGaWVsZChsb2dvbklkKX1cbiAgICAgICAge3JlY29nbmlzZWQgJiYgZW1haWxBZGRyZXNzICYmIHNpZ25lZEluVXNlckVtYWlsRmllbGQoZW1haWxBZGRyZXNzKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgbmFtZT0nbG9nb25QYXNzd29yZCdcbiAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bG9nb25QYXNzd29yZH1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBtYXhMZW5ndGg9JzYwJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGFzU2hvd0hpZGUke2dldEJyYW5kQ2xhc3NOYW1lKGJyYW5kKX1gfVxuICAgICAgICAgICAgZGF0YS10cmFjay1jb25maWc9J3Ryb2xsZXlTaWduSW5GaWVsZF9lcnJvck1lc3NhZ2V8VHJvbGxleSBTaWduSW4gRmllbGQgRXJyb3IgTWVzc2FnZSdcbiAgICAgICAgICAgIGhpbnRUZXh0PXtwYXNzd29yZEZpZWxkSGludFRleHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2luZD0nbGluaydcbiAgICAgICAgICAgICAgYXM9J2EnXG4gICAgICAgICAgICAgIGhyZWY9Jy9mb3Jnb3R0ZW4tcGFzc3dvcmQnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uLWxpbmsnXG4gICAgICAgICAgICAgIGRhdGEtZTJlPSdmb3Jnb3QtcGFzc3dvcmQtbGluaydcbiAgICAgICAgICAgICAgZGF0YS10cmFjay1jbGljaz0ndHJvbGxleVNpZ25Jbl9mb3Jnb3RQYXNzd29yZHxUcm9sbGV5U2lnbkluIEZvcmdvdCBQYXNzd29yZCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRm9yZ290dGVuIHlvdXIgcGFzc3dvcmQ/XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgIGhhc0xvYWRpbmdcbiAgICAgICAgICBkYXRhLWUyZT0nbG9naW4tc3VibWl0LWJ1dHRvbidcbiAgICAgICAgICBkYXRhLXRyYWNrLXN1Ym1pdD0ndHJvbGxleVNpZ25Jbl9zaWduSW58VHJvbGxleVNpZ25JbiBTaWduSW4nXG4gICAgICAgICAgZnVsbFxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBpbiBzZWN1cmVseVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG5cbiAgY29uc3QgUmVnaXN0ZXJBbmRHdWVzdFNlY3Rpb24gPSAoKSA9PiAoXG4gICAgPHNlY3Rpb24gZGF0YS10ZXN0PSdmb3Jtcy1uZXctY3VzdG9tZXJzLXNlY3Rpb24nPlxuICAgICAgPGgxIGNsYXNzTmFtZT0naDIgdGV4dC1jZW50ZXIgYm9sZCcgZGF0YS1lMmU9J2xvZ2luLXBhZ2UtdGl0bGUnPlxuICAgICAgICBOZXcgQ3VzdG9tZXJzXG4gICAgICA8L2gxPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9ybS1jdGEgZm9udC1ib2xkIHRleHQtY2VudGVyJz5uZXdDdXN0b21lcjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldy1jdXN0b21lci1jdGEtd3JhcHBlcic+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaGFzTG9hZGluZ1xuICAgICAgICAgICAgYXM9J2EnXG4gICAgICAgICAgICBraW5kPSdzZWNvbmRhcnknXG4gICAgICAgICAgICBkYXRhLWJ0bi13aXRoLWxvYWRpbmdcbiAgICAgICAgICAgIGRhdGEtZTJlPSdyZWdpc3Rlci1saW5rJ1xuICAgICAgICAgICAgaHJlZj17cmVnaXN0ZXJMaW5rfVxuICAgICAgICAgICAgZnVsbFxuICAgICAgICAgICAgZGF0YS10cmFjay1jbGljaz0ndHJvbGxleVNpZ25Jbl9yZWdpc3RlcnxUcm9sbGV5U2lnbmluIFJlZ2lzdGVyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBhbiBhY2NvdW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2FsbG93R3Vlc3QgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBhcz0nYSdcbiAgICAgICAgICAgICAga2luZD0nc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICBoYXNMb2FkaW5nXG4gICAgICAgICAgICAgIGRhdGEtYnRuLXdpdGgtbG9hZGluZ1xuICAgICAgICAgICAgICBkYXRhLWUyZT0nZ3Vlc3QtY2hlY2tvdXQtbGluaydcbiAgICAgICAgICAgICAgaHJlZj17Z3Vlc3RDaGVja291dExpbmt9XG4gICAgICAgICAgICAgIGZ1bGxcbiAgICAgICAgICAgICAgZGF0YS10cmFjay1jbGljaz0ndHJvbGxleVNpZ25Jbl9pbnRlcmFjdGlvbnxUcm9sbGV5IFNpZ25JbiBDb250aW51ZSBBcyBhIEd1ZXN0IEJ1dHRvbnx0cm9sbGV5OmFjY291bnRTaWduSW46Y29udGludWVhc2FndWVzdGJ1dHRvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGludWUgYXMgYSBndWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xuXG4gIGNvbnN0IExvZ2luRm9ybXMgPSBbPFJlZ2lzdGVyQW5kR3Vlc3RTZWN0aW9uIC8+LCA8UmVnaXN0ZXJlZFNlY3Rpb24gLz5dO1xuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10ZXN0PSdsb2dpbi1mb3Jtcyc+XG4gICAgICB7IXJlZ2lzdGVyQW5kR3Vlc3RPblRvcCA/IExvZ2luRm9ybXMucmV2ZXJzZSgpIDogTG9naW5Gb3Jtc31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxvZ2luLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGxvZ29uSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvZ29uUGFzc3dvcmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlY29nbmlzZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlbWFpbEFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZ2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdWNjZXNzVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBicmFuZDogUHJvcFR5cGVzLm9uZU9mKFsnYXJnJywgJ2hhYicsICd0dWMnXSksXG4gIGFsbG93R3Vlc3Q6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIC8qXG4gICAgdGhvc2UgbGluayBoYXZlIHRvIGJlIGEgdGFncyBvciBMaW5rIGNhdXNlIHRoZSBwYWdlIGhhcyB0byBiZSByZWxvYWRlZCBpbiBvcmRlciB0byB3b3JrIGluIHNlcnZlciBzaXRlIFxuKi9cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkga2V5PXsnaG9tZSd9PlxuICAgICAgICAgIDxhIGhyZWY9e2AvYH0+aG9tZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGtleT17J3JvdXRlc1dpdGhSZWR1eCd9PlxuICAgICAgICAgIDxhIGhyZWY9e2Avcm91dGVzLXdpdGgtcmVkdXhgfT5yb3V0ZXMgd2l0aCBSZWR1eCBFeGFtcGxlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXsnbmVzdGVkUm91dGVzJ30+XG4gICAgICAgICAgPGEgaHJlZj17YC9uZXN0ZWQtcm91dGVzYH0+bmVzdGVkIFJvdXRlcyBFeGFtcGxlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXsnc3dpdGNoV2l0aE5lc3RlZFJvdXRlcyd9PlxuICAgICAgICAgIDxhIGhyZWY9e2Avc3dpdGNoLXdpdGgtbmVzdGVkLXJvdXRlc2B9PlxuICAgICAgICAgICAgc3dpdGNoLXdpdGgtbmVzdGVkLXJvdXRlcyBFeGFtcGxlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXsnc3dpdGNoV2l0aE5lc3RlZFJvdXRlcyd9PlxuICAgICAgICAgIDxhIGhyZWY9e2AvbG9naW5gfT5MT0dJTiBwYWdlIGRvbmUgZm9yIEN5cHJlc3MgdGVzdGluZzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vTWF0Y2ggKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBGb3VyIE9oIEZvdXJcbiAgICA8L2Rpdj5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCB1c2VSb3V0ZU1hdGNoLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy9zYW1wbGUgZGF0YSBhbmQgY29tcG9uZW50c1xuaW1wb3J0IG5lc3RlZFJvdXRlc0RhdGEgZnJvbSBcIi4uL2RhdGEvbmVzdGVkUm91dGVzRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyB0aGlzIGhvb2sgcmV0dXJucyB1cCB0byBub3cgdXJsIGZvciBuZXN0ZWQgcm91dGVzXG4gIC8vIGluIHRoaXMgY2FzZSB0aGUgcGFyZW50IHJvdXRlIGlzIC9uZXN0ZWQtcm91dGVzXG4gIGNvbnN0IHsgdXJsOiB1cFRvTm93VXJsIH0gPSB1c2VSb3V0ZU1hdGNoKCk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgICBwYXJhbTogXCJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgcGFyYW06IFwiamF2YXNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSdWJ5XCIsXG4gICAgICBwYXJhbTogXCJydWJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlB5dGhvblwiLFxuICAgICAgcGFyYW06IFwicHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgIHBhcmFtOiBcImphdmFcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IFRvcExhbmd1YWdlc05hdkJhciA9ICgpID0+XG4gICAgbGFuZ3VhZ2VzLm1hcCgoeyBuYW1lLCBwYXJhbSB9KSA9PiAoXG4gICAgICA8bGkga2V5PXtwYXJhbX0+XG4gICAgICAgIDxhIGhyZWY9e2AvcG9wdWxhci8ke3BhcmFtfWB9PntuYW1lfTwvYT5cbiAgICAgIDwvbGk+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhyIC8+XG4gICAgICA8aDM+TGFuZ3VhZ2VzPC9oMz5cbiAgICAgIDxUb3BMYW5ndWFnZXNOYXZCYXIgLz5cbiAgICAgIDxoMz4gQ2xpZW50IE5hViBsaW5rIHdpdGggcmVkdXggZXhhbXBsZTwvaDM+XG4gICAgICA8TGluayB0bz17YC9wb3B1bGFyL2phdmFzY3JpcHRgfT5OYXYgTGluayBqYXZhc2NyaXB0IHdpdGggUmVkdXg8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgdXNlUm91dGVNYXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vL3NhbXBsZSBkYXRhIGFuZCBjb21wb25lbnRzXG5pbXBvcnQgVG9waWMgZnJvbSBcIi4vY29tcHMvVG9waWNcIjtcbmltcG9ydCBuZXN0ZWRSb3V0ZXNEYXRhIGZyb20gXCIuLi8uLi9kYXRhL25lc3RlZFJvdXRlc0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gdGhpcyBob29rIHJldHVybnMgdXAgdG8gbm93IHVybCBmb3IgbmVzdGVkIHJvdXRlc1xuICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhcmVudCByb3V0ZSBpcyAvbmVzdGVkLXJvdXRlc1xuICBjb25zdCB7IHBhdGgsIHVybDogdXBUb05vd1VybCB9ID0gdXNlUm91dGVNYXRjaCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxociAvPlxuICAgICAgPGgzPm5lc3RlZCByb3V0ZXM8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7bmVzdGVkUm91dGVzRGF0YS5tYXAoKHsgZGVzY3JpcHRpb24sIHRvcGljUm91dGUgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RvcGljUm91dGV9PlxuICAgICAgICAgICAgPExpbmsgdG89e2Ake3VwVG9Ob3dVcmx9LyR7dG9waWNSb3V0ZX1gfT57ZGVzY3JpcHRpb259PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxSb3V0ZSBwYXRoPXtgJHtwYXRofS86dG9waWNJZGB9PlxuICAgICAgICA8VG9waWMgLz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IFVzZXJzLCB7IENyZWF0ZVVzZXIgfSBmcm9tIFwiLi9jb21wcy9Vc2Vyc1wiO1xuXG5jb25zdCBjdXJyZW50Um91dGVIZXJlID0gXCIvc3dpdGNoLXdpdGgtbmVzdGVkLXJvdXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2l0Y2hSb3V0ZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxociAvPlxuICAgICAgPGgzPmV4YW1wbGUgb2Ygc3dpdGNoIHN0YXRlbWVudCB3aXRoIGV4YWN0IHJvdXRlIDwvaDM+XG4gICAgICA8aDQ+XG4gICAgICAgICZsdDtSb3V0ZSBwYXRoPVwie2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzYH1cIiBleGFjdCAvJmd0OyA8aHIgLz4gaGFzIHRvXG4gICAgICAgIGJlIGV4YWN0IGlmIGl0IHdvdW4gdCBiZSBpdCB3b3VsZCBmYWxsIHRvIHRoZSBuZXh0IGNyZWF0ZSByb3V0ZVxuICAgICAgPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGtleT1cImFiMVwiPlxuICAgICAgICAgIDxhIGhyZWY9e2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzYH0+L3VzZXJzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PVwiYWIyXCI+XG4gICAgICAgICAgPGEgaHJlZj17YCR7Y3VycmVudFJvdXRlSGVyZX0vdXNlcnMvY3JlYXRlYH0+L3VzZXJzL2NyZWF0ZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICB7LypcbiAgICAgICAgUmVhY3Qgcm91dGVyIGRvZXMgcGFydGlhbCBtYXRjaGluZywgc28gdW5sZXNzIGl0IHNwZWNpZnkgJ2V4YWN0JyBpdCBcbiAgICAgICAgd2lsbCByZXR1cm4gZmlyc3QgbWF0Y2ggZm9yIHJvdXRlIC91c2Vycy9jcmVhdGUgaXQgd291bGQgXG4gICAgICAgIHJldHVybiBhdGg9XCIvdXNlcnNcIlxuXG4gICAgICAgIGhvd2V2ZXIgaWYgeW91IHNwZWNpZnkgIDxSb3V0ZSBwYXRoPVwiL3VzZXJzXCIgZXhhY3QgY29tcG9uZW50PXtVc2Vyc30gLz5cbiAgICAgICAgdGhlbiBpdCB3aWxsIG9ubHkgcmV0dXJuIHRoaXMgcm91dGUgZm9yIGV4YWN0IG1hdGNoIC91c2VycyBidXQgbm90IC91c2Vycy9jcmVhdGVVc2Vyc1xuXG4gICAgICAgIG5vdGljZSB0aGF0IFUgb25seSBuZWVkIHRvIHNwZWNpZnkgZXhhY3QgZm9yIHRoZSBmaXJzdCByb3V0ZSB1bmxlc3MgeW91ciByb3V0ZSB0cmVlXG4gICAgICAgIGhhcyBleHRlbnNpb24gb2ZcbiAgICAgICAgdXNlcnMvY3JlYXRlIGFuZCB1c2VyL2NyZWF0ZS86dXNlcklkIHRoZW4gZXhhY3QgaXMgbmVlZCB0byBiZSBzZXQgZm9yIHRoZSBzaG9ydGVyIHJvdXRlIGluIFxuICAgICAgICB0cmVlIHVzZXJzL2NyZWF0ZVxuICAgICAgKi99XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD17YCR7Y3VycmVudFJvdXRlSGVyZX0vdXNlcnNgfSBleGFjdD5cbiAgICAgICAgICA8VXNlcnMgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9e2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzL2NyZWF0ZWB9PlxuICAgICAgICAgIDxDcmVhdGVVc2VyIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgbmVzdGVkUm91dGVzRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uZXN0ZWRSb3V0ZXNEYXRhXCI7XG5cbmNvbnN0IFRvcGljID0gKCkgPT4ge1xuICBjb25zdCB7IHRvcGljSWQgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IHRvcGljID0gbmVzdGVkUm91dGVzRGF0YS5maW5kKFxuICAgICh7IHRvcGljUm91dGUgfSkgPT4gdG9waWNSb3V0ZSA9PT0gdG9waWNJZFxuICApO1xuICBjb25zdCB7IHJlc291cmNlcyB9ID0gdG9waWM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPntyZXNvdXJjZXMubmFtZX08L2gzPlxuICAgICAgPHA+e3Jlc291cmNlcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BpYztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2FtcGxlVXNlcnMgPSAoKSA9PiAoXG4gIDx1bD5cbiAgICA8bGk+R3JlZzwvbGk+XG4gICAgPGxpPlN0ZWZhbm88L2xpPlxuICA8L3VsPlxuKTtcblxuY29uc3QgQ3JlYXRlVXNlciA9ICgpID0+IDxwPnRoaXMgaXMgc2FtcGxlIHRleHQgZm9yIENyZWF0ZVVzZXI8L3A+O1xuXG5leHBvcnQgeyBTYW1wbGVVc2VycyBhcyBkZWZhdWx0LCBDcmVhdGVVc2VyIH07XG4iLCJjb25zdCBuZXN0ZWRSb3V0ZXNEYXRhID0gW1xuICB7XG4gICAgZGVzY3JpcHRpb246IFwiaG93IHRoZSA8TGluaz4gdGFnIHdvcmtzID9cIixcbiAgICB0b3BpY1JvdXRlOiBcImxpbmtUYWdcIixcbiAgICByZXNvdXJjZXM6IHtcbiAgICAgIG5hbWU6IFwiPExpbms+IHRhZ1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTGluayB0YWcgaXQgd2lsbCBhbHdheXMgd29yayBvbiBjbGllbnQgYW5kIGRvZXMgbm90IHJlbG9hZCB0aGUgcGFnZVwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJob3cgdGhlIHRoZSA8YT4gdGFncyB3b3JrID9cIixcbiAgICB0b3BpY1JvdXRlOiBcImFUYWdcIixcbiAgICByZXNvdXJjZXM6IHtcbiAgICAgIG5hbWU6IFwiPGE+IHRhZ1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiYSB0YWcgd2lsbCBhbHdheXMgcmVsb2FkIHRoZSBwYWdlIGNhdXNpbmcgc2VydmVyIHRvIHJlLXJ1blwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJjb25zdCB7dXJsfSA9dXNlUm91dGVNYXRjaCgpIGhvb2tcIixcbiAgICB0b3BpY1JvdXRlOiBcInJlYWQtdXJsLXBhcmFtZXRlcnNcIixcbiAgICByZXNvdXJjZXM6IHtcbiAgICAgIG5hbWU6IFwiY29uc3Qge3VybH0gPSB1c2VSb3V0ZU1hdGNoKClcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcInt1cmx9IHVzZWQgZm9yIG5lc3RlZCBsaW5rcywgY2F1c2UgdGkgd2lsbCByZXR1cm4gc29tZXRoaW5nIGFzOiB0b3BpY3MvcmVhY3Qtcm91dGVyXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiBcImNvbnN0IHtwYXRofSA9dXNlUm91dGVNYXRjaCgpIGhvb2tcIixcbiAgICB0b3BpY1JvdXRlOiBcInJlYWQtcGF0aC1wYXJhbWV0ZXJzXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcImNvbnN0IHtwYXRofSA9IHVzZVJvdXRlTWF0Y2goKVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwie3BhdGh9IHVzZWQgZm9yIG5lc3RlZCByb3V0ZXMsIGNhdXNlIGl0IHdpbGwgcmV0YWluIHBhcmFtIGFzICBwYXRoLzp0b3BpY0lkXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiBcImNvbnN0IHt0b3BpY0lkfSA9IHVzZVBhcmFtcygpIGhvb2tcIixcbiAgICB0b3BpY1JvdXRlOiBcInJlYWQtcGFyYW1zXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcImNvbnN0IHt0b3BpY0lkfSA9IHVzZVBhcmFtcygpXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJ1c2VkIGZvciBnZXR0aW5nIC86dG9waWNJZCBwYXJhbSBcIixcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbmVzdGVkUm91dGVzRGF0YTtcbiIsImltcG9ydCB7IG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IE5lc3RlZFJvdXRlcyBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL05lc3RlZFJvdXRlcyc7XG5pbXBvcnQgTmVzdGVkUm91dGVzU3dpdGNoIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZU5lc3RpbmcvU3dpdGNoX0V4YWN0X05lc3RlZF9Sb3V0ZXMnO1xuaW1wb3J0IFJvdXRlc1dpdGhSZWR1eCBmcm9tICcuL2NvbXBvbmVudHMvUm91dGVzV2l0aFJlZHV4JztcbmltcG9ydCBHcmlkIGZyb20gJy4vY29tcG9uZW50cy9HcmlkJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBIb21lLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9uZXN0ZWQtcm91dGVzJyxcbiAgICBjb21wb25lbnQ6IE5lc3RlZFJvdXRlcyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcm91dGVzLXdpdGgtcmVkdXgnLFxuICAgIGNvbXBvbmVudDogUm91dGVzV2l0aFJlZHV4LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9zd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzJyxcbiAgICBjb21wb25lbnQ6IE5lc3RlZFJvdXRlc1N3aXRjaCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9wdWxhci86cmVwb19uYW1lJyxcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICBjb21wb25lbnQ6IExvZ2luLFxuICB9LFxuXTtcblxuLy8gUmVjdXJzaXZlbHkgZmV0Y2ggZGF0YVxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSb3V0ZXMgPSAocm91dGVzUHJvY2Vzc2luZyA9IHJvdXRlcywgc3RvcmUsIHJlcSkgPT4ge1xuICAvL3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIC8vIFdpbGwgY29udGFpbiByb3V0ZXMgdGhhdCB3aWxsIGJlIHByb2Nlc3NlZCBpbiB0aGUgbmV4dCByZWN1cnNpb25cbiAgY29uc3QgbmV4dCA9IFtdO1xuXG4gIC8vIE1hcCB0aHJvdWdoIHRoZSByb3V0ZXMgYW5kIGZpbmQgYW55IHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgcGF0aFxuXG4gIHJldHVybiByb3V0ZXNQcm9jZXNzaW5nLm1hcCgocm91dGUpID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBsZXQgcmVkdXhBY3Rpb247XG5cbiAgICAgIC8vIElmIHRoZSByb3V0ZSBoYXMgc3ViLXJvdXRlcywgcXVldWUgdGhlbSBmb3IgdGhlIG5leHQgcmVjdXJzaW9uXG4gICAgICAvLyBpZiAocm91dGUucm91dGVzKSBuZXh0LnB1c2goLi4ucm91dGUucm91dGVzKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGxhenktbG9hZGVkIExvYWRhYmxlIHdyYXBwZXJcbiAgICAgIC8qIGlmIChyb3V0ZS5jb21wb25lbnQ/LmNvbnRleHRUeXBlcz8ubG9hZGFibGUpIHtcbiAgICAgICAgICBjb25zdCBMb2FkYWJsZUNvbnRhaW5lciA9IHJvdXRlLmNvbXBvbmVudFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBMb2FkYWJsZUNvbnRhaW5lcigpPy5zdGF0ZT8ubG9hZGVkPy5kZWZhdWx0XG4gICAgICAgICAgaWYgKGNvbXBvbmVudD8uZ2V0SW5pdGlhbEFjdGlvbnMpIHtcbiAgICAgICAgICAgIGluaXRpYWxBY3Rpb24gPSBjb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9ICovXG5cbiAgICAgIC8vIFJlZ3VsYXIgbm9uLWxhenkgY29tcG9uZW50IHRoYXQgY2hlY2sgZm9yIGluaXRpYWxBY3Rpb25zXG4gICAgICBpZiAocm91dGUuY29tcG9uZW50LmdldEluaXRpYWxBY3Rpb25zKSB7XG4gICAgICAgIHJlZHV4QWN0aW9uID0gcm91dGUuY29tcG9uZW50LmdldEluaXRpYWxBY3Rpb25zKHsgcmVxLCBtYXRjaCB9KTtcbiAgICAgIH1cblxuICAgICAgLy90aGlzIHByb21pc2UgaGFzIHRvIGJlIHJlc29sdmVkIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZSBub3QgYW55IG90aGVyIGluaXRpYWwgYWN0aW9ucyBvciBuZXN0ZWQgcm91dGVzXG4gICAgICBpZiAocmVkdXhBY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHV4QWN0aW9uJywgcmVkdXhBY3Rpb24pO1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2gocmVkdXhBY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=