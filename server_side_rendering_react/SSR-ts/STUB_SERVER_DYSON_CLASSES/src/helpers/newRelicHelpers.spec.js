import { canUseNewRelic, maskPersonalData } from './newRelicHelpers'

test('canUseNewRelic returns true when newrelic exists', () => {
  window.newrelic = {
    addPageAction: () => {},
  }
  expect(canUseNewRelic()).toEqual(true)
})

test('canUseNewRelic returns false when new relic does not exist', () => {
  const newrelic = global.window.newrelic
  delete global.window.newrelic

  expect(canUseNewRelic()).toEqual(false)

  global.window.newrelic = newrelic
})

test('canUseNewRelic returns false when window does not exist', () => {
  const globalWindow = global.window
  delete global.window

  expect(canUseNewRelic()).toEqual(false)

  global.window = globalWindow
})

test('Mask personally identifiable data by replacing letters with x or X and numbers with 0', () => {
  const maskedWithSpecialChars = maskPersonalData('Ron @£%/,. Swanson 0123')
  expect(maskedWithSpecialChars).toBe('Xxx @£%/,. Xxxxxxx 0000')
})
