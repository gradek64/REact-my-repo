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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbWlkZGxld2FyZS9zc3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9SZWR1eC9hY3Rpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9SZWR1eC9yZWR1Y2Vycy9kYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvUmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0ZpZWxkL0ZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0hvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05vTWF0Y2guanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Sb3V0ZXNXaXRoUmVkdXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9yb3V0ZU5lc3RpbmcvTmVzdGVkUm91dGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL1N3aXRjaF9FeGFjdF9OZXN0ZWRfUm91dGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL2NvbXBzL1RvcGljLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL2NvbXBzL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2RhdGEvbmVzdGVkUm91dGVzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpc3RvcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1jb2xvci1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbInF1ZXJ5UGFyYW1zUmVkdWNlciIsImFjYyIsImFjdGlvbiIsInNzck1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwibG9nZ2VyIiwiY29sb3IiLCJib2xkIiwibG9nIiwidXJsIiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsIm1lbW9yeUhpc3RvcnkiLCJjcmVhdGVNZW1vcnlIaXN0b3J5IiwiaW5pdGlhbEVudHJpZXMiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwid2FpdEZvckFzeW5jQWN0aW9ucyIsInByb2Nlc3NSb3V0ZXMiLCJ1bmRlZmluZWQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInN0YXRlIiwiZ2V0U3RhdGUiLCJtYXJrdXAiLCJyZW5kZXJUb1N0cmluZyIsInNlbmQiLCJhcHAiLCJleHByZXNzIiwic2V0IiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ1c2UiLCJjb25zb2xlIiwiUE9SVCIsImxpc3RlbiIsImluZm8iLCJmZXRjaERhdGEiLCJhZnRlckxhc3RTbGFzaCIsImRpc3BhdGNoIiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJ0eXBlIiwicGF5bG9hZCIsImRhdGFSZWR1Y2VyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJoaXN0b3J5IiwiY29tYmluZVJlZHVjZXJzIiwicm91dGVyIiwiY29ubmVjdFJvdXRlciIsImJyb3dzZXJPck1lbW9yeUhpc3RvcnkiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInJvdXRlck1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiZXJyb3IiLCJ3YXJuIiwiQXBwIiwicm91dGVzIiwibWFwIiwiZXhhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwicHJvcHMiLCJGaWVsZCIsImlkIiwibmFtZSIsImxhYmVsIiwiY2xhc3NOYW1lIiwic2VjdGlvblN0eWxpbmciLCJoaW50VGV4dCIsIm90aGVyQXR0ciIsImZpZWxkTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsInByb3BWYWx1ZSIsIkVycm9yIiwib2JqZWN0T2YiLCJHcmlkIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZVBhcmFtcyIsInJlcG9fbmFtZSIsInVzZUVmZmVjdCIsIl9faXNCcm93c2VyX18iLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvd25lciIsInN0YXJnYXplcnNfY291bnQiLCJodG1sX3VybCIsIm1hcmdpbiIsImxvZ2luIiwiZ2V0SW5pdGlhbEFjdGlvbnMiLCJtYXRjaCIsImhlYWRlcnMiLCJ0ZXh0QWZ0ZXJMYXN0U2xhc2giLCJIb21lIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiZW1haWxGaWVsZCIsImVtYWlsQWRkcmVzcyIsInNpZ25lZEluVXNlckVtYWlsRmllbGQiLCJMb2dpbiIsImxvZ29uSWQiLCJsb2dvblBhc3N3b3JkIiwicmVjb2duaXNlZCIsInBhZ2VOYW1lIiwic3VjY2Vzc1VybCIsImJyYW5kIiwiYWxsb3dHdWVzdCIsInJlZ2lzdGVyQW5kR3Vlc3RPblRvcCIsInF1ZXJ5UGFyYW1zIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZWR1Y2UiLCJyZWdpc3RlckxpbmsiLCJndWVzdENoZWNrb3V0TGluayIsImluZGV4T2YiLCJhcGlFcnJvciIsInBhc3N3b3JkRmllbGRIaW50VGV4dCIsImhlYWRpbmdUZXh0IiwiZ2V0QnJhbmRDbGFzc05hbWUiLCJjdXJyZW50QnJhbmQiLCJSZWdpc3RlcmVkU2VjdGlvbiIsIlJlZ2lzdGVyQW5kR3Vlc3RTZWN0aW9uIiwiTG9naW5Gb3JtcyIsInJldmVyc2UiLCJvbmVPZlR5cGUiLCJmdW5jIiwib2JqZWN0IiwiYm9vbCIsIm9uZU9mIiwiTmF2YmFyIiwiTm9NYXRjaCIsInVzZVJvdXRlTWF0Y2giLCJ1cFRvTm93VXJsIiwibGFuZ3VhZ2VzIiwicGFyYW0iLCJUb3BMYW5ndWFnZXNOYXZCYXIiLCJuZXN0ZWRSb3V0ZXNEYXRhIiwiZGVzY3JpcHRpb24iLCJ0b3BpY1JvdXRlIiwiY3VycmVudFJvdXRlSGVyZSIsIlN3aXRjaFJvdXRlcyIsIlRvcGljIiwidG9waWNJZCIsInRvcGljIiwiZmluZCIsInJlc291cmNlcyIsIlNhbXBsZVVzZXJzIiwiQ3JlYXRlVXNlciIsIk5lc3RlZFJvdXRlcyIsIlJvdXRlc1dpdGhSZWR1eCIsIk5lc3RlZFJvdXRlc1N3aXRjaCIsInJvdXRlc1Byb2Nlc3NpbmciLCJyb3V0ZSIsIm1h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QUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBjb25zdCBxdWVyeVBhcmFtc1JlZHVjZXIgPSAoYWNjLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbiAmJiBhY2MgPT09ICcnKSB7XG4gICAgYWNjICs9IGA/JHthY3Rpb259YFxuICB9IGVsc2UgaWYgKGFjdGlvbikge1xuICAgIGFjYyArPSBgJiR7YWN0aW9ufWBcbiAgfVxuICByZXR1cm4gYWNjXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IHJvdXRlcywgeyBwcm9jZXNzUm91dGVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JvdXRlcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vLi4vc2hhcmVkL1JlZHV4L3N0b3JlJztcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoJ3llbGxvdycpLmJvbGQoKS5sb2coJ3JlcXVlc3RlZCByZXEudXJsJywgcmVxLnVybCk7XG5cbiAgLyoqKioqKioqIFJlZHV4IHNlcnZlciBzZXR1cCAqKioqKiovXG5cbiAgLy8gc2V0IGluaXRpYWwgc3RvcmUgdG8gYmUgcGFzc2VkIHRvIGNsaWVudCBpbiB3aW5kb3cuX2RhdGFcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRhdGE6IFtdLFxuICB9O1xuXG4gIC8vVSBjYW4gbm90IHVzZSBCcm93c2VyUm91dGVyIGNhdXNlIHRoZSByb3V0ZXMgYXJlIHByb2Nlc3NlZCBvbiBzZXJ2ZXIgbm90IGEgY2xpZW50XG4gIGNvbnN0IG1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXM6IFtyZXEudXJsXSB9KTtcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShtZW1vcnlIaXN0b3J5LCBpbml0aWFsU3RhdGUpO1xuXG4gIC8qKioqKiovXG5cbiAgLy8gV2FpdHMgZm9yIGFzeW5jaHJvbm91cyBhY3Rpb25zIGxpa2UgQVBJIGNhbGxzXG4gIC8vIGJlZm9yZSByZW5kZXJpbmcgdGhlIEhUTUxcbiAgY29uc3Qgd2FpdEZvckFzeW5jQWN0aW9ucyA9IHByb2Nlc3NSb3V0ZXModW5kZWZpbmVkLCBzdG9yZSwgcmVxKTtcblxuICBQcm9taXNlLmFsbCh3YWl0Rm9yQXN5bmNBY3Rpb25zKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpO1xuXG4gICAgICAvL2dldCBzdG9yZSB0aGF0IGlzIHBhc3NlZCB0byBfX0lOSVRJQUxfUkVEVVhfREFUQVxuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFJlZHV4UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXt7fX0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvUmVkdXhQcm92aWRlcj5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8L2hlYWQ+XG4gIFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICA8IS0tIGJlbG93IG9ubHkgd29ya3Mgd2l0aCBkZXYtc2VydmVyIGlzIHRoZSBoeWRyYXRlIHJlYWN0IHBhcnQgdGhhdCBtZWx0cyBidW5kbGUuanMgaW50byBzZXZlciBvdXRwdXRcbiAgICAgICAgICBcbiAgICAgICAgICBmcm9tIDpcblxuICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uLycsICdzcmMnKSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICAgIC0tPlxuICAgICAgICAgPHNjcmlwdCAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gJy4uL3NlcnZlci9taWRkbGV3YXJlL3Nzcic7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJy92aWV3cycpKTtcbi8qXG5pdCBpcyBpbXBvcnRhbnQgdG8gc2V0IGRpc3QgYXMgc3RhdGljIGZvbGRlciBmb3IgZXhwcmVzcyBzZXJ2ZXIgXG53aXRob3V0IHRoaXMgdGhlIDxzY3JpcHQgc3JjPVwiZGlzdC9idW5kbGUuanNcIj4gd2lsbCBiZSB0cmVhdGVkIGFzIGxpbmsgbm90IGEgZmlsZVxuKi9cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2Rpc3QnKSk7XG5cbi8vbWFuaXB1bGF0ZSByb3V0ZXNcblxuYXBwLnVzZSgnL2xvZ2luJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTU1IgbG9naW4gcm91dGUnKTtcbiAgbmV4dCgpO1xufSk7XG5cbi8vIFJlbmRlcnMgdGhlIGFwcFxuYXBwLnVzZShzc3JNaWRkbGV3YXJlKTtcblxuY29uc3QgUE9SVCA9IDMzODk7XG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgbG9nZ2VyLmluZm8oYHNlcnZlciB3ZWIgcnVubmluZyBvbiBwb3J0OiR7UE9SVH1gKTtcbn0pO1xuIiwiaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbi8vIDIgZnVuY3Rpb25zIG5lZWQgdG8gYmUgc3VwcGxpZWQgKGNsYXNzaWMgdGh1bmsgZnVuY3Rpb24pXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRhID0gKGFmdGVyTGFzdFNsYXNoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgLy9uZWVkcyB0byByZXR1cm4gcHJvbWlzZSBmb3IgZmluYWwgUHJvbWlzZS5hbGwoW3Byb21pc2VzXSkgaW4gc3NyLmpzXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUG9wdWxhclJlcG9zKGFmdGVyTGFzdFNsYXNoWzBdKTtcbiAgZGlzcGF0Y2goeyB0eXBlOiBcIlNUT1JFX0RBVEFcIiwgcGF5bG9hZDogeyBkYXRhOiByZXMgfSB9KTtcbn07XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuY29uc3QgZGF0YVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNUT1JFX0RBVEFcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5kYXRhO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFSZWR1Y2VyO1xuXG4vL3N0cnVjdHVyZVxuLy9kYXRhUmVkdWNlciA9IFtdXG4vKlxuICBkYXRhOmRhdGFSZWR1Y2VyXG4qL1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL3JlZHVjZXJzL2RhdGFSZWR1Y2VyXCI7XG5cbi8qKlxuICogQHBhcmFtIHt9IGhpc3RvcnkgZWl0aGVyIGJyb3dzZXIgb3IgbWVtb3J5IGhpc3Rvcnkoc2VydmVyIHNpdGUgc3RhdGljIHJvdXRlcilcbiAqL1xuY29uc3QgY3JlYXRlUm9vdFJlZHVjZXIgPSAoaGlzdG9yeSkgPT5cbiAgY29tYmluZVJlZHVjZXJzKHtcbiAgICBkYXRhLFxuICAgIHJvdXRlcjogY29ubmVjdFJvdXRlcihoaXN0b3J5KSxcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IGNyZWF0ZVJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGJyb3dzZXJPck1lbW9yeUhpc3RvcnksIHByZWxvYWRlZFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgY3JlYXRlUm9vdFJlZHVjZXIoYnJvd3Nlck9yTWVtb3J5SGlzdG9yeSksIC8vIHJvb3QgcmVkdWNlciB3aXRoIHJvdXRlciBzdGF0ZVxuICAgIHByZWxvYWRlZFN0YXRlLFxuICAgIGNvbXBvc2UoXG4gICAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgIHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlck9yTWVtb3J5SGlzdG9yeSksIC8vIGZvciBkaXNwYXRjaGluZyBoaXN0b3J5IGFjdGlvbnNcbiAgICAgICAgdGh1bmtNaWRkbGV3YXJlXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cbiIsImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhclJlcG9zKGxhbmd1YWdlID0gXCJhbGxcIikge1xuICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKFxuICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgXG4gICk7XG4gIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwiR0VUOlwiLCBlbmNvZGVkVVJJKTtcblxuICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLnRoZW4oKHJlcG9zKSA9PiByZXBvcy5pdGVtcylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgTm9NYXRjaCBmcm9tIFwiLi9Ob01hdGNoXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtyb3V0ZXMubWFwKCh7IHBhdGgsIGV4YWN0LCBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBleGFjdD17ZXhhY3R9XG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLnJlc3R9IC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8Um91dGUgcmVuZGVyPXsocHJvcHMpID0+IDxOb01hdGNoIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBGaWVsZCA9ICh7IHR5cGUgPSAndGV4dCcsIGlkLCBuYW1lLCBsYWJlbCwgY2xhc3NOYW1lLCBzZWN0aW9uU3R5bGluZywgaGludFRleHQsIC4uLm90aGVyQXR0ciB9KSA9PiB7XG4gIGNvbnN0IGZpZWxkTmFtZSA9IG5hbWUgfHwgaWRcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgJHtzZWN0aW9uU3R5bGluZ31gfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cF9fbGFiZWxcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICB7IGhpbnRUZXh0ICYmIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBfX2hpbnRcIj57aGludFRleHR9PC9zcGFuPiB9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwX19pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxpbnB1dCBhcmlhLXJlcXVpcmVkIHR5cGU9e3R5cGV9IG5hbWU9e2ZpZWxkTmFtZX0gaWQ9e2lkfSBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwX19pbnB1dCR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gey4uLm90aGVyQXR0cn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5GaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGludFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSA9PiB7XG4gICAgLy8gQXBwbHkgYGlzUmVxdWlyZWRgIGNvbmRpdGlvbmFsbHkgdG8gZmllbGRzIHdoaWNoIGFyZW4ndCBgaGlkZGVuYFxuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBUaGUgcHJvcCBcXGAke3Byb3BOYW1lfVxcYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gXFxgJHtjb21wb25lbnROYW1lfVxcYCwgYnV0IGl0cyB2YWx1ZSBpcyBcXGAke3Byb3BWYWx1ZX1cXGAuYClcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3AgXFxgJHtwcm9wTmFtZX1cXGAgb2YgdHlwZSBcXGAke3R5cGVvZiBwcm9wVmFsdWV9XFxgIHN1cHBsaWVkIHRvIFxcYCR7Y29tcG9uZW50TmFtZX1cXGAsIGV4cGVjdGVkIFxcYHN0cmluZ1xcYC5gKVxuICAgIH1cbiAgfSxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG90aGVyQXR0cjogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBzZWN0aW9uU3R5bGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vL3RodW5rIHJlZHV4IGFjdGlvblxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uL1JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5jb25zdCBHcmlkID0gKHByb3BzKSA9PiB7XG4gIC8vdGhpcyBzdGF0ZSBoYXMgYmVlbiBnZW5lcmF0ZWQgaW4gc2VydmVyIHNpdGUgKHNzci5qcylcbiAgY29uc3QgcmVwb3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgcmVwb19uYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vY2hlY2sgaWYgZGF0YSBoYXMgYmVlbiBhbHJlYWR5IGZldGNoZWQgb24gc2VydmVyXG4gICAgLy9pbiB0aGlzIGNhc2Ugc2luY2Ugc3RhdGUuZGF0YSBpcyBzaGFyZWQgYmV0d2VlbiByb3V0ZXNcbiAgICAvL3UgbmVlZCBjaGVjayBpZiBnbG9iYWwgd2VicGFjayBjb25zdCBpcyBfX2lzQnJvd3Nlcl9fIHNldFxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaERhdGEocmVwb19uYW1lKSk7XG4gICAgfVxuICB9LCBbcmVwb19uYW1lLCBkaXNwYXRjaF0pOyAvL2NoZWNrIGJhc2VkIG9uIHBhcmFtIGNoYW5nZVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXBvcyAmJiAoXG4gICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgIHtyZXBvcy5tYXAoKHsgbmFtZSwgb3duZXIsIHN0YXJnYXplcnNfY291bnQsIGh0bWxfdXJsIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9IHN0eWxlPXt7IG1hcmdpbjogMzAgfX0+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkB7b3duZXIubG9naW59PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuR3JpZC5nZXRJbml0aWFsQWN0aW9ucyA9ICh7IHJlcSwgbWF0Y2ggfSkgPT4ge1xuICBjb25zdCB7IGhlYWRlcnMgPSB7fSB9ID0gcmVxO1xuICAvL3RoaXMgZG9lcyBub3Qgd29yayBmb3IgbWUgcG9wdWxhci86aWQgPSByZXEucGFyYW0uaWRcbiAgY29uc3QgdGV4dEFmdGVyTGFzdFNsYXNoID0gcmVxLnVybC5tYXRjaCgvW15cXC9dKyQvKTtcbiAgLy8gY29uc3QgeyBjb29raWUgPSBudWxsIH0gPSBoZWFkZXJzO1xuXG4gIC8vcGFzcyBjb29raWUgdG8gZmlyc3QgdGh1bmsgbWV0aG9kXG4gIHJldHVybiBmZXRjaERhdGEodGV4dEFmdGVyTGFzdFNsYXNoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIERlY2xhcmUgYSBuZXcgc3RhdGUgdmFyaWFibGUsIHdoaWNoIHdlJ2xsIGNhbGwgXCJjb3VudFwiXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPnRoaXMgcm91dGVzIGlzIHRvIHNob3cgdGhhdCBob29rcyB0YWtlIG92ZXIgaW4gYnJvd3NlcjwvaDI+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vRmllbGQvRmllbGQnO1xuaW1wb3J0IHsgcXVlcnlQYXJhbXNSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBlbWFpbEZpZWxkID0gKGVtYWlsQWRkcmVzcykgPT4gKFxuICA8RmllbGRcbiAgICB0eXBlPSdlbWFpbCdcbiAgICBpZD0nZW1haWwnXG4gICAgbmFtZT0nbG9nb25JZCdcbiAgICBsYWJlbD0nRW1haWwgYWRkcmVzcydcbiAgICBkZWZhdWx0VmFsdWU9e2VtYWlsQWRkcmVzc31cbiAgICBhdXRvQ29tcGxldGU9J2VtYWlsJ1xuICAgIG1heExlbmd0aD0nNjAnXG4gICAgZGF0YS10cmFjay1jb25maWc9J3Ryb2xsZXlTaWduSW5GaWVsZF9lcnJvck1lc3NhZ2V8VHJvbGxleSBTaWduSW4gRmllbGQgRXJyb3IgTWVzc2FnZSdcbiAgICBhdXRvRm9jdXNcbiAgLz5cbik7XG5cbmNvbnN0IHNpZ25lZEluVXNlckVtYWlsRmllbGQgPSAoZW1haWxBZGRyZXNzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3hzLXJvdyB4cy0xMi0tbm9uZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0neHMtc3RhY2snPlxuICAgICAgICA8cCBkYXRhLWUyZT0nZW1haWwtYWRkcmVzcy1sYWJlbCc+e2VtYWlsQWRkcmVzc308L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBraW5kPSdsaW5rJ1xuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICBmb3JtQWN0aW9uPSc/bG9nT2ZmPXRydWUmYW1wO3JlZGlyZWN0VG9SZWZlcmVyPXRydWUnXG4gICAgICAgICAgZm9ybU5vVmFsaWRhdGVcbiAgICAgICAgICBkYXRhLWUyZT0nbm90LXlvdS1saW5rJ1xuICAgICAgICAgIGlkPSdub3RZb3VMaW5rJ1xuICAgICAgICAgIGRhdGEtdHJhY2stY2xpY2s9J3Ryb2xsZXlTaWduSW5fbm90WW91fFRyb2xsZXlTaWduSW4gTm90IFlvdSdcbiAgICAgICAgPlxuICAgICAgICAgIE5vdCB5b3U/XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEZpZWxkXG4gICAgICB0eXBlPSdoaWRkZW4nXG4gICAgICBuYW1lPSdsb2dvbklkJ1xuICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgZGVmYXVsdFZhbHVlPXtlbWFpbEFkZHJlc3N9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMb2dpbiA9ICh7XG4gIGxvZ29uSWQsXG4gIGxvZ29uUGFzc3dvcmQsXG4gIGVycm9yLFxuICByZWNvZ25pc2VkID0gZmFsc2UsXG4gIHBhZ2VOYW1lID0gJ3Vua25vd24nLFxuICBlbWFpbEFkZHJlc3MgPSAnJyxcbiAgc3VjY2Vzc1VybCxcbiAgYnJhbmQgPSAnYXJnJyxcbiAgYWxsb3dHdWVzdCA9IGZhbHNlLFxufSkgPT4ge1xuICBjb25zdCByZWdpc3RlckFuZEd1ZXN0T25Ub3AgPSB0cnVlO1xuXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gW1xuICAgIHJlY29nbmlzZWQgPyAnbG9nT2ZmPXRydWUnIDogbnVsbCxcbiAgICBhbGxvd0d1ZXN0ID8gJ2FsbG93R3Vlc3Q9dHJ1ZScgOiBudWxsLFxuICAgIGBwYWdlTmFtZT0ke3BhZ2VOYW1lfWAsXG4gICAgc3VjY2Vzc1VybCA/IGBzdWNjZXNzVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN1Y2Nlc3NVcmwpfWAgOiBudWxsLFxuICBdO1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5UGFyYW1zLnJlZHVjZShxdWVyeVBhcmFtc1JlZHVjZXIsICcnKTtcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gYC9yZWdpc3RlciR7cXVlcnlTdHJpbmd9YDtcblxuICBjb25zdCBndWVzdENoZWNrb3V0TGluayA9IGAke3N1Y2Nlc3NVcmx9JHtcbiAgICBzdWNjZXNzVXJsICYmIHN1Y2Nlc3NVcmwuaW5kZXhPZignPycpID4gLTEgPyAnJicgOiAnPydcbiAgfWd1ZXN0PXRydWVgO1xuXG4gIGNvbnN0IGFwaUVycm9yID1cbiAgICBlcnJvciAmJlxuICAgIGVycm9yKFxuICAgICAgJ3Ryb2xsZXlTaWduSW5TeXN0ZW1fZXJyb3JNZXNzYWdlfFRyb2xsZXkgU2lnbkluIFN5c3RlbSBFcnJvciBNZXNzYWdlJ1xuICAgICk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGRIaW50VGV4dCA9XG4gICAgKGFwaUVycm9yICYmICdIaW50IC0gdGhpcyBpbmNsdWRlcyAyIGxldHRlcnMgYW5kIDEgbnVtYmVyJykgfHwgJyc7XG4gIGNvbnN0IGhlYWRpbmdUZXh0ID0gcmVjb2duaXNlZCA/ICdQbGVhc2Ugc2lnbiBpbiBhZ2FpbicgOiAnU2lnbiBpbic7XG5cbiAgY29uc3QgZ2V0QnJhbmRDbGFzc05hbWUgPSAoY3VycmVudEJyYW5kKSA9PlxuICAgIGN1cnJlbnRCcmFuZCA9PT0gJ2FyZycgPyAnJyA6IGAgJHtjdXJyZW50QnJhbmR9LXZhcmlhdGlvbmA7XG5cbiAgY29uc3QgUmVnaXN0ZXJlZFNlY3Rpb24gPSAoKSA9PiAoXG4gICAgPHNlY3Rpb24gZGF0YS10ZXN0PSdmb3Jtcy1yZWdpc3RlcmVkLXVzZXItc2VjdGlvbic+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoMiB0ZXh0LWNlbnRlciBib2xkJyBkYXRhLWUyZT0nbG9naW4tcGFnZS10aXRsZSc+XG4gICAgICAgIHtoZWFkaW5nVGV4dH1cbiAgICAgIDwvaDE+XG4gICAgICB7YXBpRXJyb3J9XG4gICAgICB7YnJhbmQgPT09ICdoYWInICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgU2lnbiBpbiB0byB5b3VyIEFyZ29zIGFjY291bnQgb3IgY3JlYXRlIGEgbmV3IG9uZSwgdGhlbiB3ZSZhcG9zO2xsXG4gICAgICAgICAgdGFrZSB5b3UgdG8gY2hlY2sgb3V0LlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAgPGZvcm0gbWV0aG9kPSdwb3N0JyBub1ZhbGlkYXRlIGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIHshcmVjb2duaXNlZCAmJiBlbWFpbEZpZWxkKGxvZ29uSWQpfVxuICAgICAgICB7cmVjb2duaXNlZCAmJiBlbWFpbEFkZHJlc3MgJiYgc2lnbmVkSW5Vc2VyRW1haWxGaWVsZChlbWFpbEFkZHJlc3MpfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBpZD0ncGFzc3dvcmQnXG4gICAgICAgICAgICBuYW1lPSdsb2dvblBhc3N3b3JkJ1xuICAgICAgICAgICAgbGFiZWw9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsb2dvblBhc3N3b3JkfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdwYXNzd29yZCdcbiAgICAgICAgICAgIG1heExlbmd0aD0nNjAnXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoYXNTaG93SGlkZSR7Z2V0QnJhbmRDbGFzc05hbWUoYnJhbmQpfWB9XG4gICAgICAgICAgICBkYXRhLXRyYWNrLWNvbmZpZz0ndHJvbGxleVNpZ25JbkZpZWxkX2Vycm9yTWVzc2FnZXxUcm9sbGV5IFNpZ25JbiBGaWVsZCBFcnJvciBNZXNzYWdlJ1xuICAgICAgICAgICAgaGludFRleHQ9e3Bhc3N3b3JkRmllbGRIaW50VGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBraW5kPSdsaW5rJ1xuICAgICAgICAgICAgICBhcz0nYSdcbiAgICAgICAgICAgICAgaHJlZj0nL2ZvcmdvdHRlbi1wYXNzd29yZCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24tbGluaydcbiAgICAgICAgICAgICAgZGF0YS1lMmU9J2ZvcmdvdC1wYXNzd29yZC1saW5rJ1xuICAgICAgICAgICAgICBkYXRhLXRyYWNrLWNsaWNrPSd0cm9sbGV5U2lnbkluX2ZvcmdvdFBhc3N3b3JkfFRyb2xsZXlTaWduSW4gRm9yZ290IFBhc3N3b3JkJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGb3Jnb3R0ZW4geW91ciBwYXNzd29yZD9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgaGFzTG9hZGluZ1xuICAgICAgICAgIGRhdGEtZTJlPSdsb2dpbi1zdWJtaXQtYnV0dG9uJ1xuICAgICAgICAgIGRhdGEtdHJhY2stc3VibWl0PSd0cm9sbGV5U2lnbkluX3NpZ25JbnxUcm9sbGV5U2lnbkluIFNpZ25JbidcbiAgICAgICAgICBmdWxsXG4gICAgICAgID5cbiAgICAgICAgICBTaWduIGluIHNlY3VyZWx5XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcblxuICBjb25zdCBSZWdpc3RlckFuZEd1ZXN0U2VjdGlvbiA9ICgpID0+IChcbiAgICA8c2VjdGlvbiBkYXRhLXRlc3Q9J2Zvcm1zLW5ldy1jdXN0b21lcnMtc2VjdGlvbic+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoMiB0ZXh0LWNlbnRlciBib2xkJyBkYXRhLWUyZT0nbG9naW4tcGFnZS10aXRsZSc+XG4gICAgICAgIE5ldyBDdXN0b21lcnNcbiAgICAgIDwvaDE+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdmb3JtLWN0YSBmb250LWJvbGQgdGV4dC1jZW50ZXInPm5ld0N1c3RvbWVyPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWN1c3RvbWVyLWN0YS13cmFwcGVyJz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBoYXNMb2FkaW5nXG4gICAgICAgICAgICBhcz0nYSdcbiAgICAgICAgICAgIGtpbmQ9J3NlY29uZGFyeSdcbiAgICAgICAgICAgIGRhdGEtYnRuLXdpdGgtbG9hZGluZ1xuICAgICAgICAgICAgZGF0YS1lMmU9J3JlZ2lzdGVyLWxpbmsnXG4gICAgICAgICAgICBocmVmPXtyZWdpc3Rlckxpbmt9XG4gICAgICAgICAgICBmdWxsXG4gICAgICAgICAgICBkYXRhLXRyYWNrLWNsaWNrPSd0cm9sbGV5U2lnbkluX3JlZ2lzdGVyfFRyb2xsZXlTaWduaW4gUmVnaXN0ZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlIGFuIGFjY291bnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7YWxsb3dHdWVzdCAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGFzPSdhJ1xuICAgICAgICAgICAgICBraW5kPSdzZWNvbmRhcnknXG4gICAgICAgICAgICAgIGhhc0xvYWRpbmdcbiAgICAgICAgICAgICAgZGF0YS1idG4td2l0aC1sb2FkaW5nXG4gICAgICAgICAgICAgIGRhdGEtZTJlPSdndWVzdC1jaGVja291dC1saW5rJ1xuICAgICAgICAgICAgICBocmVmPXtndWVzdENoZWNrb3V0TGlua31cbiAgICAgICAgICAgICAgZnVsbFxuICAgICAgICAgICAgICBkYXRhLXRyYWNrLWNsaWNrPSd0cm9sbGV5U2lnbkluX2ludGVyYWN0aW9ufFRyb2xsZXkgU2lnbkluIENvbnRpbnVlIEFzIGEgR3Vlc3QgQnV0dG9ufHRyb2xsZXk6YWNjb3VudFNpZ25Jbjpjb250aW51ZWFzYWd1ZXN0YnV0dG9uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb250aW51ZSBhcyBhIGd1ZXN0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG5cbiAgY29uc3QgTG9naW5Gb3JtcyA9IFs8UmVnaXN0ZXJBbmRHdWVzdFNlY3Rpb24gLz4sIDxSZWdpc3RlcmVkU2VjdGlvbiAvPl07XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXRlc3Q9J2xvZ2luLWZvcm1zJz5cbiAgICAgIHshcmVnaXN0ZXJBbmRHdWVzdE9uVG9wID8gTG9naW5Gb3Jtcy5yZXZlcnNlKCkgOiBMb2dpbkZvcm1zfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTG9naW4ucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgbG9nb25JZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9nb25QYXNzd29yZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVjb2duaXNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVtYWlsQWRkcmVzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFnZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN1Y2Nlc3NVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJyYW5kOiBQcm9wVHlwZXMub25lT2YoWydhcmcnLCAnaGFiJywgJ3R1YyddKSxcbiAgYWxsb3dHdWVzdDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgLypcbiAgICB0aG9zZSBsaW5rIGhhdmUgdG8gYmUgYSB0YWdzIG9yIExpbmsgY2F1c2UgdGhlIHBhZ2UgaGFzIHRvIGJlIHJlbG9hZGVkIGluIG9yZGVyIHRvIHdvcmsgaW4gc2VydmVyIHNpdGUgXG4qL1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBrZXk9eydob21lJ30+XG4gICAgICAgICAgPGEgaHJlZj17YC9gfT5ob21lPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXsncm91dGVzV2l0aFJlZHV4J30+XG4gICAgICAgICAgPGEgaHJlZj17YC9yb3V0ZXMtd2l0aC1yZWR1eGB9PnJvdXRlcyB3aXRoIFJlZHV4IEV4YW1wbGU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBrZXk9eyduZXN0ZWRSb3V0ZXMnfT5cbiAgICAgICAgICA8YSBocmVmPXtgL25lc3RlZC1yb3V0ZXNgfT5uZXN0ZWQgUm91dGVzIEV4YW1wbGU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBrZXk9eydzd2l0Y2hXaXRoTmVzdGVkUm91dGVzJ30+XG4gICAgICAgICAgPGEgaHJlZj17YC9zd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzYH0+XG4gICAgICAgICAgICBzd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzIEV4YW1wbGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBrZXk9eydzd2l0Y2hXaXRoTmVzdGVkUm91dGVzJ30+XG4gICAgICAgICAgPGEgaHJlZj17YC9sb2dpbmB9PkxPR0lOIHBhZ2UgZG9uZSBmb3IgQ3lwcmVzcyB0ZXN0aW5nPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9NYXRjaCAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEZvdXIgT2ggRm91clxuICAgIDwvZGl2PlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIHVzZVJvdXRlTWF0Y2gsIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vL3NhbXBsZSBkYXRhIGFuZCBjb21wb25lbnRzXG5pbXBvcnQgbmVzdGVkUm91dGVzRGF0YSBmcm9tIFwiLi4vZGF0YS9uZXN0ZWRSb3V0ZXNEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHRoaXMgaG9vayByZXR1cm5zIHVwIHRvIG5vdyB1cmwgZm9yIG5lc3RlZCByb3V0ZXNcbiAgLy8gaW4gdGhpcyBjYXNlIHRoZSBwYXJlbnQgcm91dGUgaXMgL25lc3RlZC1yb3V0ZXNcbiAgY29uc3QgeyB1cmw6IHVwVG9Ob3dVcmwgfSA9IHVzZVJvdXRlTWF0Y2goKTtcblxuICBjb25zdCBsYW5ndWFnZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJBbGxcIixcbiAgICAgIHBhcmFtOiBcImFsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXG4gICAgICBwYXJhbTogXCJqYXZhc2NyaXB0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJ1YnlcIixcbiAgICAgIHBhcmFtOiBcInJ1YnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUHl0aG9uXCIsXG4gICAgICBwYXJhbTogXCJweXRob25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVwiLFxuICAgICAgcGFyYW06IFwiamF2YVwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgVG9wTGFuZ3VhZ2VzTmF2QmFyID0gKCkgPT5cbiAgICBsYW5ndWFnZXMubWFwKCh7IG5hbWUsIHBhcmFtIH0pID0+IChcbiAgICAgIDxsaSBrZXk9e3BhcmFtfT5cbiAgICAgICAgPGEgaHJlZj17YC9wb3B1bGFyLyR7cGFyYW19YH0+e25hbWV9PC9hPlxuICAgICAgPC9saT5cbiAgICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5MYW5ndWFnZXM8L2gzPlxuICAgICAgPFRvcExhbmd1YWdlc05hdkJhciAvPlxuICAgICAgPGgzPiBDbGllbnQgTmFWIGxpbmsgd2l0aCByZWR1eCBleGFtcGxlPC9oMz5cbiAgICAgIDxMaW5rIHRvPXtgL3BvcHVsYXIvamF2YXNjcmlwdGB9Pk5hdiBMaW5rIGphdmFzY3JpcHQgd2l0aCBSZWR1eDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vc2FtcGxlIGRhdGEgYW5kIGNvbXBvbmVudHNcbmltcG9ydCBUb3BpYyBmcm9tIFwiLi9jb21wcy9Ub3BpY1wiO1xuaW1wb3J0IG5lc3RlZFJvdXRlc0RhdGEgZnJvbSBcIi4uLy4uL2RhdGEvbmVzdGVkUm91dGVzRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyB0aGlzIGhvb2sgcmV0dXJucyB1cCB0byBub3cgdXJsIGZvciBuZXN0ZWQgcm91dGVzXG4gIC8vIGluIHRoaXMgY2FzZSB0aGUgcGFyZW50IHJvdXRlIGlzIC9uZXN0ZWQtcm91dGVzXG4gIGNvbnN0IHsgcGF0aCwgdXJsOiB1cFRvTm93VXJsIH0gPSB1c2VSb3V0ZU1hdGNoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhyIC8+XG4gICAgICA8aDM+bmVzdGVkIHJvdXRlczwvaDM+XG4gICAgICA8dWw+XG4gICAgICAgIHtuZXN0ZWRSb3V0ZXNEYXRhLm1hcCgoeyBkZXNjcmlwdGlvbiwgdG9waWNSb3V0ZSB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dG9waWNSb3V0ZX0+XG4gICAgICAgICAgICA8TGluayB0bz17YCR7dXBUb05vd1VybH0vJHt0b3BpY1JvdXRlfWB9PntkZXNjcmlwdGlvbn08L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPFJvdXRlIHBhdGg9e2Ake3BhdGh9Lzp0b3BpY0lkYH0+XG4gICAgICAgIDxUb3BpYyAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgVXNlcnMsIHsgQ3JlYXRlVXNlciB9IGZyb20gXCIuL2NvbXBzL1VzZXJzXCI7XG5cbmNvbnN0IGN1cnJlbnRSb3V0ZUhlcmUgPSBcIi9zd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aXRjaFJvdXRlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhyIC8+XG4gICAgICA8aDM+ZXhhbXBsZSBvZiBzd2l0Y2ggc3RhdGVtZW50IHdpdGggZXhhY3Qgcm91dGUgPC9oMz5cbiAgICAgIDxoND5cbiAgICAgICAgJmx0O1JvdXRlIHBhdGg9XCJ7YCR7Y3VycmVudFJvdXRlSGVyZX0vdXNlcnNgfVwiIGV4YWN0IC8mZ3Q7IDxociAvPiBoYXMgdG9cbiAgICAgICAgYmUgZXhhY3QgaWYgaXQgd291biB0IGJlIGl0IHdvdWxkIGZhbGwgdG8gdGhlIG5leHQgY3JlYXRlIHJvdXRlXG4gICAgICA8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkga2V5PVwiYWIxXCI+XG4gICAgICAgICAgPGEgaHJlZj17YCR7Y3VycmVudFJvdXRlSGVyZX0vdXNlcnNgfT4vdXNlcnM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBrZXk9XCJhYjJcIj5cbiAgICAgICAgICA8YSBocmVmPXtgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vycy9jcmVhdGVgfT4vdXNlcnMvY3JlYXRlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIHsvKlxuICAgICAgICBSZWFjdCByb3V0ZXIgZG9lcyBwYXJ0aWFsIG1hdGNoaW5nLCBzbyB1bmxlc3MgaXQgc3BlY2lmeSAnZXhhY3QnIGl0IFxuICAgICAgICB3aWxsIHJldHVybiBmaXJzdCBtYXRjaCBmb3Igcm91dGUgL3VzZXJzL2NyZWF0ZSBpdCB3b3VsZCBcbiAgICAgICAgcmV0dXJuIGF0aD1cIi91c2Vyc1wiXG5cbiAgICAgICAgaG93ZXZlciBpZiB5b3Ugc3BlY2lmeSAgPFJvdXRlIHBhdGg9XCIvdXNlcnNcIiBleGFjdCBjb21wb25lbnQ9e1VzZXJzfSAvPlxuICAgICAgICB0aGVuIGl0IHdpbGwgb25seSByZXR1cm4gdGhpcyByb3V0ZSBmb3IgZXhhY3QgbWF0Y2ggL3VzZXJzIGJ1dCBub3QgL3VzZXJzL2NyZWF0ZVVzZXJzXG5cbiAgICAgICAgbm90aWNlIHRoYXQgVSBvbmx5IG5lZWQgdG8gc3BlY2lmeSBleGFjdCBmb3IgdGhlIGZpcnN0IHJvdXRlIHVubGVzcyB5b3VyIHJvdXRlIHRyZWVcbiAgICAgICAgaGFzIGV4dGVuc2lvbiBvZlxuICAgICAgICB1c2Vycy9jcmVhdGUgYW5kIHVzZXIvY3JlYXRlLzp1c2VySWQgdGhlbiBleGFjdCBpcyBuZWVkIHRvIGJlIHNldCBmb3IgdGhlIHNob3J0ZXIgcm91dGUgaW4gXG4gICAgICAgIHRyZWUgdXNlcnMvY3JlYXRlXG4gICAgICAqL31cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPXtgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vyc2B9IGV4YWN0PlxuICAgICAgICAgIDxVc2VycyAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD17YCR7Y3VycmVudFJvdXRlSGVyZX0vdXNlcnMvY3JlYXRlYH0+XG4gICAgICAgICAgPENyZWF0ZVVzZXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBuZXN0ZWRSb3V0ZXNEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL25lc3RlZFJvdXRlc0RhdGFcIjtcblxuY29uc3QgVG9waWMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9waWNJZCB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgdG9waWMgPSBuZXN0ZWRSb3V0ZXNEYXRhLmZpbmQoXG4gICAgKHsgdG9waWNSb3V0ZSB9KSA9PiB0b3BpY1JvdXRlID09PSB0b3BpY0lkXG4gICk7XG4gIGNvbnN0IHsgcmVzb3VyY2VzIH0gPSB0b3BpYztcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+e3Jlc291cmNlcy5uYW1lfTwvaDM+XG4gICAgICA8cD57cmVzb3VyY2VzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGljO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTYW1wbGVVc2VycyA9ICgpID0+IChcbiAgPHVsPlxuICAgIDxsaT5HcmVnPC9saT5cbiAgICA8bGk+U3RlZmFubzwvbGk+XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBDcmVhdGVVc2VyID0gKCkgPT4gPHA+dGhpcyBpcyBzYW1wbGUgdGV4dCBmb3IgQ3JlYXRlVXNlcjwvcD47XG5cbmV4cG9ydCB7IFNhbXBsZVVzZXJzIGFzIGRlZmF1bHQsIENyZWF0ZVVzZXIgfTtcbiIsImNvbnN0IG5lc3RlZFJvdXRlc0RhdGEgPSBbXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJob3cgdGhlIDxMaW5rPiB0YWcgd29ya3MgP1wiLFxuICAgIHRvcGljUm91dGU6IFwibGlua1RhZ1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCI8TGluaz4gdGFnXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMaW5rIHRhZyBpdCB3aWxsIGFsd2F5cyB3b3JrIG9uIGNsaWVudCBhbmQgZG9lcyBub3QgcmVsb2FkIHRoZSBwYWdlXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiBcImhvdyB0aGUgdGhlIDxhPiB0YWdzIHdvcmsgP1wiLFxuICAgIHRvcGljUm91dGU6IFwiYVRhZ1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCI8YT4gdGFnXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJhIHRhZyB3aWxsIGFsd2F5cyByZWxvYWQgdGhlIHBhZ2UgY2F1c2luZyBzZXJ2ZXIgdG8gcmUtcnVuXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiBcImNvbnN0IHt1cmx9ID11c2VSb3V0ZU1hdGNoKCkgaG9va1wiLFxuICAgIHRvcGljUm91dGU6IFwicmVhZC11cmwtcGFyYW1ldGVyc1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCJjb25zdCB7dXJsfSA9IHVzZVJvdXRlTWF0Y2goKVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwie3VybH0gdXNlZCBmb3IgbmVzdGVkIGxpbmtzLCBjYXVzZSB0aSB3aWxsIHJldHVybiBzb21ldGhpbmcgYXM6IHRvcGljcy9yZWFjdC1yb3V0ZXJcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246IFwiY29uc3Qge3BhdGh9ID11c2VSb3V0ZU1hdGNoKCkgaG9va1wiLFxuICAgIHRvcGljUm91dGU6IFwicmVhZC1wYXRoLXBhcmFtZXRlcnNcIixcbiAgICByZXNvdXJjZXM6IHtcbiAgICAgIG5hbWU6IFwiY29uc3Qge3BhdGh9ID0gdXNlUm91dGVNYXRjaCgpXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJ7cGF0aH0gdXNlZCBmb3IgbmVzdGVkIHJvdXRlcywgY2F1c2UgaXQgd2lsbCByZXRhaW4gcGFyYW0gYXMgIHBhdGgvOnRvcGljSWRcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246IFwiY29uc3Qge3RvcGljSWR9ID0gdXNlUGFyYW1zKCkgaG9va1wiLFxuICAgIHRvcGljUm91dGU6IFwicmVhZC1wYXJhbXNcIixcbiAgICByZXNvdXJjZXM6IHtcbiAgICAgIG5hbWU6IFwiY29uc3Qge3RvcGljSWR9ID0gdXNlUGFyYW1zKClcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcInVzZWQgZm9yIGdldHRpbmcgLzp0b3BpY0lkIHBhcmFtIFwiLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBuZXN0ZWRSb3V0ZXNEYXRhO1xuIiwiaW1wb3J0IHsgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgTmVzdGVkUm91dGVzIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZU5lc3RpbmcvTmVzdGVkUm91dGVzJztcbmltcG9ydCBOZXN0ZWRSb3V0ZXNTd2l0Y2ggZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9Td2l0Y2hfRXhhY3RfTmVzdGVkX1JvdXRlcyc7XG5pbXBvcnQgUm91dGVzV2l0aFJlZHV4IGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZXNXaXRoUmVkdXgnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9jb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbic7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL25lc3RlZC1yb3V0ZXMnLFxuICAgIGNvbXBvbmVudDogTmVzdGVkUm91dGVzLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9yb3V0ZXMtd2l0aC1yZWR1eCcsXG4gICAgY29tcG9uZW50OiBSb3V0ZXNXaXRoUmVkdXgsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3N3aXRjaC13aXRoLW5lc3RlZC1yb3V0ZXMnLFxuICAgIGNvbXBvbmVudDogTmVzdGVkUm91dGVzU3dpdGNoLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9wb3B1bGFyLzpyZXBvX25hbWUnLFxuICAgIGNvbXBvbmVudDogR3JpZCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvbG9naW4nLFxuICAgIGNvbXBvbmVudDogTG9naW4sXG4gIH0sXG5dO1xuXG4vLyBSZWN1cnNpdmVseSBmZXRjaCBkYXRhXG5leHBvcnQgY29uc3QgcHJvY2Vzc1JvdXRlcyA9IChyb3V0ZXNQcm9jZXNzaW5nID0gcm91dGVzLCBzdG9yZSwgcmVxKSA9PiB7XG4gIC8vcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgLy8gV2lsbCBjb250YWluIHJvdXRlcyB0aGF0IHdpbGwgYmUgcHJvY2Vzc2VkIGluIHRoZSBuZXh0IHJlY3Vyc2lvblxuICBjb25zdCBuZXh0ID0gW107XG5cbiAgLy8gTWFwIHRocm91Z2ggdGhlIHJvdXRlcyBhbmQgZmluZCBhbnkgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBwYXRoXG5cbiAgcmV0dXJuIHJvdXRlc1Byb2Nlc3NpbmcubWFwKChyb3V0ZSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoID0gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGxldCByZWR1eEFjdGlvbjtcblxuICAgICAgLy8gSWYgdGhlIHJvdXRlIGhhcyBzdWItcm91dGVzLCBxdWV1ZSB0aGVtIGZvciB0aGUgbmV4dCByZWN1cnNpb25cbiAgICAgIC8vIGlmIChyb3V0ZS5yb3V0ZXMpIG5leHQucHVzaCguLi5yb3V0ZS5yb3V0ZXMpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIGEgbGF6eS1sb2FkZWQgTG9hZGFibGUgd3JhcHBlclxuICAgICAgLyogaWYgKHJvdXRlLmNvbXBvbmVudD8uY29udGV4dFR5cGVzPy5sb2FkYWJsZSkge1xuICAgICAgICAgIGNvbnN0IExvYWRhYmxlQ29udGFpbmVyID0gcm91dGUuY29tcG9uZW50XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IExvYWRhYmxlQ29udGFpbmVyKCk/LnN0YXRlPy5sb2FkZWQ/LmRlZmF1bHRcbiAgICAgICAgICBpZiAoY29tcG9uZW50Py5nZXRJbml0aWFsQWN0aW9ucykge1xuICAgICAgICAgICAgaW5pdGlhbEFjdGlvbiA9IGNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucyh7IHJlcSwgbWF0Y2ggfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gKi9cblxuICAgICAgLy8gUmVndWxhciBub24tbGF6eSBjb21wb25lbnQgdGhhdCBjaGVjayBmb3IgaW5pdGlhbEFjdGlvbnNcbiAgICAgIGlmIChyb3V0ZS5jb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMpIHtcbiAgICAgICAgcmVkdXhBY3Rpb24gPSByb3V0ZS5jb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pO1xuICAgICAgfVxuXG4gICAgICAvL3RoaXMgcHJvbWlzZSBoYXMgdG8gYmUgcmVzb2x2ZWQgZXZlbiB0aG91Z2ggdGhlcmUgYXJlIG5vdCBhbnkgb3RoZXIgaW5pdGlhbCBhY3Rpb25zIG9yIG5lc3RlZCByb3V0ZXNcbiAgICAgIGlmIChyZWR1eEFjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVkdXhBY3Rpb24nLCByZWR1eEFjdGlvbik7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChyZWR1eEFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWNvbG9yLWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=