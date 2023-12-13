import { fuzzyMailCheck } from './fuzzyMailCheck'

describe('fuzzyMailCheck ', () => {
  describe('with default config', () => {
    test('should return email correction when valid email is provided', () => {
      const suggestion = fuzzyMailCheck('validemail@gmail.co')
      expect(suggestion).toBe('validemail@gmail.com')
    })

    test('should return email correction on top and second level domain', () => {
      const suggestion = fuzzyMailCheck('validemail@mail.co')
      expect(suggestion).toBe('validemail@gmail.com')
    })

    test('should return "undefined" when invalid email is provided', () => {
      const suggestion = fuzzyMailCheck('invalidEmail')
      expect(suggestion).toBe(undefined)
    })
  })

  describe('with custom config provided', () => {
    const customConfig = {
      domains: ['greg.com'],
      topLevelDomains: ['greg'],
      secondLevelDomains: ['com']
    }

    test('should return email correction when valid email is provided and domain is present in custom config', () => {
      const suggestion = fuzzyMailCheck('validemail@greg.co', customConfig)
      expect(suggestion).toBe('validemail@greg.com')
    })

    test('should return "undefined" when valid email is provided but domain is NOT present in custom config', () => {
      const suggestion = fuzzyMailCheck('validemail@gmail.co', customConfig)
      expect(suggestion).toBe(undefined)
    })
  })

  describe('Error handling on custom config object', () => {
    const notObjects = [null, 'string', 1, () => true]

    test.each(notObjects)('should throw Error when custom config is not a javascript Object %i', (nonObjects) => {
      expect(() => fuzzyMailCheck('validemail@gmail.co', nonObjects)).toThrowError(
        new Error('Your customConfig param is not an Object')
      )
    })

    test('should NOT throw Error when custom config is Object.create({})', () => {
      expect(() => fuzzyMailCheck('validemail@gmail.co', Object.create({}))).not.toThrowError()
    })
  })
})
