import { createReducer } from '@reduxjs/toolkit'
import getCookie from '../../helpers/getCookie'

import {
  SET_ORDER_SUMMARY_VARIANT,
  SET_BRAND,
  SET_THEME,
  TOGGLE_PREVIEW_PLACE_ORDER,
  SET_FEATURE_TOGGLE,
  SET_CHANNEL_TOGGLE,
  SET_FEATURES,
  SET_CONFIG,
  SET_CONFIG_COOKIE,
} from '../../actions'
import {
  ORDER_SUMMARY_DEFAULT,
  BRAND_DEFAULT,
  PREPAY_TEST_COOKIE,
  BRAND_COOKIE,
  THEME_COOKIE,
  FEATURE_TOGGLE_COOKIE,
  getOrderSummaryVariant,
  getBrand,
  getTheme,
  CHANNEL_DEFAULT,
  APP_COOKIE,
  CONFIG_COOKIE,
} from '../../helpers/mvtHelper'

import {
  AppState,
  Channel,
  FeaturesState,
  Season,
  Theme,
  PaymentOptionsVariant,
  ArrangeDeliveryVariant,
  ArgosCardReminderPosition,
  ConsulConfig,
} from '../../types/reducers'

export const initialState: AppState = {
  orderSummaryVariant: ORDER_SUMMARY_DEFAULT,
  brandUrl: BRAND_DEFAULT,
  channel: CHANNEL_DEFAULT,
  theme: Theme.ARGOS,
  accountUrl: '',
  placeOrderPreview: false,
  config: {
    creditRate: undefined,
    dfpUrl: '',
    deliveryDisplayOrder: [],
  },
  features: {
    season: Season.DEFAULT,
    cape: false,
    mpp: false,
    paypalFallback: false,
    capeIsTopPosition: false,
    arrangeDeliveryVariant: ArrangeDeliveryVariant.GRID,
    guest: false,
    nectar: false,
    createAccount: false,
    argosCardReminderPosition: ArgosCardReminderPosition.BOTTOM,
    payIn3: false,
    setupApplePay: false,
    suppressFTNumber: false,
    alternativeCheckoutLayout: false,
    paymentOptionsCTA: PaymentOptionsVariant.CONTROL,
    pciAndArgosCard: false,
    pciOnly: false,
    argosCardOnly: false,
    vatReceipt: false,
    guestMarketingPreferences: false,
    billingAddressVariant: false,
    removeCollectionCopyMPP: false,
    showSameDayLabel: false,
    showNextDayLabel: false,
  },
}

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_ORDER_SUMMARY_VARIANT, (state, { payload }) => {
      const orderSummaryVariant = getOrderSummaryVariant(payload)

      // Sets the cookie for persistance on refresh
      document.cookie = `${PREPAY_TEST_COOKIE}=${orderSummaryVariant}; path=/`

      state.orderSummaryVariant = orderSummaryVariant
    })
    .addCase(SET_BRAND, (state, { payload }) => {
      const brand = getBrand(payload)

      // Sets the cookie for persistance on refresh
      document.cookie = `${BRAND_COOKIE}=${brand}; path=/`

      state.brandUrl = brand
    })
    .addCase(SET_CONFIG_COOKIE, (_, { payload }) => {
      const currentCookieString = getCookie(CONFIG_COOKIE)
      let updateCookie = {}
      if (currentCookieString) {
        updateCookie = { ...JSON.parse(currentCookieString), ...payload } as ConsulConfig
      } else {
        updateCookie = payload
      }
      document.cookie = `${CONFIG_COOKIE}=${JSON.stringify(updateCookie)}; path=/`
    })
    .addCase(SET_THEME, (state, { payload }) => {
      const theme = getTheme(payload)

      // Sets the cookie for persistance on refresh
      document.cookie = `${THEME_COOKIE}=${theme}; path=/`

      state.theme = theme
    })
    .addCase(SET_FEATURE_TOGGLE, (_, { payload }) => {
      const currentCookieString = getCookie(FEATURE_TOGGLE_COOKIE)
      let updateCookie = {}
      if (currentCookieString) {
        updateCookie = { ...JSON.parse(currentCookieString), ...payload } as Partial<FeaturesState>
      } else {
        updateCookie = payload
      }
      // Sets the cookie for persistance on refresh
      document.cookie = `${FEATURE_TOGGLE_COOKIE}=${JSON.stringify(updateCookie)}; path=/`
    })
    .addCase(SET_CHANNEL_TOGGLE, () => {
      const currentCookieString = getCookie(APP_COOKIE)
      let updateCookie = {}
      if (currentCookieString) {
        updateCookie = '=; expires = Thu, 01 Jan 1970 00:00:00 GMT'
      } else {
        updateCookie = Channel.APP
      }
      // Sets the cookie for persistance on refresh
      document.cookie = `${APP_COOKIE}=${JSON.stringify(updateCookie)}; path=/`
    })
    .addCase(TOGGLE_PREVIEW_PLACE_ORDER, (state) => {
      state.placeOrderPreview = !state.placeOrderPreview
    })
    .addCase(SET_FEATURES, (state, { payload }) => {
      state.features = payload
    })
    .addCase(SET_CONFIG, (state, { payload }) => {
      state.config = payload
    })
})

export default appReducer
