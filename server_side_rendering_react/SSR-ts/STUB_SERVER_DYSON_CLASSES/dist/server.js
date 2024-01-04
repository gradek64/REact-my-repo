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
    }
    // Session
    //createAnonymousSession: (options) =>
    //request.post(endpoints.createAnonymousSession(), options) as unknown as CreateAnonymousSessionAPIResponse,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2VudmNvbmZpZy9lbnZDb25maWcudHMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9tZXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy93YWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9hcGlVcmxIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlcXVlc3RIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbWV0YS9tZXRhUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvd2FsbGV0L3dhbGxldFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9tZXRhL21ldGFTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy93YWxsZXQvd2FsbGV0U2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21pZGRsZXdhcmUvcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3Nzci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlbmRlcmluZ0hlbHBlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvTm9NYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1BhcmFtc1F1ZXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFzc3dvcmRTdHJlbmd0aC9QYXNzd29yZElucHV0Q2hlY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkU3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL0dldFNuYXBzaG90UmVkaXJlY3RzL0dldFNuYXBzaG90UmVkaXJlY3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvVXNlclNlY3JldEluZm9Db250YWluZXIvVXNlclNlY3JldEluZm9Db250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlbHBlck1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9wYWdlcy9Vc2VyU2VjcmV0SW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FpbnNidXJ5cy10ZWNoL2JvbHR1aS11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuY29uZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY29sb3ItbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN1cGVyYWdlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJuY29uZiIsImFyZ3YiLCJlbnYiLCJkZWZhdWx0cyIsIk5PREVfRU5WIiwiRElTQUJMRV9BVVRPTUFUSUNfUkVTVU1FIiwiY29uZmlnIiwiZ2V0IiwiZmlsZSIsImNvbmNhdCIsImRvdGVudiIsInBhdGgiLCJzZXQiLCJwcm9jZXNzIiwiQUREUkVTU19GSU5ERVJfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIm1zZyIsImVudmNvbmZpZyIsIkVOVl9DT05GSUciLCJHQVRFV0FZX0FQSSIsIkFDQ09VTlRfQVBJIiwiV0NTX0FQSSIsIlNFU1NJT05fTUFOQUdFUl9BUEkiLCJNQVJLRVRJTkdfUFJFRkVSRU5DRV9BUEkiLCJSRUNFSVBUX0FQSSIsIkNPTlNVTF9FTlYiLCJCT1NVTl9DT05GSUdfTUFQIiwiVkFVTFRfRU5WIiwiQk9TVU5fRU5WIiwiTU9EQUxfT1BFTiIsImNyZWF0ZUFjdGlvbiIsIk1PREFMX0NMT1NFIiwiU0VUX09SREVSX1NVTU1BUllfVkFSSUFOVCIsIlNFVF9CUkFORCIsIlNFVF9USEVNRSIsIlRPR0dMRV9QUkVWSUVXX1BMQUNFX09SREVSIiwiU0VUX0ZFQVRVUkVfVE9HR0xFIiwiU0VUX0ZFQVRVUkVTIiwiU0VUX0NPTkZJRyIsIlNFVF9DSEFOTkVMX1RPR0dMRSIsIlRSQUNLX0FEX0NPTlRJTlVFX0VSUk9SIiwiSU5JVF9VU0VSX0lORk9fUEFHRSIsIkdFVF9XQUxMRVRfRkFJTFVSRSIsIlJPVVRFUl9MT0NBVElPTl9DSEFOR0UiLCJMT0NBVElPTl9DSEFOR0UiLCJHRVRfV0FMTEVUX1NVQ0NFU1MiLCJpc1Byb2R1Y3Rpb24iLCJhcGlGYWN0b3J5IiwiZ2V0V2FsbGV0IiwidXNlcklkIiwiY29va2llIiwicmVxdWVzdCIsImVuZHBvaW50cyIsIkNvb2tpZSIsImNoZWNrUmVzcG9uc2UiLCJyZXNwb25zZSIsInNob3VsZFJlZGlyZWN0VG9Mb2dpbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzIiwiTG9nZ2VyIiwiZmF0YWwiLCJlcnJvciIsIm1ldGhvZCIsInVybCIsInRleHQiLCJjYW5Vc2VEb20iLCJzdWNjZXNzVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvayIsImJvZHkiLCJkZWJ1ZyIsImFjY291bnQiLCJhY2NvdW50QXBpRW5kcG9pbnQiLCJzZXNzaW9uIiwic2Vzc2lvbk1hbmFnZXJFbmRwb2ludCIsImNyZWF0ZUFub255bW91c1Nlc3Npb24iLCJhcGkiLCJob3N0IiwiSE9TVCIsInBvcnQiLCJwcmVwYXlBcGkiLCJhY2NvdW50QXBpIiwibWFya2V0aW5nQVBJIiwicHJvZHVjdEFwaSIsInNlc3Npb25NYW5hZ2VyQXBpIiwiZ2V0VXNlckluZm9BcGkiLCJ2YXRSZWNlaXB0QXBpIiwiR2lmdENhcmRUeXBlcyIsInByZXBheUFwaVNlcnZlciIsImFjY291bnRBcGlTZXJ2ZXIiLCJwcm9kdWN0QXBpU2VydmVyIiwiZ2V0VmF0UmVjZWlwdFNlcnZlciIsIm1hcmtldGluZ0FwaVNlcnZlciIsInNlc3Npb25NYW5hZ2VyU2VydmVyIiwiZ2V0VXNlckluZm9BcGlTZXJ2ZXIiLCJwcmVwYXlBcGlCYXNlVXJsIiwib3JkZXJBcGlCYXNlVXJsIiwiYWNjb3VudEFwaUJhc2VVcmwiLCJwcm9kdWN0QXBpQmFzZVVybCIsIm1hcmtldGluZ0FwaUJhc2VVcmwiLCJzZXNzaW9uTWFuYWdlckJhc2VVcmwiLCJnZXRVc2VySW5mb0FwaUJhc2VVcmwiLCJnZXRWYXRSZWNlaXB0QXBpQmFzZVVybCIsImFwcCIsInJvb3RGb250U2l6ZSIsInRpbWluZ3MiLCJmYWRlSW5PdXQiLCJzbmFwc2hvdExvY2tEZWxheSIsInBsYWNlT3JkZXJTaG93RXJyb3JEZWxheSIsInBheW1lbnRNZXRob2RSb3V0ZXMiLCJjcmVkaXREZWJpdENhcmQiLCJwYXlwYWwiLCJhcHBsZVBheSIsImFyZ29zQ2FyZENyZWRpdFBsYW4iLCJzdGF0dXNlcyIsImluaXRpYWxpc2F0aW9uSW5Qcm9ncmVzcyIsInBheW1lbnRNZXRob2RzT3JkZXIiLCJuZWN0YXIiLCJDQVJEX05FQ1RBUiIsImJpbk51bWJlciIsImNhcmROdW1iZXJMZW5ndGgiLCJnaWZ0Q2FyZFR5cGVzIiwiR0VORVJJQyIsIkNBUkRfR0lGVF9BUkdPUyIsImJpblJhbmdlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicGluTnVtYmVyTGVuZ3RoIiwiaW1hZ2UiLCJORVdfR0lGVF9DQVJEX0FSR09TIiwiQ0FSRF9HSUZUX0ZMRVhFQ0FTSCIsInNlY3VyaXR5Q29kZUxlbmd0aCIsIm1heGltdW1OdW1iZXJPZkdpZnRDYXJkcyIsInBsYWNlT3JkZXJBbmltYXRpb24iLCJzZWFzb25zIiwieG1hcyIsImRlZmF1bHRUdSIsInhtYXNUdSIsImRlZmF1bHRIYWJpdGF0IiwieG1hc0hhYml0YXQiLCJoYWxsb3dlZW4iLCJwcmlkZSIsInByaWRlVHUiLCJwcmlkZUhhYml0YXQiLCJibGFja0hpc3RvcnlNb250aCIsImJsYWNrSGlzdG9yeU1vbnRoSGFiaXRhdCIsImJsYWNrSGlzdG9yeU1vbnRoVHUiLCJpbml0aWFsRGVsYXlNcyIsImNvbG9ycyIsInZhcmlhbnRzIiwiYmdNYXNrIiwiYm94IiwibGlkIiwiYW5pbUR1cmF0aW9uTXMiLCJwcm9kdWN0cyIsInRvdGFsIiwiYW5pbVlBeGlzTW92ZURpc3RhbmNlUHgiLCJhbmltVGltaW5nRnVuY3Rpb24iLCJpbnRlcnZhbER1cmF0aW9uTXMiLCJvcHRpb25zIiwicHJlcGF5QXBpRW5kcG9pbnQiLCJlbmRwb2ludCIsIm9yZGVyQXBpRW5kcG9pbnQiLCJwcm9kdWN0QXBpRW5kcG9pbnQiLCJnZXRVc2VySW5mb0FwaUVuZHBvaW50IiwiZ2V0VmF0UmVjZWlwdEVuZHBvaW50IiwibWFya2V0aW5nUHJlZmVyZW5jZXNBcGlFbmRwb2ludCIsImNhdGNoRXJyb3IiLCJyZXMiLCJyZXEiLCJ0eXBlIiwicG9zdCIsImRhdGEiLCJwYXRjaCIsInB1dCIsIl9kZWxldGUiLCJjcmVhdGVSb290UmVkdWNlciIsImhpc3RvcnkiLCJjb21iaW5lUmVkdWNlcnMiLCJtZXRhIiwicm91dGVyIiwiY29ubmVjdFJvdXRlciIsIndhbGxldCIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJpZCIsImN1c3RvbWVySWQiLCJtaXNzaW5nQmlsbGluZ0FkZHJlc3MiLCJpbmNvbXBsZXRlQm9va2luZyIsIm1pc3NpbmdDdXN0b21lckRldGFpbHMiLCJzdG9ja0hvbGRTdGF0dXMiLCJoYXNTdG9ja0hvbGRFcnJvciIsInNuYXBzaG90U3RhdHVzIiwib3JkZXJJZCIsInByZXZpb3VzTG9jYXRpb24iLCJicmFuZCIsImZ1bGZpbG1lbnRUeXBlIiwidG9nZ2xlTW9kYWxEaXNhYmxlRXNjQ2xvc2UiLCJtb2RhbFJlbW92ZVNjcm9sbCIsInNlcnZlclNpZGVDb29raWVzIiwibWlzc2luZ0Jvb2tpbmdJRCIsImlzV2NzSGFuZG92ZXIiLCJmdWxmaWxtZW50Q3JlYXRlZCIsInJlZGlyZWN0VG9BcnJhbmdlRGVsaXZlcnkiLCJmYXRhbEZ1bGZpbG1lbnRFcnJvciIsInJlZGlyZWN0VG9QYXltZW50IiwiZmF0YWxCb29raW5nRXJyb3IiLCJtZXRhUmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNhdmVkUGF5bWVudE1ldGhvZHMiLCJkYXRhY2FzaE1pZ3JhdGlvbkFsZXJ0Iiwid2FsbGV0UmVkdWNlciIsInN0YXRlIiwiX3JlZiIsInBheWxvYWQiLCJyb290IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJyb290JCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhbGwiLCJmb3JrIiwid2F0Y2hJbml0VXNlckluZm9QYWdlU2FnYSIsInN0b3AiLCJfbWFya2VkIiwiaW5pdFVzZXJJbmZvUGFnZVNhZ2EiLCJfbWFya2VkMiIsIm1hcmsiLCJhY3Rpb24iLCJtZXNzYWdlIiwiaW5pdFVzZXJJbmZvUGFnZVNhZ2EkIiwiZ2V0V2FsbGV0U2FnYSIsInQwIiwiZGV0YWlsIiwid2F0Y2hJbml0VXNlckluZm9QYWdlU2FnYSQiLCJfY29udGV4dDIiLCJ0YWtlTGF0ZXN0IiwiX2Vycm9yJGJvZHkiLCJnZXRXYWxsZXRTYWdhJCIsImNhbGwiLCJzZW50IiwiaXNTdHViIiwicmVjZWlwdFNlcnZpY2VQcm94eSIsInByb3h5IiwicHJveHlSZXFQYXRoUmVzb2x2ZXIiLCJwYXJzZSIsImNoZWNrb3V0U2VydmljZVByb3h5IiwibWFya2V0aW5nUHJlZmVyZW5jZVNlcnZpY2VQcm94eSIsImFjY291bnRTZXJ2aWNlUHJveHkiLCJ3Y3NQcm94eSIsInByb3h5UmVxIiwidGVhbGl1bVByb3h5IiwiZ2V0VGVhbGl1bUJyYW5kIiwiZ2V0VGVhbGl1bUVudiIsInN0dWJEYXNoYm9hcmRQcm94eSIsInN0dWJFbmRwb2ludFByb3h5Iiwic3R1YlByb3h5Iiwib3JpZ2luYWxVcmwiLCJzcGxpdCIsInByb2R1Y3RHYXRld2F5UHJveHkiLCJ2YXVsdCIsInBkcCIsImtleSIsInNlbmQiLCJfVVJMIiwiVVJMIiwib3JpZ2luIiwicHJveHlSZXFPcHREZWNvcmF0b3IiLCJwcm94eVJlcU9wdHMiLCJoZWFkZXJzIiwiYWNjZXB0IiwicHJvZHVjdHNQYXRoIiwic2Vzc2lvbk1hbmFnZXJQcm94eSIsIndpc2hsaXN0TW9jayIsImpzb24iLCJ3aXNobGlzdHMiLCJpdGVtcyIsInBhcnROdW1iZXIiLCJzc3JNaWRkbGV3YXJlIiwibG9nZ2VyIiwiY29sb3IiLCJib2xkIiwiYWN0aXZlUm91dGUiLCJyb3V0ZXMiLCJmaW5kIiwicm91dGUiLCJpIiwibWF0Y2hQYXRoIiwibWVtb3J5SGlzdG9yeSIsImNyZWF0ZU1lbW9yeUhpc3RvcnkiLCJpbml0aWFsRW50cmllcyIsIndhaXRGb3JBc3luY0FjdGlvbnMiLCJwcm9jZXNzUm91dGVzIiwidGhlbiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdG9yZSIsImNvbnRleHQiLCJtb2R1bGVzIiwiYXBwSHRtbCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJMb2FkYWJsZSIsIkNhcHR1cmUiLCJyZXBvcnQiLCJtb2R1bGVOYW1lIiwicHVzaCIsIlJlZHV4UHJvdmlkZXIiLCJTdGF0aWNSb3V0ZXIiLCJBcHAiLCJCb2R5Q29udGVudEFuZFNjcmlwdHMiLCJfcmVmMyIsImNsaWVudCIsIm1vZHVsZXNDaHVua3MiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldEpzRmlsZXMiLCJzZXJ2ZXJIdG1sIiwic2VyaWFsaXplIiwiZXhwcmVzcyIsInVzZSIsImVudkNvbmZpZyIsIlBPUlQiLCJwcmVsb2FkQWxsIiwibGlzdGVuIiwiaW5mbyIsImZpbGVzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZm9yRWFjaCIsIm1vZHVsZSIsIm1hcCIsImluZGV4Iiwic3JjIiwiZGVmZXIiLCJjaGFyU2V0IiwiZmV0Y2hQb3B1bGFyUmVwb3MiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsInJlcG9zIiwid2FybiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwicmVuZGVyIiwiTmF2YmFyIiwiU3dpdGNoIiwiZXhhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiUm91dGUiLCJwcm9wcyIsIl9leHRlbmRzIiwiTm9NYXRjaCIsIkdyaWQiLCJfdGhpcyIsIl9faXNCcm93c2VyX18iLCJzdGF0aWNDb250ZXh0IiwiZmV0Y2hSZXBvcyIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXRjaCIsInBhcmFtcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImxhbmciLCJfdGhpczIiLCJzZXRTdGF0ZSIsImZldGNoSW5pdGlhbERhdGEiLCJfdGhpcyRzdGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJsb2dpbiIsIkhvbWUiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJjb3VudCIsInNldENvdW50IiwiUGFzc3dvcmRJbnB1dCIsIm9uQ2xpY2siLCJNeUNvbXBvbmVudCIsImhhbmRsZVBvc3RSZXF1ZXN0IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJjcmVkZW50aWFscyIsIkVycm9yIiwibGFuZ3VhZ2VzIiwicGFyYW0iLCJOYXZMaW5rIiwiYWN0aXZlU3R5bGUiLCJmb250V2VpZ2h0IiwidG8iLCJ1c2VIaXN0b3J5Iiwic2V0UXVlcnlQYXJhbXMiLCJxdWVyeVN0cmluZyIsIl91c2VMb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwicXVlcnlQYXJhbXNPYmoiLCJ1c2VNZW1vIiwicXVlcnlTdHJpbmdUb09iamVjdCIsInJlYWRRdWVyeVByb3BlcnR5Iiwic2V0TGFuZ3VhZ2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFnZSIsInNldEFnZSIsIm9uVmFsdWVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ1cGRhdGVRdWVyeU9iamVjdCIsInVwZGF0ZVF1ZXJ5UHJvcGVydHkiLCJjcmVhdGVRdWVyeVN0cmluZyIsImZsZXhEaXJlY3Rpb24iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJlIiwiaHRtbEZvciIsIl9yZWYkZW1haWwiLCJlbWFpbCIsInNldFZhbHVlIiwic3RyZW5ndGgiLCJzZXRTdHJlbmd0aCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiZ2V0UGFzc3dvcmRTdHJlbmd0aCIsInVzZUVmZmVjdCIsInNldE9wdGlvbnMiLCJzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyIsIkZyYWdtZW50IiwidXNlcklucHV0cyIsInp4Y3ZibkNvbW1vblBhY2thZ2UiLCJ6eGN2Ym5FblBhY2thZ2UiLCJ6eGN2Ym5PcHRpb25zIiwiZGljdGlvbmFyeSIsIl9vYmplY3RTcHJlYWQiLCJncmFwaHMiLCJhZGphY2VuY3lHcmFwaHMiLCJ0cmFuc2xhdGlvbnMiLCJfeCIsInBhc3N3b3JkIiwiX3p4Y3ZibiIsInp4Y3ZibiIsInNjb3JlIiwiR2V0U25hcHNob3RSZWRpcmVjdHMiLCJjaGlsZHJlbiIsIlVzZXJTZWNyZXRJbmZvQ29udGFpbmVyIiwiVXNlclNlY3JldEluZm8iLCJnZXRJbml0aWFsQWN0aW9ucyIsIkd1ZXN0Q2hlY2tvdXRDb250YWluZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2FkZXIiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsInByb3BlcnR5IiwicXVlcnlPYmplY3QiLCJ1cGRhdGUiLCJzdHIiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJqb2luIiwiVVJMU2VhcmNoUGFyYW1zT2JqIiwiVVJMU2VhcmNoUGFyYW1zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwiZXJyIiwiZiIsIlBhcmFtc1F1ZXJ5IiwiTG9naW4iLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlRGF0YVRlc3QiLCJhbmFseXRpY3MiLCJwb3AiLCJyb3V0ZXNQcm9jZXNzaW5nIiwibGV2ZWwiLCJjcmVhdGVTdG9yZSIsInRhc2tzIiwicnVuU2FnYSIsInJvb3RTYWdhIiwiX3JvdXRlJGNvbXBvbmVudCIsInJlZHV4QWN0aW9uIiwiY29udGV4dFR5cGVzIiwibG9hZGFibGUiLCJfTG9hZGFibGVDb250YWluZXIiLCJMb2FkYWJsZUNvbnRhaW5lciIsImxvYWRlZCIsImluaXRpYWxBY3Rpb24iLCJkaXNwYXRjaCIsImNsb3NlIiwidG9Qcm9taXNlIiwiZ2V0U3RhdGUiLCJsYXRlc3RTdG9yZSIsImlzRGV2Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJlZHV4Um91dGVyTWlkZGxld2FyZSIsInJvdXRlck1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJwcmVsb2FkZWRTdGF0ZSIsImRldlRvb2xzIiwibWlkZGxld2FyZSIsImhvdCIsImNyZWF0ZU5ld1Jvb3RSZWR1Y2VyIiwicmVwbGFjZVJlZHVjZXIiLCJydW4iLCJFTkQiLCJMb2dMZXZlbCIsImdldExldmVsIiwiTE9HX0xFVkVMIiwiTnVtYmVyIiwiSU5GTyIsIm9iaiIsIl90eXBlb2YiLCJvdXRwdXQiLCJPYmplY3QiLCJhc3NpZ24iLCJFUlJPUiIsIldBUk4iLCJ0cmFjZSIsIlRSQUNFIiwiREVCVUciLCJGQVRBTCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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MUQsQ0FBQztFQUVEO0VBQ0E1ZSxLQUFLLEVBQUUsU0FBQUEsTUFBQ3NlLEdBQVEsRUFBSztJQUNuQixJQUFJSixRQUFRLENBQUMsQ0FBQyxJQUFJRCxRQUFRLENBQUNVLEtBQUssRUFBRWppQixHQUFHLENBQUM0aEIsR0FBRyxFQUFFTCxRQUFRLENBQUNVLEtBQUssQ0FBQztFQUM1RCxDQUFDO0VBRUQ7RUFDQTVlLEtBQUssRUFBRSxTQUFBQSxNQUFDdWUsR0FBUSxFQUFLO0lBQ25CLElBQUlKLFFBQVEsQ0FBQyxDQUFDLElBQUlELFFBQVEsQ0FBQ2UsS0FBSyxFQUFFdGlCLEdBQUcsQ0FBQzRoQixHQUFHLEVBQUVMLFFBQVEsQ0FBQ2UsS0FBSyxDQUFDO0VBQzVEO0FBQ0YsQ0FBQztBQUVjbGYscUVBQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRXJCLHlFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vc2VydmVyL2NodW5rLVwiICsgY2h1bmtJZCArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvY2h1bmtzL1wiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBuY29uZiBmcm9tICduY29uZidcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbi8vIEluaXRpYWxpc2Ugd2l0aCBhcmd1bWVudHMgYW5kIGVudiB2YXJpYWJsZXNcbm5jb25mLmFyZ3YoKS5lbnYoKVxuXG4vLyBTZXQgdGhlIGRlZmF1bHQgZW52aXJvbm1lbnQgdG8gcHJvZHVjdGlvblxubmNvbmYuZGVmYXVsdHMoe1xuICBOT0RFX0VOVjogJ3Byb2R1Y3Rpb24nLFxuICAvLyBORVdfUkVMSUNfSE9NRTogJy4vY29uZmlnL25ld3JlbGljJyxcbiAgRElTQUJMRV9BVVRPTUFUSUNfUkVTVU1FOiAnZmFsc2UnLFxufSlcblxuY29uc3QgY29uZmlnID0gbmNvbmYuZ2V0KCdFTlZfQ09ORklHJykgfHwgbmNvbmYuZ2V0KCdOT0RFX0VOVicpXG5cbi8vIExvYWQgZW52aXJvbm1lbnQgY29uc3RhbnRzIGZvciBlbnZpcm9ubWVudFxubmNvbmYuZmlsZSh7IGZpbGU6IGAuL2NvbmZpZy9lbnZjb25maWcvZW52Y29uZmlnLiR7Y29uZmlnfS5qc29uYCB9KVxuXG5pZiAoY29uZmlnID09PSAnc3R1YicpIHtcbiAgZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuZW52LmxvY2FsJyB9KVxuICBuY29uZi5zZXQoJ0FERFJFU1NfRklOREVSX0FQSV9LRVknLCBwcm9jZXNzLmVudi5BRERSRVNTX0ZJTkRFUl9BUElfS0VZKVxufVxuXG4vLyBTVFVCX1VSTCB3aWxsIGJlIHNldCBmb3IgZmVhdHVyZSBicmFuY2hlc1xuLy8gVE9ETzogU2VlIHRpY2tldCBCT0ZTLTQyNjUgLSBpbnZlc3RpZ2F0ZSBzaW1pbGFyIGZ1bmN0aW9uYWxpdHkgdGhhdCBjYW4gZGVwbG95IGZlYXR1cmUgb3IgcHJldmlldyBkZXBsb3ltZW50cyBpbiBCb3N1blxuLy8gaWYgKG5jb25mLmdldCgnRU5WX0NPTkZJRycpID09PSAncmVtb3RlU3R1YicpIHtcbi8vICAgbmNvbmYuc2V0KCdHQVRFV0FZX0FQSScsIG5jb25mLmdldCgnR0FURVdBWV9BUEknKS5yZXBsYWNlKCdzdHViLXBheW1lbnQtc2VydmljZScsIG5jb25mLmdldCgnU1RVQl9VUkwnKSkpXG4vLyAgIG5jb25mLnNldCgnQUNDT1VOVF9BUEknLCBuY29uZi5nZXQoJ0FDQ09VTlRfQVBJJykucmVwbGFjZSgnc3R1Yi1wYXltZW50LXNlcnZpY2UnLCBuY29uZi5nZXQoJ1NUVUJfVVJMJykpKVxuLy8gICBuY29uZi5zZXQoJ1dDU19BUEknLCBuY29uZi5nZXQoJ1dDU19BUEknKS5yZXBsYWNlKCdzdHViLXBheW1lbnQtc2VydmljZScsIG5jb25mLmdldCgnU1RVQl9VUkwnKSkpXG4vLyAgIG5jb25mLnNldChcbi8vICAgICAnU0VTU0lPTl9NQU5BR0VSX0FQSScsXG4vLyAgICAgbmNvbmYuZ2V0KCdTRVNTSU9OX01BTkFHRVJfQVBJJykucmVwbGFjZSgnc3R1Yi1wYXltZW50LXNlcnZpY2UnLCBuY29uZi5nZXQoJ1NUVUJfVVJMJykpLFxuLy8gICApXG4vLyAgIG5jb25mLnNldChcbi8vICAgICAnTUFSS0VUSU5HX1BSRUZFUkVOQ0VfQVBJJyxcbi8vICAgICBuY29uZi5nZXQoJ01BUktFVElOR19QUkVGRVJFTkNFX0FQSScpLnJlcGxhY2UoJ3N0dWItcGF5bWVudC1zZXJ2aWNlJywgbmNvbmYuZ2V0KCdTVFVCX1VSTCcpKSxcbi8vICAgKVxuLy8gfVxuXG4vLyBQYXNzIGFsbCB2YWx1ZXMgaW50byBwcm9jZXNzLmVudlxucHJvY2Vzcy5lbnYgPSBuY29uZi5nZXQoKVxuXG4vLyBMb2cgb3V0IHRoZSBlbmRwb2ludHMgd2UncmUgdXNpbmcgdG8gbWFrZSBkZWJ1Z2dpbmcgZWFzaWVyXG5pZiAoY29uZmlnICE9PSAndGVzdCcpIHtcbiAgY29uc29sZS5sb2coXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogJ3NlcnZlckxvZ2dlcicsXG4gICAgICBtc2c6IGBDb25maWd1cmF0aW9uIGZvciBcIiR7Y29uZmlnfVwiOmAsXG4gICAgICBlbnZjb25maWc6IHtcbiAgICAgICAgTk9ERV9FTlY6IG5jb25mLmdldCgnTk9ERV9FTlYnKSxcbiAgICAgICAgRU5WX0NPTkZJRzogbmNvbmYuZ2V0KCdFTlZfQ09ORklHJyksXG4gICAgICAgIEdBVEVXQVlfQVBJOiBuY29uZi5nZXQoJ0dBVEVXQVlfQVBJJyksXG4gICAgICAgIEFDQ09VTlRfQVBJOiBuY29uZi5nZXQoJ0FDQ09VTlRfQVBJJyksXG4gICAgICAgIFdDU19BUEk6IG5jb25mLmdldCgnV0NTX0FQSScpLFxuICAgICAgICBTRVNTSU9OX01BTkFHRVJfQVBJOiBuY29uZi5nZXQoJ1NFU1NJT05fTUFOQUdFUl9BUEknKSxcbiAgICAgICAgTUFSS0VUSU5HX1BSRUZFUkVOQ0VfQVBJOiBuY29uZi5nZXQoJ01BUktFVElOR19QUkVGRVJFTkNFX0FQSScpLFxuICAgICAgICBSRUNFSVBUX0FQSTogbmNvbmYuZ2V0KCdSRUNFSVBUX0FQSScpLFxuICAgICAgICBDT05TVUxfRU5WOiBuY29uZi5nZXQoJ0NPTlNVTF9FTlYnKSxcbiAgICAgICAgQk9TVU5fQ09ORklHX01BUDogbmNvbmYuZ2V0KCdCT1NVTl9DT05GSUdfTUFQJyksXG4gICAgICAgIFZBVUxUX0VOVjogbmNvbmYuZ2V0KCdWQVVMVF9FTlYnKSxcbiAgICAgICAgQk9TVU5fRU5WOiBuY29uZi5nZXQoJ0JPU1VOX0VOVicpLFxuICAgICAgfSxcbiAgICB9KSxcbiAgKVxufVxuXG5leHBvcnQgeyBuY29uZiB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbi8vaW1wb3J0IHsgQ29uc3VsQ29uZmlnIH0gZnJvbSAndHlwZXMvcmVkdWNlcnMvYXBwJ1xuXG5leHBvcnQgY29uc3QgTU9EQUxfT1BFTiA9IGNyZWF0ZUFjdGlvbignTU9EQUxfT1BFTicpXG5leHBvcnQgY29uc3QgTU9EQUxfQ0xPU0UgPSBjcmVhdGVBY3Rpb24oJ01PREFMX0NMT1NFJylcbmV4cG9ydCBjb25zdCBTRVRfT1JERVJfU1VNTUFSWV9WQVJJQU5UID0gY3JlYXRlQWN0aW9uPGFueT4oJ1NFVF9PUkRFUl9TVU1NQVJZX1ZBUklBTlQnKVxuZXhwb3J0IGNvbnN0IFNFVF9CUkFORCA9IGNyZWF0ZUFjdGlvbjxhbnk+KCdTRVRfQlJBTkQnKVxuZXhwb3J0IGNvbnN0IFNFVF9USEVNRSA9IGNyZWF0ZUFjdGlvbjxhbnk+KCdTRVRfVEhFTUUnKVxuZXhwb3J0IGNvbnN0IFRPR0dMRV9QUkVWSUVXX1BMQUNFX09SREVSID0gY3JlYXRlQWN0aW9uKCdUT0dHTEVfUFJFVklFV19QTEFDRV9PUkRFUicpXG5leHBvcnQgY29uc3QgU0VUX0ZFQVRVUkVfVE9HR0xFID0gY3JlYXRlQWN0aW9uPFBhcnRpYWw8YW55Pj4oJ1NFVF9GRUFUVVJFX1RPR0dMRScpXG5leHBvcnQgY29uc3QgU0VUX0ZFQVRVUkVTID0gY3JlYXRlQWN0aW9uPGFueT4oJ1NFVF9GRUFUVVJFUycpXG5leHBvcnQgY29uc3QgU0VUX0NPTkZJRyA9IGNyZWF0ZUFjdGlvbjxhbnk+KCdTRVRfQ09ORklHJylcbmV4cG9ydCBjb25zdCBTRVRfQ0hBTk5FTF9UT0dHTEUgPSBjcmVhdGVBY3Rpb24oJ1NFVF9DSEFOTkVMX1RPR0dMRScpXG4vL2V4cG9ydCBjb25zdCBTRVRfQ09ORklHX0NPT0tJRSA9IGNyZWF0ZUFjdGlvbjxDb25zdWxDb25maWc+KCdTRVRfQ09ORklHX0NPT0tJRScpXG5leHBvcnQgY29uc3QgVFJBQ0tfQURfQ09OVElOVUVfRVJST1IgPSBjcmVhdGVBY3Rpb248c3RyaW5nPignVFJBQ0tfQURfQ09OVElOVUVfRVJST1InKVxuIiwiZXhwb3J0IHtcbiAgTU9EQUxfT1BFTixcbiAgTU9EQUxfQ0xPU0UsXG4gIFNFVF9PUkRFUl9TVU1NQVJZX1ZBUklBTlQsXG4gIFRPR0dMRV9QUkVWSUVXX1BMQUNFX09SREVSLFxuICBTRVRfQlJBTkQsXG4gIFNFVF9USEVNRSxcbiAgU0VUX0ZFQVRVUkVfVE9HR0xFLFxuICBTRVRfQ0hBTk5FTF9UT0dHTEUsXG4gIFNFVF9GRUFUVVJFUyxcbiAgU0VUX0NPTkZJRyxcbiAgVFJBQ0tfQURfQ09OVElOVUVfRVJST1IsXG59IGZyb20gJy4vYXBwJ1xuXG5cbmV4cG9ydCB7IEdFVF9XQUxMRVRfU1VDQ0VTUywgR0VUX1dBTExFVF9GQUlMVVJFIH0gZnJvbSAnLi93YWxsZXQnXG5cbmV4cG9ydCB7XG4gIElOSVRfVVNFUl9JTkZPX1BBR0UsXG59IGZyb20gJy4vbWV0YSdcblxuXG5cbmV4cG9ydCB7IFJPVVRFUl9MT0NBVElPTl9DSEFOR0UgfSBmcm9tICcuL3JvdXRlcidcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBHZXRXYWxsZXRBUElQYXlsb2FkIH0gZnJvbSAndHlwZXMvYXBpJ1xuXG5leHBvcnQgY29uc3QgSU5JVF9VU0VSX0lORk9fUEFHRSA9IGNyZWF0ZUFjdGlvbjxHZXRXYWxsZXRBUElQYXlsb2FkPignR0VUX1dBTExFVF9TVUNDRVNTJylcbmV4cG9ydCBjb25zdCBHRVRfV0FMTEVUX0ZBSUxVUkUgPSBjcmVhdGVBY3Rpb24oJ0dFVF9XQUxMRVRfRkFJTFVSRScpXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgTE9DQVRJT05fQ0hBTkdFIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcidcbmltcG9ydCB7IFJvdXRlckxvY2F0aW9uQ2hhbmdlQWN0aW9uUGF5bG9hZCB9IGZyb20gJy4uL3R5cGVzL2FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBST1VURVJfTE9DQVRJT05fQ0hBTkdFID0gY3JlYXRlQWN0aW9uPFJvdXRlckxvY2F0aW9uQ2hhbmdlQWN0aW9uUGF5bG9hZD4oTE9DQVRJT05fQ0hBTkdFKVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IEdldFdhbGxldEFQSVBheWxvYWQgfSBmcm9tICd0eXBlcy9hcGknXG5cbmV4cG9ydCBjb25zdCBHRVRfV0FMTEVUX1NVQ0NFU1MgPSBjcmVhdGVBY3Rpb248R2V0V2FsbGV0QVBJUGF5bG9hZD4oJ0dFVF9XQUxMRVRfU1VDQ0VTUycpXG5leHBvcnQgY29uc3QgR0VUX1dBTExFVF9GQUlMVVJFID0gY3JlYXRlQWN0aW9uKCdHRVRfV0FMTEVUX0ZBSUxVUkUnKVxuIiwiaW1wb3J0IHsgY2FuVXNlRG9tIH0gZnJvbSAnQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHMnXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWxzL0xvZ2dlcidcblxuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuL2VuZHBvaW50cydcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi9oZWxwZXJzL3JlcXVlc3RIZWxwZXJzJ1xuaW1wb3J0IHtcbiAgQVBJUmVzcG9uc2UsXG4gIC8vIENyZWF0ZUFub255bW91c1Nlc3Npb25BUElSZXF1ZXN0LFxuICAvLyBDcmVhdGVBbm9ueW1vdXNTZXNzaW9uQVBJUmVzcG9uc2UsXG59IGZyb20gJ3R5cGVzL2FwaSdcblxuXG5jb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cblxuaW50ZXJmYWNlIEFwaSB7XG4gIC8vIFdhbGxldFxuICBnZXRXYWxsZXQ6ICh1c2VySWQ6IHN0cmluZywgY29va2llOiBzdHJpbmcpID0+IHVua25vd25cbiAgLy8gU2Vzc2lvblxuIC8vIGNyZWF0ZUFub255bW91c1Nlc3Npb246IChvcHRpb25zOiBDcmVhdGVBbm9ueW1vdXNTZXNzaW9uQVBJUmVxdWVzdCkgPT4gQ3JlYXRlQW5vbnltb3VzU2Vzc2lvbkFQSVJlc3BvbnNlXG59XG5cbmNvbnN0IGFwaUZhY3RvcnkgPSAoKTogQXBpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvKlxuXG4gICAgLy8gV2FsbGV0IGhvdyB0aGUgZmluYWwgcGF0aCBsb29rIGxpa2U6XG5cbiAgICAxLlxuICAgIHByb2RcbiAgICBcIkFDQ09VTlRfQVBJXCI6IFwiaHR0cHM6Ly9hcmdvcy1hY2NvdW50LWFjY291bnQtc2VydmljZS5pbnQucHJkLmpzcGFhcy51a1wiLFxuICAgIHN0YWdlIFxuICAgIFwiQUNDT1VOVF9BUElcIjogXCJodHRwczovL2FyZ29zLWFjY291bnQtYWNjb3VudC1zZXJ2aWNlLmludC5zdGcuanNwYWFzLnVrXCIsXG4gICAgc3R1YnMgXG4gICAgXCJBQ0NPVU5UX0FQSVwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAxMVwiLFxuXG4gICAgMi5cbiAgICBjb25maWcuYWNjb3VudEFwaVNlcnZlciA9IHByb2Nlc3MuZW52LkFDQ09VTlRfQVBJXG4gICAgY29uZmlnLmFjY291bnRBcGlCYXNlVXJsID0gYC9hY2NvdW50LWFwaWAsXG5cbiAgICBjb25zdCBhY2NvdW50QXBpU2VydmVyID0gYWNjb3VudEFwaUVuZHBvaW50KCkgPT4gY29uZmlnLmFjY291bnRBcGlTZXJ2ZXJ9JHtjb25maWcuYWNjb3VudEFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG4gICAgUVVFUktZIEJJVCA9ICR7ZW5kcG9pbnR9IGlzIGFsd2F5IGVtcHR5IGNhdXNlIHdlIGRvIG5vdCBwYXNzIGFueXRoaW5nIHRvIHRoZSBtZXRob2QgYWNjb3VudEFwaUVuZHBvaW50KClcblxuXG4gICAgYWNjb3VudCBwYXRoID0gYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGFjY291bnRBcGlFbmRwb2ludCgpIFxuICAgIENsaWVudCA6IGVtcHR5IGNhblVzZURvbSgpICYmICcnXG4gICAgU0VSVkVSOiBodHRwOi8vbG9jYWxob3N0OjMwMTEvYWNjb3VudC1hcGkvXG5cblxuICAgIC0tLS0tVVJMIGFsbCB0b2dldGhlci0tLS0tXG5cbiAgICAvLyBjb25zdCBlbmRwb2ludCA9IGVuZHBvaW50cy5nZXRXYWxsZXQoMTEpID0+IGAke2FjY291bnR9L3VzZXJzLzExL3dhbGxldGBcblxuICAgIENsaWVudCA6IC91c2Vycy8xMS93YWxsZXRcbiAgICBTRVJWRVI6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9hY2NvdW50LWFwaS91c2Vycy8xMS93YWxsZXRcbiovXG5cbiAgICBnZXRXYWxsZXQ6ICh1c2VySWQsIGNvb2tpZSkgPT4gcmVxdWVzdC5nZXQoZW5kcG9pbnRzLmdldFdhbGxldCh1c2VySWQpKS5zZXQoeyBDb29raWU6IGNvb2tpZSB9KSxcbiAgICAvLyBTZXNzaW9uXG4gICAgLy9jcmVhdGVBbm9ueW1vdXNTZXNzaW9uOiAob3B0aW9ucykgPT5cbiAgICAgIC8vcmVxdWVzdC5wb3N0KGVuZHBvaW50cy5jcmVhdGVBbm9ueW1vdXNTZXNzaW9uKCksIG9wdGlvbnMpIGFzIHVua25vd24gYXMgQ3JlYXRlQW5vbnltb3VzU2Vzc2lvbkFQSVJlc3BvbnNlLFxuICB9XG59XG5cblxuXG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byByZWFkIHN1cGVyYWdlbnQgcmVzcG9uc2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jlc3BvbnNlPFQ+KHJlc3BvbnNlOiBBUElSZXNwb25zZTxUPiwgc2hvdWxkUmVkaXJlY3RUb0xvZ2luID0gdHJ1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgTG9nZ2VyLmZhdGFsKFwiV2UgZGlkbid0IGdldCBhIHJlc3BvbnNlXCIpXG4gICAgICByZWplY3QoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZWplY3QocmVzcG9uc2UpXG5cbiAgICAgIExvZ2dlci5lcnJvcih7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICB0ZXh0OiByZXNwb25zZS50ZXh0LFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgc2hvdWxkUmVkaXJlY3RUb0xvZ2luKSB7XG4gICAgICBpZiAoY2FuVXNlRG9tKCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbG9naW4/cGFnZU5hbWU9bWFuZGF0b3J5UHJlcGF5JnN1Y2Nlc3NVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3VjY2Vzc1VybCl9YFxuICAgICAgfVxuXG4gICAgICByZWplY3QocmVzcG9uc2UpXG5cbiAgICAgIExvZ2dlci5lcnJvcih7XG4gICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogcmVzcG9uc2UucmVxdWVzdC51cmwsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICB0ZXh0OiByZXNwb25zZS50ZXh0LFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgcmVqZWN0KHJlc3BvbnNlKVxuXG4gICAgICBMb2dnZXIuZXJyb3Ioe1xuICAgICAgICBtZXRob2Q6IHJlc3BvbnNlLnJlcXVlc3QubWV0aG9kLFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnJlcXVlc3QudXJsLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgdGV4dDogcmVzcG9uc2UudGV4dCxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uub2spIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuYm9keSlcblxuICAgICAgTG9nZ2VyLmRlYnVnKHtcbiAgICAgICAgbWV0aG9kOiByZXNwb25zZS5yZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgdXJsOiByZXNwb25zZS5yZXF1ZXN0LnVybCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIC8vIGhpZGUgc3VjY2VzcyBib2R5IGluIHByb2QgYXMgaXQgY29udGFpbnMgY3VzdG9tZXIgZGF0YVxuICAgICAgICB0ZXh0OiBpc1Byb2R1Y3Rpb24gPyB1bmRlZmluZWQgOiByZXNwb25zZS50ZXh0LFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2Uub2spIHtcbiAgICAgIHJlamVjdChyZXNwb25zZSlcblxuICAgICAgTG9nZ2VyLmVycm9yKHtcbiAgICAgICAgbWV0aG9kOiByZXNwb25zZS5yZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgdXJsOiByZXNwb25zZS5yZXF1ZXN0LnVybCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHRleHQ6IHJlc3BvbnNlLnRleHQsXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpRmFjdG9yeSgpXG4iLCJpbXBvcnQge1xuICBhY2NvdW50QXBpRW5kcG9pbnQsXG4gIHNlc3Npb25NYW5hZ2VyRW5kcG9pbnRcbn0gZnJvbSAnLi4vaGVscGVycy9hcGlVcmxIZWxwZXJzJ1xuXG5cbmNvbnN0IGFjY291bnQgPSBhY2NvdW50QXBpRW5kcG9pbnQoKVxuY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25NYW5hZ2VyRW5kcG9pbnQoKVxuaW50ZXJmYWNlIEVuZHBvaW50cyB7XG4gIGdldFdhbGxldDogKHVzZXJJZDogc3RyaW5nKSA9PiBzdHJpbmdcbiAgY3JlYXRlQW5vbnltb3VzU2Vzc2lvbjogKCkgPT4gc3RyaW5nXG59XG5cbmNvbnN0IGVuZHBvaW50czogRW5kcG9pbnRzID0ge1xuICAvLyBXYWxsZXRcbiAgZ2V0V2FsbGV0OiAodXNlcklkKSA9PiBgJHthY2NvdW50fS91c2Vycy8ke3VzZXJJZH0vd2FsbGV0YCxcblxuICAvLyBTZXNzaW9uXG4gIGNyZWF0ZUFub255bW91c1Nlc3Npb246ICgpID0+IGAke3Nlc3Npb259L3Nlc3Npb25zL2Fub255bW91c2AsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuZHBvaW50c1xuIiwiaW1wb3J0IGFwaSwgeyBjaGVja1Jlc3BvbnNlIH0gZnJvbSAnLi9hcGknXG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4vZW5kcG9pbnRzJ1xuXG5leHBvcnQgeyBjaGVja1Jlc3BvbnNlLCBlbmRwb2ludHMgfVxuXG5leHBvcnQgZGVmYXVsdCBhcGlcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgY2FuVXNlRG9tIH0gZnJvbSAnQHNhaW5zYnVyeXMtdGVjaC9ib2x0dWktdXRpbHMnXG5cbmNvbnN0IGhvc3QgPSBwcm9jZXNzLmVudi5IT1NUIHx8ICdsb2NhbGhvc3QnXG5jb25zdCBwb3J0ID0gJzgwODAnXG5jb25zdCBwcmVwYXlBcGkgPSBwcm9jZXNzLmVudi5HQVRFV0FZX0FQSSB8fCAnJ1xuY29uc3QgYWNjb3VudEFwaSA9IHByb2Nlc3MuZW52LkFDQ09VTlRfQVBJIHx8ICcnXG5jb25zdCBtYXJrZXRpbmdBUEkgPSBjYW5Vc2VEb20oKSA/ICcnIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbmNvbnN0IHByb2R1Y3RBcGkgPSBjYW5Vc2VEb20oKSA/ICcnIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbmNvbnN0IHNlc3Npb25NYW5hZ2VyQXBpID0gY2FuVXNlRG9tKCkgPyAnJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG5jb25zdCBnZXRVc2VySW5mb0FwaSA9IHByb2Nlc3MuZW52LldDU19BUEkgfHwgJydcbmNvbnN0IHZhdFJlY2VpcHRBcGkgPSBjYW5Vc2VEb20oKSA/ICcnIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcblxuaW50ZXJmYWNlIEdpZnRDYXJkIHtcbiAgYmluUmFuZ2U/OiBzdHJpbmdcbiAgbWluTGVuZ3RoPzogbnVtYmVyXG4gIG1heExlbmd0aD86IG51bWJlclxuICBwaW5OdW1iZXJMZW5ndGg/OiBudW1iZXJcbiAgc2VjdXJpdHlDb2RlTGVuZ3RoPzogbnVtYmVyXG4gIGltYWdlPzogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIEdpZnRDYXJkVHlwZXMge1xuICAnR0VORVJJQycgPSAnR0VORVJJQycsXG4gICdDQVJEX0dJRlRfQVJHT1MnID0gJ0NBUkRfR0lGVF9BUkdPUycsXG4gICdORVdfR0lGVF9DQVJEX0FSR09TJyA9ICdORVdfR0lGVF9DQVJEX0FSR09TJyxcbiAgJ0NBUkRfR0lGVF9GTEVYRUNBU0gnID0gJ0NBUkRfR0lGVF9GTEVYRUNBU0gnLFxufVxuXG5leHBvcnQgdHlwZSBMZWdhY3lDb25maWcgPSB7XG4gIGFwcDoge1xuICAgIHJvb3RGb250U2l6ZTogbnVtYmVyXG4gIH1cbiAgcGF5bWVudE1ldGhvZHNPcmRlcjogUmVhZG9ubHlBcnJheTxbXT5cbiAgcGF5bWVudE1ldGhvZFJvdXRlczogUmVjb3JkPHN0cmluZywgW10+XG4gIHBsYWNlT3JkZXJBbmltYXRpb246IHtcbiAgICBzZWFzb25zOiB7IFsna2V5J106IGFueSB9XG4gICAgW2tleTogc3RyaW5nXTogYW55XG4gIH1cblxuICBwcmVwYXlBcGlTZXJ2ZXI6IHN0cmluZ1xuICBhY2NvdW50QXBpU2VydmVyOiBzdHJpbmdcbiAgcHJvZHVjdEFwaVNlcnZlcjogc3RyaW5nXG4gIG1hcmtldGluZ0FwaVNlcnZlcjogc3RyaW5nXG4gIHNlc3Npb25NYW5hZ2VyU2VydmVyOiBzdHJpbmdcbiAgZ2V0VXNlckluZm9BcGlTZXJ2ZXI6IHN0cmluZ1xuICBnZXRWYXRSZWNlaXB0U2VydmVyOiBzdHJpbmdcbiAgcHJlcGF5QXBpQmFzZVVybDogc3RyaW5nXG4gIG9yZGVyQXBpQmFzZVVybDogc3RyaW5nXG4gIGFjY291bnRBcGlCYXNlVXJsOiBzdHJpbmdcbiAgcHJvZHVjdEFwaUJhc2VVcmw6IHN0cmluZ1xuICBtYXJrZXRpbmdBcGlCYXNlVXJsOiBzdHJpbmdcbiAgc2Vzc2lvbk1hbmFnZXJCYXNlVXJsOiBzdHJpbmdcbiAgZ2V0VXNlckluZm9BcGlCYXNlVXJsOiBzdHJpbmdcbiAgZ2V0VmF0UmVjZWlwdEFwaUJhc2VVcmw6IHN0cmluZ1xuICBuZWN0YXI6IHtcbiAgICBDQVJEX05FQ1RBUjoge1xuICAgICAgYmluTnVtYmVyOiBzdHJpbmdcbiAgICAgIGNhcmROdW1iZXJMZW5ndGg6IG51bWJlclxuICAgIH1cbiAgfVxuICBnaWZ0Q2FyZFR5cGVzOiB7XG4gICAgW2tleSBpbiBHaWZ0Q2FyZFR5cGVzXTogR2lmdENhcmRcbiAgfVxuXG4gIC8vIGZhbGxiYWNrIGFzIHdlIGNvbnRpbnVlIHRvIHR5cGUgdGhpc1xuICAvLyBiZWNhdXNlIG9mIHRoZSBcImFzIGNvbnN0XCIgbW9zdCB0eXBlcyBzaG91bGQgYmUgaW5mZXJyZWQgYW55d2F5XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5jb25zdCBjb25maWcgPSB7XG4gIGhvc3QsXG4gIHBvcnQsXG4gIHByZXBheUFwaVNlcnZlcjogcHJlcGF5QXBpLFxuICBhY2NvdW50QXBpU2VydmVyOiBhY2NvdW50QXBpLFxuICBwcm9kdWN0QXBpU2VydmVyOiBwcm9kdWN0QXBpLFxuICBnZXRWYXRSZWNlaXB0U2VydmVyOiB2YXRSZWNlaXB0QXBpLFxuICBtYXJrZXRpbmdBcGlTZXJ2ZXI6IG1hcmtldGluZ0FQSSxcbiAgc2Vzc2lvbk1hbmFnZXJTZXJ2ZXI6IHNlc3Npb25NYW5hZ2VyQXBpLFxuICBnZXRVc2VySW5mb0FwaVNlcnZlcjogZ2V0VXNlckluZm9BcGksXG4gIHByZXBheUFwaUJhc2VVcmw6IGAvY2hlY2tvdXQtYXBpLXYyYCxcbiAgb3JkZXJBcGlCYXNlVXJsOiBgL2NoZWNrb3V0LWFwaS12MmAsXG4gIGFjY291bnRBcGlCYXNlVXJsOiBgL2FjY291bnQtYXBpYCxcbiAgcHJvZHVjdEFwaUJhc2VVcmw6IGAvY2hlY2tvdXQvcHJveHkvcHJvZHVjdC1nYXRld2F5YCxcbiAgbWFya2V0aW5nQXBpQmFzZVVybDogYC9jaGVja291dC9wcm94eS9tYXJrZXRpbmctcHJlZmVyZW5jZXNgLFxuICBzZXNzaW9uTWFuYWdlckJhc2VVcmw6IGAvaW50ZXJuYWwvcHJveHkvc2Vzc2lvbi1tYW5hZ2VyYCxcbiAgZ2V0VXNlckluZm9BcGlCYXNlVXJsOiBgL3dlYmFwcC93Y3Mvc3RvcmVzL3NlcnZsZXQvR2V0VXNlckluZm9gLFxuICBnZXRWYXRSZWNlaXB0QXBpQmFzZVVybDogYC9jaGVja291dC9wcm94eS9yZWNlaXB0LXNlcnZpY2VgLFxuICBhcHA6IHtcbiAgICByb290Rm9udFNpemU6IDE2LFxuICB9LFxuICB0aW1pbmdzOiB7XG4gICAgZmFkZUluT3V0OiAyMDAsXG4gICAgc25hcHNob3RMb2NrRGVsYXk6IDUwMDAsXG4gICAgcGxhY2VPcmRlclNob3dFcnJvckRlbGF5OiA1MDAsXG4gIH0sXG4gIHBheW1lbnRNZXRob2RSb3V0ZXM6IHtcbiAgICBkZWZhdWx0OiAnUGF5bWVudE1ldGhvZFJvdXRlcy5ERUZBVUxUJyxcbiAgICBjcmVkaXREZWJpdENhcmQ6ICdQYXltZW50TWV0aG9kUm91dGVzLkNBUkRfREVCSVQnLFxuICAgIHBheXBhbDogJ1BheW1lbnRNZXRob2RSb3V0ZXMuUEFZUEFMJyxcbiAgICBhcHBsZVBheTogJ1BheW1lbnRNZXRob2RSb3V0ZXMuQVBQTEVfUEFZJyxcbiAgICBhcmdvc0NhcmRDcmVkaXRQbGFuOiAnUGF5bWVudE1ldGhvZFJvdXRlcy5DQVJEX0FSR09TX0NSRURJVCcsXG4gIH0sXG4gIHN0YXR1c2VzOiB7XG4gICAgaW5pdGlhbGlzYXRpb25JblByb2dyZXNzOiAyMDIsXG4gIH0sXG4gIHBheW1lbnRNZXRob2RzT3JkZXI6IFtcbiAgICAnQ0FSRF9ERUJJVCcsXG4gICAgJ0NBUkRfQVJHT1NfQ1JFRElUJyxcbiAgICAnUEFZUEFMJyxcbiAgICAnQVBQTEVfUEFZJyxcbiAgXSxcbiAgbmVjdGFyOiB7XG4gICAgQ0FSRF9ORUNUQVI6IHtcbiAgICAgIGJpbk51bWJlcjogJzk4MjYzMDAwJyxcbiAgICAgIGNhcmROdW1iZXJMZW5ndGg6IDExLFxuICAgIH0sXG4gIH0sXG4gIGdpZnRDYXJkVHlwZXM6IHtcbiAgICBHRU5FUklDOiB7fSxcbiAgICBDQVJEX0dJRlRfQVJHT1M6IHtcbiAgICAgIGJpblJhbmdlOiAnMTAwMDAnLFxuICAgICAgbWluTGVuZ3RoOiAyMCxcbiAgICAgIG1heExlbmd0aDogMjAsXG4gICAgICBwaW5OdW1iZXJMZW5ndGg6IDQsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaTEuYWRpcy53cy9pL0FyZ29zL0dpZnRDYXJkJyxcbiAgICB9LFxuICAgIE5FV19HSUZUX0NBUkRfQVJHT1M6IHtcbiAgICAgIGJpblJhbmdlOiAnOTgyNjAyNzgnLFxuICAgICAgbWluTGVuZ3RoOiAxOSxcbiAgICAgIG1heExlbmd0aDogMTksXG4gICAgICBwaW5OdW1iZXJMZW5ndGg6IDQsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaTEuYWRpcy53cy9pL0FyZ29zL0dpZnRDYXJkJyxcbiAgICB9LFxuICAgIENBUkRfR0lGVF9GTEVYRUNBU0g6IHtcbiAgICAgIGJpblJhbmdlOiAnNjMzODI3JyxcbiAgICAgIG1pbkxlbmd0aDogMTksXG4gICAgICBtYXhMZW5ndGg6IDE5LFxuICAgICAgc2VjdXJpdHlDb2RlTGVuZ3RoOiAzLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kxLmFkaXMud3MvaS9Bcmdvcy9GbGV4ZWNhc2gnLFxuICAgIH0sXG4gIH0sXG4gIG1heGltdW1OdW1iZXJPZkdpZnRDYXJkczogOCxcbiAgcGxhY2VPcmRlckFuaW1hdGlvbjoge1xuICAgIHNlYXNvbnM6IHtcbiAgICAgIGRlZmF1bHQ6ICdTZWFzb24uREVGQVVMVCcsXG4gICAgICB4bWFzOiAnU2Vhc29uLlhNQVMnLFxuICAgICAgZGVmYXVsdFR1OiAnU2Vhc29uLkRFRkFVTFRfVFUnLFxuICAgICAgeG1hc1R1OiAnU2Vhc29uLlhNQVNfVFUnLFxuICAgICAgZGVmYXVsdEhhYml0YXQ6ICdTZWFzb24uREVGQVVMVF9IQUJJVEFUJyxcbiAgICAgIHhtYXNIYWJpdGF0OiAnU2Vhc29uLlhNQVNfSEFCSVRBVCcsXG4gICAgICBoYWxsb3dlZW46ICdTZWFzb24uSEFMTE9XRUVOJyxcbiAgICAgIHByaWRlOiAnU2Vhc29uLlBSSURFJyxcbiAgICAgIHByaWRlVHU6ICdTZWFzb24uUFJJREVfVFUnLFxuICAgICAgcHJpZGVIYWJpdGF0OiAnU2Vhc29uLlBSSURFX0hBQklUQVQnLFxuICAgICAgYmxhY2tIaXN0b3J5TW9udGg6ICdTZWFzb24uQkxBQ0tfSElTVE9SWV9NT05USCcsXG4gICAgICBibGFja0hpc3RvcnlNb250aEhhYml0YXQ6ICdTZWFzb24uQkxBQ0tfSElTVE9SWV9NT05USF9IQUJJVEFUJyxcbiAgICAgIGJsYWNrSGlzdG9yeU1vbnRoVHU6ICdTZWFzb24uQkxBQ0tfSElTVE9SWV9NT05USF9UVScsXG4gICAgfSxcbiAgICBpbml0aWFsRGVsYXlNczogMjAwMCxcbiAgICBjb2xvcnM6IHtcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBiZ01hc2s6ICcjRkZGOUZBJyxcbiAgICAgICAgfSxcbiAgICAgICAgeG1hczoge30sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBsaWQ6IHtcbiAgICAgICAgYW5pbUR1cmF0aW9uTXM6IDQwMDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJvZHVjdHM6IHtcbiAgICAgIHRvdGFsOiAzLFxuICAgICAgYW5pbVlBeGlzTW92ZURpc3RhbmNlUHg6IDMyMCxcbiAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjI4MCwgMC44NDAsIDAuNDIwLCAxKScsXG4gICAgICBhbmltRHVyYXRpb25NczogMzUwMCxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIGludGVydmFsRHVyYXRpb25NczogMzAwMCxcbiAgICAgIG9wdGlvbnM6IFsnQ2FsbGluZyBlbHZlcy4uLicsICdTaGFraW5nIG1pc3RsZXRvZS4uLicsICdXb3JraW5nIG91ciBtYWdpYy4uLicsIFwiV29uJ3QgYmUgbXVjaCBsb25nZXIuLi5cIl0sXG4gICAgfSxcbiAgfSxcbn0gYXMgY29uc3RcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXG4iLCJpbXBvcnQgeyBjYW5Vc2VEb20gfSBmcm9tICdAc2FpbnNidXJ5cy10ZWNoL2JvbHR1aS11dGlscydcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IHByZXBheUFwaUVuZHBvaW50ID0gKGVuZHBvaW50ID0gJycpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5wcmVwYXlBcGlTZXJ2ZXJ9JHtjb25maWcucHJlcGF5QXBpQmFzZVVybH0ke2VuZHBvaW50fWBcblxuZXhwb3J0IGNvbnN0IGFjY291bnRBcGlFbmRwb2ludCA9IChlbmRwb2ludCA9ICcnKTogc3RyaW5nID0+XG4gIGAke2NhblVzZURvbSgpID8gJycgOiBjb25maWcuYWNjb3VudEFwaVNlcnZlcn0ke2NvbmZpZy5hY2NvdW50QXBpQmFzZVVybH0ke2VuZHBvaW50fWBcblxuZXhwb3J0IGNvbnN0IG9yZGVyQXBpRW5kcG9pbnQgPSAoZW5kcG9pbnQgPSAnJyk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLnByZXBheUFwaVNlcnZlcn0ke2NvbmZpZy5vcmRlckFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0QXBpRW5kcG9pbnQgPSAoZW5kcG9pbnQgPSAnJyk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLnByb2R1Y3RBcGlTZXJ2ZXJ9JHtjb25maWcucHJvZHVjdEFwaUJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uTWFuYWdlckVuZHBvaW50ID0gKGVuZHBvaW50ID0gJycpOiBzdHJpbmcgPT5cbiAgYCR7Y2FuVXNlRG9tKCkgPyAnJyA6IGNvbmZpZy5zZXNzaW9uTWFuYWdlclNlcnZlcn0ke2NvbmZpZy5zZXNzaW9uTWFuYWdlckJhc2VVcmx9JHtlbmRwb2ludH1gXG5cbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mb0FwaUVuZHBvaW50ID0gKCk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLmdldFVzZXJJbmZvQXBpU2VydmVyfSR7Y29uZmlnLmdldFVzZXJJbmZvQXBpQmFzZVVybH1gXG5cbmV4cG9ydCBjb25zdCBnZXRWYXRSZWNlaXB0RW5kcG9pbnQgPSAoKTogc3RyaW5nID0+XG4gIGAke2NhblVzZURvbSgpID8gJycgOiBjb25maWcuZ2V0VmF0UmVjZWlwdFNlcnZlcn0ke2NvbmZpZy5nZXRWYXRSZWNlaXB0QXBpQmFzZVVybH1gXG5cbmV4cG9ydCBjb25zdCBtYXJrZXRpbmdQcmVmZXJlbmNlc0FwaUVuZHBvaW50ID0gKCk6IHN0cmluZyA9PlxuICBgJHtjYW5Vc2VEb20oKSA/ICcnIDogY29uZmlnLm1hcmtldGluZ0FwaVNlcnZlcn0ke2NvbmZpZy5tYXJrZXRpbmdBcGlCYXNlVXJsfWBcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCByZXEgZnJvbSAnc3VwZXJhZ2VudCdcblxuLy8gV2UgaGFuZGxlIHRoZXNlIGVycm9ycyBpbiBjaGVjayByZXNwb25zZSBmdW5jdGlvblxuY29uc3QgY2F0Y2hFcnJvciA9IChyZXM6IHJlcS5SZXNwb25zZSk6IGJvb2xlYW4gPT4gcmVzLnN0YXR1cyA8IDUwMFxuXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IHtcbiAgZ2V0OiAodXJsOiBzdHJpbmcpID0+IHJlcS5nZXQodXJsKS50eXBlKCdqc29uJykub2soY2F0Y2hFcnJvciksXG4gIHBvc3Q6ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PiByZXEucG9zdCh1cmwsIGRhdGEpLnR5cGUoJ2pzb24nKS5vayhjYXRjaEVycm9yKSxcbiAgcGF0Y2g6ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PiByZXEucGF0Y2godXJsLCBkYXRhKS50eXBlKCdqc29uJykub2soY2F0Y2hFcnJvciksXG4gIHB1dDogKHVybDogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHJlcS5wdXQodXJsLCBkYXRhKS50eXBlKCdqc29uJykub2soY2F0Y2hFcnJvciksXG4gIGRlbGV0ZTogKHVybDogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHJlcS5kZWxldGUodXJsLCBkYXRhKS50eXBlKCdqc29uJykub2soY2F0Y2hFcnJvciksXG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgbWV0YSBmcm9tICcuL21ldGEvbWV0YVJlZHVjZXInXG5pbXBvcnQgd2FsbGV0IGZyb20gJy4vd2FsbGV0L3dhbGxldFJlZHVjZXInXG5cblxuY29uc3QgY3JlYXRlUm9vdFJlZHVjZXIgPSAoaGlzdG9yeSkgPT5cbiAgY29tYmluZVJlZHVjZXJzKHtcbiAgICBtZXRhLFxuICAgIHJvdXRlcjogY29ubmVjdFJvdXRlcihoaXN0b3J5KSxcbiAgICB3YWxsZXQsXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvb3RSZWR1Y2VyXG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW1wb3J0IHtcbiAgSU5JVF9VU0VSX0lORk9fUEFHRSxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucydcblxuaW1wb3J0IHsgU3RvY2tIb2xkU3RhdHVzIH0gZnJvbSAndHlwZXMvcmVkdWNlcnMnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBpZDogbnVsbCxcbiAgY3VzdG9tZXJJZDogbnVsbCxcbiAgbWlzc2luZ0JpbGxpbmdBZGRyZXNzOiBmYWxzZSxcbiAgaW5jb21wbGV0ZUJvb2tpbmc6IGZhbHNlLFxuICBtaXNzaW5nQ3VzdG9tZXJEZXRhaWxzOiBmYWxzZSxcbiAgc3RvY2tIb2xkU3RhdHVzOiAnSURMRScsXG4gIGhhc1N0b2NrSG9sZEVycm9yOiBmYWxzZSxcbiAgc25hcHNob3RTdGF0dXM6IG51bGwsXG4gIG9yZGVySWQ6IG51bGwsXG4gIHByZXZpb3VzTG9jYXRpb246IG51bGwsXG4gIGxvY2F0aW9uOiBudWxsLFxuICBicmFuZDogbnVsbCxcbiAgZnVsZmlsbWVudFR5cGU6ICdDT0xMRUNUSU9OJyxcbiAgdG9nZ2xlTW9kYWxEaXNhYmxlRXNjQ2xvc2U6IGZhbHNlLFxuICBtb2RhbFJlbW92ZVNjcm9sbDogdHJ1ZSxcbiAgc2VydmVyU2lkZUNvb2tpZXM6IFtdLFxuICBtaXNzaW5nQm9va2luZ0lEOiBmYWxzZSxcbiAgaXNXY3NIYW5kb3ZlcjogdHJ1ZSxcbiAgZnVsZmlsbWVudENyZWF0ZWQ6IGZhbHNlLFxuICByZWRpcmVjdFRvQXJyYW5nZURlbGl2ZXJ5OiBmYWxzZSxcbiAgZmF0YWxGdWxmaWxtZW50RXJyb3I6IGZhbHNlLFxuICByZWRpcmVjdFRvUGF5bWVudDogZmFsc2UsXG4gIGZhdGFsQm9va2luZ0Vycm9yOiBmYWxzZSxcbn1cbiBcbi8qIGNvbnN0IHNldExvYWRpbmcgPSAoc3RhdGU6IE1ldGFTdGF0ZSkgPT4ge1xuICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICBzdGF0ZS5lcnJvciA9IGZhbHNlXG59XG5jb25zdCBzZXRFcnJvckFkdmljZSA9IChcbiAgc3RhdGU6IE1ldGFTdGF0ZSxcbiAge1xuICAgIHBheWxvYWQsXG4gIH06IHtcbiAgICBwYXlsb2FkOiBJbml0U25hcHNob3RGYWlsdXJlQWN0aW9uUGF5bG9hZCB8IEdldFNuYXBzaG90RmFpbHVyZUFjdGlvblBheWxvYWRcbiAgfSxcbikgPT4ge1xuICBjb25zdCB7IGVycm9yIH0gPSBwYXlsb2FkXG4gIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAvL3N0YXRlLmVycm9yID0gZXJyb3JcblxuICBjb25zdCBpbmNvbXBsZXRlQm9va2luZyA9IGdldEFkdmljZUZyb21FcnJvckRldGFpbHM8R2V0U25hcHNob3RBUElFcnJvckFkdmljZSB8IEluaXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlPihcbiAgICBlcnJvcixcbiAgICBJbml0U25hcHNob3RBUElFcnJvckFkdmljZS5JTkNPTVBMRVRFX0JPT0tJTkcsXG4gIClcblxuICBjb25zdCBtaXNzaW5nQmlsbGluZ0FkZHJlc3MgPSBnZXRBZHZpY2VGcm9tRXJyb3JEZXRhaWxzPEdldFNuYXBzaG90QVBJRXJyb3JBZHZpY2UgfCBJbml0U25hcHNob3RBUElFcnJvckFkdmljZT4oXG4gICAgZXJyb3IsXG4gICAgW0luaXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlLlBBWU1FTlRfTUlTU0lOR19CSUxMSU5HX0FERFJFU1MsIEluaXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlLlBBWU1FTlRfSU5WQUxJRF9USVRMRV0sXG4gIClcblxuICBjb25zdCBtaXNzaW5nQ3VzdG9tZXJEZXRhaWxzID0gZ2V0QWR2aWNlRnJvbUVycm9yRGV0YWlsczxHZXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlIHwgSW5pdFNuYXBzaG90QVBJRXJyb3JBZHZpY2U+KFxuICAgIGVycm9yLFxuICAgIEluaXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlLlBBWU1FTlRfTUlTU0lOR19DVVNUT01FUl9ERVRBSUxTLFxuICApXG5cbiAgaWYgKG1pc3NpbmdCaWxsaW5nQWRkcmVzcykge1xuICAgIHN0YXRlLm1pc3NpbmdCaWxsaW5nQWRkcmVzcyA9IHRydWVcbiAgICBzdGF0ZS5jdXN0b21lcklkID0gbWlzc2luZ0JpbGxpbmdBZGRyZXNzLmN1c3RvbWVySWQgPz8gbnVsbFxuICB9XG5cbiAgY29uc3Qgc3RvY2tIb2xkRmFpbGVkQWxsb2NhdGlvbiA9IGdldEFkdmljZUZyb21FcnJvckRldGFpbHM8R2V0U25hcHNob3RBUElFcnJvckFkdmljZSB8IEluaXRTbmFwc2hvdEFQSUVycm9yQWR2aWNlPihcbiAgICBlcnJvcixcbiAgICBJbml0U25hcHNob3RBUElFcnJvckFkdmljZS5TVE9DS19IT0xEX0ZBSUxFRF9BTExPQ0FUSU9OLFxuICApXG5cbiAgaWYgKHN0b2NrSG9sZEZhaWxlZEFsbG9jYXRpb24pIHtcbiAgICBzdGF0ZS5zdG9ja0hvbGRTdGF0dXMgPSBTdG9ja0hvbGRTdGF0dXMuRkFJTEVEXG4gIH1cblxuICBpZiAobWlzc2luZ0N1c3RvbWVyRGV0YWlscykge1xuICAgIHN0YXRlLm1pc3NpbmdDdXN0b21lckRldGFpbHMgPSB0cnVlXG4gICAgc3RhdGUuY3VzdG9tZXJJZCA9IG1pc3NpbmdDdXN0b21lckRldGFpbHMuY3VzdG9tZXJJZCA/PyBudWxsXG4gIH1cblxuICBpZiAoaW5jb21wbGV0ZUJvb2tpbmcpIHtcbiAgICBzdGF0ZS5pbmNvbXBsZXRlQm9va2luZyA9IHRydWVcbiAgfVxufSAqL1xuXG4vKipcbiAqIFNhdmVzIHRoZSBJRCBpbnRvIHN0YXRlIHdoZW4gZmV0Y2hpbmcgdGhlIHNuYXBzaG90LlxuICpcbiAqIFRPRE8gY29tZSB1cCB3aXRoIGEgYmV0dGVyIHdheSB0aGFuIGR1cGxpY2F0aW5nIHRoaXMgZm9yIEdFVF9TVE9DS19IT0xEX0lORk9cbiAqIGFuZCBHRVRfQ09MTEVDVElPTl9TTkFQU0hPVC4gSWRlYWxseSBpdCBzaG91bGQgYWxsIGdvIHRocm91Z2ggYSBzaW5nbGUgYWN0aW9uLlxuICovXG4vKiBjb25zdCBzZXRHZXR0aW5nID0gKHN0YXRlOiBNZXRhU3RhdGUsIHsgcGF5bG9hZCB9OiB7IHBheWxvYWQ6IEdldENvbGxlY3Rpb25TbmFwc2hvdEFjdGlvblBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICBzdGF0ZS5lcnJvciA9IGZhbHNlXG4gIHN0YXRlLmlkID0gcGF5bG9hZC5pZFxufSAqL1xuXG4vKipcbiAqIEZvciBkZWxpdmVyeSBvcmRlcnMsIHRoZSBBUEkgY2FuIHNlbmQgdXMgZWl0aGVyIEhEIG9yIERFTElWRVJZLiBGcm9tIGEgdXNlclxuICogcG9pbnQgb2YgdmlldyB0aGVyZSdzIG5vIGRpZmZlcmVuY2UsIHNvIHdlIGp1c3QgY29udmVydCBIRCB0byBERUxJVkVSWS5cbiAqL1xuLy9jb25zdCBjbGVhbkZ1bGZpbG1lbnRUeXBlID0gKHR5cGU6IEZ1bGZpbG1lbnRUeXBlKSA9PiAodHlwZSA9PT0gRnVsZmlsbWVudFR5cGUuSEQgPyBGdWxmaWxtZW50VHlwZS5ERUxJVkVSWSA6IHR5cGUpXG5cbmNvbnN0IG1ldGFSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PlxuICBidWlsZGVyXG4gICAgLmFkZENhc2UoSU5JVF9VU0VSX0lORk9fUEFHRSwgKCkgPT4geyB9KVxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFSZWR1Y2VyXG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW1wb3J0IHsgR0VUX1dBTExFVF9TVUNDRVNTLCBHRVRfV0FMTEVUX0ZBSUxVUkUgfSBmcm9tICcuLi8uLi9hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzYXZlZFBheW1lbnRNZXRob2RzOiBbXSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdGF0dXM6ICdJRExFJyxcbiAgZGF0YWNhc2hNaWdyYXRpb25BbGVydDogdW5kZWZpbmVkLFxufVxuXG5jb25zdCB3YWxsZXRSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PlxuICBidWlsZGVyXG4gICAgLmFkZENhc2UoR0VUX1dBTExFVF9TVUNDRVNTLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzdGF0ZS5lcnJvciA9IGZhbHNlXG4gICAgICBzdGF0ZS5zdGF0dXMgPSAnU3RhdHVzLnJlc29sdmVkJ1xuICAgIH0pXG4gICAgLmFkZENhc2UoR0VUX1dBTExFVF9GQUlMVVJFLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnN0YXR1cyA9ICdTdGF0dXMucmVqZWN0ZWQnXG4gICAgICBzdGF0ZS5lcnJvciA9IHRydWVcbiAgICB9KVxuKVxuXG5leHBvcnQgZGVmYXVsdCB3YWxsZXRSZWR1Y2VyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCB7XG4gIHdhdGNoSW5pdFVzZXJJbmZvUGFnZVNhZ2Fcbn0gZnJvbSAnLi9tZXRhL21ldGFTYWdhJ1xuXG5cbi8vIFdlIG9ubHkgd2FudCB0byB3YXRjaCB0aGUgJ3dhdGNoZXInIHNhZ2FzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdCgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoSW5pdFVzZXJJbmZvUGFnZVNhZ2EpLFxuICBdKVxufVxuIiwiaW1wb3J0IHtcbiAgdGFrZUxhdGVzdCxcbiAgZm9yayxcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IElOSVRfVVNFUl9JTkZPX1BBR0UgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXInO1xuaW1wb3J0IHsgZ2V0V2FsbGV0U2FnYSB9IGZyb20gJy4uL3dhbGxldC93YWxsZXRTYWdhJztcblxuXG5leHBvcnQgZnVuY3Rpb24qIGluaXRVc2VySW5mb1BhZ2VTYWdhKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBheWxvYWQ6IHsgY29va2llIH0sXG4gICAgfSA9IGFjdGlvbjtcblxuICAgIC8vb3RoZXIgZXNzZW50aWFsIGFjdGlvbiBvbiBsb2FkIHBhZ2UgdGhvc2UgY2FsbCBhcmUgYmFzZWQgb24gY29va2llIGF1dGhvcml6YXRpb25cblxuICAgIGNvbnNvbGUubG9nKCdnZXQgdyB3YWxsZXQgc2FnYSBjYWxsZWQgISEhIHdpdGggY29va2llJywgY29va2llKVxuICAgIHlpZWxkIGZvcmsoZ2V0V2FsbGV0U2FnYSwgY29va2llKVxuXG5cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgc3RhdHVzIH0gPSBlcnJvciB8fCB7fTtcbiAgICBMb2dnZXIuZXJyb3Ioe1xuICAgICAgbmFtZTogJ2luaXRVc2VySW5mb1BhZ2VTYWdhJyxcbiAgICAgIG1zZzogJ0Vycm9yIHByZXBhcmluZyBmb3IgY2hlY2tvdXQnLFxuICAgICAgZGV0YWlsOiBtZXNzYWdlLFxuICAgICAgc3RhdHVzLFxuICAgICAgLy9ib2R5LFxuICAgIH0pO1xuXG4gICAgLy95aWVsZCBwdXQoUFJFUEFSRV9GT1JfQ0hFQ0tPVVRfRkFJTFVSRSh7IGVycm9yIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoSW5pdFVzZXJJbmZvUGFnZVNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoSU5JVF9VU0VSX0lORk9fUEFHRSwgaW5pdFVzZXJJbmZvUGFnZVNhZ2EpO1xufVxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgR0VUX1dBTExFVF9TVUNDRVNTLCBHRVRfV0FMTEVUX0ZBSUxVUkUgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBhcGksIHsgY2hlY2tSZXNwb25zZSB9IGZyb20gJy4uLy4uL2FwaSc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0V2FsbGV0U2FnYShjb29raWUpIHtcbiAgdHJ5IHtcbiAgICAvKiAgY29uc3Qge1xuICAgICAgIGN1c3RvbWVyOiB7IGlkID0gMzMzMyB9LFxuICAgICB9ID0geWllbGQgc2VsZWN0KCk7ICovXG5cbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXBpLmdldFdhbGxldCwgJzQzNTM1JywgY29va2llKTtcbiAgICBjb25zdCB3YWxsZXQgPSB5aWVsZCBjYWxsKGNoZWNrUmVzcG9uc2UsIHJlc3BvbnNlKTtcbiAgICBjb25zb2xlLmxvZygnd2FsbGV0Jywgd2FsbGV0KVxuICAgIHlpZWxkIHB1dChHRVRfV0FMTEVUX1NVQ0NFU1Mod2FsbGV0KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBzdGF0dXMsIGJvZHkgPSB7fSB9ID0gZXJyb3I7XG4gICAgTG9nZ2VyLmVycm9yKHtcbiAgICAgIG5hbWU6ICdnZXRXYWxsZXRTYWdhJyxcbiAgICAgIG1zZzogJ0Vycm9yIGdldHRpbmcgd2FsbGV0JyxcbiAgICAgIGRldGFpbDogbWVzc2FnZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIGJvZHksXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KEdFVF9XQUxMRVRfRkFJTFVSRSgpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XG5cbmltcG9ydCB7IG5jb25mIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2VudmNvbmZpZy9lbnZDb25maWcnO1xuXG5jb25zdCBpc1N0dWIgPVxuICBuY29uZi5nZXQoJ05PREVfRU5WJykgPT09ICdzdHViJyB8fCBuY29uZi5nZXQoJ0VOVl9DT05GSUcnKSA9PT0gJ3JlbW90ZVN0dWInO1xuXG5leHBvcnQgY29uc3QgcmVjZWlwdFNlcnZpY2VQcm94eSA9IHByb3h5KG5jb25mLmdldCgnUkVDRUlQVF9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gdXJsLnBhcnNlKHJlcS51cmwpLnBhdGgsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrb3V0U2VydmljZVByb3h5ID0gcHJveHkobmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLCB7XG4gIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocmVxKSA9PiBgL2NoZWNrb3V0LWFwaS12MiR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGh9YCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFya2V0aW5nUHJlZmVyZW5jZVNlcnZpY2VQcm94eSA9IHByb3h5KFxuICBuY29uZi5nZXQoJ01BUktFVElOR19QUkVGRVJFTkNFX0FQSScpLFxuICB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+IGAvY3BtL2NvbnNlbnRzJHt1cmwucGFyc2UocmVxLnVybCkucGF0aH1gLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFNlcnZpY2VQcm94eSA9IHByb3h5KG5jb25mLmdldCgnQUNDT1VOVF9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gYC9hY2NvdW50LWFwaSR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGh9YCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgd2NzUHJveHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKFxuICAgIHVybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZSA9PT0gJy9Eb0xvb2t1cEFkZHJlc3MnIHx8XG4gICAgdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lID09PSAnL1Ryb2xsZXlZb3VyRGV0YWlscydcbiAgKSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBwcm94eShuY29uZi5nZXQoJ1dDU19BUEknKSwge1xuICAgIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocHJveHlSZXEpID0+XG4gICAgICBgL3dlYmFwcC93Y3Mvc3RvcmVzL3NlcnZsZXQke3VybC5wYXJzZShwcm94eVJlcS51cmwpLnBhdGh9YCxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlYWxpdW1Qcm94eSA9IHByb3h5KCdodHRwczovL3RhZ3MudGlxY2RuLmNvbScsIHtcbiAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChyZXEpID0+XG4gICAgYC91dGFnL2FyZ29zLyR7Z2V0VGVhbGl1bUJyYW5kKHJlcS5icmFuZCl9LyR7Z2V0VGVhbGl1bUVudigpfS8ke1xuICAgICAgdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhcbiAgICB9YCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3R1YkRhc2hib2FyZFByb3h5ID0gcHJveHkobmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLCB7XG4gIHByb3h5UmVxUGF0aFJlc29sdmVyOiAocmVxKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1BST1hZID09PiByZXEudXJsJywgcmVxLnVybCk7XG4gICAgcmV0dXJuIHVybC5wYXJzZShyZXEudXJsKS5wYXRoO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzdHViRW5kcG9pbnRQcm94eSA9IHByb3h5KG5jb25mLmdldCgnR0FURVdBWV9BUEknKSwge1xuICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHJlcSkgPT4gYC9wYXltZW50LXN0dWIke3VybC5wYXJzZShyZXEudXJsKS5wYXRofWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0dWJQcm94eSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXR1cm4gcHJveHkobmNvbmYuZ2V0KCdHQVRFV0FZX0FQSScpLCB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChwcm94eVJlcSkgPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IHByb3h5UmVxLm9yaWdpbmFsVXJsLnNwbGl0KCcvcHJveHknKVsxXTtcbiAgICAgIHJldHVybiBgJHtwYXRofWA7XG4gICAgfSxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RHYXRld2F5UHJveHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGlzU3R1Yikge1xuICAgIHJldHVybiBzdHViUHJveHkocmVxLCByZXMsIG5leHQpO1xuICB9XG5cbiAgaWYgKCFyZXEudmF1bHQucGRwLnVybCB8fCAhcmVxLnZhdWx0LnBkcC5rZXkpIHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLnNlbmQoJ01pc3NpbmcgY29uZmlnLiBQbGVhc2UgY2hlY2sgdGhlIFZhdWx0IGNvbmZpZyBpcyB3b3JraW5nLicpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBvcmlnaW4sIHBhdGhuYW1lIH0gPSBuZXcgVVJMKHJlcS52YXVsdC5wZHAudXJsKTtcblxuICAvLyBQcm94eSB0byBwcm9kdWN0LWFwaVxuICByZXR1cm4gcHJveHkob3JpZ2luLCB7XG4gICAgcHJveHlSZXFPcHREZWNvcmF0b3I6IChwcm94eVJlcU9wdHMpID0+IHtcbiAgICAgIHByb3h5UmVxT3B0cy5oZWFkZXJzLmFjY2VwdCA9ICdhcHBsaWNhdGlvbi92bmQuYXJnb3MtcHJvZHVjdC52MS41K2pzb24nO1xuICAgICAgcHJveHlSZXFPcHRzLmhlYWRlcnNbJ3gtYXBpLWtleSddID0gcmVxLnZhdWx0LnBkcC5rZXk7XG4gICAgICBpZiAobmNvbmYuZ2V0KCdFTlZfQ09ORklHJykgIT09ICdyZW1vdGVTdHViJylcbiAgICAgICAgZGVsZXRlIHByb3h5UmVxT3B0cy5oZWFkZXJzLmNvb2tpZTtcbiAgICAgIHJldHVybiBwcm94eVJlcU9wdHM7XG4gICAgfSxcbiAgICBwcm94eVJlcVBhdGhSZXNvbHZlcjogKHByb3h5UmVxKSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0c1BhdGggPSBwcm94eVJlcS5vcmlnaW5hbFVybC5zcGxpdCgnL3Byb2R1Y3QtZ2F0ZXdheScpWzFdO1xuXG4gICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtwcm9kdWN0c1BhdGh9YDtcbiAgICB9LFxuICB9KShyZXEsIHJlcywgbmV4dCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbk1hbmFnZXJQcm94eSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoaXNTdHViKSB7XG4gICAgcmV0dXJuIHN0dWJQcm94eShyZXEsIHJlcywgbmV4dCk7XG4gIH1cblxuICAvLyBQcm94eSB0byBTZXNzaW9uIE1hbmFnZXJcbiAgcmV0dXJuIHByb3h5KG5jb25mLmdldCgnU0VTU0lPTl9NQU5BR0VSX0FQSScpLCB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IChwcm94eVJlcSkgPT4ge1xuICAgICAgcmV0dXJuIHByb3h5UmVxLm9yaWdpbmFsVXJsLnNwbGl0KCcvc2Vzc2lvbi1tYW5hZ2VyJylbMV07XG4gICAgfSxcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpc2hsaXN0TW9jayA9IChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbih7XG4gICAgZGF0YToge1xuICAgICAgd2lzaGxpc3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyBwYXJ0TnVtYmVyOiAnODA4NzE1OScgfSxcbiAgICAgICAgICAgIHsgcGFydE51bWJlcjogJzg1NTkxOTknIH0sXG4gICAgICAgICAgICB7IHBhcnROdW1iZXI6ICc4MjY4NDk3JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlZHV4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5cbiBpbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi8uLi9zaGFyZWQvcm91dGVzXCI7XG5pbXBvcnQgeyBwcm9jZXNzUm91dGVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JvdXRlcyc7XG5pbXBvcnQgeyBnZXRKc0ZpbGVzIH0gZnJvbSBcIi4uL3NlcnZlclJlbmRlcmluZ0hlbHBlcnNcIjsgXG5cblxuXG5jb25zdCBzc3JNaWRkbGV3YXJlID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGxvZ2dlci5jb2xvcihcInllbGxvd1wiKS5ib2xkKCkubG9nKFwicmVxdWVzdGVkIHJlcS51cmxcIiwgcmVxLnVybCk7XG4gIC8vdGhpcyBnb2VzIHRocm91Z2ggYWxsIHJvdXRlcyBpbiBhcHBsaWNhdGlvbjtcbiAgY29uc3QgYWN0aXZlUm91dGUgPVxuICAgIHJvdXRlcy5maW5kKChyb3V0ZSwgaSkgPT4gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKSkgfHwge307XG5cbiAgbG9nZ2VyLmNvbG9yKFwieWVsbG93XCIpLmJvbGQoKS5sb2coXCJhY3RpdmVSb3V0ZVwiLCBhY3RpdmVSb3V0ZSk7XG5cbiAgY29uc29sZS5sb2coJ2ZpbmUnKVxuICAvKioqKioqKiogUmVkdXggc2VydmVyIHNldHVwICoqKioqKi9cblxuICAvLyBzZXQgaW5pdGlhbCBzdG9yZSB0byBiZSBwYXNzZWQgdG8gY2xpZW50IGluIHdpbmRvdy5fZGF0YVxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbWV0YToge30sXG4gIH07XG5cbiAgLy9VIGNhbiBub3QgdXNlIEJyb3dzZXJSb3V0ZXIgY2F1c2UgdGhlIHJvdXRlcyBhcmUgcHJvY2Vzc2VkIG9uIHNlcnZlciBub3QgYSBjbGllbnRcbiAgY29uc3QgbWVtb3J5SGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoeyBpbml0aWFsRW50cmllczogW3JlcS51cmxdIH0pO1xuICAvLyBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKG1lbW9yeUhpc3RvcnksIGluaXRpYWxTdGF0ZSk7XG5cbiAgLyoqKiovXG5cbiAgLy8gV2FpdHMgZm9yIGFzeW5jaHJvbm91cyBhY3Rpb25zIGxpa2UgQVBJIGNhbGxzXG4gIC8vIGJlZm9yZSByZW5kZXJpbmcgdGhlIEhUTUxcbiAgLy8gdW5kZWZpbmVkIGlzIGEgd2F5IG9mIG5vdCBzZXR0aW5nIGEgdmFsdWUgZm9yIHRoZSBmaXJzdCBwYXJhbSBpbiB0aGlzIGNhc2VcbiAgLy8gcHJvY2Vzc1JvdXRlcyhyb3V0ZXNQcm9jZXNzaW5nID0gcm91dGVzLHN0b3JlLCByZXEpID0gdW5kZWZpbmVkIHdpbGwgY2F1c2Ugcm91dGVzUHJvY2Vzc2luZyA9IHJvdXRlcyBzbyB3aWxsIHRha2UgZGVmYXVsdCBvZiB0aGUgZnVuY3Rpb25cbiAgY29uc3Qgd2FpdEZvckFzeW5jQWN0aW9ucyA9IFtwcm9jZXNzUm91dGVzKFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZW1vcnlIaXN0b3J5LFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZXEsXG4gICAgcmVzXG4gICldO1xuICBjb25zb2xlLmxvZygnd2FpdEZvckFzeW5jQWN0aW9ucycpXG5cbiAgICBQcm9taXNlLmFsbCh3YWl0Rm9yQXN5bmNBY3Rpb25zKVxuICAgIC8vIFByb21pc2UgYWxsIHJlc29sdmUgYWxsIHByb21pc2VzIHJlc3VsdCBpbiBhcnJheSBzbyBbc3RvcmVdXG4gICAgLnRoZW4oKFtzdG9yZV0pID0+IHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbnRleHQgZm9yIDxTdGF0aWNSb3V0ZXI+LCB3aGljaCB3aWxsIGFsbG93IHVzIHRvXG4gICAgICAvLyBxdWVyeSBmb3IgdGhlIHJlc3VsdHMgb2YgdGhlIHJlbmRlci5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgfTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0b3JlJywgc3RvcmUuZ2V0U3RhdGUoKSlcblxuICAgICAgLy8gQXMgd2UgYXJlIGNvZGUgc3BsaXR0aW5nLCB3ZSBuZWVkIHRvIGZpbmQgb3V0IHdoaWNoIGNodW5rc1xuICAgICAgLy8gdGhlIFNTUiB1c2VzIHNvIHRoZSBjbGllbnQgY2FuIHVzZSB0aGVtLiA8TG9hZGFibGUuQ2FwdHVyZT5cbiAgICAgIC8vIHRha2VzIGEgcmVwb3J0IHByb3Agd2hpY2ggaXMgY2FsbGVkIHdoZW5ldmVyIGEgY2h1bmsgaXMgdXNlZC5cbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBbXTtcblxuICAgICAgbG9nZ2VyXG4gICAgICAgIC5jb2xvcigneWVsbG93JylcbiAgICAgICAgLmJvbGQoKVxuICAgICAgICAubG9nKCdyZXF1ZXN0ZWQgcmVxLnVybCBpbiBwcm9taXNlIHJlc3BvbnNlJywgcmVxLnVybCk7XG5cbiAgICAgIC8vIFJlbmRlciB0aGUgcGFydCBvZiB0aGUgYXBwIHRoYXQgZ2V0cyBoeWRyYXRlZCBvbiB0aGUgY2xpZW50XG4gICAgICBjb25zdCBhcHBIdG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxMb2FkYWJsZS5DYXB0dXJlIHJlcG9ydD17KG1vZHVsZU5hbWUpID0+IG1vZHVsZXMucHVzaChtb2R1bGVOYW1lKX0+XG4gICAgICAgICAgPFJlZHV4UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgICA8L1JlZHV4UHJvdmlkZXI+XG4gICAgICAgIDwvTG9hZGFibGUuQ2FwdHVyZT5cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IEJvZHlDb250ZW50QW5kU2NyaXB0cyA9ICh7IGNsaWVudCwgbW9kdWxlc0NodW5rcyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPSdhcHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2xpZW50IH19IC8+XG4gICAgICAgICAgICB7Z2V0SnNGaWxlcyhtb2R1bGVzQ2h1bmtzKX1cbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzZXJ2ZXJIdG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxCb2R5Q29udGVudEFuZFNjcmlwdHMgY2xpZW50PXthcHBIdG1sfSBtb2R1bGVzQ2h1bmtzPXttb2R1bGVzfSAvPlxuICAgICAgKTtcblxuICAgICAgcmVzLnNlbmQoYFxuICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cbiAgICAgICAgICA8IS0tIHRoaXMgaGFzIGJlZW4gZ2VuZXJhdGVkIGJ5IGNvbmZpZy9jbGllbnQvd2VicGFjay5kZXYuY29uZmlnIC0tPlxuICAgICAgICAgIDxzY3JpcHQ+d2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSAke3NlcmlhbGl6ZSh7fSl9PC9zY3JpcHQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIuL3N0eWxlLmNzc1wiIC8+XG5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICR7c2VydmVySHRtbH1cbiAgICAgIDwvaHRtbD5cbiAgICAgIGApO1xuICAgIH0pXG4gICAgLmNhdGNoKG5leHQpO1xufTsgXG5cbmV4cG9ydCBkZWZhdWx0IHNzck1pZGRsZXdhcmU7XG4iLCIvKipcbiAqIFRISVMgSVMgOiBZT1VSIEFQUCBOT0RFLmpzIFNFUlZFUlxuICpcbiAqKi9cblxuXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibm9kZS1jb2xvci1sb2dcIjtcblxuLy8gTXVzdCBiZSBpbXBvcnRlZCBmaXJzdCBzbyB0aGF0IGVudiB2YXJpYWJsZXMgYXJlIGNvcnJlY3RseSBzZXRcbmltcG9ydCB7IG5jb25mIH0gZnJvbSAnLi4vLi4vY29uZmlnL2VudmNvbmZpZy9lbnZDb25maWcnIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L29yZGVyXG5pbXBvcnQgc3NyTWlkZGxld2FyZSBmcm9tIFwiLi9taWRkbGV3YXJlL3NzclwiO1xuaW1wb3J0IHtcbiAgc3R1YkRhc2hib2FyZFByb3h5LFxuICBzdHViRW5kcG9pbnRQcm94eSxcbiAgYWNjb3VudFNlcnZpY2VQcm94eSxcbn0gZnJvbSAnLi9taWRkbGV3YXJlL3Byb3h5J1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIC0tLS0gcHJveGllcyAtLS0tLVxuXG5hcHAudXNlKCcvYWNjb3VudC1hcGknLCBhY2NvdW50U2VydmljZVByb3h5KVxuXG4vLyBEYXNoYm9hcmQgc3R1YnNcbmNvbnN0IGVudkNvbmZpZyA9IG5jb25mLmdldCgnRU5WX0NPTkZJRycpIHx8IG5jb25mLmdldCgnTk9ERV9FTlYnKVxuaWYgKGVudkNvbmZpZyA9PT0gJ3N0dWInIHx8IGVudkNvbmZpZyA9PT0gJ3JlbW90ZVN0dWInKSB7XG5cbiAgLy9hY2Nlc3MgaW5kZXggcGFnZSBvZiBzdHVicyAzMDExIG9uIDMxMDAvZGFzaGJvYXJkXG4gIGFwcC51c2UoJy9kYXNoYm9hcmQnLCBzdHViRGFzaGJvYXJkUHJveHkpXG5cbiAgLy9hY2Nlc3MgL3BheW1lbnQtc3R1Yi8gcGFnZSBvZiBzdHVicyAzMDExIG9uIDMxMDAvcGF5bWVudC1zdHViIFxuICAvL3BheW1lbnQtc3R1YiBpcyB1c2VkIHRvIG1vZGlmeSBkYXNoYm9hcmQgLFxuICBhcHAudXNlKCcvcGF5bWVudC1zdHViJywgc3R1YkVuZHBvaW50UHJveHkpXG59XG5cbi8vIC0tLS0gZW5kIG9mIHByb3hpZXMgLS0tLS1cblxuXG4vLy0tIHN0YXRpYyBhc3NldHMgb24gYmFjay1lbmQgc2VydmVyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuLi9zdGF0aWMnKSlcblxuLy8gUmVuZGVycyB0aGUgYXBwXG5hcHAudXNlKHNzck1pZGRsZXdhcmUpO1xuXG5jb25zdCBQT1JUID0gMzM4OTtcbi8vIFByZWxvYWQgYWxsIHRoZSBjaHVua3MgdGhlbiBzdGFydCB0aGUgYXBwXG5Mb2FkYWJsZS5wcmVsb2FkQWxsKCkudGhlbigoKSA9PiB7XG4gIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGxvZ2dlci5pbmZvKGBub2RlIHNlcnZlciBydW5uaW5nIG9uOiR7UE9SVH1gKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm5vZGUtY29sb3ItbG9nXCI7XG5cbi8vIEdldHMgYWxsIHRoZSBjaHVua2VkIEpTIGZpbGVzIGFzIHdlbGwgYXMgdGhlIGJhc2UgJ2NsaWVudCcgZmlsZS4gJ2NsaWVudCdcbi8vIG11c3QgYmUgdGhlIGxhc3QgdGhpbmcgbG9hZGVkIGFzIGl0IGRlcGVuZHMgb24gdGhlIHByZXYgZmlsZXMuXG5cbnR5cGUgU2NyaXB0VGFnS2V5cyA9IFBhcnRpYWw8SFRNTFNjcmlwdEVsZW1lbnQ+O1xuXG4vL3RoaXMgZmlsZSBuZWVkcyB0byBiZSAudHN4IG5vdCB0cyBjYXVzZSBpdCByZXR1cm4gaHRtbCBlbGVtZW50IFxuXG5cbmV4cG9ydCBjb25zdCBnZXRKc0ZpbGVzID0gKG1vZHVsZXMgPSBbXSk6IFNjcmlwdFRhZ0tleXNbXSA9PiB7XG4gIGxldCBmaWxlczogc3RyaW5nW10gPSBbXTtcblxuICAvLyBjb25zb2xlLmxvZyhcImNodW5rIG1vZHVsZXM6OjpcIiwgbW9kdWxlcyk7XG4gIFsuLi5tb2R1bGVzLCBcImJ1bmRsZVwiXS5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICBmaWxlcy5wdXNoKFxuICAgICAgYCR7bW9kdWxlID09PSBcImJ1bmRsZVwiXG4gICAgICAgID8gLy9jbGllbnQvYnVuZGxlLmpzJyBoYXMgdG8gbWF0Y2ggb3V0cHV0OiB7IC4uLixmaWxlbmFtZTogXCJjbGllbnQvYnVuZGxlLmpzXCIsfSBmb3IgZGV2IHNlcnZlciBkZXZlbG9wbWVudFxuICAgICAgICBcIi9jbGllbnQvYnVuZGxlXCJcbiAgICAgICAgOiBgL2NsaWVudC9jaHVuay0ke21vZHVsZX1gXG4gICAgICB9LmpzYFxuICAgICk7XG4gIH0pO1xuXG5cblxuXG4gIHJldHVybiBmaWxlcy5tYXAoKGZpbGU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IFNjcmlwdFRhZ0tleXMgPT4ge1xuICAgIGxvZ2dlci5pbmZvKGA8c2NyaXB0IHNyYz0ke2ZpbGV9Pjwvc2NyaXB0PjogbG9hZGluZy4uLmApO1xuXG4gICAgcmV0dXJuIDxzY3JpcHQga2V5PXtgc2NyaXB0MCR7aW5kZXh9YH0gc3JjPXtmaWxlfSB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIGRlZmVyIGNoYXJTZXQ9J3V0Zi04Jz48L3NjcmlwdD5cbiAgfSlcbn1cbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyUmVwb3MgKGxhbmd1YWdlID0gJ2FsbCcpIHtcbiAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYClcblxuICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLnRoZW4oKHJlcG9zKSA9PiByZXBvcy5pdGVtcylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm91dGUsIExpbmssIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBOb01hdGNoIGZyb20gXCIuL05vTWF0Y2hcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgIGV4YWN0PXshIWV4YWN0fVxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFJvdXRlIHJlbmRlcj17KHByb3BzKSA9PiA8Tm9NYXRjaCB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgcmVwb3M7XG4gICAgLy9fX2lzQnJvd3Nlcl9fIGlkIGRlZmluZWQgaW4gd2VicGFjay5jb25maWcgYXMgZ2xvYmFsXG4gICAgaWYgKF9faXNCcm93c2VyX18pIHtcbiAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgICBkZWxldGUgd2luZG93Ll9fSU5JVElBTF9EQVRBX187XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9zID0gdGhpcy5wcm9wcy5zdGF0aWNDb250ZXh0LmRhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zLFxuICAgICAgbG9hZGluZzogcmVwb3MgPyBmYWxzZSA6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMuZmV0Y2hSZXBvcyA9IHRoaXMuZmV0Y2hSZXBvcy5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcykge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuICBmZXRjaFJlcG9zKGxhbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIHRoaXMucHJvcHMuZmV0Y2hJbml0aWFsRGF0YShsYW5nKS50aGVuKChyZXBvcykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgcmVwb3MsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCByZXBvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gPHA+TE9BRElORzwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3sgbWFyZ2luOiAzMCB9fT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2h0bWxfdXJsfT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgIDxsaT57c3RhcmdhemVyc19jb3VudH0gc3RhcnM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSAnLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkSW5wdXRDaGVjaydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIERlY2xhcmUgYSBuZXcgc3RhdGUgdmFyaWFibGUsIHdoaWNoIHdlJ2xsIGNhbGwgXCJjb3VudFwiXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlBhc3N3b3JkIGlucHV0IHN0ZW5ndGggd2VicGFjayBsYW9kIGxpYnJheXJ5PC9oMz5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSAnLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkSW5wdXRDaGVjaydcbmNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vdGhpcyB3aWxsIGhhdmUgdG8gaGFuZGxlIGRpZmZlcmVudCBlbnYgYXMgVUFUMiBhbmQgUFJPRCBhbmQgREVWXG4gICAgLy9vbmx5IERFViBoYXJkY29kZWRcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExL2xvZ2luJztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgLy8gaW5jbHVkZSBjb29raWVzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIC8vIEFkZCBhbnkgYWRkaXRpb25hbCBoZWFkZXJzIGFzIG5lZWRlZFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSksXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaWYgbmVlZGVkXG4gICAgICAvL2NvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBvc3RSZXF1ZXN0fT5NYWtlIFBPU1QgUmVxdWVzdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgICBwYXJhbTogXCJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgcGFyYW06IFwiamF2YXNjcmlwdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSdWJ5XCIsXG4gICAgICBwYXJhbTogXCJydWJ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUHl0aG9uXCIsXG4gICAgICBwYXJhbTogXCJweXRob25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmF2YVwiLFxuICAgICAgcGFyYW06IFwiamF2YVwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7bGFuZ3VhZ2VzLm1hcCgoeyBuYW1lLCBwYXJhbSB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3BhcmFtfT5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19XG4gICAgICAgICAgICB0bz17YC9wb3B1bGFyLyR7cGFyYW19YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgYWN0aXZlU3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IHRvPXtgL2d1ZXN0YH0+XG4gICAgICAgICAgeydjaHVuayBsb2FkZWQgR3Vlc3RDaGVja291dENvbnRhaW5lcid9XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSB0bz17YC91c2VySW5mb2B9PlxuICAgICAgICAgIHsndXNlciBwcm90ZWN0ZWQgcm91dGUgVXNlclNlY3JldEluZm9Db250YWluZXInfVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vTWF0Y2ggKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBGb3VyIE9oIEZvdXJcbiAgICA8L2Rpdj5cbiAgKVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG4vLyB1c2VIaXN0b3J5IGFsbG93cyB0byBzZXQgcXVlcnkgcGFyYW1zIGJ5IGhpc3RvcnkucHVzaCB7c2VhcmNoOnN0cmluZ31cbi8vIHVzZUxvY2F0aW9uIGFsbG93cyB0byBnZXQgcXVlcnkgcGFyYW1zIGdldCBzZWFyY2ggb2JqZWN0IGFuZCBkbyBzb21ldGhpbmcgd2l0aCB0aGVtXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1cGRhdGVRdWVyeVByb3BlcnR5LCByZWFkUXVlcnlQcm9wZXJ0eSwgY3JlYXRlUXVlcnlTdHJpbmcsIHF1ZXJ5U3RyaW5nVG9PYmplY3QgfSBmcm9tICcuLi8uLi9zaGFyZWQvaGVscGVyTWV0aG9kcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgZnVuY3Rpb24gc2V0UXVlcnlQYXJhbXMocXVlcnlTdHJpbmc6IHN0cmluZykge1xuICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gZ2V0IHRoZSBzZWFyY2ggKHF1ZXJ5IHN0cmluZykgZnJvbSB0aGUgbG9jYXRpb25cbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUxvY2F0aW9uKClcblxuICAvLyAxIGlmIHNlYXJjaCBvYmplY3QgZXhpc3RzIHRoZW4gY29udmVydCBzZWFyY2ggc3RyaW5nIHRvIG9iamVjdFxuICBjb25zdCBxdWVyeVBhcmFtc09iaiA9IHVzZU1lbW8oKCkgPT4gcXVlcnlTdHJpbmdUb09iamVjdChzZWFyY2gpLCBbc2VhcmNoXSk7XG5cbiAgLy8gMi4xIHVwZGF0ZSBsb2NhbCBzdGF0ZSBmcm9tIHVybCBwYXJhbXMgaWYgcGFyYW1zIGV4aXN0cyBcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShyZWFkUXVlcnlQcm9wZXJ0eSgnbGFuZ3VhZ2UnLCBxdWVyeVBhcmFtc09iaikgfHwgXCJcIilcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKHJlYWRRdWVyeVByb3BlcnR5KCdhZ2UnLCBxdWVyeVBhcmFtc09iaikgfHwgXCJcIilcblxuICAvLyAyLjIgdXBkYXRlIGxvY2FsIHN0YXRlIGJhc2VkIG9uIHVzZXIgcmFkaW8gYnV0dG9uIGNsaWNrIFxuICBjb25zdCBvblZhbHVlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGV2ZW50LnRhcmdldFxuXG4gICAgLy91cGRhdGUgdXJsIHF1ZXJ5IHBhcmFtXG4gICAgaWYgKG5hbWUgPT09ICdmYXZfbGFuZ3VhZ2UnKSB7XG4gICAgICAvL3VwZGF0ZSBzdGF0ZVxuICAgICAgc2V0TGFuZ3VhZ2UodmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVRdWVyeU9iamVjdCA9IHVwZGF0ZVF1ZXJ5UHJvcGVydHkoJ2xhbmd1YWdlJywgdmFsdWUsIHF1ZXJ5UGFyYW1zT2JqKVxuICAgICAgLy91cGRhdGUgdXJsIHdpdGggbmV3IHN0cmluZyBxdWVyeSBwdXNoZWQgdG8gaGlzdG9yeSBcbiAgICAgIHNldFF1ZXJ5UGFyYW1zKGNyZWF0ZVF1ZXJ5U3RyaW5nKHVwZGF0ZVF1ZXJ5T2JqZWN0KSlcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdmYXZfYWdlJykge1xuICAgICAgLy91cGRhdGUgc3RhdGVcbiAgICAgIHNldEFnZSh2YWx1ZSlcbiAgICAgIGNvbnN0IHVwZGF0ZVF1ZXJ5T2JqZWN0ID0gdXBkYXRlUXVlcnlQcm9wZXJ0eSgnYWdlJywgdmFsdWUsIHF1ZXJ5UGFyYW1zT2JqKVxuICAgICAgLy91cGRhdGUgdXJsIHdpdGggbmV3IHN0cmluZyBxdWVyeSBwdXNoZWQgdG8gaGlzdG9yeSBcbiAgICAgIHNldFF1ZXJ5UGFyYW1zKGNyZWF0ZVF1ZXJ5U3RyaW5nKHVwZGF0ZVF1ZXJ5T2JqZWN0KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiSFRNTFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiaHRtbFwiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkhUTUxcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImh0bWxcIj5IVE1MPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2xhbmd1YWdlID09PSBcIkNTU1wifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiY3NzXCIgbmFtZT1cImZhdl9sYW5ndWFnZVwiIHZhbHVlPVwiQ1NTXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjc3NcIj5DU1M8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2hlY2tlZD17bGFuZ3VhZ2UgPT09IFwiSmF2YVNjcmlwdFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwiamF2YXNjcmlwdFwiIG5hbWU9XCJmYXZfbGFuZ3VhZ2VcIiB2YWx1ZT1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImphdmFTY3JpcHRcIj5KYXZhU2NyaXB0PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+dGVsbCB1cyB5b3VyIGFnZSBicmFja2V0IGlmIHlvdSBkb25gdCBtaW5kPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2FnZSA9PT0gXCJiZWxvdzE4XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25WYWx1ZUNoYW5nZShlKX0gdHlwZT1cInJhZGlvXCIgbmFtZT1cImZhdl9hZ2VcIiB2YWx1ZT1cImJlbG93MThcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImh0bWxcIj5iZWxvdyAxODwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXthZ2UgPT09IFwiYWJvdmUxOFwifSBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXZfYWdlXCIgdmFsdWU9XCJhYm92ZTE4XCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjc3NcIj5hYm92ZSAxODwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0gPlxuICApO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMsIGdldFBhc3N3b3JkU3RyZW5ndGggfSBmcm9tICcuLi9QYXNzd29yZFN0cmVuZ3RoL1Bhc3N3b3JkU3RyZW5ndGgnXG5cblxuXG5pbnRlcmZhY2UgUGFzc3dvcmRJbnB1dFByb3BzIHtcbiAgICBlbWFpbD86IHN0cmluZ1xufVxuXG5jb25zdCBQYXNzd29yZElucHV0ID0gKHtcbiAgICBlbWFpbCA9ICcnLFxufTogUGFzc3dvcmRJbnB1dFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc3RyZW5ndGgsIHNldFN0cmVuZ3RoXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlOiBuZXdWYWx1ZSB9ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcblxuICAgICAgICBzZXRTdHJlbmd0aChnZXRQYXNzd29yZFN0cmVuZ3RoKG5ld1ZhbHVlKSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZXRPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgc2V0UGFzc3dvcmRTdHJlbmd0aE9wdGlvbnMoW2VtYWlsXSlcbiAgICAgICAgfVxuICAgICAgICBzZXRPcHRpb25zKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFlvdXIgcGFzc3dvcmQgc3RyZW5ndGg6IDxzdHJvbmcgZGF0YS10ZXN0PSdwYXNzd29yZC1pbnB1dC1zdHJlbmd0aCc+e3N0cmVuZ3RofTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkSW5wdXQiLCJpbXBvcnQgeyB6eGN2Ym4sIHp4Y3Zibk9wdGlvbnMgfSBmcm9tICdAenhjdmJuLXRzL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBzZXRQYXNzd29yZFN0cmVuZ3RoT3B0aW9ucyA9IGFzeW5jICh1c2VySW5wdXRzPzogKHN0cmluZyB8IG51bWJlcilbXSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHp4Y3ZibkNvbW1vblBhY2thZ2UgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6eGN2Ym5Db21tb25QYWNrYWdlXCIgKi8gJ0B6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uJylcbiAgICBjb25zdCB6eGN2Ym5FblBhY2thZ2UgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6eGN2Ym5FblBhY2thZ2VcIiAqLyAnQHp4Y3Zibi10cy9sYW5ndWFnZS1lbicpXG5cbiAgICB6eGN2Ym5PcHRpb25zLnNldE9wdGlvbnMoe1xuICAgICAgICBkaWN0aW9uYXJ5OiB7XG4gICAgICAgICAgICAuLi56eGN2Ym5Db21tb25QYWNrYWdlLmRlZmF1bHQuZGljdGlvbmFyeSxcbiAgICAgICAgICAgIC4uLnp4Y3ZibkVuUGFja2FnZS5kZWZhdWx0LmRpY3Rpb25hcnksXG4gICAgICAgICAgICB1c2VySW5wdXRzOiB1c2VySW5wdXRzIHx8IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGdyYXBoczogenhjdmJuQ29tbW9uUGFja2FnZS5kZWZhdWx0LmFkamFjZW5jeUdyYXBocyxcbiAgICAgICAgdHJhbnNsYXRpb25zOiB6eGN2Ym5FblBhY2thZ2UuZGVmYXVsdC50cmFuc2xhdGlvbnNcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFzc3dvcmRTdHJlbmd0aCA9IChwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKSByZXR1cm4gJydcblxuICAgIGNvbnN0IHsgc2NvcmUgfSA9IHp4Y3ZibihwYXNzd29yZClcblxuICAgIC8vIHp4Y3ZibiBnaXZlcyB1cyBhbiBpbnRlZ2VyIHNjb3JlIG91dCBvZiA0IChpbmNsdWRpbmcgMCBvdXQgb2YgNClcbiAgICBzd2l0Y2ggKHNjb3JlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuICdXZWFrJ1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAnTWVkaXVtJ1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1N0cm9uZydcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSZWRpcmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQge1xuICBnZXRNZXRhLFxufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMnXG5cbmludGVyZmFjZSBHZXRTbmFwc2hvdFJlZGlyZWN0c1Byb3BzIHtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBHZXRTbmFwc2hvdFJlZGlyZWN0czogUmVhY3QuRkM8R2V0U25hcHNob3RSZWRpcmVjdHNQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgLy8gY29uc3QgeyBlcnJvciB9ID0gdXNlU2VsZWN0b3IoZ2V0TWV0YSlcbiAgLy8gY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIC8qIFxuICAgIGlmIChlcnJvcikge1xuICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSAmJiBlcnJvci5zdGF0dXMgPT09ICc0MDAnKSB7Ly9TdGF0dXNDb2RlLlVOQVVUSE9SSVpFRCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWRpcmVjdFxuICAgICAgICAgICAgdG89e2AvbG9naW4/cGFnZU5hbWU9bWFuZGF0b3J5UHJlcGF5JnN1Y2Nlc3NVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgIGAke2xvY2F0aW9uLnBhdGhuYW1lfSR7bG9jYXRpb24uc2VhcmNofWAsXG4gICAgICAgICAgICApfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICBcbiAgICAgIC8vcmV0dXJuIDxSZWRpcmVjdCB0bz17ZXJyb3JQYXRofSAvPlxuICAgIH0gKi9cbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdldFNuYXBzaG90UmVkaXJlY3RzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcydcblxuXG5pbXBvcnQgeyBnZXRNZXRhIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzJztcbmltcG9ydCBHZXRTbmFwc2hvdFJlZGlyZWN0cyBmcm9tICcuLi9HZXRTbmFwc2hvdFJlZGlyZWN0cy9HZXRTbmFwc2hvdFJlZGlyZWN0cydcblxuaW1wb3J0IFVzZXJTZWNyZXRJbmZvIGZyb20gJy4uLy4uL3BhZ2VzL1VzZXJTZWNyZXRJbmZvJ1xuaW1wb3J0IHsgSU5JVF9VU0VSX0lORk9fUEFHRSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnXG5cbmNvbnN0IFVzZXJTZWNyZXRJbmZvQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCctLS0tLS1wcm9wcyBpbiBVc2VyU2VjcmV0SW5mb0NvbnRhaW5lci0tLS0tLS0tJywgcHJvcHMpO1xuXG4gIC8qXG4gICAgICAvL3ZhbGlkYXRpb24gdG8gc2hvdyBjaGlsZHJlbiBiZWxvdyB3aXRoIHJlZGlyZWN0IGFuZCBlYXJseSByZXR1cm5cblxuICAgICAgdGhpcyBzaG91bGQgaGFwcGVuIG9uIHNlcnZlci1zaXRlLCBidXQgdGhlIGByZXFgIG9iamVjdCBDQU4gTk9UIGJlIGRpcmVjdGx5IGFjY2VzcyBpbiBjbGllbnRcbiAgICAgIGJlY2F1c2UgdGhleSBhcmUgc2VwZXJhdGUuIFRoZXJlZm9yZSBkYXRhIGhhcyB0byBiZSBwbGFjZXMgaW4gcmVkdXggc3RvcmUgYW5kIHRoZW4gcmVhZCBpbiBjbGllbnQgXG4gICAgICBmb3IgZXhhbXBsZSBieSByZWR1eCBzZWxlY3RvcnNcbiAgICAqL1xuXG4gIC8qIGNvbnN0IHsgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKGdldE1ldGEpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgJiYgZXJyb3Iuc3RhdHVzID09PSBTdGF0dXNDb2RlLlVOQVVUSE9SSVpFRCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlZGlyZWN0XG4gICAgICAgICAgdG89e2AvbG9naW4/cGFnZU5hbWU9bWFuZGF0b3J5UHJlcGF5JnN1Y2Nlc3NVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH1gLFxuICAgICAgICAgICl9YH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtlcnJvclBhdGh9IC8+XG4gIH0gKi9cblxuICByZXR1cm4gKFxuICAgIDxHZXRTbmFwc2hvdFJlZGlyZWN0cz5cbiAgICAgIDxVc2VyU2VjcmV0SW5mbyAvPlxuICAgIDwvR2V0U25hcHNob3RSZWRpcmVjdHM+XG5cbiAgKTtcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRTIHNldHVwIGZvciBxdWljayByZWZlcmVuY2VcbmV4cG9ydCB0eXBlIERlY29yYXRlZFJlcXVlc3Q8Um91dGVQYXJhbXMgPSB1bmtub3duLCBSZXFRdWVyeSA9IHVua25vd24+ID0gUmVxdWVzdDxcbiAgUm91dGVQYXJhbXMsXG4gIHVua25vd24sXG4gIHVua25vd24sXG4gIFJlcVF1ZXJ5XG4+ICYge31cblxuaW50ZXJmYWNlIE1hdGNoUGFyYW1zIHtcbiAgaWQ6IHN0cmluZ1xufVxudHlwZSBHZXRJbml0aWFsQWN0aW9uc1BhcmFtczxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgUm91dGVQYXJhbXMgZXh0ZW5kcyB7IFtLIGluIGtleW9mIFJvdXRlUGFyYW1zXT86IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0gYW55LFxuICBSZXFRdWVyeSA9IHVua25vd24sXG4gID4gPSB7XG4gICAgcmVxOiBEZWNvcmF0ZWRSZXF1ZXN0PFJvdXRlUGFyYW1zLCBSZXFRdWVyeT5cbiAgICByZXM6IFJlc3BvbnNlXG4gICAgbWF0Y2g6IG1hdGNoPFJvdXRlUGFyYW1zPlxuICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG5cbi8vIGdldEluaXRpYWxBY3Rpb25zIGlzIGNhbGxlZCBvbiBzZXJ2ZXItc2l0ZVxuLy8gdGhlIHJlZHV4IHNhZ2EgaXMgY2FsbGVkIG9uIHNlcnZlci1zaXRlIGZyb20gaGVyZVxuVXNlclNlY3JldEluZm9Db250YWluZXIuZ2V0SW5pdGlhbEFjdGlvbnMgPSAoeyByZXEsIG1hdGNoIH06IEdldEluaXRpYWxBY3Rpb25zUGFyYW1zPE1hdGNoUGFyYW1zPikgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXNcbiAgY29uc3QgY29va2llID0gcmVxLmdldCgnY29va2llJykgfHwgJydcblxuICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tQ09PS0lFLS0tLS0tLS0tLScpXG5cbiAgcmV0dXJuIElOSVRfVVNFUl9JTkZPX1BBR0UoeyBjb29raWUgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNlY3JldEluZm9Db250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5cbmV4cG9ydCBjb25zdCBHdWVzdENoZWNrb3V0Q29udGFpbmVyID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+XG4gICAgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJndWVzdENoZWNrb3V0XCIsIHdlYnBhY2tQcmVsb2FkOiAxICovIFwiLi9HdWVzdENoZWNrb3V0Q29udGFpbmVyL0d1ZXN0Q2hlY2tvdXRDb250YWluZXJcIlxuICAgICksXG4gIGxvYWRpbmc6ICgpID0+IDxkaXY+e1wibG9hZGluZyBjb21wb25lbnRcIn08L2Rpdj4sXG5cbiAgbW9kdWxlczogW1wiZ3Vlc3RDaGVja291dFwiXSxcbn0pO1xuLy9tb2R1bGVzOiBvcHRpb25hbCBhcnJheSBvZiBwYXRoIHRvIGxvYWQgZGF0YSBvYmplY3QgZnJvbSBzZXJ2ZXIgc3RhdGljIGZpbGVzIGFzIHNvbWUuanNvbiB0byB5b3VyIGNvbXBvbmVudFxuLy9sb2FkaW5nOiBjb21wb25lbnQgdG8gZGlzcGxheSBvbmNlIGltcG9ydCBjb21wb25lbnQgbG9hZHNcbiIsIi8vIGNyZWF0ZXMgYSBxdWVyeSBzdHJpbmcgZnJvbSBxdWVyeSBvYmplY3RcblxuXG5leHBvcnQgaW50ZXJmYWNlIHF1ZXJ5T2JqZWN0SW50IHtcbiAgICBwYWdlOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGRlcGFydG1lbnQ/OiBzdHJpbmdbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFF1ZXJ5UHJvcGVydHkocHJvcGVydHk6IHN0cmluZywgcXVlcnlPYmplY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+KSB7XG4gICAgcmV0dXJuIHF1ZXJ5T2JqZWN0W3Byb3BlcnR5XVxufTtcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdWVyeVByb3BlcnR5KHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHF1ZXJ5T2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPikge1xuICAgIGxldCB1cGRhdGUgPSB7fVxuICAgIGlmIChwcm9wZXJ0eSAmJiB2YWx1ZSkgdXBkYXRlID0geyBbcHJvcGVydHldOiB2YWx1ZSB9XG4gICAgcmV0dXJuIHsgLi4ucXVlcnlPYmplY3QsIC4uLnVwZGF0ZSB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlcnlTdHJpbmcocXVlcnlPYmplY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+KSB7XG4gICAgY29uc3Qgc3RyOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBxdWVyeU9iamVjdClcbiAgICAgICAgaWYgKHF1ZXJ5T2JqZWN0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBzdHIucHVzaChgJHtlbmNvZGVVUklDb21wb25lbnQocHJvcCl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5T2JqZWN0W3Byb3BdKX1gKTtcbiAgICAgICAgfVxuICAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XG59O1xuXG4vLyB0dXJucyBxdWVyeSBzdHJpbmcgYmFjayBpbnRvIGFuIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nVG9PYmplY3QocXVlcnlTdHJpbmc6IHN0cmluZykge1xuICAgIGxldCBxdWVyeU9iamVjdCA9IHt9XG4gICAgY29uc3QgVVJMU2VhcmNoUGFyYW1zT2JqID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgVVJMU2VhcmNoUGFyYW1zT2JqKSB7XG4gICAgICAgIHF1ZXJ5T2JqZWN0W2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnlPYmplY3Q7XG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVXNlclNlY3JldEluZm8gPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ3Byb3BzLi4uLi4uJywgcHJvcHMpO1xuXG4gIC8qXG4gICAgICBUaGlzIHBhZ2Ugd2lsbCBoYXZlIHBhcmVudCBjb250YWluZXIgdGhhdCB3aWxsIGF1dGhvcml6dGlvaW4gYmVmb3JlIGl0IGlzIGV2ZW4gYXZhaWxhYmxlIFxuICAgICAgc2luY2UgaXQgd2lsbCBjb250YWluIHNlbnNpdGl2ZSB1c2VyIGluZm9cbiAgICAqL1xuXG4gIHJldHVybiA8ZGl2Pnsnc2VjcmV0IGluZm8gaXMgaGVyZSd9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclNlY3JldEluZm87XG4iLCJpbXBvcnQgeyBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9jb21wb25lbnRzL0dyaWQnO1xuaW1wb3J0IFBhcmFtc1F1ZXJ5IGZyb20gJy4vY29tcG9uZW50cy9QYXJhbXNRdWVyeSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBVc2VyU2VjcmV0SW5mb0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvVXNlclNlY3JldEluZm9Db250YWluZXIvVXNlclNlY3JldEluZm9Db250YWluZXInO1xuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBHdWVzdENoZWNrb3V0Q29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXJzJztcblxuLy9yZWR1eCBhbmQgc2FnYXNcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBIb21lLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9xdWVyeScsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBQYXJhbXNRdWVyeSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvdXNlckluZm8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogVXNlclNlY3JldEluZm9Db250YWluZXIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IExvZ2luLFxuICB9LFxuICB7XG4gICAgcGF0aDogYC9ndWVzdGAsXG4gICAgcGFnZVRpdGxlOiAnR3Vlc3QgQ2hlY2tvdXQnLFxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJycsXG4gICAgcGFnZURhdGFUZXN0OiAnZ3Vlc3QtY2hlY2tvdXQtcGFnZScsXG4gICAgY29tcG9uZW50OiBHdWVzdENoZWNrb3V0Q29udGFpbmVyLFxuICAgIHJvdXRlczogW10sXG4gICAgYW5hbHl0aWNzOiB7fSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9wdWxhci86aWQnLFxuICAgIGNvbXBvbmVudDogR3JpZCxcbiAgICBmZXRjaEluaXRpYWxEYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhwYXRoLnNwbGl0KCcvJykucG9wKCkpLFxuICB9LFxuXTtcblxuLy8gUmVjdXJzaXZlbHkgZmV0Y2ggZGF0YVxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSb3V0ZXMgPSAoXG4gIHJvdXRlc1Byb2Nlc3NpbmcgPSByb3V0ZXMsXG4gIGhpc3RvcnksXG4gIHN0YXRlLFxuICByZXEsXG4gIHJlcyxcbiAgbGV2ZWwgPSAxXG4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBBIGZyZXNoIHN0b3JlIGlzIG5lZWRlZCBlYWNoIGxvb3AgYXMgYSBjbG9zZWQgc3RvcmUgY2Fubm90IGJlIHJlLW9wZW5lZFxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoaGlzdG9yeSwgc3RhdGUpO1xuXG4gICAgLy8gU3RhcnQgdGhlIHJvb3Qgc2FnYSB0YXNrcyB3aGljaCBpcyBhIHByb21pc2VcbiAgICBjb25zdCB0YXNrcyA9IHN0b3JlLnJ1blNhZ2Eocm9vdFNhZ2EpO1xuXG4gICAgLy9yZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIFdpbGwgY29udGFpbiByb3V0ZXMgdGhhdCB3aWxsIGJlIHByb2Nlc3NlZCBpbiB0aGUgbmV4dCByZWN1cnNpb25cbiAgICBjb25zdCBuZXh0ID0gW107XG5cbiAgICAvLyBNYXAgdGhyb3VnaCB0aGUgcm91dGVzIGFuZCBmaW5kIGFueSB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IHBhdGhcblxuICAgIHJvdXRlc1Byb2Nlc3NpbmcubWFwKChyb3V0ZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpO1xuICAgICAgaWYgKG1hdGNoKSBjb25zb2xlLmxvZygnLS0tLS0tLS1NQVRDSC0tLS0tLScsIHJvdXRlLmNvbXBvbmVudCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHJlZHV4QWN0aW9uO1xuXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBoYXMgc3ViLXJvdXRlcywgcXVldWUgdGhlbSBmb3IgdGhlIG5leHQgcmVjdXJzaW9uXG4gICAgICAgIC8vIGlmIChyb3V0ZS5yb3V0ZXMpIG5leHQucHVzaCguLi5yb3V0ZS5yb3V0ZXMpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgYSBsYXp5LWxvYWRlZCBMb2FkYWJsZSB3cmFwcGVyXG4gICAgICAgIGlmIChyb3V0ZS5jb21wb25lbnQ/LmNvbnRleHRUeXBlcz8ubG9hZGFibGUpIHtcbiAgICAgICAgICBjb25zdCBMb2FkYWJsZUNvbnRhaW5lciA9IHJvdXRlLmNvbXBvbmVudDtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgTG9hZGFibGVDb250YWluZXIoKT8uc3RhdGU/LmxvYWRlZD8uZGVmYXVsdDtcbiAgICAgICAgICBpZiAoY29tcG9uZW50Py5nZXRJbml0aWFsQWN0aW9ucykge1xuICAgICAgICAgICAgaW5pdGlhbEFjdGlvbiA9IGNvbXBvbmVudC5nZXRJbml0aWFsQWN0aW9ucyh7IHJlcSwgbWF0Y2ggfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBSZWd1bGFyIG5vbi1sYXp5IGNvbXBvbmVudCB0aGF0IGNoZWNrIGZvciBpbml0aWFsQWN0aW9uc1xuICAgICAgICBpZiAocm91dGUuY29tcG9uZW50LmdldEluaXRpYWxBY3Rpb25zKSB7XG4gICAgICAgICAgcmVkdXhBY3Rpb24gPSByb3V0ZS5jb21wb25lbnQuZ2V0SW5pdGlhbEFjdGlvbnMoeyByZXEsIG1hdGNoIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzIHByb21pc2UgaGFzIHRvIGJlIHJlc29sdmVkIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZSBub3QgYW55IG90aGVyIGluaXRpYWwgYWN0aW9ucyBvciBuZXN0ZWQgcm91dGVzXG4gICAgICAgIGlmIChyZWR1eEFjdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1eEFjdGlvbicsIHJlZHV4QWN0aW9uKTtcbiAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2gocmVkdXhBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSB0aGUgc3RvcmUgdG8gbmV3IGFjdGlvbnNcbiAgICBzdG9yZS5jbG9zZSgpO1xuXG4gICAgLy8gV2FpdCBmb3IgdGhlIHJ1bm5pbmcgYWN0aW9ucyB0byBjb21wbGV0ZVxuICAgIHRhc2tzXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHByb2Nlc3NSb3V0ZXMobmV4dCwgaGlzdG9yeSwgc3RvcmUuZ2V0U3RhdGUoKSwgcmVxLCByZXMsIGxldmVsICsgMSkgLy8gcmVjdXJzaW9uIVxuICAgICAgICAgICAgLnRoZW4oKGxhdGVzdFN0b3JlKSA9PiByZXNvbHZlKGxhdGVzdFN0b3JlKSlcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoc3RvcmUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgeyBQcmVsb2FkZWRTdGF0ZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7IEVORCwgU2FnYU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSdcblxuaW1wb3J0IGNyZWF0ZVJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAndHlwZXMvcmVkdWNlcnMnXG5cbnR5cGUgU3RvcmVUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgY29uZmlndXJlU3RvcmU+ICYge1xuICBydW5TYWdhOiBTYWdhTWlkZGxld2FyZVsncnVuJ11cbiAgY2xvc2U6ICgpID0+IHR5cGVvZiBFTkRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlOiBQcmVsb2FkZWRTdGF0ZTxSb290U3RhdGU+KTogU3RvcmVUeXBlIHtcbiAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4gIGNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG4gIGNvbnN0IHJlZHV4Um91dGVyTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSlcblxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiBjcmVhdGVSb290UmVkdWNlcihoaXN0b3J5KSxcbiAgICBwcmVsb2FkZWRTdGF0ZTogaW5pdGlhbFN0YXRlIGFzIGFueSxcbiAgICBkZXZUb29sczogIWlzUHJvZHVjdGlvbixcbiAgICBtaWRkbGV3YXJlOiBbc2FnYU1pZGRsZXdhcmUsIHJlZHV4Um91dGVyTWlkZGxld2FyZV0sXG4gIH0pXG5cbiAgaWYgKGlzRGV2ICYmIG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MsQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXG4gICAgICBjb25zdCBjcmVhdGVOZXdSb290UmVkdWNlciA9IHJlcXVpcmUoJy4uL3JlZHVjZXJzJykuZGVmYXVsdCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihjcmVhdGVOZXdSb290UmVkdWNlcihoaXN0b3J5KSlcbiAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICB9KVxuICB9XG5cbiAgLy8gVXNlZCBmb3IgY2FsbGluZyBzYWdhcyBkdXJpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gIGNvbnN0IHJ1blNhZ2EgPSBzYWdhTWlkZGxld2FyZS5ydW4gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvdW5ib3VuZC1tZXRob2RcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiBzdG9yZS5kaXNwYXRjaChFTkQpXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdG9yZSxcbiAgICBydW5TYWdhLFxuICAgIGNsb3NlLFxuICB9XG59XG4iLCJleHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIFRSQUNFID0gMTAsXG4gIERFQlVHID0gMjAsXG4gIElORk8gPSAzMCxcbiAgV0FSTiA9IDQwLFxuICBFUlJPUiA9IDUwLFxuICBGQVRBTCA9IDYwLFxufVxuXG5leHBvcnQgdHlwZSBMb2cgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgeyBba2V5OiBzdHJpbmddOiBMb2cgfCB1bmRlZmluZWQgfVxuXG50eXBlIE91dHB1dCA9IHtcbiAgbGV2ZWw6IExvZ0xldmVsXG4gIFtwcm9wOiBzdHJpbmddOiBMb2cgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldExldmVsID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkxPR19MRVZFTCkge1xuICAgIHJldHVybiB3aW5kb3cuTE9HX0xFVkVMXG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHByb2Nlc3MuZW52LkxPR19MRVZFTCkgfHwgTG9nTGV2ZWwuSU5GT1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbG9nIG1lc3NhZ2UgaW50byBLaWJhbmEtZnJpZW5kbHkgb3V0cHV0LlxuICpcbiAqIEl0J3MgYmVzdCB0byBsb2cgb3V0IEpTT04gb2JqZWN0cywgYXMgS2liYW5hIHdpbGwgcGFyc2UgYW5kIGluZGV4IHRoZSBKU09OXG4gKiBzbyB0aGF0IHdlIGNhbiBydW4gcXVlcmllcyBhbmQgZmlsdGVycyBhZ2FpbnN0IGluZGl2aWR1YWwgZmllbGRzIGluIHRoZSBsb2cuXG4gKi9cbmNvbnN0IGxvZyA9IChvYmo6IExvZywgbGV2ZWw6IExvZ0xldmVsKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICBpZiAob2JqPy5sZXZlbCkgY29uc29sZS53YXJuKCdgbGV2ZWxgIGlzIGEgZm9yYmlkZGVuIGxvZyBwcm9wZXJ0eScpXG4gICAgaWYgKG9iaj8ubWVzc2FnZSkgY29uc29sZS53YXJuKCdgbWVzc2FnZWAgaXMgYSBmb3JiaWRkZW4gbG9nIHByb3BlcnR5JylcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItb2JqZWN0LXNwcmVhZFxuICBjb25zdCBvdXRwdXQ6IE91dHB1dCA9IHR5cGVvZiBvYmogPT09ICdvYmplY3QnID8gT2JqZWN0LmFzc2lnbih7fSwgb2JqLCB7IGxldmVsIH0pIDogeyBtc2c6IG9iaiwgbGV2ZWwgfVxuXG4gIGNvbnN0IHR5cGUgPSBsZXZlbCA+PSBMb2dMZXZlbC5FUlJPUiA/ICdlcnJvcicgOiBsZXZlbCA9PT0gTG9nTGV2ZWwuV0FSTiA/ICd3YXJuJyA6ICdsb2cnXG4gIGNvbnNvbGVbdHlwZV0oSlNPTi5zdHJpbmdpZnkob3V0cHV0KSlcbn1cblxuY29uc3QgTG9nZ2VyID0ge1xuICAvKiogT3V0cHV0cyBhIEtpYmFuYS1mcmllbmRseSBsb2cgaWYgdGhlIGxvZyBsZXZlbCB2ZXJib3NpdHkgaXMgc2V0IHRvIFwiVFJBQ0VcIi4gKi9cbiAgdHJhY2U6IChvYmo6IExvZykgPT4ge1xuICAgIGlmIChnZXRMZXZlbCgpIDw9IExvZ0xldmVsLlRSQUNFKSBsb2cob2JqLCBMb2dMZXZlbC5UUkFDRSlcbiAgfSxcblxuICAvKiogT3V0cHV0cyBhIEtpYmFuYS1mcmllbmRseSBsb2cgaWYgdGhlIGxvZyBsZXZlbCB2ZXJib3NpdHkgaXMgc2V0IHRvIFwiREVCVUdcIi4gKi9cbiAgZGVidWc6IChvYmo6IExvZykgPT4ge1xuICAgIGlmIChnZXRMZXZlbCgpIDw9IExvZ0xldmVsLkRFQlVHKSBsb2cob2JqLCBMb2dMZXZlbC5ERUJVRylcbiAgfSxcblxuICAvKiogT3V0cHV0cyBhIEtpYmFuYS1mcmllbmRseSBsb2cgaWYgdGhlIGxvZyBsZXZlbCB2ZXJib3NpdHkgaXMgc2V0IHRvIFwiSU5GT1wiLiAqL1xuICBpbmZvOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5JTkZPKSBsb2cob2JqLCBMb2dMZXZlbC5JTkZPKVxuICB9LFxuXG4gIC8qKiBPdXRwdXRzIGEgS2liYW5hLWZyaWVuZGx5IGxvZyBpZiB0aGUgbG9nIGxldmVsIHZlcmJvc2l0eSBpcyBzZXQgdG8gXCJXQVJOXCIuICovXG4gIHdhcm46IChvYmo6IExvZykgPT4ge1xuICAgIGlmIChnZXRMZXZlbCgpIDw9IExvZ0xldmVsLldBUk4pIGxvZyhvYmosIExvZ0xldmVsLldBUk4pXG4gIH0sXG5cbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIkVSUk9SXCIuICovXG4gIGVycm9yOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5FUlJPUikgbG9nKG9iaiwgTG9nTGV2ZWwuRVJST1IpXG4gIH0sXG5cbiAgLyoqIE91dHB1dHMgYSBLaWJhbmEtZnJpZW5kbHkgbG9nIGlmIHRoZSBsb2cgbGV2ZWwgdmVyYm9zaXR5IGlzIHNldCB0byBcIkZBVEFMXCIuICovXG4gIGZhdGFsOiAob2JqOiBMb2cpID0+IHtcbiAgICBpZiAoZ2V0TGV2ZWwoKSA8PSBMb2dMZXZlbC5GQVRBTCkgbG9nKG9iaiwgTG9nTGV2ZWwuRkFUQUwpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FpbnNidXJ5cy10ZWNoL2JvbHR1aS11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAenhjdmJuLXRzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHp4Y3Zibi10cy9sYW5ndWFnZS1lblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmNvbmZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1jb2xvci1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN1cGVyYWdlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=