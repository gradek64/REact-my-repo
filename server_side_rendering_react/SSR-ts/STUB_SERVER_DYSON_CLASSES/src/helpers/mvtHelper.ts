import { Brand, OrderSummaryVariant, Channel, Theme } from '../types/reducers'

// Cookies
export const PREPAY_TEST_COOKIE = 'Checkout_Test_Group_1'
export const BRAND_COOKIE = 'brand'
export const THEME_COOKIE = 'theme'
export const FEATURE_TOGGLE_COOKIE = 'featureToggles'
export const APP_COOKIE = 'NativeAppVID'
export const CONFIG_COOKIE = 'config'
export const cookieList = [
  PREPAY_TEST_COOKIE,
  BRAND_COOKIE,
  THEME_COOKIE,
  FEATURE_TOGGLE_COOKIE,
  APP_COOKIE,
  CONFIG_COOKIE,
]

// Defaults
export const ORDER_SUMMARY_DEFAULT = OrderSummaryVariant.MINI
export const BRAND_DEFAULT = Brand.ARGOS
export const THEME_DEFAULT = Brand.ARGOS
export const CHANNEL_DEFAULT = Channel.WEB

// Ensures the cookie is a valid value, falling back to the default if not
export const getOrderSummaryVariant = (value: OrderSummaryVariant) => {
  switch (value) {
    case OrderSummaryVariant.FULL:
    case OrderSummaryVariant.MINI:
    case OrderSummaryVariant.HEADER:
      return value
    default:
      return ORDER_SUMMARY_DEFAULT
  }
}

export const getBrand = (value: Brand) => {
  return Brand[value] || BRAND_DEFAULT
}

export const getTheme = (value: Theme) => {
  return Theme[value] || THEME_DEFAULT
}

export const getChannel = (value: undefined | string) => {
  if (typeof value === 'undefined') {
    return Channel.WEB
  }

  return Channel.APP
}

export const isStickyHeader = (value: OrderSummaryVariant) => value === OrderSummaryVariant.HEADER
export const isSecureHeader = (value: OrderSummaryVariant) => !isStickyHeader(value)

export const showFullSidebar = (value: OrderSummaryVariant) => value !== OrderSummaryVariant.MINI
export const hideSidebarMobile = (value: OrderSummaryVariant) => value === OrderSummaryVariant.HEADER
