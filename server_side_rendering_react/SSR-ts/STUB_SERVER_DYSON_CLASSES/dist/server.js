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

var GET_WALLET_SUCCESS = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("GET_WALLET_SUCCESS");
var GET_WALLET_FAILURE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])("GET_WALLET_FAILURE");

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




var isProduction = "development" === "production";
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
    }
    // Session
    // createAnonymousSession: (options) =>
    // request.post(endpoints.createAnonymousSession(), options) as unknown as CreateAnonymousSessionAPIResponse,
  };
};

/**
 * Helper method to read superagent responses
 */
function checkResponse(response) {
  var shouldRedirectToLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return new Promise(function (resolve, reject) {
    console.log("CHECK is RESPOMSE", response.status);
    if (!response || !response.status) {
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].fatal("We didn't get a response");
      reject();
      return;
    }
    if (response.status === 404) {
      reject(response);
      _utils_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error({
        method: response.request.method,
        url: response.request.url,
        status: response.status,
        text: response.text
      });
      return;
    }
    if (response.status === 401 && shouldRedirectToLogin) {
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
    if (response.status === 400) {
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
// eslint-disable-next-line import/no-extraneous-dependencies



var createRootReducer = function createRootReducer(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    meta: _meta_metaReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
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
  savedPaymentMethods: [],
  error: false,
  id: "",
  status: "IDLE",
  customerId: "22"
};
var metaReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, function (builder) {
  return builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_WALLET_SUCCESS"], function (state, _ref) {
    var payload = _ref.payload;
    state.error = false;
    state.status = "IDLE";
    console.log("payload.savedPaymentMethods;", payload.savedPaymentMethods);
    state.savedPaymentMethods = payload.savedPaymentMethods;
  }).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_WALLET_FAILURE"], function (state, _ref2) {
    var payload = _ref2.payload;
    state.status = "IDLE";
    if ("status" in payload.error) {
      state.error = payload;
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (metaReducer);

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
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-color-log */ "node-color-log");
/* harmony import */ var node_color_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_color_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(initUserInfoPageSaga),
  _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchInitUserInfoPageSaga);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */




function initUserInfoPageSaga(action) {
  var cookie, id, response, wallet, _ref, message, status, _response, _ref2, body;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initUserInfoPageSaga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        cookie = action.payload.cookie; // other essential action on load page those call are based on cookie authorization
        console.log("----------get w wallet saga called !!! with cookie", cookie);
        id = "4343"; // when the API response with API error this still wont fall in catch
        // you need actual js error to fall in catch so for example accessing value that does not exists
        _context.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_4__["default"].getWallet, id, cookie);
      case 6:
        response = _context.sent;
        _context.next = 9;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_4__["checkResponse"], response);
      case 9:
        wallet = _context.sent;
        console.log("wallet.........", wallet);
        _context.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["GET_WALLET_SUCCESS"])(wallet));
      case 13:
        _context.next = 22;
        break;
      case 15:
        _context.prev = 15;
        _context.t0 = _context["catch"](0);
        _ref = _context.t0 || {}, message = _ref.message, status = _ref.status, _response = _ref.response;
        _ref2 = _response || {}, body = _ref2.body; // if user is Unauthorized then in UI it will redirect to login page
        node_color_log__WEBPACK_IMPORTED_MODULE_2___default.a.color("red").log("Error response", {
          name: "initUserInfoPageSaga",
          msg: "Error initUserInfoPageSaga",
          detail: message,
          status: status,
          body: body
        });
        _context.next = 22;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["GET_WALLET_FAILURE"])(_context.t0));
      case 22:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 15]]);
}
function watchInitUserInfoPageSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchInitUserInfoPageSaga$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["INIT_USER_INFO_PAGE"], initUserInfoPageSaga);
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
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
  // FOR NOW
  // logger.color("yellow").bold().log("requested req.url", req.url);
  // this goes through all routes in application;
  /* const activeRoute =
    routes.find((route, i) => matchPath(req.url, route)) || {}; */

  // FOR NOW
  // logger.color("yellow").bold().log("activeRoute", activeRoute);

  /** ****** Redux server setup ***** */

  // set initial store to be passed to client in window._data
  var initialState = {
    meta: {}
  };

  // U can not use BrowserRouter cause the routes are processed on server not a client
  var memoryHistory = Object(history__WEBPACK_IMPORTED_MODULE_7__["createMemoryHistory"])({
    initialEntries: [req.url]
  });
  // const store = configureStore(memoryHistory, initialState);

  /** * */

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

    // FOR NOW
    /* logger
      .color('yellow')
      .bold()
      .log('requested req.url in promise response', req.url); */

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
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <!-- this has been generated by config/client/webpack.dev.config -->\n          <script>window.__data = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default()(store.getState()), "</script>\n          <!-- above this is the way teh server sends store to the browser IT MUST MATCH! without this it wont match -->\n          <link rel=\"stylesheet\" type=\"text/css\" href=\"./style.css\" />\n\n        </head>\n       ").concat(serverHtml, "\n      </html>\n      "));
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors */ "./src/shared/selectors/index.ts");
/* harmony import */ var _GetSnapshotRedirects_GetSnapshotRedirects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GetSnapshotRedirects/GetSnapshotRedirects */ "./src/shared/containers/GetSnapshotRedirects/GetSnapshotRedirects.tsx");
/* harmony import */ var _pages_UserSecretInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/UserSecretInfo */ "./src/shared/pages/UserSecretInfo.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.ts");






var UserSecretInfoContainer = function UserSecretInfoContainer() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_selectors__WEBPACK_IMPORTED_MODULE_2__["getMeta"]),
    savedPaymentMethods = _useSelector.savedPaymentMethods;
  console.log("getMeta updated by selector !!!", savedPaymentMethods);
  // console.log('------props in UserSecretInfoContainer--------', props);

  /*
      //validation to show children below with redirect and early return
       this should happen on server-site, but the `req` object CAN NOT be directly access in client
      because they are seperate. Therefore data has to be places in redux store and then read in client 
      for example by redux selectors
    
    const { error } = useSelector(getMeta); */

  /*  if (error) {
    if (
      typeof error === "object" &&
      !(error instanceof Error) &&
      error.status === StatusCode.UNAUTHORIZED
    ) {
      return (
        <Redirect
          to={`/login?pageName=mandatoryPrepay&successUrl=${encodeURIComponent(
            `${location.pathname}${location.search}`
          )}`}
        />
      );
    }
     return <Redirect to={errorPath} />;
  } */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GetSnapshotRedirects_GetSnapshotRedirects__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_UserSecretInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    savedPaymentMethods: savedPaymentMethods
  }));
};

// --------------------- TS setup for quick reference

// --------------------- //

// getInitialActions is called on server-site
// the redux saga is called on server-site from here
UserSecretInfoContainer.getInitialActions = function (_ref) {
  var req = _ref.req,
    match = _ref.match;
  var id = match.params.id;
  var cookie = req.get("cookie") || "";
  console.log("---------------COOKIE----------", cookie);
  return Object(_actions__WEBPACK_IMPORTED_MODULE_5__["INIT_USER_INFO_PAGE"])({
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

var UserSecretInfo = function UserSecretInfo(_ref) {
  var savedPaymentMethods = _ref.savedPaymentMethods;
  console.log('props......', savedPaymentMethods);

  /*
      This page will have parent container that will authoriztioin before it is even available 
      since it will contain sensitive user info
    */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, JSON.stringify(savedPaymentMethods));
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









// redux and sagas


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

    // return new Promise((resolve, reject) => {
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
        console.log('STORE', store.getState());

        // this promise has to be resolved even though there are not any other initial actions or nested routes
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

/***/ "./src/shared/selectors/index.ts":
/*!***************************************!*\
  !*** ./src/shared/selectors/index.ts ***!
  \***************************************/
/*! exports provided: getMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metaSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metaSelectors */ "./src/shared/selectors/metaSelectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return _metaSelectors__WEBPACK_IMPORTED_MODULE_0__["getMeta"]; });



/***/ }),

/***/ "./src/shared/selectors/metaSelectors.ts":
/*!***********************************************!*\
  !*** ./src/shared/selectors/metaSelectors.ts ***!
  \***********************************************/
/*! exports provided: getMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return getMeta; });
// quick type for the selector

var getMeta = function getMeta(state) {
  console.log("state.meta", state.meta);
  return state.meta;
};

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
  var isDev = "development" === "development";
  var isProduction = "development" === "production";
  /* eslint-enable */

  var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  var reduxRouterMiddleware = Object(connected_react_router__WEBPACK_IMPORTED_MODULE_3__["routerMiddleware"])(history);
  console.log("initialState in redux index:", initialState);
  var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
    reducer: Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(history),
    preloadedState: initialState,
    devTools: !isProduction,
    middleware: [sagaMiddleware, reduxRouterMiddleware]
  });
  if (isDev && module.hot) {
    module.hot.accept("../reducers", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2VudmNvbmZpZy9lbnZDb25maWcudHMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9tZXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy93YWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9hcGlVcmxIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlcXVlc3RIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbWV0YS9tZXRhUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL21ldGEvbWV0YVNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Byb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbWlkZGxld2FyZS9zc3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXJSZW5kZXJpbmdIZWxwZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05vTWF0Y2guanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXJhbXNRdWVyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1Bhc3N3b3JkU3RyZW5ndGgvUGFzc3dvcmRJbnB1dENoZWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZFN0cmVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9HZXRTbmFwc2hvdFJlZGlyZWN0cy9HZXRTbmFwc2hvdFJlZGlyZWN0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL1VzZXJTZWNyZXRJbmZvQ29udGFpbmVyL1VzZXJTZWNyZXRJbmZvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9oZWxwZXJNZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvVXNlclNlY3JldEluZm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2VsZWN0b3JzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2VsZWN0b3JzL21ldGFTZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FpbnNidXJ5cy10ZWNoL2JvbHR1aS11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuY29uZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN1cGVyYWdlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJuY29uZiIsImFyZ3YiLCJlbnYiLCJkZWZhdWx0cyIsIk5PREVfRU5WIiwiRElTQUJMRV9BVVRPTUFUSUNfUkVTVU1FIiwiY29uZmlnIiwiZ2V0IiwiZmlsZSIsImNvbmNhdCIsImRvdGVudiIsInBhdGgiLCJzZXQiLCJwcm9jZXNzIiwiQUREUkVTU19GSU5ERVJfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIm1zZyIsImVudmNvbmZpZyIsIkVOVl9DT05GSUciLCJHQVRFV0FZX0FQSSIsIkFDQ09VTlRfQVBJIiwiV0NTX0FQSSIsIlNFU1NJT05fTUFOQUdFUl9BUEkiLCJNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEkiLCJSRUNFSVBUX0FQSSIsIkNPTlNVTF9FTlYiLCJCT1NVTl9DT05GSUdfTUFQIiwiVkFVTFRfRU5WIiwiQk9TVU5fRU5WIiwiTU9EQUxfT1BFTiIsImNyZWF0ZUFjdGlvbiIsIk1PREFMX0NMT1NFIiwiU0VUX09SREVSX1NVTU1BUllfVkFSSUFOVCIsIlNFVF9CUkFORCIsIlNFVF9USEVNRSIsIlRPR0dMRV9QUkVWSUVXX1BMQUNFX09SREVSIiwiU0VUX0ZFQVRVUkVfVE9HR0xFIiwiU0VUX0ZFQVRVUkVTIiwiU0VUX0NPTkZJRyIsIlNFVF9DSEFOTkVMX1RPR0dMRSIsIlRSQUNLX0FEX0NPTlRJTlVFX0VSUk9SIiwiSU5JVF9VU0VSX0lORk9fUEFHRSIsIkdFVF9XQUxMRVRfRkFJTFVSRSIsIlJPVVRFUl9MT0NBVElPTl9DSEFOR0UiLCJMT0NBVElPTl9DSEFOR0UiLCJHRVRfV0FMTEVUX1NVQ0NFU1MiLCJpc1Byb2R1Y3Rpb24iLCJhcGlGYWN0b3J5IiwiZ2V0V2FsbGV0IiwidXNlcklkIiwiY29va2llIiwicmVxdWVzdCIsImVuZHBvaW50cyIsIkNvb2tpZSIsImNoZWNrUmVzcG9uc2UiLCJyZXNwb25zZSIsInNob3VsZFJlZGlyZWN0VG9Mb2dpbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzIiwiTG9nZ2VyIiwiZmF0YWwiLCJlcnJvciIsIm1ldGhvZCIsInVybCIsInRleHQiLCJjYW5Vc2VEb20iLCJzdWNjZXNzVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvayIsImJvZHkiLCJkZWJ1ZyIsImFjY291bnQiLCJhY2NvdW50QXBpRW5kcG9pbnQiLCJzZXNzaW9uIiwic2Vzc2lvbk1hbmFnZXJFbmRwb2ludCIsImNyZWF0ZUFub255bW91c1Nlc3Npb24iLCJhcGkiLCJob3N0IiwiSE9TVCIsInBvcnQiLCJwcmVwYXlBcGkiLCJhY2NvdW50QXBpIiwibWFya2V0aW5nQVBJIiwicHJvZHVjdEFwaSIsInNlc3Npb25NYW5hZ2VyQXBpIiwiZ2V0VXNlckluZm9BcGkiLCJ2YXRSZWNlaXB0QXBpIiwiR2lmdENhcmRUeXBlcyIsInByZXBheUFwaVNlcnZlciIsImFjY291bnRBcGlTZXJ2ZXIiLCJwcm9kdWN0QXBpU2VydmVyIiwiZ2V0VmF0UmVjZWlwdFNlcnZlciIsIm1hcmtldGluZ0FwaVNlcnZlciIsInNlc3Npb25NYW5hZ2VyU2VydmVyIiwiZ2V0VXNlckluZm9BcGlTZXJ2ZXIiLCJwcmVwYXlBcGlCYXNlVXJsIiwib3JkZXJBcGlCYXNlVXJsIiwiYWNjb3VudEFwaUJhc2VVcmwiLCJwcm9kdWN0QXBpQmFzZVVybCIsIm1hcmtldGluZ0FwaUJhc2VVcmwiLCJzZXNzaW9uTWFuYWdlckJhc2VVcmwiLCJnZXRVc2VySW5mb0FwaUJhc2VVcmwiLCJnZXRWYXRSZWNlaXB0QXBpQmFzZVVybCIsImFwcCIsInJvb3RGb250U2l6ZSIsInRpbWluZ3MiLCJmYWRlSW5PdXQiLCJzbmFwc2hvdExvY2tEZWxheSIsInBsYWNlT3JkZXJTaG93RXJyb3JEZWxheSIsInBheW1lbnRNZXRob2RSb3V0ZXMiLCJjcmVkaXREZWJpdENhcmQiLCJwYXlwYWwiLCJhcHBsZVBheSIsImFyZ29zQ2FyZENyZWRpdFBsYW4iLCJzdGF0dXNlcyIsImluaXRpYWxpc2F0aW9uSW5Qcm9ncmVzcyIsInBheW1lbnRNZXRob2RzT3JkZXIiLCJuZWN0YXIiLCJDQVJEX05FQ1RBUiIsImJpbk51bWJlciIsImNhcmROdW1iZXJMZW5ndGgiLCJnaWZ0Q2FyZFR5cGVzIiwiR0VORVJJQyIsIkNBUkRfR0lGVF9BUkdPUyIsImJpblJhbmdlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicGluTnVtYmVyTGVuZ3RoIiwiaW1hZ2UiLCJORVdfR0lGVF9DQVJEX0FSR09TIiwiQ0FSRF9HSUZUX0ZMRVhFQ0FTSCIsInNlY3VyaXR5Q29kZUxlbmd0aCIsIm1heGltdW1OdW1iZXJPZkdpZnRDYXJkcyIsInBsYWNlT3JkZXJBbmltYXRpb24iLCJzZWFzb25zIiwieG1hcyIsImRlZmF1bHRUdSIsInhtYXNUdSIsImRlZmF1bHRIYWJpdGF0IiwieG1hc0hhYml0YXQiLCJoYWxsb3dlZW4iLCJwcmlkZSIsInByaWRlVHUiLCJwcmlkZUhhYml0YXQiLCJibGFja0hpc3RvcnlNb250aCIsImJsYWNrSGlzdG9yeU1vbnRoSGFiaXRhdCIsImJsYWNrSGlzdG9yeU1vbnRoVHUiLCJpbml0aWFsRGVsYXlNcyIsImNvbG9ycyIsInZhcmlhbnRzIiwiYmdNYXNrIiwiYm94IiwibGlkIiwiYW5pbUR1cmF0aW9uTXMiLCJwcm9kdWN0cyIsInRvdGFsIiwiYW5pbVlBeGlzTW92ZURpc3RhbmNlUHgiLCJhbmltVGltaW5nRnVuY3Rpb24iLCJpbnRlcnZhbER1cmF0aW9uTXMiLCJvcHRpb25zIiwicHJlcGF5QXBpRW5kcG9pbnQiLCJlbmRwb2ludCIsIm9yZGVyQXBpRW5kcG9pbnQiLCJwcm9kdWN0QXBpRW5kcG9pbnQiLCJnZXRVc2VySW5mb0FwaUVuZHBvaW50IiwiZ2V0VmF0UmVjZWlwdEVuZHBvaW50IiwibWFya2V0aW5nUHJlZmVyZW5jZXNBcGlFbmRwb2ludCIsImNhdGNoRXJyb3IiLCJyZXMiLCJyZXEiLCJ0eXBlIiwicG9zdCIsImRhdGEiLCJwYXRjaCIsInB1dCIsIl9kZWxldGUiLCJjcmVhdGVSb290UmVkdWNlciIsImhpc3RvcnkiLCJjb21iaW5lUmVkdWNlcnMiLCJtZXRhIiwicm91dGVyIiwiY29ubmVjdFJvdXRlciIsImluaXRpYWxTdGF0ZSIsInNhdmVkUGF5bWVudE1ldGhvZHMiLCJpZCIsImN1c3RvbWVySWQiLCJtZXRhUmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInN0YXRlIiwiX3JlZiIsInBheWxvYWQiLCJfcmVmMiIsInJvb3QiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwid3JhcCIsInJvb3QkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImFsbCIsImZvcmsiLCJ3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhIiwic3RvcCIsIl9tYXJrZWQiLCJpbml0VXNlckluZm9QYWdlU2FnYSIsIl9tYXJrZWQyIiwibWFyayIsImFjdGlvbiIsIndhbGxldCIsIm1lc3NhZ2UiLCJfcmVzcG9uc2UiLCJpbml0VXNlckluZm9QYWdlU2FnYSQiLCJjYWxsIiwic2VudCIsInQwIiwibG9nZ2VyIiwiY29sb3IiLCJkZXRhaWwiLCJ3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhJCIsIl9jb250ZXh0MiIsInRha2VMYXRlc3QiLCJpc1N0dWIiLCJyZWNlaXB0U2VydmljZVByb3h5IiwicHJveHkiLCJwcm94eVJlcVBhdGhSZXNvbHZlciIsInBhcnNlIiwiY2hlY2tvdXRTZXJ2aWNlUHJveHkiLCJtYXJrZXRpbmdQcmVmZXJlbmNlU2VydmljZVByb3h5IiwiYWNjb3VudFNlcnZpY2VQcm94eSIsIndjc1Byb3h5IiwicHJveHlSZXEiLCJ0ZWFsaXVtUHJveHkiLCJnZXRUZWFsaXVtQnJhbmQiLCJicmFuZCIsImdldFRlYWxpdW1FbnYiLCJzdHViRGFzaGJvYXJkUHJveHkiLCJzdHViRW5kcG9pbnRQcm94eSIsInN0dWJQcm94eSIsIm9yaWdpbmFsVXJsIiwic3BsaXQiLCJwcm9kdWN0R2F0ZXdheVByb3h5IiwidmF1bHQiLCJwZHAiLCJrZXkiLCJzZW5kIiwiX1VSTCIsIlVSTCIsIm9yaWdpbiIsInByb3h5UmVxT3B0RGVjb3JhdG9yIiwicHJveHlSZXFPcHRzIiwiaGVhZGVycyIsImFjY2VwdCIsInByb2R1Y3RzUGF0aCIsInNlc3Npb25NYW5hZ2VyUHJveHkiLCJ3aXNobGlzdE1vY2siLCJqc29uIiwid2lzaGxpc3RzIiwiaXRlbXMiLCJwYXJ0TnVtYmVyIiwic3NyTWlkZGxld2FyZSIsIm1lbW9yeUhpc3RvcnkiLCJjcmVhdGVNZW1vcnlIaXN0b3J5IiwiaW5pdGlhbEVudHJpZXMiLCJ3YWl0Rm9yQXN5bmNBY3Rpb25zIiwicHJvY2Vzc1JvdXRlcyIsInRoZW4iLCJfc2xpY2VkVG9BcnJheSIsInN0b3JlIiwiY29udGV4dCIsIm1vZHVsZXMiLCJhcHBIdG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkxvYWRhYmxlIiwiQ2FwdHVyZSIsInJlcG9ydCIsIm1vZHVsZU5hbWUiLCJwdXNoIiwiUmVkdXhQcm92aWRlciIsIlN0YXRpY1JvdXRlciIsIkFwcCIsIkJvZHlDb250ZW50QW5kU2NyaXB0cyIsIl9yZWYzIiwiY2xpZW50IiwibW9kdWxlc0NodW5rcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0SnNGaWxlcyIsInNlcnZlckh0bWwiLCJzZXJpYWxpemUiLCJnZXRTdGF0ZSIsImV4cHJlc3MiLCJ1c2UiLCJlbnZDb25maWciLCJQT1JUIiwicHJlbG9hZEFsbCIsImxpc3RlbiIsImluZm8iLCJmaWxlcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImZvckVhY2giLCJtb2R1bGUiLCJtYXAiLCJpbmRleCIsInNyYyIsImRlZmVyIiwiY2hhclNldCIsImZldGNoUG9wdWxhclJlcG9zIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwiZmV0Y2giLCJyZXBvcyIsIndhcm4iLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJfY3JlYXRlQ2xhc3MiLCJ2YWx1ZSIsInJlbmRlciIsIk5hdmJhciIsIlN3aXRjaCIsInJvdXRlcyIsImV4YWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIlJvdXRlIiwicHJvcHMiLCJfZXh0ZW5kcyIsIk5vTWF0Y2giLCJHcmlkIiwiX3RoaXMiLCJfX2lzQnJvd3Nlcl9fIiwic3RhdGljQ29udGV4dCIsImxvYWRpbmciLCJmZXRjaFJlcG9zIiwiYmluZCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIm1hdGNoIiwicGFyYW1zIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwibGFuZyIsIl90aGlzMiIsInNldFN0YXRlIiwiZmV0Y2hJbml0aWFsRGF0YSIsIl90aGlzJHN0YXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvd25lciIsInN0YXJnYXplcnNfY291bnQiLCJodG1sX3VybCIsIm1hcmdpbiIsImxvZ2luIiwiSG9tZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImNvdW50Iiwic2V0Q291bnQiLCJQYXNzd29yZElucHV0Iiwib25DbGljayIsIk15Q29tcG9uZW50IiwiaGFuZGxlUG9zdFJlcXVlc3QiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsImNyZWRlbnRpYWxzIiwiRXJyb3IiLCJsYW5ndWFnZXMiLCJwYXJhbSIsIk5hdkxpbmsiLCJhY3RpdmVTdHlsZSIsImZvbnRXZWlnaHQiLCJ0byIsInVzZUhpc3RvcnkiLCJzZXRRdWVyeVBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwiX3VzZUxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJxdWVyeVBhcmFtc09iaiIsInVzZU1lbW8iLCJxdWVyeVN0cmluZ1RvT2JqZWN0IiwicmVhZFF1ZXJ5UHJvcGVydHkiLCJzZXRMYW5ndWFnZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYWdlIiwic2V0QWdlIiwib25WYWx1ZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsInVwZGF0ZVF1ZXJ5T2JqZWN0IiwidXBkYXRlUXVlcnlQcm9wZXJ0eSIsImNyZWF0ZVF1ZXJ5U3RyaW5nIiwiZmxleERpcmVjdGlvbiIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImUiLCJodG1sRm9yIiwiX3JlZiRlbWFpbCIsImVtYWlsIiwic2V0VmFsdWUiLCJzdHJlbmd0aCIsInNldFN0cmVuZ3RoIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJnZXRQYXNzd29yZFN0cmVuZ3RoIiwidXNlRWZmZWN0Iiwic2V0T3B0aW9ucyIsInNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zIiwiRnJhZ21lbnQiLCJ1c2VySW5wdXRzIiwienhjdmJuQ29tbW9uUGFja2FnZSIsInp4Y3ZibkVuUGFja2FnZSIsInp4Y3Zibk9wdGlvbnMiLCJkaWN0aW9uYXJ5IiwiX29iamVjdFNwcmVhZCIsImdyYXBocyIsImFkamFjZW5jeUdyYXBocyIsInRyYW5zbGF0aW9ucyIsIl94IiwicGFzc3dvcmQiLCJfenhjdmJuIiwienhjdmJuIiwic2NvcmUiLCJHZXRTbmFwc2hvdFJlZGlyZWN0cyIsImNoaWxkcmVuIiwiVXNlclNlY3JldEluZm9Db250YWluZXIiLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsImdldE1ldGEiLCJVc2VyU2VjcmV0SW5mbyIsImdldEluaXRpYWxBY3Rpb25zIiwiR3Vlc3RDaGVja291dENvbnRhaW5lciIsIl9kZWZpbmVQcm9wZXJ0eSIsImxvYWRlciIsIndlYnBhY2siLCJyZXF1aXJlIiwicHJvcGVydHkiLCJxdWVyeU9iamVjdCIsInVwZGF0ZSIsInN0ciIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImpvaW4iLCJVUkxTZWFyY2hQYXJhbXNPYmoiLCJVUkxTZWFyY2hQYXJhbXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJlcnIiLCJmIiwiUGFyYW1zUXVlcnkiLCJMb2dpbiIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VEYXRhVGVzdCIsImFuYWx5dGljcyIsInBvcCIsInJvdXRlc1Byb2Nlc3NpbmciLCJsZXZlbCIsImNyZWF0ZVN0b3JlIiwidGFza3MiLCJydW5TYWdhIiwicm9vdFNhZ2EiLCJyb3V0ZSIsIm1hdGNoUGF0aCIsIl9yb3V0ZSRjb21wb25lbnQiLCJyZWR1eEFjdGlvbiIsImNvbnRleHRUeXBlcyIsImxvYWRhYmxlIiwiX0xvYWRhYmxlQ29udGFpbmVyIiwiTG9hZGFibGVDb250YWluZXIiLCJsb2FkZWQiLCJpbml0aWFsQWN0aW9uIiwiZGlzcGF0Y2giLCJjbG9zZSIsInRvUHJvbWlzZSIsImxhdGVzdFN0b3JlIiwiaXNEZXYiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicmVkdXhSb3V0ZXJNaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInByZWxvYWRlZFN0YXRlIiwiZGV2VG9vbHMiLCJtaWRkbGV3YXJlIiwiaG90IiwiY3JlYXRlTmV3Um9vdFJlZHVjZXIiLCJyZXBsYWNlUmVkdWNlciIsInJ1biIsIkVORCIsIkxvZ0xldmVsIiwiZ2V0TGV2ZWwiLCJMT0dfTEVWRUwiLCJOdW1iZXIiLCJJTkZPIiwib2JqIiwiX3R5cGVvZiIsIm91dHB1dCIsIk9iamVjdCIsImFzc2lnbiIsIkVSUk9SIiwiV0FSTiIsInRyYWNlIiwiVFJBQ0UiLCJERUJVRyIsIkZBVEFMIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ087O0FBRWhDO0FBQ0FBLDRDQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNDLEdBQUcs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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9zZXJ2ZXIvY2h1bmstXCIgKyBjaHVua0lkICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9jaHVua3MvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IG5jb25mIGZyb20gJ25jb25mJ1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudidcblxuLy8gSW5pdGlhbGlzZSB3aXRoIGFyZ3VtZW50cyBhbmQgZW52IHZhcmlhYmxlc1xubmNvbmYuYXJndigpLmVudigpXG5cbi8vIFNldCB0aGUgZGVmYXVsdCBlbnZpcm9ubWVudCB0byBwcm9kdWN0aW9uXG5uY29uZi5kZWZhdWx0cyh7XG4gIE5PREVfRU5WOiAncHJvZHVjdGlvbicsXG4gIC8vIE5FV19SRUxJQ19IT01FOiAnLi9jb25maWcvbmV3cmVsaWMnLFxuICBESVNBQkxFX0FVVE9NQVRJQ19SRVNVTUU6ICdmYWxzZScsXG59KVxuXG5jb25zdCBjb25maWcgPSBuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSB8fCBuY29uZi5nZXQoJ05PREVfRU5WJylcblxuLy8gTG9hZCBlbnZpcm9ubWVudCBjb25zdGFudHMgZm9yIGVudmlyb25tZW50XG5uY29uZi5maWxlKHsgZmlsZTogYC4vY29uZmlnL2VudmNvbmZpZy9lbnZjb25maWcuJHtjb25maWd9Lmpzb25gIH0pXG5cbmlmIChjb25maWcgPT09ICdzdHViJykge1xuICBkb3RlbnYuY29uZmlnKHsgcGF0aDogJy5lbnYubG9jYWwnIH0pXG4gIG5jb25mLnNldCgnQUREUkVTU19GSU5ERVJfQVBJX0tFWScsIHByb2Nlc3MuZW52LkFERFJFU1NfRklOREVSX0FQSV9LRVkpXG59XG5cbi8vIFNUVUJfVVJMIHdpbGwgYmUgc2V0IGZvciBmZWF0dXJlIGJyYW5jaGVzXG4vLyBUT0RPOiBTZWUgdGlja2V0IEJPRlMtNDI2NSAtIGludmVzdGlnYXRlIHNpbWlsYXIgZnVuY3Rpb25hbGl0eSB0aGF0IGNhbiBkZXBsb3kgZmVhdHVyZSBvciBwcmV2aWV3IGRlcGxveW1lbnRzIGluIEJvc3VuXG4vLyBpZiAobmNvbmYuZ2V0KCdFTlZfQ09ORklHJykgPT09ICdyZW1vdGVTdHViJykge1xuLy8gICBuY29uZi5zZXQoJ0dBVEVXQVlfQVBJJywgbmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLnJlcGxhY2UoJ3N0dWItcGF5bWVudC1zZXJ2aWNlJywgbmNvbmYuZ2V0KCdTVFVCX1VSTCcpKSlcbi8vICAgbmNvbmYuc2V0KCdBQ0NPVU5UX0FQSScsIG5jb25mLmdldCgnQUNDT1VOVF9BUEknKS5yZXBsYWNlKCdzdHViLXBheW1lbnQtc2VydmljZScsIG5jb25mLmdldCgnU1RVQl9VUkwnKSkpXG4vLyAgIG5jb25mLnNldCgnV0NTX0FQSScsIG5jb25mLmdldCgnV0NTX0FQSScpLnJlcGxhY2UoJ3N0dWItcGF5bWVudC1zZXJ2aWNlJywgbmNvbmYuZ2V0KCdTVFVCX1VSTCcpKSlcbi8vICAgbmNvbmYuc2V0KFxuLy8gICAgICdTRVNTSU9OX01BTkFHRVJfQVBJJyxcbi8vICAgICBuY29uZi5nZXQoJ1NFU1NJT05fTUFOQUdFUl9BUEknKS5yZXBsYWNlKCdzdHViLXBheW1lbnQtc2VydmljZScsIG5jb25mLmdldCgnU1RVQl9VUkwnKSksXG4vLyAgIClcbi8vICAgbmNvbmYuc2V0KFxuLy8gICAgICdNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEknLFxuLy8gICAgIG5jb25mLmdldCgnTUFSS0VUSU5HX1BSRUZFUkVOQ0VfQVBJJykucmVwbGFjZSgnc3R1Yi1wYXltZW50LXNlcnZpY2UnLCBuY29uZi5nZXQoJ1NUVUJfVVJMJykpLFxuLy8gICApXG4vLyB9XG5cbi8vIFBhc3MgYWxsIHZhbHVlcyBpbnRvIHByb2Nlc3MuZW52XG5wcm9jZXNzLmVudiA9IG5jb25mLmdldCgpXG5cbi8vIExvZyBvdXQgdGhlIGVuZHBvaW50cyB3ZSdyZSB1c2luZyB0byBtYWtlIGRlYnVnZ2luZyBlYXNpZXJcbmlmIChjb25maWcgIT09ICd0ZXN0Jykge1xuICBjb25zb2xlLmxvZyhcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiAnc2VydmVyTG9nZ2VyJyxcbiAgICAgIG1zZzogYENvbmZpZ3VyYXRpb24gZm9yIFwiJHtjb25maWd9XCI6YCxcbiAgICAgIGVudmNvbmZpZzoge1xuICAgICAgICBOT0RFX0VOVjogbmNvbmYuZ2V0KCdOT0RFX0VOVicpLFxuICAgICAgICBFTlZfQ09ORklHOiBuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSxcbiAgICAgICAgR0FURVdBWV9BUEk6IG5jb25mLmdldCgnR0FURVdBWV9BUEknKSxcbiAgICAgICAgQUNDT1VOVF9BUEk6IG5jb25mLmdldCgnQUNDT1VOVF9BUEknKSxcbiAgICAgICAgV0NTX0FQSTogbmNvbmYuZ2V0KCdXQ1NfQVBJJyksXG4gICAgICAgIFNFU1NJT05fTUFOQUdFUl9BUEk6IG5jb25mLmdldCgnU0VTU0lPTl9NQU5BR0VSX0FQSScpLFxuICAgICAgICBNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEk6IG5jb25mLmdldCgnTUFSS0VUSU5HX1BSRUZFUkVOQ0VfQVBJJyksXG4gICAgICAgIFJFQ0VJUFRfQVBJOiBuY29uZi5nZXQoJ1JFQ0VJUFRfQVBJJyksXG4gICAgICAgIENPTlNVTF9FTlY6IG5jb25mLmdldCgnQ09OU1VMX0VOVicpLFxuICAgICAgICBCT1NVTl9DT05GSUdfTUFQOiBuY29uZi5nZXQoJ0JPU1VOX0NPTkZJR19NQVAnKSxcbiAgICAgICAgVkFVTFRfRU5WOiBuY29uZi5nZXQoJ1ZBVUxUX0VOVicpLFxuICAgICAgICBCT1NVTl9FTlY6IG5jb25mLmdldCgnQk9TVU5fRU5WJyksXG4gICAgICB9LFxuICAgIH0pLFxuICApXG59XG5cbmV4cG9ydCB7IG5jb25mIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuLy9pbXBvcnQgeyBDb25zdWxDb25maWcgfSBmcm9tICd0eXBlcy9yZWR1Y2Vycy9hcHAnXG5cbmV4cG9ydCBjb25zdCBNT0RBTF9PUEVOID0gY3JlYXRlQWN0aW9uKCdNT0RBTF9PUEVOJylcbmV4cG9ydCBjb25zdCBNT0RBTF9DTE9TRSA9IGNyZWF0ZUFjdGlvbignTU9EQUxfQ0xPU0UnKVxuZXhwb3J0IGNvbnN0IFNFVF9PUkRFUl9TVU1NQVJZX1ZBUklBTlQgPSBjcmVhdGVBY3Rpb248YW55PignU0VUX09SREVSX1NVTU1BUllfVkFSSUFOVCcpXG5leHBvcnQgY29uc3QgU0VUX0JSQU5EID0gY3JlYXRlQWN0aW9uPGFueT4oJ1NFVF9CUkFORCcpXG5leHBvcnQgY29uc3QgU0VUX1RIRU1FID0gY3JlYXRlQWN0aW9uPGFueT4oJ1NFVF9USEVNRScpXG5leHBvcnQgY29uc3QgVE9HR0xFX1BSRVZJRVdfUExBQ0VfT1JERVIgPSBjcmVhdGVBY3Rpb24oJ1RPR0dMRV9QUkVWSUVXX1BMQUNFX09SREVSJylcbmV4cG9ydCBjb25zdCBTRVRfRkVBVFVSRV9UT0dHTEUgPSBjcmVhdGVBY3Rpb248UGFydGlhbDxhbnk+PignU0VUX0ZFQVRVUkVfVE9HR0xFJylcbmV4cG9ydCBjb25zdCBTRVRfRkVBVFVSRVMgPSBjcmVhdGVBY3Rpb248YW55PignU0VUX0ZFQVRVUkVTJylcbmV4cG9ydCBjb25zdCBTRVRfQ09ORklHID0gY3JlYXRlQWN0aW9uPGFueT4oJ1NFVF9DT05GSUcnKVxuZXhwb3J0IGNvbnN0IFNFVF9DSEFOTkVMX1RPR0dMRSA9IGNyZWF0ZUFjdGlvbignU0VUX0NIQU5ORUxfVE9HR0xFJylcbi8vZXhwb3J0IGNvbnN0IFNFVF9DT05GSUdfQ09PS0lFID0gY3JlYXRlQWN0aW9uPENvbnN1bENvbmZpZz4oJ1NFVF9DT05GSUdfQ09PS0lFJylcbmV4cG9ydCBjb25zdCBUUkFDS19BRF9DT05USU5VRV9FUlJPUiA9IGNyZWF0ZUFjdGlvbjxzdHJpbmc+KCdUUkFDS19BRF9DT05USU5VRV9FUlJPUicpXG4iLCJleHBvcnQge1xuICBNT0RBTF9PUEVOLFxuICBNT0RBTF9DTE9TRSxcbiAgU0VUX09SREVSX1NVTU1BUllfVkFSSUFOVCxcbiAgVE9HR0xFX1BSRVZJRVdfUExBQ0VfT1JERVIsXG4gIFNFVF9CUkFORCxcbiAgU0VUX1RIRU1FLFxuICBTRVRfRkVBVFVSRV9UT0dHTEUsXG4gIFNFVF9DSEFOTkVMX1RPR0dMRSxcbiAgU0VUX0ZFQVRVUkVTLFxuICBTRVRfQ09ORklHLFxuICBUUkFDS19BRF9DT05USU5VRV9FUlJPUixcbn0gZnJvbSAnLi9hcHAnXG5cblxuZXhwb3J0IHsgR0VUX1dBTExFVF9TVUNDRVNTLCBHRVRfV0FMTEVUX0ZBSUxVUkUgfSBmcm9tICcuL3dhbGxldCdcblxuZXhwb3J0IHtcbiAgSU5JVF9VU0VSX0lORk9fUEFHRSxcbn0gZnJvbSAnLi9tZXRhJ1xuXG5cblxuZXhwb3J0IHsgUk9VVEVSX0xPQ0FUSU9OX0NIQU5HRSB9IGZyb20gJy4vcm91dGVyJ1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IEdldFdhbGxldEFQSVBheWxvYWQgfSBmcm9tICd0eXBlcy9hcGknXG5cbmV4cG9ydCBjb25zdCBJTklUX1VTRVJfSU5GT19QQUdFID0gY3JlYXRlQWN0aW9uPEdldFdhbGxldEFQSVBheWxvYWQ+KCdHRVRfV0FMTEVUX1NVQ0NFU1MnKVxuZXhwb3J0IGNvbnN0IEdFVF9XQUxMRVRfRkFJTFVSRSA9IGNyZWF0ZUFjdGlvbignR0VUX1dBTExFVF9GQUlMVVJFJylcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBMT0NBVElPTl9DSEFOR0UgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyTG9jYXRpb25DaGFuZ2VBY3Rpb25QYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJPVVRFUl9MT0NBVElPTl9DSEFOR0UgPSBjcmVhdGVBY3Rpb248Um91dGVyTG9jYXRpb25DaGFuZ2VBY3Rpb25QYXlsb2FkPihMT0NBVElPTl9DSEFOR0UpXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgR2V0V2FsbGV0QVBJUGF5bG9hZCB9IGZyb20gXCJ0eXBlcy9hcGlcIjtcbmltcG9ydCB7IEdldFdhbGxldEFQSVBheWxvYWRGYWlsdXJlIH0gZnJvbSBcInR5cGVzL2FwaS9hY2NvdW50L3dhbGxldFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX1dBTExFVF9TVUNDRVNTID1cbiAgY3JlYXRlQWN0aW9uPEdldFdhbGxldEFQSVBheWxvYWQ+KFwiR0VUX1dBTExFVF9TVUNDRVNTXCIpO1xuZXhwb3J0IGNvbnN0IEdFVF9XQUxMRVRfRkFJTFVSRSA9XG4gIGNyZWF0ZUFjdGlvbjxHZXRXYWxsZXRBUElQYXlsb2FkRmFpbHVyZT4oXCJHRVRfV0FMTEVUX0ZBSUxVUkVcIik7XG4iLCJpbXBvcnQgeyBjYW5Vc2VEb20gfSBmcm9tIFwiQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHNcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL3V0aWxzL0xvZ2dlclwiO1xuXG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gXCIuL2VuZHBvaW50c1wiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi9oZWxwZXJzL3JlcXVlc3RIZWxwZXJzXCI7XG5pbXBvcnQge1xuICBBUElSZXNwb25zZSxcbiAgLy8gQ3JlYXRlQW5vbnltb3VzU2Vzc2lvbkFQSVJlcXVlc3QsXG4gIC8vIENyZWF0ZUFub255bW91c1Nlc3Npb25BUElSZXNwb25zZSxcbn0gZnJvbSBcInR5cGVzL2FwaVwiO1xuXG5jb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbmludGVyZmFjZSBBcGkge1xuICAvLyBXYWxsZXRcbiAgZ2V0V2FsbGV0OiAodXNlcklkOiBzdHJpbmcsIGNvb2tpZTogc3RyaW5nKSA9PiB1bmtub3duO1xuICAvLyBTZXNzaW9uXG4gIC8vIGNyZWF0ZUFub255bW91c1Nlc3Npb246IChvcHRpb25zOiBDcmVhdGVBbm9ueW1vdXNTZXNzaW9uQVBJUmVxdWVzdCkgPT4gQ3JlYXRlQW5vbnltb3VzU2Vzc2lvbkFQSVJlc3BvbnNlXG59XG5cbmNvbnN0IGFwaUZhY3RvcnkgPSAoKTogQXBpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvKlxuXG4gICAgLy8gV2FsbGV0IGhvdyB0aGUgZmluYWwgcGF0aCBsb29rIGxpa2U6XG5cbiAgICAxLlxuICAgIHByb2RcbiAgICBcIkFDQ09VTlRfQVBJXCI6IFwiaHR0cHM6Ly9hcmdvcy1hY2NvdW50LWFjY291bnQtc2VydmljZS5pbnQucHJkLmpzcGFhcy51a1wiLFxuICAgIHN0YWdlIFxuICAgIFwiQUNDT1VOVF9BUElcIjogXCJodHRwczovL2FyZ29zLWFjY291bnQtYWNjb3VudC1zZXJ2aWNlLmludC5zdGcuanNwYWFzLnVrXCIsXG4gICAgc3R1YnMgXG4gICAgXCJBQ0NPVU5UX0FQSVwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAxMVwiLFxuXG4gICAgMi5cbiAgICBjb25maWcuYWNjb3VudEFwaVNlcnZlciA9IHByb2Nlc3MuZW52LkFDQ09VTlRfQVBJXG4gICAgY29uZmlnLmFjY291bnRBcGlCYXNlVXJsID0gYC9hY2NvdW50LWFwaWAsXG5cbiAgICBjb25zdCBhY2NvdW50QXBpU2VydmVyID0gYWNjb3VudEFwaUVuZHBvaW50KCkgPT4gY29uZmlnLmFjY291bnRBcGlTZXJ2ZXJ9JHtjb25maWcuYWNjb3VudEFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG4gICAgUVVFUktZIEJJVCA9ICR7ZW5kcG9pbnR9IGlzIGFsd2F5IGVtcHR5IGNhdXNlIHdlIGRvIG5vdCBwYXNzIGFueXRoaW5nIHRvIHRoZSBtZXRob2QgYWNjb3VudEFwaUVuZHBvaW50KClcblxuXG4gICAgYWNjb3VudCBwYXRoID0gYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGFjY291bnRBcGlFbmRwb2ludCgpIFxuICAgIENsaWVudCA6IGVtcHR5IGNhblVzZURvbSgpICYmICcnXG4gICAgU0VSVkVSOiBodHRwOi8vbG9jYWxob3N0OjMwMTEvYWNjb3VudC1hcGkvXG5cblxuICAgIC0tLS0tVVJMIGFsbCB0b2dldGhlci0tLS0tXG5cbiAgICAvLyBjb25zdCBlbmRwb2ludCA9IGVuZHBvaW50cy5nZXRXYWxsZXQoMTEpID0+IGAke2FjY291bnR9L3VzZXJzLzExL3dhbGxldGBcblxuICAgIENsaWVudCA6IC91c2Vycy8xMS93YWxsZXRcbiAgICBTRVJWRVI6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9hY2NvdW50LWFwaS91c2Vycy8xMS93YWxsZXRcbiovXG5cbiAgICBnZXRXYWxsZXQ6ICh1c2VySWQsIGNvb2tpZSkgPT5cbiAgICAgIHJlcXVlc3QuZ2V0KGVuZHBvaW50cy5nZXRXYWxsZXQodXNlcklkKSkuc2V0KHsgQ29va2llOiBjb29raWUgfSksXG4gICAgLy8gU2Vzc2lvblxuICAgIC8vIGNyZWF0ZUFub255bW91c1Nlc3Npb246IChvcHRpb25zKSA9PlxuICAgIC8vIHJlcXVlc3QucG9zdChlbmRwb2ludHMuY3JlYXRlQW5vbnltb3VzU2Vzc2lvbigpLCBvcHRpb25zKSBhcyB1bmtub3duIGFzIENyZWF0ZUFub255bW91c1Nlc3Npb25BUElSZXNwb25zZSxcbiAgfTtcbn07XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byByZWFkIHN1cGVyYWdlbnQgcmVzcG9uc2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jlc3BvbnNlPFQ+KFxuICByZXNwb25zZTogQVBJUmVzcG9uc2U8VD4sXG4gIHNob3VsZFJlZGlyZWN0VG9Mb2dpbiA9IHRydWVcbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0sgaXMgUkVTUE9NU0VcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcblxuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgTG9nZ2VyLmZhdGFsKFwiV2UgZGlkbid0IGdldCBhIHJlc3BvbnNlXCIpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZWplY3QocmVzcG9uc2UpO1xuXG4gICAgICBMb2dnZXIuZXJyb3Ioe1xuICAgICAgICBtZXRob2Q6IHJlc3BvbnNlLnJlcXVlc3QubWV0aG9kLFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnJlcXVlc3QudXJsLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgdGV4dDogcmVzcG9uc2UudGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgc2hvdWxkUmVkaXJlY3RUb0xvZ2luKSB7XG4gICAgICBpZiAoY2FuVXNlRG9tKCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YDtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2xvZ2luP3BhZ2VOYW1lPW1hbmRhdG9yeVByZXBheSZzdWNjZXNzVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgIHN1Y2Nlc3NVcmxcbiAgICAgICAgKX1gO1xuICAgICAgfVxuXG4gICAgICByZWplY3QocmVzcG9uc2UpO1xuXG4gICAgICBMb2dnZXIuZXJyb3Ioe1xuICAgICAgICBtZXRob2Q6IHJlc3BvbnNlLnJlcXVlc3QubWV0aG9kLFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnJlcXVlc3QudXJsLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgdGV4dDogcmVzcG9uc2UudGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcblxuICAgICAgTG9nZ2VyLmVycm9yKHtcbiAgICAgICAgbWV0aG9kOiByZXNwb25zZS5yZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgdXJsOiByZXNwb25zZS5yZXF1ZXN0LnVybCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHRleHQ6IHJlc3BvbnNlLnRleHQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uub2spIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuYm9keSk7XG5cbiAgICAgIExvZ2dlci5kZWJ1Zyh7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAvLyBoaWRlIHN1Y2Nlc3MgYm9keSBpbiBwcm9kIGFzIGl0IGNvbnRhaW5zIGN1c3RvbWVyIGRhdGFcbiAgICAgICAgdGV4dDogaXNQcm9kdWN0aW9uID8gdW5kZWZpbmVkIDogcmVzcG9uc2UudGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2Uub2spIHtcbiAgICAgIHJlamVjdChyZXNwb25zZSk7XG5cbiAgICAgIExvZ2dlci5lcnJvcih7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICB0ZXh0OiByZXNwb25zZS50ZXh0LFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpRmFjdG9yeSgpO1xuIiwiaW1wb3J0IHtcbiAgYWNjb3VudEFwaUVuZHBvaW50LFxuICBzZXNzaW9uTWFuYWdlckVuZHBvaW50XG59IGZyb20gJy4uL2hlbHBlcnMvYXBpVXJsSGVscGVycydcblxuXG5jb25zdCBhY2NvdW50ID0gYWNjb3VudEFwaUVuZHBvaW50KClcbmNvbnN0IHNlc3Npb24gPSBzZXNzaW9uTWFuYWdlckVuZHBvaW50KClcbmludGVyZmFjZSBFbmRwb2ludHMge1xuICBnZXRXYWxsZXQ6ICh1c2VySWQ6IHN0cmluZykgPT4gc3RyaW5nXG4gIGNyZWF0ZUFub255bW91c1Nlc3Npb246ICgpID0+IHN0cmluZ1xufVxuXG5jb25zdCBlbmRwb2ludHM6IEVuZHBvaW50cyA9IHtcbiAgLy8gV2FsbGV0XG4gIGdldFdhbGxldDogKHVzZXJJZCkgPT4gYCR7YWNjb3VudH0vdXNlcnMvJHt1c2VySWR9L3dhbGxldGAsXG5cbiAgLy8gU2Vzc2lvblxuICBjcmVhdGVBbm9ueW1vdXNTZXNzaW9uOiAoKSA9PiBgJHtzZXNzaW9ufS9zZXNzaW9ucy9hbm9ueW1vdXNgLFxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmRwb2ludHNcbiIsImltcG9ydCBhcGksIHsgY2hlY2tSZXNwb25zZSB9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuL2VuZHBvaW50cydcblxuZXhwb3J0IHsgY2hlY2tSZXNwb25zZSwgZW5kcG9pbnRzIH1cblxuZXhwb3J0IGRlZmF1bHQgYXBpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGNhblVzZURvbSB9IGZyb20gJ0BzYWluc2J1cnlzLXRlY2gvYm9sdHVpLXV0aWxzJ1xuXG5jb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVCB8fCAnbG9jYWxob3N0J1xuY29uc3QgcG9ydCA9ICc4MDgwJ1xuY29uc3QgcHJlcGF5QXBpID0gcHJvY2Vzcy5lbnYuR0FURVdBWV9BUEkgfHwgJydcbmNvbnN0IGFjY291bnRBcGkgPSBwcm9jZXNzLmVudi5BQ0NPVU5UX0FQSSB8fCAnJ1xuY29uc3QgbWFya2V0aW5nQVBJID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5jb25zdCBwcm9kdWN0QXBpID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5jb25zdCBzZXNzaW9uTWFuYWdlckFwaSA9IGNhblVzZURvbSgpID8gJycgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuY29uc3QgZ2V0VXNlckluZm9BcGkgPSBwcm9jZXNzLmVudi5XQ1NfQVBJIHx8ICcnXG5jb25zdCB2YXRSZWNlaXB0QXBpID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5cbmludGVyZmFjZSBHaWZ0Q2FyZCB7XG4gIGJpblJhbmdlPzogc3RyaW5nXG4gIG1pbkxlbmd0aD86IG51bWJlclxuICBtYXhMZW5ndGg/OiBudW1iZXJcbiAgcGluTnVtYmVyTGVuZ3RoPzogbnVtYmVyXG4gIHNlY3VyaXR5Q29kZUxlbmd0aD86IG51bWJlclxuICBpbWFnZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBHaWZ0Q2FyZFR5cGVzIHtcbiAgJ0dFTkVSSUMnID0gJ0dFTkVSSUMnLFxuICAnQ0FSRF9HSUZUX0FSR09TJyA9ICdDQVJEX0dJRlRfQVJHT1MnLFxuICAnTkVXX0dJRlRfQ0FSRF9BUkdPUycgPSAnTkVXX0dJRlRfQ0FSRF9BUkdPUycsXG4gICdDQVJEX0dJRlRfRkxFWEVDQVNIJyA9ICdDQVJEX0dJRlRfRkxFWEVDQVNIJyxcbn1cblxuZXhwb3J0IHR5cGUgTGVnYWN5Q29uZmlnID0ge1xuICBhcHA6IHtcbiAgICByb290Rm9udFNpemU6IG51bWJlclxuICB9XG4gIHBheW1lbnRNZXRob2RzT3JkZXI6IFJlYWRvbmx5QXJyYXk8W10+XG4gIHBheW1lbnRNZXRob2RSb3V0ZXM6IFJlY29yZDxzdHJpbmcsIFtdPlxuICBwbGFjZU9yZGVyQW5pbWF0aW9uOiB7XG4gICAgc2Vhc29uczogeyBbJ2tleSddOiBhbnkgfVxuICAgIFtrZXk6IHN0cmluZ106IGFueVxuICB9XG5cbiAgcHJlcGF5QXBpU2VydmVyOiBzdHJpbmdcbiAgYWNjb3VudEFwaVNlcnZlcjogc3RyaW5nXG4gIHByb2R1Y3RBcGlTZXJ2ZXI6IHN0cmluZ1xuICBtYXJrZXRpbmdBcGlTZXJ2ZXI6IHN0cmluZ1xuICBzZXNzaW9uTWFuYWdlclNlcnZlcjogc3RyaW5nXG4gIGdldFVzZXJJbmZvQXBpU2VydmVyOiBzdHJpbmdcbiAgZ2V0VmF0UmVjZWlwdFNlcnZlcjogc3RyaW5nXG4gIHByZXBheUFwaUJhc2VVcmw6IHN0cmluZ1xuICBvcmRlckFwaUJhc2VVcmw6IHN0cmluZ1xuICBhY2NvdW50QXBpQmFzZVVybDogc3RyaW5nXG4gIHByb2R1Y3RBcGlCYXNlVXJsOiBzdHJpbmdcbiAgbWFya2V0aW5nQXBpQmFzZVVybDogc3RyaW5nXG4gIHNlc3Npb25NYW5hZ2VyQmFzZVVybDogc3RyaW5nXG4gIGdldFVzZXJJbmZvQXBpQmFzZVVybDogc3RyaW5nXG4gIGdldFZhdFJlY2VpcHRBcGlCYXNlVXJsOiBzdHJpbmdcbiAgbmVjdGFyOiB7XG4gICAgQ0FSRF9ORUNUQVI6IHtcbiAgICAgIGJpbk51bWJlcjogc3RyaW5nXG4gICAgICBjYXJkTnVtYmVyTGVuZ3RoOiBudW1iZXJcbiAgICB9XG4gIH1cbiAgZ2lmdENhcmRUeXBlczoge1xuICAgIFtrZXkgaW4gR2lmdENhcmRUeXBlc106IEdpZnRDYXJkXG4gIH1cblxuICAvLyBmYWxsYmFjayBhcyB3ZSBjb250aW51ZSB0byB0eXBlIHRoaXNcbiAgLy8gYmVjYXVzZSBvZiB0aGUgXCJhcyBjb25zdFwiIG1vc3QgdHlwZXMgc2hvdWxkIGJlIGluZmVycmVkIGFueXdheVxuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgY29uZmlnID0ge1xuICBob3N0LFxuICBwb3J0LFxuICBwcmVwYXlBcGlTZXJ2ZXI6IHByZXBheUFwaSxcbiAgYWNjb3VudEFwaVNlcnZlcjogYWNjb3VudEFwaSxcbiAgcHJvZHVjdEFwaVNlcnZlcjogcHJvZHVjdEFwaSxcbiAgZ2V0VmF0UmVjZWlwdFNlcnZlcjogdmF0UmVjZWlwdEFwaSxcbiAgbWFya2V0aW5nQXBpU2VydmVyOiBtYXJrZXRpbmdBUEksXG4gIHNlc3Npb25NYW5hZ2VyU2VydmVyOiBzZXNzaW9uTWFuYWdlckFwaSxcbiAgZ2V0VXNlckluZm9BcGlTZXJ2ZXI6IGdldFVzZXJJbmZvQXBpLFxuICBwcmVwYXlBcGlCYXNlVXJsOiBgL2NoZWNrb3V0LWFwaS12MmAsXG4gIG9yZGVyQXBpQmFzZVVybDogYC9jaGVja291dC1hcGktdjJgLFxuICBhY2NvdW50QXBpQmFzZVVybDogYC9hY2NvdW50LWFwaWAsXG4gIHByb2R1Y3RBcGlCYXNlVXJsOiBgL2NoZWNrb3V0L3Byb3h5L3Byb2R1Y3QtZ2F0ZXdheWAsXG4gIG1hcmtldGluZ0FwaUJhc2VVcmw6IGAvY2hlY2tvdXQvcHJveHkvbWFya2V0aW5nLXByZWZlcmVuY2VzYCxcbiAgc2Vzc2lvbk1hbmFnZXJCYXNlVXJsOiBgL2ludGVybmFsL3Byb3h5L3Nlc3Npb24tbWFuYWdlcmAsXG4gIGdldFVzZXJJbmZvQXBpQmFzZVVybDogYC93ZWJhcHAvd2NzL3N0b3Jlcy9zZXJ2bGV0L0dldFVzZXJJbmZvYCxcbiAgZ2V0VmF0UmVjZWlwdEFwaUJhc2VVcmw6IGAvY2hlY2tvdXQvcHJveHkvcmVjZWlwdC1zZXJ2aWNlYCxcbiAgYXBwOiB7XG4gICAgcm9vdEZvbnRTaXplOiAxNixcbiAgfSxcbiAgdGltaW5nczoge1xuICAgIGZhZGVJbk91dDogMjAwLFxuICAgIHNuYXBzaG90TG9ja0RlbGF5OiA1MDAwLFxuICAgIHBsYWNlT3JkZXJTaG93RXJyb3JEZWxheTogNTAwLFxuICB9LFxuICBwYXltZW50TWV0aG9kUm91dGVzOiB7XG4gICAgZGVmYXVsdDogJ1BheW1lbnRNZXRob2RSb3V0ZXMuREVGQVVMVCcsXG4gICAgY3JlZGl0RGViaXRDYXJkOiAnUGF5bWVudE1ldGhvZFJvdXRlcy5DQVJEX0RFQklUJyxcbiAgICBwYXlwYWw6ICdQYXltZW50TWV0aG9kUm91dGVzLlBBWVBBTCcsXG4gICAgYXBwbGVQYXk6ICdQYXltZW50TWV0aG9kUm91dGVzLkFQUExFX1BBWScsXG4gICAgYXJnb3NDYXJkQ3JlZGl0UGxhbjogJ1BheW1lbnRNZXRob2RSb3V0ZXMuQ0FSRF9BUkdPU19DUkVESVQnLFxuICB9LFxuICBzdGF0dXNlczoge1xuICAgIGluaXRpYWxpc2F0aW9uSW5Qcm9ncmVzczogMjAyLFxuICB9LFxuICBwYXltZW50TWV0aG9kc09yZGVyOiBbXG4gICAgJ0NBUkRfREVCSVQnLFxuICAgICdDQVJEX0FSR09TX0NSRURJVCcsXG4gICAgJ1BBWVBBTCcsXG4gICAgJ0FQUExFX1BBWScsXG4gIF0sXG4gIG5lY3Rhcjoge1xuICAgIENBUkRfTkVDVEFSOiB7XG4gICAgICBiaW5OdW1iZXI6ICc5ODI2MzAwMCcsXG4gICAgICBjYXJkTnVtYmVyTGVuZ3RoOiAxMSxcbiAgICB9LFxuICB9LFxuICBnaWZ0Q2FyZFR5cGVzOiB7XG4gICAgR0VORVJJQzoge30sXG4gICAgQ0FSRF9HSUZUX0FSR09TOiB7XG4gICAgICBiaW5SYW5nZTogJzEwMDAwJyxcbiAgICAgIG1pbkxlbmd0aDogMjAsXG4gICAgICBtYXhMZW5ndGg6IDIwLFxuICAgICAgcGluTnVtYmVyTGVuZ3RoOiA0LFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kxLmFkaXMud3MvaS9Bcmdvcy9HaWZ0Q2FyZCcsXG4gICAgfSxcbiAgICBORVdfR0lGVF9DQVJEX0FSR09TOiB7XG4gICAgICBiaW5SYW5nZTogJzk4MjYwMjc4JyxcbiAgICAgIG1pbkxlbmd0aDogMTksXG4gICAgICBtYXhMZW5ndGg6IDE5LFxuICAgICAgcGluTnVtYmVyTGVuZ3RoOiA0LFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kxLmFkaXMud3MvaS9Bcmdvcy9HaWZ0Q2FyZCcsXG4gICAgfSxcbiAgICBDQVJEX0dJRlRfRkxFWEVDQVNIOiB7XG4gICAgICBiaW5SYW5nZTogJzYzMzgyNycsXG4gICAgICBtaW5MZW5ndGg6IDE5LFxuICAgICAgbWF4TGVuZ3RoOiAxOSxcbiAgICAgIHNlY3VyaXR5Q29kZUxlbmd0aDogMyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pMS5hZGlzLndzL2kvQXJnb3MvRmxleGVjYXNoJyxcbiAgICB9LFxuICB9LFxuICBtYXhpbXVtTnVtYmVyT2ZHaWZ0Q2FyZHM6IDgsXG4gIHBsYWNlT3JkZXJBbmltYXRpb246IHtcbiAgICBzZWFzb25zOiB7XG4gICAgICBkZWZhdWx0OiAnU2Vhc29uLkRFRkFVTFQnLFxuICAgICAgeG1hczogJ1NlYXNvbi5YTUFTJyxcbiAgICAgIGRlZmF1bHRUdTogJ1NlYXNvbi5ERUZBVUxUX1RVJyxcbiAgICAgIHhtYXNUdTogJ1NlYXNvbi5YTUFTX1RVJyxcbiAgICAgIGRlZmF1bHRIYWJpdGF0OiAnU2Vhc29uLkRFRkFVTFRfSEFCSVRBVCcsXG4gICAgICB4bWFzSGFiaXRhdDogJ1NlYXNvbi5YTUFTX0hBQklUQVQnLFxuICAgICAgaGFsbG93ZWVuOiAnU2Vhc29uLkhBTExPV0VFTicsXG4gICAgICBwcmlkZTogJ1NlYXNvbi5QUklERScsXG4gICAgICBwcmlkZVR1OiAnU2Vhc29uLlBSSURFX1RVJyxcbiAgICAgIHByaWRlSGFiaXRhdDogJ1NlYXNvbi5QUklERV9IQUJJVEFUJyxcbiAgICAgIGJsYWNrSGlzdG9yeU1vbnRoOiAnU2Vhc29uLkJMQUNLX0hJU1RPUllfTU9OVEgnLFxuICAgICAgYmxhY2tIaXN0b3J5TW9udGhIYWJpdGF0OiAnU2Vhc29uLkJMQUNLX0hJU1RPUllfTU9OVEhfSEFCSVRBVCcsXG4gICAgICBibGFja0hpc3RvcnlNb250aFR1OiAnU2Vhc29uLkJMQUNLX0hJU1RPUllfTU9OVEhfVFUnLFxuICAgIH0sXG4gICAgaW5pdGlhbERlbGF5TXM6IDIwMDAsXG4gICAgY29sb3JzOiB7XG4gICAgICB2YXJpYW50czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYmdNYXNrOiAnI0ZGRjlGQScsXG4gICAgICAgIH0sXG4gICAgICAgIHhtYXM6IHt9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgbGlkOiB7XG4gICAgICAgIGFuaW1EdXJhdGlvbk1zOiA0MDAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByb2R1Y3RzOiB7XG4gICAgICB0b3RhbDogMyxcbiAgICAgIGFuaW1ZQXhpc01vdmVEaXN0YW5jZVB4OiAzMjAsXG4gICAgICBhbmltVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yODAsIDAuODQwLCAwLjQyMCwgMSknLFxuICAgICAgYW5pbUR1cmF0aW9uTXM6IDM1MDAsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBpbnRlcnZhbER1cmF0aW9uTXM6IDMwMDAsXG4gICAgICBvcHRpb25zOiBbJ0NhbGxpbmcgZWx2ZXMuLi4nLCAnU2hha2luZyBtaXN0bGV0b2UuLi4nLCAnV29ya2luZyBvdXIgbWFnaWMuLi4nLCBcIldvbid0IGJlIG11Y2ggbG9uZ2VyLi4uXCJdLFxuICAgIH0sXG4gIH0sXG59IGFzIGNvbnN0XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIiwiaW1wb3J0IHsgY2FuVXNlRG9tIH0gZnJvbSAnQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBwcmVwYXlBcGlFbmRwb2ludCA9IChlbmRwb2ludCA9ICcnKTogc3RyaW5nID0+XG4gIGAke2NhblVzZURvbSgpID8gJycgOiBjb25maWcucHJlcGF5QXBpU2VydmVyfSR7Y29uZmlnLnByZXBheUFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBhY2NvdW50QXBpRW5kcG9pbnQgPSAoZW5kcG9pbnQgPSAnJyk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLmFjY291bnRBcGlTZXJ2ZXJ9JHtjb25maWcuYWNjb3VudEFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBvcmRlckFwaUVuZHBvaW50ID0gKGVuZHBvaW50ID0gJycpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5wcmVwYXlBcGlTZXJ2ZXJ9JHtjb25maWcub3JkZXJBcGlCYXNlVXJsfSR7ZW5kcG9pbnR9YFxuXG5leHBvcnQgY29uc3QgcHJvZHVjdEFwaUVuZHBvaW50ID0gKGVuZHBvaW50ID0gJycpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5wcm9kdWN0QXBpU2VydmVyfSR7Y29uZmlnLnByb2R1Y3RBcGlCYXNlVXJsfSR7ZW5kcG9pbnR9YFxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbk1hbmFnZXJFbmRwb2ludCA9IChlbmRwb2ludCA9ICcnKTogc3RyaW5nID0+XG4gIGAke2NhblVzZURvbSgpID8gJycgOiBjb25maWcuc2Vzc2lvbk1hbmFnZXJTZXJ2ZXJ9JHtjb25maWcuc2Vzc2lvbk1hbmFnZXJCYXNlVXJsfSR7ZW5kcG9pbnR9YFxuXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm9BcGlFbmRwb2ludCA9ICgpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5nZXRVc2VySW5mb0FwaVNlcnZlcn0ke2NvbmZpZy5nZXRVc2VySW5mb0FwaUJhc2VVcmx9YFxuXG5leHBvcnQgY29uc3QgZ2V0VmF0UmVjZWlwdEVuZHBvaW50ID0gKCk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLmdldFZhdFJlY2VpcHRTZXJ2ZXJ9JHtjb25maWcuZ2V0VmF0UmVjZWlwdEFwaUJhc2VVcmx9YFxuXG5leHBvcnQgY29uc3QgbWFya2V0aW5nUHJlZmVyZW5jZXNBcGlFbmRwb2ludCA9ICgpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5tYXJrZXRpbmdBcGlTZXJ2ZXJ9JHtjb25maWcubWFya2V0aW5nQXBpQmFzZVVybH1gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgcmVxIGZyb20gJ3N1cGVyYWdlbnQnXG5cbi8vIFdlIGhhbmRsZSB0aGVzZSBlcnJvcnMgaW4gY2hlY2sgcmVzcG9uc2UgZnVuY3Rpb25cbmNvbnN0IGNhdGNoRXJyb3IgPSAocmVzOiByZXEuUmVzcG9uc2UpOiBib29sZWFuID0+IHJlcy5zdGF0dXMgPCA1MDBcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSB7XG4gIGdldDogKHVybDogc3RyaW5nKSA9PiByZXEuZ2V0KHVybCkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxuICBwb3N0OiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4gcmVxLnBvc3QodXJsLCBkYXRhKS50eXBlKCdqc29uJykub2soY2F0Y2hFcnJvciksXG4gIHBhdGNoOiAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4gcmVxLnBhdGNoKHVybCwgZGF0YSkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxuICBwdXQ6ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PiByZXEucHV0KHVybCwgZGF0YSkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxuICBkZWxldGU6ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PiByZXEuZGVsZXRlKHVybCwgZGF0YSkudHlwZSgnanNvbicpLm9rKGNhdGNoRXJyb3IpLFxufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IG1ldGEgZnJvbSBcIi4vbWV0YS9tZXRhUmVkdWNlclwiO1xuXG5jb25zdCBjcmVhdGVSb290UmVkdWNlciA9IChoaXN0b3J5KSA9PlxuICBjb21iaW5lUmVkdWNlcnMoe1xuICAgIG1ldGEsXG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpLFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuaW1wb3J0IHsgR0VUX1dBTExFVF9TVUNDRVNTLCBHRVRfV0FMTEVUX0ZBSUxVUkUgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgTWV0YVN0YXRlIH0gZnJvbSBcInR5cGVzL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IE1ldGFTdGF0ZSA9IHtcbiAgc2F2ZWRQYXltZW50TWV0aG9kczogW10sXG4gIGVycm9yOiBmYWxzZSxcbiAgaWQ6IFwiXCIsXG4gIHN0YXR1czogXCJJRExFXCIsXG4gIGN1c3RvbWVySWQ6IFwiMjJcIixcbn07XG5cbmNvbnN0IG1ldGFSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PlxuICBidWlsZGVyXG4gICAgLmFkZENhc2UoR0VUX1dBTExFVF9TVUNDRVNTLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzdGF0ZS5lcnJvciA9IGZhbHNlO1xuICAgICAgc3RhdGUuc3RhdHVzID0gXCJJRExFXCI7XG4gICAgICBjb25zb2xlLmxvZyhcInBheWxvYWQuc2F2ZWRQYXltZW50TWV0aG9kcztcIiwgcGF5bG9hZC5zYXZlZFBheW1lbnRNZXRob2RzKTtcbiAgICAgIHN0YXRlLnNhdmVkUGF5bWVudE1ldGhvZHMgPSBwYXlsb2FkLnNhdmVkUGF5bWVudE1ldGhvZHM7XG4gICAgfSlcbiAgICAuYWRkQ2FzZShHRVRfV0FMTEVUX0ZBSUxVUkUsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiSURMRVwiO1xuICAgICAgaWYgKFwic3RhdHVzXCIgaW4gcGF5bG9hZC5lcnJvcikge1xuICAgICAgICBzdGF0ZS5lcnJvciA9IHBheWxvYWQ7XG4gICAgICB9XG4gICAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQge1xuICB3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhXG59IGZyb20gJy4vbWV0YS9tZXRhU2FnYSdcblxuXG4vLyBXZSBvbmx5IHdhbnQgdG8gd2F0Y2ggdGhlICd3YXRjaGVyJyBzYWdhc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3QoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEluaXRVc2VySW5mb1BhZ2VTYWdhKSxcbiAgXSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcblxuaW1wb3J0IHtcbiAgSU5JVF9VU0VSX0lORk9fUEFHRSxcbiAgR0VUX1dBTExFVF9TVUNDRVNTLFxuICBHRVRfV0FMTEVUX0ZBSUxVUkUsXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XG5cbmltcG9ydCBhcGksIHsgY2hlY2tSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBpbml0VXNlckluZm9QYWdlU2FnYShhY3Rpb246IHsgcGF5bG9hZDogeyBjb29raWU6IHN0cmluZyB9IH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBwYXlsb2FkOiB7IGNvb2tpZSB9LFxuICAgIH0gPSBhY3Rpb247XG5cbiAgICAvLyBvdGhlciBlc3NlbnRpYWwgYWN0aW9uIG9uIGxvYWQgcGFnZSB0aG9zZSBjYWxsIGFyZSBiYXNlZCBvbiBjb29raWUgYXV0aG9yaXphdGlvblxuXG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tZ2V0IHcgd2FsbGV0IHNhZ2EgY2FsbGVkICEhISB3aXRoIGNvb2tpZVwiLCBjb29raWUpO1xuICAgIGNvbnN0IGlkID0gXCI0MzQzXCI7XG5cbiAgICAvLyB3aGVuIHRoZSBBUEkgcmVzcG9uc2Ugd2l0aCBBUEkgZXJyb3IgdGhpcyBzdGlsbCB3b250IGZhbGwgaW4gY2F0Y2hcbiAgICAvLyB5b3UgbmVlZCBhY3R1YWwganMgZXJyb3IgdG8gZmFsbCBpbiBjYXRjaCBzbyBmb3IgZXhhbXBsZSBhY2Nlc3NpbmcgdmFsdWUgdGhhdCBkb2VzIG5vdCBleGlzdHNcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXBpLmdldFdhbGxldCwgaWQsIGNvb2tpZSk7XG4gICAgLy8gY2hlY2sgcmVzcG9uc2Ugd2lsbCBjaGVjayBmb3IgZXJyb3IgYmFzaWNhbGx5IGJvZHkgYmVpbmcgZW1wdHkgYW5kIHN0YXR1c1xuXG4gICAgY29uc3Qgd2FsbGV0ID0geWllbGQgY2FsbChjaGVja1Jlc3BvbnNlLCByZXNwb25zZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIndhbGxldC4uLi4uLi4uLlwiLCB3YWxsZXQpO1xuICAgIHlpZWxkIHB1dChHRVRfV0FMTEVUX1NVQ0NFU1Mod2FsbGV0KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSBlcnJvciB8fCB7fTtcbiAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlIHx8IHt9O1xuXG4gICAgLy8gaWYgdXNlciBpcyBVbmF1dGhvcml6ZWQgdGhlbiBpbiBVSSBpdCB3aWxsIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcbiAgICBsb2dnZXIuY29sb3IoXCJyZWRcIikubG9nKFwiRXJyb3IgcmVzcG9uc2VcIiwge1xuICAgICAgbmFtZTogXCJpbml0VXNlckluZm9QYWdlU2FnYVwiLFxuICAgICAgbXNnOiBcIkVycm9yIGluaXRVc2VySW5mb1BhZ2VTYWdhXCIsXG4gICAgICBkZXRhaWw6IG1lc3NhZ2UsXG4gICAgICBzdGF0dXMsXG4gICAgICBib2R5LFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dChHRVRfV0FMTEVUX0ZBSUxVUkUoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoSW5pdFVzZXJJbmZvUGFnZVNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoSU5JVF9VU0VSX0lORk9fUEFHRSwgaW5pdFVzZXJJbmZvUGFnZVNhZ2EpO1xufVxuIiwiaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XG5cbmltcG9ydCB7IG5jb25mIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2VudmNvbmZpZy9lbnZDb25maWcnO1xuXG5jb25zdCBpc1N0dWIgPVxuICBuY29uZi5nZXQoJ05PREVfRU5WJykgPT09ICdzdHViJyB8fCBuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSA9PT0gJ3JlbW90ZVN0dWInO1xuXG5leHBvcnQgY29uc3QgcmVjZWlwdFNlcnZpY2VQcm94eSA9IHByb3h5KG5jb25mLmdldCgnUkVDRUlQVF9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gdXJsLnBhcnNlKHJlcS51cmwpLnBhdGgsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrb3V0U2VydmljZVByb3h5ID0gcHJveHkobmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLCB7XG4gIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocmVxKSA9PiBgL2NoZWNrb3V0LWFwaS12MiR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGh9YCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFya2V0aW5nUHJlZmVyZW5jZVNlcnZpY2VQcm94eSA9IHByb3h5KFxuICBuY29uZi5nZXQoJ01BUktFVElOR19QUkVGRVJFTkNFX0FQSScpLFxuICB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+IGAvY3BtL2NvbnNlbnRzJHt1cmwucGFyc2UocmVxLnVybCkucGF0aH1gLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFNlcnZpY2VQcm94eSA9IHByb3h5KG5jb25mLmdldCgnQUNDT1VOVF9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gYC9hY2NvdW50LWFwaSR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGh9YCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgd2NzUHJveHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKFxuICAgIHVybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZSA9PT0gJy9Eb0xvb2t1cEFkZHJlc3MnIHx8XG4gICAgdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lID09PSAnL1Ryb2xsZXlZb3VyRGV0YWlscydcbiAgKSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBwcm94eShuY29uZi5nZXQoJ1dDU19BUEknKSwge1xuICAgIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocHJveHlSZXEpID0+XG4gICAgICBgL3dlYmFwcC93Y3Mvc3RvcmVzL3NlcnZsZXQke3VybC5wYXJzZShwcm94eVJlcS51cmwpLnBhdGh9YCxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlYWxpdW1Qcm94eSA9IHByb3h5KCdodHRwczovL3RhZ3MudGlxY2RuLmNvbScsIHtcbiAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+XG4gICAgYC91dGFnL2FyZ29zLyR7Z2V0VGVhbGl1bUJyYW5kKHJlcS5icmFuZCl9LyR7Z2V0VGVhbGl1bUVudigpfS8ke1xuICAgICAgdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhcbiAgICB9YCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3R1YkRhc2hib2FyZFByb3h5ID0gcHJveHkobmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLCB7XG4gIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocmVxKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1BST1hZID09PiByZXEudXJsJywgcmVxLnVybCk7XG4gICAgcmV0dXJuIHVybC5wYXJzZShyZXEudXJsKS5wYXRoO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzdHViRW5kcG9pbnRQcm94eSA9IHByb3h5KG5jb25mLmdldCgnR0FURVdBWV9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gYC9wYXltZW50LXN0dWIke3VybC5wYXJzZShyZXEudXJsKS5wYXRofWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0dWJQcm94eSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXR1cm4gcHJveHkobmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLCB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChwcm94eVJlcSkgPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IHByb3h5UmVxLm9yaWdpbmFsVXJsLnNwbGl0KCcvcHJveHknKVsxXTtcbiAgICAgIHJldHVybiBgJHtwYXRofWA7XG4gICAgfSxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RHYXRld2F5UHJveHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGlzU3R1Yikge1xuICAgIHJldHVybiBzdHViUHJveHkocmVxLCByZXMsIG5leHQpO1xuICB9XG5cbiAgaWYgKCFyZXEudmF1bHQucGRwLnVybCB8fCAhcmVxLnZhdWx0LnBkcC5rZXkpIHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLnNlbmQoJ01pc3NpbmcgY29uZmlnLiBQbGVhc2UgY2hlY2sgdGhlIFZhdWx0IGNvbmZpZyBpcyB3b3JraW5nLicpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBvcmlnaW4sIHBhdGhuYW1lIH0gPSBuZXcgVVJMKHJlcS52YXVsdC5wZHAudXJsKTtcblxuICAvLyBQcm94eSB0byBwcm9kdWN0LWFwaVxuICByZXR1cm4gcHJveHkob3JpZ2luLCB7XG4gICAgcHJveHlSZXFPcHREZWNvcmF0b3I6IChwcm94eVJlcU9wdHMpID0+IHtcbiAgICAgIHByb3h5UmVxT3B0cy5oZWFkZXJzLmFjY2VwdCA9ICdhcHBsaWNhdGlvbi92bmQuYXJnb3MtcHJvZHVjdC52MS41K2pzb24nO1xuICAgICAgcHJveHlSZXFPcHRzLmhlYWRlcnNbJ3gtYXBpLWtleSddID0gcmVxLnZhdWx0LnBkcC5rZXk7XG4gICAgICBpZiAobmNvbmYuZ2V0KCdFTlZfQ09ORklHJykgIT09ICdyZW1vdGVTdHViJylcbiAgICAgICAgZGVsZXRlIHByb3h5UmVxT3B0cy5oZWFkZXJzLmNvb2tpZTtcbiAgICAgIHJldHVybiBwcm94eVJlcU9wdHM7XG4gICAgfSxcbiAgICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHByb3h5UmVxKSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0c1BhdGggPSBwcm94eVJlcS5vcmlnaW5hbFVybC5zcGxpdCgnL3Byb2R1Y3QtZ2F0ZXdheScpWzFdO1xuXG4gICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtwcm9kdWN0c1BhdGh9YDtcbiAgICB9LFxuICB9KShyZXEsIHJlcywgbmV4dCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbk1hbmFnZXJQcm94eSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoaXNTdHViKSB7XG4gICAgcmV0dXJuIHN0dWJQcm94eShyZXEsIHJlcywgbmV4dCk7XG4gIH1cblxuICAvLyBQcm94eSB0byBTZXNzaW9uIE1hbmFnZXJcbiAgcmV0dXJuIHByb3h5KG5jb25mLmdldCgnU0VTU0lPTl9NQU5BR0VSX0FQSScpLCB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChwcm94eVJlcSkgPT4ge1xuICAgICAgcmV0dXJuIHByb3h5UmVxLm9yaWdpbmFsVXJsLnNwbGl0KCcvc2Vzc2lvbi1tYW5hZ2VyJylbMV07XG4gICAgfSxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpc2hsaXN0TW9jayA9IChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbih7XG4gICAgZGF0YToge1xuICAgICAgd2lzaGxpc3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyBwYXJ0TnVtYmVyOiAnODA4NzE1OScgfSxcbiAgICAgICAgICAgIHsgcGFydE51bWJlcjogJzg1NTkxOTknIH0sXG4gICAgICAgICAgICB7IHBhcnROdW1iZXI6ICc4MjY4NDk3JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlZHV4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5cbiBpbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgcm91dGVzLCB7IHByb2Nlc3NSb3V0ZXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3JvdXRlc1wiO1xuaW1wb3J0IHsgZ2V0SnNGaWxlcyB9IGZyb20gXCIuLi9zZXJ2ZXJSZW5kZXJpbmdIZWxwZXJzXCI7IFxuXG5cblxuY29uc3Qgc3NyTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBGT1IgTk9XXG4gIC8vIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwicmVxdWVzdGVkIHJlcS51cmxcIiwgcmVxLnVybCk7XG4gIC8vIHRoaXMgZ29lcyB0aHJvdWdoIGFsbCByb3V0ZXMgaW4gYXBwbGljYXRpb247XG4gIC8qIGNvbnN0IGFjdGl2ZVJvdXRlID1cbiAgICByb3V0ZXMuZmluZCgocm91dGUsIGkpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9OyAqL1xuXG4gICAvLyBGT1IgTk9XXG4gIC8vIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwiYWN0aXZlUm91dGVcIiwgYWN0aXZlUm91dGUpO1xuXG4gIC8qKiAqKioqKiogUmVkdXggc2VydmVyIHNldHVwICoqKioqICovXG5cbiAgLy8gc2V0IGluaXRpYWwgc3RvcmUgdG8gYmUgcGFzc2VkIHRvIGNsaWVudCBpbiB3aW5kb3cuX2RhdGFcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1ldGE6IHt9LFxuICB9O1xuXG4gIC8vIFUgY2FuIG5vdCB1c2UgQnJvd3NlclJvdXRlciBjYXVzZSB0aGUgcm91dGVzIGFyZSBwcm9jZXNzZWQgb24gc2VydmVyIG5vdCBhIGNsaWVudFxuICBjb25zdCBtZW1vcnlIaXN0b3J5ID0gY3JlYXRlTWVtb3J5SGlzdG9yeSh7IGluaXRpYWxFbnRyaWVzOiBbcmVxLnVybF0gfSk7XG4gIC8vIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUobWVtb3J5SGlzdG9yeSwgaW5pdGlhbFN0YXRlKTtcblxuICAvKiogKiAqL1xuXG4gIC8vIFdhaXRzIGZvciBhc3luY2hyb25vdXMgYWN0aW9ucyBsaWtlIEFQSSBjYWxsc1xuICAvLyBiZWZvcmUgcmVuZGVyaW5nIHRoZSBIVE1MXG4gIC8vIHVuZGVmaW5lZCBpcyBhIHdheSBvZiBub3Qgc2V0dGluZyBhIHZhbHVlIGZvciB0aGUgZmlyc3QgcGFyYW0gaW4gdGhpcyBjYXNlXG4gIC8vIHByb2Nlc3NSb3V0ZXMocm91dGVzUHJvY2Vzc2luZyA9IHJvdXRlcyxzdG9yZSwgcmVxKSA9IHVuZGVmaW5lZCB3aWxsIGNhdXNlIHJvdXRlc1Byb2Nlc3NpbmcgPSByb3V0ZXMgc28gd2lsbCB0YWtlIGRlZmF1bHQgb2YgdGhlIGZ1bmN0aW9uXG4gIGNvbnN0IHdhaXRGb3JBc3luY0FjdGlvbnMgPSBbcHJvY2Vzc1JvdXRlcyhcbiAgICB1bmRlZmluZWQsXG4gICAgbWVtb3J5SGlzdG9yeSxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVxLFxuICAgIHJlc1xuICApXTtcbiAgY29uc29sZS5sb2coJ3dhaXRGb3JBc3luY0FjdGlvbnMnKVxuXG4gICAgUHJvbWlzZS5hbGwod2FpdEZvckFzeW5jQWN0aW9ucylcbiAgICAvLyBQcm9taXNlIGFsbCByZXNvbHZlIGFsbCBwcm9taXNlcyByZXN1bHQgaW4gYXJyYXkgc28gW3N0b3JlXVxuICAgIC50aGVuKChbc3RvcmVdKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgYSBjb250ZXh0IGZvciA8U3RhdGljUm91dGVyPiwgd2hpY2ggd2lsbCBhbGxvdyB1cyB0b1xuICAgICAgLy8gcXVlcnkgZm9yIHRoZSByZXN1bHRzIG9mIHRoZSByZW5kZXIuXG4gICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdG9yZScsIHN0b3JlLmdldFN0YXRlKCkpXG5cbiAgICAgIC8vIEFzIHdlIGFyZSBjb2RlIHNwbGl0dGluZywgd2UgbmVlZCB0byBmaW5kIG91dCB3aGljaCBjaHVua3NcbiAgICAgIC8vIHRoZSBTU1IgdXNlcyBzbyB0aGUgY2xpZW50IGNhbiB1c2UgdGhlbS4gPExvYWRhYmxlLkNhcHR1cmU+XG4gICAgICAvLyB0YWtlcyBhIHJlcG9ydCBwcm9wIHdoaWNoIGlzIGNhbGxlZCB3aGVuZXZlciBhIGNodW5rIGlzIHVzZWQuXG4gICAgICBjb25zdCBtb2R1bGVzID0gW107XG5cbiAgICAgIC8vIEZPUiBOT1dcbiAgICAgIC8qIGxvZ2dlclxuICAgICAgICAuY29sb3IoJ3llbGxvdycpXG4gICAgICAgIC5ib2xkKClcbiAgICAgICAgLmxvZygncmVxdWVzdGVkIHJlcS51cmwgaW4gcHJvbWlzZSByZXNwb25zZScsIHJlcS51cmwpOyAqL1xuXG4gICAgICAvLyBSZW5kZXIgdGhlIHBhcnQgb2YgdGhlIGFwcCB0aGF0IGdldHMgaHlkcmF0ZWQgb24gdGhlIGNsaWVudFxuICAgICAgY29uc3QgYXBwSHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8TG9hZGFibGUuQ2FwdHVyZSByZXBvcnQ9eyhtb2R1bGVOYW1lKSA9PiBtb2R1bGVzLnB1c2gobW9kdWxlTmFtZSl9PlxuICAgICAgICAgIDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgICAgPC9SZWR1eFByb3ZpZGVyPlxuICAgICAgICA8L0xvYWRhYmxlLkNhcHR1cmU+XG4gICAgICApO1xuXG4gICAgICBjb25zdCBCb2R5Q29udGVudEFuZFNjcmlwdHMgPSAoeyBjbGllbnQsIG1vZHVsZXNDaHVua3MgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD0nYXBwJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNsaWVudCB9fSAvPlxuICAgICAgICAgICAge2dldEpzRmlsZXMobW9kdWxlc0NodW5rcyl9XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2VydmVySHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8Qm9keUNvbnRlbnRBbmRTY3JpcHRzIGNsaWVudD17YXBwSHRtbH0gbW9kdWxlc0NodW5rcz17bW9kdWxlc30gLz5cbiAgICAgICk7XG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XG4gICAgICAgICAgPCEtLSB0aGlzIGhhcyBiZWVuIGdlbmVyYXRlZCBieSBjb25maWcvY2xpZW50L3dlYnBhY2suZGV2LmNvbmZpZyAtLT5cbiAgICAgICAgICA8c2NyaXB0PndpbmRvdy5fX2RhdGEgPSAke3NlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKX08L3NjcmlwdD5cbiAgICAgICAgICA8IS0tIGFib3ZlIHRoaXMgaXMgdGhlIHdheSB0ZWggc2VydmVyIHNlbmRzIHN0b3JlIHRvIHRoZSBicm93c2VyIElUIE1VU1QgTUFUQ0ghIHdpdGhvdXQgdGhpcyBpdCB3b250IG1hdGNoIC0tPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLi9zdHlsZS5jc3NcIiAvPlxuXG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAke3NlcnZlckh0bWx9XG4gICAgICA8L2h0bWw+XG4gICAgICBgKTtcbiAgICB9KVxuICAgIC5jYXRjaChuZXh0KTtcbn07IFxuXG5leHBvcnQgZGVmYXVsdCBzc3JNaWRkbGV3YXJlO1xuIiwiLyoqXG4gKiBUSElTIElTIDogWU9VUiBBUFAgTk9ERS5qcyBTRVJWRVJcbiAqXG4gKiovXG5cblxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5cbi8vIE11c3QgYmUgaW1wb3J0ZWQgZmlyc3Qgc28gdGhhdCBlbnYgdmFyaWFibGVzIGFyZSBjb3JyZWN0bHkgc2V0XG5pbXBvcnQgeyBuY29uZiB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnZjb25maWcvZW52Q29uZmlnJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9vcmRlclxuaW1wb3J0IHNzck1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkZGxld2FyZS9zc3JcIjtcbmltcG9ydCB7XG4gIHN0dWJEYXNoYm9hcmRQcm94eSxcbiAgc3R1YkVuZHBvaW50UHJveHksXG4gIGFjY291bnRTZXJ2aWNlUHJveHksXG59IGZyb20gJy4vbWlkZGxld2FyZS9wcm94eSdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyAtLS0tIHByb3hpZXMgLS0tLS1cblxuYXBwLnVzZSgnL2FjY291bnQtYXBpJywgYWNjb3VudFNlcnZpY2VQcm94eSlcblxuLy8gRGFzaGJvYXJkIHN0dWJzXG5jb25zdCBlbnZDb25maWcgPSBuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSB8fCBuY29uZi5nZXQoJ05PREVfRU5WJylcbmlmIChlbnZDb25maWcgPT09ICdzdHViJyB8fCBlbnZDb25maWcgPT09ICdyZW1vdGVTdHViJykge1xuXG4gIC8vYWNjZXNzIGluZGV4IHBhZ2Ugb2Ygc3R1YnMgMzAxMSBvbiAzMTAwL2Rhc2hib2FyZFxuICBhcHAudXNlKCcvZGFzaGJvYXJkJywgc3R1YkRhc2hib2FyZFByb3h5KVxuXG4gIC8vYWNjZXNzIC9wYXltZW50LXN0dWIvIHBhZ2Ugb2Ygc3R1YnMgMzAxMSBvbiAzMTAwL3BheW1lbnQtc3R1YiBcbiAgLy9wYXltZW50LXN0dWIgaXMgdXNlZCB0byBtb2RpZnkgZGFzaGJvYXJkICxcbiAgYXBwLnVzZSgnL3BheW1lbnQtc3R1YicsIHN0dWJFbmRwb2ludFByb3h5KVxufVxuXG4vLyAtLS0tIGVuZCBvZiBwcm94aWVzIC0tLS0tXG5cblxuLy8tLSBzdGF0aWMgYXNzZXRzIG9uIGJhY2stZW5kIHNlcnZlclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi4vc3RhdGljJykpXG5cbi8vIFJlbmRlcnMgdGhlIGFwcFxuYXBwLnVzZShzc3JNaWRkbGV3YXJlKTtcblxuY29uc3QgUE9SVCA9IDMzODk7XG4vLyBQcmVsb2FkIGFsbCB0aGUgY2h1bmtzIHRoZW4gc3RhcnQgdGhlIGFwcFxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xuICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgbm9kZSBzZXJ2ZXIgcnVubmluZyBvbjoke1BPUlR9YCk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJub2RlLWNvbG9yLWxvZ1wiO1xuXG4vLyBHZXRzIGFsbCB0aGUgY2h1bmtlZCBKUyBmaWxlcyBhcyB3ZWxsIGFzIHRoZSBiYXNlICdjbGllbnQnIGZpbGUuICdjbGllbnQnXG4vLyBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIGxvYWRlZCBhcyBpdCBkZXBlbmRzIG9uIHRoZSBwcmV2IGZpbGVzLlxuXG50eXBlIFNjcmlwdFRhZ0tleXMgPSBQYXJ0aWFsPEhUTUxTY3JpcHRFbGVtZW50PjtcblxuLy90aGlzIGZpbGUgbmVlZHMgdG8gYmUgLnRzeCBub3QgdHMgY2F1c2UgaXQgcmV0dXJuIGh0bWwgZWxlbWVudCBcblxuXG5leHBvcnQgY29uc3QgZ2V0SnNGaWxlcyA9IChtb2R1bGVzID0gW10pOiBTY3JpcHRUYWdLZXlzW10gPT4ge1xuICBsZXQgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gY29uc29sZS5sb2coXCJjaHVuayBtb2R1bGVzOjo6XCIsIG1vZHVsZXMpO1xuICBbLi4ubW9kdWxlcywgXCJidW5kbGVcIl0uZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgZmlsZXMucHVzaChcbiAgICAgIGAke21vZHVsZSA9PT0gXCJidW5kbGVcIlxuICAgICAgICA/IC8vY2xpZW50L2J1bmRsZS5qcycgaGFzIHRvIG1hdGNoIG91dHB1dDogeyAuLi4sZmlsZW5hbWU6IFwiY2xpZW50L2J1bmRsZS5qc1wiLH0gZm9yIGRldiBzZXJ2ZXIgZGV2ZWxvcG1lbnRcbiAgICAgICAgXCIvY2xpZW50L2J1bmRsZVwiXG4gICAgICAgIDogYC9jbGllbnQvY2h1bmstJHttb2R1bGV9YFxuICAgICAgfS5qc2BcbiAgICApO1xuICB9KTtcblxuXG5cblxuICByZXR1cm4gZmlsZXMubWFwKChmaWxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBTY3JpcHRUYWdLZXlzID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgPHNjcmlwdCBzcmM9JHtmaWxlfT48L3NjcmlwdD46IGxvYWRpbmcuLi5gKTtcblxuICAgIHJldHVybiA8c2NyaXB0IGtleT17YHNjcmlwdDAke2luZGV4fWB9IHNyYz17ZmlsZX0gdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBkZWZlciBjaGFyU2V0PSd1dGYtOCc+PC9zY3JpcHQ+XG4gIH0pXG59XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhclJlcG9zIChsYW5ndWFnZSA9ICdhbGwnKSB7XG4gIGNvbnN0IGVuY29kZWRVUkkgPSBlbmNvZGVVUkkoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXN0YXJzOj4xK2xhbmd1YWdlOiR7bGFuZ3VhZ2V9JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZ0eXBlPVJlcG9zaXRvcmllc2ApXG5cbiAgcmV0dXJuIGZldGNoKGVuY29kZWRVUkkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgIC50aGVuKChyZXBvcykgPT4gcmVwb3MuaXRlbXMpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgTm9NYXRjaCBmcm9tIFwiLi9Ob01hdGNoXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtyb3V0ZXMubWFwKCh7IHBhdGgsIGV4YWN0LCBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBleGFjdD17ISFleGFjdH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ucmVzdH0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxSb3V0ZSByZW5kZXI9eyhwcm9wcykgPT4gPE5vTWF0Y2ggey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IHJlcG9zO1xuICAgIC8vX19pc0Jyb3dzZXJfXyBpZCBkZWZpbmVkIGluIHdlYnBhY2suY29uZmlnIGFzIGdsb2JhbFxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgICByZXBvcyA9IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBvcyA9IHRoaXMucHJvcHMuc3RhdGljQ29udGV4dC5kYXRhO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXBvcyxcbiAgICAgIGxvYWRpbmc6IHJlcG9zID8gZmFsc2UgOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLmZldGNoUmVwb3MgPSB0aGlzLmZldGNoUmVwb3MuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucmVwb3MpIHtcbiAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2UHJvcHMubWF0Y2gucGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgZmV0Y2hSZXBvcyhsYW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICB0aGlzLnByb3BzLmZldGNoSW5pdGlhbERhdGEobGFuZykudGhlbigocmVwb3MpID0+XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHJlcG9zLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcmVwb3MgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIDxwPkxPQURJTkc8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAge3JlcG9zLm1hcCgoeyBuYW1lLCBvd25lciwgc3RhcmdhemVyc19jb3VudCwgaHRtbF91cmwgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9IHN0eWxlPXt7IG1hcmdpbjogMzAgfX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+QHtvd25lci5sb2dpbn08L2xpPlxuICAgICAgICAgICAgICA8bGk+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2snXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBEZWNsYXJlIGEgbmV3IHN0YXRlIHZhcmlhYmxlLCB3aGljaCB3ZSdsbCBjYWxsIFwiY291bnRcIlxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5QYXNzd29yZCBpbnB1dCBzdGVuZ3RoIHdlYnBhY2sgbGFvZCBsaWJyYXlyeTwvaDM+XG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPlxuICAgICAgPHA+WW91IGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2snXG5jb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcblxuICBjb25zdCBoYW5kbGVQb3N0UmVxdWVzdCA9IGFzeW5jICgpID0+IHtcbiAgICAvL3RoaXMgd2lsbCBoYXZlIHRvIGhhbmRsZSBkaWZmZXJlbnQgZW52IGFzIFVBVDIgYW5kIFBST0QgYW5kIERFVlxuICAgIC8vb25seSBERVYgaGFyZGNvZGVkXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9sb2dpbic7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIGluY2x1ZGUgY29va2llcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAvLyBBZGQgYW55IGFkZGl0aW9uYWwgaGVhZGVycyBhcyBuZWVkZWRcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGlmIG5lZWRlZFxuICAgICAgLy9jb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQb3N0UmVxdWVzdH0+TWFrZSBQT1NUIFJlcXVlc3Q8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgcGFyYW06IFwiYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgIHBhcmFtOiBcImphdmFzY3JpcHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUnVieVwiLFxuICAgICAgcGFyYW06IFwicnVieVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlB5dGhvblwiLFxuICAgICAgcGFyYW06IFwicHl0aG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgIHBhcmFtOiBcImphdmFcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwYXJhbX0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fVxuICAgICAgICAgICAgdG89e2AvcG9wdWxhci8ke3BhcmFtfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSB0bz17YC9ndWVzdGB9PlxuICAgICAgICAgIHsnY2h1bmsgbG9hZGVkIEd1ZXN0Q2hlY2tvdXRDb250YWluZXInfVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gdG89e2AvdXNlckluZm9gfT5cbiAgICAgICAgICB7J3VzZXIgcHJvdGVjdGVkIHJvdXRlIFVzZXJTZWNyZXRJbmZvQ29udGFpbmVyJ31cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm91ciBPaCBGb3VyXG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNlSGlzdG9yeSBhbGxvd3MgdG8gc2V0IHF1ZXJ5IHBhcmFtcyBieSBoaXN0b3J5LnB1c2gge3NlYXJjaDpzdHJpbmd9XG4vLyB1c2VMb2NhdGlvbiBhbGxvd3MgdG8gZ2V0IHF1ZXJ5IHBhcmFtcyBnZXQgc2VhcmNoIG9iamVjdCBhbmQgZG8gc29tZXRoaW5nIHdpdGggdGhlbVxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXBkYXRlUXVlcnlQcm9wZXJ0eSwgcmVhZFF1ZXJ5UHJvcGVydHksIGNyZWF0ZVF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZ1RvT2JqZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlck1ldGhvZHMnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGZ1bmN0aW9uIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgc2VhcmNoOiBxdWVyeVN0cmluZ1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGdldCB0aGUgc2VhcmNoIChxdWVyeSBzdHJpbmcpIGZyb20gdGhlIGxvY2F0aW9uXG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgLy8gMSBpZiBzZWFyY2ggb2JqZWN0IGV4aXN0cyB0aGVuIGNvbnZlcnQgc2VhcmNoIHN0cmluZyB0byBvYmplY3RcbiAgY29uc3QgcXVlcnlQYXJhbXNPYmogPSB1c2VNZW1vKCgpID0+IHF1ZXJ5U3RyaW5nVG9PYmplY3Qoc2VhcmNoKSwgW3NlYXJjaF0pO1xuXG4gIC8vIDIuMSB1cGRhdGUgbG9jYWwgc3RhdGUgZnJvbSB1cmwgcGFyYW1zIGlmIHBhcmFtcyBleGlzdHMgXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUocmVhZFF1ZXJ5UHJvcGVydHkoJ2xhbmd1YWdlJywgcXVlcnlQYXJhbXNPYmopIHx8IFwiXCIpXG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZShyZWFkUXVlcnlQcm9wZXJ0eSgnYWdlJywgcXVlcnlQYXJhbXNPYmopIHx8IFwiXCIpXG5cbiAgLy8gMi4yIHVwZGF0ZSBsb2NhbCBzdGF0ZSBiYXNlZCBvbiB1c2VyIHJhZGlvIGJ1dHRvbiBjbGljayBcbiAgY29uc3Qgb25WYWx1ZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXRcblxuICAgIC8vdXBkYXRlIHVybCBxdWVyeSBwYXJhbVxuICAgIGlmIChuYW1lID09PSAnZmF2X2xhbmd1YWdlJykge1xuICAgICAgLy91cGRhdGUgc3RhdGVcbiAgICAgIHNldExhbmd1YWdlKHZhbHVlKVxuICAgICAgY29uc3QgdXBkYXRlUXVlcnlPYmplY3QgPSB1cGRhdGVRdWVyeVByb3BlcnR5KCdsYW5ndWFnZScsIHZhbHVlLCBxdWVyeVBhcmFtc09iailcbiAgICAgIC8vdXBkYXRlIHVybCB3aXRoIG5ldyBzdHJpbmcgcXVlcnkgcHVzaGVkIHRvIGhpc3RvcnkgXG4gICAgICBzZXRRdWVyeVBhcmFtcyhjcmVhdGVRdWVyeVN0cmluZyh1cGRhdGVRdWVyeU9iamVjdCkpXG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnZmF2X2FnZScpIHtcbiAgICAgIC8vdXBkYXRlIHN0YXRlXG4gICAgICBzZXRBZ2UodmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVRdWVyeU9iamVjdCA9IHVwZGF0ZVF1ZXJ5UHJvcGVydHkoJ2FnZScsIHZhbHVlLCBxdWVyeVBhcmFtc09iailcbiAgICAgIC8vdXBkYXRlIHVybCB3aXRoIG5ldyBzdHJpbmcgcXVlcnkgcHVzaGVkIHRvIGhpc3RvcnkgXG4gICAgICBzZXRRdWVyeVBhcmFtcyhjcmVhdGVRdWVyeVN0cmluZyh1cGRhdGVRdWVyeU9iamVjdCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkhUTUxcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImh0bWxcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJIVE1MXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJodG1sXCI+SFRNTDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXtsYW5ndWFnZSA9PT0gXCJDU1NcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImNzc1wiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkNTU1wiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3NzXCI+Q1NTPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkphdmFTY3JpcHRcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBpZD1cImphdmFzY3JpcHRcIiBuYW1lPVwiZmF2X2xhbmd1YWdlXCIgdmFsdWU9XCJKYXZhU2NyaXB0XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJqYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPnRlbGwgdXMgeW91ciBhZ2UgYnJhY2tldCBpZiB5b3UgZG9uYHQgbWluZDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXthZ2UgPT09IFwiYmVsb3cxOFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXZfYWdlXCIgdmFsdWU9XCJiZWxvdzE4XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJodG1sXCI+YmVsb3cgMTg8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17YWdlID09PSBcImFib3ZlMThcIn0gb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmF2X2FnZVwiIHZhbHVlPVwiYWJvdmUxOFwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3NzXCI+YWJvdmUgMTg8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtID5cbiAgKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IHNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zLCBnZXRQYXNzd29yZFN0cmVuZ3RoIH0gZnJvbSAnLi4vUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZFN0cmVuZ3RoJ1xuXG5cblxuaW50ZXJmYWNlIFBhc3N3b3JkSW5wdXRQcm9wcyB7XG4gICAgZW1haWw/OiBzdHJpbmdcbn1cblxuY29uc3QgUGFzc3dvcmRJbnB1dCA9ICh7XG4gICAgZW1haWwgPSAnJyxcbn06IFBhc3N3b3JkSW5wdXRQcm9wcykgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3N0cmVuZ3RoLCBzZXRTdHJlbmd0aF0gPSB1c2VTdGF0ZSgnJylcblxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZTogbmV3VmFsdWUgfSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICAgICAgc2V0U3RyZW5ndGgoZ2V0UGFzc3dvcmRTdHJlbmd0aChuZXdWYWx1ZSkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2V0T3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHNldFBhc3N3b3JkU3RyZW5ndGhPcHRpb25zKFtlbWFpbF0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0T3B0aW9ucygpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIHN0cmVuZ3RoOiA8c3Ryb25nIGRhdGEtdGVzdD0ncGFzc3dvcmQtaW5wdXQtc3RyZW5ndGgnPntzdHJlbmd0aH08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZElucHV0IiwiaW1wb3J0IHsgenhjdmJuLCB6eGN2Ym5PcHRpb25zIH0gZnJvbSAnQHp4Y3Zibi10cy9jb3JlJ1xuXG5leHBvcnQgY29uc3Qgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMgPSBhc3luYyAodXNlcklucHV0cz86IChzdHJpbmcgfCBudW1iZXIpW10pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB6eGN2Ym5Db21tb25QYWNrYWdlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwienhjdmJuQ29tbW9uUGFja2FnZVwiICovICdAenhjdmJuLXRzL2xhbmd1YWdlLWNvbW1vbicpXG4gICAgY29uc3QgenhjdmJuRW5QYWNrYWdlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwienhjdmJuRW5QYWNrYWdlXCIgKi8gJ0B6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW4nKVxuXG4gICAgenhjdmJuT3B0aW9ucy5zZXRPcHRpb25zKHtcbiAgICAgICAgZGljdGlvbmFyeToge1xuICAgICAgICAgICAgLi4uenhjdmJuQ29tbW9uUGFja2FnZS5kZWZhdWx0LmRpY3Rpb25hcnksXG4gICAgICAgICAgICAuLi56eGN2Ym5FblBhY2thZ2UuZGVmYXVsdC5kaWN0aW9uYXJ5LFxuICAgICAgICAgICAgdXNlcklucHV0czogdXNlcklucHV0cyB8fCBbXVxuICAgICAgICB9LFxuICAgICAgICBncmFwaHM6IHp4Y3ZibkNvbW1vblBhY2thZ2UuZGVmYXVsdC5hZGphY2VuY3lHcmFwaHMsXG4gICAgICAgIHRyYW5zbGF0aW9uczogenhjdmJuRW5QYWNrYWdlLmRlZmF1bHQudHJhbnNsYXRpb25zXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhc3N3b3JkU3RyZW5ndGggPSAocGFzc3dvcmQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFwYXNzd29yZCkgcmV0dXJuICcnXG5cbiAgICBjb25zdCB7IHNjb3JlIH0gPSB6eGN2Ym4ocGFzc3dvcmQpXG5cbiAgICAvLyB6eGN2Ym4gZ2l2ZXMgdXMgYW4gaW50ZWdlciBzY29yZSBvdXQgb2YgNCAoaW5jbHVkaW5nIDAgb3V0IG9mIDQpXG4gICAgc3dpdGNoIChzY29yZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAnV2VhaydcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gJ01lZGl1bSdcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdTdHJvbmcnXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHtcbiAgZ2V0TWV0YSxcbn0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzJ1xuXG5pbnRlcmZhY2UgR2V0U25hcHNob3RSZWRpcmVjdHNQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgR2V0U25hcHNob3RSZWRpcmVjdHM6IFJlYWN0LkZDPEdldFNuYXBzaG90UmVkaXJlY3RzUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKGdldE1ldGEpXG4gIC8vIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICAvKiBcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgJiYgZXJyb3Iuc3RhdHVzID09PSAnNDAwJykgey8vU3RhdHVzQ29kZS5VTkFVVEhPUklaRUQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVkaXJlY3RcbiAgICAgICAgICAgIHRvPXtgL2xvZ2luP3BhZ2VOYW1lPW1hbmRhdG9yeVByZXBheSZzdWNjZXNzVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH1gLFxuICAgICAgICAgICAgKX1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgXG4gICAgICAvL3JldHVybiA8UmVkaXJlY3QgdG89e2Vycm9yUGF0aH0gLz5cbiAgICB9ICovXG4gIHJldHVybiBjaGlsZHJlblxufVxuXG5leHBvcnQgZGVmYXVsdCBHZXRTbmFwc2hvdFJlZGlyZWN0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGdldE1ldGEgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgR2V0U25hcHNob3RSZWRpcmVjdHMgZnJvbSBcIi4uL0dldFNuYXBzaG90UmVkaXJlY3RzL0dldFNuYXBzaG90UmVkaXJlY3RzXCI7XG5cbmltcG9ydCBVc2VyU2VjcmV0SW5mbyBmcm9tIFwiLi4vLi4vcGFnZXMvVXNlclNlY3JldEluZm9cIjtcbmltcG9ydCB7IElOSVRfVVNFUl9JTkZPX1BBR0UgfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9uc1wiO1xuXG5jb25zdCBVc2VyU2VjcmV0SW5mb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBzYXZlZFBheW1lbnRNZXRob2RzIH0gPSB1c2VTZWxlY3RvcihnZXRNZXRhKTtcbiAgY29uc29sZS5sb2coXCJnZXRNZXRhIHVwZGF0ZWQgYnkgc2VsZWN0b3IgISEhXCIsIHNhdmVkUGF5bWVudE1ldGhvZHMpO1xuICAvLyBjb25zb2xlLmxvZygnLS0tLS0tcHJvcHMgaW4gVXNlclNlY3JldEluZm9Db250YWluZXItLS0tLS0tLScsIHByb3BzKTtcblxuICAvKlxuICAgICAgLy92YWxpZGF0aW9uIHRvIHNob3cgY2hpbGRyZW4gYmVsb3cgd2l0aCByZWRpcmVjdCBhbmQgZWFybHkgcmV0dXJuXG5cbiAgICAgIHRoaXMgc2hvdWxkIGhhcHBlbiBvbiBzZXJ2ZXItc2l0ZSwgYnV0IHRoZSBgcmVxYCBvYmplY3QgQ0FOIE5PVCBiZSBkaXJlY3RseSBhY2Nlc3MgaW4gY2xpZW50XG4gICAgICBiZWNhdXNlIHRoZXkgYXJlIHNlcGVyYXRlLiBUaGVyZWZvcmUgZGF0YSBoYXMgdG8gYmUgcGxhY2VzIGluIHJlZHV4IHN0b3JlIGFuZCB0aGVuIHJlYWQgaW4gY2xpZW50IFxuICAgICAgZm9yIGV4YW1wbGUgYnkgcmVkdXggc2VsZWN0b3JzXG4gICAgXG5cbiAgIGNvbnN0IHsgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKGdldE1ldGEpOyAqL1xuXG4gIC8qICBpZiAoZXJyb3IpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgJiZcbiAgICAgIGVycm9yLnN0YXR1cyA9PT0gU3RhdHVzQ29kZS5VTkFVVEhPUklaRURcbiAgICApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWRpcmVjdFxuICAgICAgICAgIHRvPXtgL2xvZ2luP3BhZ2VOYW1lPW1hbmRhdG9yeVByZXBheSZzdWNjZXNzVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9YFxuICAgICAgICAgICl9YH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17ZXJyb3JQYXRofSAvPjtcbiAgfSAqL1xuXG4gIHJldHVybiAoXG4gICAgPEdldFNuYXBzaG90UmVkaXJlY3RzPlxuICAgICAgPFVzZXJTZWNyZXRJbmZvIHNhdmVkUGF5bWVudE1ldGhvZHM9e3NhdmVkUGF5bWVudE1ldGhvZHN9IC8+XG4gICAgPC9HZXRTbmFwc2hvdFJlZGlyZWN0cz5cbiAgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUUyBzZXR1cCBmb3IgcXVpY2sgcmVmZXJlbmNlXG5leHBvcnQgdHlwZSBEZWNvcmF0ZWRSZXF1ZXN0PFxuICBSb3V0ZVBhcmFtcyA9IHVua25vd24sXG4gIFJlcVF1ZXJ5ID0gdW5rbm93blxuPiA9IFJlcXVlc3Q8Um91dGVQYXJhbXMsIHVua25vd24sIHVua25vd24sIFJlcVF1ZXJ5PiAmIHt9O1xuXG5pbnRlcmZhY2UgTWF0Y2hQYXJhbXMge1xuICBpZDogc3RyaW5nO1xufVxudHlwZSBHZXRJbml0aWFsQWN0aW9uc1BhcmFtczxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgUm91dGVQYXJhbXMgZXh0ZW5kcyB7IFtLIGluIGtleW9mIFJvdXRlUGFyYW1zXT86IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0gYW55LFxuICBSZXFRdWVyeSA9IHVua25vd25cbj4gPSB7XG4gIHJlcTogRGVjb3JhdGVkUmVxdWVzdDxSb3V0ZVBhcmFtcywgUmVxUXVlcnk+O1xuICByZXM6IFJlc3BvbnNlO1xuICBtYXRjaDogbWF0Y2g8Um91dGVQYXJhbXM+O1xufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXRJbml0aWFsQWN0aW9ucyBpcyBjYWxsZWQgb24gc2VydmVyLXNpdGVcbi8vIHRoZSByZWR1eCBzYWdhIGlzIGNhbGxlZCBvbiBzZXJ2ZXItc2l0ZSBmcm9tIGhlcmVcblVzZXJTZWNyZXRJbmZvQ29udGFpbmVyLmdldEluaXRpYWxBY3Rpb25zID0gKHtcbiAgcmVxLFxuICBtYXRjaCxcbn06IEdldEluaXRpYWxBY3Rpb25zUGFyYW1zPE1hdGNoUGFyYW1zPikgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXM7XG4gIGNvbnN0IGNvb2tpZSA9IHJlcS5nZXQoXCJjb29raWVcIikgfHwgXCJcIjtcblxuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLUNPT0tJRS0tLS0tLS0tLS1cIiwgY29va2llKTtcblxuICByZXR1cm4gSU5JVF9VU0VSX0lORk9fUEFHRSh7IGNvb2tpZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWNyZXRJbmZvQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuXG5leHBvcnQgY29uc3QgR3Vlc3RDaGVja291dENvbnRhaW5lciA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PlxuICAgIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZ3Vlc3RDaGVja291dFwiLCB3ZWJwYWNrUHJlbG9hZDogMSAqLyBcIi4vR3Vlc3RDaGVja291dENvbnRhaW5lci9HdWVzdENoZWNrb3V0Q29udGFpbmVyXCJcbiAgICApLFxuICBsb2FkaW5nOiAoKSA9PiA8ZGl2PntcImxvYWRpbmcgY29tcG9uZW50XCJ9PC9kaXY+LFxuXG4gIG1vZHVsZXM6IFtcImd1ZXN0Q2hlY2tvdXRcIl0sXG59KTtcbi8vbW9kdWxlczogb3B0aW9uYWwgYXJyYXkgb2YgcGF0aCB0byBsb2FkIGRhdGEgb2JqZWN0IGZyb20gc2VydmVyIHN0YXRpYyBmaWxlcyBhcyBzb21lLmpzb24gdG8geW91ciBjb21wb25lbnRcbi8vbG9hZGluZzogY29tcG9uZW50IHRvIGRpc3BsYXkgb25jZSBpbXBvcnQgY29tcG9uZW50IGxvYWRzXG4iLCIvLyBjcmVhdGVzIGEgcXVlcnkgc3RyaW5nIGZyb20gcXVlcnkgb2JqZWN0XG5cblxuZXhwb3J0IGludGVyZmFjZSBxdWVyeU9iamVjdEludCB7XG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBkZXBhcnRtZW50Pzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRRdWVyeVByb3BlcnR5KHByb3BlcnR5OiBzdHJpbmcsIHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIHJldHVybiBxdWVyeU9iamVjdFtwcm9wZXJ0eV1cbn07XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXVlcnlQcm9wZXJ0eShwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBxdWVyeU9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4pIHtcbiAgICBsZXQgdXBkYXRlID0ge31cbiAgICBpZiAocHJvcGVydHkgJiYgdmFsdWUpIHVwZGF0ZSA9IHsgW3Byb3BlcnR5XTogdmFsdWUgfVxuICAgIHJldHVybiB7IC4uLnF1ZXJ5T2JqZWN0LCAuLi51cGRhdGUgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5U3RyaW5nKHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIGNvbnN0IHN0cjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcXVlcnlPYmplY3QpXG4gICAgICAgIGlmIChxdWVyeU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3ApfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeU9iamVjdFtwcm9wXSl9YCk7XG4gICAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xufTtcblxuLy8gdHVybnMgcXVlcnkgc3RyaW5nIGJhY2sgaW50byBhbiBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqZWN0KHF1ZXJ5U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnlPYmplY3QgPSB7fVxuICAgIGNvbnN0IFVSTFNlYXJjaFBhcmFtc09iaiA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIFVSTFNlYXJjaFBhcmFtc09iaikge1xuICAgICAgICBxdWVyeU9iamVjdFtrZXldID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5T2JqZWN0O1xufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBVc2VyU2VjcmV0SW5mbyA9ICh7c2F2ZWRQYXltZW50TWV0aG9kc30pID0+IHtcbiAgY29uc29sZS5sb2coJ3Byb3BzLi4uLi4uJywgc2F2ZWRQYXltZW50TWV0aG9kcyk7XG5cbiAgLypcbiAgICAgIFRoaXMgcGFnZSB3aWxsIGhhdmUgcGFyZW50IGNvbnRhaW5lciB0aGF0IHdpbGwgYXV0aG9yaXp0aW9pbiBiZWZvcmUgaXQgaXMgZXZlbiBhdmFpbGFibGUgXG4gICAgICBzaW5jZSBpdCB3aWxsIGNvbnRhaW4gc2Vuc2l0aXZlIHVzZXIgaW5mb1xuICAgICovXG5cbiAgcmV0dXJuIDxkaXY+e0pTT04uc3RyaW5naWZ5KHNhdmVkUGF5bWVudE1ldGhvZHMpfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWNyZXRJbmZvO1xuIiwiaW1wb3J0IHsgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBHcmlkIGZyb20gJy4vY29tcG9uZW50cy9HcmlkJztcbmltcG9ydCBQYXJhbXNRdWVyeSBmcm9tICcuL2NvbXBvbmVudHMvUGFyYW1zUXVlcnknO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgVXNlclNlY3JldEluZm9Db250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1VzZXJTZWNyZXRJbmZvQ29udGFpbmVyL1VzZXJTZWNyZXRJbmZvQ29udGFpbmVyJztcbmltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgR3Vlc3RDaGVja291dENvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVycyc7XG5cbi8vIHJlZHV4IGFuZCBzYWdhc1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3F1ZXJ5JyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IFBhcmFtc1F1ZXJ5LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy91c2VySW5mbycsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBVc2VyU2VjcmV0SW5mb0NvbnRhaW5lcixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvbG9naW4nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogTG9naW4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBgL2d1ZXN0YCxcbiAgICBwYWdlVGl0bGU6ICdHdWVzdCBDaGVja291dCcsXG4gICAgcGFnZURlc2NyaXB0aW9uOiAnJyxcbiAgICBwYWdlRGF0YVRlc3Q6ICdndWVzdC1jaGVja291dC1wYWdlJyxcbiAgICBjb21wb25lbnQ6IEd1ZXN0Q2hlY2tvdXRDb250YWluZXIsXG4gICAgcm91dGVzOiBbXSxcbiAgICBhbmFseXRpY3M6IHt9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9wb3B1bGFyLzppZCcsXG4gICAgY29tcG9uZW50OiBHcmlkLFxuICAgIGZldGNoSW5pdGlhbERhdGE6IChwYXRoID0gJycpID0+IGZldGNoUG9wdWxhclJlcG9zKHBhdGguc3BsaXQoJy8nKS5wb3AoKSksXG4gIH0sXG5dO1xuXG4vLyBSZWN1cnNpdmVseSBmZXRjaCBkYXRhXG5leHBvcnQgY29uc3QgcHJvY2Vzc1JvdXRlcyA9IChcbiAgcm91dGVzUHJvY2Vzc2luZyA9IHJvdXRlcyxcbiAgaGlzdG9yeSxcbiAgc3RhdGUsXG4gIHJlcSxcbiAgcmVzLFxuICBsZXZlbCA9IDFcbikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIEEgZnJlc2ggc3RvcmUgaXMgbmVlZGVkIGVhY2ggbG9vcCBhcyBhIGNsb3NlZCBzdG9yZSBjYW5ub3QgYmUgcmUtb3BlbmVkXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShoaXN0b3J5LCBzdGF0ZSk7XG5cbiAgICAvLyBTdGFydCB0aGUgcm9vdCBzYWdhIHRhc2tzIHdoaWNoIGlzIGEgcHJvbWlzZVxuICAgIGNvbnN0IHRhc2tzID0gc3RvcmUucnVuU2FnYShyb290U2FnYSk7XG5cbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIFdpbGwgY29udGFpbiByb3V0ZXMgdGhhdCB3aWxsIGJlIHByb2Nlc3NlZCBpbiB0aGUgbmV4dCByZWN1cnNpb25cbiAgICBjb25zdCBuZXh0ID0gW107XG5cbiAgICAvLyBNYXAgdGhyb3VnaCB0aGUgcm91dGVzIGFuZCBmaW5kIGFueSB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IHBhdGhcblxuICAgIHJvdXRlc1Byb2Nlc3NpbmcubWFwKChyb3V0ZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpO1xuICAgICAgaWYgKG1hdGNoKSBjb25zb2xlLmxvZygnLS0tLS0tLS1NQVRDSC0tLS0tLScsIHJvdXRlLmNvbXBvbmVudCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHJlZHV4QWN0aW9uO1xuXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBoYXMgc3ViLXJvdXRlcywgcXVldWUgdGhlbSBmb3IgdGhlIG5leHQgcmVjdXJzaW9uXG4gICAgICAgIC8vIGlmIChyb3V0ZS5yb3V0ZXMpIG5leHQucHVzaCguLi5yb3V0ZS5yb3V0ZXMpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgYSBsYXp5LWxvYWRlZCBMb2FkYWJsZSB3cmFwcGVyXG4gICAgICAgIGlmIChyb3V0ZS5jb21wb25lbnQ/LmNvbnRleHRUeXBlcz8ubG9hZGFibGUpIHtcbiAgICAgICAgICBjb25zdCBMb2FkYWJsZUNvbnRhaW5lciA9IHJvdXRlLmNvbXBvbmVudDtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgTG9hZGFibGVDb250YWluZXIoKT8uc3RhdGU/LmxvYWRlZD8uZGVmYXVsdDtcbiAgICAgICAgICBpZiAoY29tcG9uZW50Py5nZXRJbml0aWFsQWN0aW9ucykge1xuICAgICAgICAgICAgaW5pdGlhbEFjdGlvbiA9IGNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucyh7IHJlcSwgbWF0Y2ggfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBSZWd1bGFyIG5vbi1sYXp5IGNvbXBvbmVudCB0aGF0IGNoZWNrIGZvciBpbml0aWFsQWN0aW9uc1xuICAgICAgICBpZiAocm91dGUuY29tcG9uZW50LmdldEluaXRpYWxBY3Rpb25zKSB7XG4gICAgICAgICAgcmVkdXhBY3Rpb24gPSByb3V0ZS5jb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdTVE9SRScsc3RvcmUuZ2V0U3RhdGUoKSlcblxuICAgICAgICAvLyB0aGlzIHByb21pc2UgaGFzIHRvIGJlIHJlc29sdmVkIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZSBub3QgYW55IG90aGVyIGluaXRpYWwgYWN0aW9ucyBvciBuZXN0ZWQgcm91dGVzXG4gICAgICAgIGlmIChyZWR1eEFjdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1eEFjdGlvbicsIHJlZHV4QWN0aW9uKTtcbiAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2gocmVkdXhBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSB0aGUgc3RvcmUgdG8gbmV3IGFjdGlvbnNcbiAgICBzdG9yZS5jbG9zZSgpO1xuXG4gICAgLy8gV2FpdCBmb3IgdGhlIHJ1bm5pbmcgYWN0aW9ucyB0byBjb21wbGV0ZVxuICAgIHRhc2tzXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHByb2Nlc3NSb3V0ZXMobmV4dCwgaGlzdG9yeSwgc3RvcmUuZ2V0U3RhdGUoKSwgcmVxLCByZXMsIGxldmVsICsgMSkgLy8gcmVjdXJzaW9uIVxuICAgICAgICAgICAgLnRoZW4oKGxhdGVzdFN0b3JlKSA9PiByZXNvbHZlKGxhdGVzdFN0b3JlKSlcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoc3RvcmUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJcbmV4cG9ydCB7XG4gIGdldE1ldGEsXG59IGZyb20gJy4vbWV0YVNlbGVjdG9ycyciLCIvLyBxdWljayB0eXBlIGZvciB0aGUgc2VsZWN0b3JcbmludGVyZmFjZSBNZXRhU3RhdGUge1xuICBzYXZlZFBheW1lbnRNZXRob2RzOiBhbnlbXTtcbiAgZXJyb3I6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBSb290U3RhdGUge1xuICBtZXRhOiBNZXRhU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNZXRhID0gKHN0YXRlOiBSb290U3RhdGUpOiBNZXRhU3RhdGUgPT4ge1xuICBjb25zb2xlLmxvZyhcInN0YXRlLm1ldGFcIiwgc3RhdGUubWV0YSk7XG4gIHJldHVybiBzdGF0ZS5tZXRhO1xufTtcbiIsImltcG9ydCB7IFByZWxvYWRlZFN0YXRlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUsIHsgRU5ELCBTYWdhTWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xuXG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwidHlwZXMvcmVkdWNlcnNcIjtcblxudHlwZSBTdG9yZVR5cGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBjb25maWd1cmVTdG9yZT4gJiB7XG4gIHJ1blNhZ2E6IFNhZ2FNaWRkbGV3YXJlW1wicnVuXCJdO1xuICBjbG9zZTogKCkgPT4gdHlwZW9mIEVORDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKFxuICBoaXN0b3J5OiBIaXN0b3J5LFxuICBpbml0aWFsU3RhdGU6IFByZWxvYWRlZFN0YXRlPFJvb3RTdGF0ZT5cbik6IFN0b3JlVHlwZSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuICBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCI7XG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgcmVkdXhSb3V0ZXJNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KTtcblxuICBjb25zb2xlLmxvZyhcImluaXRpYWxTdGF0ZSBpbiByZWR1eCBpbmRleDpcIiwgaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiBjcmVhdGVSb290UmVkdWNlcihoaXN0b3J5KSxcbiAgICBwcmVsb2FkZWRTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIGRldlRvb2xzOiAhaXNQcm9kdWN0aW9uLFxuICAgIG1pZGRsZXdhcmU6IFtzYWdhTWlkZGxld2FyZSwgcmVkdXhSb3V0ZXJNaWRkbGV3YXJlXSxcbiAgfSk7XG5cbiAgaWYgKGlzRGV2ICYmIG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4uL3JlZHVjZXJzXCIsICgpID0+IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMsQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbiAgICAgIGNvbnN0IGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyID0gcmVxdWlyZShcIi4uL3JlZHVjZXJzXCIpLmRlZmF1bHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyKGhpc3RvcnkpKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVzZWQgZm9yIGNhbGxpbmcgc2FnYXMgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICBjb25zdCBydW5TYWdhID0gc2FnYU1pZGRsZXdhcmUucnVuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC91bmJvdW5kLW1ldGhvZFxuICBjb25zdCBjbG9zZSA9ICgpID0+IHN0b3JlLmRpc3BhdGNoKEVORCk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdG9yZSxcbiAgICBydW5TYWdhLFxuICAgIGNsb3NlLFxuICB9O1xufVxuIiwiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBUUkFDRSA9IDEwLFxuICBERUJVRyA9IDIwLFxuICBJTkZPID0gMzAsXG4gIFdBUk4gPSA0MCxcbiAgRVJST1IgPSA1MCxcbiAgRkFUQUwgPSA2MCxcbn1cblxuZXhwb3J0IHR5cGUgTG9nID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHsgW2tleTogc3RyaW5nXTogTG9nIHwgdW5kZWZpbmVkIH1cblxudHlwZSBPdXRwdXQgPSB7XG4gIGxldmVsOiBMb2dMZXZlbFxuICBbcHJvcDogc3RyaW5nXTogTG9nIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRMZXZlbCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5MT0dfTEVWRUwpIHtcbiAgICByZXR1cm4gd2luZG93LkxPR19MRVZFTFxuICB9XG5cbiAgcmV0dXJuIE51bWJlcihwcm9jZXNzLmVudi5MT0dfTEVWRUwpIHx8IExvZ0xldmVsLklORk9cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGxvZyBtZXNzYWdlIGludG8gS2liYW5hLWZyaWVuZGx5IG91dHB1dC5cbiAqXG4gKiBJdCdzIGJlc3QgdG8gbG9nIG91dCBKU09OIG9iamVjdHMsIGFzIEtpYmFuYSB3aWxsIHBhcnNlIGFuZCBpbmRleCB0aGUgSlNPTlxuICogc28gdGhhdCB3ZSBjYW4gcnVuIHF1ZXJpZXMgYW5kIGZpbHRlcnMgYWdhaW5zdCBpbmRpdmlkdWFsIGZpZWxkcyBpbiB0aGUgbG9nLlxuICovXG5jb25zdCBsb2cgPSAob2JqOiBMb2csIGxldmVsOiBMb2dMZXZlbCk6IHZvaWQgPT4ge1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgaWYgKG9iaj8ubGV2ZWwpIGNvbnNvbGUud2FybignYGxldmVsYCBpcyBhIGZvcmJpZGRlbiBsb2cgcHJvcGVydHknKVxuICAgIGlmIChvYmo/Lm1lc3NhZ2UpIGNvbnNvbGUud2FybignYG1lc3NhZ2VgIGlzIGEgZm9yYmlkZGVuIGxvZyBwcm9wZXJ0eScpXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgY29uc3Qgb3V0cHV0OiBPdXRwdXQgPSB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyA/IE9iamVjdC5hc3NpZ24oe30sIG9iaiwgeyBsZXZlbCB9KSA6IHsgbXNnOiBvYmosIGxldmVsIH1cblxuICBjb25zdCB0eXBlID0gbGV2ZWwgPj0gTG9nTGV2ZWwuRVJST1IgPyAnZXJyb3InIDogbGV2ZWwgPT09IExvZ0xldmVsLldBUk4gPyAnd2FybicgOiAnbG9nJ1xuICBjb25zb2xlW3R5cGVdKEpTT04uc3RyaW5naWZ5KG91dHB1dCkpXG59XG5cbmNvbnN0IExvZ2dlciA9IHtcbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIlRSQUNFXCIuICovXG4gIHRyYWNlOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5UUkFDRSkgbG9nKG9iaiwgTG9nTGV2ZWwuVFJBQ0UpXG4gIH0sXG5cbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIkRFQlVHXCIuICovXG4gIGRlYnVnOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5ERUJVRykgbG9nKG9iaiwgTG9nTGV2ZWwuREVCVUcpXG4gIH0sXG5cbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIklORk9cIi4gKi9cbiAgaW5mbzogKG9iajogTG9nKSA9PiB7XG4gICAgaWYgKGdldExldmVsKCkgPD0gTG9nTGV2ZWwuSU5GTykgbG9nKG9iaiwgTG9nTGV2ZWwuSU5GTylcbiAgfSxcblxuICAvKiogT3V0cHV0cyBhIEtpYmFuYS1mcmllbmRseSBsb2cgaWYgdGhlIGxvZyBsZXZlbCB2ZXJib3NpdHkgaXMgc2V0IHRvIFwiV0FSTlwiLiAqL1xuICB3YXJuOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5XQVJOKSBsb2cob2JqLCBMb2dMZXZlbC5XQVJOKVxuICB9LFxuXG4gIC8qKiBPdXRwdXRzIGEgS2liYW5hLWZyaWVuZGx5IGxvZyBpZiB0aGUgbG9nIGxldmVsIHZlcmJvc2l0eSBpcyBzZXQgdG8gXCJFUlJPUlwiLiAqL1xuICBlcnJvcjogKG9iajogTG9nKSA9PiB7XG4gICAgaWYgKGdldExldmVsKCkgPD0gTG9nTGV2ZWwuRVJST1IpIGxvZyhvYmosIExvZ0xldmVsLkVSUk9SKVxuICB9LFxuXG4gIC8qKiBPdXRwdXRzIGEgS2liYW5hLWZyaWVuZGx5IGxvZyBpZiB0aGUgbG9nIGxldmVsIHZlcmJvc2l0eSBpcyBzZXQgdG8gXCJGQVRBTFwiLiAqL1xuICBmYXRhbDogKG9iajogTG9nKSA9PiB7XG4gICAgaWYgKGdldExldmVsKCkgPD0gTG9nTGV2ZWwuRkFUQUwpIGxvZyhvYmosIExvZ0xldmVsLkZBVEFMKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5jb25mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtY29sb3ItbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdXBlcmFnZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9