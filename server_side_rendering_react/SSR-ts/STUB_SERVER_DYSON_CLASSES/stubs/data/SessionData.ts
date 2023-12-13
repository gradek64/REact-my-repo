import Basket from './Basket/Basket'
import ProductService from './Products/ProductService'
import Confirmation from './Confirmation/Confirmation'

import User from './User/User'
import Store from './Store/Store'
import OrderPayments from './Payments/OrderPayments'
import ErrorCodes from './ErrorCodes/ErrorCodes'
import PaymentMethods from './Payments/PaymentMethods'
import CreditPlans from './CreditPlans/CreditPlans'
import SnapshotService from './SnapshotService/SnapshotService'
import DatacashError from './Payments/DatacashError'
import Promotion from './Promotions/Promotion'
import Wallet from './Wallet/Wallet'
import userDatasets from './User/UserDatasets'
import UserSessionManager from './UserSessionManager/UserSessionManager'
import CheckoutApi from './CheckoutApi/CheckoutApi'
import CheckUserAccountService from './User/CheckUserAccountService/CheckUserAccountService'
import CreateUserAccountService from './User/CreateUserAccountService/CreateUserAccountService'
import PatchCustomer from './Customer/PatchCustomer'
import OrderRetrieval from './OrderRetrieval/OrderRetrieval'
import GetOrder from './GetOrder/GetOrder'
import CancelOrder from './ManageOrder/CancelOrder'
import ExtendOrder from './ManageOrder/ExtendOrder'
import ArrangeDelivery from './ArrangeDelivery/ArrangeDelivery'

import { SessionDataObject, SerialisableStubObject } from 'types/stubs'

const DEFAULT_USER = 'Default'

type UntypedSessionData = SerialisableStubObject<unknown> & { reset: () => void }

export default class SessionData {
  user: User
  basket: Basket
  store: Store
  orderPayments: UntypedSessionData
  errorCodes: ErrorCodes
  paymentMethods: PaymentMethods
  snapshotService: SnapshotService
  creditPlans: CreditPlans
  confirmation: Confirmation
  datacashError: UntypedSessionData
  promotion: Promotion
  wallet: Wallet
  productService: ProductService
  userSessionManager: UserSessionManager
  checkoutApi: CheckoutApi
  checkUserAccountService: CheckUserAccountService
  createUserAccountService: CreateUserAccountService
  patchCustomer: PatchCustomer
  orderRetrieval: OrderRetrieval
  getOrder: GetOrder
  cancelOrder: CancelOrder
  extendOrder: ExtendOrder
  arrangeDelivery: ArrangeDelivery

  setDefaults() {
    this.user.reset()
    this.basket.reset()
    this.store.reset()
    this.orderPayments.reset()
    this.errorCodes.reset()
    this.paymentMethods.reset()
    this.snapshotService.reset()
    this.creditPlans.reset()
    this.confirmation.reset()
    this.datacashError.reset()
    this.promotion.reset()
    this.wallet.reset()
    this.productService.reset()
    this.userSessionManager.reset()
    this.checkoutApi.reset()
    this.checkUserAccountService.reset()
    this.createUserAccountService.reset()
    this.patchCustomer.reset()
    this.orderRetrieval.reset()
    this.getOrder.reset()
    this.cancelOrder.reset()
    this.extendOrder.reset()
    this.arrangeDelivery.reset()

    this.setup()
  }

  constructor(json?: SessionDataObject) {
    this.user = new User()
    this.basket = new Basket()
    this.store = new Store()
    this.orderPayments = new OrderPayments()
    this.errorCodes = new ErrorCodes()
    this.paymentMethods = new PaymentMethods()
    this.snapshotService = new SnapshotService()
    this.creditPlans = new CreditPlans()
    this.confirmation = new Confirmation()
    this.datacashError = new DatacashError()
    this.promotion = new Promotion()
    this.wallet = new Wallet()
    this.productService = new ProductService()
    this.userSessionManager = new UserSessionManager()
    this.checkUserAccountService = new CheckUserAccountService()
    this.createUserAccountService = new CreateUserAccountService()
    this.checkoutApi = new CheckoutApi()
    this.patchCustomer = new PatchCustomer()
    this.orderRetrieval = new OrderRetrieval()
    this.getOrder = new GetOrder()
    this.cancelOrder = new CancelOrder()
    this.extendOrder = new ExtendOrder()
    this.arrangeDelivery = new ArrangeDelivery()

    if (!json) {
      this.setDefaults()
    } else {
      this.user.fromJson(json.user)
      this.basket.fromJson(json.basket)
      this.store.fromJson(json.store)
      this.orderPayments.fromJson(json.orderPayments)
      this.errorCodes.fromJson(json.errorCodes)
      this.paymentMethods.fromJson(json.paymentMethods)
      this.creditPlans.fromJson(json.creditPlans)
      this.snapshotService.fromJson(json.snapshotService)
      this.confirmation.fromJson(json.confirmation)
      this.datacashError.fromJson(json.datacashError)
      this.promotion.fromJson(json.promotion)
      this.wallet.fromJson(json.wallet)
      this.productService.fromJson(json.productService)
      this.userSessionManager.fromJson(json.userSessionManager)
      this.checkoutApi.fromJson(json.checkoutApi)
      this.checkUserAccountService.fromJson(json.checkUserAccountService)
      this.createUserAccountService.fromJson(json.createUserAccountService)
      this.patchCustomer.fromJson(json.patchCustomer)
      this.orderRetrieval.fromJson(json.orderRetrieval)
      this.getOrder.fromJson(json.getOrder)
      this.cancelOrder.fromJson(json.cancelOrder)
      this.extendOrder.fromJson(json.extendOrder)
      this.arrangeDelivery.fromJson(json.arrangeDelivery)
    }
  }

  toJson() {
    return {
      basket: this.basket.toJson(),
      paymentMethods: this.paymentMethods.toJson(),
      snapshotService: this.snapshotService.toJson(),
      confirmation: this.confirmation.toJson(),
      wallet: this.wallet.toJson(),
      productService: this.productService.toJson(),
      userSessionManager: this.userSessionManager.toJson(),
      checkoutApi: this.checkoutApi.toJson(),
      checkUserAccountService: this.checkUserAccountService.toJson(),
      createUserAccountService: this.createUserAccountService.toJson(),
      patchCustomer: this.patchCustomer.toJson(),
      // note: when these get typed, make sure they go back into the same order
      user: this.user.toJson(),
      store: this.store.toJson(),
      orderPayments: this.orderPayments.toJson(),
      errorCodes: this.errorCodes.toJson(),
      creditPlans: this.creditPlans.toJson(),
      datacashError: this.datacashError.toJson(),
      promotion: this.promotion.toJson(),
      orderRetrieval: this.orderRetrieval.toJson(),
      getOrder: this.getOrder.toJson(),
      cancelOrder: this.cancelOrder.toJson(),
      extendOrder: this.extendOrder.toJson(),
      arrangeDelivery: this.arrangeDelivery.toJson(),
    }
  }

  setup() {
    userDatasets[DEFAULT_USER].setupUser(this.user)
  }

  reset() {
    this.setDefaults()
  }
}
