import device from './device'

describe('device ', () => {
  const defaultUserAgent = window.navigator.userAgent
  afterEach(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      configurable: true,
      value: defaultUserAgent
    })
  })
  describe('isIphone() ', () => {
    it('if No Iphone should return false', () => {
      expect(device.isIphone()).toBe(false)
    })
    it('if Iphone should return true', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
      })

      expect(device.isIphone()).toBe(true)
    })
  })

  describe('isIpad() ', () => {
    it('if No iPad should return false', () => {
      expect(device.isIpad()).toBe(false)
    })
    it('if iPad should return true', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPad; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
      })

      expect(device.isIphone()).toBe(true)
    })
  })

  describe('isSafari() ', () => {
    it('if No Safari should return false', () => {
      expect(device.isSafari()).toBe(false)
    })
    it('if Safari should return true', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
      })

      expect(device.isSafari()).toBe(true)
    })
  })

  describe('isIphoneSafari() ', () => {
    it('if No Safari but yes iPhone should return false', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS Version/10.0 Mobile/14E304 Safari/602.1'
      })
      expect(device.isIphoneSafari()).toBe(false)
    })
    it('if yes Safari but No iPhone should return false', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12'
      })
      expect(device.isIphoneSafari()).toBe(false)
    })
    it('if Safari and iPhone should return true', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
      })
      expect(device.isIphoneSafari()).toBe(true)
    })
  })

  describe('getMobileType() ', () => {
    it('if is an iPhone should return iPhone', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS Version/10.0 Mobile/14E304 Safari/602.1'
      })
      expect(device.getMobileType()).toBe('iPhone')
    })
    it('if is an iPhone should return iPad', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (iPad; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS Version/10.0 Mobile/14E304 Safari/602.1'
      })
      expect(device.getMobileType()).toBe('iPad')
    })
    it('if is an Android should return Android', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value:
          'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>'
      })
      expect(device.getMobileType()).toBe('Android')
    })
  })
})
