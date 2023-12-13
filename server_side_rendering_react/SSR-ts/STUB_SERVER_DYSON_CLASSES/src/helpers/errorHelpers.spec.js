import { hasErrorDetails, getAdviceFromErrorDetails, isAPIErrorResponseType } from './errorHelpers'

test('Checking an error response whether it has details', () => {
  expect(hasErrorDetails({ body: { error: { details: [] } } })).toBe(false)
  expect(hasErrorDetails({ body: { error: { details: [{ type: 'meh', advice: 'GREAT ADVICE' }] } } })).toBe(true)
})

test('Finding a specific detail by the advice', () => {
  const adviceToFind = 'GREAT ADVICE'
  const expectedDetail = { type: 'meh', advice: 'GREAT ADVICE' }
  expect(getAdviceFromErrorDetails({ body: { error: { details: [] } } }, adviceToFind)).toBe(undefined)
  expect(getAdviceFromErrorDetails({ body: { error: { details: [expectedDetail] } } }, adviceToFind)).toEqual(
    expectedDetail,
  )
})

test('Check the type guard works as expected', () => {
  expect(isAPIErrorResponseType(new Error('Test error'))).toBe(false)
  expect(isAPIErrorResponseType()).toBe(false)
  expect(isAPIErrorResponseType({})).toBe(false)
  expect(isAPIErrorResponseType({ body: {} })).toBe(false)
  expect(isAPIErrorResponseType({ body: { error: {} } })).toBe(false)
  expect(isAPIErrorResponseType({ body: { error: { details: 'not an array' } } })).toBe(false)
  expect(isAPIErrorResponseType({ body: { error: { details: [] } } })).toBe(true)
})
