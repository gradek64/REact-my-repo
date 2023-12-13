import {
  poundsToPoints,
  calculateNumberOfSteps,
  isPossibleToPayFullAmount,
  stepBuilder,
  formatNectarCard,
  setNextCursorPosition,
} from './nectarHelper'

describe('when a pounds amount is provided', () => {
  it('should convert into the correct number of points', () => {
    expect(poundsToPoints(2.5)).toBe(500)
    expect(poundsToPoints(0)).toBe(0)
  })
})

describe('when a total is provided', () => {
  it('should calculate if it is possible to pay with only nectar points ', () => {
    expect(isPossibleToPayFullAmount(1000, 4.0)).toBeTruthy()
    expect(isPossibleToPayFullAmount(5, 4.0)).toBeTruthy()
    expect(isPossibleToPayFullAmount(5, 25)).toBeFalsy()
    expect(isPossibleToPayFullAmount(0, 10000)).toBeFalsy()
  })
})

describe('setNextCursorPosition', () => {
  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb())
  })

  afterEach(() => {
    window.requestAnimationFrame.mockRestore()
  })
  test('should set next cursor position in string when selectionEnd is NOT set before space character but digit', () => {
    const event = { target: { setSelectionRange: jest.fn(), selectionEnd: 2 } }
    expect(setNextCursorPosition('111', '111 2', event)).toBe(2)
    expect(event.target.setSelectionRange).toBeCalledWith(2, 2)
  })
  test('should set next cursor position when selectionEnd is set before space character', () => {
    const event = { target: { setSelectionRange: jest.fn(), selectionEnd: 3 } }
    expect(setNextCursorPosition('111', '111 2', event)).toBe(5)
    expect(event.target.setSelectionRange).toBeCalledWith(5, 5)
  })
})

describe('formatNectarCard', () => {
  test('should add space characters to nectar card number', () => {
    const cardNumberNoSpaces = '10291791015'
    expect(formatNectarCard(cardNumberNoSpaces)).toBe('10291791 015')
  })
  test('should format to (8 digit)number and (3 digit)remaining by striping spaces first', () => {
    const cardNumberNoSpaces = '102  91791 015'
    expect(formatNectarCard(cardNumberNoSpaces)).toBe('10291791 015')
  })
  test('should strip the Nectar BIN range if pasted in', () => {
    expect(formatNectarCard('9826300010291791015')).toBe('10291791 015')
    expect(formatNectarCard('98263000 10291791 015')).toBe('10291791 015')
    expect(formatNectarCard('9826300098263000015')).toBe('98263000 982 63000015')
    expect(formatNectarCard('9826300098263000002')).toBe('98263000 002')
    expect(formatNectarCard('0000000010291791015')).toBe('00000000 102 91791015')
  })
  test('should ignore any no digits characters', () => {
    expect(formatNectarCard('zzzZZZzzz')).toBe('')
  })
})

describe('When calculating the number of steps in the dropdown', () => {
  const outstanding = 50
  const nectarPayment = {
    maxSpendingLimit: 200,
    increment: 2.5,
    incrementPoints: 500,
  }
  describe('And the user has no nectar points', () => {
    it('should return no steps', () => {
      expect(calculateNumberOfSteps({ balance: 0, ...nectarPayment }, outstanding)).toBe(0)
    })
  })
  describe('And the user has nectar points valued at £5', () => {
    it('should return 2 steps', () => {
      expect(calculateNumberOfSteps({ balance: 5, ...nectarPayment }, outstanding)).toBe(2)
    })
  })
  describe('And the user has nectar points valued at the total', () => {
    it('should return 20 steps', () => {
      expect(calculateNumberOfSteps({ balance: 50, ...nectarPayment }, outstanding)).toBe(20)
    })
  })
  describe('And the user has more nectar points than the total', () => {
    it('should return 20 steps', () => {
      expect(calculateNumberOfSteps({ balance: 500, ...nectarPayment }, outstanding)).toBe(20)
    })
  })
  describe('And the user has more nectar points than the maximum spend, and the total is greater than the maximum spend', () => {
    it('should return 80 steps', () => {
      expect(calculateNumberOfSteps({ balance: 300, ...nectarPayment }, 300)).toBe(80)
    })
  })
})

describe('When building the steps in the dropdown', () => {
  const totals = { outstanding: 50 }
  const nectarPayment = {
    maxSpendingLimit: 200,
    increment: 2.5,
    incrementPoints: 500,
    amount: 0,
  }
  describe('And the user has no nectar points', () => {
    it('should return a drop down options showing 0', () => {
      expect(
        stepBuilder(totals, {
          balance: 0,
          ...nectarPayment,
        }),
      ).toStrictEqual([
        {
          title: '£0.00 (0 points)',
          value: 0,
        },
      ])
    })
  })
  describe('And the user has nectar points valued at £5', () => {
    it('should return 3 drop down options', () => {
      expect(
        stepBuilder(totals, {
          balance: 5,
          ...nectarPayment,
        }),
      ).toStrictEqual([
        {
          title: '£0.00 (0 points)',
          value: 0,
        },
        {
          title: '£2.50 (500 points)',
          value: 2.5,
        },
        {
          title: '£5.00 (1,000 points)',
          value: 5,
        },
      ])
    })
  })
  describe('And the user has nectar points valued at the total', () => {
    it('should return 22 drop down options', () => {
      expect(
        stepBuilder(totals, {
          balance: 50,
          ...nectarPayment,
        }).length,
      ).toBe(22)
    })
  })
  describe('And the user has more nectar points than the total', () => {
    it('should return 22 drop down options', () => {
      expect(
        stepBuilder(totals, {
          balance: 500,
          ...nectarPayment,
        }).length,
      ).toBe(22)
    })
  })
  describe('And the user has more nectar points than the maximum spend, and the total is greater than the maximum spend', () => {
    it('should return 81 drop down options', () => {
      expect(
        stepBuilder(
          { outstanding: totals.outstanding * 6, withSavings: totals.withSavings * 6 },
          {
            balance: 500,
            ...nectarPayment,
          },
        ).length,
      ).toBe(81)
    })
  })
  describe('And the user has nectar points', () => {
    it('should return a drop down options displaying points with thousandth seperator', () => {
      const options = stepBuilder(totals, {
        balance: 5,
        ...nectarPayment,
      })

      expect(options[2]).toStrictEqual({
        title: '£5.00 (1,000 points)',
        value: 5,
      })
    })
  })
  describe('And the user has already applied some nectar points with an amount still outstanding', () => {
    it('should return 22 drop down options', () => {
      expect(
        stepBuilder(totals, {
          balance: 50,
          amount: 10,
          ...nectarPayment,
        }).length,
      ).toBe(22)
    })
  })
})
