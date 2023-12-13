import agnostify from './agnostify'
import { animate, animateMaxHeight, animateTransform, animateOpacity } from './animate'
import breakpoints from './breakpoints'
import canUseDom from './canUseDom'
import createUserAgent from './createUserAgent'
import debounce from './debounce'
import formatPartNumber from './formatPartNumber'
import formatPrice from './formatPrice'
import formatVariants from './formatVariants'
import hex2rgb from './hex2rgb'
import hex2rgba from './hex2rgba'
import isEmpty from './isEmpty'
import idify from './idify'
import { navigationHeaderFetcher, navigationHeaderProxy } from './navigationHeaderMiddleware'
import smooth from './smooth-scroll'
import getUserAgent from './getUserAgent'
import { tuGlobalComponentsMiddleware } from './tuGlobalComponentsMiddleware'
import generateRandomString from './generateRandomString'
import { fuzzyMailCheck } from './fuzzyMailCheck'
import { commonEmailDomains, commonExternalEmailDomains, internalEmailDomains } from './commonEmailDomains'
import {
  getSearchPath,
  getBrowsePath,
  getCategoryFilterPath,
  getOptionsPath,
  getRefinementPath,
  getEncodedBrowseCategories,
  getCategoriesJoined,
  refinementSort,
  refinementKeySort,
  hyphenateSpaces,
  stripPunctuation,
  encode,
  decode,
  getSanitised
} from './findabilityUrlHelper'

import { defaultMapper, sortAttributes, sortVariants, typeMapper, variantFilter } from './sortVariants'
import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from './localStorageWithExpiration'
import { paymentCardLogos } from './paymentCardLogos'
import consentCookieHelper from './consentCookieHelper'

export {
  agnostify,
  animate,
  animateMaxHeight,
  animateTransform,
  animateOpacity,
  breakpoints,
  canUseDom,
  consentCookieHelper,
  createUserAgent,
  debounce,
  defaultMapper,
  getUserAgent,
  tuGlobalComponentsMiddleware,
  formatPartNumber,
  formatPrice,
  formatVariants,
  idify,
  isEmpty,
  hex2rgb,
  hex2rgba,
  navigationHeaderFetcher,
  navigationHeaderProxy,
  smooth,
  sortAttributes,
  sortVariants,
  typeMapper,
  variantFilter,
  getSearchPath,
  getBrowsePath,
  getCategoryFilterPath,
  getOptionsPath,
  getRefinementPath,
  getEncodedBrowseCategories,
  getCategoriesJoined,
  refinementSort,
  refinementKeySort,
  hyphenateSpaces,
  stripPunctuation,
  encode,
  decode,
  getSanitised,
  generateRandomString,
  fuzzyMailCheck,
  commonEmailDomains,
  commonExternalEmailDomains,
  internalEmailDomains,
  setLocalStorageWithExpiry,
  getLocalStorageWithExpiry,
  paymentCardLogos
}
