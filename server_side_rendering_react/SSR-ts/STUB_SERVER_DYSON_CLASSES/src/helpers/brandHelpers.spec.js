import { getBrandDisplayName, isArgos, isHabitat, isTu } from './brandHelpers'

test('checking that the brand is Argos', () => {
  expect(isArgos('ARGOS')).toBeTruthy()
  expect(isArgos('HABITAT')).toBeFalsy()
  expect(isArgos('TU')).toBeFalsy()
})

test('checking that the brand is Habitat', () => {
  expect(isHabitat('HABITAT')).toBeTruthy()
  expect(isHabitat('ARGOS')).toBeFalsy()
  expect(isHabitat('TU')).toBeFalsy()
})

test('checking that the brand is Tu', () => {
  expect(isTu('TU')).toBeTruthy()
  expect(isTu('ARGOS')).toBeFalsy()
  expect(isTu('HABITAT')).toBeFalsy()
})

test('returns brand display name', () => {
  expect(getBrandDisplayName('ARGOS')).toBe('Argos')
  expect(getBrandDisplayName('HABITAT')).toBe('Habitat')
  expect(getBrandDisplayName('TU')).toBe('Tu')

  // default to Argos
  expect(getBrandDisplayName('NOT_A_BRAND')).toBe('Argos')
})
