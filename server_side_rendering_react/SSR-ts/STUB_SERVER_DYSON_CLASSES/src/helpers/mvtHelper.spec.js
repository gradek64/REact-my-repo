import {
  getOrderSummaryVariant,
  isSecureHeader,
  isStickyHeader,
  hideSidebarMobile,
  showFullSidebar,
  getBrand,
  getTheme,
  getChannel,
} from './mvtHelper'

describe('When getOrderSummaryVariant is called', () => {
  describe('and the value is valid', () => {
    it('should return that value', () => {
      expect(getOrderSummaryVariant('2')).toBe('2')
      expect(getOrderSummaryVariant('3')).toBe('3')
      expect(getOrderSummaryVariant('4')).toBe('4')
    })
  })

  describe('and the value is invalid', () => {
    it('should return the default value', () => {
      expect(getOrderSummaryVariant('1')).toBe('3')
      expect(getOrderSummaryVariant(2)).toBe('3')
      expect(getOrderSummaryVariant(3)).toBe('3')
      expect(getOrderSummaryVariant('5')).toBe('3')
      expect(getOrderSummaryVariant('hello')).toBe('3')
    })
  })
})

describe('When getBrand is called', () => {
  describe('and the value is valid', () => {
    it('should return that value', () => {
      expect(getBrand('ARGOS')).toBe('ARGOS')
      expect(getBrand('HABITAT')).toBe('HABITAT')
    })
  })

  describe('and the value is invalid', () => {
    it('should return the default value', () => {
      expect(getBrand('SAINSBURYS')).toBe('ARGOS')
      expect(getBrand(undefined)).toBe('ARGOS')
      expect(getBrand('')).toBe('ARGOS')
    })
  })
})

describe('When getTheme is called', () => {
  describe('and the value is valid', () => {
    it('should return that value', () => {
      expect(getTheme('ARGOS')).toBe('ARGOS')
      expect(getTheme('HABITAT')).toBe('HABITAT')
    })
  })

  describe('and the value is invalid', () => {
    it('should return the default value', () => {
      expect(getTheme('SAINSBURYS')).toBe('ARGOS')
      expect(getTheme(undefined)).toBe('ARGOS')
      expect(getTheme('')).toBe('ARGOS')
    })
  })
})

describe('when the full order summary variant is active', () => {
  it('the header should not be sticky and be secure', () => {
    expect(isStickyHeader('2')).toBe(false)
    expect(isSecureHeader('2')).toBe(true)
  })

  it('the FULL sidebar should be visible on mobile', () => {
    expect(showFullSidebar('2')).toBe(true)
    expect(hideSidebarMobile('2')).toBe(false)
  })
})

describe('when the header order summary variant is active', () => {
  it('the header should be sticky and not secure', () => {
    expect(isStickyHeader('3')).toBe(false)
    expect(isSecureHeader('3')).toBe(true)
  })

  it('the MINI sidebar should be visible on mobile', () => {
    expect(showFullSidebar('3')).toBe(false)
    expect(hideSidebarMobile('3')).toBe(false)
  })
})

describe('when the sticky header order summary variant is active', () => {
  it('the header should be sticky and not secure', () => {
    expect(isStickyHeader('4')).toBe(true)
    expect(isSecureHeader('4')).toBe(false)
  })

  it('the FULL sidebar should be hidden on mobile', () => {
    expect(showFullSidebar('4')).toBe(true)
    expect(hideSidebarMobile('4')).toBe(true)
  })
})

describe('When getChannel is called', () => {
  it('and the value is undefined, should return WEB', () => {
    expect(getChannel(undefined)).toEqual('WEB')
  })

  it('and the value is defined, should return APP', () => {
    expect(getChannel('12345')).toEqual('APP')
  })
})
