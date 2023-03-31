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
/******/ 	__webpack_require__.p = "/assets/chunks/";
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
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/App */ "./src/shared/components/App.jsx");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");







var ssrMiddleware = function ssrMiddleware(req, res, next) {
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url', req.url);
  //this goes through all routes in application;
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_6__["default"].find(function (route, i) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(req.url, route);
  }) || {};
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('activeRoute', activeRoute);
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var context = {
      data: data
    };
    node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.color('yellow').bold().log('requested req.url in promise response', req.url);
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
      location: req.url,
      context: context
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    res.send("\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <title>SSR with RR</title>\n            <!-- this has been generated by config/client/webpack.dev.config -->\n            <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(data), "</script>\n          </head>\n  \n          <body>\n            <div id=\"app\">").concat(markup, "</div>\n          </body>\n          <!-- below only works with dev-server is the hydrate react part that melts bundle.js into sever output\n          \n          from :\n\n          output: {\n            path: path.join(__dirname, '../../', 'src'),\n            filename: 'bundle.js',\n          },\n          \n          -->\n         <script   type=\"text/javascript\" src=\"/bundle.js\" defer></script>\n        </html>\n      "));
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
  node_color_log__WEBPACK_IMPORTED_MODULE_1___default.a.info("node server started on:".concat(PORT));
});
/* WEBPACK VAR INJECTION */}.call(this, "src/server"))

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
    name: 'All',
    param: 'all'
  }, {
    name: 'JavaScript',
    param: 'javascript'
  }, {
    name: 'Ruby',
    param: 'ruby'
  }, {
    name: 'Python',
    param: 'python'
  }, {
    name: 'Java',
    param: 'java'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, languages.map(function (_ref) {
    var name = _ref.name,
      param = _ref.param;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: param
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      activeStyle: {
        fontWeight: 'bold'
      },
      to: "/popular/".concat(param)
    }, name));
  }));
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

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ "./src/shared/components/Home.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Grid */ "./src/shared/components/Grid.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/shared/api.js");



var routes = [{
  path: "/",
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
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
  !*** multi ./src/server/server.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/server.js */"./src/server/server.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0hvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ob01hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWNvbG9yLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiJdLCJuYW1lcyI6WyJzc3JNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsImxvZ2dlciIsImNvbG9yIiwiYm9sZCIsImxvZyIsInVybCIsImFjdGl2ZVJvdXRlIiwicm91dGVzIiwiZmluZCIsInJvdXRlIiwiaSIsIm1hdGNoUGF0aCIsInByb21pc2UiLCJmZXRjaEluaXRpYWxEYXRhIiwicGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRhdGEiLCJjb250ZXh0IiwibWFya3VwIiwicmVuZGVyVG9TdHJpbmciLCJzZW5kIiwic2VyaWFsaXplIiwiYXBwIiwiZXhwcmVzcyIsInNldCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ1c2UiLCJQT1JUIiwibGlzdGVuIiwiaW5mbyIsImZldGNoUG9wdWxhclJlcG9zIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwiZmV0Y2giLCJqc29uIiwicmVwb3MiLCJpdGVtcyIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJBcHAiLCJtYXAiLCJleGFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwcm9wcyIsIkdyaWQiLCJfX2lzQnJvd3Nlcl9fIiwic3RhdGljQ29udGV4dCIsInN0YXRlIiwibG9hZGluZyIsImZldGNoUmVwb3MiLCJiaW5kIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxhbmciLCJzZXRTdGF0ZSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm5hbWUiLCJvd25lciIsInN0YXJnYXplcnNfY291bnQiLCJodG1sX3VybCIsIm1hcmdpbiIsImxvZ2luIiwiSG9tZSIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsIk5hdmJhciIsImxhbmd1YWdlcyIsInBhcmFtIiwiZm9udFdlaWdodCIsIk5vTWF0Y2giLCJzcGxpdCIsInBvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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RU8sSUFBSSxFQUFFLEdBQUc7RUFDVGdDLEtBQUssRUFBRSxJQUFJO0VBQ1hFLFNBQVMsRUFBRXlCLHdEQUFJQTtBQUNqQixDQUFDLEVBQ0Q7RUFDRTNELElBQUksRUFBRSxjQUFjO0VBQ3BCa0MsU0FBUyxFQUFFRyx3REFBSTtFQUNmdEMsZ0JBQWdCLEVBQUU7SUFBQSxJQUFDQyxJQUFJLHVFQUFHLEVBQUU7SUFBQSxPQUFLbUIsOERBQWlCLENBQUNuQixJQUFJLENBQUNvRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0VBQUE7QUFDM0UsQ0FBQyxDQUNGO0FBRWM1RSxxRUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCckIseUU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2NodW5rcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2dnZXIgZnJvbSAnbm9kZS1jb2xvci1sb2cnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vc2hhcmVkL3JvdXRlcyc7XG5cbmNvbnN0IHNzck1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbG9nZ2VyLmNvbG9yKCd5ZWxsb3cnKS5ib2xkKCkubG9nKCdyZXF1ZXN0ZWQgcmVxLnVybCcsIHJlcS51cmwpO1xuICAvL3RoaXMgZ29lcyB0aHJvdWdoIGFsbCByb3V0ZXMgaW4gYXBwbGljYXRpb247XG4gIGNvbnN0IGFjdGl2ZVJvdXRlID1cbiAgICByb3V0ZXMuZmluZCgocm91dGUsIGkpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xuXG4gIGxvZ2dlci5jb2xvcigneWVsbG93JykuYm9sZCgpLmxvZygnYWN0aXZlUm91dGUnLCBhY3RpdmVSb3V0ZSk7XG5cbiAgY29uc3QgcHJvbWlzZSA9IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGFcbiAgICA/IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGEocmVxLnBhdGgpXG4gICAgOiBQcm9taXNlLnJlc29sdmUoKTtcblxuICBwcm9taXNlXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7IGRhdGEgfTtcbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpO1xuICAgICAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICApO1xuXG4gICAgICByZXMuc2VuZChgXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XG4gICAgICAgICAgICA8IS0tIHRoaXMgaGFzIGJlZW4gZ2VuZXJhdGVkIGJ5IGNvbmZpZy9jbGllbnQvd2VicGFjay5kZXYuY29uZmlnIC0tPlxuICAgICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9ICR7c2VyaWFsaXplKGRhdGEpfTwvc2NyaXB0PlxuICAgICAgICAgIDwvaGVhZD5cbiAgXG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+JHttYXJrdXB9PC9kaXY+XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgIDwhLS0gYmVsb3cgb25seSB3b3JrcyB3aXRoIGRldi1zZXJ2ZXIgaXMgdGhlIGh5ZHJhdGUgcmVhY3QgcGFydCB0aGF0IG1lbHRzIGJ1bmRsZS5qcyBpbnRvIHNldmVyIG91dHB1dFxuICAgICAgICAgIFxuICAgICAgICAgIGZyb20gOlxuXG4gICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICBwYXRoOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vJywgJ3NyYycpLFxuICAgICAgICAgICAgZmlsZW5hbWU6ICdidW5kbGUuanMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgICAgLS0+XG4gICAgICAgICA8c2NyaXB0ICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9idW5kbGUuanNcIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYCk7XG4gICAgfSlcbiAgICAuY2F0Y2gobmV4dCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzc3JNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ25vZGUtY29sb3ItbG9nJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHNzck1pZGRsZXdhcmUgZnJvbSAnLi4vc2VydmVyL21pZGRsZXdhcmUvc3NyJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcvdmlld3MnKSk7XG4vLyBSZW5kZXJzIHRoZSBhcHBcbmFwcC51c2Uoc3NyTWlkZGxld2FyZSk7XG5cbmNvbnN0IFBPUlQgPSAzMzg5O1xuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGxvZ2dlci5pbmZvKGBub2RlIHNlcnZlciBzdGFydGVkIG9uOiR7UE9SVH1gKTtcbn0pO1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyAobGFuZ3VhZ2UgPSAnYWxsJykge1xuICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgKVxuXG4gIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigocmVwb3MpID0+IHJlcG9zLml0ZW1zKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvcilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBSb3V0ZSwgTGluaywgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vTm9NYXRjaFwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgZXhhY3Q9e2V4YWN0fVxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFJvdXRlIHJlbmRlcj17KHByb3BzKSA9PiA8Tm9NYXRjaCB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgcmVwb3M7XG4gICAgLy9fX2lzQnJvd3Nlcl9fIGlkIGRlZmluZWQgaW4gd2VicGFjay5jb25maWcgYXMgZ2xvYmFsXG4gICAgaWYgKF9faXNCcm93c2VyX18pIHtcbiAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgICBkZWxldGUgd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9zID0gdGhpcy5wcm9wcy5zdGF0aWNDb250ZXh0LmRhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zLFxuICAgICAgbG9hZGluZzogcmVwb3MgPyBmYWxzZSA6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMuZmV0Y2hSZXBvcyA9IHRoaXMuZmV0Y2hSZXBvcy5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcykge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuICBmZXRjaFJlcG9zKGxhbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIHRoaXMucHJvcHMuZmV0Y2hJbml0aWFsRGF0YShsYW5nKS50aGVuKChyZXBvcykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgcmVwb3MsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCByZXBvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gPHA+TE9BRElORzwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3sgbWFyZ2luOiAzMCB9fT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2h0bWxfdXJsfT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgIDxsaT57c3RhcmdhemVyc19jb3VudH0gc3RhcnM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIERlY2xhcmUgYSBuZXcgc3RhdGUgdmFyaWFibGUsIHdoaWNoIHdlJ2xsIGNhbGwgXCJjb3VudFwiXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+WW91IGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIgKCkge1xuICBjb25zdCBsYW5ndWFnZXMgPSBbe1xuICAgIG5hbWU6ICdBbGwnLFxuICAgIHBhcmFtOiAnYWxsJ1xuICB9LCB7XG4gICAgbmFtZTogJ0phdmFTY3JpcHQnLFxuICAgIHBhcmFtOiAnamF2YXNjcmlwdCcsXG4gIH0sIHtcbiAgICBuYW1lOiAnUnVieScsXG4gICAgcGFyYW06ICdydWJ5JyxcbiAgfSwge1xuICAgIG5hbWU6ICdQeXRob24nLFxuICAgIHBhcmFtOiAncHl0aG9uJyxcbiAgfSwge1xuICAgIG5hbWU6ICdKYXZhJyxcbiAgICBwYXJhbTogJ2phdmEnLFxuICB9XVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwYXJhbX0+XG4gICAgICAgICAgPE5hdkxpbmsgYWN0aXZlU3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fSB0bz17YC9wb3B1bGFyLyR7cGFyYW19YH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tIFwiLi9hcGlcIjtcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBIb21lLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcG9wdWxhci86aWRcIixcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSBcIlwiKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KFwiL1wiKS5wb3AoKSksXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=