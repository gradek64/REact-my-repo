import appReducer, { initialState } from './appReducer'
import {
  ORDER_SUMMARY_DEFAULT,
  BRAND_DEFAULT,
  THEME_DEFAULT,
  FEATURE_TOGGLE_COOKIE,
  APP_COOKIE,
  CONFIG_COOKIE,
} from '../../helpers/mvtHelper'
import getCookie from '../../helpers/getCookie'
import { SET_ORDER_SUMMARY_VARIANT, SET_BRAND, SET_THEME, SET_FEATURE_TOGGLE } from '../../actions'
import { OrderSummaryVariant, Channel } from '../../types/reducers'
import { SET_CHANNEL_TOGGLE, SET_FEATURES, SET_CONFIG, SET_CONFIG_COOKIE } from '../../actions/app'

const initAction = { type: '', payload: undefined }

describe('When the app is first loaded', () => {
  it('should initialise with the default state', () => {
    expect(appReducer(undefined, initAction)).toEqual(initialState)
  })
})

describe('When the order summary variant is changed', () => {
  it('should only store valid values', () => {
    let newState = appReducer(initialState, SET_ORDER_SUMMARY_VARIANT(OrderSummaryVariant.FULL))
    expect(newState).toEqual({ ...initialState, orderSummaryVariant: OrderSummaryVariant.FULL })

    newState = appReducer(initialState, SET_ORDER_SUMMARY_VARIANT(OrderSummaryVariant.MINI))
    expect(newState).toEqual({ ...initialState, orderSummaryVariant: OrderSummaryVariant.MINI })

    newState = appReducer(initialState, SET_ORDER_SUMMARY_VARIANT(OrderSummaryVariant.HEADER))
    expect(newState).toEqual({ ...initialState, orderSummaryVariant: OrderSummaryVariant.HEADER })

    newState = appReducer(initialState, SET_ORDER_SUMMARY_VARIANT('100'))
    expect(newState).toEqual({ ...initialState, orderSummaryVariant: ORDER_SUMMARY_DEFAULT })
  })
})

test('When the brand is changed, should update brand field with valid value', () => {
  let newState = appReducer(initialState, SET_BRAND('ARGOS'))
  expect(newState).toEqual({ ...initialState, brandUrl: 'ARGOS' })

  newState = appReducer(initialState, SET_BRAND('HABITAT'))
  expect(newState).toEqual({ ...initialState, brandUrl: 'HABITAT' })

  newState = appReducer(initialState, SET_BRAND('random string'))
  expect(newState).toEqual({ ...initialState, brandUrl: BRAND_DEFAULT })
})

test('When the theme is changed, should update theme field with valid value', () => {
  let newState = appReducer(initialState, SET_THEME('ARGOS'))
  expect(newState).toEqual({ ...initialState, theme: 'ARGOS' })

  newState = appReducer(initialState, SET_THEME('HABITAT'))
  expect(newState).toEqual({ ...initialState, theme: 'HABITAT' })

  newState = appReducer(initialState, SET_THEME('random string'))
  expect(newState).toEqual({ ...initialState, theme: THEME_DEFAULT })
})

test('When setting a feature toggle and no cookie overrides are set, should add a new cookie with given key/value pair', () => {
  appReducer(initialState, SET_FEATURE_TOGGLE({ season: 'xmas' }))
  expect(getCookie(FEATURE_TOGGLE_COOKIE)).toEqual(JSON.stringify({ season: 'xmas' }))
})

test('When setting a feature toggle for an existing cookie override, should update cookie with given key/value pair', () => {
  const currentToggle = { season: 'summer' }
  document.cookie = `${FEATURE_TOGGLE_COOKIE}=${JSON.stringify(currentToggle)}; path=/`
  appReducer(initialState, SET_FEATURE_TOGGLE({ season: 'xmas' }))
  expect(getCookie(FEATURE_TOGGLE_COOKIE)).toEqual(JSON.stringify({ season: 'xmas' }))
})

test('When setting a new feature toggle and a current cookie override already exists, should add new key/value pair', () => {
  const currentToggle = { season: 'xmas' }
  document.cookie = `${FEATURE_TOGGLE_COOKIE}=${JSON.stringify(currentToggle)}; path=/`
  appReducer(initialState, SET_FEATURE_TOGGLE({ newFeature: false }))
  expect(getCookie(FEATURE_TOGGLE_COOKIE)).toEqual(JSON.stringify({ season: 'xmas', newFeature: false }))
})

test('SET_FEATURES should update the features field with the payload', () => {
  const payload = { cape: false }
  const newState = appReducer(initialState, SET_FEATURES(payload))
  expect(newState).toEqual({
    ...initialState,
    features: payload,
  })
})

test('SET_CONFIG should update the config field with the payload', () => {
  const payload = { creditRate: 100 }
  const newState = appReducer(initialState, SET_CONFIG(payload))
  expect(newState).toEqual({
    ...initialState,
    config: payload,
  })
})

test('SET_CHANNEL should set or delete cookie', () => {
  // The state is not updated through here so only needs to test cookies
  appReducer(initialState, SET_CHANNEL_TOGGLE())
  expect(getCookie(APP_COOKIE)).toEqual(`"${Channel.APP}"`)

  appReducer(initialState, SET_CHANNEL_TOGGLE())
  expect(getCookie(APP_COOKIE)).toEqual(undefined)
})

test('SET_CONFIG_COOKIE should set a cookie', () => {
  const payload = { deliveryDisplayOrder: { value: ['LARGE_ITEM', 'SMALL_ITEM', 'CLOTHING', 'DIGITAL'] } }

  appReducer(initialState, SET_CONFIG_COOKIE(payload))
  expect(getCookie(CONFIG_COOKIE)).toEqual(
    `{"deliveryDisplayOrder":{"value":["LARGE_ITEM","SMALL_ITEM","CLOTHING","DIGITAL"]}}`,
  )
})
