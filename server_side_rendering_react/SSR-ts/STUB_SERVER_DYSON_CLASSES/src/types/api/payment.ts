import { ErrorResponse } from './errorResponse'

export enum PaymentMethod {
  CARD_DEBIT = 'CARD_DEBIT',
  CARD_ARGOS_CREDIT = 'CARD_ARGOS_CREDIT',
  PAYPAL = 'PAYPAL',
  APPLE_PAY = 'APPLE_PAY',
  CARD_NECTAR_SPEND = 'CARD_NECTAR_SPEND',
  CARD_GIFT_ARGOS = 'CARD_GIFT_ARGOS',
  CARD_GIFT_FLEXECASH = 'CARD_GIFT_FLEXECASH',
  CREDIT_CAPE2 = 'CREDIT_CAPE2',
  CREDIT_MPP = 'CREDIT_MPP',
}

export type CreditPaymentMethod = PaymentMethod.CREDIT_CAPE2 | PaymentMethod.CREDIT_MPP

export type GiftCardPaymentMethod = PaymentMethod.CARD_GIFT_ARGOS | PaymentMethod.CARD_GIFT_FLEXECASH

export enum PaymentMethodStatus {
  AVAILABLE = 'AVAILABLE',
  TEMPORARILY_DISABLED = 'TEMPORARILY_DISABLED',
  PAYMENT_COMPLETE = 'PAYMENT_COMPLETE',
  INCOMPATIBLE = 'INCOMPATIBLE',
  PERMANENTLY_DISABLED = 'PERMANENTLY_DISABLED',
  OVER_SPEND_LIMIT = 'OVER_SPEND_LIMIT',
  OVER_MAX_SPEND_LIMIT = 'OVER_MAX_SPEND_LIMIT',
  UNDER_MIN_SPEND_LIMIT = 'UNDER_MIN_SPEND_LIMIT',
  MAX_LIMIT_REACHED = 'MAX_LIMIT_REACHED',
}

export interface PaymentMethodsAPIPayload {
  methods: {
    [method in PaymentMethod]: {
      status: PaymentMethodStatus
      incompatibleWith: PaymentMethod[]
    }
  }
}

/**
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/payments#creditapplicationstatus)
 */
export enum CreditApplicationStatus {
  FAILED = 'FAILED',
  INITIALISED = 'INITIALISED',
  COMPLETED = 'COMPLETED',
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/prepay.paymentmethods.get.html#status-codes)
 */
enum GetPaymentMethodsAPIErrorAdvice {
  ORDER_SNAPSHOT_NOT_FOUND = 'ORDER_SNAPSHOT_NOT_FOUND',
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/prepay.payment.add.html#status-codes)
 */
export enum AddPaymentAPIErrorAdvice {
  // Validation Error (Status 400)
  PAYMENT_NOT_INITIALISED = 'PAYMENT_NOT_INITIALISED',
  PAYMENT_INVALID_AMOUNT = 'PAYMENT_INVALID_AMOUNT',
  PAYMENT_INVALID_CURRENCY = 'PAYMENT_INVALID_CURRENCY',
  PAYMENT_MISSING_PURCHASE_ORDER_NUMBER = 'PAYMENT_MISSING_PURCHASE_ORDER_NUMBER',
  PAYMENT_INVALID_PURCHASE_ORDER_NUMBER = 'PAYMENT_INVALID_PURCHASE_ORDER_NUMBER',
  PAYMENT_MISSING_CREDIT_PLAN_ID = 'PAYMENT_MISSING_CREDIT_PLAN_ID',
  PAYMENT_INCOMPATIBLE_PAYMENT_METHODS = 'PAYMENT_INCOMPATIBLE_PAYMENT_METHODS',
  PAYMENT_METHOD_NOT_AVAILABLE = 'PAYMENT_METHOD_NOT_AVAILABLE',
  PAYMENT_METHOD_DISABLED = 'PAYMENT_METHOD_DISABLED',
  PAYMENT_ALREADY_COMPLETE = 'PAYMENT_ALREADY_COMPLETE',
  PAYMENT_GIFT_CARD_EXISTS = 'PAYMENT_GIFT_CARD_EXISTS',
  PAYMENT_GIFT_CARD_INVALID = 'PAYMENT_GIFT_CARD_INVALID',
  PAYMENT_MAX_LIMIT_REACHED = 'PAYMENT_MAX_LIMIT_REACHED',
  PAYMENT_INVALID_PAYMENT_METHOD = 'PAYMENT_INVALID_PAYMENT_METHOD',
  PAYMENT_MISSING_SAVED_PAYMENT_METHOD_FIELD = 'PAYMENT_MISSING_SAVED_PAYMENT_METHOD_FIELD',
  PAYMENT_MISSING_VALIDATION_URL = 'PAYMENT_MISSING_VALIDATION_URL',
  PAYMENT_OVER_SPEND_LIMIT = 'PAYMENT_OVER_SPEND_LIMIT',
  PAYMENT_INSUFFICIENT_BALANCE = 'PAYMENT_INSUFFICIENT_BALANCE',

  // Status 424
  PAYMENT_REJECTED = 'PAYMENT_REJECTED',

  // Internal Server Error (Status 500)
  PAYMENT_SERVICE_ERROR = 'PAYMENT_SERVICE_ERROR',

  // Conflict (Status 409)
  ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED = 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/prepay.payment.patch.html#status-codes)
 */
export enum PatchPaymentAPIErrorAdvice {
  // Validation Error (Status 400)
  PAYMENT_INVALID_AMOUNT = 'PAYMENT_INVALID_AMOUNT',
  PAYMENT_INVALID_TWO_FA_CODE = 'PAYMENT_INVALID_TWO_FA_CODE',
  PAYMENT_INSUFFICIENT_BALANCE = 'PAYMENT_INSUFFICIENT_BALANCE',
  PAYMENT_TWO_FA_REQUIRED = 'PAYMENT_TWO_FA_REQUIRED',
  PAYMENT_UNSUPPORTED_OPERATION = 'PAYMENT_UNSUPPORTED_OPERATION',
  PAYMENT_ALREADY_COMPLETE = 'PAYMENT_ALREADY_COMPLETE',
  PAYMENT_INCOMPATIBLE_PAYMENT_METHODS = 'PAYMENT_INCOMPATIBLE_PAYMENT_METHODS',
  PAYMENT_METHOD_NOT_AVAILABLE = 'PAYMENT_METHOD_NOT_AVAILABLE',
  PAYMENT_INVALID_STATUS = 'PAYMENT_INVALID_STATUS',

  // Not Found Error (Status 404)
  ORDER_SNAPSHOT_UPDATE_NOT_FOUND = 'ORDER_SNAPSHOT_UPDATE_NOT_FOUND',
  PAYMENT_NOT_FOUND = 'PAYMENT_NOT_FOUND',

  // Conflict Error (Status 409)
  ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED = 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',

  // Internal Server Error (Status 500)
  SERVICE_UNREACHABLE = 'SERVICE_UNREACHABLE',

  // Gateway Timeout (Status 504)
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
}

/**
 * [Gitbook](https://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/checkout.payment.delete.html#status-codes)
 */
export enum DeletePaymentAPIErrorAdvice {
  // Validation Error (Status 400)
  PAYMENT_INVALID_STATUS = 'PAYMENT_INVALID_STATUS',

  // Not Found Error (Status 404)
  ORDER_SNAPSHOT_UPDATE_NOT_FOUND = 'ORDER_SNAPSHOT_UPDATE_NOT_FOUND',
  PAYMENT_NOT_FOUND = 'PAYMENT_NOT_FOUND',

  // Conflict (Status 409)
  ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED = 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',

  // Internal Server Error (Status 500)
  SERVICE_UNREACHABLE = 'SERVICE_UNREACHABLE',

  // Gateway Timeout (Status 504)
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
}

export type AddPaymentAPIErrorResponse = ErrorResponse<AddPaymentAPIErrorAdvice>
export type PatchPaymentAPIErrorResponse = ErrorResponse<PatchPaymentAPIErrorAdvice>
export type GetPaymentMethodsAPIErrorResponse = ErrorResponse<GetPaymentMethodsAPIErrorAdvice>
