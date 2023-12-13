import { createAction } from '@reduxjs/toolkit'
import { GetWalletAPIPayload } from 'types/api'

export const GET_WALLET_SUCCESS = createAction<GetWalletAPIPayload>('GET_WALLET_SUCCESS')
export const GET_WALLET_FAILURE = createAction('GET_WALLET_FAILURE')
