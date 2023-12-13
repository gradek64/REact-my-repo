import nectarReducer, { initialState } from './nectarReducer'

import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  START_GUEST_CHECKOUT_SUCCESS,
  UPDATE_NECTAR,
  UPDATE_NECTAR_SUCCESS,
  UPDATE_NECTAR_FAILURE,
  MODAL_CLOSE,
  TOGGLE_2FA_REQUIRED,
  INVALID_2FA_CODE,
  RESET_INVALID_2FA_CODE_ERROR,
  REQUEST_NEW_2FA_CODE,
  REQUEST_NEW_2FA_CODE_ERROR,
  NECTAR_INSUFFICIENT_BALANCE,
  RESET_NECTAR_INSUFFICIENT_BALANCE,
} from '../../actions'

const snapshotLinked = {
  nectar: {
    isLinked: true,
    baseEarnPoints: 100,
    promotionEarnPoints: 10,
  },
}

const snapshotNonLinked = {
  nectar: {
    isLinked: false,
    baseEarnPoints: 0,
    promotionEarnPoints: 0,
  },
}

const snapshotNectarCardAdded = {
  nectar: {
    isLinked: true,
    baseEarnPoints: 100,
    promotionEarnPoints: 10,
    card: {
      token: 'token',
      last4Digits: '1234',
    },
  },
}

test('When initialising a snapshot for a linked nectar user', () => {
  const newState = nectarReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: snapshotLinked }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: true,
    totalEarnPoints: 110,
  })
})

test('When initialising a snapshot for a non-linked nectar user', () => {
  const newState = nectarReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: snapshotNonLinked }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: false,
    totalEarnPoints: 0,
  })
})

test('When initialising a snapshot and the nectar state is missing (e.g. due to api feature toggle being off)', () => {
  const newState = nectarReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: {} }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: null,
    totalEarnPoints: 0,
  })
})

test('When initialising a snapshot for a guest user, by default nectar is not defined', () => {
  const newState = nectarReducer(initialState, START_GUEST_CHECKOUT_SUCCESS({ snapshot: {} }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: null,
    totalEarnPoints: 0,
  })
})

test('When getting a snapshot for a linked nectar user', () => {
  const newState = nectarReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: snapshotLinked }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: true,
    totalEarnPoints: 110,
  })
})

test('When getting a snapshot for a non-linked nectar user', () => {
  const newState = nectarReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: snapshotNonLinked }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: false,
    totalEarnPoints: 0,
  })
})

test('When getting a snapshot for a guest user that has a linked and added nectar card', () => {
  const newState = nectarReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: snapshotNectarCardAdded }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: true,
    totalEarnPoints: 110,
    card: {
      last4Digits: '1234',
      token: 'token',
    },
  })
})

test('When getting a snapshot and the nectar state is missing (e.g. due to api feature toggle being off)', () => {
  const newState = nectarReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: {} }))
  expect(newState).toEqual({
    ...initialState,
    isLinked: null,
    totalEarnPoints: 0,
  })
})

test('When a nectar payment is attempted, should set the state to adding', () => {
  const newState = nectarReducer(initialState, UPDATE_NECTAR())
  expect(newState.error).toEqual(false)
  expect(newState.numOfAddNectarAttempts).toEqual(0)
  expect(newState.updatingNectar).toEqual(true)
})

test('When a nectar payment is patched successfully, should reset the error and number of attempts', () => {
  const newState = nectarReducer(initialState, UPDATE_NECTAR_SUCCESS())
  expect(newState.error).toEqual(false)
  expect(newState.numOfAddNectarAttempts).toEqual(0)
  expect(newState.updatingNectar).toEqual(false)
})

test('When a modal is closed, the nectar state should be reset', () => {
  // State set to failure
  const firstState = nectarReducer(initialState, UPDATE_NECTAR_FAILURE())
  expect(firstState.error).toEqual(true)
  expect(firstState.numOfAddNectarAttempts).toEqual(1)
  expect(firstState.updatingNectar).toEqual(false)

  const firstStateReset = nectarReducer(firstState, MODAL_CLOSE())
  expect(firstStateReset).toEqual(initialState)

  const secondState = nectarReducer(
    {
      ...initialState,
      numOfAddNectarAttempts: 1,
    },
    TOGGLE_2FA_REQUIRED({
      sentBy: 'sms',
      sentTo: '0******989',
      needs2fa: true,
    }),
  )
  expect(secondState.needs2fa).toBe(true)
  expect(secondState.numOfAddNectarAttempts).toEqual(0)

  const secondStateReset = nectarReducer(secondState, MODAL_CLOSE())
  expect(secondStateReset).toEqual(initialState)

  const thirdState = nectarReducer(initialState, INVALID_2FA_CODE())
  expect(thirdState.invalid2faCode).toBe(true)

  const thirdStateReset = nectarReducer(thirdState, MODAL_CLOSE())
  expect(thirdStateReset).toEqual(initialState)

  const fourthState = nectarReducer(initialState, NECTAR_INSUFFICIENT_BALANCE())
  expect(fourthState).toEqual({ ...initialState, insufficientBalanceError: true, error: true })

  const fourthStateReset = nectarReducer(fourthState, MODAL_CLOSE())
  expect(fourthStateReset).toEqual(initialState)
})

test('When a nectar payment patch fails , should add an error and increase the number of attempts', () => {
  const newState = nectarReducer(initialState, UPDATE_NECTAR())
  expect(newState.error).toEqual(false)
  expect(newState.numOfAddNectarAttempts).toEqual(0)
  expect(newState.updatingNectar).toEqual(true)

  const firstState = nectarReducer(newState, UPDATE_NECTAR_FAILURE())
  expect(firstState.error).toEqual(true)
  expect(firstState.numOfAddNectarAttempts).toEqual(1)
  expect(firstState.updatingNectar).toEqual(false)

  // Second failure should increase the count
  const secondState = nectarReducer(firstState, UPDATE_NECTAR_FAILURE())
  expect(secondState.error).toEqual(true)
  expect(secondState.numOfAddNectarAttempts).toEqual(2)
  expect(firstState.updatingNectar).toEqual(false)

  // Success should reset the state
  const finalState = nectarReducer(secondState, UPDATE_NECTAR_SUCCESS())
  expect(finalState.error).toEqual(false)
  expect(finalState.numOfAddNectarAttempts).toEqual(0)
  expect(firstState.updatingNectar).toEqual(false)
})

test('When a nectar payment patch fails due to 2fa', () => {
  const newState = nectarReducer(
    initialState,
    TOGGLE_2FA_REQUIRED({
      sentBy: 'sms',
      sentTo: '0******989',
      needs2fa: true,
    }),
  )

  const expectedState = {
    ...initialState,
    sentBy: 'sms',
    sentTo: '0******989',
    needs2fa: true,
  }

  expect(newState).toEqual(expectedState)
})

test('When requesting a new 2fa code having already submitted an invalid one', () => {
  const required2faState = nectarReducer(
    initialState,
    TOGGLE_2FA_REQUIRED({
      sentBy: 'sms',
      sentTo: '0******989',
      needs2fa: true,
    }),
  )

  const invalid2faState = nectarReducer(required2faState, INVALID_2FA_CODE())

  const newState = nectarReducer(invalid2faState, REQUEST_NEW_2FA_CODE())

  expect(newState).toEqual({
    ...newState,
    invalid2faCode: false,
  })
})

test('When requesting a new 2fa code and there is an error', () => {
  const newState = nectarReducer(initialState, REQUEST_NEW_2FA_CODE_ERROR())
  expect(newState).toEqual({ ...initialState, requestCodeError: true })
})

test('When a nectar 2fa payment patch has submitted successfuly', () => {
  const newState = nectarReducer(
    initialState,
    TOGGLE_2FA_REQUIRED({
      needs2fa: false,
    }),
  )

  const expectedState = {
    ...initialState,
    needs2fa: false,
  }

  expect(newState).toEqual(expectedState)
})

test('When a nectar 2fa payment patch has submitted unsuccessfuly due to invalid 2fa code', () => {
  const updateNectarState = nectarReducer(initialState, UPDATE_NECTAR())
  expect(updateNectarState).toEqual({ ...initialState, updatingNectar: true })

  const invalid2faState = nectarReducer(initialState, INVALID_2FA_CODE())
  expect(invalid2faState).toEqual({ ...initialState, invalid2faCode: true, updatingNectar: false })
})

test('When nectar has an invalid 2fa code and reset invalid 2fa code error has been triggered', () => {
  const invalid2faState = nectarReducer(initialState, INVALID_2FA_CODE())
  const newState = nectarReducer(invalid2faState, RESET_INVALID_2FA_CODE_ERROR())
  expect(newState).toEqual(initialState)
})

test('When nectar has an invalid 2fa code and a new 2fa code request has been triggered', () => {
  const invalid2faState = nectarReducer(initialState, INVALID_2FA_CODE())

  const newState = nectarReducer(invalid2faState, RESET_INVALID_2FA_CODE_ERROR())
  expect(newState).toEqual(initialState)
})

test('When requesting a new 2fa code it should clear insufficient balance error', () => {
  const newState = nectarReducer({ ...initialState, insufficientBalanceError: true }, REQUEST_NEW_2FA_CODE())
  expect(newState).toEqual(initialState)
})

test('When there is an insufficient nectar balance', () => {
  const newState = nectarReducer({ ...initialState, updatingNectar: true }, NECTAR_INSUFFICIENT_BALANCE())
  expect(newState).toEqual({ ...initialState, insufficientBalanceError: true, error: true })
})

test('When reseting insufficient nectar balance', () => {
  const newState = nectarReducer(
    { ...initialState, error: true, insufficientBalanceError: true },
    RESET_NECTAR_INSUFFICIENT_BALANCE(),
  )
  expect(newState).toEqual(initialState)
})
