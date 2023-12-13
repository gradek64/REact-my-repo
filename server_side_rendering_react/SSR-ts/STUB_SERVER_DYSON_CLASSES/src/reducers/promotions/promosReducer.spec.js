import promosReducer, { initialState } from './promosReducer'
import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  ADD_PROMO,
  ADD_PROMO_SUCCESS,
  ADD_PROMO_FAILURE,
  ADD_PROMO_SPECIFIC_FAILURE,
  RESET_PROMO_ERRORS,
  MODAL_CLOSE,
  MODAL_OPEN,
  DELETE_PROMO,
  DELETE_PROMO_FAILURE,
  START_GUEST_CHECKOUT_SUCCESS,
} from '../../actions'

const initAction = { type: '', payload: undefined }

const mockPromos = [
  {
    type: 'PROMOTION_TYPE_CODE',
    reference: 'DISCOUNT10',
    amount: 10,
    message: '10% off order total',
    deleting: false,
    deleteError: false,
  },
]

const snapshot = {
  promotions: mockPromos,
}

const addLoadingState = {
  ...initialState,
  addingPromo: true,
}

const addErrorState = {
  ...initialState,
  addingPromo: false,
  addPromoError: 'Test',
}

const deleteLoadingState = {
  ...initialState,
  added: [{ ...mockPromos[0], deleting: true, deleteError: false }],
}

const deleteErrorState = {
  ...initialState,
  added: [{ ...mockPromos[0], deleting: false, deleteError: true }],
}

const promoAttemptsState = {
  ...initialState,
  numOfAddPromoAttempts: 1,
}

const mockError = { message: 'something went wrong' }

describe('When the page is first loaded', () => {
  it('should set an initial state', () => {
    expect(promosReducer(undefined, initAction)).toEqual(initialState)
  })

  describe('and the promos data is loaded', () => {
    it('should save it', () => {
      const newState = promosReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot }))
      expect(newState).toEqual({ ...initialState, added: mockPromos })
    })
  })
})

describe('When the page is re-loaded', () => {
  describe('and the basket data is loaded', () => {
    it('should save it', () => {
      const newState = promosReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot }))
      expect(newState).toEqual({ ...initialState, added: mockPromos })
    })
  })
})

describe('When adding a promotion', () => {
  it('should start loading the payment method data and remove any existing errors', () => {
    const prevState = addErrorState
    const newState = promosReducer(prevState, ADD_PROMO())
    expect(newState.error).toBeFalsy()
    expect(newState.addPromoError).toBeNull()
    expect(newState.addingPromo).toBeTruthy()
  })

  describe('and the request is successful', () => {
    let newState

    beforeAll(() => {
      const prevState = {
        ...addLoadingState,
        methods: [],
      }
      newState = promosReducer(prevState, ADD_PROMO_SUCCESS())
    })

    it('should stop loading', () => {
      expect(newState.addingPromo).toEqual(false)
    })

    it('should reset the number of attempts counter', () => {
      expect(newState.numOfAddPromoAttempts).toEqual(0)
    })
  })

  describe('and the request is unsuccessful', () => {
    const prevState = addErrorState

    it('should stop loading', () => {
      const newState = promosReducer(prevState, ADD_PROMO_FAILURE(mockError))
      expect(newState.addingPromo).toEqual(false)
    })

    it('should increment the number of attempts counter', () => {
      const newState = promosReducer(prevState, ADD_PROMO_FAILURE(mockError))
      expect(newState.numOfAddPromoAttempts).toEqual(1)
    })

    describe('and the modal is closed', () => {
      it('should reset any errors', () => {
        const promosAttemptAndInvalidPromoState = promosReducer(
          promoAttemptsState,
          ADD_PROMO_SPECIFIC_FAILURE({ error: 'testString' }),
        )
        const modalCloseState = promosReducer(promosAttemptAndInvalidPromoState, MODAL_CLOSE())
        expect(modalCloseState).toEqual({
          ...initialState,
          numOfAddPromoAttempts: 0,
          addPromoError: null,
        })
      })
    })
  })
})

test('When an add promotion fails due to a specific promo code, changing the input clears the error', () => {
  const addPromoState = promosReducer(initialState, ADD_PROMO())
  expect(addPromoState).toEqual({ ...initialState, addingPromo: true })

  const specificPromoErrorState = promosReducer(initialState, ADD_PROMO_SPECIFIC_FAILURE({ advice: 'thisisatest' }))
  expect(specificPromoErrorState).toEqual({ ...initialState, addPromoError: 'thisisatest', addingPromo: false })

  const newState = promosReducer({ ...initialState, addPromoError: 'thisisatest' }, RESET_PROMO_ERRORS())
  expect(newState).toEqual(initialState)
})

test('When the modal opens action dispatch', () => {
  const openModal = promosReducer({ ...initialState, addPromoError: 'Testing' }, MODAL_OPEN())
  expect(openModal).toEqual(initialState)
})

describe('When deleting a promotion', () => {
  it('should remove existing errors and indicate that deleting has started', () => {
    const prevState = { ...initialState, added: mockPromos }
    const newState = promosReducer(prevState, DELETE_PROMO({ reference: mockPromos[0].reference }))
    expect(newState.added).toEqual(deleteLoadingState.added)
  })

  describe('and the request is unsuccessful', () => {
    const prevState = { ...initialState, added: mockPromos }

    it('should stop loading and indicate there was an error', () => {
      const newState = promosReducer(
        prevState,
        DELETE_PROMO_FAILURE({ ...mockError, reference: mockPromos[0].reference }),
      )
      expect(newState.added).toEqual(deleteErrorState.added)
    })

    describe('and the modal is closed', () => {
      it('should reset any errors', () => {
        const promosAttemptAndInvalidPromoState = promosReducer(
          { ...initialState, added: mockPromos },
          DELETE_PROMO_FAILURE({ error: 'testString', reference: mockPromos[0].reference }),
        )
        const modalCloseState = promosReducer(promosAttemptAndInvalidPromoState, MODAL_CLOSE())
        expect(modalCloseState).toEqual({
          ...initialState,
          added: [{ ...mockPromos[0], deleting: false, deleteError: false }],
          numOfAddPromoAttempts: 0,
          addPromoError: null,
        })
      })
    })
  })
})

test('When START_GUEST_CHECKOUT_SUCCESS is dispatched, Then should set added promotions in state', () => {
  const newState = promosReducer(initialState, START_GUEST_CHECKOUT_SUCCESS({ snapshot }))
  expect(newState).toEqual({ ...initialState, added: mockPromos })
})
