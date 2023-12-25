

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
export const ORDER_SUMMARY_DEFAULT = 'MINI'
export const BRAND_DEFAULT = 'ARGOS'
export const THEME_DEFAULT = 'ARGOS'
export const CHANNEL_DEFAULT = 'WEB'

// Ensures the cookie is a valid value, falling back to the default if not
export const getany = (value: any) => {
  switch (value) {
    case 'FULL':
    case 'MINI':
    case 'HEADER':
      return value
    default:
      return ORDER_SUMMARY_DEFAULT
  }
}



export const getChannel = (value: undefined | string) => {
  if (typeof value === 'undefined') {
    return 'WEB'
  }

  return 'APP'
}

export const isStickyHeader = (value: any) => value === 'HEADER'
export const isSecureHeader = (value: any) => !isStickyHeader(value)

export const showFullSidebar = (value: any) => value !== 'MINI'
export const hideSidebarMobile = (value: any) => value === 'HEADER'
