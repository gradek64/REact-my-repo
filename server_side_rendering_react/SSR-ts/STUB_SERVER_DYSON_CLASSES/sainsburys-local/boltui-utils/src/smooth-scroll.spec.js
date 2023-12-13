import SmoothScroll, { easings } from './smooth-scroll'

const oldrequestAnimationFrame = global.requestAnimationFrame
jest.useFakeTimers()

describe('SmoothScroll test', () => {
  beforeEach(() => {
    delete global.requestAnimationFrame
  })

  afterEach(() => {
    global.requestAnimationFrame = oldrequestAnimationFrame
  })

  it('should see a final call to window.scroll() with argument of [0, 0]', () => {
    window.scroll = jest.fn()
    window.performance = jest.fn()
    window.innerHeight = 0

    const document = {
      body: { scrollHeight: 0, offsetHeight: 0, offsetTop: 0 },
      documentElement: { clientHeight: 0, scrollHeight: 0, offsetHeight: 0 }
    }

    SmoothScroll.scrollHere(document.body)

    // force scroll event listeners to complete execution
    jest.runAllTimers()

    expect(window.scroll.mock.calls[window.scroll.mock.calls.length - 1]).toEqual([0, 0])
  })

  it('should see a call to window.scroll() with argument of [0, 0]', () => {
    window.scroll = jest.fn()
    window.performance = jest.fn()
    window.innerHeight = 768

    const document = {
      body: { scrollHeight: 0, offsetHeight: 0, offsetTop: 0 },
      documentElement: { clientHeight: 0, scrollHeight: 0, offsetHeight: 0 }
    }

    SmoothScroll.scrollHere(document.body)

    // force scroll event listeners to complete execution
    jest.runAllTimers()

    expect(window.scroll.mock.calls[window.scroll.mock.calls.length - 1]).toEqual([0, 0])
  })

  it('should execute the callback', () => {
    window.scroll = jest.fn()
    window.performance = jest.fn()
    window.innerHeight = 768

    const document = {
      body: { scrollHeight: 0, offsetHeight: 0, offsetTop: 0 },
      documentElement: { clientHeight: 0, scrollHeight: 0, offsetHeight: 0 }
    }

    const callback = jest.fn()
    SmoothScroll.scrollHere(document.body, 0, 300, 'easeInOutCubic', callback)

    // force scroll event listeners to complete execution
    jest.runAllTimers()

    expect(callback.mock.calls.length).toEqual(1)
  })

  it('should requestAnimationFrame when it exists', () => {
    window.requestAnimationFrame = jest.fn()
    window.scroll = jest.fn()
    window.performance = jest.fn()
    window.innerHeight = 768
    window.pageYOffset = 100

    const document = {
      body: { scrollHeight: 0, offsetHeight: 0, offsetTop: 0 },
      documentElement: { clientHeight: 0, scrollHeight: 0, offsetHeight: 0 }
    }

    SmoothScroll.scrollHere(document.body, 0, 1)

    // force scroll event listeners to complete execution
    jest.runAllTimers()

    expect(window.requestAnimationFrame.mock.calls.length).toEqual(1)
  })

  describe('easings', () => {
    it('linear', () => {
      expect(easings.linear(2)).toEqual(2)
    })
    it('easeInQuad', () => {
      expect(easings.easeInQuad(2)).toEqual(4)
    })
    it('easeOutQuad', () => {
      expect(easings.easeOutQuad(4)).toEqual(-8)
    })
    it('easeInOutQuad', () => {
      expect(easings.easeInOutQuad(4)).toEqual(-17)
    })
    it('easeInOutQuad < 0.5', () => {
      expect(easings.easeInOutQuad(0.25)).toEqual(0.125)
    })
    it('easeInCubic', () => {
      expect(easings.easeInCubic(4)).toEqual(64)
    })
    it('easeOutCubic', () => {
      expect(easings.easeOutCubic(4)).toEqual(28)
    })
    it('easeInOutCubic', () => {
      expect(easings.easeInOutCubic(4)).toEqual(109)
    })
    it('easeInOutCubic < 0.5', () => {
      expect(easings.easeInOutCubic(0.25)).toEqual(0.0625)
    })
    it('easeInQuart', () => {
      expect(easings.easeInQuart(4)).toEqual(256)
    })
    it('easeOutQuart', () => {
      expect(easings.easeOutQuart(4)).toEqual(-80)
    })
    it('easeInOutQuart', () => {
      expect(easings.easeInOutQuart(4)).toEqual(-647)
    })
    it('easeInOutQuart < 0.5', () => {
      expect(easings.easeInOutQuart(0.25)).toEqual(0.03125)
    })
    it('easeInQuint', () => {
      expect(easings.easeInQuint(4)).toEqual(1024)
    })
    it('easeOutQuint', () => {
      expect(easings.easeOutQuint(4)).toEqual(244)
    })
    it('easeInOutQuint', () => {
      expect(easings.easeInOutQuint(4)).toEqual(3889)
    })
    it('easeInOutQuint < 0.5', () => {
      expect(easings.easeInOutQuint(0.25)).toEqual(0.015625)
    })
  })
})
