import nectar2faCode from './nectar2faCode'

describe('When validating a nectar 2fa code', () => {
  describe('and the value is blank', () => {
    it('should error', () => {
      expect(nectar2faCode('')).toBe('Please enter your verification code')
      expect(nectar2faCode(' ')).toBe('Please enter your verification code')
    })
  })
})
