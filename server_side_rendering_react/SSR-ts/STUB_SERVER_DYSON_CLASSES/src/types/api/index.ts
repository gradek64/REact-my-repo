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

export type { CreateUserAccountReqBody } from './account/user'

// enums
export { GetWalletAPIErrorAdvice } from './account/wallet'
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

/**
 * Session Manager
 */
/* export type {
  CreateAnonymousSessionAPIRequest,
  CreateAnonymousSessionAPIResponse,
  CreateSessionResponsePayload,
} from './session/session' */

//export { StatusCode } from './StatusCodes'
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
