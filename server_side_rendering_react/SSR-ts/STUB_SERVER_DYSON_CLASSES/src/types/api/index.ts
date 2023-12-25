import { Response } from 'superagent'

/**
 * Account API
 */
export type {
  GetWalletAPIPayload,
  GetWalletErrorAPIPayload,
  SavedPaymentMethod,
  SaveablePaymentMethod,
} from './account/wallet'

export type {
  AccountAddress,
  AccountAddressPerson,
  AccountAddressLines,
  UpdateAccountAddressAPIResponse,
} from './account/address'

export type { CreateUserAccountReqBody } from './account/user'

// enums
export { GetWalletAPIErrorAdvice } from './account/wallet'

export { CustomerType } from './account/address'

/**
 * Session Manager
 */
export type {
  CreateAnonymousSessionAPIRequest,
  CreateAnonymousSessionAPIResponse,
  CreateSessionResponsePayload,
} from './session/session'

/**
 * NOT
 * UPDATED
 * YET
 */

export type { ArgosCardCreditPlanAPI, MonthlyPaymentCreditPlanAPI, CreditPlanAPIPayload } from './creditPlans'
export type { AddressErrorPayload, Lines, Person } from './customer'
export type {
  ConfirmationProduct,
  PlaceOrderSuccessAPIPayload,
  GetOrderRetrievalSuccessAPIPayload,
  GetOrderConfirmationSuccessAPIPayload,
  OrderLine,
  OrderTimeWindow,
  Shipment,
  OrderConfirmationResponseSuccessProps,
  OrderResponseErrorProps,
  Fulfilment,
  OrderAmounts,
  OrderAddress,
  OrderAdvice,
  GuestRetrievalFulfilment,
  OrderConfirmationShipment,
  OrderRetrievalShipment,
  OrderRetrievalResponseSuccessProps,
  SendOrderDataToAdManagerPayload,
} from './order'
export type {
  PaymentMethodsAPIPayload,
  GiftCardPaymentMethod,
  CreditPaymentMethod,
  GetPaymentMethodsAPIErrorResponse,
  AddPaymentAPIErrorResponse,
} from './payment'
export type { Store } from './store'
export type {
  ProductIncludeFlags,
  GetOutOfStockProductInfoPayload,
  GetProductsAPIPayload,
  OutOfStockProductInfo,
  ProductMeta,
  ProductIncludeBreadcrumb,
  ProductIncludePrice,
  ProductIncludeBadge,
  ProductIncludeLegalText,
  ProductInclude,
  ProductError,
  ProductChannel,
  ProductData,
} from './product'
export type {
  GetSnapshotAPIPayload,
  InitSnapshotAPIPayload,
  StockHold,
  OrderSource,
  Amounts as SnapshotAmounts,
  PrepareForCheckoutAPIRequest,
  StockHoldInfo as SnapshotStockHoldInfo,
  Shipment as SnapshotShipment,
  Line as SnapshotLine,
  Product as SnapshotProduct,
  Total as SnapshotTotal,
  Slot,
  NonBookableSlot,
  ItemDeliveryInfo,
  SnapshotCustomer,
  SnapshotAddress,
  SnapshotDeliveryAddress,
  OrderCharge,
  DeliveryFlags,
} from './snapshot'
export type {
  SnapshotPromotion,
  AddPromotionAPIErrorResponse,
  DeletePromotionAPIErrorResponse,
  AddPromotionAPIResponse,
  DeletePaymentAPIResponse,
} from './promotions'
export type { GetUserInfoAPIPayload } from './userInfo'

export { AddressValidationErrorAdvice } from './customer'
export {
  InitSnapshotAPIErrorAdvice,
  InitSnapshotAPINonFatalErrorAdvice,
  GetSnapshotAPIErrorAdvice,
  PrepareForCheckoutAPIErrorAdvice,
} from './errorResponse'
export type { ErrorResponse } from './errorResponse'
export {
  PlaceOrderErrorDetailsAdvice,
  OrderSnapshotStatus,
  FulfilmentStatus,
  FulfilmentLocationType,
  ShipmentStatusType,
  OrderAdviceInfo,
  OrderAdviceType,
} from './order'
export {
  PaymentMethod,
  PaymentMethodStatus,
  CreditApplicationStatus,
  AddPaymentAPIErrorAdvice,
  PatchPaymentAPIErrorAdvice,
  DeletePaymentAPIErrorAdvice,
} from './payment'
export { ProductAPIFlags } from './product'
export { PromotionType, AddPromotionAPIErrorAdvice, DeletePromotionAPIErrorAdvice } from './promotions'
export { StatusCode } from './StatusCodes'
export {
  FulfilmentType,
  ShipmentType,
  StockHoldProductStatus,
  ProductAttribute,
  DeliverableDays,
  DeliveryFlag,
} from './snapshot'
export { WCSUserState } from './userInfo'

interface APIRequest<D> {
  _data: D
  url: string
  method: string
}
export interface APIResponse<T, D = undefined> extends Response {
  body: T
  req: APIRequest<D>
  request: APIRequest<D>
}

export { CreateFulfilmentAPIErrorAdvice } from './delivery'
export type { GetConsignmentsAPIResponse, GetConsignmentsAPIPayload, BookingRequest } from './delivery'
