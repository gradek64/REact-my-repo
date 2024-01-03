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

/***/ "./config/envconfig/envConfig.ts":
/*!***************************************!*\
  !*** ./config/envconfig/envConfig.ts ***!
  \***************************************/
/*! exports provided: nconf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nconf */ "nconf");
/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nconf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "nconf", function() { return nconf__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);



// Initialise with arguments and env variables
nconf__WEBPACK_IMPORTED_MODULE_0___default.a.argv().env();

// Set the default environment to production
nconf__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
  NODE_ENV: 'production',
  // NEW_RELIC_HOME: './config/newrelic',
  DISABLE_AUTOMATIC_RESUME: 'false'
});
var config = nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('ENV_CONFIG') || nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('NODE_ENV');

// Load environment constants for environment
nconf__WEBPACK_IMPORTED_MODULE_0___default.a.file({
  file: "./config/envconfig/envconfig.".concat(config, ".json")
});
if (config === 'stub') {
  dotenv__WEBPACK_IMPORTED_MODULE_1__["config"]({
    path: '.env.local'
  });
  nconf__WEBPACK_IMPORTED_MODULE_0___default.a.set('ADDRESS_FINDER_API_KEY', process.env.ADDRESS_FINDER_API_KEY);
}

// STUB_URL will be set for feature branches
// TODO: See ticket BOFS-4265 - investigate similar functionality that can deploy feature or preview deployments in Bosun
// if (nconf.get('ENV_CONFIG') === 'remoteStub') {
//   nconf.set('GATEWAY_API', nconf.get('GATEWAY_API').replace('stub-payment-service', nconf.get('STUB_URL')))
//   nconf.set('ACCOUNT_API', nconf.get('ACCOUNT_API').replace('stub-payment-service', nconf.get('STUB_URL')))
//   nconf.set('WCS_API', nconf.get('WCS_API').replace('stub-payment-service', nconf.get('STUB_URL')))
//   nconf.set(
//     'SESSION_MANAGER_API',
//     nconf.get('SESSION_MANAGER_API').replace('stub-payment-service', nconf.get('STUB_URL')),
//   )
//   nconf.set(
//     'MARKETING_PREFERENCE_API',
//     nconf.get('MARKETING_PREFERENCE_API').replace('stub-payment-service', nconf.get('STUB_URL')),
//   )
// }

// Pass all values into process.env
process.env = nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get();

// Log out the endpoints we're using to make debugging easier
if (config !== 'test') {
  console.log(JSON.stringify({
    name: 'serverLogger',
    msg: "Configuration for \"".concat(config, "\":"),
    envconfig: {
      NODE_ENV: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('NODE_ENV'),
      ENV_CONFIG: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('ENV_CONFIG'),
      GATEWAY_API: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('GATEWAY_API'),
      ACCOUNT_API: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('ACCOUNT_API'),
      WCS_API: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('WCS_API'),
      SESSION_MANAGER_API: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('SESSION_MANAGER_API'),
      MARKETING_PREFERENCE_API: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('MARKETING_PREFERENCE_API'),
      RECEIPT_API: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('RECEIPT_API'),
      CONSUL_ENV: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('CONSUL_ENV'),
      BOSUN_CONFIG_MAP: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('BOSUN_CONFIG_MAP'),
      VAULT_ENV: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('VAULT_ENV'),
      BOSUN_ENV: nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get('BOSUN_ENV')
    }
  }));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/actions/app.ts":
/*!****************************!*\
  !*** ./src/actions/app.ts ***!
  \****************************/
/*! exports provided: MODAL_OPEN, MODAL_CLOSE, SET_ORDER_SUMMARY_VARIANT, SET_BRAND, SET_THEME, TOGGLE_PREVIEW_PLACE_ORDER, SET_FEATURE_TOGGLE, SET_FEATURES, SET_CONFIG, SET_CHANNEL_TOGGLE, TRACK_AD_CONTINUE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_OPEN", function() { return MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_CLOSE", function() { return MODAL_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ORDER_SUMMARY_VARIANT", function() { return SET_ORDER_SUMMARY_VARIANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BRAND", function() { return SET_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_THEME", function() { return SET_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_PREVIEW_PLACE_ORDER", function() { return TOGGLE_PREVIEW_PLACE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FEATURE_TOGGLE", function() { return SET_FEATURE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FEATURES", function() { return SET_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONFIG", function() { return SET_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHANNEL_TOGGLE", function() { return SET_CHANNEL_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACK_AD_CONTINUE_ERROR", function() { return TRACK_AD_CONTINUE_ERROR; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

//import { ConsulConfig } from 'types/reducers/app'

var MODAL_OPEN = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('MODAL_OPEN');
var MODAL_CLOSE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('MODAL_CLOSE');
var SET_ORDER_SUMMARY_VARIANT = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_ORDER_SUMMARY_VARIANT');
var SET_BRAND = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_BRAND');
var SET_THEME = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_THEME');
var TOGGLE_PREVIEW_PLACE_ORDER = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('TOGGLE_PREVIEW_PLACE_ORDER');
var SET_FEATURE_TOGGLE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_FEATURE_TOGGLE');
var SET_FEATURES = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_FEATURES');
var SET_CONFIG = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_CONFIG');
var SET_CHANNEL_TOGGLE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_CHANNEL_TOGGLE');
//export const SET_CONFIG_COOKIE = createAction<ConsulConfig>('SET_CONFIG_COOKIE')
var TRACK_AD_CONTINUE_ERROR = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('TRACK_AD_CONTINUE_ERROR');

/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! exports provided: MODAL_OPEN, MODAL_CLOSE, SET_ORDER_SUMMARY_VARIANT, TOGGLE_PREVIEW_PLACE_ORDER, SET_BRAND, SET_THEME, SET_FEATURE_TOGGLE, SET_CHANNEL_TOGGLE, SET_FEATURES, SET_CONFIG, TRACK_AD_CONTINUE_ERROR, GET_WALLET_SUCCESS, GET_WALLET_FAILURE, INIT_USER_INFO_PAGE, ROUTER_LOCATION_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/actions/app.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODAL_OPEN", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["MODAL_OPEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODAL_CLOSE", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["MODAL_CLOSE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_ORDER_SUMMARY_VARIANT", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_ORDER_SUMMARY_VARIANT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_PREVIEW_PLACE_ORDER", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_PREVIEW_PLACE_ORDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_BRAND", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_BRAND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_THEME", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_THEME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FEATURE_TOGGLE", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_FEATURE_TOGGLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHANNEL_TOGGLE", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_CHANNEL_TOGGLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FEATURES", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_FEATURES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONFIG", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SET_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACK_AD_CONTINUE_ERROR", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["TRACK_AD_CONTINUE_ERROR"]; });

/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet */ "./src/actions/wallet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WALLET_SUCCESS", function() { return _wallet__WEBPACK_IMPORTED_MODULE_1__["GET_WALLET_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WALLET_FAILURE", function() { return _wallet__WEBPACK_IMPORTED_MODULE_1__["GET_WALLET_FAILURE"]; });

/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta */ "./src/actions/meta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INIT_USER_INFO_PAGE", function() { return _meta__WEBPACK_IMPORTED_MODULE_2__["INIT_USER_INFO_PAGE"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/actions/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTER_LOCATION_CHANGE", function() { return _router__WEBPACK_IMPORTED_MODULE_3__["ROUTER_LOCATION_CHANGE"]; });






/***/ }),

/***/ "./src/actions/meta.ts":
/*!*****************************!*\
  !*** ./src/actions/meta.ts ***!
  \*****************************/
/*! exports provided: INIT_USER_INFO_PAGE, GET_WALLET_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_USER_INFO_PAGE", function() { return INIT_USER_INFO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WALLET_FAILURE", function() { return GET_WALLET_FAILURE; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var INIT_USER_INFO_PAGE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_WALLET_SUCCESS');
var GET_WALLET_FAILURE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_WALLET_FAILURE');

/***/ }),

/***/ "./src/actions/router.ts":
/*!*******************************!*\
  !*** ./src/actions/router.ts ***!
  \*******************************/
/*! exports provided: ROUTER_LOCATION_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_LOCATION_CHANGE", function() { return ROUTER_LOCATION_CHANGE; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);


var ROUTER_LOCATION_CHANGE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["LOCATION_CHANGE"]);

/***/ }),

/***/ "./src/actions/wallet.ts":
/*!*******************************!*\
  !*** ./src/actions/wallet.ts ***!
  \*******************************/
/*! exports provided: GET_WALLET_SUCCESS, GET_WALLET_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WALLET_SUCCESS", function() { return GET_WALLET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WALLET_FAILURE", function() { return GET_WALLET_FAILURE; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var GET_WALLET_SUCCESS = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_WALLET_SUCCESS');
var GET_WALLET_FAILURE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_WALLET_FAILURE');

/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! exports provided: checkResponse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkResponse", function() { return checkResponse; });
/* harmony import */ var _sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sainsburys-tech/boltui-utils */ "@sainsburys-tech/boltui-utils");
/* harmony import */ var _sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Logger */ "./src/utils/Logger.ts");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints */ "./src/api/endpoints.ts");
/* harmony import */ var _helpers_requestHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/requestHelpers */ "./src/helpers/requestHelpers.ts");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'types/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var isProduction = "development" === 'production';
var apiFactory = function apiFactory() {
  return {
    /*
     // Wallet how the final path look like:
     1.
    prod
    "ACCOUNT_API": "https://argos-account-account-service.int.prd.jspaas.uk",
    stage 
    "ACCOUNT_API": "https://argos-account-account-service.int.stg.jspaas.uk",
    stubs 
    "ACCOUNT_API": "http://localhost:3011",
     2.
    config.accountApiServer = process.env.ACCOUNT_API
    config.accountApiBaseUrl = `/account-api`,
     const accountApiServer = accountApiEndpoint() => config.accountApiServer}${config.accountApiBaseUrl}${endpoint}`
    QUERKY BIT = ${endpoint} is alway empty cause we do not pass anything to the method accountApiEndpoint()
      account path = `${canUseDom() ? '' : accountApiEndpoint() 
    Client : empty canUseDom() && ''
    SERVER: http://localhost:3011/account-api/
      -----URL all together-----
     // const endpoint = endpoints.getWallet(11) => `${account}/users/11/wallet`
     Client : /users/11/wallet
    SERVER: http://localhost:3011/account-api/users/11/wallet
    */

    getWallet: function getWallet(userId, cookie) {
      return _helpers_requestHelpers__WEBPACK_IMPORTED_MODULE_3__["request"].get(_endpoints__WEBPACK_IMPORTED_MODULE_2__["default"].getWallet(userId)).set({
        Cookie: cookie
      });
    },
    // Session
    createAnonymousSession: function createAnonymousSession(options) {
      return _helpers_requestHelpers__WEBPACK_IMPORTED_MODULE_3__["request"].post(_endpoints__WEBPACK_IMPORTED_MODULE_2__["default"].createAnonymousSession(), options);
    }
  };
};

/**
 * Helper method to read superagent responses
 */
function checkResponse(response) {
  var shouldRedirectToLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return new Promise(function (resolve, reject) {
    if (!response || !response.status) {
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].fatal("We didn't get a response");
      reject();
      return;
    }
    if (response.status === !(function webpackMissingModule() { var e = new Error("Cannot find module 'types/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).NOT_FOUND) {
      reject(response);
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text
      });
      return;
    }
    if (response.status === !(function webpackMissingModule() { var e = new Error("Cannot find module 'types/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).UNAUTHORIZED && shouldRedirectToLogin) {
      if (Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])()) {
        var successUrl = "".concat(window.location.pathname).concat(window.location.search);
        window.location.href = "/login?pageName=mandatoryPrepay&successUrl=".concat(encodeURIComponent(successUrl));
      }
      reject(response);
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text
      });
      return;
    }
    if (response.status === !(function webpackMissingModule() { var e = new Error("Cannot find module 'types/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).BAD_REQUEST) {
      reject(response);
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text
      });
      return;
    }
    if (response && response.ok) {
      resolve(response.body);
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].debug({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        // hide success body in prod as it contains customer data
        text: isProduction ? undefined : response.text
      });
      return;
    }
    if (response && !response.ok) {
      reject(response);
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text
      });
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (apiFactory());

/***/ }),

/***/ "./src/api/endpoints.ts":
/*!******************************!*\
  !*** ./src/api/endpoints.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_apiUrlHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiUrlHelpers */ "./src/helpers/apiUrlHelpers.ts");

var account = Object(_helpers_apiUrlHelpers__WEBPACK_IMPORTED_MODULE_0__["accountApiEndpoint"])();
var session = Object(_helpers_apiUrlHelpers__WEBPACK_IMPORTED_MODULE_0__["sessionManagerEndpoint"])();
var endpoints = {
  // Wallet
  getWallet: function getWallet(userId) {
    return "".concat(account, "/users/").concat(userId, "/wallet");
  },
  // Session
  createAnonymousSession: function createAnonymousSession() {
    return "".concat(session, "/sessions/anonymous");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: checkResponse, endpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkResponse", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["checkResponse"]; });

/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ "./src/api/endpoints.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_api__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/*! exports provided: GiftCardTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftCardTypes", function() { return GiftCardTypes; });
/* harmony import */ var _sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sainsburys-tech/boltui-utils */ "@sainsburys-tech/boltui-utils");
/* harmony import */ var _sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */


var host = process.env.HOST || 'localhost';
var port = '8080';
var prepayApi = process.env.GATEWAY_API || '';
var accountApi = process.env.ACCOUNT_API || '';
var marketingAPI = Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : 'http://localhost:8080';
var productApi = Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : 'http://localhost:8080';
var sessionManagerApi = Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : 'http://localhost:8080';
var getUserInfoApi = process.env.WCS_API || '';
var vatReceiptApi = Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : 'http://localhost:8080';
var GiftCardTypes = /*#__PURE__*/function (GiftCardTypes) {
  GiftCardTypes["GENERIC"] = "GENERIC";
  GiftCardTypes["CARD_GIFT_ARGOS"] = "CARD_GIFT_ARGOS";
  GiftCardTypes["NEW_GIFT_CARD_ARGOS"] = "NEW_GIFT_CARD_ARGOS";
  GiftCardTypes["CARD_GIFT_FLEXECASH"] = "CARD_GIFT_FLEXECASH";
  return GiftCardTypes;
}({});
var config = {
  host: host,
  port: port,
  prepayApiServer: prepayApi,
  accountApiServer: accountApi,
  productApiServer: productApi,
  getVatReceiptServer: vatReceiptApi,
  marketingApiServer: marketingAPI,
  sessionManagerServer: sessionManagerApi,
  getUserInfoApiServer: getUserInfoApi,
  prepayApiBaseUrl: "/checkout-api-v2",
  orderApiBaseUrl: "/checkout-api-v2",
  accountApiBaseUrl: "/account-api",
  productApiBaseUrl: "/checkout/proxy/product-gateway",
  marketingApiBaseUrl: "/checkout/proxy/marketing-preferences",
  sessionManagerBaseUrl: "/internal/proxy/session-manager",
  getUserInfoApiBaseUrl: "/webapp/wcs/stores/servlet/GetUserInfo",
  getVatReceiptApiBaseUrl: "/checkout/proxy/receipt-service",
  app: {
    rootFontSize: 16
  },
  timings: {
    fadeInOut: 200,
    snapshotLockDelay: 5000,
    placeOrderShowErrorDelay: 500
  },
  paymentMethodRoutes: {
    "default": 'PaymentMethodRoutes.DEFAULT',
    creditDebitCard: 'PaymentMethodRoutes.CARD_DEBIT',
    paypal: 'PaymentMethodRoutes.PAYPAL',
    applePay: 'PaymentMethodRoutes.APPLE_PAY',
    argosCardCreditPlan: 'PaymentMethodRoutes.CARD_ARGOS_CREDIT'
  },
  statuses: {
    initialisationInProgress: 202
  },
  paymentMethodsOrder: ['CARD_DEBIT', 'CARD_ARGOS_CREDIT', 'PAYPAL', 'APPLE_PAY'],
  nectar: {
    CARD_NECTAR: {
      binNumber: '98263000',
      cardNumberLength: 11
    }
  },
  giftCardTypes: {
    GENERIC: {},
    CARD_GIFT_ARGOS: {
      binRange: '10000',
      minLength: 20,
      maxLength: 20,
      pinNumberLength: 4,
      image: 'https://i1.adis.ws/i/Argos/GiftCard'
    },
    NEW_GIFT_CARD_ARGOS: {
      binRange: '98260278',
      minLength: 19,
      maxLength: 19,
      pinNumberLength: 4,
      image: 'https://i1.adis.ws/i/Argos/GiftCard'
    },
    CARD_GIFT_FLEXECASH: {
      binRange: '633827',
      minLength: 19,
      maxLength: 19,
      securityCodeLength: 3,
      image: 'https://i1.adis.ws/i/Argos/Flexecash'
    }
  },
  maximumNumberOfGiftCards: 8,
  placeOrderAnimation: {
    seasons: {
      "default": 'Season.DEFAULT',
      xmas: 'Season.XMAS',
      defaultTu: 'Season.DEFAULT_TU',
      xmasTu: 'Season.XMAS_TU',
      defaultHabitat: 'Season.DEFAULT_HABITAT',
      xmasHabitat: 'Season.XMAS_HABITAT',
      halloween: 'Season.HALLOWEEN',
      pride: 'Season.PRIDE',
      prideTu: 'Season.PRIDE_TU',
      prideHabitat: 'Season.PRIDE_HABITAT',
      blackHistoryMonth: 'Season.BLACK_HISTORY_MONTH',
      blackHistoryMonthHabitat: 'Season.BLACK_HISTORY_MONTH_HABITAT',
      blackHistoryMonthTu: 'Season.BLACK_HISTORY_MONTH_TU'
    },
    initialDelayMs: 2000,
    colors: {
      variants: {
        "default": {
          bgMask: '#FFF9FA'
        },
        xmas: {}
      }
    },
    box: {
      lid: {
        animDurationMs: 4000
      }
    },
    products: {
      total: 3,
      animYAxisMoveDistancePx: 320,
      animTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
      animDurationMs: 3500
    },
    text: {
      intervalDurationMs: 3000,
      options: ['Calling elves...', 'Shaking mistletoe...', 'Working our magic...', "Won't be much longer..."]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/helpers/apiUrlHelpers.ts":
/*!**************************************!*\
  !*** ./src/helpers/apiUrlHelpers.ts ***!
  \**************************************/
/*! exports provided: prepayApiEndpoint, accountApiEndpoint, orderApiEndpoint, productApiEndpoint, sessionManagerEndpoint, getUserInfoApiEndpoint, getVatReceiptEndpoint, marketingPreferencesApiEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepayApiEndpoint", function() { return prepayApiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountApiEndpoint", function() { return accountApiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderApiEndpoint", function() { return orderApiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productApiEndpoint", function() { return productApiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionManagerEndpoint", function() { return sessionManagerEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfoApiEndpoint", function() { return getUserInfoApiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVatReceiptEndpoint", function() { return getVatReceiptEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketingPreferencesApiEndpoint", function() { return marketingPreferencesApiEndpoint; });
/* harmony import */ var _sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sainsburys-tech/boltui-utils */ "@sainsburys-tech/boltui-utils");
/* harmony import */ var _sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");


var prepayApiEndpoint = function prepayApiEndpoint() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].prepayApiServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].prepayApiBaseUrl).concat(endpoint);
};
var accountApiEndpoint = function accountApiEndpoint() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].accountApiServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].accountApiBaseUrl).concat(endpoint);
};
var orderApiEndpoint = function orderApiEndpoint() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].prepayApiServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].orderApiBaseUrl).concat(endpoint);
};
var productApiEndpoint = function productApiEndpoint() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].productApiServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].productApiBaseUrl).concat(endpoint);
};
var sessionManagerEndpoint = function sessionManagerEndpoint() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].sessionManagerServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].sessionManagerBaseUrl).concat(endpoint);
};
var getUserInfoApiEndpoint = function getUserInfoApiEndpoint() {
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].getUserInfoApiServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].getUserInfoApiBaseUrl);
};
var getVatReceiptEndpoint = function getVatReceiptEndpoint() {
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].getVatReceiptServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].getVatReceiptApiBaseUrl);
};
var marketingPreferencesApiEndpoint = function marketingPreferencesApiEndpoint() {
  return "".concat(Object(_sainsburys_tech_boltui_utils__WEBPACK_IMPORTED_MODULE_0__["canUseDom"])() ? '' : _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].marketingApiServer).concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].marketingApiBaseUrl);
};

/***/ }),

/***/ "./src/helpers/requestHelpers.ts":
/*!***************************************!*\
  !*** ./src/helpers/requestHelpers.ts ***!
  \***************************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/no-explicit-any */


// We handle these errors in check response function
var catchError = function catchError(res) {
  return res.status < 500;
};
var request = {
  get: function get(url) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).type('json').ok(catchError);
  },
  post: function post(url, data) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data).type('json').ok(catchError);
  },
  patch: function patch(url, data) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.patch(url, data).type('json').ok(catchError);
  },
  put: function put(url, data) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, data).type('json').ok(catchError);
  },
  "delete": function _delete(url, data) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](url, data).type('json').ok(catchError);
  }
};

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta_metaReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta/metaReducer */ "./src/reducers/meta/metaReducer.ts");
/* harmony import */ var _wallet_walletReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/walletReducer */ "./src/reducers/wallet/walletReducer.ts");




var createRootReducer = function createRootReducer(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    meta: _meta_metaReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
    wallet: _wallet_walletReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

/***/ }),

/***/ "./src/reducers/meta/metaReducer.ts":
/*!******************************************!*\
  !*** ./src/reducers/meta/metaReducer.ts ***!
  \******************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.ts");


var initialState = {
  loading: false,
  error: false,
  id: null,
  customerId: null,
  missingBillingAddress: false,
  incompleteBooking: false,
  missingCustomerDetails: false,
  stockHoldStatus: 'IDLE',
  hasStockHoldError: false,
  snapshotStatus: null,
  orderId: null,
  previousLocation: null,
  location: null,
  brand: null,
  fulfilmentType: 'COLLECTION',
  toggleModalDisableEscClose: false,
  modalRemoveScroll: true,
  serverSideCookies: [],
  missingBookingID: false,
  isWcsHandover: true,
  fulfilmentCreated: false,
  redirectToArrangeDelivery: false,
  fatalFulfilmentError: false,
  redirectToPayment: false,
  fatalBookingError: false
};

/* const setLoading = (state: MetaState) => {
  state.loading = true
  state.error = false
}
const setErrorAdvice = (
  state: MetaState,
  {
    payload,
  }: {
    payload: InitSnapshotFailureActionPayload | GetSnapshotFailureActionPayload
  },
) => {
  const { error } = payload
  state.loading = false
  //state.error = error

  const incompleteBooking = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    InitSnapshotAPIErrorAdvice.INCOMPLETE_BOOKING,
  )

  const missingBillingAddress = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    [InitSnapshotAPIErrorAdvice.PAYMENT_MISSING_BILLING_ADDRESS, InitSnapshotAPIErrorAdvice.PAYMENT_INVALID_TITLE],
  )

  const missingCustomerDetails = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    InitSnapshotAPIErrorAdvice.PAYMENT_MISSING_CUSTOMER_DETAILS,
  )

  if (missingBillingAddress) {
    state.missingBillingAddress = true
    state.customerId = missingBillingAddress.customerId ?? null
  }

  const stockHoldFailedAllocation = getAdviceFromErrorDetails<GetSnapshotAPIErrorAdvice | InitSnapshotAPIErrorAdvice>(
    error,
    InitSnapshotAPIErrorAdvice.STOCK_HOLD_FAILED_ALLOCATION,
  )

  if (stockHoldFailedAllocation) {
    state.stockHoldStatus = StockHoldStatus.FAILED
  }

  if (missingCustomerDetails) {
    state.missingCustomerDetails = true
    state.customerId = missingCustomerDetails.customerId ?? null
  }

  if (incompleteBooking) {
    state.incompleteBooking = true
  }
} */

/**
 * Saves the ID into state when fetching the snapshot.
 *
 * TODO come up with a better way than duplicating this for GET_STOCK_HOLD_INFO
 * and GET_COLLECTION_SNAPSHOT. Ideally it should all go through a single action.
 */
/* const setGetting = (state: MetaState, { payload }: { payload: GetCollectionSnapshotActionPayload }) => {
  state.loading = true
  state.error = false
  state.id = payload.id
} */

/**
 * For delivery orders, the API can send us either HD or DELIVERY. From a user
 * point of view there's no difference, so we just convert HD to DELIVERY.
 */
//const cleanFulfilmentType = (type: FulfilmentType) => (type === FulfilmentType.HD ? FulfilmentType.DELIVERY : type)

var metaReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, function (builder) {
  return builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_1__["INIT_USER_INFO_PAGE"], function () {});
});
/* harmony default export */ __webpack_exports__["default"] = (metaReducer);

/***/ }),

/***/ "./src/reducers/wallet/walletReducer.ts":
/*!**********************************************!*\
  !*** ./src/reducers/wallet/walletReducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.ts");


var initialState = {
  savedPaymentMethods: [],
  error: false,
  status: 'IDLE',
  datacashMigrationAlert: undefined
};
var walletReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, function (builder) {
  return builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_WALLET_SUCCESS"], function (state, _ref) {
    var payload = _ref.payload;
    state.error = false;
    state.status = 'Status.resolved';
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_WALLET_FAILURE"], function (state) {
    state.status = 'Status.rejected';
    state.error = true;
  });
});
/* harmony default export */ __webpack_exports__["default"] = (walletReducer);

/***/ }),

/***/ "./src/sagas/index.ts":
/*!****************************!*\
  !*** ./src/sagas/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return root; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta_metaSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta/metaSaga */ "./src/sagas/meta/metaSaga.ts");

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(root);



// We only want to watch the 'watcher' sagas
function root() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function root$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_meta_metaSaga__WEBPACK_IMPORTED_MODULE_2__["watchInitUserInfoPageSaga"])]);
      case 2:
      case "end":
        return _context.stop();
    }
  }, _marked);
}

/***/ }),

/***/ "./src/sagas/meta/metaSaga.ts":
/*!************************************!*\
  !*** ./src/sagas/meta/metaSaga.ts ***!
  \************************************/
/*! exports provided: initUserInfoPageSaga, watchInitUserInfoPageSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUserInfoPageSaga", function() { return initUserInfoPageSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchInitUserInfoPageSaga", function() { return watchInitUserInfoPageSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.ts");
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Logger */ "./src/utils/Logger.ts");
/* harmony import */ var _wallet_walletSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wallet/walletSaga */ "./src/sagas/wallet/walletSaga.ts");

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(initUserInfoPageSaga),
  _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchInitUserInfoPageSaga);




function initUserInfoPageSaga(action) {
  var cookie, _ref, message, status;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initUserInfoPageSaga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        cookie = action.payload.cookie; //other essential action on load page those call are based on cookie authorization
        console.log('get w wallet saga called !!! with cookie', cookie);
        _context.next = 5;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_wallet_walletSaga__WEBPACK_IMPORTED_MODULE_4__["getWalletSaga"], cookie);
      case 5:
        _context.next = 11;
        break;
      case 7:
        _context.prev = 7;
        _context.t0 = _context["catch"](0);
        _ref = _context.t0 || {}, message = _ref.message, status = _ref.status;
        _utils_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].error({
          name: 'initUserInfoPageSaga',
          msg: 'Error preparing for checkout',
          detail: message,
          status: status
          //body,
        });

        //yield put(PREPARE_FOR_CHECKOUT_FAILURE({ error }));
      case 11:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 7]]);
}
function watchInitUserInfoPageSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchInitUserInfoPageSaga$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["INIT_USER_INFO_PAGE"], initUserInfoPageSaga);
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
}

/***/ }),

/***/ "./src/sagas/wallet/walletSaga.ts":
/*!****************************************!*\
  !*** ./src/sagas/wallet/walletSaga.ts ***!
  \****************************************/
/*! exports provided: getWalletSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletSaga", function() { return getWalletSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Logger */ "./src/utils/Logger.ts");

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getWalletSaga);




function getWalletSaga(cookie) {
  var response, wallet, message, status, _error$body, body;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getWalletSaga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["default"].getWallet, '43535', cookie);
      case 3:
        response = _context.sent;
        _context.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["checkResponse"], response);
      case 6:
        wallet = _context.sent;
        console.log('wallet', wallet);
        _context.next = 10;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_WALLET_SUCCESS"])(wallet));
      case 10:
        _context.next = 18;
        break;
      case 12:
        _context.prev = 12;
        _context.t0 = _context["catch"](0);
        message = _context.t0.message, status = _context.t0.status, _error$body = _context.t0.body, body = _error$body === void 0 ? {} : _error$body;
        _utils_Logger__WEBPACK_IMPORTED_MODULE_4__["default"].error({
          name: 'getWalletSaga',
          msg: 'Error getting wallet',
          detail: message,
          status: status,
          body: body
        });
        _context.next = 18;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_WALLET_FAILURE"])());
      case 18:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 12]]);
}

/***/ }),

/***/ "./src/server/middleware/proxy.js":
/*!****************************************!*\
  !*** ./src/server/middleware/proxy.js ***!
  \****************************************/
/*! exports provided: receiptServiceProxy, checkoutServiceProxy, marketingPreferenceServiceProxy, accountServiceProxy, wcsProxy, tealiumProxy, stubDashboardProxy, stubEndpointProxy, stubProxy, productGatewayProxy, sessionManagerProxy, wishlistMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiptServiceProxy", function() { return receiptServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutServiceProxy", function() { return checkoutServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketingPreferenceServiceProxy", function() { return marketingPreferenceServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountServiceProxy", function() { return accountServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wcsProxy", function() { return wcsProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tealiumProxy", function() { return tealiumProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stubDashboardProxy", function() { return stubDashboardProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stubEndpointProxy", function() { return stubEndpointProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stubProxy", function() { return stubProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productGatewayProxy", function() { return productGatewayProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionManagerProxy", function() { return sessionManagerProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistMock", function() { return wishlistMock; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/envconfig/envConfig */ "./config/envconfig/envConfig.ts");



var isStub = _config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('NODE_ENV') === 'stub' || _config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('ENV_CONFIG') === 'remoteStub';
var receiptServiceProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('RECEIPT_API'), {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path;
  }
});
var checkoutServiceProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('GATEWAY_API'), {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "/checkout-api-v2".concat(url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path);
  }
});
var marketingPreferenceServiceProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('MARKETING_PREFERENCE_API'), {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "/cpm/consents".concat(url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path);
  }
});
var accountServiceProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('ACCOUNT_API'), {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "/account-api".concat(url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path);
  }
});
var wcsProxy = function wcsProxy(req, res, next) {
  if (url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).pathname === '/DoLookupAddress' || url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).pathname === '/TrolleyYourDetails') {
    return next();
  }
  return express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('WCS_API'), {
    proxyReqPathResolver: function proxyReqPathResolver(proxyReq) {
      return "/webapp/wcs/stores/servlet".concat(url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(proxyReq.url).path);
    }
  })(req, res, next);
};
var tealiumProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('https://tags.tiqcdn.com', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "/utag/argos/".concat(getTealiumBrand(req.brand), "/").concat(getTealiumEnv(), "/").concat(url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path);
  }
});
var stubDashboardProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('GATEWAY_API'), {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    console.log('PROXY ==> req.url', req.url);
    return url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path;
  }
});
var stubEndpointProxy = express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('GATEWAY_API'), {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "/payment-stub".concat(url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.url).path);
  }
});
var stubProxy = function stubProxy(req, res, next) {
  return express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('GATEWAY_API'), {
    proxyReqPathResolver: function proxyReqPathResolver(proxyReq) {
      var path = proxyReq.originalUrl.split('/proxy')[1];
      return "".concat(path);
    }
  })(req, res, next);
};
var productGatewayProxy = function productGatewayProxy(req, res, next) {
  if (isStub) {
    return stubProxy(req, res, next);
  }
  if (!req.vault.pdp.url || !req.vault.pdp.key) {
    res.status(500).send('Missing config. Please check the Vault config is working.');
    return null;
  }
  var _URL = new URL(req.vault.pdp.url),
    origin = _URL.origin,
    pathname = _URL.pathname;

  // Proxy to product-api
  return express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(origin, {
    proxyReqOptDecorator: function proxyReqOptDecorator(proxyReqOpts) {
      proxyReqOpts.headers.accept = 'application/vnd.argos-product.v1.5+json';
      proxyReqOpts.headers['x-api-key'] = req.vault.pdp.key;
      if (_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('ENV_CONFIG') !== 'remoteStub') delete proxyReqOpts.headers.cookie;
      return proxyReqOpts;
    },
    proxyReqPathResolver: function proxyReqPathResolver(proxyReq) {
      var productsPath = proxyReq.originalUrl.split('/product-gateway')[1];
      return "".concat(pathname).concat(productsPath);
    }
  })(req, res, next);
};
var sessionManagerProxy = function sessionManagerProxy(req, res, next) {
  if (isStub) {
    return stubProxy(req, res, next);
  }

  // Proxy to Session Manager
  return express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_2__["nconf"].get('SESSION_MANAGER_API'), {
    proxyReqPathResolver: function proxyReqPathResolver(proxyReq) {
      return proxyReq.originalUrl.split('/session-manager')[1];
    }
  })(req, res, next);
};
var wishlistMock = function wishlistMock(req, res) {
  res.json({
    data: {
      wishlists: [{
        items: [{
          partNumber: '8087159'
        }, {
          partNumber: '8559199'
        }, {
          partNumber: '8268497'
        }]
      }]
    }
  });
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/App */ "./src/shared/components/App.jsx");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");
/* harmony import */ var _serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../serverRenderingHelpers */ "./src/server/serverRenderingHelpers.tsx");













var ssrMiddleware = function ssrMiddleware(req, res, next) {
  node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.color("yellow").bold().log("requested req.url", req.url);
  //this goes through all routes in application;
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_10__["default"].find(function (route, i) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["matchPath"])(req.url, route);
  }) || {};
  node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.color("yellow").bold().log("activeRoute", activeRoute);
  console.log('fine');
  /******** Redux server setup ******/

  // set initial store to be passed to client in window._data
  var initialState = {
    meta: {}
  };

  //U can not use BrowserRouter cause the routes are processed on server not a client
  var memoryHistory = Object(history__WEBPACK_IMPORTED_MODULE_7__["createMemoryHistory"])({
    initialEntries: [req.url]
  });
  // const store = configureStore(memoryHistory, initialState);

  /****/

  // Waits for asynchronous actions like API calls
  // before rendering the HTML
  // undefined is a way of not setting a value for the first param in this case
  // processRoutes(routesProcessing = routes,store, req) = undefined will cause routesProcessing = routes so will take default of the function
  var waitForAsyncActions = [Object(_shared_routes__WEBPACK_IMPORTED_MODULE_10__["processRoutes"])(undefined, memoryHistory, initialState, req, res)];
  console.log('waitForAsyncActions');
  Promise.all(waitForAsyncActions)
  // Promise all resolve all promises result in array so [store]
  .then(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),
      store = _ref2[0];
    // Create a context for <StaticRouter>, which will allow us to
    // query for the results of the render.
    var context = {
      status: 200
    };

    // console.log('store', store.getState())

    // As we are code splitting, we need to find out which chunks
    // the SSR uses so the client can use them. <Loadable.Capture>
    // takes a report prop which is called whenever a chunk is used.
    var modules = [];
    node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.color('yellow').bold().log('requested req.url in promise response', req.url);

    // Render the part of the app that gets hydrated on the client
    var appHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_6___default.a.Capture, {
      report: function report(moduleName) {
        return modules.push(moduleName);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: store
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
      location: req.url,
      context: context
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_App__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
    var BodyContentAndScripts = function BodyContentAndScripts(_ref3) {
      var client = _ref3.client,
        modulesChunks = _ref3.modulesChunks;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: client
        }
      }), Object(_serverRenderingHelpers__WEBPACK_IMPORTED_MODULE_11__["getJsFiles"])(modulesChunks));
    };
    var serverHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BodyContentAndScripts, {
      client: appHtml,
      modulesChunks: modules
    }));
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default()({}), "</script>\n          <link rel=\"stylesheet\" type=\"text/css\" href=\"./style.css\" />\n\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
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
/* harmony import */ var _config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/envconfig/envConfig */ "./config/envconfig/envConfig.ts");
/* harmony import */ var _middleware_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/ssr */ "./src/server/middleware/ssr.js");
/* harmony import */ var _middleware_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/proxy */ "./src/server/middleware/proxy.js");
/**
 * THIS IS : YOUR APP NODE.js SERVER
 *
 **/





// Must be imported first so that env variables are correctly set
 // eslint-disable-line import/order


var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

// ---- proxies -----

app.use('/account-api', _middleware_proxy__WEBPACK_IMPORTED_MODULE_5__["accountServiceProxy"]);

// Dashboard stubs
var envConfig = _config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_3__["nconf"].get('ENV_CONFIG') || _config_envconfig_envConfig__WEBPACK_IMPORTED_MODULE_3__["nconf"].get('NODE_ENV');
if (envConfig === 'stub' || envConfig === 'remoteStub') {
  //access index page of stubs 3011 on 3100/dashboard
  app.use('/dashboard', _middleware_proxy__WEBPACK_IMPORTED_MODULE_5__["stubDashboardProxy"]);

  //access /payment-stub/ page of stubs 3011 on 3100/payment-stub 
  //payment-stub is used to modify dashboard ,
  app.use('/payment-stub', _middleware_proxy__WEBPACK_IMPORTED_MODULE_5__["stubEndpointProxy"]);
}

// ---- end of proxies -----

//-- static assets on back-end server
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('../static'));

// Renders the app
app.use(_middleware_ssr__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
        fontWeight: 'bold'
      },
      to: "/popular/".concat(param)
    }, name));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      fontWeight: 'bold'
    },
    to: "/guest"
  }, 'chunk loaded GuestCheckoutContainer')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      fontWeight: 'bold'
    },
    to: "/userInfo"
  }, 'user protected route UserSecretInfoContainer')));
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

/***/ "./src/shared/containers/GetSnapshotRedirects/GetSnapshotRedirects.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/containers/GetSnapshotRedirects/GetSnapshotRedirects.tsx ***!
  \*****************************************************************************/
/*! exports provided: GetSnapshotRedirects, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSnapshotRedirects", function() { return GetSnapshotRedirects; });
var GetSnapshotRedirects = function GetSnapshotRedirects(_ref) {
  var children = _ref.children;
  // const { error } = useSelector(getMeta)
  // const location = useLocation()
  /* 
    if (error) {
      if (typeof error === 'object' && !(error instanceof Error) && error.status === '400') {//StatusCode.UNAUTHORIZED) {
        return (
          <Redirect
            to={`/login?pageName=mandatoryPrepay&successUrl=${encodeURIComponent(
              `${location.pathname}${location.search}`,
            )}`}
          />
        )
      }
  
      //return <Redirect to={errorPath} />
    } */
  return children;
};
/* harmony default export */ __webpack_exports__["default"] = (GetSnapshotRedirects);

/***/ }),

/***/ "./src/shared/containers/UserSecretInfoContainer/UserSecretInfoContainer.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/containers/UserSecretInfoContainer/UserSecretInfoContainer.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GetSnapshotRedirects_GetSnapshotRedirects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GetSnapshotRedirects/GetSnapshotRedirects */ "./src/shared/containers/GetSnapshotRedirects/GetSnapshotRedirects.tsx");
/* harmony import */ var _pages_UserSecretInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/UserSecretInfo */ "./src/shared/pages/UserSecretInfo.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.ts");




var UserSecretInfoContainer = function UserSecretInfoContainer(props) {
  console.log('------props in UserSecretInfoContainer--------', props);

  /*
      //validation to show children below with redirect and early return
       this should happen on server-site, but the `req` object CAN NOT be directly access in client
      because they are seperate. Therefore data has to be places in redux store and then read in client 
      for example by redux selectors
    */

  /* const { error } = useSelector(getMeta);
   if (error) {
    if (typeof error === 'object' && !(error instanceof Error) && error.status === StatusCode.UNAUTHORIZED) {
      return (
        <Redirect
          to={`/login?pageName=mandatoryPrepay&successUrl=${encodeURIComponent(
            `${location.pathname}${location.search}`,
          )}`}
        />
      )
    }
     return <Redirect to={errorPath} />
  } */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GetSnapshotRedirects_GetSnapshotRedirects__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_UserSecretInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

//--------------------- TS setup for quick reference

// --------------------- //

// getInitialActions is called on server-site
// the redux saga is called on server-site from here
UserSecretInfoContainer.getInitialActions = function (_ref) {
  var req = _ref.req,
    match = _ref.match;
  var id = match.params.id;
  var cookie = req.get('cookie') || '';
  console.log('---------------COOKIE----------');
  return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["INIT_USER_INFO_PAGE"])({
    cookie: cookie
  });
};
/* harmony default export */ __webpack_exports__["default"] = (UserSecretInfoContainer);

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

/***/ "./src/shared/pages/UserSecretInfo.jsx":
/*!*********************************************!*\
  !*** ./src/shared/pages/UserSecretInfo.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UserSecretInfo = function UserSecretInfo(props) {
  console.log('props......', props);

  /*
      This page will have parent container that will authoriztioin before it is even available 
      since it will contain sensitive user info
    */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, 'secret info is here');
};
/* harmony default export */ __webpack_exports__["default"] = (UserSecretInfo);

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
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ "./src/shared/components/Home.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Grid */ "./src/shared/components/Grid.jsx");
/* harmony import */ var _components_ParamsQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ParamsQuery */ "./src/shared/components/ParamsQuery.tsx");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Login */ "./src/shared/components/Login.tsx");
/* harmony import */ var _containers_UserSecretInfoContainer_UserSecretInfoContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/UserSecretInfoContainer/UserSecretInfoContainer */ "./src/shared/containers/UserSecretInfoContainer/UserSecretInfoContainer.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./src/shared/api.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "./src/shared/containers/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sagas */ "./src/sagas/index.ts");









//redux and sagas


var routes = [{
  path: '/',
  exact: true,
  component: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/query',
  exact: true,
  component: _components_ParamsQuery__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/userInfo',
  exact: true,
  component: _containers_UserSecretInfoContainer_UserSecretInfoContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: '/login',
  exact: true,
  component: _components_Login__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: "/guest",
  pageTitle: 'Guest Checkout',
  pageDescription: '',
  pageDataTest: 'guest-checkout-page',
  component: _containers__WEBPACK_IMPORTED_MODULE_7__["GuestCheckoutContainer"],
  routes: [],
  analytics: {}
}, {
  path: '/popular/:id',
  component: _components_Grid__WEBPACK_IMPORTED_MODULE_2__["default"],
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchPopularRepos"])(path.split('/').pop());
  }
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
    var store = Object(_store__WEBPACK_IMPORTED_MODULE_8__["default"])(history, state);

    // Start the root saga tasks which is a promise
    var tasks = store.runSaga(_sagas__WEBPACK_IMPORTED_MODULE_9__["default"]);

    //return new Promise((resolve, reject) => {
    // Will contain routes that will be processed in the next recursion
    var next = [];

    // Map through the routes and find any that match the current path

    routesProcessing.map(function (route) {
      var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(req.url, route);
      if (match) console.log('--------MATCH------', route.component);
      if (match) {
        var _route$component;
        var reduxAction;

        // If the route has sub-routes, queue them for the next recursion
        // if (route.routes) next.push(...route.routes);

        // Check if the component is a lazy-loaded Loadable wrapper
        if ((_route$component = route.component) !== null && _route$component !== void 0 && (_route$component = _route$component.contextTypes) !== null && _route$component !== void 0 && _route$component.loadable) {
          var _LoadableContainer;
          var LoadableContainer = route.component;
          var component = (_LoadableContainer = new LoadableContainer()) === null || _LoadableContainer === void 0 || (_LoadableContainer = _LoadableContainer.state) === null || _LoadableContainer === void 0 || (_LoadableContainer = _LoadableContainer.loaded) === null || _LoadableContainer === void 0 ? void 0 : _LoadableContainer["default"];
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

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




function createStore(history, initialState) {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  var isDev = "development" === 'development';
  var isProduction = "development" === 'production';
  /* eslint-enable */

  var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  var reduxRouterMiddleware = Object(connected_react_router__WEBPACK_IMPORTED_MODULE_3__["routerMiddleware"])(history);
  var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
    reducer: Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(history),
    preloadedState: initialState,
    devTools: !isProduction,
    middleware: [sagaMiddleware, reduxRouterMiddleware]
  });
  if (isDev && module.hot) {
    module.hot.accept('../reducers', function () {
      /* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
      var createNewRootReducer = __webpack_require__(/*! ../reducers */ "./src/reducers/index.ts")["default"]; // eslint-disable-line global-require
      store.replaceReducer(createNewRootReducer(history));
      /* eslint-enable */
    });
  }

  // Used for calling sagas during server-side rendering
  var runSaga = sagaMiddleware.run; // eslint-disable-line @typescript-eslint/unbound-method
  var close = function close() {
    return store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  };
  return _objectSpread(_objectSpread({}, store), {}, {
    runSaga: runSaga,
    close: close
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/Logger.ts":
/*!*****************************!*\
  !*** ./src/utils/Logger.ts ***!
  \*****************************/
/*! exports provided: LogLevel, getLevel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevel", function() { return getLevel; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var LogLevel = /*#__PURE__*/function (LogLevel) {
  LogLevel[LogLevel["TRACE"] = 10] = "TRACE";
  LogLevel[LogLevel["DEBUG"] = 20] = "DEBUG";
  LogLevel[LogLevel["INFO"] = 30] = "INFO";
  LogLevel[LogLevel["WARN"] = 40] = "WARN";
  LogLevel[LogLevel["ERROR"] = 50] = "ERROR";
  LogLevel[LogLevel["FATAL"] = 60] = "FATAL";
  return LogLevel;
}({});
var getLevel = function getLevel() {
  if (typeof window !== 'undefined' && window.LOG_LEVEL) {
    return window.LOG_LEVEL;
  }
  return Number(process.env.LOG_LEVEL) || LogLevel.INFO;
};

/**
 * Converts a log message into Kibana-friendly output.
 *
 * It's best to log out JSON objects, as Kibana will parse and index the JSON
 * so that we can run queries and filters against individual fields in the log.
 */
var log = function log(obj, level) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object' && obj !== null) {
    if (obj !== null && obj !== void 0 && obj.level) console.warn('`level` is a forbidden log property');
    if (obj !== null && obj !== void 0 && obj.message) console.warn('`message` is a forbidden log property');
  }

  // eslint-disable-next-line prefer-object-spread
  var output = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object' ? Object.assign({}, obj, {
    level: level
  }) : {
    msg: obj,
    level: level
  };
  var type = level >= LogLevel.ERROR ? 'error' : level === LogLevel.WARN ? 'warn' : 'log';
  console[type](JSON.stringify(output));
};
var Logger = {
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "TRACE". */
  trace: function trace(obj) {
    if (getLevel() <= LogLevel.TRACE) log(obj, LogLevel.TRACE);
  },
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "DEBUG". */
  debug: function debug(obj) {
    if (getLevel() <= LogLevel.DEBUG) log(obj, LogLevel.DEBUG);
  },
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "INFO". */
  info: function info(obj) {
    if (getLevel() <= LogLevel.INFO) log(obj, LogLevel.INFO);
  },
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "WARN". */
  warn: function warn(obj) {
    if (getLevel() <= LogLevel.WARN) log(obj, LogLevel.WARN);
  },
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "ERROR". */
  error: function error(obj) {
    if (getLevel() <= LogLevel.ERROR) log(obj, LogLevel.ERROR);
  },
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "FATAL". */
  fatal: function fatal(obj) {
    if (getLevel() <= LogLevel.FATAL) log(obj, LogLevel.FATAL);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logger);

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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@sainsburys-tech/boltui-utils":
/*!************************************************!*\
  !*** external "@sainsburys-tech/boltui-utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sainsburys-tech/boltui-utils");

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

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

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

/***/ "nconf":
/*!************************!*\
  !*** external "nconf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nconf");

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

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2VudmNvbmZpZy9lbnZDb25maWcudHMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9tZXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy93YWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9hcGlVcmxIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlcXVlc3RIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbWV0YS9tZXRhUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvd2FsbGV0L3dhbGxldFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9tZXRhL21ldGFTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy93YWxsZXQvd2FsbGV0U2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21pZGRsZXdhcmUvcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTm9NYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1BhcmFtc1F1ZXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkU3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL0dldFNuYXBzaG90UmVkaXJlY3RzL0dldFNuYXBzaG90UmVkaXJlY3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvVXNlclNlY3JldEluZm9Db250YWluZXIvVXNlclNlY3JldEluZm9Db250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlbHBlck1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9wYWdlcy9Vc2VyU2VjcmV0SW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FpbnNidXJ5cy10ZWNoL2JvbHR1aS11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuY29uZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN1cGVyYWdlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJuY29uZiIsImFyZ3YiLCJlbnYiLCJkZWZhdWx0cyIsIk5PREVfRU5WIiwiRElTQUJMRV9BVVRPTUFUSUNfUkVTVU1FIiwiY29uZmlnIiwiZ2V0IiwiZmlsZSIsImNvbmNhdCIsImRvdGVudiIsInBhdGgiLCJzZXQiLCJwcm9jZXNzIiwiQUREUkVTU19GSU5ERVJfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIm1zZyIsImVudmNvbmZpZyIsIkVOVl9DT05GSUciLCJHQVRFV0FZX0FQSSIsIkFDQ09VTlRfQVBJIiwiV0NTX0FQSSIsIlNFU1NJT05fTUFOQUdFUl9BUEkiLCJNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEkiLCJSRUNFSVBUX0FQSSIsIkNPTlNVTF9FTlYiLCJCT1NVTl9DT05GSUdfTUFQIiwiVkFVTFRfRU5WIiwiQk9TVU5fRU5WIiwiTU9EQUxfT1BFTiIsImNyZWF0ZUFjdGlvbiIsIk1PREFMX0NMT1NFIiwiU0VUX09SREVSX1NVTU1BUllfVkFSSUFOVCIsIlNFVF9CUkFORCIsIlNFVF9USEVNRSIsIlRPR0dMRV9QUkVWSUVXX1BMQUNFX09SREVSIiwiU0VUX0ZFQVRVUkVfVE9HR0xFIiwiU0VUX0ZFQVRVUkVTIiwiU0VUX0NPTkZJRyIsIlNFVF9DSEFOTkVMX1RPR0dMRSIsIlRSQUNLX0FEX0NPTlRJTlVFX0VSUk9SIiwiSU5JVF9VU0VSX0lORk9fUEFHRSIsIkdFVF9XQUxMRVRfRkFJTFVSRSIsIlJPVVRFUl9MT0NBVElPTl9DSEFOR0UiLCJMT0NBVElPTl9DSEFOR0UiLCJHRVRfV0FMTEVUX1NVQ0NFU1MiLCJpc1Byb2R1Y3Rpb24iLCJhcGlGYWN0b3J5IiwiZ2V0V2FsbGV0IiwidXNlcklkIiwiY29va2llIiwicmVxdWVzdCIsImVuZHBvaW50cyIsIkNvb2tpZSIsImNyZWF0ZUFub255bW91c1Nlc3Npb24iLCJvcHRpb25zIiwicG9zdCIsImNoZWNrUmVzcG9uc2UiLCJyZXNwb25zZSIsInNob3VsZFJlZGlyZWN0VG9Mb2dpbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzIiwiTG9nZ2VyIiwiZmF0YWwiLCJTdGF0dXNDb2RlIiwiTk9UX0ZPVU5EIiwiZXJyb3IiLCJtZXRob2QiLCJ1cmwiLCJ0ZXh0IiwiVU5BVVRIT1JJWkVEIiwiY2FuVXNlRG9tIiwic3VjY2Vzc1VybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJocmVmIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiQkFEX1JFUVVFU1QiLCJvayIsImJvZHkiLCJkZWJ1ZyIsImFjY291bnQiLCJhY2NvdW50QXBpRW5kcG9pbnQiLCJzZXNzaW9uIiwic2Vzc2lvbk1hbmFnZXJFbmRwb2ludCIsImFwaSIsImhvc3QiLCJIT1NUIiwicG9ydCIsInByZXBheUFwaSIsImFjY291bnRBcGkiLCJtYXJrZXRpbmdBUEkiLCJwcm9kdWN0QXBpIiwic2Vzc2lvbk1hbmFnZXJBcGkiLCJnZXRVc2VySW5mb0FwaSIsInZhdFJlY2VpcHRBcGkiLCJHaWZ0Q2FyZFR5cGVzIiwicHJlcGF5QXBpU2VydmVyIiwiYWNjb3VudEFwaVNlcnZlciIsInByb2R1Y3RBcGlTZXJ2ZXIiLCJnZXRWYXRSZWNlaXB0U2VydmVyIiwibWFya2V0aW5nQXBpU2VydmVyIiwic2Vzc2lvbk1hbmFnZXJTZXJ2ZXIiLCJnZXRVc2VySW5mb0FwaVNlcnZlciIsInByZXBheUFwaUJhc2VVcmwiLCJvcmRlckFwaUJhc2VVcmwiLCJhY2NvdW50QXBpQmFzZVVybCIsInByb2R1Y3RBcGlCYXNlVXJsIiwibWFya2V0aW5nQXBpQmFzZVVybCIsInNlc3Npb25NYW5hZ2VyQmFzZVVybCIsImdldFVzZXJJbmZvQXBpQmFzZVVybCIsImdldFZhdFJlY2VpcHRBcGlCYXNlVXJsIiwiYXBwIiwicm9vdEZvbnRTaXplIiwidGltaW5ncyIsImZhZGVJbk91dCIsInNuYXBzaG90TG9ja0RlbGF5IiwicGxhY2VPcmRlclNob3dFcnJvckRlbGF5IiwicGF5bWVudE1ldGhvZFJvdXRlcyIsImNyZWRpdERlYml0Q2FyZCIsInBheXBhbCIsImFwcGxlUGF5IiwiYXJnb3NDYXJkQ3JlZGl0UGxhbiIsInN0YXR1c2VzIiwiaW5pdGlhbGlzYXRpb25JblByb2dyZXNzIiwicGF5bWVudE1ldGhvZHNPcmRlciIsIm5lY3RhciIsIkNBUkRfTkVDVEFSIiwiYmluTnVtYmVyIiwiY2FyZE51bWJlckxlbmd0aCIsImdpZnRDYXJkVHlwZXMiLCJHRU5FUklDIiwiQ0FSRF9HSUZUX0FSR09TIiwiYmluUmFuZ2UiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJwaW5OdW1iZXJMZW5ndGgiLCJpbWFnZSIsIk5FV19HSUZUX0NBUkRfQVJHT1MiLCJDQVJEX0dJRlRfRkxFWEVDQVNIIiwic2VjdXJpdHlDb2RlTGVuZ3RoIiwibWF4aW11bU51bWJlck9mR2lmdENhcmRzIiwicGxhY2VPcmRlckFuaW1hdGlvbiIsInNlYXNvbnMiLCJ4bWFzIiwiZGVmYXVsdFR1IiwieG1hc1R1IiwiZGVmYXVsdEhhYml0YXQiLCJ4bWFzSGFiaXRhdCIsImhhbGxvd2VlbiIsInByaWRlIiwicHJpZGVUdSIsInByaWRlSGFiaXRhdCIsImJsYWNrSGlzdG9yeU1vbnRoIiwiYmxhY2tIaXN0b3J5TW9udGhIYWJpdGF0IiwiYmxhY2tIaXN0b3J5TW9udGhUdSIsImluaXRpYWxEZWxheU1zIiwiY29sb3JzIiwidmFyaWFudHMiLCJiZ01hc2siLCJib3giLCJsaWQiLCJhbmltRHVyYXRpb25NcyIsInByb2R1Y3RzIiwidG90YWwiLCJhbmltWUF4aXNNb3ZlRGlzdGFuY2VQeCIsImFuaW1UaW1pbmdGdW5jdGlvbiIsImludGVydmFsRHVyYXRpb25NcyIsInByZXBheUFwaUVuZHBvaW50IiwiZW5kcG9pbnQiLCJvcmRlckFwaUVuZHBvaW50IiwicHJvZHVjdEFwaUVuZHBvaW50IiwiZ2V0VXNlckluZm9BcGlFbmRwb2ludCIsImdldFZhdFJlY2VpcHRFbmRwb2ludCIsIm1hcmtldGluZ1ByZWZlcmVuY2VzQXBpRW5kcG9pbnQiLCJjYXRjaEVycm9yIiwicmVzIiwicmVxIiwidHlwZSIsImRhdGEiLCJwYXRjaCIsInB1dCIsIl9kZWxldGUiLCJjcmVhdGVSb290UmVkdWNlciIsImhpc3RvcnkiLCJjb21iaW5lUmVkdWNlcnMiLCJtZXRhIiwicm91dGVyIiwiY29ubmVjdFJvdXRlciIsIndhbGxldCIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJpZCIsImN1c3RvbWVySWQiLCJtaXNzaW5nQmlsbGluZ0FkZHJlc3MiLCJpbmNvbXBsZXRlQm9va2luZyIsIm1pc3NpbmdDdXN0b21lckRldGFpbHMiLCJzdG9ja0hvbGRTdGF0dXMiLCJoYXNTdG9ja0hvbGRFcnJvciIsInNuYXBzaG90U3RhdHVzIiwib3JkZXJJZCIsInByZXZpb3VzTG9jYXRpb24iLCJicmFuZCIsImZ1bGZpbG1lbnRUeXBlIiwidG9nZ2xlTW9kYWxEaXNhYmxlRXNjQ2xvc2UiLCJtb2RhbFJlbW92ZVNjcm9sbCIsInNlcnZlclNpZGVDb29raWVzIiwibWlzc2luZ0Jvb2tpbmdJRCIsImlzV2NzSGFuZG92ZXIiLCJmdWxmaWxtZW50Q3JlYXRlZCIsInJlZGlyZWN0VG9BcnJhbmdlRGVsaXZlcnkiLCJmYXRhbEZ1bGZpbG1lbnRFcnJvciIsInJlZGlyZWN0VG9QYXltZW50IiwiZmF0YWxCb29raW5nRXJyb3IiLCJtZXRhUmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNhdmVkUGF5bWVudE1ldGhvZHMiLCJkYXRhY2FzaE1pZ3JhdGlvbkFsZXJ0Iiwid2FsbGV0UmVkdWNlciIsInN0YXRlIiwiX3JlZiIsInBheWxvYWQiLCJyb290IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJyb290JCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhbGwiLCJmb3JrIiwid2F0Y2hJbml0VXNlckluZm9QYWdlU2FnYSIsInN0b3AiLCJfbWFya2VkIiwiaW5pdFVzZXJJbmZvUGFnZVNhZ2EiLCJfbWFya2VkMiIsIm1hcmsiLCJhY3Rpb24iLCJtZXNzYWdlIiwiaW5pdFVzZXJJbmZvUGFnZVNhZ2EkIiwiZ2V0V2FsbGV0U2FnYSIsInQwIiwiZGV0YWlsIiwid2F0Y2hJbml0VXNlckluZm9QYWdlU2FnYSQiLCJfY29udGV4dDIiLCJ0YWtlTGF0ZXN0IiwiX2Vycm9yJGJvZHkiLCJnZXRXYWxsZXRTYWdhJCIsImNhbGwiLCJzZW50IiwiaXNTdHViIiwicmVjZWlwdFNlcnZpY2VQcm94eSIsInByb3h5IiwicHJveHlSZXFQYXRoUmVzb2x2ZXIiLCJwYXJzZSIsImNoZWNrb3V0U2VydmljZVByb3h5IiwibWFya2V0aW5nUHJlZmVyZW5jZVNlcnZpY2VQcm94eSIsImFjY291bnRTZXJ2aWNlUHJveHkiLCJ3Y3NQcm94eSIsInByb3h5UmVxIiwidGVhbGl1bVByb3h5IiwiZ2V0VGVhbGl1bUJyYW5kIiwiZ2V0VGVhbGl1bUVudiIsInN0dWJEYXNoYm9hcmRQcm94eSIsInN0dWJFbmRwb2ludFByb3h5Iiwic3R1YlByb3h5Iiwib3JpZ2luYWxVcmwiLCJzcGxpdCIsInByb2R1Y3RHYXRld2F5UHJveHkiLCJ2YXVsdCIsInBkcCIsImtleSIsInNlbmQiLCJfVVJMIiwiVVJMIiwib3JpZ2luIiwicHJveHlSZXFPcHREZWNvcmF0b3IiLCJwcm94eVJlcU9wdHMiLCJoZWFkZXJzIiwiYWNjZXB0IiwicHJvZHVjdHNQYXRoIiwic2Vzc2lvbk1hbmFnZXJQcm94eSIsIndpc2hsaXN0TW9jayIsImpzb24iLCJ3aXNobGlzdHMiLCJpdGVtcyIsInBhcnROdW1iZXIiLCJzc3JNaWRkbGV3YXJlIiwibG9nZ2VyIiwiY29sb3IiLCJib2xkIiwiYWN0aXZlUm91dGUiLCJyb3V0ZXMiLCJmaW5kIiwicm91dGUiLCJpIiwibWF0Y2hQYXRoIiwibWVtb3J5SGlzdG9yeSIsImNyZWF0ZU1lbW9yeUhpc3RvcnkiLCJpbml0aWFsRW50cmllcyIsIndhaXRGb3JBc3luY0FjdGlvbnMiLCJwcm9jZXNzUm91dGVzIiwidGhlbiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdG9yZSIsImNvbnRleHQiLCJtb2R1bGVzIiwiYXBwSHRtbCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJMb2FkYWJsZSIsIkNhcHR1cmUiLCJyZXBvcnQiLCJtb2R1bGVOYW1lIiwicHVzaCIsIlJlZHV4UHJvdmlkZXIiLCJTdGF0aWNSb3V0ZXIiLCJBcHAiLCJCb2R5Q29udGVudEFuZFNjcmlwdHMiLCJfcmVmMyIsImNsaWVudCIsIm1vZHVsZXNDaHVua3MiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldEpzRmlsZXMiLCJzZXJ2ZXJIdG1sIiwic2VyaWFsaXplIiwiZXhwcmVzcyIsInVzZSIsImVudkNvbmZpZyIsIlBPUlQiLCJwcmVsb2FkQWxsIiwibGlzdGVuIiwiaW5mbyIsImZpbGVzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZm9yRWFjaCIsIm1vZHVsZSIsIm1hcCIsImluZGV4Iiwic3JjIiwiZGVmZXIiLCJjaGFyU2V0IiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsInJlcG9zIiwid2FybiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwicmVuZGVyIiwiTmF2YmFyIiwiU3dpdGNoIiwiZXhhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiUm91dGUiLCJwcm9wcyIsIl9leHRlbmRzIiwiTm9NYXRjaCIsIkdyaWQiLCJfdGhpcyIsIl9faXNCcm93c2VyX18iLCJzdGF0aWNDb250ZXh0IiwiZmV0Y2hSZXBvcyIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXRjaCIsInBhcmFtcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxhbmciLCJfdGhpczIiLCJzZXRTdGF0ZSIsImZldGNoSW5pdGlhbERhdGEiLCJfdGhpcyRzdGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJsb2dpbiIsIkhvbWUiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJjb3VudCIsInNldENvdW50IiwiUGFzc3dvcmRJbnB1dCIsIm9uQ2xpY2siLCJNeUNvbXBvbmVudCIsImhhbmRsZVBvc3RSZXF1ZXN0IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJjcmVkZW50aWFscyIsIkVycm9yIiwibGFuZ3VhZ2VzIiwicGFyYW0iLCJOYXZMaW5rIiwiYWN0aXZlU3R5bGUiLCJmb250V2VpZ2h0IiwidG8iLCJ1c2VIaXN0b3J5Iiwic2V0UXVlcnlQYXJhbXMiLCJxdWVyeVN0cmluZyIsIl91c2VMb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwicXVlcnlQYXJhbXNPYmoiLCJ1c2VNZW1vIiwicXVlcnlTdHJpbmdUb09iamVjdCIsInJlYWRRdWVyeVByb3BlcnR5Iiwic2V0TGFuZ3VhZ2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFnZSIsInNldEFnZSIsIm9uVmFsdWVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ1cGRhdGVRdWVyeU9iamVjdCIsInVwZGF0ZVF1ZXJ5UHJvcGVydHkiLCJjcmVhdGVRdWVyeVN0cmluZyIsImZsZXhEaXJlY3Rpb24iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJlIiwiaHRtbEZvciIsIl9yZWYkZW1haWwiLCJlbWFpbCIsInNldFZhbHVlIiwic3RyZW5ndGgiLCJzZXRTdHJlbmd0aCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiZ2V0UGFzc3dvcmRTdHJlbmd0aCIsInVzZUVmZmVjdCIsInNldE9wdGlvbnMiLCJzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyIsIkZyYWdtZW50IiwidXNlcklucHV0cyIsInp4Y3ZibkNvbW1vblBhY2thZ2UiLCJ6eGN2Ym5FblBhY2thZ2UiLCJ6eGN2Ym5PcHRpb25zIiwiZGljdGlvbmFyeSIsIl9vYmplY3RTcHJlYWQiLCJncmFwaHMiLCJhZGphY2VuY3lHcmFwaHMiLCJ0cmFuc2xhdGlvbnMiLCJfeCIsInBhc3N3b3JkIiwiX3p4Y3ZibiIsInp4Y3ZibiIsInNjb3JlIiwiR2V0U25hcHNob3RSZWRpcmVjdHMiLCJjaGlsZHJlbiIsIlVzZXJTZWNyZXRJbmZvQ29udGFpbmVyIiwiVXNlclNlY3JldEluZm8iLCJnZXRJbml0aWFsQWN0aW9ucyIsIkd1ZXN0Q2hlY2tvdXRDb250YWluZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2FkZXIiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsInByb3BlcnR5IiwicXVlcnlPYmplY3QiLCJ1cGRhdGUiLCJzdHIiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJqb2luIiwiVVJMU2VhcmNoUGFyYW1zT2JqIiwiVVJMU2VhcmNoUGFyYW1zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwiZXJyIiwiZiIsIlBhcmFtc1F1ZXJ5IiwiTG9naW4iLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRGF0YVRlc3QiLCJhbmFseXRpY3MiLCJwb3AiLCJyb3V0ZXNQcm9jZXNzaW5nIiwibGV2ZWwiLCJjcmVhdGVTdG9yZSIsInRhc2tzIiwicnVuU2FnYSIsInJvb3RTYWdhIiwiX3JvdXRlJGNvbXBvbmVudCIsInJlZHV4QWN0aW9uIiwiY29udGV4dFR5cGVzIiwibG9hZGFibGUiLCJfTG9hZGFibGVDb250YWluZXIiLCJMb2FkYWJsZUNvbnRhaW5lciIsImxvYWRlZCIsImluaXRpYWxBY3Rpb24iLCJkaXNwYXRjaCIsImNsb3NlIiwidG9Qcm9taXNlIiwiZ2V0U3RhdGUiLCJsYXRlc3RTdG9yZSIsImlzRGV2Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJlZHV4Um91dGVyTWlkZGxld2FyZSIsInJvdXRlck1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJwcmVsb2FkZWRTdGF0ZSIsImRldlRvb2xzIiwibWlkZGxld2FyZSIsImhvdCIsImNyZWF0ZU5ld1Jvb3RSZWR1Y2VyIiwicmVwbGFjZVJlZHVjZXIiLCJydW4iLCJFTkQiLCJMb2dMZXZlbCIsImdldExldmVsIiwiTE9HX0xFVkVMIiwiTnVtYmVyIiwiSU5GTyIsIm9iaiIsIl90eXBlb2YiLCJvdXRwdXQiLCJPYmplY3QiLCJhc3NpZ24iLCJFUlJPUiIsIldBUk4iLCJ0cmFjZSIsIlRSQUNFIiwiREVCVUciLCJGQVRBTCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFF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Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL3NlcnZlci9jaHVuay1cIiArIGNodW5rSWQgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2NodW5rcy9cIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgbmNvbmYgZnJvbSAnbmNvbmYnXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52J1xuXG4vLyBJbml0aWFsaXNlIHdpdGggYXJndW1lbnRzIGFuZCBlbnYgdmFyaWFibGVzXG5uY29uZi5hcmd2KCkuZW52KClcblxuLy8gU2V0IHRoZSBkZWZhdWx0IGVudmlyb25tZW50IHRvIHByb2R1Y3Rpb25cbm5jb25mLmRlZmF1bHRzKHtcbiAgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyxcbiAgLy8gTkVXX1JFTElDX0hPTUU6ICcuL2NvbmZpZy9uZXdyZWxpYycsXG4gIERJU0FCTEVfQVVUT01BVElDX1JFU1VNRTogJ2ZhbHNlJyxcbn0pXG5cbmNvbnN0IGNvbmZpZyA9IG5jb25mLmdldCgnRU5WX0NPTkZJRycpIHx8IG5jb25mLmdldCgnTk9ERV9FTlYnKVxuXG4vLyBMb2FkIGVudmlyb25tZW50IGNvbnN0YW50cyBmb3IgZW52aXJvbm1lbnRcbm5jb25mLmZpbGUoeyBmaWxlOiBgLi9jb25maWcvZW52Y29uZmlnL2VudmNvbmZpZy4ke2NvbmZpZ30uanNvbmAgfSlcblxuaWYgKGNvbmZpZyA9PT0gJ3N0dWInKSB7XG4gIGRvdGVudi5jb25maWcoeyBwYXRoOiAnLmVudi5sb2NhbCcgfSlcbiAgbmNvbmYuc2V0KCdBRERSRVNTX0ZJTkRFUl9BUElfS0VZJywgcHJvY2Vzcy5lbnYuQUREUkVTU19GSU5ERVJfQVBJX0tFWSlcbn1cblxuLy8gU1RVQl9VUkwgd2lsbCBiZSBzZXQgZm9yIGZlYXR1cmUgYnJhbmNoZXNcbi8vIFRPRE86IFNlZSB0aWNrZXQgQk9GUy00MjY1IC0gaW52ZXN0aWdhdGUgc2ltaWxhciBmdW5jdGlvbmFsaXR5IHRoYXQgY2FuIGRlcGxveSBmZWF0dXJlIG9yIHByZXZpZXcgZGVwbG95bWVudHMgaW4gQm9zdW5cbi8vIGlmIChuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSA9PT0gJ3JlbW90ZVN0dWInKSB7XG4vLyAgIG5jb25mLnNldCgnR0FURVdBWV9BUEknLCBuY29uZi5nZXQoJ0dBVEVXQVlfQVBJJykucmVwbGFjZSgnc3R1Yi1wYXltZW50LXNlcnZpY2UnLCBuY29uZi5nZXQoJ1NUVUJfVVJMJykpKVxuLy8gICBuY29uZi5zZXQoJ0FDQ09VTlRfQVBJJywgbmNvbmYuZ2V0KCdBQ0NPVU5UX0FQSScpLnJlcGxhY2UoJ3N0dWItcGF5bWVudC1zZXJ2aWNlJywgbmNvbmYuZ2V0KCdTVFVCX1VSTCcpKSlcbi8vICAgbmNvbmYuc2V0KCdXQ1NfQVBJJywgbmNvbmYuZ2V0KCdXQ1NfQVBJJykucmVwbGFjZSgnc3R1Yi1wYXltZW50LXNlcnZpY2UnLCBuY29uZi5nZXQoJ1NUVUJfVVJMJykpKVxuLy8gICBuY29uZi5zZXQoXG4vLyAgICAgJ1NFU1NJT05fTUFOQUdFUl9BUEknLFxuLy8gICAgIG5jb25mLmdldCgnU0VTU0lPTl9NQU5BR0VSX0FQSScpLnJlcGxhY2UoJ3N0dWItcGF5bWVudC1zZXJ2aWNlJywgbmNvbmYuZ2V0KCdTVFVCX1VSTCcpKSxcbi8vICAgKVxuLy8gICBuY29uZi5zZXQoXG4vLyAgICAgJ01BUktFVElOR19QUkVGRVJFTkNFX0FQSScsXG4vLyAgICAgbmNvbmYuZ2V0KCdNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEknKS5yZXBsYWNlKCdzdHViLXBheW1lbnQtc2VydmljZScsIG5jb25mLmdldCgnU1RVQl9VUkwnKSksXG4vLyAgIClcbi8vIH1cblxuLy8gUGFzcyBhbGwgdmFsdWVzIGludG8gcHJvY2Vzcy5lbnZcbnByb2Nlc3MuZW52ID0gbmNvbmYuZ2V0KClcblxuLy8gTG9nIG91dCB0aGUgZW5kcG9pbnRzIHdlJ3JlIHVzaW5nIHRvIG1ha2UgZGVidWdnaW5nIGVhc2llclxuaWYgKGNvbmZpZyAhPT0gJ3Rlc3QnKSB7XG4gIGNvbnNvbGUubG9nKFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6ICdzZXJ2ZXJMb2dnZXInLFxuICAgICAgbXNnOiBgQ29uZmlndXJhdGlvbiBmb3IgXCIke2NvbmZpZ31cIjpgLFxuICAgICAgZW52Y29uZmlnOiB7XG4gICAgICAgIE5PREVfRU5WOiBuY29uZi5nZXQoJ05PREVfRU5WJyksXG4gICAgICAgIEVOVl9DT05GSUc6IG5jb25mLmdldCgnRU5WX0NPTkZJRycpLFxuICAgICAgICBHQVRFV0FZX0FQSTogbmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLFxuICAgICAgICBBQ0NPVU5UX0FQSTogbmNvbmYuZ2V0KCdBQ0NPVU5UX0FQSScpLFxuICAgICAgICBXQ1NfQVBJOiBuY29uZi5nZXQoJ1dDU19BUEknKSxcbiAgICAgICAgU0VTU0lPTl9NQU5BR0VSX0FQSTogbmNvbmYuZ2V0KCdTRVNTSU9OX01BTkFHRVJfQVBJJyksXG4gICAgICAgIE1BUktFVElOR19QUkVGRVJFTkNFX0FQSTogbmNvbmYuZ2V0KCdNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEknKSxcbiAgICAgICAgUkVDRUlQVF9BUEk6IG5jb25mLmdldCgnUkVDRUlQVF9BUEknKSxcbiAgICAgICAgQ09OU1VMX0VOVjogbmNvbmYuZ2V0KCdDT05TVUxfRU5WJyksXG4gICAgICAgIEJPU1VOX0NPTkZJR19NQVA6IG5jb25mLmdldCgnQk9TVU5fQ09ORklHX01BUCcpLFxuICAgICAgICBWQVVMVF9FTlY6IG5jb25mLmdldCgnVkFVTFRfRU5WJyksXG4gICAgICAgIEJPU1VOX0VOVjogbmNvbmYuZ2V0KCdCT1NVTl9FTlYnKSxcbiAgICAgIH0sXG4gICAgfSksXG4gIClcbn1cblxuZXhwb3J0IHsgbmNvbmYgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG4vL2ltcG9ydCB7IENvbnN1bENvbmZpZyB9IGZyb20gJ3R5cGVzL3JlZHVjZXJzL2FwcCdcblxuZXhwb3J0IGNvbnN0IE1PREFMX09QRU4gPSBjcmVhdGVBY3Rpb24oJ01PREFMX09QRU4nKVxuZXhwb3J0IGNvbnN0IE1PREFMX0NMT1NFID0gY3JlYXRlQWN0aW9uKCdNT0RBTF9DTE9TRScpXG5leHBvcnQgY29uc3QgU0VUX09SREVSX1NVTU1BUllfVkFSSUFOVCA9IGNyZWF0ZUFjdGlvbjxhbnk+KCdTRVRfT1JERVJfU1VNTUFSWV9WQVJJQU5UJylcbmV4cG9ydCBjb25zdCBTRVRfQlJBTkQgPSBjcmVhdGVBY3Rpb248YW55PignU0VUX0JSQU5EJylcbmV4cG9ydCBjb25zdCBTRVRfVEhFTUUgPSBjcmVhdGVBY3Rpb248YW55PignU0VUX1RIRU1FJylcbmV4cG9ydCBjb25zdCBUT0dHTEVfUFJFVklFV19QTEFDRV9PUkRFUiA9IGNyZWF0ZUFjdGlvbignVE9HR0xFX1BSRVZJRVdfUExBQ0VfT1JERVInKVxuZXhwb3J0IGNvbnN0IFNFVF9GRUFUVVJFX1RPR0dMRSA9IGNyZWF0ZUFjdGlvbjxQYXJ0aWFsPGFueT4+KCdTRVRfRkVBVFVSRV9UT0dHTEUnKVxuZXhwb3J0IGNvbnN0IFNFVF9GRUFUVVJFUyA9IGNyZWF0ZUFjdGlvbjxhbnk+KCdTRVRfRkVBVFVSRVMnKVxuZXhwb3J0IGNvbnN0IFNFVF9DT05GSUcgPSBjcmVhdGVBY3Rpb248YW55PignU0VUX0NPTkZJRycpXG5leHBvcnQgY29uc3QgU0VUX0NIQU5ORUxfVE9HR0xFID0gY3JlYXRlQWN0aW9uKCdTRVRfQ0hBTk5FTF9UT0dHTEUnKVxuLy9leHBvcnQgY29uc3QgU0VUX0NPTkZJR19DT09LSUUgPSBjcmVhdGVBY3Rpb248Q29uc3VsQ29uZmlnPignU0VUX0NPTkZJR19DT09LSUUnKVxuZXhwb3J0IGNvbnN0IFRSQUNLX0FEX0NPTlRJTlVFX0VSUk9SID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oJ1RSQUNLX0FEX0NPTlRJTlVFX0VSUk9SJylcbiIsImV4cG9ydCB7XG4gIE1PREFMX09QRU4sXG4gIE1PREFMX0NMT1NFLFxuICBTRVRfT1JERVJfU1VNTUFSWV9WQVJJQU5ULFxuICBUT0dHTEVfUFJFVklFV19QTEFDRV9PUkRFUixcbiAgU0VUX0JSQU5ELFxuICBTRVRfVEhFTUUsXG4gIFNFVF9GRUFUVVJFX1RPR0dMRSxcbiAgU0VUX0NIQU5ORUxfVE9HR0xFLFxuICBTRVRfRkVBVFVSRVMsXG4gIFNFVF9DT05GSUcsXG4gIFRSQUNLX0FEX0NPTlRJTlVFX0VSUk9SLFxufSBmcm9tICcuL2FwcCdcblxuXG5leHBvcnQgeyBHRVRfV0FMTEVUX1NVQ0NFU1MsIEdFVF9XQUxMRVRfRkFJTFVSRSB9IGZyb20gJy4vd2FsbGV0J1xuXG5leHBvcnQge1xuICBJTklUX1VTRVJfSU5GT19QQUdFLFxufSBmcm9tICcuL21ldGEnXG5cblxuXG5leHBvcnQgeyBST1VURVJfTE9DQVRJT05fQ0hBTkdFIH0gZnJvbSAnLi9yb3V0ZXInXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgR2V0V2FsbGV0QVBJUGF5bG9hZCB9IGZyb20gJ3R5cGVzL2FwaSdcblxuZXhwb3J0IGNvbnN0IElOSVRfVVNFUl9JTkZPX1BBR0UgPSBjcmVhdGVBY3Rpb248R2V0V2FsbGV0QVBJUGF5bG9hZD4oJ0dFVF9XQUxMRVRfU1VDQ0VTUycpXG5leHBvcnQgY29uc3QgR0VUX1dBTExFVF9GQUlMVVJFID0gY3JlYXRlQWN0aW9uKCdHRVRfV0FMTEVUX0ZBSUxVUkUnKVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IExPQ0FUSU9OX0NIQU5HRSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJMb2NhdGlvbkNoYW5nZUFjdGlvblBheWxvYWQgfSBmcm9tICcuLi90eXBlcy9hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUk9VVEVSX0xPQ0FUSU9OX0NIQU5HRSA9IGNyZWF0ZUFjdGlvbjxSb3V0ZXJMb2NhdGlvbkNoYW5nZUFjdGlvblBheWxvYWQ+KExPQ0FUSU9OX0NIQU5HRSlcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBHZXRXYWxsZXRBUElQYXlsb2FkIH0gZnJvbSAndHlwZXMvYXBpJ1xuXG5leHBvcnQgY29uc3QgR0VUX1dBTExFVF9TVUNDRVNTID0gY3JlYXRlQWN0aW9uPEdldFdhbGxldEFQSVBheWxvYWQ+KCdHRVRfV0FMTEVUX1NVQ0NFU1MnKVxuZXhwb3J0IGNvbnN0IEdFVF9XQUxMRVRfRkFJTFVSRSA9IGNyZWF0ZUFjdGlvbignR0VUX1dBTExFVF9GQUlMVVJFJylcbiIsImltcG9ydCB7IGNhblVzZURvbSB9IGZyb20gJ0BzYWluc2J1cnlzLXRlY2gvYm9sdHVpLXV0aWxzJ1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlscy9Mb2dnZXInXG5cbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi9lbmRwb2ludHMnXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vaGVscGVycy9yZXF1ZXN0SGVscGVycydcbmltcG9ydCB7XG4gIEFQSVJlc3BvbnNlLFxuICBDcmVhdGVBbm9ueW1vdXNTZXNzaW9uQVBJUmVxdWVzdCxcbiAgQ3JlYXRlQW5vbnltb3VzU2Vzc2lvbkFQSVJlc3BvbnNlLFxuICBTdGF0dXNDb2RlLFxufSBmcm9tICd0eXBlcy9hcGknXG5cblxuY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5pbnRlcmZhY2UgQXBpIHtcbiAgLy8gV2FsbGV0XG4gIGdldFdhbGxldDogKHVzZXJJZDogc3RyaW5nLCBjb29raWU6IHN0cmluZykgPT4gdW5rbm93blxuICAvLyBTZXNzaW9uXG4gIGNyZWF0ZUFub255bW91c1Nlc3Npb246IChvcHRpb25zOiBDcmVhdGVBbm9ueW1vdXNTZXNzaW9uQVBJUmVxdWVzdCkgPT4gQ3JlYXRlQW5vbnltb3VzU2Vzc2lvbkFQSVJlc3BvbnNlXG59XG5cbmNvbnN0IGFwaUZhY3RvcnkgPSAoKTogQXBpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvKlxuXG4gICAgLy8gV2FsbGV0IGhvdyB0aGUgZmluYWwgcGF0aCBsb29rIGxpa2U6XG5cbiAgICAxLlxuICAgIHByb2RcbiAgICBcIkFDQ09VTlRfQVBJXCI6IFwiaHR0cHM6Ly9hcmdvcy1hY2NvdW50LWFjY291bnQtc2VydmljZS5pbnQucHJkLmpzcGFhcy51a1wiLFxuICAgIHN0YWdlIFxuICAgIFwiQUNDT1VOVF9BUElcIjogXCJodHRwczovL2FyZ29zLWFjY291bnQtYWNjb3VudC1zZXJ2aWNlLmludC5zdGcuanNwYWFzLnVrXCIsXG4gICAgc3R1YnMgXG4gICAgXCJBQ0NPVU5UX0FQSVwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAxMVwiLFxuXG4gICAgMi5cbiAgICBjb25maWcuYWNjb3VudEFwaVNlcnZlciA9IHByb2Nlc3MuZW52LkFDQ09VTlRfQVBJXG4gICAgY29uZmlnLmFjY291bnRBcGlCYXNlVXJsID0gYC9hY2NvdW50LWFwaWAsXG5cbiAgICBjb25zdCBhY2NvdW50QXBpU2VydmVyID0gYWNjb3VudEFwaUVuZHBvaW50KCkgPT4gY29uZmlnLmFjY291bnRBcGlTZXJ2ZXJ9JHtjb25maWcuYWNjb3VudEFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG4gICAgUVVFUktZIEJJVCA9ICR7ZW5kcG9pbnR9IGlzIGFsd2F5IGVtcHR5IGNhdXNlIHdlIGRvIG5vdCBwYXNzIGFueXRoaW5nIHRvIHRoZSBtZXRob2QgYWNjb3VudEFwaUVuZHBvaW50KClcblxuXG4gICAgYWNjb3VudCBwYXRoID0gYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGFjY291bnRBcGlFbmRwb2ludCgpIFxuICAgIENsaWVudCA6IGVtcHR5IGNhblVzZURvbSgpICYmICcnXG4gICAgU0VSVkVSOiBodHRwOi8vbG9jYWxob3N0OjMwMTEvYWNjb3VudC1hcGkvXG5cblxuICAgIC0tLS0tVVJMIGFsbCB0b2dldGhlci0tLS0tXG5cbiAgICAvLyBjb25zdCBlbmRwb2ludCA9IGVuZHBvaW50cy5nZXRXYWxsZXQoMTEpID0+IGAke2FjY291bnR9L3VzZXJzLzExL3dhbGxldGBcblxuICAgIENsaWVudCA6IC91c2Vycy8xMS93YWxsZXRcbiAgICBTRVJWRVI6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9hY2NvdW50LWFwaS91c2Vycy8xMS93YWxsZXRcbiovXG5cbiAgICBnZXRXYWxsZXQ6ICh1c2VySWQsIGNvb2tpZSkgPT4gcmVxdWVzdC5nZXQoZW5kcG9pbnRzLmdldFdhbGxldCh1c2VySWQpKS5zZXQoeyBDb29raWU6IGNvb2tpZSB9KSxcbiAgICAvLyBTZXNzaW9uXG4gICAgY3JlYXRlQW5vbnltb3VzU2Vzc2lvbjogKG9wdGlvbnMpID0+XG4gICAgICByZXF1ZXN0LnBvc3QoZW5kcG9pbnRzLmNyZWF0ZUFub255bW91c1Nlc3Npb24oKSwgb3B0aW9ucykgYXMgdW5rbm93biBhcyBDcmVhdGVBbm9ueW1vdXNTZXNzaW9uQVBJUmVzcG9uc2UsXG4gIH1cbn1cblxuXG5cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIHJlYWQgc3VwZXJhZ2VudCByZXNwb25zZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVzcG9uc2U8VD4ocmVzcG9uc2U6IEFQSVJlc3BvbnNlPFQ+LCBzaG91bGRSZWRpcmVjdFRvTG9naW4gPSB0cnVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICBMb2dnZXIuZmF0YWwoXCJXZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2VcIilcbiAgICAgIHJlamVjdCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBTdGF0dXNDb2RlLk5PVF9GT1VORCkge1xuICAgICAgcmVqZWN0KHJlc3BvbnNlKVxuXG4gICAgICBMb2dnZXIuZXJyb3Ioe1xuICAgICAgICBtZXRob2Q6IHJlc3BvbnNlLnJlcXVlc3QubWV0aG9kLFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnJlcXVlc3QudXJsLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgdGV4dDogcmVzcG9uc2UudGV4dCxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gU3RhdHVzQ29kZS5VTkFVVEhPUklaRUQgJiYgc2hvdWxkUmVkaXJlY3RUb0xvZ2luKSB7XG4gICAgICBpZiAoY2FuVXNlRG9tKCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbG9naW4/cGFnZU5hbWU9bWFuZGF0b3J5UHJlcGF5JnN1Y2Nlc3NVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3VjY2Vzc1VybCl9YFxuICAgICAgfVxuXG4gICAgICByZWplY3QocmVzcG9uc2UpXG5cbiAgICAgIExvZ2dlci5lcnJvcih7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICB0ZXh0OiByZXNwb25zZS50ZXh0LFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFN0YXR1c0NvZGUuQkFEX1JFUVVFU1QpIHtcbiAgICAgIHJlamVjdChyZXNwb25zZSlcblxuICAgICAgTG9nZ2VyLmVycm9yKHtcbiAgICAgICAgbWV0aG9kOiByZXNwb25zZS5yZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgdXJsOiByZXNwb25zZS5yZXF1ZXN0LnVybCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHRleHQ6IHJlc3BvbnNlLnRleHQsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmJvZHkpXG5cbiAgICAgIExvZ2dlci5kZWJ1Zyh7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAvLyBoaWRlIHN1Y2Nlc3MgYm9keSBpbiBwcm9kIGFzIGl0IGNvbnRhaW5zIGN1c3RvbWVyIGRhdGFcbiAgICAgICAgdGV4dDogaXNQcm9kdWN0aW9uID8gdW5kZWZpbmVkIDogcmVzcG9uc2UudGV4dCxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLm9rKSB7XG4gICAgICByZWplY3QocmVzcG9uc2UpXG5cbiAgICAgIExvZ2dlci5lcnJvcih7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICB0ZXh0OiByZXNwb25zZS50ZXh0LFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUZhY3RvcnkoKVxuIiwiaW1wb3J0IHtcbiAgYWNjb3VudEFwaUVuZHBvaW50LFxuICBzZXNzaW9uTWFuYWdlckVuZHBvaW50XG59IGZyb20gJy4uL2hlbHBlcnMvYXBpVXJsSGVscGVycydcblxuXG5jb25zdCBhY2NvdW50ID0gYWNjb3VudEFwaUVuZHBvaW50KClcbmNvbnN0IHNlc3Npb24gPSBzZXNzaW9uTWFuYWdlckVuZHBvaW50KClcbmludGVyZmFjZSBFbmRwb2ludHMge1xuICBnZXRXYWxsZXQ6ICh1c2VySWQ6IHN0cmluZykgPT4gc3RyaW5nXG4gIGNyZWF0ZUFub255bW91c1Nlc3Npb246ICgpID0+IHN0cmluZ1xufVxuXG5jb25zdCBlbmRwb2ludHM6IEVuZHBvaW50cyA9IHtcbiAgLy8gV2FsbGV0XG4gIGdldFdhbGxldDogKHVzZXJJZCkgPT4gYCR7YWNjb3VudH0vdXNlcnMvJHt1c2VySWR9L3dhbGxldGAsXG5cbiAgLy8gU2Vzc2lvblxuICBjcmVhdGVBbm9ueW1vdXNTZXNzaW9uOiAoKSA9PiBgJHtzZXNzaW9ufS9zZXNzaW9ucy9hbm9ueW1vdXNgLFxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmRwb2ludHNcbiIsImltcG9ydCBhcGksIHsgY2hlY2tSZXNwb25zZSB9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuL2VuZHBvaW50cydcblxuZXhwb3J0IHsgY2hlY2tSZXNwb25zZSwgZW5kcG9pbnRzIH1cblxuZXhwb3J0IGRlZmF1bHQgYXBpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGNhblVzZURvbSB9IGZyb20gJ0BzYWluc2J1cnlzLXRlY2gvYm9sdHVpLXV0aWxzJ1xuXG5jb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVCB8fCAnbG9jYWxob3N0J1xuY29uc3QgcG9ydCA9ICc4MDgwJ1xuY29uc3QgcHJlcGF5QXBpID0gcHJvY2Vzcy5lbnYuR0FURVdBWV9BUEkgfHwgJydcbmNvbnN0IGFjY291bnRBcGkgPSBwcm9jZXNzLmVudi5BQ0NPVU5UX0FQSSB8fCAnJ1xuY29uc3QgbWFya2V0aW5nQVBJID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5jb25zdCBwcm9kdWN0QXBpID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5jb25zdCBzZXNzaW9uTWFuYWdlckFwaSA9IGNhblVzZURvbSgpID8gJycgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuY29uc3QgZ2V0VXNlckluZm9BcGkgPSBwcm9jZXNzLmVudi5XQ1NfQVBJIHx8ICcnXG5jb25zdCB2YXRSZWNlaXB0QXBpID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5cbmludGVyZmFjZSBHaWZ0Q2FyZCB7XG4gIGJpblJhbmdlPzogc3RyaW5nXG4gIG1pbkxlbmd0aD86IG51bWJlclxuICBtYXhMZW5ndGg/OiBudW1iZXJcbiAgcGluTnVtYmVyTGVuZ3RoPzogbnVtYmVyXG4gIHNlY3VyaXR5Q29kZUxlbmd0aD86IG51bWJlclxuICBpbWFnZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBHaWZ0Q2FyZFR5cGVzIHtcbiAgJ0dFTkVSSUMnID0gJ0dFTkVSSUMnLFxuICAnQ0FSRF9HSUZUX0FSR09TJyA9ICdDQVJEX0dJRlRfQVJHT1MnLFxuICAnTkVXX0dJRlRfQ0FSRF9BUkdPUycgPSAnTkVXX0dJRlRfQ0FSRF9BUkdPUycsXG4gICdDQVJEX0dJRlRfRkxFWEVDQVNIJyA9ICdDQVJEX0dJRlRfRkxFWEVDQVNIJyxcbn1cblxuZXhwb3J0IHR5cGUgTGVnYWN5Q29uZmlnID0ge1xuICBhcHA6IHtcbiAgICByb290Rm9udFNpemU6IG51bWJlclxuICB9XG4gIHBheW1lbnRNZXRob2RzT3JkZXI6IFJlYWRvbmx5QXJyYXk8W10+XG4gIHBheW1lbnRNZXRob2RSb3V0ZXM6IFJlY29yZDxzdHJpbmcsIFtdPlxuICBwbGFjZU9yZGVyQW5pbWF0aW9uOiB7XG4gICAgc2Vhc29uczogeyBbJ2tleSddOiBhbnkgfVxuICAgIFtrZXk6IHN0cmluZ106IGFueVxuICB9XG5cbiAgcHJlcGF5QXBpU2VydmVyOiBzdHJpbmdcbiAgYWNjb3VudEFwaVNlcnZlcjogc3RyaW5nXG4gIHByb2R1Y3RBcGlTZXJ2ZXI6IHN0cmluZ1xuICBtYXJrZXRpbmdBcGlTZXJ2ZXI6IHN0cmluZ1xuICBzZXNzaW9uTWFuYWdlclNlcnZlcjogc3RyaW5nXG4gIGdldFVzZXJJbmZvQXBpU2VydmVyOiBzdHJpbmdcbiAgZ2V0VmF0UmVjZWlwdFNlcnZlcjogc3RyaW5nXG4gIHByZXBheUFwaUJhc2VVcmw6IHN0cmluZ1xuICBvcmRlckFwaUJhc2VVcmw6IHN0cmluZ1xuICBhY2NvdW50QXBpQmFzZVVybDogc3RyaW5nXG4gIHByb2R1Y3RBcGlCYXNlVXJsOiBzdHJpbmdcbiAgbWFya2V0aW5nQXBpQmFzZVVybDogc3RyaW5nXG4gIHNlc3Npb25NYW5hZ2VyQmFzZVVybDogc3RyaW5nXG4gIGdldFVzZXJJbmZvQXBpQmFzZVVybDogc3RyaW5nXG4gIGdldFZhdFJlY2VpcHRBcGlCYXNlVXJsOiBzdHJpbmdcbiAgbmVjdGFyOiB7XG4gICAgQ0FSRF9ORUNUQVI6IHtcbiAgICAgIGJpbk51bWJlcjogc3RyaW5nXG4gICAgICBjYXJkTnVtYmVyTGVuZ3RoOiBudW1iZXJcbiAgICB9XG4gIH1cbiAgZ2lmdENhcmRUeXBlczoge1xuICAgIFtrZXkgaW4gR2lmdENhcmRUeXBlc106IEdpZnRDYXJkXG4gIH1cblxuICAvLyBmYWxsYmFjayBhcyB3ZSBjb250aW51ZSB0byB0eXBlIHRoaXNcbiAgLy8gYmVjYXVzZSBvZiB0aGUgXCJhcyBjb25zdFwiIG1vc3QgdHlwZXMgc2hvdWxkIGJlIGluZmVycmVkIGFueXdheVxuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgY29uZmlnID0ge1xuICBob3N0LFxuICBwb3J0LFxuICBwcmVwYXlBcGlTZXJ2ZXI6IHByZXBheUFwaSxcbiAgYWNjb3VudEFwaVNlcnZlcjogYWNjb3VudEFwaSxcbiAgcHJvZHVjdEFwaVNlcnZlcjogcHJvZHVjdEFwaSxcbiAgZ2V0VmF0UmVjZWlwdFNlcnZlcjogdmF0UmVjZWlwdEFwaSxcbiAgbWFya2V0aW5nQXBpU2VydmVyOiBtYXJrZXRpbmdBUEksXG4gIHNlc3Npb25NYW5hZ2VyU2VydmVyOiBzZXNzaW9uTWFuYWdlckFwaSxcbiAgZ2V0VXNlckluZm9BcGlTZXJ2ZXI6IGdldFVzZXJJbmZvQXBpLFxuICBwcmVwYXlBcGlCYXNlVXJsOiBgL2NoZWNrb3V0LWFwaS12MmAsXG4gIG9yZGVyQXBpQmFzZVVybDogYC9jaGVja291dC1hcGktdjJgLFxuICBhY2NvdW50QXBpQmFzZVVybDogYC9hY2NvdW50LWFwaWAsXG4gIHByb2R1Y3RBcGlCYXNlVXJsOiBgL2NoZWNrb3V0L3Byb3h5L3Byb2R1Y3QtZ2F0ZXdheWAsXG4gIG1hcmtldGluZ0FwaUJhc2VVcmw6IGAvY2hlY2tvdXQvcHJveHkvbWFya2V0aW5nLXByZWZlcmVuY2VzYCxcbiAgc2Vzc2lvbk1hbmFnZXJCYXNlVXJsOiBgL2ludGVybmFsL3Byb3h5L3Nlc3Npb24tbWFuYWdlcmAsXG4gIGdldFVzZXJJbmZvQXBpQmFzZVVybDogYC93ZWJhcHAvd2NzL3N0b3Jlcy9zZXJ2bGV0L0dldFVzZXJJbmZvYCxcbiAgZ2V0VmF0UmVjZWlwdEFwaUJhc2VVcmw6IGAvY2hlY2tvdXQvcHJveHkvcmVjZWlwdC1zZXJ2aWNlYCxcbiAgYXBwOiB7XG4gICAgcm9vdEZvbnRTaXplOiAxNixcbiAgfSxcbiAgdGltaW5nczoge1xuICAgIGZhZGVJbk91dDogMjAwLFxuICAgIHNuYXBzaG90TG9ja0RlbGF5OiA1MDAwLFxuICAgIHBsYWNlT3JkZXJTaG93RXJyb3JEZWxheTogNTAwLFxuICB9LFxuICBwYXltZW50TWV0aG9kUm91dGVzOiB7XG4gICAgZGVmYXVsdDogJ1BheW1lbnRNZXRob2RSb3V0ZXMuREVGQVVMVCcsXG4gICAgY3JlZGl0RGViaXRDYXJkOiAnUGF5bWVudE1ldGhvZFJvdXRlcy5DQVJEX0RFQklUJyxcbiAgICBwYXlwYWw6ICdQYXltZW50TWV0aG9kUm91dGVzLlBBWVBBTCcsXG4gICAgYXBwbGVQYXk6ICdQYXltZW50TWV0aG9kUm91dGVzLkFQUExFX1BBWScsXG4gICAgYXJnb3NDYXJkQ3JlZGl0UGxhbjogJ1BheW1lbnRNZXRob2RSb3V0ZXMuQ0FSRF9BUkdPU19DUkVESVQnLFxuICB9LFxuICBzdGF0dXNlczoge1xuICAgIGluaXRpYWxpc2F0aW9uSW5Qcm9ncmVzczogMjAyLFxuICB9LFxuICBwYXltZW50TWV0aG9kc09yZGVyOiBbXG4gICAgJ0NBUkRfREVCSVQnLFxuICAgICdDQVJEX0FSR09TX0NSRURJVCcsXG4gICAgJ1BBWVBBTCcsXG4gICAgJ0FQUExFX1BBWScsXG4gIF0sXG4gIG5lY3Rhcjoge1xuICAgIENBUkRfTkVDVEFSOiB7XG4gICAgICBiaW5OdW1iZXI6ICc5ODI2MzAwMCcsXG4gICAgICBjYXJkTnVtYmVyTGVuZ3RoOiAxMSxcbiAgICB9LFxuICB9LFxuICBnaWZ0Q2FyZFR5cGVzOiB7XG4gICAgR0VORVJJQzoge30sXG4gICAgQ0FSRF9HSUZUX0FSR09TOiB7XG4gICAgICBiaW5SYW5nZTogJzEwMDAwJyxcbiAgICAgIG1pbkxlbmd0aDogMjAsXG4gICAgICBtYXhMZW5ndGg6IDIwLFxuICAgICAgcGluTnVtYmVyTGVuZ3RoOiA0LFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kxLmFkaXMud3MvaS9Bcmdvcy9HaWZ0Q2FyZCcsXG4gICAgfSxcbiAgICBORVdfR0lGVF9DQVJEX0FSR09TOiB7XG4gICAgICBiaW5SYW5nZTogJzk4MjYwMjc4JyxcbiAgICAgIG1pbkxlbmd0aDogMTksXG4gICAgICBtYXhMZW5ndGg6IDE5LFxuICAgICAgcGluTnVtYmVyTGVuZ3RoOiA0LFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kxLmFkaXMud3MvaS9Bcmdvcy9HaWZ0Q2FyZCcsXG4gICAgfSxcbiAgICBDQVJEX0dJRlRfRkxFWEVDQVNIOiB7XG4gICAgICBiaW5SYW5nZTogJzYzMzgyNycsXG4gICAgICBtaW5MZW5ndGg6IDE5LFxuICAgICAgbWF4TGVuZ3RoOiAxOSxcbiAgICAgIHNlY3VyaXR5Q29kZUxlbmd0aDogMyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pMS5hZGlzLndzL2kvQXJnb3MvRmxleGVjYXNoJyxcbiAgICB9LFxuICB9LFxuICBtYXhpbXVtTnVtYmVyT2ZHaWZ0Q2FyZHM6IDgsXG4gIHBsYWNlT3JkZXJBbmltYXRpb246IHtcbiAgICBzZWFzb25zOiB7XG4gICAgICBkZWZhdWx0OiAnU2Vhc29uLkRFRkFVTFQnLFxuICAgICAgeG1hczogJ1NlYXNvbi5YTUFTJyxcbiAgICAgIGRlZmF1bHRUdTogJ1NlYXNvbi5ERUZBVUxUX1RVJyxcbiAgICAgIHhtYXNUdTogJ1NlYXNvbi5YTUFTX1RVJyxcbiAgICAgIGRlZmF1bHRIYWJpdGF0OiAnU2Vhc29uLkRFRkFVTFRfSEFCSVRBVCcsXG4gICAgICB4bWFzSGFiaXRhdDogJ1NlYXNvbi5YTUFTX0hBQklUQVQnLFxuICAgICAgaGFsbG93ZWVuOiAnU2Vhc29uLkhBTExPV0VFTicsXG4gICAgICBwcmlkZTogJ1NlYXNvbi5QUklERScsXG4gICAgICBwcmlkZVR1OiAnU2Vhc29uLlBSSURFX1RVJyxcbiAgICAgIHByaWRlSGFiaXRhdDogJ1NlYXNvbi5QUklERV9IQUJJVEFUJyxcbiAgICAgIGJsYWNrSGlzdG9yeU1vbnRoOiAnU2Vhc29uLkJMQUNLX0hJU1RPUllfTU9OVEgnLFxuICAgICAgYmxhY2tIaXN0b3J5TW9udGhIYWJpdGF0OiAnU2Vhc29uLkJMQUNLX0hJU1RPUllfTU9OVEhfSEFCSVRBVCcsXG4gICAgICBibGFja0hpc3RvcnlNb250aFR1OiAnU2Vhc29uLkJMQUNLX0hJU1RPUllfTU9OVEhfVFUnLFxuICAgIH0sXG4gICAgaW5pdGlhbERlbGF5TXM6IDIwMDAsXG4gICAgY29sb3JzOiB7XG4gICAgICB2YXJpYW50czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYmdNYXNrOiAnI0ZGRjlGQScsXG4gICAgICAgIH0sXG4gICAgICAgIHhtYXM6IHt9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgbGlkOiB7XG4gICAgICAgIGFuaW1EdXJhdGlvbk1zOiA0MDAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByb2R1Y3RzOiB7XG4gICAgICB0b3RhbDogMyxcbiAgICAgIGFuaW1ZQXhpc01vdmVEaXN0YW5jZVB4OiAzMjAsXG4gICAgICBhbmltVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yODAsIDAuODQwLCAwLjQyMCwgMSknLFxuICAgICAgYW5pbUR1cmF0aW9uTXM6IDM1MDAsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBpbnRlcnZhbER1cmF0aW9uTXM6IDMwMDAsXG4gICAgICBvcHRpb25zOiBbJ0NhbGxpbmcgZWx2ZXMuLi4nLCAnU2hha2luZyBtaXN0bGV0b2UuLi4nLCAnV29ya2luZyBvdXIgbWFnaWMuLi4nLCBcIldvbid0IGJlIG11Y2ggbG9uZ2VyLi4uXCJdLFxuICAgIH0sXG4gIH0sXG59IGFzIGNvbnN0XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIiwiaW1wb3J0IHsgY2FuVXNlRG9tIH0gZnJvbSAnQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBwcmVwYXlBcGlFbmRwb2ludCA9IChlbmRwb2ludCA9ICcnKTogc3RyaW5nID0+XG4gIGAke2NhblVzZURvbSgpID8gJycgOiBjb25maWcucHJlcGF5QXBpU2VydmVyfSR7Y29uZmlnLnByZXBheUFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBhY2NvdW50QXBpRW5kcG9pbnQgPSAoZW5kcG9pbnQgPSAnJyk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLmFjY291bnRBcGlTZXJ2ZXJ9JHtjb25maWcuYWNjb3VudEFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBvcmRlckFwaUVuZHBvaW50ID0gKGVuZHBvaW50ID0gJycpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5wcmVwYXlBcGlTZXJ2ZXJ9JHtjb25maWcub3JkZXJBcGlCYXNlVXJsfSR7ZW5kcG9pbnR9YFxuXG5leHBvcnQgY29uc3QgcHJvZHVjdEFwaUVuZHBvaW50ID0gKGVuZHBvaW50ID0gJycpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5wcm9kdWN0QXBpU2VydmVyfSR7Y29uZmlnLnByb2R1Y3RBcGlCYXNlVXJsfSR7ZW5kcG9pbnR9YFxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbk1hbmFnZXJFbmRwb2ludCA9IChlbmRwb2ludCA9ICcnKTogc3RyaW5nID0+XG4gIGAke2NhblVzZURvbSgpID8gJycgOiBjb25maWcuc2Vzc2lvbk1hbmFnZXJTZXJ2ZXJ9JHtjb25maWcuc2Vzc2lvbk1hbmFnZXJCYXNlVXJsfSR7ZW5kcG9pbnR9YFxuXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm9BcGlFbmRwb2ludCA9ICgpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5nZXRVc2VySW5mb0FwaVNlcnZlcn0ke2NvbmZpZy5nZXRVc2VySW5mb0FwaUJhc2VVcmx9YFxuXG5leHBvcnQgY29uc3QgZ2V0VmF0UmVjZWlwdEVuZHBvaW50ID0gKCk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLmdldFZhdFJlY2VpcHRTZXJ2ZXJ9JHtjb25maWcuZ2V0VmF0UmVjZWlwdEFwaUJhc2VVcmx9YFxuXG5leHBvcnQgY29uc3QgbWFya2V0aW5nUHJlZmVyZW5jZXNBcGlFbmRwb2ludCA9ICgpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5tYXJrZXRpbmdBcGlTZXJ2ZXJ9JHtjb25maWcubWFya2V0aW5nQXBpQmFzZVVybH1gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgcmVxIGZyb20gJ3N1cGVyYWdlbnQnXG5cbi8vIFdlIGhhbmRsZSB0aGVzZSBlcnJvcnMgaW4gY2hlY2sgcmVzcG9uc2UgZnVuY3Rpb25cbmNvbnN0IGNhdGNoRXJyb3IgPSAocmVzOiByZXEuUmVzcG9uc2UpOiBib29sZWFuID0+IHJlcy5zdGF0dXMgPCA1MDBcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSB7XG4gIGdldDogKHVybDogc3RyaW5nKSA9PiByZXEuZ2V0KHVybCkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxuICBwb3N0OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4gcmVxLnBvc3QodXJsLCBkYXRhKS50eXBlKCdqc29uJykub2soY2F0Y2hFcnJvciksXG4gIHBhdGNoOiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4gcmVxLnBhdGNoKHVybCwgZGF0YSkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxuICBwdXQ6ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PiByZXEucHV0KHVybCwgZGF0YSkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxuICBkZWxldGU6ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PiByZXEuZGVsZXRlKHVybCwgZGF0YSkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcidcblxuaW1wb3J0IG1ldGEgZnJvbSAnLi9tZXRhL21ldGFSZWR1Y2VyJ1xuaW1wb3J0IHdhbGxldCBmcm9tICcuL3dhbGxldC93YWxsZXRSZWR1Y2VyJ1xuXG5cbmNvbnN0IGNyZWF0ZVJvb3RSZWR1Y2VyID0gKGhpc3RvcnkpID0+XG4gIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbWV0YSxcbiAgICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSksXG4gICAgd2FsbGV0LFxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb290UmVkdWNlclxuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB7XG4gIElOSVRfVVNFUl9JTkZPX1BBR0UsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMnXG5cbmltcG9ydCB7IFN0b2NrSG9sZFN0YXR1cyB9IGZyb20gJ3R5cGVzL3JlZHVjZXJzJ1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbiAgaWQ6IG51bGwsXG4gIGN1c3RvbWVySWQ6IG51bGwsXG4gIG1pc3NpbmdCaWxsaW5nQWRkcmVzczogZmFsc2UsXG4gIGluY29tcGxldGVCb29raW5nOiBmYWxzZSxcbiAgbWlzc2luZ0N1c3RvbWVyRGV0YWlsczogZmFsc2UsXG4gIHN0b2NrSG9sZFN0YXR1czogJ0lETEUnLFxuICBoYXNTdG9ja0hvbGRFcnJvcjogZmFsc2UsXG4gIHNuYXBzaG90U3RhdHVzOiBudWxsLFxuICBvcmRlcklkOiBudWxsLFxuICBwcmV2aW91c0xvY2F0aW9uOiBudWxsLFxuICBsb2NhdGlvbjogbnVsbCxcbiAgYnJhbmQ6IG51bGwsXG4gIGZ1bGZpbG1lbnRUeXBlOiAnQ09MTEVDVElPTicsXG4gIHRvZ2dsZU1vZGFsRGlzYWJsZUVzY0Nsb3NlOiBmYWxzZSxcbiAgbW9kYWxSZW1vdmVTY3JvbGw6IHRydWUsXG4gIHNlcnZlclNpZGVDb29raWVzOiBbXSxcbiAgbWlzc2luZ0Jvb2tpbmdJRDogZmFsc2UsXG4gIGlzV2NzSGFuZG92ZXI6IHRydWUsXG4gIGZ1bGZpbG1lbnRDcmVhdGVkOiBmYWxzZSxcbiAgcmVkaXJlY3RUb0FycmFuZ2VEZWxpdmVyeTogZmFsc2UsXG4gIGZhdGFsRnVsZmlsbWVudEVycm9yOiBmYWxzZSxcbiAgcmVkaXJlY3RUb1BheW1lbnQ6IGZhbHNlLFxuICBmYXRhbEJvb2tpbmdFcnJvcjogZmFsc2UsXG59XG4gXG4vKiBjb25zdCBzZXRMb2FkaW5nID0gKHN0YXRlOiBNZXRhU3RhdGUpID0+IHtcbiAgc3RhdGUubG9hZGluZyA9IHRydWVcbiAgc3RhdGUuZXJyb3IgPSBmYWxzZVxufVxuY29uc3Qgc2V0RXJyb3JBZHZpY2UgPSAoXG4gIHN0YXRlOiBNZXRhU3RhdGUsXG4gIHtcbiAgICBwYXlsb2FkLFxuICB9OiB7XG4gICAgcGF5bG9hZDogSW5pdFNuYXBzaG90RmFpbHVyZUFjdGlvblBheWxvYWQgfCBHZXRTbmFwc2hvdEZhaWx1cmVBY3Rpb25QYXlsb2FkXG4gIH0sXG4pID0+IHtcbiAgY29uc3QgeyBlcnJvciB9ID0gcGF5bG9hZFxuICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgLy9zdGF0ZS5lcnJvciA9IGVycm9yXG5cbiAgY29uc3QgaW5jb21wbGV0ZUJvb2tpbmcgPSBnZXRBZHZpY2VGcm9tRXJyb3JEZXRhaWxzPEdldFNuYXBzaG90QVBJRXJyb3JBZHZpY2UgfCBJbml0U25hcHNob3RBUElFcnJvckFkdmljZT4oXG4gICAgZXJyb3IsXG4gICAgSW5pdFNuYXBzaG90QVBJRXJyb3JBZHZpY2UuSU5DT01QTEVURV9CT09LSU5HLFxuICApXG5cbiAgY29uc3QgbWlzc2luZ0JpbGxpbmdBZGRyZXNzID0gZ2V0QWR2aWNlRnJvbUVycm9yRGV0YWlsczxHZXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlIHwgSW5pdFNuYXBzaG90QVBJRXJyb3JBZHZpY2U+KFxuICAgIGVycm9yLFxuICAgIFtJbml0U25hcHNob3RBUElFcnJvckFkdmljZS5QQVlNRU5UX01JU1NJTkdfQklMTElOR19BRERSRVNTLCBJbml0U25hcHNob3RBUElFcnJvckFkdmljZS5QQVlNRU5UX0lOVkFMSURfVElUTEVdLFxuICApXG5cbiAgY29uc3QgbWlzc2luZ0N1c3RvbWVyRGV0YWlscyA9IGdldEFkdmljZUZyb21FcnJvckRldGFpbHM8R2V0U25hcHNob3RBUElFcnJvckFkdmljZSB8IEluaXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlPihcbiAgICBlcnJvcixcbiAgICBJbml0U25hcHNob3RBUElFcnJvckFkdmljZS5QQVlNRU5UX01JU1NJTkdfQ1VTVE9NRVJfREVUQUlMUyxcbiAgKVxuXG4gIGlmIChtaXNzaW5nQmlsbGluZ0FkZHJlc3MpIHtcbiAgICBzdGF0ZS5taXNzaW5nQmlsbGluZ0FkZHJlc3MgPSB0cnVlXG4gICAgc3RhdGUuY3VzdG9tZXJJZCA9IG1pc3NpbmdCaWxsaW5nQWRkcmVzcy5jdXN0b21lcklkID8/IG51bGxcbiAgfVxuXG4gIGNvbnN0IHN0b2NrSG9sZEZhaWxlZEFsbG9jYXRpb24gPSBnZXRBZHZpY2VGcm9tRXJyb3JEZXRhaWxzPEdldFNuYXBzaG90QVBJRXJyb3JBZHZpY2UgfCBJbml0U25hcHNob3RBUElFcnJvckFkdmljZT4oXG4gICAgZXJyb3IsXG4gICAgSW5pdFNuYXBzaG90QVBJRXJyb3JBZHZpY2UuU1RPQ0tfSE9MRF9GQUlMRURfQUxMT0NBVElPTixcbiAgKVxuXG4gIGlmIChzdG9ja0hvbGRGYWlsZWRBbGxvY2F0aW9uKSB7XG4gICAgc3RhdGUuc3RvY2tIb2xkU3RhdHVzID0gU3RvY2tIb2xkU3RhdHVzLkZBSUxFRFxuICB9XG5cbiAgaWYgKG1pc3NpbmdDdXN0b21lckRldGFpbHMpIHtcbiAgICBzdGF0ZS5taXNzaW5nQ3VzdG9tZXJEZXRhaWxzID0gdHJ1ZVxuICAgIHN0YXRlLmN1c3RvbWVySWQgPSBtaXNzaW5nQ3VzdG9tZXJEZXRhaWxzLmN1c3RvbWVySWQgPz8gbnVsbFxuICB9XG5cbiAgaWYgKGluY29tcGxldGVCb29raW5nKSB7XG4gICAgc3RhdGUuaW5jb21wbGV0ZUJvb2tpbmcgPSB0cnVlXG4gIH1cbn0gKi9cblxuLyoqXG4gKiBTYXZlcyB0aGUgSUQgaW50byBzdGF0ZSB3aGVuIGZldGNoaW5nIHRoZSBzbmFwc2hvdC5cbiAqXG4gKiBUT0RPIGNvbWUgdXAgd2l0aCBhIGJldHRlciB3YXkgdGhhbiBkdXBsaWNhdGluZyB0aGlzIGZvciBHRVRfU1RPQ0tfSE9MRF9JTkZPXG4gKiBhbmQgR0VUX0NPTExFQ1RJT05fU05BUFNIT1QuIElkZWFsbHkgaXQgc2hvdWxkIGFsbCBnbyB0aHJvdWdoIGEgc2luZ2xlIGFjdGlvbi5cbiAqL1xuLyogY29uc3Qgc2V0R2V0dGluZyA9IChzdGF0ZTogTWV0YVN0YXRlLCB7IHBheWxvYWQgfTogeyBwYXlsb2FkOiBHZXRDb2xsZWN0aW9uU25hcHNob3RBY3Rpb25QYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUubG9hZGluZyA9IHRydWVcbiAgc3RhdGUuZXJyb3IgPSBmYWxzZVxuICBzdGF0ZS5pZCA9IHBheWxvYWQuaWRcbn0gKi9cblxuLyoqXG4gKiBGb3IgZGVsaXZlcnkgb3JkZXJzLCB0aGUgQVBJIGNhbiBzZW5kIHVzIGVpdGhlciBIRCBvciBERUxJVkVSWS4gRnJvbSBhIHVzZXJcbiAqIHBvaW50IG9mIHZpZXcgdGhlcmUncyBubyBkaWZmZXJlbmNlLCBzbyB3ZSBqdXN0IGNvbnZlcnQgSEQgdG8gREVMSVZFUlkuXG4gKi9cbi8vY29uc3QgY2xlYW5GdWxmaWxtZW50VHlwZSA9ICh0eXBlOiBGdWxmaWxtZW50VHlwZSkgPT4gKHR5cGUgPT09IEZ1bGZpbG1lbnRUeXBlLkhEID8gRnVsZmlsbWVudFR5cGUuREVMSVZFUlkgOiB0eXBlKVxuXG5jb25zdCBtZXRhUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT5cbiAgYnVpbGRlclxuICAgIC5hZGRDYXNlKElOSVRfVVNFUl9JTkZPX1BBR0UsICgpID0+IHsgfSlcblxuKVxuXG5leHBvcnQgZGVmYXVsdCBtZXRhUmVkdWNlclxuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB7IEdFVF9XQUxMRVRfU1VDQ0VTUywgR0VUX1dBTExFVF9GQUlMVVJFIH0gZnJvbSAnLi4vLi4vYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2F2ZWRQYXltZW50TWV0aG9kczogW10sXG4gIGVycm9yOiBmYWxzZSxcbiAgc3RhdHVzOiAnSURMRScsXG4gIGRhdGFjYXNoTWlncmF0aW9uQWxlcnQ6IHVuZGVmaW5lZCxcbn1cblxuY29uc3Qgd2FsbGV0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT5cbiAgYnVpbGRlclxuICAgIC5hZGRDYXNlKEdFVF9XQUxMRVRfU1VDQ0VTUywgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3RhdGUuZXJyb3IgPSBmYWxzZVxuICAgICAgc3RhdGUuc3RhdHVzID0gJ1N0YXR1cy5yZXNvbHZlZCdcbiAgICB9KVxuICAgIC5hZGRDYXNlKEdFVF9XQUxMRVRfRkFJTFVSRSwgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5zdGF0dXMgPSAnU3RhdHVzLnJlamVjdGVkJ1xuICAgICAgc3RhdGUuZXJyb3IgPSB0cnVlXG4gICAgfSlcbilcblxuZXhwb3J0IGRlZmF1bHQgd2FsbGV0UmVkdWNlclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQge1xuICB3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhXG59IGZyb20gJy4vbWV0YS9tZXRhU2FnYSdcblxuXG4vLyBXZSBvbmx5IHdhbnQgdG8gd2F0Y2ggdGhlICd3YXRjaGVyJyBzYWdhc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3QoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhKSxcbiAgXSlcbn1cbiIsImltcG9ydCB7XG4gIHRha2VMYXRlc3QsXG4gIGZvcmssXG59IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBJTklUX1VTRVJfSU5GT19QQUdFIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyJztcbmltcG9ydCB7IGdldFdhbGxldFNhZ2EgfSBmcm9tICcuLi93YWxsZXQvd2FsbGV0U2FnYSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBpbml0VXNlckluZm9QYWdlU2FnYShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBwYXlsb2FkOiB7IGNvb2tpZSB9LFxuICAgIH0gPSBhY3Rpb247XG5cbiAgICAvL290aGVyIGVzc2VudGlhbCBhY3Rpb24gb24gbG9hZCBwYWdlIHRob3NlIGNhbGwgYXJlIGJhc2VkIG9uIGNvb2tpZSBhdXRob3JpemF0aW9uXG5cbiAgICBjb25zb2xlLmxvZygnZ2V0IHcgd2FsbGV0IHNhZ2EgY2FsbGVkICEhISB3aXRoIGNvb2tpZScsIGNvb2tpZSlcbiAgICB5aWVsZCBmb3JrKGdldFdhbGxldFNhZ2EsIGNvb2tpZSlcblxuXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UsIHN0YXR1cyB9ID0gZXJyb3IgfHwge307XG4gICAgTG9nZ2VyLmVycm9yKHtcbiAgICAgIG5hbWU6ICdpbml0VXNlckluZm9QYWdlU2FnYScsXG4gICAgICBtc2c6ICdFcnJvciBwcmVwYXJpbmcgZm9yIGNoZWNrb3V0JyxcbiAgICAgIGRldGFpbDogbWVzc2FnZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIC8vYm9keSxcbiAgICB9KTtcblxuICAgIC8veWllbGQgcHV0KFBSRVBBUkVfRk9SX0NIRUNLT1VUX0ZBSUxVUkUoeyBlcnJvciB9KSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KElOSVRfVVNFUl9JTkZPX1BBR0UsIGluaXRVc2VySW5mb1BhZ2VTYWdhKTtcbn1cbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IEdFVF9XQUxMRVRfU1VDQ0VTUywgR0VUX1dBTExFVF9GQUlMVVJFIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgYXBpLCB7IGNoZWNrUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9hcGknO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXInO1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldFdhbGxldFNhZ2EoY29va2llKSB7XG4gIHRyeSB7XG4gICAgLyogIGNvbnN0IHtcbiAgICAgICBjdXN0b21lcjogeyBpZCA9IDMzMzMgfSxcbiAgICAgfSA9IHlpZWxkIHNlbGVjdCgpOyAqL1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFwaS5nZXRXYWxsZXQsICc0MzUzNScsIGNvb2tpZSk7XG4gICAgY29uc3Qgd2FsbGV0ID0geWllbGQgY2FsbChjaGVja1Jlc3BvbnNlLCByZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coJ3dhbGxldCcsIHdhbGxldClcbiAgICB5aWVsZCBwdXQoR0VUX1dBTExFVF9TVUNDRVNTKHdhbGxldCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgc3RhdHVzLCBib2R5ID0ge30gfSA9IGVycm9yO1xuICAgIExvZ2dlci5lcnJvcih7XG4gICAgICBuYW1lOiAnZ2V0V2FsbGV0U2FnYScsXG4gICAgICBtc2c6ICdFcnJvciBnZXR0aW5nIHdhbGxldCcsXG4gICAgICBkZXRhaWw6IG1lc3NhZ2UsXG4gICAgICBzdGF0dXMsXG4gICAgICBib2R5LFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dChHRVRfV0FMTEVUX0ZBSUxVUkUoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCBwcm94eSBmcm9tICdleHByZXNzLWh0dHAtcHJveHknO1xuXG5pbXBvcnQgeyBuY29uZiB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9lbnZjb25maWcvZW52Q29uZmlnJztcblxuY29uc3QgaXNTdHViID1cbiAgbmNvbmYuZ2V0KCdOT0RFX0VOVicpID09PSAnc3R1YicgfHwgbmNvbmYuZ2V0KCdFTlZfQ09ORklHJykgPT09ICdyZW1vdGVTdHViJztcblxuZXhwb3J0IGNvbnN0IHJlY2VpcHRTZXJ2aWNlUHJveHkgPSBwcm94eShuY29uZi5nZXQoJ1JFQ0VJUFRfQVBJJyksIHtcbiAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+IHVybC5wYXJzZShyZXEudXJsKS5wYXRoLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjaGVja291dFNlcnZpY2VQcm94eSA9IHByb3h5KG5jb25mLmdldCgnR0FURVdBWV9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gYC9jaGVja291dC1hcGktdjIke3VybC5wYXJzZShyZXEudXJsKS5wYXRofWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1hcmtldGluZ1ByZWZlcmVuY2VTZXJ2aWNlUHJveHkgPSBwcm94eShcbiAgbmNvbmYuZ2V0KCdNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEknKSxcbiAge1xuICAgIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocmVxKSA9PiBgL2NwbS9jb25zZW50cyR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGh9YCxcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRTZXJ2aWNlUHJveHkgPSBwcm94eShuY29uZi5nZXQoJ0FDQ09VTlRfQVBJJyksIHtcbiAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+IGAvYWNjb3VudC1hcGkke3VybC5wYXJzZShyZXEudXJsKS5wYXRofWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IHdjc1Byb3h5ID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChcbiAgICB1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUgPT09ICcvRG9Mb29rdXBBZGRyZXNzJyB8fFxuICAgIHVybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZSA9PT0gJy9Ucm9sbGV5WW91ckRldGFpbHMnXG4gICkge1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcHJveHkobmNvbmYuZ2V0KCdXQ1NfQVBJJyksIHtcbiAgICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHByb3h5UmVxKSA9PlxuICAgICAgYC93ZWJhcHAvd2NzL3N0b3Jlcy9zZXJ2bGV0JHt1cmwucGFyc2UocHJveHlSZXEudXJsKS5wYXRofWAsXG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZWFsaXVtUHJveHkgPSBwcm94eSgnaHR0cHM6Ly90YWdzLnRpcWNkbi5jb20nLCB7XG4gIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocmVxKSA9PlxuICAgIGAvdXRhZy9hcmdvcy8ke2dldFRlYWxpdW1CcmFuZChyZXEuYnJhbmQpfS8ke2dldFRlYWxpdW1FbnYoKX0vJHtcbiAgICAgIHVybC5wYXJzZShyZXEudXJsKS5wYXRoXG4gICAgfWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0dWJEYXNoYm9hcmRQcm94eSA9IHByb3h5KG5jb25mLmdldCgnR0FURVdBWV9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdQUk9YWSA9PT4gcmVxLnVybCcsIHJlcS51cmwpO1xuICAgIHJldHVybiB1cmwucGFyc2UocmVxLnVybCkucGF0aDtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3R1YkVuZHBvaW50UHJveHkgPSBwcm94eShuY29uZi5nZXQoJ0dBVEVXQVlfQVBJJyksIHtcbiAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+IGAvcGF5bWVudC1zdHViJHt1cmwucGFyc2UocmVxLnVybCkucGF0aH1gLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzdHViUHJveHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmV0dXJuIHByb3h5KG5jb25mLmdldCgnR0FURVdBWV9BUEknKSwge1xuICAgIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocHJveHlSZXEpID0+IHtcbiAgICAgIGNvbnN0IHBhdGggPSBwcm94eVJlcS5vcmlnaW5hbFVybC5zcGxpdCgnL3Byb3h5JylbMV07XG4gICAgICByZXR1cm4gYCR7cGF0aH1gO1xuICAgIH0sXG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0R2F0ZXdheVByb3h5ID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChpc1N0dWIpIHtcbiAgICByZXR1cm4gc3R1YlByb3h5KHJlcSwgcmVzLCBuZXh0KTtcbiAgfVxuXG4gIGlmICghcmVxLnZhdWx0LnBkcC51cmwgfHwgIXJlcS52YXVsdC5wZHAua2V5KSB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5zZW5kKCdNaXNzaW5nIGNvbmZpZy4gUGxlYXNlIGNoZWNrIHRoZSBWYXVsdCBjb25maWcgaXMgd29ya2luZy4nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgb3JpZ2luLCBwYXRobmFtZSB9ID0gbmV3IFVSTChyZXEudmF1bHQucGRwLnVybCk7XG5cbiAgLy8gUHJveHkgdG8gcHJvZHVjdC1hcGlcbiAgcmV0dXJuIHByb3h5KG9yaWdpbiwge1xuICAgIHByb3h5UmVxT3B0RGVjb3JhdG9yOiAocHJveHlSZXFPcHRzKSA9PiB7XG4gICAgICBwcm94eVJlcU9wdHMuaGVhZGVycy5hY2NlcHQgPSAnYXBwbGljYXRpb24vdm5kLmFyZ29zLXByb2R1Y3QudjEuNStqc29uJztcbiAgICAgIHByb3h5UmVxT3B0cy5oZWFkZXJzWyd4LWFwaS1rZXknXSA9IHJlcS52YXVsdC5wZHAua2V5O1xuICAgICAgaWYgKG5jb25mLmdldCgnRU5WX0NPTkZJRycpICE9PSAncmVtb3RlU3R1YicpXG4gICAgICAgIGRlbGV0ZSBwcm94eVJlcU9wdHMuaGVhZGVycy5jb29raWU7XG4gICAgICByZXR1cm4gcHJveHlSZXFPcHRzO1xuICAgIH0sXG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChwcm94eVJlcSkgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdHNQYXRoID0gcHJveHlSZXEub3JpZ2luYWxVcmwuc3BsaXQoJy9wcm9kdWN0LWdhdGV3YXknKVsxXTtcblxuICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfSR7cHJvZHVjdHNQYXRofWA7XG4gICAgfSxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25NYW5hZ2VyUHJveHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGlzU3R1Yikge1xuICAgIHJldHVybiBzdHViUHJveHkocmVxLCByZXMsIG5leHQpO1xuICB9XG5cbiAgLy8gUHJveHkgdG8gU2Vzc2lvbiBNYW5hZ2VyXG4gIHJldHVybiBwcm94eShuY29uZi5nZXQoJ1NFU1NJT05fTUFOQUdFUl9BUEknKSwge1xuICAgIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocHJveHlSZXEpID0+IHtcbiAgICAgIHJldHVybiBwcm94eVJlcS5vcmlnaW5hbFVybC5zcGxpdCgnL3Nlc3Npb24tbWFuYWdlcicpWzFdO1xuICAgIH0sXG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXNobGlzdE1vY2sgPSAocmVxLCByZXMpID0+IHtcbiAgcmVzLmpzb24oe1xuICAgIGRhdGE6IHtcbiAgICAgIHdpc2hsaXN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgcGFydE51bWJlcjogJzgwODcxNTknIH0sXG4gICAgICAgICAgICB7IHBhcnROdW1iZXI6ICc4NTU5MTk5JyB9LFxuICAgICAgICAgICAgeyBwYXJ0TnVtYmVyOiAnODI2ODQ5NycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBSZWR1eFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG4gaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vLi4vc2hhcmVkL3JvdXRlc1wiO1xuaW1wb3J0IHsgcHJvY2Vzc1JvdXRlcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9yb3V0ZXMnO1xuaW1wb3J0IHsgZ2V0SnNGaWxlcyB9IGZyb20gXCIuLi9zZXJ2ZXJSZW5kZXJpbmdIZWxwZXJzXCI7IFxuXG5cblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuY29sb3IoXCJ5ZWxsb3dcIikuYm9sZCgpLmxvZyhcInJlcXVlc3RlZCByZXEudXJsXCIsIHJlcS51cmwpO1xuICAvL3RoaXMgZ29lcyB0aHJvdWdoIGFsbCByb3V0ZXMgaW4gYXBwbGljYXRpb247XG4gIGNvbnN0IGFjdGl2ZVJvdXRlID1cbiAgICByb3V0ZXMuZmluZCgocm91dGUsIGkpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xuXG4gIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwiYWN0aXZlUm91dGVcIiwgYWN0aXZlUm91dGUpO1xuXG4gIGNvbnNvbGUubG9nKCdmaW5lJylcbiAgLyoqKioqKioqIFJlZHV4IHNlcnZlciBzZXR1cCAqKioqKiovXG5cbiAgLy8gc2V0IGluaXRpYWwgc3RvcmUgdG8gYmUgcGFzc2VkIHRvIGNsaWVudCBpbiB3aW5kb3cuX2RhdGFcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1ldGE6IHt9LFxuICB9O1xuXG4gIC8vVSBjYW4gbm90IHVzZSBCcm93c2VyUm91dGVyIGNhdXNlIHRoZSByb3V0ZXMgYXJlIHByb2Nlc3NlZCBvbiBzZXJ2ZXIgbm90IGEgY2xpZW50XG4gIGNvbnN0IG1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXM6IFtyZXEudXJsXSB9KTtcbiAgLy8gY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShtZW1vcnlIaXN0b3J5LCBpbml0aWFsU3RhdGUpO1xuXG4gIC8qKioqL1xuXG4gIC8vIFdhaXRzIGZvciBhc3luY2hyb25vdXMgYWN0aW9ucyBsaWtlIEFQSSBjYWxsc1xuICAvLyBiZWZvcmUgcmVuZGVyaW5nIHRoZSBIVE1MXG4gIC8vIHVuZGVmaW5lZCBpcyBhIHdheSBvZiBub3Qgc2V0dGluZyBhIHZhbHVlIGZvciB0aGUgZmlyc3QgcGFyYW0gaW4gdGhpcyBjYXNlXG4gIC8vIHByb2Nlc3NSb3V0ZXMocm91dGVzUHJvY2Vzc2luZyA9IHJvdXRlcyxzdG9yZSwgcmVxKSA9IHVuZGVmaW5lZCB3aWxsIGNhdXNlIHJvdXRlc1Byb2Nlc3NpbmcgPSByb3V0ZXMgc28gd2lsbCB0YWtlIGRlZmF1bHQgb2YgdGhlIGZ1bmN0aW9uXG4gIGNvbnN0IHdhaXRGb3JBc3luY0FjdGlvbnMgPSBbcHJvY2Vzc1JvdXRlcyhcbiAgICB1bmRlZmluZWQsXG4gICAgbWVtb3J5SGlzdG9yeSxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVxLFxuICAgIHJlc1xuICApXTtcbiAgY29uc29sZS5sb2coJ3dhaXRGb3JBc3luY0FjdGlvbnMnKVxuXG4gICAgUHJvbWlzZS5hbGwod2FpdEZvckFzeW5jQWN0aW9ucylcbiAgICAvLyBQcm9taXNlIGFsbCByZXNvbHZlIGFsbCBwcm9taXNlcyByZXN1bHQgaW4gYXJyYXkgc28gW3N0b3JlXVxuICAgIC50aGVuKChbc3RvcmVdKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgYSBjb250ZXh0IGZvciA8U3RhdGljUm91dGVyPiwgd2hpY2ggd2lsbCBhbGxvdyB1cyB0b1xuICAgICAgLy8gcXVlcnkgZm9yIHRoZSByZXN1bHRzIG9mIHRoZSByZW5kZXIuXG4gICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdG9yZScsIHN0b3JlLmdldFN0YXRlKCkpXG5cbiAgICAgIC8vIEFzIHdlIGFyZSBjb2RlIHNwbGl0dGluZywgd2UgbmVlZCB0byBmaW5kIG91dCB3aGljaCBjaHVua3NcbiAgICAgIC8vIHRoZSBTU1IgdXNlcyBzbyB0aGUgY2xpZW50IGNhbiB1c2UgdGhlbS4gPExvYWRhYmxlLkNhcHR1cmU+XG4gICAgICAvLyB0YWtlcyBhIHJlcG9ydCBwcm9wIHdoaWNoIGlzIGNhbGxlZCB3aGVuZXZlciBhIGNodW5rIGlzIHVzZWQuXG4gICAgICBjb25zdCBtb2R1bGVzID0gW107XG5cbiAgICAgIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpO1xuXG4gICAgICAvLyBSZW5kZXIgdGhlIHBhcnQgb2YgdGhlIGFwcCB0aGF0IGdldHMgaHlkcmF0ZWQgb24gdGhlIGNsaWVudFxuICAgICAgY29uc3QgYXBwSHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8TG9hZGFibGUuQ2FwdHVyZSByZXBvcnQ9eyhtb2R1bGVOYW1lKSA9PiBtb2R1bGVzLnB1c2gobW9kdWxlTmFtZSl9PlxuICAgICAgICAgIDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgICAgPC9SZWR1eFByb3ZpZGVyPlxuICAgICAgICA8L0xvYWRhYmxlLkNhcHR1cmU+XG4gICAgICApO1xuXG4gICAgICBjb25zdCBCb2R5Q29udGVudEFuZFNjcmlwdHMgPSAoeyBjbGllbnQsIG1vZHVsZXNDaHVua3MgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD0nYXBwJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNsaWVudCB9fSAvPlxuICAgICAgICAgICAge2dldEpzRmlsZXMobW9kdWxlc0NodW5rcyl9XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2VydmVySHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8Qm9keUNvbnRlbnRBbmRTY3JpcHRzIGNsaWVudD17YXBwSHRtbH0gbW9kdWxlc0NodW5rcz17bW9kdWxlc30gLz5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XG4gICAgICAgICAgPCEtLSB0aGlzIGhhcyBiZWVuIGdlbmVyYXRlZCBieSBjb25maWcvY2xpZW50L3dlYnBhY2suZGV2LmNvbmZpZyAtLT5cbiAgICAgICAgICA8c2NyaXB0PndpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoe30pfTwvc2NyaXB0PlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLi9zdHlsZS5jc3NcIiAvPlxuXG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAke3NlcnZlckh0bWx9XG4gICAgICA8L2h0bWw+XG4gICAgICBgKTtcbiAgICB9KVxuICAgIC5jYXRjaChuZXh0KTtcbn07IFxuXG5leHBvcnQgZGVmYXVsdCBzc3JNaWRkbGV3YXJlO1xuIiwiLyoqXG4gKiBUSElTIElTIDogWU9VUiBBUFAgTk9ERS5qcyBTRVJWRVJcbiAqXG4gKiovXG5cblxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5cbi8vIE11c3QgYmUgaW1wb3J0ZWQgZmlyc3Qgc28gdGhhdCBlbnYgdmFyaWFibGVzIGFyZSBjb3JyZWN0bHkgc2V0XG5pbXBvcnQgeyBuY29uZiB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnZjb25maWcvZW52Q29uZmlnJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9vcmRlclxuaW1wb3J0IHNzck1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkZGxld2FyZS9zc3JcIjtcbmltcG9ydCB7XG4gIHN0dWJEYXNoYm9hcmRQcm94eSxcbiAgc3R1YkVuZHBvaW50UHJveHksXG4gIGFjY291bnRTZXJ2aWNlUHJveHksXG59IGZyb20gJy4vbWlkZGxld2FyZS9wcm94eSdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyAtLS0tIHByb3hpZXMgLS0tLS1cblxuYXBwLnVzZSgnL2FjY291bnQtYXBpJywgYWNjb3VudFNlcnZpY2VQcm94eSlcblxuLy8gRGFzaGJvYXJkIHN0dWJzXG5jb25zdCBlbnZDb25maWcgPSBuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSB8fCBuY29uZi5nZXQoJ05PREVfRU5WJylcbmlmIChlbnZDb25maWcgPT09ICdzdHViJyB8fCBlbnZDb25maWcgPT09ICdyZW1vdGVTdHViJykge1xuXG4gIC8vYWNjZXNzIGluZGV4IHBhZ2Ugb2Ygc3R1YnMgMzAxMSBvbiAzMTAwL2Rhc2hib2FyZFxuICBhcHAudXNlKCcvZGFzaGJvYXJkJywgc3R1YkRhc2hib2FyZFByb3h5KVxuXG4gIC8vYWNjZXNzIC9wYXltZW50LXN0dWIvIHBhZ2Ugb2Ygc3R1YnMgMzAxMSBvbiAzMTAwL3BheW1lbnQtc3R1YiBcbiAgLy9wYXltZW50LXN0dWIgaXMgdXNlZCB0byBtb2RpZnkgZGFzaGJvYXJkICxcbiAgYXBwLnVzZSgnL3BheW1lbnQtc3R1YicsIHN0dWJFbmRwb2ludFByb3h5KVxufVxuXG4vLyAtLS0tIGVuZCBvZiBwcm94aWVzIC0tLS0tXG5cblxuLy8tLSBzdGF0aWMgYXNzZXRzIG9uIGJhY2stZW5kIHNlcnZlclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi4vc3RhdGljJykpXG5cbi8vIFJlbmRlcnMgdGhlIGFwcFxuYXBwLnVzZShzc3JNaWRkbGV3YXJlKTtcblxuY29uc3QgUE9SVCA9IDMzODk7XG4vLyBQcmVsb2FkIGFsbCB0aGUgY2h1bmtzIHRoZW4gc3RhcnQgdGhlIGFwcFxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xuICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgbm9kZSBzZXJ2ZXIgcnVubmluZyBvbjoke1BPUlR9YCk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuXG4vLyBHZXRzIGFsbCB0aGUgY2h1bmtlZCBKUyBmaWxlcyBhcyB3ZWxsIGFzIHRoZSBiYXNlICdjbGllbnQnIGZpbGUuICdjbGllbnQnXG4vLyBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIGxvYWRlZCBhcyBpdCBkZXBlbmRzIG9uIHRoZSBwcmV2IGZpbGVzLlxuXG50eXBlIFNjcmlwdFRhZ0tleXMgPSBQYXJ0aWFsPEhUTUxTY3JpcHRFbGVtZW50PjtcblxuLy90aGlzIGZpbGUgbmVlZHMgdG8gYmUgLnRzeCBub3QgdHMgY2F1c2UgaXQgcmV0dXJuIGh0bWwgZWxlbWVudCBcblxuXG5leHBvcnQgY29uc3QgZ2V0SnNGaWxlcyA9IChtb2R1bGVzID0gW10pOiBTY3JpcHRUYWdLZXlzW10gPT4ge1xuICBsZXQgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gY29uc29sZS5sb2coXCJjaHVuayBtb2R1bGVzOjo6XCIsIG1vZHVsZXMpO1xuICBbLi4ubW9kdWxlcywgXCJidW5kbGVcIl0uZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgZmlsZXMucHVzaChcbiAgICAgIGAke21vZHVsZSA9PT0gXCJidW5kbGVcIlxuICAgICAgICA/IC8vY2xpZW50L2J1bmRsZS5qcycgaGFzIHRvIG1hdGNoIG91dHB1dDogeyAuLi4sZmlsZW5hbWU6IFwiY2xpZW50L2J1bmRsZS5qc1wiLH0gZm9yIGRldiBzZXJ2ZXIgZGV2ZWxvcG1lbnRcbiAgICAgICAgXCIvY2xpZW50L2J1bmRsZVwiXG4gICAgICAgIDogYC9jbGllbnQvY2h1bmstJHttb2R1bGV9YFxuICAgICAgfS5qc2BcbiAgICApO1xuICB9KTtcblxuXG5cblxuICByZXR1cm4gZmlsZXMubWFwKChmaWxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBTY3JpcHRUYWdLZXlzID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgPHNjcmlwdCBzcmM9JHtmaWxlfT48L3NjcmlwdD46IGxvYWRpbmcuLi5gKTtcblxuICAgIHJldHVybiA8c2NyaXB0IGtleT17YHNjcmlwdDAke2luZGV4fWB9IHNyYz17ZmlsZX0gdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBkZWZlciBjaGFyU2V0PSd1dGYtOCc+PC9zY3JpcHQ+XG4gIH0pXG59XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhclJlcG9zIChsYW5ndWFnZSA9ICdhbGwnKSB7XG4gIGNvbnN0IGVuY29kZWRVUkkgPSBlbmNvZGVVUkkoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXN0YXJzOj4xK2xhbmd1YWdlOiR7bGFuZ3VhZ2V9JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZ0eXBlPVJlcG9zaXRvcmllc2ApXG5cbiAgcmV0dXJuIGZldGNoKGVuY29kZWRVUkkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgIC50aGVuKChyZXBvcykgPT4gcmVwb3MuaXRlbXMpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgTm9NYXRjaCBmcm9tIFwiLi9Ob01hdGNoXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtyb3V0ZXMubWFwKCh7IHBhdGgsIGV4YWN0LCBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBleGFjdD17ISFleGFjdH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ucmVzdH0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxSb3V0ZSByZW5kZXI9eyhwcm9wcykgPT4gPE5vTWF0Y2ggey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IHJlcG9zO1xuICAgIC8vX19pc0Jyb3dzZXJfXyBpZCBkZWZpbmVkIGluIHdlYnBhY2suY29uZmlnIGFzIGdsb2JhbFxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgICByZXBvcyA9IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBvcyA9IHRoaXMucHJvcHMuc3RhdGljQ29udGV4dC5kYXRhO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXBvcyxcbiAgICAgIGxvYWRpbmc6IHJlcG9zID8gZmFsc2UgOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLmZldGNoUmVwb3MgPSB0aGlzLmZldGNoUmVwb3MuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucmVwb3MpIHtcbiAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2UHJvcHMubWF0Y2gucGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgZmV0Y2hSZXBvcyhsYW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICB0aGlzLnByb3BzLmZldGNoSW5pdGlhbERhdGEobGFuZykudGhlbigocmVwb3MpID0+XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHJlcG9zLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcmVwb3MgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIDxwPkxPQURJTkc8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAge3JlcG9zLm1hcCgoeyBuYW1lLCBvd25lciwgc3RhcmdhemVyc19jb3VudCwgaHRtbF91cmwgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9IHN0eWxlPXt7IG1hcmdpbjogMzAgfX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+QHtvd25lci5sb2dpbn08L2xpPlxuICAgICAgICAgICAgICA8bGk+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2snXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZWNsYXJlIGEgbmV3IHN0YXRlIHZhcmlhYmxlLCB3aGljaCB3ZSdsbCBjYWxsIFwiY291bnRcIlxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5QYXNzd29yZCBpbnB1dCBzdGVuZ3RoIHdlYnBhY2sgbGFvZCBsaWJyYXlyeTwvaDM+XG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPlxuICAgICAgPHA+WW91IGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2snXG5jb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcblxuICBjb25zdCBoYW5kbGVQb3N0UmVxdWVzdCA9IGFzeW5jICgpID0+IHtcbiAgICAvL3RoaXMgd2lsbCBoYXZlIHRvIGhhbmRsZSBkaWZmZXJlbnQgZW52IGFzIFVBVDIgYW5kIFBST0QgYW5kIERFVlxuICAgIC8vb25seSBERVYgaGFyZGNvZGVkXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9sb2dpbic7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIGluY2x1ZGUgY29va2llcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAvLyBBZGQgYW55IGFkZGl0aW9uYWwgaGVhZGVycyBhcyBuZWVkZWRcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGlmIG5lZWRlZFxuICAgICAgLy9jb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQb3N0UmVxdWVzdH0+TWFrZSBQT1NUIFJlcXVlc3Q8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgcGFyYW06IFwiYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgIHBhcmFtOiBcImphdmFzY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUnVieVwiLFxuICAgICAgcGFyYW06IFwicnVieVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlB5dGhvblwiLFxuICAgICAgcGFyYW06IFwicHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgIHBhcmFtOiBcImphdmFcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwYXJhbX0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fVxuICAgICAgICAgICAgdG89e2AvcG9wdWxhci8ke3BhcmFtfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSB0bz17YC9ndWVzdGB9PlxuICAgICAgICAgIHsnY2h1bmsgbG9hZGVkIEd1ZXN0Q2hlY2tvdXRDb250YWluZXInfVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gdG89e2AvdXNlckluZm9gfT5cbiAgICAgICAgICB7J3VzZXIgcHJvdGVjdGVkIHJvdXRlIFVzZXJTZWNyZXRJbmZvQ29udGFpbmVyJ31cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlSGlzdG9yeSBhbGxvd3MgdG8gc2V0IHF1ZXJ5IHBhcmFtcyBieSBoaXN0b3J5LnB1c2gge3NlYXJjaDpzdHJpbmd9XG4vLyB1c2VMb2NhdGlvbiBhbGxvd3MgdG8gZ2V0IHF1ZXJ5IHBhcmFtcyBnZXQgc2VhcmNoIG9iamVjdCBhbmQgZG8gc29tZXRoaW5nIHdpdGggdGhlbVxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXBkYXRlUXVlcnlQcm9wZXJ0eSwgcmVhZFF1ZXJ5UHJvcGVydHksIGNyZWF0ZVF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZ1RvT2JqZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlck1ldGhvZHMnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGZ1bmN0aW9uIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgc2VhcmNoOiBxdWVyeVN0cmluZ1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGdldCB0aGUgc2VhcmNoIChxdWVyeSBzdHJpbmcpIGZyb20gdGhlIGxvY2F0aW9uXG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgLy8gMSBpZiBzZWFyY2ggb2JqZWN0IGV4aXN0cyB0aGVuIGNvbnZlcnQgc2VhcmNoIHN0cmluZyB0byBvYmplY3RcbiAgY29uc3QgcXVlcnlQYXJhbXNPYmogPSB1c2VNZW1vKCgpID0+IHF1ZXJ5U3RyaW5nVG9PYmplY3Qoc2VhcmNoKSwgW3NlYXJjaF0pO1xuXG4gIC8vIDIuMSB1cGRhdGUgbG9jYWwgc3RhdGUgZnJvbSB1cmwgcGFyYW1zIGlmIHBhcmFtcyBleGlzdHMgXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUocmVhZFF1ZXJ5UHJvcGVydHkoJ2xhbmd1YWdlJywgcXVlcnlQYXJhbXNPYmopIHx8IFwiXCIpXG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZShyZWFkUXVlcnlQcm9wZXJ0eSgnYWdlJywgcXVlcnlQYXJhbXNPYmopIHx8IFwiXCIpXG5cbiAgLy8gMi4yIHVwZGF0ZSBsb2NhbCBzdGF0ZSBiYXNlZCBvbiB1c2VyIHJhZGlvIGJ1dHRvbiBjbGljayBcbiAgY29uc3Qgb25WYWx1ZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXRcblxuICAgIC8vdXBkYXRlIHVybCBxdWVyeSBwYXJhbVxuICAgIGlmIChuYW1lID09PSAnZmF2X2xhbmd1YWdlJykge1xuICAgICAgLy91cGRhdGUgc3RhdGVcbiAgICAgIHNldExhbmd1YWdlKHZhbHVlKVxuICAgICAgY29uc3QgdXBkYXRlUXVlcnlPYmplY3QgPSB1cGRhdGVRdWVyeVByb3BlcnR5KCdsYW5ndWFnZScsIHZhbHVlLCBxdWVyeVBhcmFtc09iailcbiAgICAgIC8vdXBkYXRlIHVybCB3aXRoIG5ldyBzdHJpbmcgcXVlcnkgcHVzaGVkIHRvIGhpc3RvcnkgXG4gICAgICBzZXRRdWVyeVBhcmFtcyhjcmVhdGVRdWVyeVN0cmluZyh1cGRhdGVRdWVyeU9iamVjdCkpXG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnZmF2X2FnZScpIHtcbiAgICAgIC8vdXBkYXRlIHN0YXRlXG4gICAgICBzZXRBZ2UodmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVRdWVyeU9iamVjdCA9IHVwZGF0ZVF1ZXJ5UHJvcGVydHkoJ2FnZScsIHZhbHVlLCBxdWVyeVBhcmFtc09iailcbiAgICAgIC8vdXBkYXRlIHVybCB3aXRoIG5ldyBzdHJpbmcgcXVlcnkgcHVzaGVkIHRvIGhpc3RvcnkgXG4gICAgICBzZXRRdWVyeVBhcmFtcyhjcmVhdGVRdWVyeVN0cmluZyh1cGRhdGVRdWVyeU9iamVjdCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkhUTUxcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImh0bWxcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJIVE1MXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJodG1sXCI+SFRNTDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXtsYW5ndWFnZSA9PT0gXCJDU1NcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImNzc1wiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkNTU1wiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3NzXCI+Q1NTPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkphdmFTY3JpcHRcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImphdmFzY3JpcHRcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJKYXZhU2NyaXB0XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJqYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPnRlbGwgdXMgeW91ciBhZ2UgYnJhY2tldCBpZiB5b3UgZG9uYHQgbWluZDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXthZ2UgPT09IFwiYmVsb3cxOFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXZfYWdlXCIgdmFsdWU9XCJiZWxvdzE4XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJodG1sXCI+YmVsb3cgMTg8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17YWdlID09PSBcImFib3ZlMThcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmF2X2FnZVwiIHZhbHVlPVwiYWJvdmUxOFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3NzXCI+YWJvdmUgMTg8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtID5cbiAgKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IHNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zLCBnZXRQYXNzd29yZFN0cmVuZ3RoIH0gZnJvbSAnLi4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZFN0cmVuZ3RoJ1xuXG5cblxuaW50ZXJmYWNlIFBhc3N3b3JkSW5wdXRQcm9wcyB7XG4gICAgZW1haWw/OiBzdHJpbmdcbn1cblxuY29uc3QgUGFzc3dvcmRJbnB1dCA9ICh7XG4gICAgZW1haWwgPSAnJyxcbn06IFBhc3N3b3JkSW5wdXRQcm9wcykgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3N0cmVuZ3RoLCBzZXRTdHJlbmd0aF0gPSB1c2VTdGF0ZSgnJylcblxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZTogbmV3VmFsdWUgfSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICAgICAgc2V0U3RyZW5ndGgoZ2V0UGFzc3dvcmRTdHJlbmd0aChuZXdWYWx1ZSkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2V0T3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zKFtlbWFpbF0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0T3B0aW9ucygpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIHN0cmVuZ3RoOiA8c3Ryb25nIGRhdGEtdGVzdD0ncGFzc3dvcmQtaW5wdXQtc3RyZW5ndGgnPntzdHJlbmd0aH08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZElucHV0IiwiaW1wb3J0IHsgenhjdmJuLCB6eGN2Ym5PcHRpb25zIH0gZnJvbSAnQHp4Y3Zibi10cy9jb3JlJ1xuXG5leHBvcnQgY29uc3Qgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMgPSBhc3luYyAodXNlcklucHV0cz86IChzdHJpbmcgfCBudW1iZXIpW10pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB6eGN2Ym5Db21tb25QYWNrYWdlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwienhjdmJuQ29tbW9uUGFja2FnZVwiICovICdAenhjdmJuLXRzL2xhbmd1YWdlLWNvbW1vbicpXG4gICAgY29uc3QgenhjdmJuRW5QYWNrYWdlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwienhjdmJuRW5QYWNrYWdlXCIgKi8gJ0B6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW4nKVxuXG4gICAgenhjdmJuT3B0aW9ucy5zZXRPcHRpb25zKHtcbiAgICAgICAgZGljdGlvbmFyeToge1xuICAgICAgICAgICAgLi4uenhjdmJuQ29tbW9uUGFja2FnZS5kZWZhdWx0LmRpY3Rpb25hcnksXG4gICAgICAgICAgICAuLi56eGN2Ym5FblBhY2thZ2UuZGVmYXVsdC5kaWN0aW9uYXJ5LFxuICAgICAgICAgICAgdXNlcklucHV0czogdXNlcklucHV0cyB8fCBbXVxuICAgICAgICB9LFxuICAgICAgICBncmFwaHM6IHp4Y3ZibkNvbW1vblBhY2thZ2UuZGVmYXVsdC5hZGphY2VuY3lHcmFwaHMsXG4gICAgICAgIHRyYW5zbGF0aW9uczogenhjdmJuRW5QYWNrYWdlLmRlZmF1bHQudHJhbnNsYXRpb25zXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhc3N3b3JkU3RyZW5ndGggPSAocGFzc3dvcmQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFwYXNzd29yZCkgcmV0dXJuICcnXG5cbiAgICBjb25zdCB7IHNjb3JlIH0gPSB6eGN2Ym4ocGFzc3dvcmQpXG5cbiAgICAvLyB6eGN2Ym4gZ2l2ZXMgdXMgYW4gaW50ZWdlciBzY29yZSBvdXQgb2YgNCAoaW5jbHVkaW5nIDAgb3V0IG9mIDQpXG4gICAgc3dpdGNoIChzY29yZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAnV2VhaydcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gJ01lZGl1bSdcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdTdHJvbmcnXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHtcbiAgZ2V0TWV0YSxcbn0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzJ1xuXG5pbnRlcmZhY2UgR2V0U25hcHNob3RSZWRpcmVjdHNQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgR2V0U25hcHNob3RSZWRpcmVjdHM6IFJlYWN0LkZDPEdldFNuYXBzaG90UmVkaXJlY3RzUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKGdldE1ldGEpXG4gIC8vIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICAvKiBcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgJiYgZXJyb3Iuc3RhdHVzID09PSAnNDAwJykgey8vU3RhdHVzQ29kZS5VTkFVVEhPUklaRUQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVkaXJlY3RcbiAgICAgICAgICAgIHRvPXtgL2xvZ2luP3BhZ2VOYW1lPW1hbmRhdG9yeVByZXBheSZzdWNjZXNzVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH1gLFxuICAgICAgICAgICAgKX1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgXG4gICAgICAvL3JldHVybiA8UmVkaXJlY3QgdG89e2Vycm9yUGF0aH0gLz5cbiAgICB9ICovXG4gIHJldHVybiBjaGlsZHJlblxufVxuXG5leHBvcnQgZGVmYXVsdCBHZXRTbmFwc2hvdFJlZGlyZWN0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnXG5cblxuaW1wb3J0IHsgZ2V0TWV0YSB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycyc7XG5pbXBvcnQgR2V0U25hcHNob3RSZWRpcmVjdHMgZnJvbSAnLi4vR2V0U25hcHNob3RSZWRpcmVjdHMvR2V0U25hcHNob3RSZWRpcmVjdHMnXG5cbmltcG9ydCBVc2VyU2VjcmV0SW5mbyBmcm9tICcuLi8uLi9wYWdlcy9Vc2VyU2VjcmV0SW5mbydcbmltcG9ydCB7IElOSVRfVVNFUl9JTkZPX1BBR0UgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zJ1xuXG5jb25zdCBVc2VyU2VjcmV0SW5mb0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZygnLS0tLS0tcHJvcHMgaW4gVXNlclNlY3JldEluZm9Db250YWluZXItLS0tLS0tLScsIHByb3BzKTtcblxuICAvKlxuICAgICAgLy92YWxpZGF0aW9uIHRvIHNob3cgY2hpbGRyZW4gYmVsb3cgd2l0aCByZWRpcmVjdCBhbmQgZWFybHkgcmV0dXJuXG5cbiAgICAgIHRoaXMgc2hvdWxkIGhhcHBlbiBvbiBzZXJ2ZXItc2l0ZSwgYnV0IHRoZSBgcmVxYCBvYmplY3QgQ0FOIE5PVCBiZSBkaXJlY3RseSBhY2Nlc3MgaW4gY2xpZW50XG4gICAgICBiZWNhdXNlIHRoZXkgYXJlIHNlcGVyYXRlLiBUaGVyZWZvcmUgZGF0YSBoYXMgdG8gYmUgcGxhY2VzIGluIHJlZHV4IHN0b3JlIGFuZCB0aGVuIHJlYWQgaW4gY2xpZW50IFxuICAgICAgZm9yIGV4YW1wbGUgYnkgcmVkdXggc2VsZWN0b3JzXG4gICAgKi9cblxuICAvKiBjb25zdCB7IGVycm9yIH0gPSB1c2VTZWxlY3RvcihnZXRNZXRhKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpICYmIGVycm9yLnN0YXR1cyA9PT0gU3RhdHVzQ29kZS5VTkFVVEhPUklaRUQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWRpcmVjdFxuICAgICAgICAgIHRvPXtgL2xvZ2luP3BhZ2VOYW1lPW1hbmRhdG9yeVByZXBheSZzdWNjZXNzVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9YCxcbiAgICAgICAgICApfWB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17ZXJyb3JQYXRofSAvPlxuICB9ICovXG5cbiAgcmV0dXJuIChcbiAgICA8R2V0U25hcHNob3RSZWRpcmVjdHM+XG4gICAgICA8VXNlclNlY3JldEluZm8gLz5cbiAgICA8L0dldFNuYXBzaG90UmVkaXJlY3RzPlxuXG4gICk7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUUyBzZXR1cCBmb3IgcXVpY2sgcmVmZXJlbmNlXG5leHBvcnQgdHlwZSBEZWNvcmF0ZWRSZXF1ZXN0PFJvdXRlUGFyYW1zID0gdW5rbm93biwgUmVxUXVlcnkgPSB1bmtub3duPiA9IFJlcXVlc3Q8XG4gIFJvdXRlUGFyYW1zLFxuICB1bmtub3duLFxuICB1bmtub3duLFxuICBSZXFRdWVyeVxuPiAmIHt9XG5cbmludGVyZmFjZSBNYXRjaFBhcmFtcyB7XG4gIGlkOiBzdHJpbmdcbn1cbnR5cGUgR2V0SW5pdGlhbEFjdGlvbnNQYXJhbXM8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIFJvdXRlUGFyYW1zIGV4dGVuZHMgeyBbSyBpbiBrZXlvZiBSb3V0ZVBhcmFtc10/OiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IGFueSxcbiAgUmVxUXVlcnkgPSB1bmtub3duLFxuICA+ID0ge1xuICAgIHJlcTogRGVjb3JhdGVkUmVxdWVzdDxSb3V0ZVBhcmFtcywgUmVxUXVlcnk+XG4gICAgcmVzOiBSZXNwb25zZVxuICAgIG1hdGNoOiBtYXRjaDxSb3V0ZVBhcmFtcz5cbiAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuXG4vLyBnZXRJbml0aWFsQWN0aW9ucyBpcyBjYWxsZWQgb24gc2VydmVyLXNpdGVcbi8vIHRoZSByZWR1eCBzYWdhIGlzIGNhbGxlZCBvbiBzZXJ2ZXItc2l0ZSBmcm9tIGhlcmVcblVzZXJTZWNyZXRJbmZvQ29udGFpbmVyLmdldEluaXRpYWxBY3Rpb25zID0gKHsgcmVxLCBtYXRjaCB9OiBHZXRJbml0aWFsQWN0aW9uc1BhcmFtczxNYXRjaFBhcmFtcz4pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gbWF0Y2gucGFyYW1zXG4gIGNvbnN0IGNvb2tpZSA9IHJlcS5nZXQoJ2Nvb2tpZScpIHx8ICcnXG5cbiAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLUNPT0tJRS0tLS0tLS0tLS0nKVxuXG4gIHJldHVybiBJTklUX1VTRVJfSU5GT19QQUdFKHsgY29va2llIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWNyZXRJbmZvQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuXG5leHBvcnQgY29uc3QgR3Vlc3RDaGVja291dENvbnRhaW5lciA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PlxuICAgIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZ3Vlc3RDaGVja291dFwiLCB3ZWJwYWNrUHJlbG9hZDogMSAqLyBcIi4vR3Vlc3RDaGVja291dENvbnRhaW5lci9HdWVzdENoZWNrb3V0Q29udGFpbmVyXCJcbiAgICApLFxuICBsb2FkaW5nOiAoKSA9PiA8ZGl2PntcImxvYWRpbmcgY29tcG9uZW50XCJ9PC9kaXY+LFxuXG4gIG1vZHVsZXM6IFtcImd1ZXN0Q2hlY2tvdXRcIl0sXG59KTtcbi8vbW9kdWxlczogb3B0aW9uYWwgYXJyYXkgb2YgcGF0aCB0byBsb2FkIGRhdGEgb2JqZWN0IGZyb20gc2VydmVyIHN0YXRpYyBmaWxlcyBhcyBzb21lLmpzb24gdG8geW91ciBjb21wb25lbnRcbi8vbG9hZGluZzogY29tcG9uZW50IHRvIGRpc3BsYXkgb25jZSBpbXBvcnQgY29tcG9uZW50IGxvYWRzXG4iLCIvLyBjcmVhdGVzIGEgcXVlcnkgc3RyaW5nIGZyb20gcXVlcnkgb2JqZWN0XG5cblxuZXhwb3J0IGludGVyZmFjZSBxdWVyeU9iamVjdEludCB7XG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBkZXBhcnRtZW50Pzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRRdWVyeVByb3BlcnR5KHByb3BlcnR5OiBzdHJpbmcsIHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIHJldHVybiBxdWVyeU9iamVjdFtwcm9wZXJ0eV1cbn07XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXVlcnlQcm9wZXJ0eShwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICBsZXQgdXBkYXRlID0ge31cbiAgICBpZiAocHJvcGVydHkgJiYgdmFsdWUpIHVwZGF0ZSA9IHsgW3Byb3BlcnR5XTogdmFsdWUgfVxuICAgIHJldHVybiB7IC4uLnF1ZXJ5T2JqZWN0LCAuLi51cGRhdGUgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5U3RyaW5nKHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIGNvbnN0IHN0cjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcXVlcnlPYmplY3QpXG4gICAgICAgIGlmIChxdWVyeU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3ApfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeU9iamVjdFtwcm9wXSl9YCk7XG4gICAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xufTtcblxuLy8gdHVybnMgcXVlcnkgc3RyaW5nIGJhY2sgaW50byBhbiBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqZWN0KHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnlPYmplY3QgPSB7fVxuICAgIGNvbnN0IFVSTFNlYXJjaFBhcmFtc09iaiA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIFVSTFNlYXJjaFBhcmFtc09iaikge1xuICAgICAgICBxdWVyeU9iamVjdFtrZXldID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5T2JqZWN0O1xufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZXJTZWNyZXRJbmZvID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcy4uLi4uLicsIHByb3BzKTtcblxuICAvKlxuICAgICAgVGhpcyBwYWdlIHdpbGwgaGF2ZSBwYXJlbnQgY29udGFpbmVyIHRoYXQgd2lsbCBhdXRob3JpenRpb2luIGJlZm9yZSBpdCBpcyBldmVuIGF2YWlsYWJsZSBcbiAgICAgIHNpbmNlIGl0IHdpbGwgY29udGFpbiBzZW5zaXRpdmUgdXNlciBpbmZvXG4gICAgKi9cblxuICByZXR1cm4gPGRpdj57J3NlY3JldCBpbmZvIGlzIGhlcmUnfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWNyZXRJbmZvO1xuIiwiaW1wb3J0IHsgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBHcmlkIGZyb20gJy4vY29tcG9uZW50cy9HcmlkJztcbmltcG9ydCBQYXJhbXNRdWVyeSBmcm9tICcuL2NvbXBvbmVudHMvUGFyYW1zUXVlcnknO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgVXNlclNlY3JldEluZm9Db250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1VzZXJTZWNyZXRJbmZvQ29udGFpbmVyL1VzZXJTZWNyZXRJbmZvQ29udGFpbmVyJztcbmltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgR3Vlc3RDaGVja291dENvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVycyc7XG5cbi8vcmVkdXggYW5kIHNhZ2FzXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcXVlcnknLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogUGFyYW1zUXVlcnksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3VzZXJJbmZvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IFVzZXJTZWNyZXRJbmZvQ29udGFpbmVyLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9sb2dpbicsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBMb2dpbixcbiAgfSxcbiAge1xuICAgIHBhdGg6IGAvZ3Vlc3RgLFxuICAgIHBhZ2VUaXRsZTogJ0d1ZXN0IENoZWNrb3V0JyxcbiAgICBwYWdlRGVzY3JpcHRpb246ICcnLFxuICAgIHBhZ2VEYXRhVGVzdDogJ2d1ZXN0LWNoZWNrb3V0LXBhZ2UnLFxuICAgIGNvbXBvbmVudDogR3Vlc3RDaGVja291dENvbnRhaW5lcixcbiAgICByb3V0ZXM6IFtdLFxuICAgIGFuYWx5dGljczoge30sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3BvcHVsYXIvOmlkJyxcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSAnJykgPT4gZmV0Y2hQb3B1bGFyUmVwb3MocGF0aC5zcGxpdCgnLycpLnBvcCgpKSxcbiAgfSxcbl07XG5cbi8vIFJlY3Vyc2l2ZWx5IGZldGNoIGRhdGFcbmV4cG9ydCBjb25zdCBwcm9jZXNzUm91dGVzID0gKFxuICByb3V0ZXNQcm9jZXNzaW5nID0gcm91dGVzLFxuICBoaXN0b3J5LFxuICBzdGF0ZSxcbiAgcmVxLFxuICByZXMsXG4gIGxldmVsID0gMVxuKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gQSBmcmVzaCBzdG9yZSBpcyBuZWVkZWQgZWFjaCBsb29wIGFzIGEgY2xvc2VkIHN0b3JlIGNhbm5vdCBiZSByZS1vcGVuZWRcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGhpc3RvcnksIHN0YXRlKTtcblxuICAgIC8vIFN0YXJ0IHRoZSByb290IHNhZ2EgdGFza3Mgd2hpY2ggaXMgYSBwcm9taXNlXG4gICAgY29uc3QgdGFza3MgPSBzdG9yZS5ydW5TYWdhKHJvb3RTYWdhKTtcblxuICAgIC8vcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBXaWxsIGNvbnRhaW4gcm91dGVzIHRoYXQgd2lsbCBiZSBwcm9jZXNzZWQgaW4gdGhlIG5leHQgcmVjdXJzaW9uXG4gICAgY29uc3QgbmV4dCA9IFtdO1xuXG4gICAgLy8gTWFwIHRocm91Z2ggdGhlIHJvdXRlcyBhbmQgZmluZCBhbnkgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBwYXRoXG5cbiAgICByb3V0ZXNQcm9jZXNzaW5nLm1hcCgocm91dGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKTtcbiAgICAgIGlmIChtYXRjaCkgY29uc29sZS5sb2coJy0tLS0tLS0tTUFUQ0gtLS0tLS0nLCByb3V0ZS5jb21wb25lbnQpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGxldCByZWR1eEFjdGlvbjtcblxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaGFzIHN1Yi1yb3V0ZXMsIHF1ZXVlIHRoZW0gZm9yIHRoZSBuZXh0IHJlY3Vyc2lvblxuICAgICAgICAvLyBpZiAocm91dGUucm91dGVzKSBuZXh0LnB1c2goLi4ucm91dGUucm91dGVzKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIGEgbGF6eS1sb2FkZWQgTG9hZGFibGUgd3JhcHBlclxuICAgICAgICBpZiAocm91dGUuY29tcG9uZW50Py5jb250ZXh0VHlwZXM/LmxvYWRhYmxlKSB7XG4gICAgICAgICAgY29uc3QgTG9hZGFibGVDb250YWluZXIgPSByb3V0ZS5jb21wb25lbnQ7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IExvYWRhYmxlQ29udGFpbmVyKCk/LnN0YXRlPy5sb2FkZWQ/LmRlZmF1bHQ7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudD8uZ2V0SW5pdGlhbEFjdGlvbnMpIHtcbiAgICAgICAgICAgIGluaXRpYWxBY3Rpb24gPSBjb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gUmVndWxhciBub24tbGF6eSBjb21wb25lbnQgdGhhdCBjaGVjayBmb3IgaW5pdGlhbEFjdGlvbnNcbiAgICAgICAgaWYgKHJvdXRlLmNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucykge1xuICAgICAgICAgIHJlZHV4QWN0aW9uID0gcm91dGUuY29tcG9uZW50LmdldEluaXRpYWxBY3Rpb25zKHsgcmVxLCBtYXRjaCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcyBwcm9taXNlIGhhcyB0byBiZSByZXNvbHZlZCBldmVuIHRob3VnaCB0aGVyZSBhcmUgbm90IGFueSBvdGhlciBpbml0aWFsIGFjdGlvbnMgb3IgbmVzdGVkIHJvdXRlc1xuICAgICAgICBpZiAocmVkdXhBY3Rpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVkdXhBY3Rpb24nLCByZWR1eEFjdGlvbik7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHJlZHV4QWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgdGhlIHN0b3JlIHRvIG5ldyBhY3Rpb25zXG4gICAgc3RvcmUuY2xvc2UoKTtcblxuICAgIC8vIFdhaXQgZm9yIHRoZSBydW5uaW5nIGFjdGlvbnMgdG8gY29tcGxldGVcbiAgICB0YXNrc1xuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwcm9jZXNzUm91dGVzKG5leHQsIGhpc3RvcnksIHN0b3JlLmdldFN0YXRlKCksIHJlcSwgcmVzLCBsZXZlbCArIDEpIC8vIHJlY3Vyc2lvbiFcbiAgICAgICAgICAgIC50aGVuKChsYXRlc3RTdG9yZSkgPT4gcmVzb2x2ZShsYXRlc3RTdG9yZSkpXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHN0b3JlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0IHsgUHJlbG9hZGVkU3RhdGUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSwgeyBFTkQsIFNhZ2FNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknXG5cbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ3R5cGVzL3JlZHVjZXJzJ1xuXG50eXBlIFN0b3JlVHlwZSA9IFJldHVyblR5cGU8dHlwZW9mIGNvbmZpZ3VyZVN0b3JlPiAmIHtcbiAgcnVuU2FnYTogU2FnYU1pZGRsZXdhcmVbJ3J1biddXG4gIGNsb3NlOiAoKSA9PiB0eXBlb2YgRU5EXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGhpc3Rvcnk6IEhpc3RvcnksIGluaXRpYWxTdGF0ZTogUHJlbG9hZGVkU3RhdGU8Um9vdFN0YXRlPik6IFN0b3JlVHlwZSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuICBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuICBjb25zdCByZWR1eFJvdXRlck1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXG5cbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSksXG4gICAgcHJlbG9hZGVkU3RhdGU6IGluaXRpYWxTdGF0ZSBhcyBhbnksXG4gICAgZGV2VG9vbHM6ICFpc1Byb2R1Y3Rpb24sXG4gICAgbWlkZGxld2FyZTogW3NhZ2FNaWRkbGV3YXJlLCByZWR1eFJvdXRlck1pZGRsZXdhcmVdLFxuICB9KVxuXG4gIGlmIChpc0RldiAmJiBtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuICAgICAgY29uc3QgY3JlYXRlTmV3Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnbG9iYWwtcmVxdWlyZVxuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoY3JlYXRlTmV3Um9vdFJlZHVjZXIoaGlzdG9yeSkpXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfSlcbiAgfVxuXG4gIC8vIFVzZWQgZm9yIGNhbGxpbmcgc2FnYXMgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICBjb25zdCBydW5TYWdhID0gc2FnYU1pZGRsZXdhcmUucnVuIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gc3RvcmUuZGlzcGF0Y2goRU5EKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RvcmUsXG4gICAgcnVuU2FnYSxcbiAgICBjbG9zZSxcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBUUkFDRSA9IDEwLFxuICBERUJVRyA9IDIwLFxuICBJTkZPID0gMzAsXG4gIFdBUk4gPSA0MCxcbiAgRVJST1IgPSA1MCxcbiAgRkFUQUwgPSA2MCxcbn1cblxuZXhwb3J0IHR5cGUgTG9nID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHsgW2tleTogc3RyaW5nXTogTG9nIHwgdW5kZWZpbmVkIH1cblxudHlwZSBPdXRwdXQgPSB7XG4gIGxldmVsOiBMb2dMZXZlbFxuICBbcHJvcDogc3RyaW5nXTogTG9nIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRMZXZlbCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5MT0dfTEVWRUwpIHtcbiAgICByZXR1cm4gd2luZG93LkxPR19MRVZFTFxuICB9XG5cbiAgcmV0dXJuIE51bWJlcihwcm9jZXNzLmVudi5MT0dfTEVWRUwpIHx8IExvZ0xldmVsLklORk9cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGxvZyBtZXNzYWdlIGludG8gS2liYW5hLWZyaWVuZGx5IG91dHB1dC5cbiAqXG4gKiBJdCdzIGJlc3QgdG8gbG9nIG91dCBKU09OIG9iamVjdHMsIGFzIEtpYmFuYSB3aWxsIHBhcnNlIGFuZCBpbmRleCB0aGUgSlNPTlxuICogc28gdGhhdCB3ZSBjYW4gcnVuIHF1ZXJpZXMgYW5kIGZpbHRlcnMgYWdhaW5zdCBpbmRpdmlkdWFsIGZpZWxkcyBpbiB0aGUgbG9nLlxuICovXG5jb25zdCBsb2cgPSAob2JqOiBMb2csIGxldmVsOiBMb2dMZXZlbCk6IHZvaWQgPT4ge1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgaWYgKG9iaj8ubGV2ZWwpIGNvbnNvbGUud2FybignYGxldmVsYCBpcyBhIGZvcmJpZGRlbiBsb2cgcHJvcGVydHknKVxuICAgIGlmIChvYmo/Lm1lc3NhZ2UpIGNvbnNvbGUud2FybignYG1lc3NhZ2VgIGlzIGEgZm9yYmlkZGVuIGxvZyBwcm9wZXJ0eScpXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgY29uc3Qgb3V0cHV0OiBPdXRwdXQgPSB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyA/IE9iamVjdC5hc3NpZ24oe30sIG9iaiwgeyBsZXZlbCB9KSA6IHsgbXNnOiBvYmosIGxldmVsIH1cblxuICBjb25zdCB0eXBlID0gbGV2ZWwgPj0gTG9nTGV2ZWwuRVJST1IgPyAnZXJyb3InIDogbGV2ZWwgPT09IExvZ0xldmVsLldBUk4gPyAnd2FybicgOiAnbG9nJ1xuICBjb25zb2xlW3R5cGVdKEpTT04uc3RyaW5naWZ5KG91dHB1dCkpXG59XG5cbmNvbnN0IExvZ2dlciA9IHtcbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIlRSQUNFXCIuICovXG4gIHRyYWNlOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5UUkFDRSkgbG9nKG9iaiwgTG9nTGV2ZWwuVFJBQ0UpXG4gIH0sXG5cbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIkRFQlVHXCIuICovXG4gIGRlYnVnOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5ERUJVRykgbG9nKG9iaiwgTG9nTGV2ZWwuREVCVUcpXG4gIH0sXG5cbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIklORk9cIi4gKi9cbiAgaW5mbzogKG9iajogTG9nKSA9PiB7XG4gICAgaWYgKGdldExldmVsKCkgPD0gTG9nTGV2ZWwuSU5GTykgbG9nKG9iaiwgTG9nTGV2ZWwuSU5GTylcbiAgfSxcblxuICAvKiogT3V0cHV0cyBhIEtpYmFuYS1mcmllbmRseSBsb2cgaWYgdGhlIGxvZyBsZXZlbCB2ZXJib3NpdHkgaXMgc2V0IHRvIFwiV0FSTlwiLiAqL1xuICB3YXJuOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5XQVJOKSBsb2cob2JqLCBMb2dMZXZlbC5XQVJOKVxuICB9LFxuXG4gIC8qKiBPdXRwdXRzIGEgS2liYW5hLWZyaWVuZGx5IGxvZyBpZiB0aGUgbG9nIGxldmVsIHZlcmJvc2l0eSBpcyBzZXQgdG8gXCJFUlJPUlwiLiAqL1xuICBlcnJvcjogKG9iajogTG9nKSA9PiB7XG4gICAgaWYgKGdldExldmVsKCkgPD0gTG9nTGV2ZWwuRVJST1IpIGxvZyhvYmosIExvZ0xldmVsLkVSUk9SKVxuICB9LFxuXG4gIC8qKiBPdXRwdXRzIGEgS2liYW5hLWZyaWVuZGx5IGxvZyBpZiB0aGUgbG9nIGxldmVsIHZlcmJvc2l0eSBpcyBzZXQgdG8gXCJGQVRBTFwiLiAqL1xuICBmYXRhbDogKG9iajogTG9nKSA9PiB7XG4gICAgaWYgKGdldExldmVsKCkgPD0gTG9nTGV2ZWwuRkFUQUwpIGxvZyhvYmosIExvZ0xldmVsLkZBVEFMKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5jb25mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdXBlcmFnZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9