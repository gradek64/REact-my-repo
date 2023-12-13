import { ErrorResponse } from '../errorResponse'
import { PaymentMethod } from '../payment'

export type SaveablePaymentMethod = PaymentMethod.CARD_DEBIT | PaymentMethod.CARD_ARGOS_CREDIT

/**
 * A payment method saved into a user's account.
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/account/types/wallet.html#walletresponse)
 */
export interface SavedPaymentMethod {
  paymentMethod: SaveablePaymentMethod
  cardHolderName: string
  cardType: string
  last4Digits: string
  expiryDate: string
  token: string
}

export enum GetWalletAPIErrorAdvice {
  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
  REQUEST_REJECTED = 'REQUEST_REJECTED',
  REQUEST_UNAUTHORIZED = 'REQUEST_UNAUTHORIZED',
  ACCOUNT_SERVICE_ERROR = 'ACCOUNT_SERVICE_ERROR',
  MISSING_COOKIES = 'MISSING_COOKIES',
}

/**
 * Get Wallet successful response
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/account/types/wallet.html#walletresponse)
 */
export type GetWalletAPIPayload = {
  savedPaymentMethods: SavedPaymentMethod[]
}

/**
 * Get Wallet error response
 *
 * **MISSING GITBOOK**
 */
export type GetWalletErrorAPIPayload = ErrorResponse<GetWalletAPIErrorAdvice>
