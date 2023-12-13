import paymentsReducer, { initialState } from './paymentsReducer'
import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  GET_WALLET_SUCCESS,
  GET_PAYMENT_METHODS,
  GET_PAYMENT_METHODS_SUCCESS,
  GET_PAYMENT_METHODS_FAILURE,
  ADD_PAYMENT,
  ADD_PAYMENT_SUCCESS,
  ADD_PAYMENT_FAILURE,
  PATCH_PAYMENT,
  PATCH_PAYMENT_SUCCESS,
  PATCH_PAYMENT_FAILURE,
  DELETE_PAYMENT,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAILURE,
  RESET_PAYMENT_SUBMISSION,
  GET_CREDIT_PLANS,
  GET_CREDIT_PLANS_SUCCESS,
  GET_CREDIT_PLANS_FAILURE,
  RESET_CREDIT_PLANS_ATTEMPTS,
  SETUP_PAYMENT_METHOD,
  SETUP_PAYMENT_METHOD_SUCCESS,
  SETUP_PAYMENT_METHOD_FAILURE,
  SETUP_PAYPAL_SESSION_SUCCESS,
  SETUP_PAYPAL_SESSION_FAILURE,
  APPLE_PAY_COMPATIBLE,
  APPLE_PAY_BEGIN,
  APPLE_PAY_FAILURE,
  UPDATE_SELECTED_PAYMENT_TAB,
  UPDATE_SELECTED_PAYMENT_METHOD,
  UPDATE_SELECTED_SAVED_PAYMENT_METHOD,
  CHANGE_PAYMENT_LOCATION,
  DATACASH_RESIZE,
  RESET_PAYMENT_TABS,
  RESET_PAYMENT_OPTIONS_VIEW,
  DATACASH_LOADED,
  SET_ACTIVE_ACCORDION_PAYMENT_METHOD,
  REQUEST_NEW_2FA_CODE,
  RESET_GIFT_CARD_ERRORS,
  SPECIFIC_GIFT_CARD_ERROR,
  GENERIC_GIFT_CARD_ERROR,
  MODAL_OPEN,
  MODAL_CLOSE,
  START_CREDIT_APPLICATION,
  START_CREDIT_APPLICATION_FAILURE,
  RESET_CREDIT_APPLICATION,
  START_CREDIT_APPLICATION_SUCCESS,
} from '../../actions'

import creditPlansMockData from './__mocks__/creditPlans'
import monthlyPlansMockData from './__mocks__/monthlyPlans'

import {
  initialPaymentMethods,
  paymentMethodsDisabled,
  singleSavedDebitCard,
  afsPayment,
  pciPayment,
} from '../../config/testUtils/__mocks__/state'
import {
  initialPaymentMethodsResponse,
  initialPaymentMethodsDisabled,
} from '../../config/testUtils/__mocks__/responses'
import { PaymentMethod } from '../../types/api'
import { SET_FEATURES } from '../../actions/app'
import { PaymentTabs } from '../../types/reducers'

const loadingState = {
  ...initialState,
  loading: true,
  error: false,
}

const errorState = {
  ...initialState,
  loading: false,
  error: true,
}

const initAction = { type: '', payload: undefined }
const mockError = { message: 'something went wrong' }
const snapshot = {
  payments: {
    payments: [
      {
        id: '1234',
        paymentMethod: 'CARD_DEBIT',
        currency: 'GBP',
      },
      {
        id: '5678',
        paymentMethod: 'CARD_ARGOS_CREDIT',
        currency: 'GBP',
      },
    ],
    giftCardsTotal: 50,
  },
}

describe('When the page is first loaded', () => {
  it('should set an initial state', () => {
    expect(paymentsReducer(undefined, initAction)).toEqual(initialState)
  })

  describe('and the users snapshot data is loaded', () => {
    it('should save the payment data', () => {
      const newState = paymentsReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot }))
      expect(newState).toEqual({
        ...initialState,
        payments: snapshot.payments.payments,
        giftCardsTotal: snapshot.payments.giftCardsTotal,
      })
    })
  })
})

describe('When the page is re-loaded', () => {
  describe('and the users snapshot data is loaded', () => {
    it('should save the payment data', () => {
      const newState = paymentsReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot }))
      expect(newState).toEqual({
        ...initialState,
        payments: snapshot.payments.payments,
        giftCardsTotal: snapshot.payments.giftCardsTotal,
      })
    })
  })
})

describe('When getting the payment methods', () => {
  it('should start loading the payment method data and remove any existing errors', () => {
    const prevState = errorState
    const newState = paymentsReducer(prevState, GET_PAYMENT_METHODS())
    expect(newState.error).toEqual(false)
    expect(newState.gettingPaymentMethods).toEqual(true)
  })

  describe('and the request is successful', () => {
    let newState

    beforeAll(() => {
      const prevState = {
        ...initialState,
        gettingPaymentMethods: true,
        methods: [],
      }
      newState = paymentsReducer(prevState, GET_PAYMENT_METHODS_SUCCESS({ ...initialPaymentMethodsResponse }))
    })

    it('should stop loading the payment method data', () => {
      expect(newState.error).toEqual(false)
      expect(newState.gettingPaymentMethods).toEqual(false)
    })

    it('should save the payment methods', () => {
      expect(newState.methods).toEqual({
        ...initialPaymentMethods,
      })
    })

    it('should select the default payment method', () => {
      expect(newState.selectedPaymentMethod).toEqual('CARD_DEBIT')
    })

    describe('and a payment method has been previously selected', () => {
      it('should persist that selected payment method', () => {
        expect(
          paymentsReducer(
            { ...initialState, selectedPaymentMethod: 'PAYPAL' },
            GET_PAYMENT_METHODS_SUCCESS({ ...initialPaymentMethodsResponse }),
          ).selectedPaymentMethod,
        ).toBe('PAYPAL')
      })
    })
  })

  describe('and the request is unsuccessful', () => {
    const prevState = errorState

    it('should stop loading the payment method data', () => {
      const newState = paymentsReducer(prevState, GET_PAYMENT_METHODS_FAILURE(mockError))
      expect(newState.error).toEqual(true)
      expect(newState.loading).toEqual(false)
    })
  })
})

test('When PayPal is the default selected option, it should load the paypal call to action area', () => {
  const prevState = paymentsReducer(initialState, GET_PAYMENT_METHODS())
  const newState = paymentsReducer(
    { ...prevState, selectedPaymentMethod: 'PAYPAL' },
    GET_PAYMENT_METHODS_SUCCESS({
      methods: {
        ...initialPaymentMethodsDisabled,
        PAYPAL: {
          status: 'AVAILABLE',
        },
      },
    }),
  )

  expect(newState).toEqual({
    ...prevState,
    methods: {
      ...paymentMethodsDisabled,
      PAYPAL: {
        ...paymentMethodsDisabled.PAYPAL,
        permanentlyDisabled: false,
        available: true,
      },
    },
    gettingPaymentMethods: false,
    selectedPaymentMethod: 'PAYPAL',
    paymentLocation: '/paypal',
  })
})
test('When Apple Pay is the default selected option, it should load the Apple Pay call to action area', () => {
  const prevState = paymentsReducer(initialState, GET_PAYMENT_METHODS())
  const stateWithStatusAvailable = paymentsReducer(
    { ...prevState, selectedPaymentMethod: 'APPLE_PAY' },
    GET_PAYMENT_METHODS_SUCCESS({
      methods: {
        ...initialPaymentMethodsDisabled,
        APPLE_PAY: {
          status: 'AVAILABLE',
        },
      },
    }),
  )
  expect(stateWithStatusAvailable).toEqual({
    ...prevState,
    methods: {
      ...paymentMethodsDisabled,
      APPLE_PAY: {
        ...paymentMethodsDisabled.APPLE_PAY,
        permanentlyDisabled: false,
        available: true,
      },
    },
    gettingPaymentMethods: false,
    selectedPaymentMethod: 'APPLE_PAY',
    paymentLocation: '/applePay',
  })
})
test('Apple pay is NOT available when total exceeds Apple Pay spend limit (£125) and warning should be flagged', () => {
  const prevState = paymentsReducer(initialState, GET_PAYMENT_METHODS())
  const stateWithStatusOverSpend = paymentsReducer(
    { ...prevState, selectedPaymentMethod: 'APPLE_PAY' },
    GET_PAYMENT_METHODS_SUCCESS({
      methods: {
        ...initialPaymentMethodsDisabled,
        APPLE_PAY: {
          status: 'OVER_MAX_SPEND_LIMIT',
        },
      },
    }),
  )
  expect(stateWithStatusOverSpend).toEqual({
    ...prevState,
    methods: {
      ...paymentMethodsDisabled,
      APPLE_PAY: {
        ...paymentMethodsDisabled.APPLE_PAY,
        permanentlyDisabled: false,
        available: false,
        overMaxSpendLimit: true,
      },
    },
    gettingPaymentMethods: false,
    applePayOverLimitWarning: true,
    selectedPaymentMethod: 'APPLE_PAY',
    paymentLocation: '/applePay',
  })
})

describe('When adding a payment method', () => {
  it('should fire the request for the payment data and remove any existing errors', () => {
    const prevState = { ...errorState, giftCardError: 'error' }
    const newState = paymentsReducer(prevState, ADD_PAYMENT())
    expect(newState).toEqual({
      ...prevState,
      error: false,
      giftCardError: null,
      errorStatus: null,
    })
  })

  describe('and the request is successful for the given payment', () => {
    test('should stop loading the payment method data', () => {
      const prevState = {
        ...loadingState,
      }
      const type = 'CARD_DEBIT'
      const newState = paymentsReducer(prevState, ADD_PAYMENT_SUCCESS({ type }))
      expect(newState.error).toEqual(false)
      expect(newState.errors[PaymentMethod.CARD_DEBIT]).toBe(false)
      expect(newState.errorStatus).toEqual(null)
      expect(newState.addingPayment[PaymentMethod.CARD_DEBIT]).toBe(false)
    })
  })

  test('and it is unsuccessful it should mark as failed', () => {
    const type = 'CARD_DEBIT'
    const error = {
      status: 111,
    }
    const newState = paymentsReducer(initialState, ADD_PAYMENT_FAILURE({ type, error }))
    expect(newState.error).toBeTruthy()
    expect(newState.errors[PaymentMethod.CARD_DEBIT]).toEqual(true)
    expect(newState.errorStatus).toEqual(111)
    expect(newState.addingPayment[PaymentMethod.CARD_DEBIT]).toBe(false)
  })

  describe('the payload is missing (no payment)', () => {
    const error = {}
    const newState = paymentsReducer(initialState, ADD_PAYMENT_FAILURE({ error }))

    it('should reset error states', () => {
      expect(newState.error).toBeTruthy()
      expect(newState.errors).toEqual(initialState.errors)
      expect(newState.addingPayment).toEqual(initialState.addingPayment)
    })
  })

  describe('the request is successful', () => {
    const newState = paymentsReducer(initialState, ADD_PAYMENT_SUCCESS({ type: PaymentMethod.CARD_DEBIT }))

    it('should reset the errors and loading state', () => {
      expect(newState).toEqual(initialState)
    })
  })

  describe('and then getting new payment method data', () => {
    const state = {
      ...initialState,
      error: false,
      loading: true,
      payments: snapshot.payments.payments,
      giftCardsTotal: snapshot.payments.giftCardsTotal,
      creditPlans: creditPlansMockData,
      methods: { CARD_ARGOS_CREDIT: { status: 'AVAILABLE' } },
      selectedPaymentMethod: 'CARD_ARGOS_CREDIT',
    }

    it('should save it', () => {
      expect(paymentsReducer(state, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot }))).toEqual(state)
    })
  })

  test('and while the payment is being added, its loading state should be handled correctly', () => {
    let newState

    newState = paymentsReducer(initialState, ADD_PAYMENT({ paymentMethod: 'CARD_DEBIT' }))
    expect(newState.addingPayment).toEqual({
      ...initialState.addingPayment,
      [PaymentMethod.CARD_DEBIT]: true,
    })

    newState = paymentsReducer(initialState, ADD_PAYMENT({ requestOptions: { paymentMethod: 'CARD_DEBIT' } }))
    expect(newState.addingPayment).toEqual({
      ...initialState.addingPayment,
      [PaymentMethod.CARD_DEBIT]: true,
    })

    newState = paymentsReducer(initialState, ADD_PAYMENT({ requestOptions: { creditPlanId: '12345' } }))
    expect(newState.addingPayment).toEqual({
      ...initialState.addingPayment,
      [PaymentMethod.CARD_ARGOS_CREDIT]: true,
    })

    newState = paymentsReducer(initialState, ADD_PAYMENT({ type: 'CARD_DEBIT' }))
    expect(newState.addingPayment).toEqual({
      ...initialState.addingPayment,
      [PaymentMethod.CARD_DEBIT]: true,
    })
  })
})

test('When clearing gift card errors, the number of giftcard attempts should be reset to 0', () => {
  const newState = paymentsReducer(
    { ...initialState, numOfAddGiftCardAttempts: 2, giftCardError: 'I am an error, please fix me' },
    RESET_GIFT_CARD_ERRORS(),
  )
  expect(newState).toEqual({ ...initialState, numOfAddGiftCardAttempts: 0, giftCardError: null })
})

test('When adding an invalid gift card', () => {
  const newState = paymentsReducer(initialState, SPECIFIC_GIFT_CARD_ERROR({ error: 'PAYMENT_GIFT_CARD_INVALID' }))
  expect(newState).toEqual({ ...initialState, giftCardError: 'PAYMENT_GIFT_CARD_INVALID' })
})

test('When adding a duplicate gift card', () => {
  const newState = paymentsReducer(initialState, SPECIFIC_GIFT_CARD_ERROR({ error: 'PAYMENT_GIFT_CARD_EXISTS' }))
  expect(newState).toEqual({ ...initialState, giftCardError: 'PAYMENT_GIFT_CARD_EXISTS' })
})

test('When a generic giftcard error is received, it should increase the number of giftcard add attempts count', () => {
  const newState = paymentsReducer(initialState, GENERIC_GIFT_CARD_ERROR())
  expect(newState).toEqual({ ...initialState, numOfAddGiftCardAttempts: 1 })
})

test('When opening the modal, gift card errors are reset', () => {
  // MODAL_OPEN is fired when changing to the promo code tab
  const invalidGiftCardState = { ...initialState, giftCardError: 'error' }
  const newState = paymentsReducer(invalidGiftCardState, MODAL_OPEN())
  expect(newState).toEqual(initialState)
})

test('When closing the modal resets gift card errors', () => {
  const invalidGiftCardState = { ...initialState, giftCardError: 'error', numOfAddGiftCardAttempts: 2 }
  const newState = paymentsReducer(invalidGiftCardState, MODAL_CLOSE())
  expect(newState).toEqual(initialState)
})

describe('When resetting an added payment animation state', () => {
  it('should reset to original state with no errors', () => {
    const newState = paymentsReducer(
      {
        ...initialState,
        addingPayment: {
          ...initialState.addingPayment,
          CARD_ARGOS_CREDIT: true,
        },
        errors: { ...initialState.errors, CARD_DEBIT: true },
      },
      RESET_PAYMENT_SUBMISSION(),
    )
    expect(newState).toEqual({ ...initialState })
  })
})

describe('When patching a payment method', () => {
  it('should fire the request for updating a payment', () => {
    const prevState = errorState
    const newState = paymentsReducer(prevState, PATCH_PAYMENT())
    expect(newState.error).toEqual(false)
    expect(newState.patchingPayment).toEqual(true)
  })

  describe('and the request is successful', () => {
    let newState

    beforeAll(() => {
      const prevState = {
        ...loadingState,
      }
      newState = paymentsReducer(prevState, PATCH_PAYMENT_SUCCESS())
    })

    it('should finish patching the payment', () => {
      expect(newState.error).toEqual(false)
      expect(newState.patchingPayment).toEqual(false)
    })
  })

  describe('unsuccessfully', () => {
    const newState = paymentsReducer(initialState, PATCH_PAYMENT_FAILURE())

    it('should be marked as failed', () => {
      expect(newState.error).toEqual(true)
      expect(newState.patchingPayment).toEqual(false)
    })
  })
})

test('Updating the selected payment method', () => {
  const newState = paymentsReducer(
    initialState,
    UPDATE_SELECTED_PAYMENT_METHOD({
      paymentMethod: PaymentMethod.CARD_DEBIT,
      previouslySelectedPaymentMethod: PaymentMethod.PAYPAL,
    }),
  )

  const expectedState = {
    ...initialState,
    selectedPaymentMethod: 'CARD_DEBIT',
  }

  expect(newState).toEqual(expectedState)
})

test('Updating the selected saved payment method', () => {
  const prevState = {
    ...errorState,
    errors: {
      ...errorState.errors,
      CARD_DEBIT: true,
    },
  }

  const newState = paymentsReducer(prevState, UPDATE_SELECTED_SAVED_PAYMENT_METHOD(singleSavedDebitCard))

  const expectedState = {
    ...initialState,
    selectedSavedPaymentMethod: singleSavedDebitCard,
  }

  expect(newState).toEqual(expectedState)
})

test('Set the active accordion state for the credit card payment method being viewed and ensure previous errors are cleared', () => {
  const withExistingError = paymentsReducer(initialState, GET_CREDIT_PLANS_FAILURE())
  const withActiveAccordion = paymentsReducer(
    withExistingError,
    SET_ACTIVE_ACCORDION_PAYMENT_METHOD({ paymentMethod: 'CARD_ARGOS_CREDIT' }),
  )
  expect(withActiveAccordion.activeAccordionPaymentMethod).toBe('CARD_ARGOS_CREDIT')
  expect(withActiveAccordion.creditPlans).toEqual(initialState.creditPlans)
})

describe('When setting up the selected payment method', () => {
  const state = paymentsReducer(initialState, SETUP_PAYMENT_METHOD({}))

  it('should set as loading', () => {
    expect(state.loading).toBeTruthy()
  })

  it('should reset the errors', () => {
    expect(state.errors).toEqual({
      APPLE_PAY: false,
      CARD_ARGOS_CREDIT: false,
      CARD_DEBIT: false,
      CARD_GIFT_ARGOS: false,
      CARD_GIFT_FLEXECASH: false,
      PAYPAL: false,
      CREDIT_CAPE2: false,
      CREDIT_MPP: false,
    })
  })

  it('should set not set the automatically added state', () => {
    expect(state.isAutomated).toBeFalsy()
  })

  describe('successfully', () => {
    const newState = paymentsReducer(state, SETUP_PAYMENT_METHOD_SUCCESS())

    it('should mark as finished setting up payment method', () => {
      expect(newState.loading).toBeFalsy()
      expect(newState.error).toBeFalsy()
    })
  })

  describe('unsuccessfully', () => {
    const newState = paymentsReducer(state, SETUP_PAYMENT_METHOD_FAILURE({ error: 'I am broken, fix me' }))

    it('should mark as failed', () => {
      expect(newState.error).toBeTruthy()
      expect(newState.loading).toBeFalsy()
    })
  })
})

test('When adding a single pci automatically, should set the automatic state', () => {
  const newState = paymentsReducer(initialState, SETUP_PAYMENT_METHOD({ isAutomaticallyAddingPayment: true }))
  expect(newState).toEqual({ ...initialState, loading: true, error: false, isAutomated: true })
})

test('When adding a single pci automatically and the payment fails, should reset the automatic state', () => {
  const newState = paymentsReducer(initialState, SETUP_PAYMENT_METHOD_FAILURE({ isAutomaticallyAddingPayment: true }))
  expect(newState).toEqual({ ...initialState, error: true, isAutomated: false })
})

describe('When setting up the selected payment method as Paypal', () => {
  const state = paymentsReducer(initialState, SETUP_PAYMENT_METHOD({}))

  it('should set as loading', () => {
    expect(state.loading).toBeTruthy()
  })

  describe('and Paypal session creation was successful', () => {
    const newState = paymentsReducer(state, SETUP_PAYPAL_SESSION_SUCCESS())

    it('should mark as succesful', () => {
      expect(newState.error).toBeFalsy()
      expect(newState.loading).toBeFalsy()
      expect(newState.errors[PaymentMethod.PAYPAL]).toEqual(false)
    })
  })

  describe('and Paypal session creation failed', () => {
    const newState = paymentsReducer(state, SETUP_PAYPAL_SESSION_FAILURE())

    it('should mark as failed', () => {
      expect(newState.error).toBeTruthy()
      expect(newState.loading).toBeFalsy()
      expect(newState.errors[PaymentMethod.PAYPAL]).toEqual(true)
    })
  })
})

test('Browsing with an Apple Pay compatible device/browser', () => {
  global.ApplePaySession = {}

  // dev - apple pay is https only so we should bypass the canMakePayments() check in development
  process.env.NODE_ENV = 'development'
  expect(paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())).toEqual({ ...initialState, deviceHasApplePay: true })

  process.env.NODE_ENV = 'staging'
  global.ApplePaySession = { canMakePayments: jest.fn(() => true) }
  expect(paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())).toEqual({ ...initialState, deviceHasApplePay: true })
  expect(global.ApplePaySession.canMakePayments).toHaveBeenCalledTimes(1)

  process.env.NODE_ENV = 'production'
  global.ApplePaySession = { canMakePayments: jest.fn(() => true) }
  expect(paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())).toEqual({ ...initialState, deviceHasApplePay: true })
  expect(global.ApplePaySession.canMakePayments).toHaveBeenCalledTimes(1)
})

test('Caching/saving the apple pay compatibility check', () => {
  process.env.NODE_ENV = 'production'
  global.ApplePaySession = { canMakePayments: jest.fn(() => true) }

  const newState = paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())
  expect(newState).toEqual({ ...initialState, deviceHasApplePay: true })

  paymentsReducer(newState, APPLE_PAY_COMPATIBLE()) // Force a second check (shouldn't ever actually happen)
  expect(global.ApplePaySession.canMakePayments).toHaveBeenCalledTimes(1) // Should only have been called once from the first action
})

test('Browsing with a non Apple Pay compatible device/browser', () => {
  global.ApplePaySession = undefined

  process.env.NODE_ENV = 'development'
  expect(paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())).toEqual({ ...initialState, deviceHasApplePay: null })

  process.env.NODE_ENV = 'staging'
  global.ApplePaySession = { canMakePayments: jest.fn(() => false) }
  expect(paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())).toEqual({ ...initialState, deviceHasApplePay: false })
  expect(global.ApplePaySession.canMakePayments).toHaveBeenCalledTimes(1)

  process.env.NODE_ENV = 'production'
  global.ApplePaySession = { canMakePayments: jest.fn(() => false) }
  expect(paymentsReducer(initialState, APPLE_PAY_COMPATIBLE())).toEqual({ ...initialState, deviceHasApplePay: false })
  expect(global.ApplePaySession.canMakePayments).toHaveBeenCalledTimes(1)
})

test('When clicking apple pay the errors should be reset', () => {
  const firstState = paymentsReducer(initialState, APPLE_PAY_FAILURE())
  expect(firstState.errors[PaymentMethod.APPLE_PAY]).toEqual(true)

  const secondState = paymentsReducer(firstState, APPLE_PAY_BEGIN())
  expect(secondState).toEqual(initialState)
})

test('Attempting to get credit plans', () => {
  const state = paymentsReducer(initialState, GET_CREDIT_PLANS())
  expect(state.creditPlans).toEqual({ ...initialState.creditPlans, loading: true })
})

test('Getting credit plans successfully', () => {
  const state = paymentsReducer(initialState, GET_CREDIT_PLANS())

  const newState = paymentsReducer(
    state,
    GET_CREDIT_PLANS_SUCCESS({
      bestAnnualRate: 10,
      period: 24,
      plans: [monthlyPlansMockData, ...creditPlansMockData],
    }),
  )

  expect(newState).toEqual({
    ...initialState,
    creditPlans: {
      error: null,
      attempts: 0,
      loading: false,
      regularPlans: [
        {
          planNumber: '10022',
          title: '12 months Buy Now, Pay Later',
          duration: '12',
          apr: 29.9,
        },
        {
          planNumber: '10023',
          title: '6 months Buy Now, Pay Later',
          duration: '6',
          apr: 29.9,
        },
        {
          planNumber: '10024',
          title: 'Normal credit',
          duration: null,
          apr: 29.9,
        },
      ],
      monthlyPaymentPlan: {
        planNumber: '10029',
        title: 'Get longer to pay: from 12 to 48 monthly payments',
        apr: 29.9,
        effectiveTo: null,
        minimumDuration: 12,
        maximumDuration: 48,
      },
    },
  })
})

test('Failing to get credit plans', () => {
  const state = paymentsReducer(initialState, GET_CREDIT_PLANS())
  const newState = paymentsReducer(state, GET_CREDIT_PLANS_FAILURE({ error: {} }))

  expect(newState).toEqual({
    ...initialState,
    creditPlans: {
      error: true,
      loading: false,
      attempts: initialState.creditPlans.attempts + 1,
    },
  })
})

test('Clear credit plan errors when re-attempting to get plans', () => {
  const stateWithExistingError = {
    ...initialState,
    payments: {
      ...initialState.payments,
      creditPlans: {
        ...initialState.payments.creditPlans,
        error: true,
      },
    },
  }

  const state = paymentsReducer(stateWithExistingError, GET_CREDIT_PLANS())

  expect(state.creditPlans).toEqual({
    ...initialState.creditPlans,
    error: null,
    loading: true,
  })
})

test('When credit plan attempts is reset', () => {
  const finalState = paymentsReducer(
    { ...initialState, creditPlans: { ...initialState.creditPlans, attempts: 3 } },
    RESET_CREDIT_PLANS_ATTEMPTS(),
  )
  expect(finalState.creditPlans).toEqual(initialState.creditPlans)
})

describe('When changing a payments location', () => {
  describe('from the payment method radio buttons to the PCI card form', () => {
    const state = paymentsReducer(initialState, CHANGE_PAYMENT_LOCATION('/ThisIsThePCILocation'))
    it('should have updated the payments location', () => {
      expect(state.paymentLocation).toEqual('/ThisIsThePCILocation')
    })
  })
  describe('from the PCI card form back to the payment method radio buttons', () => {
    const state = paymentsReducer(initialState, CHANGE_PAYMENT_LOCATION('/ThisIsTheRadioLocation'))
    it('should have updated the payments location', () => {
      expect(state.paymentLocation).toEqual('/ThisIsTheRadioLocation')
    })
  })
})

describe('When an error message appears or disappears within the datacash iframes', () => {
  const payload = { scrollHeight: 100 }
  const state = paymentsReducer(initialState, DATACASH_RESIZE(payload))
  it('should resize the iframe to the new height', () => {
    expect(state.datacashIframeHeight).toBe(100)
  })
})

test('When the wallet is successfully retrieved, Then select the first non-disabled saved card, and if no saved cards are available, select the new payment tab', () => {
  // AVAILABLE
  const mockWalletData = {
    savedPaymentMethods: [afsPayment, pciPayment],
  }

  const stateWithArgosCardDisabled = {
    ...initialState,
    methods: {
      CARD_ARGOS_CREDIT: {
        permanentlyDisabled: true,
        available: false,
      },
      CARD_DEBIT: {
        available: true,
        permanentlyDisabled: false,
      },
    },
  }

  const firstState = paymentsReducer(stateWithArgosCardDisabled, GET_WALLET_SUCCESS(mockWalletData))
  expect(firstState).toEqual({
    ...stateWithArgosCardDisabled,
    selectedSavedPaymentMethod: mockWalletData.savedPaymentMethods[1],
  })

  // INCOMPATIBLE
  const stateWithArgosCardIncompatible = {
    ...initialState,
    methods: {
      CARD_ARGOS_CREDIT: {
        available: false,
        incompatible: true,
        permanentlyDisabled: false,
      },
      CARD_DEBIT: {
        available: false,
        incompatible: false,
        permanentlyDisabled: true,
      },
    },
  }

  const secondState = paymentsReducer(stateWithArgosCardIncompatible, GET_WALLET_SUCCESS(mockWalletData))
  expect(secondState).toEqual({
    ...stateWithArgosCardIncompatible,
    selectedSavedPaymentMethod: mockWalletData.savedPaymentMethods[0],
    selectedPaymentTab: PaymentTabs.NEW_PAYMENT_TAB,
  })

  // TEMPORARILY DISABLED

  const stateWithSavedCardsTemporarilyDisabled = {
    ...initialState,
    methods: {
      [PaymentMethod.CARD_ARGOS_CREDIT]: {
        available: false,
        incompatible: false,
        permanentlyDisabled: false,
        temporarilyDisabled: true,
      },
      [PaymentMethod.CARD_DEBIT]: {
        available: false,
        incompatible: false,
        permanentlyDisabled: false,
        temporarilyDisabled: true,
      },
    },
  }

  const thirdState = paymentsReducer(stateWithSavedCardsTemporarilyDisabled, GET_WALLET_SUCCESS(mockWalletData))
  expect(thirdState).toEqual({
    ...stateWithSavedCardsTemporarilyDisabled,
    selectedSavedPaymentMethod: mockWalletData.savedPaymentMethods[0],
    selectedPaymentTab: PaymentTabs.NEW_PAYMENT_TAB,
  })
})

test('Saving the selected payment tab', () => {
  const prevState = {
    ...errorState,
    errors: {
      ...errorState.errors,
      CARD_DEBIT: true,
    },
  }
  const newState = paymentsReducer(prevState, UPDATE_SELECTED_PAYMENT_TAB(1))

  const expectedState = {
    ...initialState,
    selectedPaymentTab: 1,
  }

  expect(newState).toEqual(expectedState)
})

test('Resetting the payment tabs when switching between them should clean up state changes', () => {
  const state = {
    ...initialState,
    selectedPaymentMethod: 'CARD_DEBIT',
    paymentLocation: '/paypal',
    methods: initialPaymentMethods,
  }

  const cleanState = {
    ...initialState,
    selectedPaymentMethod: 'CARD_DEBIT',
    methods: initialPaymentMethods,
  }

  expect(paymentsReducer(state, RESET_PAYMENT_TABS())).toEqual(cleanState)
})

test('Reset to the payment options view when viewing an iframe and user has performed an order altering action', () => {
  const stateIframesLoaded = {
    ...initialState,
    selectedPaymentMethod: 'CARD_ARGOS_CREDIT',
    paymentLocation: '/argosCardCreditPlan',
    datacashLoaded: true,
    activeAccordionPaymentMethod: null,
    creditPlans: {
      ...initialState.creditPlans,
      regularPlans: [{}],
    },
  }

  const state = paymentsReducer(stateIframesLoaded, RESET_PAYMENT_OPTIONS_VIEW)

  expect(state).toEqual({
    ...stateIframesLoaded,
    paymentLocation: '/',
    creditPlans: {
      ...state.creditPlans,
      regularPlans: undefined, // should invalidate pre-cached credit plans
    },
  })
})

test('Reset to the payment options view when viewing the first step of the argos card accordion (not viewing the iframe) and user has performed an order altering action', () => {
  const stateIframesNotLoaded = {
    ...initialState,
    selectedPaymentMethod: 'CARD_ARGOS_CREDIT',
    paymentLocation: '/',
    datacashLoaded: false,
    activeAccordionPaymentMethod: 'CARD_ARGOS_CREDIT',
  }

  const state = paymentsReducer(stateIframesNotLoaded, RESET_PAYMENT_OPTIONS_VIEW)

  expect(state).toEqual({
    ...stateIframesNotLoaded,
    paymentLocation: '/',
    creditPlans: {
      ...state.creditPlans,
      regularPlans: undefined, // should invalidate pre-cached credit plans
    },
  })
})

test('Do not reset to the payment options view when viewing the Paypal CTA and user has performed an order altering action', () => {
  const statePaypalVisible = {
    ...initialState,
    selectedPaymentMethod: 'PAYPAL',
    paymentLocation: '/paypal',
    datacashLoaded: false,
    activeAccordionPaymentMethod: null,
  }
  const state = paymentsReducer(statePaypalVisible, RESET_PAYMENT_OPTIONS_VIEW)

  expect(state.paymentLocation).toEqual('/paypal')
})

test('Do not reset to the payment options view when viewing the Apple Pay CTA and user has performed an order altering action', () => {
  const stateApplePayVisible = {
    ...initialState,
    selectedPaymentMethod: 'APPLE_PAY',
    paymentLocation: '/applePay',
    datacashLoaded: false,
    activeAccordionPaymentMethod: null,
  }
  const state = paymentsReducer(stateApplePayVisible, RESET_PAYMENT_OPTIONS_VIEW)

  expect(state.paymentLocation).toEqual('/applePay')
})

test('Changing datacash loaded state', () => {
  expect(initialState.datacashLoaded).toEqual(false)
  const loadedState = paymentsReducer(initialState, DATACASH_LOADED(true))
  expect(loadedState.datacashLoaded).toEqual(true)
  const notLoadedState = paymentsReducer(initialState, DATACASH_LOADED(false))
  expect(notLoadedState.datacashLoaded).toEqual(false)
})

test('When a new 2fa code is requested, it should set patch payment as true', () => {
  const state = paymentsReducer(initialState, REQUEST_NEW_2FA_CODE)
  const expectedState = {
    ...initialState,
    patchingPayment: true,
  }
  expect(state).toEqual(expectedState)
})

test('When a delete payment fails, should add an error and increase the number of attempts', () => {
  const newState = paymentsReducer(initialState, DELETE_PAYMENT({ id: 'test_id' }))
  expect(newState).toEqual({
    ...initialState,
    deletePayment: {
      test_id: {
        deleting: true,
        error: false,
        numOfDeletePaymentAttempts: 0,
      },
    },
  })

  // First failure should increase the count
  const firstState = paymentsReducer(newState, DELETE_PAYMENT_FAILURE({ deletedPayment: { id: 'test_id' } }))
  expect(firstState).toEqual({
    ...initialState,
    deletePayment: {
      test_id: {
        deleting: false,
        error: true,
        numOfDeletePaymentAttempts: 1,
      },
    },
  })

  // Second DELETE_PAYMENT should persist the previous numOfDeletePaymentAttempts
  const secondState = paymentsReducer(firstState, DELETE_PAYMENT({ id: 'test_id' }))
  expect(secondState).toEqual({
    ...initialState,
    deletePayment: {
      test_id: {
        deleting: true,
        error: false,
        numOfDeletePaymentAttempts: 1,
      },
    },
  })

  // Second failure should increase the count
  const thirdState = paymentsReducer(secondState, DELETE_PAYMENT_FAILURE({ deletedPayment: { id: 'test_id' } }))
  expect(thirdState).toEqual({
    ...initialState,
    deletePayment: {
      test_id: {
        deleting: false,
        error: true,
        numOfDeletePaymentAttempts: 2,
      },
    },
  })

  // Success should reset the state for that payment id
  const finalState = paymentsReducer(thirdState, DELETE_PAYMENT_SUCCESS({ deletedPayment: { id: 'test_id' } }))
  expect(finalState).toEqual({
    ...initialState,
    deletePayment: {
      test_id: {
        deleting: false,
        error: false,
        numOfDeletePaymentAttempts: 0,
      },
    },
  })
})

describe('When SET_FEATURES is dispatched', () => {
  const stateWithCardDebitAvailable = { ...initialState, methods: initialPaymentMethods }
  const stateWithCardDebitTemporarilyDisabled = {
    ...initialState,
    methods: { ...initialPaymentMethods, [PaymentMethod.CARD_DEBIT]: { temporarilyDisabled: true } },
  }
  const stateWithCardDebitAndPaypalUnavailable = {
    ...stateWithCardDebitTemporarilyDisabled,
    methods: {
      ...stateWithCardDebitTemporarilyDisabled.methods,
      [PaymentMethod.PAYPAL]: { temporarilyDisabled: true },
    },
  }

  test('and methods is empty, should set the features', () => {
    const features = { paypalFallback: true }
    const newState = paymentsReducer(initialState, SET_FEATURES(features))

    expect(newState).toEqual({
      ...initialState,
      features,
    })
  })

  test('and CARD_DEBIT is available, should set the features and set CARD_DEBIT as the selectedPaymentMethod', () => {
    const features = { paypalFallback: true }
    const newState = paymentsReducer(stateWithCardDebitAvailable, SET_FEATURES(features))

    expect(newState).toEqual({
      ...stateWithCardDebitAvailable,
      features,
      selectedPaymentMethod: PaymentMethod.CARD_DEBIT,
    })
  })

  test('and CARD_DEBIT is temporarily disabled, and paypalFallback is false, should set the features and set CARD_ARGOS_CREDIT as the selectedPaymentMethod', () => {
    const features = { paypalFallback: false }
    const newState = paymentsReducer(stateWithCardDebitTemporarilyDisabled, SET_FEATURES(features))

    expect(newState).toEqual({
      ...stateWithCardDebitTemporarilyDisabled,
      features,
      selectedPaymentMethod: PaymentMethod.CARD_ARGOS_CREDIT,
    })
  })

  test('and CARD_DEBIT is temporarily disabled, and paypalFallback is true, should set the features and set CARD_DEBIT as the selectedPaymentMethod', () => {
    const features = { paypalFallback: true }
    const newState = paymentsReducer(stateWithCardDebitTemporarilyDisabled, SET_FEATURES(features))

    expect(newState).toEqual({
      ...stateWithCardDebitTemporarilyDisabled,
      features,
      selectedPaymentMethod: PaymentMethod.CARD_DEBIT,
    })
  })

  test('and CARD_DEBIT is temporarily disabled, and PAYPAL is temporarily disabled, and paypalFallback is true, should set the features and set CARD_ARGOS_CREDIT as the selectedPaymentMethod', () => {
    const features = { paypalFallback: true }
    const newState = paymentsReducer(stateWithCardDebitAndPaypalUnavailable, SET_FEATURES(features))

    expect(newState).toEqual({
      ...stateWithCardDebitAndPaypalUnavailable,
      features,
      selectedPaymentMethod: PaymentMethod.CARD_ARGOS_CREDIT,
    })
  })
})

test('When START_CREDIT_APPLICATION is dispatched for an argos card application, should set argos card application loading to true', () => {
  const stateWithLoadingAndAttempt = {
    ...initialState,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_CAPE2]: {
        loading: false,
        numberOfAttempts: 1,
      },
    },
  }
  const newState = paymentsReducer(
    stateWithLoadingAndAttempt,
    START_CREDIT_APPLICATION({ creditType: PaymentMethod.CREDIT_CAPE2 }),
  )

  expect(newState).toEqual({
    ...stateWithLoadingAndAttempt,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_CAPE2]: {
        loading: true,
        numberOfAttempts: 1,
      },
    },
  })
})

test('When START_CREDIT_APPLICATION is dispatched for a monthly payment plan application, should set monthly payment plan application loading to true', () => {
  const stateWithLoadingAndAttempt = {
    ...initialState,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_MPP]: {
        loading: false,
        numberOfAttempts: 1,
      },
    },
  }
  const newState = paymentsReducer(
    stateWithLoadingAndAttempt,
    START_CREDIT_APPLICATION({ creditType: PaymentMethod.CREDIT_MPP }),
  )

  expect(newState).toEqual({
    ...stateWithLoadingAndAttempt,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_MPP]: {
        loading: true,
        numberOfAttempts: 1,
      },
    },
  })
})

test('When START_CREDIT_APPLICATION_FAILURE is dispatched for an argos card application, should reset loading and increment numberOfAttempts', () => {
  const stateWithLoadingAndAttempt = {
    ...initialState,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_CAPE2]: {
        loading: true,
        numberOfAttempts: 1,
      },
    },
  }
  const newState = paymentsReducer(
    stateWithLoadingAndAttempt,
    START_CREDIT_APPLICATION_FAILURE({ creditType: PaymentMethod.CREDIT_CAPE2 }),
  )

  expect(newState).toEqual({
    ...stateWithLoadingAndAttempt,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_CAPE2]: {
        loading: false,
        numberOfAttempts: 2,
      },
    },
  })
})

// We don't reset the loading state after the API call because transitioning to the
// credit application page also counts as part of the loading. This also solves a UX
// issue where the address reminder message would change between the successful
// API call and loading the credit application page.
test('When START_CREDIT_APPLICATION_SUCCESS is dispatched, it should NOT reset the loading state', () => {
  const stateWithLoadingAndAttempt = {
    ...initialState,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_CAPE2]: {
        loading: true,
        numberOfAttempts: 1,
      },
    },
  }
  const newState = paymentsReducer(
    stateWithLoadingAndAttempt,
    START_CREDIT_APPLICATION_SUCCESS({ creditType: PaymentMethod.CREDIT_CAPE2 }),
  )
  expect(newState).toEqual(stateWithLoadingAndAttempt)
})

test('When START_CREDIT_APPLICATION_FAILURE is dispatched for a monthly payment plan application, should reset loading and increment numberOfAttempts', () => {
  const stateWithLoadingAndAttempt = {
    ...initialState,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_MPP]: {
        loading: true,
        numberOfAttempts: 2,
      },
    },
  }
  const newState = paymentsReducer(
    stateWithLoadingAndAttempt,
    START_CREDIT_APPLICATION_FAILURE({ creditType: PaymentMethod.CREDIT_MPP }),
  )

  expect(newState).toEqual({
    ...stateWithLoadingAndAttempt,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_MPP]: {
        loading: false,
        numberOfAttempts: 3,
      },
    },
  })
})

test('When RESET_CREDIT_APPLICATION is dispatched, should reset loading and numberOfAttempts', () => {
  const stateWithLoadingAndAttempt = {
    ...initialState,
    creditApplications: {
      ...initialState.creditApplications,
      [PaymentMethod.CREDIT_CAPE2]: {
        loading: true,
        numberOfAttempts: 1,
      },
      [PaymentMethod.CREDIT_MPP]: {
        loading: false,
        numberOfAttempts: 3,
      },
    },
  }
  const newState = paymentsReducer(stateWithLoadingAndAttempt, RESET_CREDIT_APPLICATION)

  expect(newState).toEqual(initialState)
})
