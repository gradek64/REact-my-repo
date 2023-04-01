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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/App */ "./src/shared/components/App.jsx");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_8__);









var ssrMiddleware = function ssrMiddleware(req, res, next) {
  node_color_log__WEBPACK_IMPORTED_MODULE_3___default.a.color('yellow').bold().log('requested req.url', req.url);

  /******** Redux server setup ******/

  // set initial store to be passed to client in window._data
  var initialState = {
    promotions: {}
  };

  //U can not use BrowserRouter cause the routes are processed on server not a client
  var memoryHistory = Object(history__WEBPACK_IMPORTED_MODULE_8__["createMemoryHistory"])({
    initialEntries: [req.url]
  });
  // const store = configureStore(memoryHistory, initialState);

  /******/

  // Waits for asynchronous actions like API calls
  // before rendering the HTML
  // undefined is a way of not setting a value for the first param in this case
  // processRoutes(routesProcessing = routes,store, req) = undefined will cause routesProcessing = routes so will take default of the function
  var waitForAsyncActions = [Object(_shared_routes__WEBPACK_IMPORTED_MODULE_7__["processRoutes"])(undefined, memoryHistory, initialState, req, res)];
  Promise.all(waitForAsyncActions)
  // Promise all resolve all promises result in array so [store]
  .then(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),
      store = _ref2[0];
    node_color_log__WEBPACK_IMPORTED_MODULE_3___default.a.color('yellow').bold().log('requested req.url in promise response', req.url);

    //get store that is passed to __INITIAL_REDUX_DATA
    var state = store.getState();
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
      location: req.url,
      context: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_App__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
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

/***/ "./src/shared/Redux/actions/promotions.js":
/*!************************************************!*\
  !*** ./src/shared/Redux/actions/promotions.js ***!
  \************************************************/
/*! exports provided: ADD_PROMO, DELETE_PROMO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROMO", function() { return ADD_PROMO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PROMO", function() { return DELETE_PROMO; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var ADD_PROMO = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_PROMO');
var DELETE_PROMO = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DELETE_PROMO');

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
/* harmony import */ var _promotions_promosReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promotions/promosReducer */ "./src/shared/Redux/reducers/promotions/promosReducer.js");



var createRootReducer = function createRootReducer(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    promotions: _promotions_promosReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

/***/ }),

/***/ "./src/shared/Redux/reducers/promotions/promosReducer.js":
/*!***************************************************************!*\
  !*** ./src/shared/Redux/reducers/promotions/promosReducer.js ***!
  \***************************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_promotions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/promotions */ "./src/shared/Redux/actions/promotions.js");


var initialState = {
  counter: 0
};
var promosReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, function (builder) {
  return builder.addCase(_actions_promotions__WEBPACK_IMPORTED_MODULE_1__["ADD_PROMO"], function (state) {
    state.counter += 1;
  }).addCase(_actions_promotions__WEBPACK_IMPORTED_MODULE_1__["DELETE_PROMO"], function (state) {
    state.counter -= 1;
  });
});
/* harmony default export */ __webpack_exports__["default"] = (promosReducer);

/***/ }),

/***/ "./src/shared/Redux/store.js":
/*!***********************************!*\
  !*** ./src/shared/Redux/store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_Redux_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Redux/reducers */ "./src/shared/Redux/reducers/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






function createStore(history, initialState) {
  var isDev = "development" === 'development';
  var isProduction = "development" === 'production';
  var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  var reduxRouterMiddleware = Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__["routerMiddleware"])(history);
  var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["configureStore"])({
    reducer: Object(_shared_Redux_reducers__WEBPACK_IMPORTED_MODULE_6__["default"])(history),
    preloadedState: initialState,
    devTools: !isProduction,
    middleware: [sagaMiddleware, reduxRouterMiddleware]
  });

  /* if (isDev && module.hot) {
    module.hot.accept('../../../shared/Redux/reducers', () => {
      const createNewRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(createNewRootReducer(history));
    });
  } */

  // Used for calling sagas during server-side rendering
  var runSaga = sagaMiddleware.run; // eslint-disable-line @typescript-eslint/unbound-method
  var close = function close() {
    return store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__["END"]);
  };
  return _objectSpread(_objectSpread({}, store), {}, {
    runSaga: runSaga,
    close: close
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




//thunk redux action
// import { fetchData } from "../Redux/actions/actions";

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
  return fetchData(textAfterLastSlash);
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Redux_actions_promotions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Redux/actions/promotions */ "./src/shared/Redux/actions/promotions.js");




function Home() {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "this routes is to show that hooks take over in browser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      setCount(count + 1);
      dispatch(Object(_shared_Redux_actions_promotions__WEBPACK_IMPORTED_MODULE_3__["ADD_PROMO"])());
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
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Redux/store */ "./src/shared/Redux/store.js");
/* harmony import */ var _shared_sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/sagas */ "./src/shared/sagas/index.js");








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
  var history = arguments.length > 1 ? arguments[1] : undefined;
  var state = arguments.length > 2 ? arguments[2] : undefined;
  var req = arguments.length > 3 ? arguments[3] : undefined;
  var res = arguments.length > 4 ? arguments[4] : undefined;
  var level = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  return new Promise(function (resolve, reject) {
    // A fresh store is needed each loop as a closed store cannot be re-opened
    var store = Object(_Redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(history, state);

    // Start the root saga tasks which is a promise
    var tasks = store.runSaga(_shared_sagas__WEBPACK_IMPORTED_MODULE_7__["default"]);

    //return new Promise((resolve, reject) => {
    // Will contain routes that will be processed in the next recursion
    var next = [];

    // Map through the routes and find any that match the current path

    routesProcessing.map(function (route) {
      var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(req.url, route);
      if (match) {
        var _route$component, _route$component$cont;
        var reduxAction;

        // If the route has sub-routes, queue them for the next recursion
        // if (route.routes) next.push(...route.routes);

        // Check if the component is a lazy-loaded Loadable wrapper
        if ((_route$component = route.component) !== null && _route$component !== void 0 && (_route$component$cont = _route$component.contextTypes) !== null && _route$component$cont !== void 0 && _route$component$cont.loadable) {
          var _LoadableContainer, _LoadableContainer$st, _LoadableContainer$st2;
          var LoadableContainer = route.component;
          var component = (_LoadableContainer = new LoadableContainer()) === null || _LoadableContainer === void 0 ? void 0 : (_LoadableContainer$st = _LoadableContainer.state) === null || _LoadableContainer$st === void 0 ? void 0 : (_LoadableContainer$st2 = _LoadableContainer$st.loaded) === null || _LoadableContainer$st2 === void 0 ? void 0 : _LoadableContainer$st2["default"];
          if (component !== null && component !== void 0 && component.getInitialActions) {
            initialAction = component.getInitialActions({
              req: req,
              match: match
            });
          }
        }

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

    // Close the store to new actions
    store.close();

    // Wait for the running actions to complete
    tasks.toPromise().then(function () {
      if (next.length > 0) {
        processRoutes(next, history, store.getState(), req, res, level + 1) // recursion!
        .then(function (latestStore) {
          return resolve(latestStore);
        })["catch"](reject);
      } else {
        resolve(store);
      }
    })["catch"](function (err) {
      reject(err);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/shared/sagas/index.js":
/*!***********************************!*\
  !*** ./src/shared/sagas/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return root; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagas_promosSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas/promosSaga */ "./src/shared/sagas/promosSaga.js");

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(root);



// We only want to watch the 'watcher' sagas
function root() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function root$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_sagas_promosSaga__WEBPACK_IMPORTED_MODULE_2__["watchAddPromo"])]);
      case 2:
      case "end":
        return _context.stop();
    }
  }, _marked);
}

/***/ }),

/***/ "./src/shared/sagas/promosSaga.js":
/*!****************************************!*\
  !*** ./src/shared/sagas/promosSaga.js ***!
  \****************************************/
/*! exports provided: addPromoSaga, deletePromoSaga, watchAddPromo, watchDeletePromo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPromoSaga", function() { return addPromoSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePromoSaga", function() { return deletePromoSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchAddPromo", function() { return watchAddPromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchDeletePromo", function() { return watchDeletePromo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Redux_actions_promotions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/actions/promotions */ "./src/shared/Redux/actions/promotions.js");

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPromoSaga),
  _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deletePromoSaga),
  _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPromo),
  _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeletePromo);





/**
 * Calls add payment API with selected payment method.
 * @param {Object} action - addPayment action
 * @param {Object} action.payload - Action payload
 * @param {string} action.payload.reference - Promo reference
 * @param {function} action.payload.onSuccess - Function to run after add promo response is successful
 * @param {function} action.payload.onFailure - Function to run after add promo response is unsuccessful
 * @returns {string|object} promo reference on success and null on failure
 */

function addPromoSaga() {
  var store;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPromoSaga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])();
      case 3:
        store = _context.sent;
        console.log('current store before action completed', store);
        return _context.abrupt("return", store);
      case 8:
        _context.prev = 8;
        _context.t0 = _context["catch"](0);
        return _context.abrupt("return", null);
      case 11:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 8]]);
}
function deletePromoSaga() {
  var store;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deletePromoSaga$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.prev = 0;
        _context2.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])();
      case 3:
        store = _context2.sent;
        console.log('current store before action completed', store);
        return _context2.abrupt("return", store);
      case 8:
        _context2.prev = 8;
        _context2.t0 = _context2["catch"](0);
        return _context2.abrupt("return", null);
      case 11:
      case "end":
        return _context2.stop();
    }
  }, _marked2, null, [[0, 8]]);
}
function watchAddPromo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPromo$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_Redux_actions_promotions__WEBPACK_IMPORTED_MODULE_4__["ADD_PROMO"], addPromoSaga);
      case 2:
      case "end":
        return _context3.stop();
    }
  }, _marked3);
}
function watchDeletePromo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeletePromo$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_Redux_actions_promotions__WEBPACK_IMPORTED_MODULE_4__["DELETE_PROMO"], deletePromoSaga);
      case 2:
      case "end":
        return _context4.stop();
    }
  }, _marked4);
}

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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

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

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1JlZHV4L2FjdGlvbnMvcHJvbW90aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvUmVkdXgvcmVkdWNlcnMvcHJvbW90aW9ucy9wcm9tb3NSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvUmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTm9NYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1JvdXRlc1dpdGhSZWR1eC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9OZXN0ZWRSb3V0ZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9yb3V0ZU5lc3RpbmcvU3dpdGNoX0V4YWN0X05lc3RlZF9Sb3V0ZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9yb3V0ZU5lc3RpbmcvY29tcHMvVG9waWMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9yb3V0ZU5lc3RpbmcvY29tcHMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvZGF0YS9uZXN0ZWRSb3V0ZXNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zYWdhcy9wcm9tb3NTYWdhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInNzck1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwibG9nZ2VyIiwiY29sb3IiLCJib2xkIiwibG9nIiwidXJsIiwiaW5pdGlhbFN0YXRlIiwicHJvbW90aW9ucyIsIm1lbW9yeUhpc3RvcnkiLCJjcmVhdGVNZW1vcnlIaXN0b3J5IiwiaW5pdGlhbEVudHJpZXMiLCJ3YWl0Rm9yQXN5bmNBY3Rpb25zIiwicHJvY2Vzc1JvdXRlcyIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJtYXJrdXAiLCJyZW5kZXJUb1N0cmluZyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIlJlZHV4UHJvdmlkZXIiLCJTdGF0aWNSb3V0ZXIiLCJsb2NhdGlvbiIsImNvbnRleHQiLCJBcHAiLCJzZW5kIiwiY29uY2F0IiwiYXBwIiwiZXhwcmVzcyIsInNldCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwidXNlIiwiUE9SVCIsImxpc3RlbiIsImluZm8iLCJBRERfUFJPTU8iLCJjcmVhdGVBY3Rpb24iLCJERUxFVEVfUFJPTU8iLCJjcmVhdGVSb290UmVkdWNlciIsImhpc3RvcnkiLCJjb21iaW5lUmVkdWNlcnMiLCJyb3V0ZXIiLCJjb25uZWN0Um91dGVyIiwiY291bnRlciIsInByb21vc1JlZHVjZXIiLCJjcmVhdGVSZWR1Y2VyIiwiYnVpbGRlciIsImFkZENhc2UiLCJjcmVhdGVTdG9yZSIsImlzRGV2IiwicHJvY2VzcyIsImlzUHJvZHVjdGlvbiIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJyZWR1eFJvdXRlck1pZGRsZXdhcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwicHJlbG9hZGVkU3RhdGUiLCJkZXZUb29scyIsIm1pZGRsZXdhcmUiLCJydW5TYWdhIiwicnVuIiwiY2xvc2UiLCJkaXNwYXRjaCIsIkVORCIsIl9vYmplY3RTcHJlYWQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIk5hdmJhciIsIlN3aXRjaCIsInJvdXRlcyIsIm1hcCIsImV4YWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIlJvdXRlIiwicHJvcHMiLCJfZXh0ZW5kcyIsIk5vTWF0Y2giLCJHcmlkIiwicmVwb3MiLCJ1c2VTZWxlY3RvciIsImRhdGEiLCJ1c2VEaXNwYXRjaCIsIl91c2VQYXJhbXMiLCJ1c2VQYXJhbXMiLCJyZXBvX25hbWUiLCJ1c2VFZmZlY3QiLCJfX2lzQnJvd3Nlcl9fIiwiRnJhZ21lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm5hbWUiLCJvd25lciIsInN0YXJnYXplcnNfY291bnQiLCJodG1sX3VybCIsIm1hcmdpbiIsImhyZWYiLCJsb2dpbiIsImdldEluaXRpYWxBY3Rpb25zIiwibWF0Y2giLCJfcmVxJGhlYWRlcnMiLCJoZWFkZXJzIiwidGV4dEFmdGVyTGFzdFNsYXNoIiwiZmV0Y2hEYXRhIiwiSG9tZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImNvdW50Iiwic2V0Q291bnQiLCJvbkNsaWNrIiwiX3VzZVJvdXRlTWF0Y2giLCJ1c2VSb3V0ZU1hdGNoIiwidXBUb05vd1VybCIsImxhbmd1YWdlcyIsInBhcmFtIiwiVG9wTGFuZ3VhZ2VzTmF2QmFyIiwiTGluayIsInRvIiwibmVzdGVkUm91dGVzRGF0YSIsImRlc2NyaXB0aW9uIiwidG9waWNSb3V0ZSIsIlRvcGljIiwiY3VycmVudFJvdXRlSGVyZSIsIlN3aXRjaFJvdXRlcyIsIlVzZXJzIiwiQ3JlYXRlVXNlciIsInRvcGljSWQiLCJ0b3BpYyIsImZpbmQiLCJyZXNvdXJjZXMiLCJTYW1wbGVVc2VycyIsIk5lc3RlZFJvdXRlcyIsIlJvdXRlc1dpdGhSZWR1eCIsIk5lc3RlZFJvdXRlc1N3aXRjaCIsInJvdXRlc1Byb2Nlc3NpbmciLCJsZW5ndGgiLCJsZXZlbCIsInJlc29sdmUiLCJyZWplY3QiLCJ0YXNrcyIsInJvb3RTYWdhIiwicm91dGUiLCJtYXRjaFBhdGgiLCJfcm91dGUkY29tcG9uZW50IiwiX3JvdXRlJGNvbXBvbmVudCRjb250IiwicmVkdXhBY3Rpb24iLCJjb250ZXh0VHlwZXMiLCJsb2FkYWJsZSIsIl9Mb2FkYWJsZUNvbnRhaW5lciIsIl9Mb2FkYWJsZUNvbnRhaW5lciRzdCIsIl9Mb2FkYWJsZUNvbnRhaW5lciRzdDIiLCJMb2FkYWJsZUNvbnRhaW5lciIsImxvYWRlZCIsImluaXRpYWxBY3Rpb24iLCJjb25zb2xlIiwidG9Qcm9taXNlIiwibGF0ZXN0U3RvcmUiLCJlcnIiLCJyb290IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJyb290JCIsIl9jb250ZXh0IiwicHJldiIsImZvcmsiLCJ3YXRjaEFkZFByb21vIiwic3RvcCIsIl9tYXJrZWQiLCJhZGRQcm9tb1NhZ2EiLCJfbWFya2VkMiIsIm1hcmsiLCJkZWxldGVQcm9tb1NhZ2EiLCJfbWFya2VkMyIsIl9tYXJrZWQ0Iiwid2F0Y2hEZWxldGVQcm9tbyIsImFkZFByb21vU2FnYSQiLCJzZWxlY3QiLCJzZW50IiwiYWJydXB0IiwidDAiLCJkZWxldGVQcm9tb1NhZ2EkIiwiX2NvbnRleHQyIiwid2F0Y2hBZGRQcm9tbyQiLCJfY29udGV4dDMiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hEZWxldGVQcm9tbyQiLCJfY29udGV4dDQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRjBCO0FBQzhCO0FBRXBCO0FBQ2M7QUFDRjtBQUNGO0FBQ007QUFDTjtBQUU5QyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFB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RUFBQSxHQUFBTyxRQUFBO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2pELGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBSZWR1eFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ25vZGUtY29sb3ItbG9nJztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCB7IHByb2Nlc3NSb3V0ZXMgfSBmcm9tICcuLi8uLi9zaGFyZWQvcm91dGVzJztcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoJ3llbGxvdycpLmJvbGQoKS5sb2coJ3JlcXVlc3RlZCByZXEudXJsJywgcmVxLnVybCk7XG5cbiAgLyoqKioqKioqIFJlZHV4IHNlcnZlciBzZXR1cCAqKioqKiovXG5cbiAgLy8gc2V0IGluaXRpYWwgc3RvcmUgdG8gYmUgcGFzc2VkIHRvIGNsaWVudCBpbiB3aW5kb3cuX2RhdGFcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHByb21vdGlvbnM6IHt9LFxuICB9O1xuXG4gIC8vVSBjYW4gbm90IHVzZSBCcm93c2VyUm91dGVyIGNhdXNlIHRoZSByb3V0ZXMgYXJlIHByb2Nlc3NlZCBvbiBzZXJ2ZXIgbm90IGEgY2xpZW50XG4gIGNvbnN0IG1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXM6IFtyZXEudXJsXSB9KTtcbiAgLy8gY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShtZW1vcnlIaXN0b3J5LCBpbml0aWFsU3RhdGUpO1xuXG4gIC8qKioqKiovXG5cbiAgLy8gV2FpdHMgZm9yIGFzeW5jaHJvbm91cyBhY3Rpb25zIGxpa2UgQVBJIGNhbGxzXG4gIC8vIGJlZm9yZSByZW5kZXJpbmcgdGhlIEhUTUxcbiAgLy8gdW5kZWZpbmVkIGlzIGEgd2F5IG9mIG5vdCBzZXR0aW5nIGEgdmFsdWUgZm9yIHRoZSBmaXJzdCBwYXJhbSBpbiB0aGlzIGNhc2VcbiAgLy8gcHJvY2Vzc1JvdXRlcyhyb3V0ZXNQcm9jZXNzaW5nID0gcm91dGVzLHN0b3JlLCByZXEpID0gdW5kZWZpbmVkIHdpbGwgY2F1c2Ugcm91dGVzUHJvY2Vzc2luZyA9IHJvdXRlcyBzbyB3aWxsIHRha2UgZGVmYXVsdCBvZiB0aGUgZnVuY3Rpb25cbiAgY29uc3Qgd2FpdEZvckFzeW5jQWN0aW9ucyA9IFtwcm9jZXNzUm91dGVzKFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZW1vcnlIaXN0b3J5LFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZXEsXG4gICAgcmVzXG4gICldO1xuXG4gICAgUHJvbWlzZS5hbGwod2FpdEZvckFzeW5jQWN0aW9ucylcbiAgICAvLyBQcm9taXNlIGFsbCByZXNvbHZlIGFsbCBwcm9taXNlcyByZXN1bHQgaW4gYXJyYXkgc28gW3N0b3JlXVxuICAgIC50aGVuKChbc3RvcmVdKSA9PiB7XG4gICAgICBsb2dnZXJcbiAgICAgICAgLmNvbG9yKCd5ZWxsb3cnKVxuICAgICAgICAuYm9sZCgpXG4gICAgICAgIC5sb2coJ3JlcXVlc3RlZCByZXEudXJsIGluIHByb21pc2UgcmVzcG9uc2UnLCByZXEudXJsKTtcblxuICAgICAgLy9nZXQgc3RvcmUgdGhhdCBpcyBwYXNzZWQgdG8gX19JTklUSUFMX1JFRFVYX0RBVEFcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgXG4gICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFJlZHV4UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXt7fX0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvUmVkdXhQcm92aWRlcj5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8L2hlYWQ+XG4gIFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICA8IS0tIGJlbG93IG9ubHkgd29ya3Mgd2l0aCBkZXYtc2VydmVyIGlzIHRoZSBoeWRyYXRlIHJlYWN0IHBhcnQgdGhhdCBtZWx0cyBidW5kbGUuanMgaW50byBzZXZlciBvdXRwdXRcbiAgICAgICAgICBcbiAgICAgICAgICBmcm9tIDpcblxuICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uLycsICdzcmMnKSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICAgIC0tPlxuICAgICAgICAgPHNjcmlwdCAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3NyTWlkZGxld2FyZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdub2RlLWNvbG9yLWxvZyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzc3JNaWRkbGV3YXJlIGZyb20gJy4uL3NlcnZlci9taWRkbGV3YXJlL3Nzcic7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJy92aWV3cycpKTtcblxuLy8gUmVuZGVycyB0aGUgYXBwXG5hcHAudXNlKHNzck1pZGRsZXdhcmUpO1xuXG5jb25zdCBQT1JUID0gMzM4OTtcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBsb2dnZXIuaW5mbyhgY2xpZW50IHdlYiBydW5uaW5nIG9uIHBvcnQ6JHtQT1JUfWApO1xufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9NTyA9IGNyZWF0ZUFjdGlvbignQUREX1BST01PJyk7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST01PID0gY3JlYXRlQWN0aW9uKCdERUxFVEVfUFJPTU8nKTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBwcm9tb3Rpb25zIGZyb20gJy4vcHJvbW90aW9ucy9wcm9tb3NSZWR1Y2VyJ1xuXG5jb25zdCBjcmVhdGVSb290UmVkdWNlciA9IChoaXN0b3J5KSA9PlxuICBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHByb21vdGlvbnMsXG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpXG5cbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm9vdFJlZHVjZXJcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHsgQUREX1BST01PLCBERUxFVEVfUFJPTU8gfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb21vdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjb3VudGVyOiAwLFxufTtcblxuY29uc3QgcHJvbW9zUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT5cbiAgYnVpbGRlclxuICAgIC5hZGRDYXNlKEFERF9QUk9NTywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5jb3VudGVyICs9IDE7XG4gICAgfSlcbiAgICAuYWRkQ2FzZShERUxFVEVfUFJPTU8sIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuY291bnRlciAtPSAxO1xuICAgIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9tb3NSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgUHJlbG9hZGVkU3RhdGUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7IEVORCwgU2FnYU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcblxuaW1wb3J0IGNyZWF0ZVJvb3RSZWR1Y2VyIGZyb20gJy4uLy4uL3NoYXJlZC9SZWR1eC9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGhpc3RvcnksIGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuICBjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgcmVkdXhSb3V0ZXJNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KTtcblxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiBjcmVhdGVSb290UmVkdWNlcihoaXN0b3J5KSxcbiAgICBwcmVsb2FkZWRTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIGRldlRvb2xzOiAhaXNQcm9kdWN0aW9uLFxuICAgIG1pZGRsZXdhcmU6IFtzYWdhTWlkZGxld2FyZSwgcmVkdXhSb3V0ZXJNaWRkbGV3YXJlXSxcbiAgfSk7XG5cbiAgLyogaWYgKGlzRGV2ICYmIG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vLi4vLi4vc2hhcmVkL1JlZHV4L3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlTmV3Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyKGhpc3RvcnkpKTtcbiAgICB9KTtcbiAgfSAqL1xuXG4gIC8vIFVzZWQgZm9yIGNhbGxpbmcgc2FnYXMgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICBjb25zdCBydW5TYWdhID0gc2FnYU1pZGRsZXdhcmUucnVuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC91bmJvdW5kLW1ldGhvZFxuICBjb25zdCBjbG9zZSA9ICgpID0+IHN0b3JlLmRpc3BhdGNoKEVORCk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdG9yZSxcbiAgICBydW5TYWdhLFxuICAgIGNsb3NlLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vTm9NYXRjaFwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgZXhhY3Q9e2V4YWN0fVxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFJvdXRlIHJlbmRlcj17KHByb3BzKSA9PiA8Tm9NYXRjaCB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vL3RodW5rIHJlZHV4IGFjdGlvblxuLy8gaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uL1JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5jb25zdCBHcmlkID0gKHByb3BzKSA9PiB7XG4gIC8vdGhpcyBzdGF0ZSBoYXMgYmVlbiBnZW5lcmF0ZWQgaW4gc2VydmVyIHNpdGUgKHNzci5qcylcbiAgY29uc3QgcmVwb3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgcmVwb19uYW1lIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vY2hlY2sgaWYgZGF0YSBoYXMgYmVlbiBhbHJlYWR5IGZldGNoZWQgb24gc2VydmVyXG4gICAgLy9pbiB0aGlzIGNhc2Ugc2luY2Ugc3RhdGUuZGF0YSBpcyBzaGFyZWQgYmV0d2VlbiByb3V0ZXNcbiAgICAvL3UgbmVlZCBjaGVjayBpZiBnbG9iYWwgd2VicGFjayBjb25zdCBpcyBfX2lzQnJvd3Nlcl9fIHNldFxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgICAvLyBkaXNwYXRjaChmZXRjaERhdGEocmVwb19uYW1lKSk7XG4gICAgfVxuICB9LCBbcmVwb19uYW1lLCBkaXNwYXRjaF0pOyAvL2NoZWNrIGJhc2VkIG9uIHBhcmFtIGNoYW5nZVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXBvcyAmJiAoXG4gICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgIHtyZXBvcy5tYXAoKHsgbmFtZSwgb3duZXIsIHN0YXJnYXplcnNfY291bnQsIGh0bWxfdXJsIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9IHN0eWxlPXt7IG1hcmdpbjogMzAgfX0+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkB7b3duZXIubG9naW59PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuR3JpZC5nZXRJbml0aWFsQWN0aW9ucyA9ICh7IHJlcSwgbWF0Y2ggfSkgPT4ge1xuICBjb25zdCB7IGhlYWRlcnMgPSB7fSB9ID0gcmVxO1xuICAvL3RoaXMgZG9lcyBub3Qgd29yayBmb3IgbWUgcG9wdWxhci86aWQgPSByZXEucGFyYW0uaWRcbiAgY29uc3QgdGV4dEFmdGVyTGFzdFNsYXNoID0gcmVxLnVybC5tYXRjaCgvW15cXC9dKyQvKTtcbiAgLy8gY29uc3QgeyBjb29raWUgPSBudWxsIH0gPSBoZWFkZXJzO1xuXG4gIC8vcGFzcyBjb29raWUgdG8gZmlyc3QgdGh1bmsgbWV0aG9kXG4gIHJldHVybiBmZXRjaERhdGEodGV4dEFmdGVyTGFzdFNsYXNoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFERF9QUk9NTywgREVMRVRFX1BST01PIH0gZnJvbSAnLi4vLi4vc2hhcmVkL1JlZHV4L2FjdGlvbnMvcHJvbW90aW9ucyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gRGVjbGFyZSBhIG5ldyBzdGF0ZSB2YXJpYWJsZSwgd2hpY2ggd2UnbGwgY2FsbCBcImNvdW50XCJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPnRoaXMgcm91dGVzIGlzIHRvIHNob3cgdGhhdCBob29rcyB0YWtlIG92ZXIgaW4gYnJvd3NlcjwvaDI+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q291bnQoY291bnQgKyAxKTtcbiAgICAgICAgICBkaXNwYXRjaChBRERfUFJPTU8oKSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIENsaWNrIG1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIC8qXG4gICAgdGhvc2UgbGluayBoYXZlIHRvIGJlIGEgdGFncyBvciBMaW5rIGNhdXNlIHRoZSBwYWdlIGhhcyB0byBiZSByZWxvYWRlZCBpbiBvcmRlciB0byB3b3JrIGluIHNlcnZlciBzaXRlIFxuKi9cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkga2V5PXtcImhvbWVcIn0+XG4gICAgICAgICAgPGEgaHJlZj17YC9gfT5ob21lPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXtcInJvdXRlc1dpdGhSZWR1eFwifT5cbiAgICAgICAgICA8YSBocmVmPXtgL3JvdXRlcy13aXRoLXJlZHV4YH0+cm91dGVzIHdpdGggUmVkdXggRXhhbXBsZTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGtleT17XCJuZXN0ZWRSb3V0ZXNcIn0+XG4gICAgICAgICAgPGEgaHJlZj17YC9uZXN0ZWQtcm91dGVzYH0+bmVzdGVkIFJvdXRlcyBFeGFtcGxlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkga2V5PXtcInN3aXRjaFdpdGhOZXN0ZWRSb3V0ZXNcIn0+XG4gICAgICAgICAgPGEgaHJlZj17YC9zd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzYH0+XG4gICAgICAgICAgICBzd2l0Y2gtd2l0aC1uZXN0ZWQtcm91dGVzIEV4YW1wbGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgdXNlUm91dGVNYXRjaCwgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vc2FtcGxlIGRhdGEgYW5kIGNvbXBvbmVudHNcbmltcG9ydCBuZXN0ZWRSb3V0ZXNEYXRhIGZyb20gXCIuLi9kYXRhL25lc3RlZFJvdXRlc0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gdGhpcyBob29rIHJldHVybnMgdXAgdG8gbm93IHVybCBmb3IgbmVzdGVkIHJvdXRlc1xuICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhcmVudCByb3V0ZSBpcyAvbmVzdGVkLXJvdXRlc1xuICBjb25zdCB7IHVybDogdXBUb05vd1VybCB9ID0gdXNlUm91dGVNYXRjaCgpO1xuXG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgcGFyYW06IFwiYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgIHBhcmFtOiBcImphdmFzY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUnVieVwiLFxuICAgICAgcGFyYW06IFwicnVieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQeXRob25cIixcbiAgICAgIHBhcmFtOiBcInB5dGhvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYXZhXCIsXG4gICAgICBwYXJhbTogXCJqYXZhXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBUb3BMYW5ndWFnZXNOYXZCYXIgPSAoKSA9PlxuICAgIGxhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgPGxpIGtleT17cGFyYW19PlxuICAgICAgICA8YSBocmVmPXtgL3BvcHVsYXIvJHtwYXJhbX1gfT57bmFtZX08L2E+XG4gICAgICA8L2xpPlxuICAgICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxociAvPlxuICAgICAgPGgzPkxhbmd1YWdlczwvaDM+XG4gICAgICA8VG9wTGFuZ3VhZ2VzTmF2QmFyIC8+XG4gICAgICA8aDM+IENsaWVudCBOYVYgbGluayB3aXRoIHJlZHV4IGV4YW1wbGU8L2gzPlxuICAgICAgPExpbmsgdG89e2AvcG9wdWxhci9qYXZhc2NyaXB0YH0+TmF2IExpbmsgamF2YXNjcmlwdCB3aXRoIFJlZHV4PC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIHVzZVJvdXRlTWF0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy9zYW1wbGUgZGF0YSBhbmQgY29tcG9uZW50c1xuaW1wb3J0IFRvcGljIGZyb20gXCIuL2NvbXBzL1RvcGljXCI7XG5pbXBvcnQgbmVzdGVkUm91dGVzRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9uZXN0ZWRSb3V0ZXNEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHRoaXMgaG9vayByZXR1cm5zIHVwIHRvIG5vdyB1cmwgZm9yIG5lc3RlZCByb3V0ZXNcbiAgLy8gaW4gdGhpcyBjYXNlIHRoZSBwYXJlbnQgcm91dGUgaXMgL25lc3RlZC1yb3V0ZXNcbiAgY29uc3QgeyBwYXRoLCB1cmw6IHVwVG9Ob3dVcmwgfSA9IHVzZVJvdXRlTWF0Y2goKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5uZXN0ZWQgcm91dGVzPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAge25lc3RlZFJvdXRlc0RhdGEubWFwKCh7IGRlc2NyaXB0aW9uLCB0b3BpY1JvdXRlIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0b3BpY1JvdXRlfT5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgJHt1cFRvTm93VXJsfS8ke3RvcGljUm91dGV9YH0+e2Rlc2NyaXB0aW9ufTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8Um91dGUgcGF0aD17YCR7cGF0aH0vOnRvcGljSWRgfT5cbiAgICAgICAgPFRvcGljIC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBVc2VycywgeyBDcmVhdGVVc2VyIH0gZnJvbSBcIi4vY29tcHMvVXNlcnNcIjtcblxuY29uc3QgY3VycmVudFJvdXRlSGVyZSA9IFwiL3N3aXRjaC13aXRoLW5lc3RlZC1yb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpdGNoUm91dGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5leGFtcGxlIG9mIHN3aXRjaCBzdGF0ZW1lbnQgd2l0aCBleGFjdCByb3V0ZSA8L2gzPlxuICAgICAgPGg0PlxuICAgICAgICAmbHQ7Um91dGUgcGF0aD1cIntgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vyc2B9XCIgZXhhY3QgLyZndDsgPGhyIC8+IGhhcyB0b1xuICAgICAgICBiZSBleGFjdCBpZiBpdCB3b3VuIHQgYmUgaXQgd291bGQgZmFsbCB0byB0aGUgbmV4dCBjcmVhdGUgcm91dGVcbiAgICAgIDwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBrZXk9XCJhYjFcIj5cbiAgICAgICAgICA8YSBocmVmPXtgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vyc2B9Pi91c2VyczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGtleT1cImFiMlwiPlxuICAgICAgICAgIDxhIGhyZWY9e2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzL2NyZWF0ZWB9Pi91c2Vycy9jcmVhdGU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgey8qXG4gICAgICAgIFJlYWN0IHJvdXRlciBkb2VzIHBhcnRpYWwgbWF0Y2hpbmcsIHNvIHVubGVzcyBpdCBzcGVjaWZ5ICdleGFjdCcgaXQgXG4gICAgICAgIHdpbGwgcmV0dXJuIGZpcnN0IG1hdGNoIGZvciByb3V0ZSAvdXNlcnMvY3JlYXRlIGl0IHdvdWxkIFxuICAgICAgICByZXR1cm4gYXRoPVwiL3VzZXJzXCJcblxuICAgICAgICBob3dldmVyIGlmIHlvdSBzcGVjaWZ5ICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGV4YWN0IGNvbXBvbmVudD17VXNlcnN9IC8+XG4gICAgICAgIHRoZW4gaXQgd2lsbCBvbmx5IHJldHVybiB0aGlzIHJvdXRlIGZvciBleGFjdCBtYXRjaCAvdXNlcnMgYnV0IG5vdCAvdXNlcnMvY3JlYXRlVXNlcnNcblxuICAgICAgICBub3RpY2UgdGhhdCBVIG9ubHkgbmVlZCB0byBzcGVjaWZ5IGV4YWN0IGZvciB0aGUgZmlyc3Qgcm91dGUgdW5sZXNzIHlvdXIgcm91dGUgdHJlZVxuICAgICAgICBoYXMgZXh0ZW5zaW9uIG9mXG4gICAgICAgIHVzZXJzL2NyZWF0ZSBhbmQgdXNlci9jcmVhdGUvOnVzZXJJZCB0aGVuIGV4YWN0IGlzIG5lZWQgdG8gYmUgc2V0IGZvciB0aGUgc2hvcnRlciByb3V0ZSBpbiBcbiAgICAgICAgdHJlZSB1c2Vycy9jcmVhdGVcbiAgICAgICovfVxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9e2Ake2N1cnJlbnRSb3V0ZUhlcmV9L3VzZXJzYH0gZXhhY3Q+XG4gICAgICAgICAgPFVzZXJzIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPXtgJHtjdXJyZW50Um91dGVIZXJlfS91c2Vycy9jcmVhdGVgfT5cbiAgICAgICAgICA8Q3JlYXRlVXNlciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IG5lc3RlZFJvdXRlc0RhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvbmVzdGVkUm91dGVzRGF0YVwiO1xuXG5jb25zdCBUb3BpYyA9ICgpID0+IHtcbiAgY29uc3QgeyB0b3BpY0lkIH0gPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCB0b3BpYyA9IG5lc3RlZFJvdXRlc0RhdGEuZmluZChcbiAgICAoeyB0b3BpY1JvdXRlIH0pID0+IHRvcGljUm91dGUgPT09IHRvcGljSWRcbiAgKTtcbiAgY29uc3QgeyByZXNvdXJjZXMgfSA9IHRvcGljO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz57cmVzb3VyY2VzLm5hbWV9PC9oMz5cbiAgICAgIDxwPntyZXNvdXJjZXMuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9waWM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNhbXBsZVVzZXJzID0gKCkgPT4gKFxuICA8dWw+XG4gICAgPGxpPkdyZWc8L2xpPlxuICAgIDxsaT5TdGVmYW5vPC9saT5cbiAgPC91bD5cbik7XG5cbmNvbnN0IENyZWF0ZVVzZXIgPSAoKSA9PiA8cD50aGlzIGlzIHNhbXBsZSB0ZXh0IGZvciBDcmVhdGVVc2VyPC9wPjtcblxuZXhwb3J0IHsgU2FtcGxlVXNlcnMgYXMgZGVmYXVsdCwgQ3JlYXRlVXNlciB9O1xuIiwiY29uc3QgbmVzdGVkUm91dGVzRGF0YSA9IFtcbiAge1xuICAgIGRlc2NyaXB0aW9uOiBcImhvdyB0aGUgPExpbms+IHRhZyB3b3JrcyA/XCIsXG4gICAgdG9waWNSb3V0ZTogXCJsaW5rVGFnXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcIjxMaW5rPiB0YWdcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxpbmsgdGFnIGl0IHdpbGwgYWx3YXlzIHdvcmsgb24gY2xpZW50IGFuZCBkb2VzIG5vdCByZWxvYWQgdGhlIHBhZ2VcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246IFwiaG93IHRoZSB0aGUgPGE+IHRhZ3Mgd29yayA/XCIsXG4gICAgdG9waWNSb3V0ZTogXCJhVGFnXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcIjxhPiB0YWdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcImEgdGFnIHdpbGwgYWx3YXlzIHJlbG9hZCB0aGUgcGFnZSBjYXVzaW5nIHNlcnZlciB0byByZS1ydW5cIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246IFwiY29uc3Qge3VybH0gPXVzZVJvdXRlTWF0Y2goKSBob29rXCIsXG4gICAgdG9waWNSb3V0ZTogXCJyZWFkLXVybC1wYXJhbWV0ZXJzXCIsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBuYW1lOiBcImNvbnN0IHt1cmx9ID0gdXNlUm91dGVNYXRjaCgpXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJ7dXJsfSB1c2VkIGZvciBuZXN0ZWQgbGlua3MsIGNhdXNlIHRpIHdpbGwgcmV0dXJuIHNvbWV0aGluZyBhczogdG9waWNzL3JlYWN0LXJvdXRlclwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJjb25zdCB7cGF0aH0gPXVzZVJvdXRlTWF0Y2goKSBob29rXCIsXG4gICAgdG9waWNSb3V0ZTogXCJyZWFkLXBhdGgtcGFyYW1ldGVyc1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCJjb25zdCB7cGF0aH0gPSB1c2VSb3V0ZU1hdGNoKClcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIntwYXRofSB1c2VkIGZvciBuZXN0ZWQgcm91dGVzLCBjYXVzZSBpdCB3aWxsIHJldGFpbiBwYXJhbSBhcyAgcGF0aC86dG9waWNJZFwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogXCJjb25zdCB7dG9waWNJZH0gPSB1c2VQYXJhbXMoKSBob29rXCIsXG4gICAgdG9waWNSb3V0ZTogXCJyZWFkLXBhcmFtc1wiLFxuICAgIHJlc291cmNlczoge1xuICAgICAgbmFtZTogXCJjb25zdCB7dG9waWNJZH0gPSB1c2VQYXJhbXMoKVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwidXNlZCBmb3IgZ2V0dGluZyAvOnRvcGljSWQgcGFyYW0gXCIsXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG5lc3RlZFJvdXRlc0RhdGE7XG4iLCJpbXBvcnQgeyBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgTmVzdGVkUm91dGVzIGZyb20gXCIuL2NvbXBvbmVudHMvcm91dGVOZXN0aW5nL05lc3RlZFJvdXRlc1wiO1xuaW1wb3J0IE5lc3RlZFJvdXRlc1N3aXRjaCBmcm9tIFwiLi9jb21wb25lbnRzL3JvdXRlTmVzdGluZy9Td2l0Y2hfRXhhY3RfTmVzdGVkX1JvdXRlc1wiO1xuaW1wb3J0IFJvdXRlc1dpdGhSZWR1eCBmcm9tIFwiLi9jb21wb25lbnRzL1JvdXRlc1dpdGhSZWR1eFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9SZWR1eC9zdG9yZSdcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zaGFyZWQvc2FnYXMnXG5cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBIb21lLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbmVzdGVkLXJvdXRlc1wiLFxuICAgIGNvbXBvbmVudDogTmVzdGVkUm91dGVzLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcm91dGVzLXdpdGgtcmVkdXhcIixcbiAgICBjb21wb25lbnQ6IFJvdXRlc1dpdGhSZWR1eCxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3N3aXRjaC13aXRoLW5lc3RlZC1yb3V0ZXNcIixcbiAgICBjb21wb25lbnQ6IE5lc3RlZFJvdXRlc1N3aXRjaCxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3BvcHVsYXIvOnJlcG9fbmFtZVwiLFxuICAgIGNvbXBvbmVudDogR3JpZCxcbiAgfSxcbl07XG5cbi8vIFJlY3Vyc2l2ZWx5IGZldGNoIGRhdGFcbmV4cG9ydCBjb25zdCBwcm9jZXNzUm91dGVzID0gKHJvdXRlc1Byb2Nlc3NpbmcgPSByb3V0ZXMgLCBoaXN0b3J5LCBzdGF0ZSwgcmVxLCByZXMsIGxldmVsID0gMSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAvLyBBIGZyZXNoIHN0b3JlIGlzIG5lZWRlZCBlYWNoIGxvb3AgYXMgYSBjbG9zZWQgc3RvcmUgY2Fubm90IGJlIHJlLW9wZW5lZFxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGhpc3RvcnksIHN0YXRlKTtcblxuICAvLyBTdGFydCB0aGUgcm9vdCBzYWdhIHRhc2tzIHdoaWNoIGlzIGEgcHJvbWlzZVxuICBjb25zdCB0YXNrcyA9IHN0b3JlLnJ1blNhZ2Eocm9vdFNhZ2EpXG5cbiAgLy9yZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAvLyBXaWxsIGNvbnRhaW4gcm91dGVzIHRoYXQgd2lsbCBiZSBwcm9jZXNzZWQgaW4gdGhlIG5leHQgcmVjdXJzaW9uXG4gIGNvbnN0IG5leHQgPSBbXTtcblxuICAvLyBNYXAgdGhyb3VnaCB0aGUgcm91dGVzIGFuZCBmaW5kIGFueSB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IHBhdGhcblxuICByb3V0ZXNQcm9jZXNzaW5nLm1hcCgocm91dGUpID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBsZXQgcmVkdXhBY3Rpb247XG5cbiAgICAgIC8vIElmIHRoZSByb3V0ZSBoYXMgc3ViLXJvdXRlcywgcXVldWUgdGhlbSBmb3IgdGhlIG5leHQgcmVjdXJzaW9uXG4gICAgICAvLyBpZiAocm91dGUucm91dGVzKSBuZXh0LnB1c2goLi4ucm91dGUucm91dGVzKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGxhenktbG9hZGVkIExvYWRhYmxlIHdyYXBwZXJcbiAgICAgIGlmIChyb3V0ZS5jb21wb25lbnQ/LmNvbnRleHRUeXBlcz8ubG9hZGFibGUpIHtcbiAgICAgICAgICBjb25zdCBMb2FkYWJsZUNvbnRhaW5lciA9IHJvdXRlLmNvbXBvbmVudFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBMb2FkYWJsZUNvbnRhaW5lcigpPy5zdGF0ZT8ubG9hZGVkPy5kZWZhdWx0XG4gICAgICAgICAgaWYgKGNvbXBvbmVudD8uZ2V0SW5pdGlhbEFjdGlvbnMpIHtcbiAgICAgICAgICAgIGluaXRpYWxBY3Rpb24gPSBjb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAvLyBSZWd1bGFyIG5vbi1sYXp5IGNvbXBvbmVudCB0aGF0IGNoZWNrIGZvciBpbml0aWFsQWN0aW9uc1xuICAgICAgaWYgKHJvdXRlLmNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucykge1xuICAgICAgICByZWR1eEFjdGlvbiA9IHJvdXRlLmNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucyh7IHJlcSwgbWF0Y2ggfSk7XG4gICAgICB9XG5cbiAgICAgIC8vdGhpcyBwcm9taXNlIGhhcyB0byBiZSByZXNvbHZlZCBldmVuIHRob3VnaCB0aGVyZSBhcmUgbm90IGFueSBvdGhlciBpbml0aWFsIGFjdGlvbnMgb3IgbmVzdGVkIHJvdXRlc1xuICAgICAgaWYgKHJlZHV4QWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWR1eEFjdGlvbicsIHJlZHV4QWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHJlZHV4QWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyBcblxuICAvLyBDbG9zZSB0aGUgc3RvcmUgdG8gbmV3IGFjdGlvbnNcbiAgc3RvcmUuY2xvc2UoKVxuXG4gICAvLyBXYWl0IGZvciB0aGUgcnVubmluZyBhY3Rpb25zIHRvIGNvbXBsZXRlXG4gICB0YXNrc1xuICAgLnRvUHJvbWlzZSgpXG4gICAudGhlbigoKSA9PiB7XG4gICAgIGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcHJvY2Vzc1JvdXRlcyhuZXh0LCBoaXN0b3J5LCBzdG9yZS5nZXRTdGF0ZSgpLCByZXEsIHJlcywgbGV2ZWwgKyAxKSAvLyByZWN1cnNpb24hXG4gICAgICAgICAudGhlbigobGF0ZXN0U3RvcmUpID0+IHJlc29sdmUobGF0ZXN0U3RvcmUpKVxuICAgICAgICAgLmNhdGNoKHJlamVjdCkgXG4gICAgIH0gZWxzZSB7XG4gICAgICAgcmVzb2x2ZShzdG9yZSlcbiAgICAgfVxuICAgfSlcbiAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgIHJlamVjdChlcnIpXG4gICB9KVxuXG4gIH0pIFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgd2F0Y2hBZGRQcm9tbywgd2F0Y2hEZWxldGVQcm9tbyB9IGZyb20gJy4uL3NhZ2FzL3Byb21vc1NhZ2EnO1xuXG4vLyBXZSBvbmx5IHdhbnQgdG8gd2F0Y2ggdGhlICd3YXRjaGVyJyBzYWdhc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3QoKSB7XG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaEFkZFByb21vKV0pO1xufVxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCB7IEFERF9QUk9NTywgREVMRVRFX1BST01PIH0gZnJvbSAnLi4vUmVkdXgvYWN0aW9ucy9wcm9tb3Rpb25zJztcblxuLyoqXG4gKiBDYWxscyBhZGQgcGF5bWVudCBBUEkgd2l0aCBzZWxlY3RlZCBwYXltZW50IG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gLSBhZGRQYXltZW50IGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIC0gQWN0aW9uIHBheWxvYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZC5yZWZlcmVuY2UgLSBQcm9tbyByZWZlcmVuY2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGFjdGlvbi5wYXlsb2FkLm9uU3VjY2VzcyAtIEZ1bmN0aW9uIHRvIHJ1biBhZnRlciBhZGQgcHJvbW8gcmVzcG9uc2UgaXMgc3VjY2Vzc2Z1bFxuICogQHBhcmFtIHtmdW5jdGlvbn0gYWN0aW9uLnBheWxvYWQub25GYWlsdXJlIC0gRnVuY3Rpb24gdG8gcnVuIGFmdGVyIGFkZCBwcm9tbyByZXNwb25zZSBpcyB1bnN1Y2Nlc3NmdWxcbiAqIEByZXR1cm5zIHtzdHJpbmd8b2JqZWN0fSBwcm9tbyByZWZlcmVuY2Ugb24gc3VjY2VzcyBhbmQgbnVsbCBvbiBmYWlsdXJlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBhZGRQcm9tb1NhZ2EoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3RvcmUgPSB5aWVsZCBzZWxlY3QoKTtcblxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHN0b3JlIGJlZm9yZSBhY3Rpb24gY29tcGxldGVkJywgc3RvcmUpO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xuICB9IGNhdGNoIChfdW50eXBlZEVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBkZWxldGVQcm9tb1NhZ2EoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3RvcmUgPSB5aWVsZCBzZWxlY3QoKTtcblxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHN0b3JlIGJlZm9yZSBhY3Rpb24gY29tcGxldGVkJywgc3RvcmUpO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xuICB9IGNhdGNoIChfdW50eXBlZEVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEFkZFByb21vKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QUk9NTywgYWRkUHJvbW9TYWdhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaERlbGV0ZVByb21vKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9QUk9NTywgZGVsZXRlUHJvbW9TYWdhKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1jb2xvci1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==