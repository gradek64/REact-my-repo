import { StatusCode } from '../api/StatusCodes'
import { ApplePayPaymentDeviceType } from '../sagas/applePay'
import { FulfilmentType } from '../api'

type PlaceOrderApplePaySession = Pick<
  ApplePayJS.ApplePayPaymentToken,
  Exclude<keyof ApplePayJS.ApplePayPaymentToken, 'paymentMethod'>
>

export interface ExtendOrderActionPayload {
  fulfilmentType: FulfilmentType
  email: string
  shipmentNumber: string
}

export interface ExtendOrderSuccessActionPayload {
  shipmentNumber: string
}
export interface ExtendOrderFailureActionPayload {
  shipmentNumber: string
  error: {
    status: StatusCode
  }
}

interface PlaceOrderApplePayPayload extends PlaceOrderApplePaySession {
  deviceType: ApplePayPaymentDeviceType
  deviceOperatingSystem: string
}
export interface PlaceOrderActionPayload {
  payPalNonce?: string
  applePay?: PlaceOrderApplePayPayload
  cookie?: string
  creditClaimToken?: string
  hasArgosCardApplication?: boolean
  hasMonthlyPaymentPlanApplication?: boolean
}
export interface PlaceOrderFailureActionPayload {
  hasArgosCardApplicationPayment: boolean
  hasMonthlyPaymentPlanApplicationPayment: boolean
  errorDetails: {
    advice: string
    promoCode: string
  }
}

export interface GetOrderConfirmationActionPayload {
  cookie?: string
  orderId: string
}

export interface GetOrderRetrievalActionPayload {
  cookie?: string
  orderId: string
  customerId?: string
}

export interface VatReceiptLinkActionPayload {
  retailer: string
  identifier: string
  wcs_user_id: string
  transaction_ids: string[]
}

export interface VatReceiptSuccessLinkActionPayload {
  url: string
}

export interface VatReceiptFailureLinkActionPayload {
  error: {
    status: StatusCode
  }
}

export interface GetOrderFailureActionPayload {
  error: {
    status: StatusCode
  }
}

export interface CancelOrderActionPayload {
  fulfilmentType: FulfilmentType
  email: string
  shipmentNumber?: string
}
export interface CancelOrderSuccessActionPayload {
  shipmentNumber?: string
}
export interface CancelOrderFailureActionPayload {
  shipmentNumber: string
  error: {
    status: StatusCode
  }
}
