import { createReducer } from '@reduxjs/toolkit'

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
  DELETE_PAYMENT_FAILURE,
  DELETE_PAYMENT_SUCCESS,
  RESET_PAYMENT_SUBMISSION,
  GET_CREDIT_PLANS,
  GET_CREDIT_PLANS_SUCCESS,
  GET_CREDIT_PLANS_FAILURE,
  RESET_CREDIT_PLANS_ATTEMPTS,
  UPDATE_SELECTED_PAYMENT_TAB,
  UPDATE_SELECTED_PAYMENT_METHOD,
  UPDATE_SELECTED_SAVED_PAYMENT_METHOD,
  SETUP_PAYMENT_METHOD,
  SETUP_PAYMENT_METHOD_SUCCESS,
  SETUP_PAYMENT_METHOD_FAILURE,
  SETUP_PAYPAL_SESSION_SUCCESS,
  SETUP_PAYPAL_SESSION_FAILURE,
  APPLE_PAY_COMPATIBLE,
  APPLE_PAY_ACTIVE_CARD_SUCCESS,
  APPLE_PAY_ACTIVE_CARD_FAILURE,
  APPLE_PAY_BEGIN,
  APPLE_PAY_FAILURE,
  DATACASH_RESIZE,
  CHANGE_PAYMENT_LOCATION,
  RESET_PAYMENT_TABS,
  RESET_PAYMENT_OPTIONS_VIEW,
  DATACASH_LOADED,
  SET_ACTIVE_ACCORDION_PAYMENT_METHOD,
  REQUEST_NEW_2FA_CODE,
  MODAL_OPEN,
  MODAL_CLOSE,
  SPECIFIC_GIFT_CARD_ERROR,
  GENERIC_GIFT_CARD_ERROR,
  RESET_GIFT_CARD_ERRORS,
  START_CREDIT_APPLICATION,
  START_CREDIT_APPLICATION_FAILURE,
  RESET_CREDIT_APPLICATION,
  SET_FEATURES,
} from '../../actions'

import { formatArgosCardCreditPlans, formatMonthlyPaymentCreditPlan, setStatuses } from '../../helpers/paymentHelpers'

import config from '../../config/config'
import { PaymentsState, PaymentTabs, SelectablePaymentMethod } from 'types/reducers'
import {
  PaymentMethodStatus,
  PaymentMethod,
  GetSnapshotAPIPayload,
  InitSnapshotAPIPayload,
  ArgosCardCreditPlanAPI,
  MonthlyPaymentCreditPlanAPI,
} from 'types/api'

export const initialState: PaymentsState = {
  addingPayment: {
    [PaymentMethod.CARD_DEBIT]: false,
    [PaymentMethod.CARD_ARGOS_CREDIT]: false,
    [PaymentMethod.PAYPAL]: false,
    [PaymentMethod.CARD_GIFT_ARGOS]: false,
    [PaymentMethod.CARD_GIFT_FLEXECASH]: false,
    [PaymentMethod.APPLE_PAY]: false,
    [PaymentMethod.CREDIT_CAPE2]: false,
    [PaymentMethod.CREDIT_MPP]: false,
    // NOTE: Nectar is absent from this list as it is handled as a patch payment
  },
  patchingPayment: false,
  gettingPaymentMethods: false,
  payments: [],
  loading: false,
  error: false,
  errorStatus: null,
  errors: {
    [PaymentMethod.CARD_DEBIT]: false,
    [PaymentMethod.CARD_ARGOS_CREDIT]: false,
    [PaymentMethod.PAYPAL]: false,
    [PaymentMethod.CARD_GIFT_ARGOS]: false,
    [PaymentMethod.CARD_GIFT_FLEXECASH]: false,
    [PaymentMethod.APPLE_PAY]: false,
    [PaymentMethod.CREDIT_CAPE2]: false,
    [PaymentMethod.CREDIT_MPP]: false,
    // NOTE: Nectar is absent from this list as it is handled as a patch payment
  },
  methods: {
    [PaymentMethod.CARD_DEBIT]: {},
    [PaymentMethod.CARD_ARGOS_CREDIT]: {},
    [PaymentMethod.PAYPAL]: {},
    [PaymentMethod.APPLE_PAY]: {},
    [PaymentMethod.CARD_NECTAR_SPEND]: {},
    [PaymentMethod.CARD_GIFT_ARGOS]: {},
    [PaymentMethod.CARD_GIFT_FLEXECASH]: {},
    [PaymentMethod.CREDIT_CAPE2]: {},
    [PaymentMethod.CREDIT_MPP]: {},
  },
  creditPlans: {
    loading: false,
    error: null,
    attempts: 0,
  },
  selectedPaymentTab: 0,
  applePayOverLimitWarning: false,
  selectedPaymentMethod: null as unknown as SelectablePaymentMethod,
  selectedSavedPaymentMethod: null,
  activeAccordionPaymentMethod: null,
  giftCardsTotal: null,
  datacashIframeHeight: 0,
  paymentLocation: '/',
  datacashLoaded: false,
  deletePayment: {},
  deviceHasApplePay: null,
  deviceHasApplePayActiveCard: null,
  giftCardError: null,
  numOfAddGiftCardAttempts: 0,
  isAutomated: false,
  features: {
    paypalFallback: false,
  },
  creditApplications: {
    [PaymentMethod.CREDIT_CAPE2]: {
      loading: false,
      numberOfAttempts: 0,
    },
    [PaymentMethod.CREDIT_MPP]: {
      loading: false,
      numberOfAttempts: 0,
    },
  },
}

const getPaymentType = (
  payload: {
    paymentMethod?: PaymentMethod
    requestOptions?: { paymentMethod?: PaymentMethod; creditPlanId?: string }
    type?: PaymentMethod
  } = {},
): PaymentMethod | undefined => {
  const {
    paymentMethod,
    requestOptions: { paymentMethod: requestOptionsPaymentMethod, creditPlanId } = {},
    type,
  } = payload

  if (creditPlanId) return PaymentMethod.CARD_ARGOS_CREDIT

  const paymentMethodBeingAdded = paymentMethod || requestOptionsPaymentMethod || type

  return paymentMethodBeingAdded
}

const setSpecificAddPayment = (state: PaymentsState, type?: PaymentMethod, value?: boolean) => {
  if (!type || typeof value === 'undefined') return
  state.addingPayment[type] = value
}

const setSelectedPaymentMethod = (state: PaymentsState) => {
  state.selectedPaymentMethod =
    config.paymentMethodsOrder.find((method) => {
      if (
        method === PaymentMethod.CARD_DEBIT &&
        state.features.paypalFallback &&
        state.methods[method].temporarilyDisabled &&
        state.methods[PaymentMethod.PAYPAL].available
      ) {
        return true
      }
      return state.methods[method].available === true
    }) ?? (null as unknown as SelectablePaymentMethod)
}

const setSpecificError = (state: PaymentsState, payload: { type: PaymentMethod }, value: boolean) => {
  state.errors = { ...initialState.errors }
  if (payload.type && state.errors[payload.type] !== undefined) {
    state.errors[payload.type] = value
  }
}

const setLoading = (state: PaymentsState) => {
  state.loading = true
  state.error = false
}

const setError = (state: PaymentsState) => {
  state.loading = false
  state.error = true
}

const setInitialState = (
  state: PaymentsState,
  { payload }: { payload: GetSnapshotAPIPayload | InitSnapshotAPIPayload },
) => {
  const {
    payments: { payments, giftCardsTotal },
  } = payload.snapshot
  return { ...state, payments, giftCardsTotal: giftCardsTotal ?? null }
}

const paymentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_COLLECTION_SNAPSHOT_SUCCESS, setInitialState)
  builder.addCase(INIT_COLLECTION_SNAPSHOT_SUCCESS, setInitialState)
  builder.addCase(GET_WALLET_SUCCESS, (state, { payload: { savedPaymentMethods } }) => {
    const hasAvailableSavedCard = savedPaymentMethods.some(
      (savedPaymentMethod) => state.methods[savedPaymentMethod.paymentMethod].available,
    )

    if (!hasAvailableSavedCard) {
      state.selectedPaymentTab = PaymentTabs.NEW_PAYMENT_TAB
    }

    /* Set first saved card that is not disabled */
    state.selectedSavedPaymentMethod =
      savedPaymentMethods.find(
        (savedPaymentMethod) => !state.methods[savedPaymentMethod.paymentMethod].permanentlyDisabled,
      ) ?? null
  })
  builder.addCase(GET_PAYMENT_METHODS, (state) => {
    state.gettingPaymentMethods = true
    state.error = false
  })
  builder.addCase(GET_PAYMENT_METHODS_SUCCESS, (state, { payload }) => {
    state.gettingPaymentMethods = false
    state.error = false
    state.methods = setStatuses(payload.methods)
    state.selectedPaymentMethod =
      state.selectedPaymentMethod ??
      config.paymentMethodsOrder.find((method) => payload.methods[method].status === PaymentMethodStatus.AVAILABLE) ??
      null

    /* Load the PayPal or Apple Pay CTAs if they're selected by default */
    if (state.selectedPaymentMethod === PaymentMethod.PAYPAL) state.paymentLocation = config.paymentMethodRoutes.paypal
    if (state.selectedPaymentMethod === PaymentMethod.APPLE_PAY) {
      if (state.methods.APPLE_PAY.overMaxSpendLimit) state.applePayOverLimitWarning = true
      state.paymentLocation = config.paymentMethodRoutes.applePay
    }
  })
  builder.addCase(GET_PAYMENT_METHODS_FAILURE, setError)
  builder.addCase(ADD_PAYMENT, (state, { payload }) => {
    setSpecificAddPayment(state, getPaymentType(payload), true)
    state.error = false
    state.errorStatus = null
    state.giftCardError = initialState.giftCardError
    state.errors = initialState.errors
  })
  builder.addCase(ADD_PAYMENT_SUCCESS, (state, { payload }) => {
    setSpecificAddPayment(state, getPaymentType(payload), false)
    state.error = false
    setSpecificError(state, payload, false)
    state.numOfAddGiftCardAttempts = initialState.numOfAddGiftCardAttempts
  })
  builder.addCase(ADD_PAYMENT_FAILURE, (state, { payload }) => {
    setSpecificAddPayment(state, getPaymentType(payload), false)
    state.error = true

    if (!(payload.error instanceof Error)) {
      state.errorStatus = payload.error.status
    }

    setSpecificError(state, payload, true)
  })
  builder.addCase(SPECIFIC_GIFT_CARD_ERROR, (state, { payload: { error } }) => {
    state.giftCardError = error
  })
  builder.addCase(GENERIC_GIFT_CARD_ERROR, (state) => {
    state.numOfAddGiftCardAttempts += 1
  })
  builder.addCase(RESET_GIFT_CARD_ERRORS, (state) => {
    state.giftCardError = initialState.giftCardError
    state.numOfAddGiftCardAttempts = initialState.numOfAddGiftCardAttempts
  })
  builder.addCase(MODAL_OPEN, (state) => {
    state.giftCardError = null
    state.numOfAddGiftCardAttempts = initialState.numOfAddGiftCardAttempts
    state.deletePayment = initialState.deletePayment
  })
  builder.addCase(MODAL_CLOSE, (state) => {
    state.giftCardError = initialState.giftCardError
    state.numOfAddGiftCardAttempts = initialState.numOfAddGiftCardAttempts
    state.deletePayment = initialState.deletePayment
  })
  builder.addCase(RESET_PAYMENT_SUBMISSION, (state) => {
    state.addingPayment = initialState.addingPayment
    state.errors = initialState.errors
  })
  builder.addCase(PATCH_PAYMENT, (state) => {
    state.patchingPayment = true
    state.error = false
  })
  builder.addCase(PATCH_PAYMENT_SUCCESS, (state) => {
    state.patchingPayment = false
    state.error = false
  })
  builder.addCase(PATCH_PAYMENT_FAILURE, (state) => {
    state.patchingPayment = false
    state.error = true
  })
  builder.addCase(REQUEST_NEW_2FA_CODE, (state) => {
    state.patchingPayment = true
  })
  builder.addCase(DELETE_PAYMENT, (state, { payload: { id } }) => {
    state.deletePayment[id] = {
      deleting: true,
      error: false,
      numOfDeletePaymentAttempts: state.deletePayment[id]?.numOfDeletePaymentAttempts ?? 0,
    }
  })
  builder.addCase(
    DELETE_PAYMENT_SUCCESS,
    (
      state,
      {
        payload: {
          deletedPayment: { id },
        },
      },
    ) => {
      state.deletePayment[id] = {
        deleting: false,
        error: false,
        numOfDeletePaymentAttempts: 0,
      }
    },
  )
  builder.addCase(
    DELETE_PAYMENT_FAILURE,
    (
      state,
      {
        payload: {
          deletedPayment: { id },
        },
      },
    ) => {
      const previousDeletePayment = state.deletePayment[id]

      // this should never happen but typescript doesn't know this
      if (!previousDeletePayment) return

      state.deletePayment[id] = {
        deleting: false,
        error: true,
        numOfDeletePaymentAttempts: previousDeletePayment.numOfDeletePaymentAttempts + 1,
      }
    },
  )
  builder.addCase(GET_CREDIT_PLANS, (state) => {
    state.creditPlans = {
      ...initialState.creditPlans,
      attempts: state.creditPlans.attempts,
      loading: true,
    }
  })
  builder.addCase(GET_CREDIT_PLANS_SUCCESS, (state, { payload: { plans } }) => {
    const regularCreditPlans = plans.filter((plan): plan is ArgosCardCreditPlanAPI => plan.interestType !== 4)
    const monthlyPaymentPlan = plans.find((plan): plan is MonthlyPaymentCreditPlanAPI => plan.interestType === 4)
    state.creditPlans = {
      regularPlans: formatArgosCardCreditPlans(regularCreditPlans),
      monthlyPaymentPlan: formatMonthlyPaymentCreditPlan(monthlyPaymentPlan),
      error: initialState.creditPlans.error,
      loading: initialState.creditPlans.loading,
      attempts: initialState.creditPlans.attempts,
    }
  })
  builder.addCase(GET_CREDIT_PLANS_FAILURE, (state) => {
    state.creditPlans = {
      ...state.creditPlans,
      loading: initialState.creditPlans.loading,
      error: true,
      attempts: state.creditPlans.attempts + 1,
    }
  })
  builder.addCase(RESET_CREDIT_PLANS_ATTEMPTS, (state) => {
    state.creditPlans.attempts = initialState.creditPlans.attempts
  })
  builder.addCase(UPDATE_SELECTED_PAYMENT_TAB, (state, action) => {
    state.selectedPaymentTab = action.payload
    state.error = false
    state.errors = { ...initialState.errors }
  })
  builder.addCase(UPDATE_SELECTED_PAYMENT_METHOD, (state, { payload: { paymentMethod } }) => {
    state.loading = false
    state.selectedPaymentMethod = paymentMethod
    state.error = false
    state.applePayOverLimitWarning = initialState.applePayOverLimitWarning
    state.errors = { ...initialState.errors }
  })
  builder.addCase(UPDATE_SELECTED_SAVED_PAYMENT_METHOD, (state, action) => {
    state.selectedSavedPaymentMethod = action.payload
    state.error = false
    state.errors = { ...initialState.errors }
  })
  builder.addCase(SETUP_PAYMENT_METHOD, (state, { payload }) => {
    const { isAutomaticallyAddingPayment = false } = payload
    setSpecificAddPayment(state, getPaymentType(payload), true)
    setLoading(state)
    if (isAutomaticallyAddingPayment) state.isAutomated = true
    state.errors = { ...initialState.errors }
  })
  builder.addCase(SETUP_PAYMENT_METHOD_SUCCESS, (state) => {
    state.loading = false
    state.error = false
    state.isAutomated = false
  })
  builder.addCase(SETUP_PAYMENT_METHOD_FAILURE, (state, { payload: { isAutomaticallyAddingPayment = false } }) => {
    setError(state)
    if (!isAutomaticallyAddingPayment) state.isAutomated = false
  })
  builder.addCase(SETUP_PAYPAL_SESSION_SUCCESS, (state) => {
    setSpecificAddPayment(state, PaymentMethod.PAYPAL, false)
    state.loading = false
    state.error = false
    setSpecificError(state, { type: PaymentMethod.PAYPAL }, false)
  })
  builder.addCase(SETUP_PAYPAL_SESSION_FAILURE, (state) => {
    setSpecificAddPayment(state, PaymentMethod.PAYPAL, false)
    setError(state)
    setSpecificError(state, { type: PaymentMethod.PAYPAL }, true)
  })
  builder.addCase(APPLE_PAY_COMPATIBLE, (state) => {
    if (typeof state.deviceHasApplePay !== 'boolean' && window.ApplePaySession) {
      state.deviceHasApplePay = process.env.NODE_ENV === 'development' || window.ApplePaySession.canMakePayments()
    }
  })
  builder.addCase(APPLE_PAY_ACTIVE_CARD_SUCCESS, (state, { payload }) => {
    state.deviceHasApplePayActiveCard = payload
  })
  builder.addCase(APPLE_PAY_ACTIVE_CARD_FAILURE, (state) => {
    state.deviceHasApplePayActiveCard = process.env.NODE_ENV === 'development' || null
  })
  builder.addCase(APPLE_PAY_BEGIN, (state) => {
    setSpecificAddPayment(state, PaymentMethod.APPLE_PAY, false)
    setSpecificError(state, { type: PaymentMethod.APPLE_PAY }, false)
  })
  builder.addCase(APPLE_PAY_FAILURE, (state) => {
    setSpecificAddPayment(state, PaymentMethod.APPLE_PAY, false)
    setSpecificError(state, { type: PaymentMethod.APPLE_PAY }, true)
  })
  builder.addCase(DATACASH_RESIZE, (state, { payload }) => {
    state.datacashIframeHeight = payload.scrollHeight
  })
  builder.addCase(CHANGE_PAYMENT_LOCATION, (state, action) => {
    state.paymentLocation = action.payload
  })
  builder.addCase(RESET_PAYMENT_OPTIONS_VIEW, (state) => {
    if (
      state.selectedPaymentMethod !== PaymentMethod.PAYPAL &&
      state.selectedPaymentMethod !== PaymentMethod.APPLE_PAY
    ) {
      state.paymentLocation = '/'
      state.applePayOverLimitWarning = initialState.applePayOverLimitWarning
      state.creditPlans.regularPlans = initialState.creditPlans.regularPlans
    }
  })
  builder.addCase(RESET_PAYMENT_TABS, (state) => {
    state.paymentLocation = initialState.paymentLocation
    setSelectedPaymentMethod(state)
  })
  builder.addCase(DATACASH_LOADED, (state, action) => {
    if (action.payload) state.activeAccordionPaymentMethod = null
    state.datacashLoaded = action.payload
  })
  builder.addCase(SET_ACTIVE_ACCORDION_PAYMENT_METHOD, (state, { payload }) => {
    setSpecificAddPayment(state, getPaymentType(payload), false)
    state.activeAccordionPaymentMethod = payload.paymentMethod
    state.creditPlans = {
      ...state.creditPlans,
      error: initialState.creditPlans.error,
      attempts: initialState.creditPlans.attempts,
    }
  })
  builder.addCase(SET_FEATURES, (state, { payload }) => {
    state.features = {
      paypalFallback: payload.paypalFallback,
    }

    // state.methods does not contain payment methods until GET_PAYMENT_METHODS_SUCCESS
    // is dispatched following the GET_COLLECTION_SNAPSHOT action being dispatched
    if (Object.keys(state.methods).length > 0) {
      // This is needed so that we know if we should skip the Credit/Debit radio option
      // if it is temporarily disabled, as this depends on the paypalFallback feature flag.
      setSelectedPaymentMethod(state)
    }

    /* Set first saved card that is not disabled */

    if (
      payload.argosCardOnly &&
      state.selectedSavedPaymentMethod?.token &&
      state.selectedSavedPaymentMethod?.token.length < 30
    ) {
      state.selectedSavedPaymentMethod = null
    }
  })
  builder.addCase(START_CREDIT_APPLICATION, (state, { payload }) => {
    state.creditApplications[payload.creditType].loading = true
  })
  builder.addCase(START_CREDIT_APPLICATION_FAILURE, (state, { payload }) => {
    state.creditApplications[payload.creditType].loading = false
    state.creditApplications[payload.creditType].numberOfAttempts += 1
  })
  builder.addCase(RESET_CREDIT_APPLICATION, (state) => {
    state.creditApplications[PaymentMethod.CREDIT_CAPE2] = initialState.creditApplications[PaymentMethod.CREDIT_CAPE2]
    state.creditApplications[PaymentMethod.CREDIT_MPP] = initialState.creditApplications[PaymentMethod.CREDIT_MPP]
  })
})

export default paymentsReducer
