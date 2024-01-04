/**
 * DO NOT CONVERT TO TYPESCRIPT.
 *
 * This file is needed because `dyson` doesn't recognise .ts files.
 */
console.log('services');
// Account API
const getWallet = require('./get/getWallet');
//const userAccountCheck = require('./post/userAccountCheck');
//const createUserAccount = require('./post/createUserAccount');

// Snapshot API
//const calculatePrices = require('./post/calculatePrices');

// Session Manager API
//const createSession = require('./post/createSession');

// Arrange Delivery
//const createFulfilment = require('./post/createFulfilment');
//const getConsignments = require('./get/getConsignments');
//const getSlots = require('./get/getSlots');
//const createBooking = require('./post/createBooking');

// Manage order
//const requestVatReceipt = require('./post/requestVatReceipt');
//const cancelOrder = require('./post/cancelOrder');
//const extendOrder = require('./post/extendOrder');

// Marketing Preferences
//const getMarketingPreferences = require('./get/getMarketingPreferences');
//const postMarketingPreferences = require('./post/postMarketingPreferences');

// PDP
//const getProducts = require('./get/getProducts');

// Stub
//const getStubHealth = require('./get/getStubHealth');
const modifyCheckUserService = require('./get/modifyCheckUserService');
const modifyCreateUserService = require('./get/modifyCreateUserService');

module.exports = {
  // Account API
  getWallet,
  //userAccountCheck,
  //createUserAccount,

  // Snapshot API
  //calculatePrices,
  //addNectarCard,
  //deletedNectarCard,

  // Session Manager API
  // createSession,

  // Arrange Delivery
  //createFulfilment,
  //createBooking,
  //getConsignments,
  //getSlots,

  // Manage order
  // requestVatReceipt,
  // cancelOrder,
  // extendOrder,

  // Marketing Preferences
  //getMarketingPreferences,
  // postMarketingPreferences,

  // PDP
  ////getProducts,

  // Stub
  //getStubHealth,
  modifyCheckUserService,
  modifyCreateUserService,
};
