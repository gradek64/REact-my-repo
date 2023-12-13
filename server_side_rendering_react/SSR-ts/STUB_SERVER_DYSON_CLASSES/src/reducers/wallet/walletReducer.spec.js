import walletReducer, { initialState } from './walletReducer'

import { GET_WALLET_SUCCESS, GET_WALLET_FAILURE } from '../../actions'

const walletMockData = {
  savedPaymentMethods: [
    {
      paymentMethod: 'CARD_DEBIT',
      token: '1111222233334444',
      cardHolderName: 'Mrs Poison Ivy',
      last4Digits: '1234',
      expiryDate: '01/32',
      cardType: 'VISAC',
    },
  ],
}

test('When successfully getting wallet, it should save the saved payment methods returned', () => {
  const newState = walletReducer(initialState, GET_WALLET_SUCCESS(walletMockData))

  expect(newState).toEqual({
    error: false,
    savedPaymentMethods: walletMockData.savedPaymentMethods,
    status: 'resolved',
  })
})

test('When failing to get wallet, it should set an error', () => {
  const mockError = { message: 'something went wrong' }
  const newState = walletReducer(initialState, GET_WALLET_FAILURE(mockError))

  expect(newState).toEqual({
    error: true,
    savedPaymentMethods: [],
    status: 'rejected',
  })
})
