import { generateDelays } from './animationHelpers'

const output =
  '["\\n    ","\\n      &:nth-child(1) {\\n        animation-delay: 400ms;\\n      }\\n    \\n      &:nth-child(2) {\\n        animation-delay: 900ms;\\n      }\\n    \\n      &:nth-child(3) {\\n        animation-delay: 1400ms;\\n      }\\n    \\n      &:nth-child(4) {\\n        animation-delay: 1900ms;\\n      }\\n    \\n      &:nth-child(5) {\\n        animation-delay: 2400ms;\\n      }\\n    ","\\n  "]'

describe('when generating delays for five children', () => {
  it('should output the correct classes', () => {
    expect(JSON.stringify(generateDelays(5, 500))).toEqual(output)
  })
})
