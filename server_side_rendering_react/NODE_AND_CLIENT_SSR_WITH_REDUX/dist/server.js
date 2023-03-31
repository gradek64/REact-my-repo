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

// Renders the app
app.use(_server_middleware_ssr__WEBPACK_IMPORTED_MODULE_3__["default"]);
var PORT = 3389;
app.listen(PORT, function () {
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.info("client web running on port:".concat(PORT));
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
    key: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "routesWithRedux"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/routes-with-redux"
  }, "routes with Redux Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "nestedRoutes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/nested-routes"
  }, "nested Routes Example")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "switchWithNestedRoutes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/switch-with-nested-routes"
  }, "switch-with-nested-routes Example"))));
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






var routes = [{
  path: "/",
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: "/nested-routes",
  component: _components_routeNesting_NestedRoutes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: "/routes-with-redux",
  component: _components_RoutesWithRedux__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: "/switch-with-nested-routes",
  component: _components_routeNesting_Switch_Exact_Nested_Routes__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/popular/:repo_name",
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        console.log("reduxAction", reduxAction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1JlZHV4L2FjdGlvbnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1JlZHV4L3JlZHVjZXJzL2RhdGFSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvUmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9SZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0hvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ob01hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUm91dGVzV2l0aFJlZHV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL05lc3RlZFJvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9Td2l0Y2hfRXhhY3RfTmVzdGVkX1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9jb21wcy9Ub3BpYy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9jb21wcy9Vc2Vycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL25lc3RlZFJvdXRlc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWNvbG9yLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiJdLCJuYW1lcyI6WyJzc3JNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsImxvZ2dlciIsImNvbG9yIiwiYm9sZCIsImxvZyIsInVybCIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJtZW1vcnlIaXN0b3J5IiwiY3JlYXRlTWVtb3J5SGlzdG9yeSIsImluaXRpYWxFbnRyaWVzIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsIndhaXRGb3JBc3luY0FjdGlvbnMiLCJwcm9jZXNzUm91dGVzIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJzdGF0ZSIsImdldFN0YXRlIiwibWFya3VwIiwicmVuZGVyVG9TdHJpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJSZWR1eFByb3ZpZGVyIiwiU3RhdGljUm91dGVyIiwibG9jYXRpb24iLCJjb250ZXh0IiwiQXBwIiwic2VuZCIsImNvbmNhdCIsImFwcCIsImV4cHJlc3MiLCJzZXQiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsInVzZSIsIlBPUlQiLCJsaXN0ZW4iLCJpbmZvIiwiZmV0Y2hEYXRhIiwiYWZ0ZXJMYXN0U2xhc2giLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJkaXNwYXRjaCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsImZldGNoUG9wdWxhclJlcG9zIiwic2VudCIsInR5cGUiLCJwYXlsb2FkIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkYXRhUmVkdWNlciIsImxlbmd0aCIsImFjdGlvbiIsImNyZWF0ZVJvb3RSZWR1Y2VyIiwiaGlzdG9yeSIsImNvbWJpbmVSZWR1Y2VycyIsInJvdXRlciIsImNvbm5lY3RSb3V0ZXIiLCJicm93c2VyT3JNZW1vcnlIaXN0b3J5IiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwiZmV0Y2giLCJqc29uIiwicmVwb3MiLCJpdGVtcyIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJOYXZiYXIiLCJTd2l0Y2giLCJyb3V0ZXMiLCJtYXAiLCJleGFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJSb3V0ZSIsInByb3BzIiwiX2V4dGVuZHMiLCJOb01hdGNoIiwiR3JpZCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJfdXNlUGFyYW1zIiwidXNlUGFyYW1zIiwicmVwb19uYW1lIiwidXNlRWZmZWN0IiwiX19pc0Jyb3dzZXJfXyIsIkZyYWdtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJuYW1lIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJocmVmIiwibG9naW4iLCJnZXRJbml0aWFsQWN0aW9ucyIsIl9yZWYyIiwibWF0Y2giLCJfcmVxJGhlYWRlcnMiLCJoZWFkZXJzIiwidGV4dEFmdGVyTGFzdFNsYXNoIiwiSG9tZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnQiLCJzZXRDb3VudCIsIm9uQ2xpY2siLCJfdXNlUm91dGVNYXRjaCIsInVzZVJvdXRlTWF0Y2giLCJ1cFRvTm93VXJsIiwibGFuZ3VhZ2VzIiwicGFyYW0iLCJUb3BMYW5ndWFnZXNOYXZCYXIiLCJMaW5rIiwidG8iLCJuZXN0ZWRSb3V0ZXNEYXRhIiwiZGVzY3JpcHRpb24iLCJ0b3BpY1JvdXRlIiwiVG9waWMiLCJjdXJyZW50Um91dGVIZXJlIiwiU3dpdGNoUm91dGVzIiwiVXNlcnMiLCJDcmVhdGVVc2VyIiwidG9waWNJZCIsInRvcGljIiwiZmluZCIsInJlc291cmNlcyIsIlNhbXBsZVVzZXJzIiwiTmVzdGVkUm91dGVzIiwiUm91dGVzV2l0aFJlZHV4IiwiTmVzdGVkUm91dGVzU3dpdGNoIiwicm91dGVzUHJvY2Vzc2luZyIsInJvdXRlIiwibWF0Y2hQYXRoIiwicmVkdXhBY3Rpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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Q0FBQztBQUNKLENBQUM7QUFFY3hFLHFFQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVyQixvRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IHJvdXRlcywgeyBwcm9jZXNzUm91dGVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JvdXRlcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vLi4vc2hhcmVkL1JlZHV4L3N0b3JlJztcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoJ3llbGxvdycpLmJvbGQoKS5sb2coJ3JlcXVlc3RlZCByZXEudXJsJywgcmVxLnVybCk7XG5cbiAgLyoqKioqKioqIFJlZHV4IHNlcnZlciBzZXR1cCAqKioqKiovXG5cbiAgLy8gc2V0IGluaXRpYWwgc3RvcmUgdG8gYmUgcGFzc2VkIHRvIGNsaWVudCBpbiB3aW5kb3cuX2RhdGFcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRhdGE6IFtdLFxuICB9O1xuXG4gIC8vVSBjYW4gbm90IHVzZSBCcm93c2VyUm91dGVyIGNhdXNlIHRoZSByb3V0ZXMgYXJlIHByb2Nlc3NlZCBvbiBzZXJ2ZXIgbm90IGEgY2xpZW50XG4gIGNvbnN0IG1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXM6IFtyZXEudXJsXSB9KTtcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShtZW1vcnlIaXN0b3J5LCBpbml0aWFsU3RhdGUpO1xuXG4gIC8qKioqKiovXG5cbiAgLy8gV2FpdHMgZm9yIGFzeW5jaHJvbm91cyBhY3Rpb25zIGxpa2UgQVBJIGNhbGxzXG4gIC8vIGJlZm9yZSByZW5kZXJpbmcgdGhlIEhUTUxcbiAgY29uc3Qgd2FpdEZvckFzeW5jQWN0aW9ucyA9IHByb2Nlc3NSb3V0ZXModW5kZWZpbmVkLCBzdG9yZSwgcmVxKTtcblxuICBQcm9taXNlLmFsbCh3YWl0Rm9yQXN5bmNBY3Rpb25zKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpO1xuXG4gICAgICAvL2dldCBzdG9yZSB0aGF0IGlzIHBhc3NlZCB0byBfX0lOSVRJQUxfUkVEVVhfREFUQVxuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFJlZHV4UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXt7fX0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvUmVkdXhQcm92aWRlcj5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8L2hlYWQ+XG4gIFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICA8IS0tIGJlbG93IG9ubHkgd29ya3Mgd2l0aCBkZXYtc2VydmVyIGlzIHRoZSBoeWRyYXRlIHJlYWN0IHBhcnQgdGhhdCBtZWx0cyBidW5kbGUuanMgaW50byBzZXZlciBvdXRwdXRcbiAgICAgICAgICBcbiAgICAgICAgICBmcm9tIDpcblxuICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uLycsICdzcmMnKSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICAgIC0tPlxuICAgICAgICAgPHNjcmlwdCAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gJy4uL3NlcnZlci9taWRkbGV3YXJlL3Nzcic7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJy92aWV3cycpKTtcblxuLy8gUmVuZGVycyB0aGUgYXBwXG5hcHAudXNlKHNzck1pZGRsZXdhcmUpO1xuXG5jb25zdCBQT1JUID0gMzM4OTtcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBsb2dnZXIuaW5mbyhgY2xpZW50IHdlYiBydW5uaW5nIG9uIHBvcnQ6JHtQT1JUfWApO1xufSk7XG4iLCJpbXBvcnQgeyBmZXRjaFBvcHVsYXJSZXBvcyB9IGZyb20gXCIuLi8uLi9hcGlcIjtcblxuLy8gMiBmdW5jdGlvbnMgbmVlZCB0byBiZSBzdXBwbGllZCAoY2xhc3NpYyB0aHVuayBmdW5jdGlvbilcbmV4cG9ydCBjb25zdCBmZXRjaERhdGEgPSAoYWZ0ZXJMYXN0U2xhc2gpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAvL25lZWRzIHRvIHJldHVybiBwcm9taXNlIGZvciBmaW5hbCBQcm9taXNlLmFsbChbcHJvbWlzZXNdKSBpbiBzc3IuanNcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hQb3B1bGFyUmVwb3MoYWZ0ZXJMYXN0U2xhc2hbMF0pO1xuICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUkVfREFUQVwiLCBwYXlsb2FkOiB7IGRhdGE6IHJlcyB9IH0pO1xufTtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5jb25zdCBkYXRhUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU1RPUkVfREFUQVwiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YVJlZHVjZXI7XG5cbi8vc3RydWN0dXJlXG4vL2RhdGFSZWR1Y2VyID0gW11cbi8qXG4gIGRhdGE6ZGF0YVJlZHVjZXJcbiovXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vcmVkdWNlcnMvZGF0YVJlZHVjZXJcIjtcblxuLyoqXG4gKiBAcGFyYW0ge30gaGlzdG9yeSBlaXRoZXIgYnJvd3NlciBvciBtZW1vcnkgaGlzdG9yeShzZXJ2ZXIgc2l0ZSBzdGF0aWMgcm91dGVyKVxuICovXG5jb25zdCBjcmVhdGVSb290UmVkdWNlciA9IChoaXN0b3J5KSA9PlxuICBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGRhdGEsXG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpLFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoYnJvd3Nlck9yTWVtb3J5SGlzdG9yeSwgcHJlbG9hZGVkU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBjcmVhdGVSb290UmVkdWNlcihicm93c2VyT3JNZW1vcnlIaXN0b3J5KSwgLy8gcm9vdCByZWR1Y2VyIHdpdGggcm91dGVyIHN0YXRlXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgY29tcG9zZShcbiAgICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgcm91dGVyTWlkZGxld2FyZShicm93c2VyT3JNZW1vcnlIaXN0b3J5KSwgLy8gZm9yIGRpc3BhdGNoaW5nIGhpc3RvcnkgYWN0aW9uc1xuICAgICAgICB0aHVua01pZGRsZXdhcmVcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuIiwiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyUmVwb3MobGFuZ3VhZ2UgPSBcImFsbFwiKSB7XG4gIGNvbnN0IGVuY29kZWRVUkkgPSBlbmNvZGVVUkkoXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXN0YXJzOj4xK2xhbmd1YWdlOiR7bGFuZ3VhZ2V9JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZ0eXBlPVJlcG9zaXRvcmllc2BcbiAgKTtcbiAgbG9nZ2VyLmNvbG9yKFwieWVsbG93XCIpLmJvbGQoKS5sb2coXCJHRVQ6XCIsIGVuY29kZWRVUkkpO1xuXG4gIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigocmVwb3MpID0+IHJlcG9zLml0ZW1zKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBOb01hdGNoIGZyb20gXCIuL05vTWF0Y2hcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgIGV4YWN0PXtleGFjdH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ucmVzdH0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxSb3V0ZSByZW5kZXI9eyhwcm9wcykgPT4gPE5vTWF0Y2ggey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLy90aHVuayByZWR1eCBhY3Rpb25cbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi9SZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcblxuY29uc3QgR3JpZCA9IChwcm9wcykgPT4ge1xuICAvL3RoaXMgc3RhdGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGluIHNlcnZlciBzaXRlIChzc3IuanMpXG4gIGNvbnN0IHJlcG9zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHJlcG9fbmFtZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL2NoZWNrIGlmIGRhdGEgaGFzIGJlZW4gYWxyZWFkeSBmZXRjaGVkIG9uIHNlcnZlclxuICAgIC8vaW4gdGhpcyBjYXNlIHNpbmNlIHN0YXRlLmRhdGEgaXMgc2hhcmVkIGJldHdlZW4gcm91dGVzXG4gICAgLy91IG5lZWQgY2hlY2sgaWYgZ2xvYmFsIHdlYnBhY2sgY29uc3QgaXMgX19pc0Jyb3dzZXJfXyBzZXRcbiAgICBpZiAoX19pc0Jyb3dzZXJfXykge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKHJlcG9fbmFtZSkpO1xuICAgIH1cbiAgfSwgW3JlcG9fbmFtZSwgZGlzcGF0Y2hdKTsgLy9jaGVjayBiYXNlZCBvbiBwYXJhbSBjaGFuZ2VcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVwb3MgJiYgKFxuICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtuYW1lfSBzdHlsZT17eyBtYXJnaW46IDMwIH19PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aHRtbF91cmx9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntzdGFyZ2F6ZXJzX2NvdW50fSBzdGFyczwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkdyaWQuZ2V0SW5pdGlhbEFjdGlvbnMgPSAoeyByZXEsIG1hdGNoIH0pID0+IHtcbiAgY29uc3QgeyBoZWFkZXJzID0ge30gfSA9IHJlcTtcbiAgLy90aGlzIGRvZXMgbm90IHdvcmsgZm9yIG1lIHBvcHVsYXIvOmlkID0gcmVxLnBhcmFtLmlkXG4gIGNvbnN0IHRleHRBZnRlckxhc3RTbGFzaCA9IHJlcS51cmwubWF0Y2goL1teXFwvXSskLyk7XG4gIC8vIGNvbnN0IHsgY29va2llID0gbnVsbCB9ID0gaGVhZGVycztcblxuICAvL3Bhc3MgY29va2llIHRvIGZpcnN0IHRodW5rIG1ldGhvZFxuICByZXR1cm4gZmV0Y2hEYXRhKHRleHRBZnRlckxhc3RTbGFzaCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZWNsYXJlIGEgbmV3IHN0YXRlIHZhcmlhYmxlLCB3aGljaCB3ZSdsbCBjYWxsIFwiY291bnRcIlxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj50aGlzIHJvdXRlcyBpcyB0byBzaG93IHRoYXQgaG9va3MgdGFrZSBvdmVyIGluIGJyb3dzZXI8L2gyPlxuICAgICAgPHA+WW91IGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIC8qXG4gICAgdGhvc2UgbGluayBoYXZlIHRvIGJlIGEgdGFncyBvciBMaW5rIGNhdXNlIHRoZSBwYWdlIGhhcyB0byBiZSByZWxvYWRlZCBpbiBvcmRlciB0byB3b3JrIGluIHNlcnZlciBzaXRlIFxuKi9cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkga2V5PXtcImhvbWVcIn0+XG4gICAgICAgICAgPGEgaHJlZj17YC9gfT5ob21lPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXtcInJvdXRlc1dpdGhSZWR1eFwifT5cbiAgICAgICAgICA8YSBocmVmPXtgL3JvdXRlcy13aXRoLXJlZHV4YH0+cm91dGVzIHdpdGggUmVkdXggRXhhbXBsZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGtleT17XCJuZXN0ZWRSb3V0ZXNcIn0+XG4gICAgICAgICAgPGEgaHJlZj17YC9uZXN0ZWQtcm91dGVzYH0+bmVzdGVkIFJvdXRlcyBFeGFtcGxlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXtcInN3aXRjaFdpdGhOZXN0ZWRSb3V0ZXNcIn0+XG4gICAgICAgICAgPGEgaHJlZj17YC9zd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzYH0+XG4gICAgICAgICAgICBzd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzIEV4YW1wbGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgdXNlUm91dGVNYXRjaCwgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vc2FtcGxlIGRhdGEgYW5kIGNvbXBvbmVudHNcbmltcG9ydCBuZXN0ZWRSb3V0ZXNEYXRhIGZyb20gXCIuLi9kYXRhL25lc3RlZFJvdXRlc0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gdGhpcyBob29rIHJldHVybnMgdXAgdG8gbm93IHVybCBmb3IgbmVzdGVkIHJvdXRlc1xuICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhcmVudCByb3V0ZSBpcyAvbmVzdGVkLXJvdXRlc1xuICBjb25zdCB7IHVybDogdXBUb05vd1VybCB9ID0gdXNlUm91dGVNYXRjaCgpO1xuXG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgcGFyYW06IFwiYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgIHBhcmFtOiBcImphdmFzY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUnVieVwiLFxuICAgICAgcGFyYW06IFwicnVieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQeXRob25cIixcbiAgICAgIHBhcmFtOiBcInB5dGhvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhXCIsXG4gICAgICBwYXJhbTogXCJqYXZhXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBUb3BMYW5ndWFnZXNOYXZCYXIgPSAoKSA9PlxuICAgIGxhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgPGxpIGtleT17cGFyYW19PlxuICAgICAgICA8YSBocmVmPXtgL3BvcHVsYXIvJHtwYXJhbX1gfT57bmFtZX08L2E+XG4gICAgICA8L2xpPlxuICAgICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxociAvPlxuICAgICAgPGgzPkxhbmd1YWdlczwvaDM+XG4gICAgICA8VG9wTGFuZ3VhZ2VzTmF2QmFyIC8+XG4gICAgICA8aDM+IENsaWVudCBOYVYgbGluayB3aXRoIHJlZHV4IGV4YW1wbGU8L2gzPlxuICAgICAgPExpbmsgdG89e2AvcG9wdWxhci9qYXZhc2NyaXB0YH0+TmF2IExpbmsgamF2YXNjcmlwdCB3aXRoIFJlZHV4PC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIHVzZVJvdXRlTWF0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy9zYW1wbGUgZGF0YSBhbmQgY29tcG9uZW50c1xuaW1wb3J0IFRvcGljIGZyb20gXCIuL2NvbXBzL1RvcGljXCI7XG5pbXBvcnQgbmVzdGVkUm91dGVzRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9uZXN0ZWRSb3V0ZXNEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHRoaXMgaG9vayByZXR1cm5zIHVwIHRvIG5vdyB1cmwgZm9yIG5lc3RlZCByb3V0ZXNcbiAgLy8gaW4gdGhpcyBjYXNlIHRoZSBwYXJlbnQgcm91dGUgaXMgL25lc3RlZC1yb3V0ZXNcbiAgY29uc3QgeyBwYXRoLCB1cmw6IHVwVG9Ob3dVcmwgfSA9IHVzZVJvdXRlTWF0Y2goKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5uZXN0ZWQgcm91dGVzPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAge25lc3RlZFJvdXRlc0RhdGEubWFwKCh7IGRlc2NyaXB0aW9uLCB0b3BpY1JvdXRlIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0b3BpY1JvdXRlfT5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgJHt1cFRvTm93VXJsfS8ke3RvcGljUm91dGV9YH0+e2Rlc2NyaXB0aW9ufTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8Um91dGUgcGF0aD17YCR7cGF0aH0vOnRvcGljSWRgfT5cbiAgICAgICAgPFRvcGljIC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBVc2VycywgeyBDcmVhdGVVc2VyIH0gZnJvbSBcIi4vY29tcHMvVXNlcnNcIjtcblxuY29uc3QgY3VycmVudFJvdXRlSGVyZSA9IFwiL3N3aXRjaC13aXRoLW5lc3RlZC1yb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpdGNoUm91dGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5leGFtcGxlIG9mIHN3aXRjaCBzdGF0ZW1lbnQgd2l0aCBleGFjdCByb3V0ZSA8L2gzPlxuICAgICAgPGg0PlxuICAgICAgICAmbHQ7Um91dGUgcGF0aD1cIntgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vyc2B9XCIgZXhhY3QgLyZndDsgPGhyIC8+IGhhcyB0b1xuICAgICAgICBiZSBleGFjdCBpZiBpdCB3b3VuIHQgYmUgaXQgd291bGQgZmFsbCB0byB0aGUgbmV4dCBjcmVhdGUgcm91dGVcbiAgICAgIDwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBrZXk9XCJhYjFcIj5cbiAgICAgICAgICA8YSBocmVmPXtgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vyc2B9Pi91c2VyczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGtleT1cImFiMlwiPlxuICAgICAgICAgIDxhIGhyZWY9e2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzL2NyZWF0ZWB9Pi91c2Vycy9jcmVhdGU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgey8qXG4gICAgICAgIFJlYWN0IHJvdXRlciBkb2VzIHBhcnRpYWwgbWF0Y2hpbmcsIHNvIHVubGVzcyBpdCBzcGVjaWZ5ICdleGFjdCcgaXQgXG4gICAgICAgIHdpbGwgcmV0dXJuIGZpcnN0IG1hdGNoIGZvciByb3V0ZSAvdXNlcnMvY3JlYXRlIGl0IHdvdWxkIFxuICAgICAgICByZXR1cm4gYXRoPVwiL3VzZXJzXCJcblxuICAgICAgICBob3dldmVyIGlmIHlvdSBzcGVjaWZ5ICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGV4YWN0IGNvbXBvbmVudD17VXNlcnN9IC8+XG4gICAgICAgIHRoZW4gaXQgd2lsbCBvbmx5IHJldHVybiB0aGlzIHJvdXRlIGZvciBleGFjdCBtYXRjaCAvdXNlcnMgYnV0IG5vdCAvdXNlcnMvY3JlYXRlVXNlcnNcblxuICAgICAgICBub3RpY2UgdGhhdCBVIG9ubHkgbmVlZCB0byBzcGVjaWZ5IGV4YWN0IGZvciB0aGUgZmlyc3Qgcm91dGUgdW5sZXNzIHlvdXIgcm91dGUgdHJlZVxuICAgICAgICBoYXMgZXh0ZW5zaW9uIG9mXG4gICAgICAgIHVzZXJzL2NyZWF0ZSBhbmQgdXNlci9jcmVhdGUvOnVzZXJJZCB0aGVuIGV4YWN0IGlzIG5lZWQgdG8gYmUgc2V0IGZvciB0aGUgc2hvcnRlciByb3V0ZSBpbiBcbiAgICAgICAgdHJlZSB1c2Vycy9jcmVhdGVcbiAgICAgICovfVxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9e2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzYH0gZXhhY3Q+XG4gICAgICAgICAgPFVzZXJzIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPXtgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vycy9jcmVhdGVgfT5cbiAgICAgICAgICA8Q3JlYXRlVXNlciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IG5lc3RlZFJvdXRlc0RhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvbmVzdGVkUm91dGVzRGF0YVwiO1xuXG5jb25zdCBUb3BpYyA9ICgpID0+IHtcbiAgY29uc3QgeyB0b3BpY0lkIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCB0b3BpYyA9IG5lc3RlZFJvdXRlc0RhdGEuZmluZChcbiAgICAoeyB0b3BpY1JvdXRlIH0pID0+IHRvcGljUm91dGUgPT09IHRvcGljSWRcbiAgKTtcbiAgY29uc3QgeyByZXNvdXJjZXMgfSA9IHRvcGljO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz57cmVzb3VyY2VzLm5hbWV9PC9oMz5cbiAgICAgIDxwPntyZXNvdXJjZXMuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9waWM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNhbXBsZVVzZXJzID0gKCkgPT4gKFxuICA8dWw+XG4gICAgPGxpPkdyZWc8L2xpPlxuICAgIDxsaT5TdGVmYW5vPC9saT5cbiAgPC91bD5cbik7XG5cbmNvbnN0IENyZWF0ZVVzZXIgPSAoKSA9PiA8cD50aGlzIGlzIHNhbXBsZSB0ZXh0IGZvciBDcmVhdGVVc2VyPC9wPjtcblxuZXhwb3J0IHsgU2FtcGxlVXNlcnMgYXMgZGVmYXVsdCwgQ3JlYXRlVXNlciB9O1xuIiwiY29uc3QgbmVzdGVkUm91dGVzRGF0YSA9IFtcbiAge1xuICAgIGRlc2NyaXB0aW9uOiBcImhvdyB0aGUgPExpbms+IHRhZyB3b3JrcyA/XCIsXG4gICAgdG9waWNSb3V0ZTogXCJsaW5rVGFnXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcIjxMaW5rPiB0YWdcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxpbmsgdGFnIGl0IHdpbGwgYWx3YXlzIHdvcmsgb24gY2xpZW50IGFuZCBkb2VzIG5vdCByZWxvYWQgdGhlIHBhZ2VcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246IFwiaG93IHRoZSB0aGUgPGE+IHRhZ3Mgd29yayA/XCIsXG4gICAgdG9waWNSb3V0ZTogXCJhVGFnXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcIjxhPiB0YWdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcImEgdGFnIHdpbGwgYWx3YXlzIHJlbG9hZCB0aGUgcGFnZSBjYXVzaW5nIHNlcnZlciB0byByZS1ydW5cIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246IFwiY29uc3Qge3VybH0gPXVzZVJvdXRlTWF0Y2goKSBob29rXCIsXG4gICAgdG9waWNSb3V0ZTogXCJyZWFkLXVybC1wYXJhbWV0ZXJzXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcImNvbnN0IHt1cmx9ID0gdXNlUm91dGVNYXRjaCgpXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJ7dXJsfSB1c2VkIGZvciBuZXN0ZWQgbGlua3MsIGNhdXNlIHRpIHdpbGwgcmV0dXJuIHNvbWV0aGluZyBhczogdG9waWNzL3JlYWN0LXJvdXRlclwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJjb25zdCB7cGF0aH0gPXVzZVJvdXRlTWF0Y2goKSBob29rXCIsXG4gICAgdG9waWNSb3V0ZTogXCJyZWFkLXBhdGgtcGFyYW1ldGVyc1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCJjb25zdCB7cGF0aH0gPSB1c2VSb3V0ZU1hdGNoKClcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIntwYXRofSB1c2VkIGZvciBuZXN0ZWQgcm91dGVzLCBjYXVzZSBpdCB3aWxsIHJldGFpbiBwYXJhbSBhcyAgcGF0aC86dG9waWNJZFwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJjb25zdCB7dG9waWNJZH0gPSB1c2VQYXJhbXMoKSBob29rXCIsXG4gICAgdG9waWNSb3V0ZTogXCJyZWFkLXBhcmFtc1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCJjb25zdCB7dG9waWNJZH0gPSB1c2VQYXJhbXMoKVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwidXNlZCBmb3IgZ2V0dGluZyAvOnRvcGljSWQgcGFyYW0gXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG5lc3RlZFJvdXRlc0RhdGE7XG4iLCJpbXBvcnQgeyBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgTmVzdGVkUm91dGVzIGZyb20gXCIuL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL05lc3RlZFJvdXRlc1wiO1xuaW1wb3J0IE5lc3RlZFJvdXRlc1N3aXRjaCBmcm9tIFwiLi9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9Td2l0Y2hfRXhhY3RfTmVzdGVkX1JvdXRlc1wiO1xuaW1wb3J0IFJvdXRlc1dpdGhSZWR1eCBmcm9tIFwiLi9jb21wb25lbnRzL1JvdXRlc1dpdGhSZWR1eFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9HcmlkXCI7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL25lc3RlZC1yb3V0ZXNcIixcbiAgICBjb21wb25lbnQ6IE5lc3RlZFJvdXRlcyxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3JvdXRlcy13aXRoLXJlZHV4XCIsXG4gICAgY29tcG9uZW50OiBSb3V0ZXNXaXRoUmVkdXgsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9zd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzXCIsXG4gICAgY29tcG9uZW50OiBOZXN0ZWRSb3V0ZXNTd2l0Y2gsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9wb3B1bGFyLzpyZXBvX25hbWVcIixcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gIH0sXG5dO1xuXG4vLyBSZWN1cnNpdmVseSBmZXRjaCBkYXRhXG5leHBvcnQgY29uc3QgcHJvY2Vzc1JvdXRlcyA9IChyb3V0ZXNQcm9jZXNzaW5nID0gcm91dGVzLCBzdG9yZSwgcmVxKSA9PiB7XG4gIC8vcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgLy8gV2lsbCBjb250YWluIHJvdXRlcyB0aGF0IHdpbGwgYmUgcHJvY2Vzc2VkIGluIHRoZSBuZXh0IHJlY3Vyc2lvblxuICBjb25zdCBuZXh0ID0gW107XG5cbiAgLy8gTWFwIHRocm91Z2ggdGhlIHJvdXRlcyBhbmQgZmluZCBhbnkgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBwYXRoXG5cbiAgcmV0dXJuIHJvdXRlc1Byb2Nlc3NpbmcubWFwKChyb3V0ZSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoID0gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGxldCByZWR1eEFjdGlvbjtcblxuICAgICAgLy8gSWYgdGhlIHJvdXRlIGhhcyBzdWItcm91dGVzLCBxdWV1ZSB0aGVtIGZvciB0aGUgbmV4dCByZWN1cnNpb25cbiAgICAgIC8vIGlmIChyb3V0ZS5yb3V0ZXMpIG5leHQucHVzaCguLi5yb3V0ZS5yb3V0ZXMpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIGEgbGF6eS1sb2FkZWQgTG9hZGFibGUgd3JhcHBlclxuICAgICAgLyogaWYgKHJvdXRlLmNvbXBvbmVudD8uY29udGV4dFR5cGVzPy5sb2FkYWJsZSkge1xuICAgICAgICAgIGNvbnN0IExvYWRhYmxlQ29udGFpbmVyID0gcm91dGUuY29tcG9uZW50XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IExvYWRhYmxlQ29udGFpbmVyKCk/LnN0YXRlPy5sb2FkZWQ/LmRlZmF1bHRcbiAgICAgICAgICBpZiAoY29tcG9uZW50Py5nZXRJbml0aWFsQWN0aW9ucykge1xuICAgICAgICAgICAgaW5pdGlhbEFjdGlvbiA9IGNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucyh7IHJlcSwgbWF0Y2ggfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gKi9cblxuICAgICAgLy8gUmVndWxhciBub24tbGF6eSBjb21wb25lbnQgdGhhdCBjaGVjayBmb3IgaW5pdGlhbEFjdGlvbnNcbiAgICAgIGlmIChyb3V0ZS5jb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMpIHtcbiAgICAgICAgcmVkdXhBY3Rpb24gPSByb3V0ZS5jb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pO1xuICAgICAgfVxuXG4gICAgICAvL3RoaXMgcHJvbWlzZSBoYXMgdG8gYmUgcmVzb2x2ZWQgZXZlbiB0aG91Z2ggdGhlcmUgYXJlIG5vdCBhbnkgb3RoZXIgaW5pdGlhbCBhY3Rpb25zIG9yIG5lc3RlZCByb3V0ZXNcbiAgICAgIGlmIChyZWR1eEFjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlZHV4QWN0aW9uXCIsIHJlZHV4QWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHJlZHV4QWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=