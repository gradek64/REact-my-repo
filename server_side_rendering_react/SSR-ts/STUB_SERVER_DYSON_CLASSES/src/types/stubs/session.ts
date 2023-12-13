import { Request } from 'express'
import Session from 'express-session'

import Basket from '../../../stubs/data/Basket/Basket'
import Confirmation from '../../../stubs/data/Confirmation/Confirmation'
import OrderPayments from '../../../stubs/data/Payments/OrderPayments'
import SnapshotService from '../../../stubs/data/SnapshotService/SnapshotService'
import Store from '../../../stubs/data/Store/Store'
import { PaymentMethodsAPIPayload } from '../api/payment'
import CheckoutApi from '../../../stubs/data/CheckoutApi/CheckoutApi'
import OrderRetrieval from '../../../stubs/data/OrderRetrieval/OrderRetrieval'
import GetOrder from '../../../stubs/data/GetOrder/GetOrder'
import User from '../../../stubs/data/User/User'

import { BasketStub } from './basket'
import { ConfirmationStub } from './confirmation'
import { CreditPlansStub } from './creditPlan'
import { PaymentMethodsStub } from './paymentMethods'
import { ProductServiceStub } from './product'
import { SessionResponseStub } from './serviceResponse'
import { SnapshotServiceStub } from './snapshotService'
import { WalletStubObject } from './wallet'
import { CheckoutApiStub } from './checkoutApi'
import { OrderRetrievalStub } from './orderRetrieval'
import { GetOrderStub } from './getOrder'
import { UserStub } from './user'
import { PromotionStub } from './promotion'
import { StoreStub } from './store'
import { NectarStub } from './nectar'
import { ArrangeDeliveryStub } from './arrangeDelivery'

export interface SessionDataProps {
  basket: Basket
  confirmation: Confirmation
  paymentMethods: {
    paymentMethods: PaymentMethodsAPIPayload['methods']
  }
  store: Store
  user: User
  snapshotService: SnapshotService
  orderPayments: OrderPayments
  checkoutApi: CheckoutApi
  orderRetrieval: OrderRetrieval
  getOrder: GetOrder
}

/**
 * Everything we save in the stub needs to be serialisable in JSON, using the
 * fromJson and toJson methods.
 */
export interface SerialisableStubObject<T> {
  setDefaults?: () => void
  reset?: () => void

  toJson: () => T
  fromJson: (json: T) => void
}

export type SessionDataObject = {
  basket: BasketStub
  checkUserAccountService: SessionResponseStub
  createUserAccountService: SessionResponseStub
  confirmation: ConfirmationStub
  creditPlans: CreditPlansStub
  datacashError: any
  errorCodes: string[]
  nectar: NectarStub
  orderPayments: any
  patchCustomer: SessionResponseStub
  paymentMethods: PaymentMethodsStub
  productService: ProductServiceStub
  promotion: PromotionStub
  checkoutApi: CheckoutApiStub
  snapshotService: SnapshotServiceStub
  store: StoreStub
  user: UserStub
  userSessionManager: SessionResponseStub
  wallet: WalletStubObject
  orderRetrieval: OrderRetrievalStub
  getOrder: GetOrderStub
  cancelOrder: SessionResponseStub
  extendOrder: SessionResponseStub
  arrangeDelivery: ArrangeDeliveryStub
}

export type RequestWithSession = Request & {
  session: typeof Session & { data: SessionDataObject }
  path: string
}
