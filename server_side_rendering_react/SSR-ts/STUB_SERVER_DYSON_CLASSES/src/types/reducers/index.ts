import { RouteComponentProps } from 'react-router-dom'
import { RouterState } from 'connected-react-router'
import { Action } from 'history'
import type { AppState } from './app'
import type { BasketState } from './basket'
import type { CustomerState } from './customer'
import type { MetaState } from './meta'
import type { PaymentsState } from './payment'
import type { WalletState } from './wallet'
import type { OrderState } from './order'
import type { NectarState } from './nectar'
import type { TotalsState } from './totals'
import type { PromosState } from './promotions'
import type { StoreState } from './store'
import type { DeliveryState } from './delivery'

// Export enums & type guards
export {
  Brand,
  SubBrand,
  Theme,
  Season,
  OrderSummaryVariant,
  Channel,
  ArrangeDeliveryVariant,
  ArgosCardReminderPosition,
  PaymentOptionsVariant,
} from './app'
export { isSavedAddress } from './customer'
export { OrderStatus } from './order'
export { PaymentMethodRoutes, Currency, PaymentTabs } from './payment'
export { StockHoldStatus } from './meta'
export { DatacashMigrationAlertType } from './wallet'

// Export Types
export type { FeaturesState, ConfigState, ConsulConfig } from './app'
export type { Product, OutOfStockActionPayload, OutOfStockItem, ShipmentWithProducts } from './basket'
export type {
  ApplePaySessionData,
  ArgosCardCreditPlan,
  MonthlyPaymentCreditPlan,
  PaymentMethodsStatuses,
  PaymentMethodStatuses,
  Payment,
  AddablePayment,
  NectarPayment,
  PaypalPayment,
  CreditApplicationPayment,
  DeletingPayment,
  CreditApplicationState,
  CreditApplicationStates,
  GiftCardError,
  SelectablePaymentMethod,
} from './payment'
export type { AddressState, UnsavedAddress, SavedAddress, BillingAddress, Consent } from './customer'
export type {
  OrderState,
  OrderRetrievalState,
  OrderPaymentArgosCredit,
  OrderPaymentMonthlyPaymentPlan,
  OrderPayment,
  OrderStore,
  OrderPaymentNectar,
  OrderConfirmationState,
  AvailableCare,
  Earnings,
  ShipmentState,
  OrderTimetableHours,
} from './order'
export type { Promotion } from './promotions'
export type { TotalsState } from './totals'

export interface RouterProps extends RouteComponentProps {
  location: {
    query: Record<string, string>
    pathname: string
    search: string
    hash: string
    state: RouterState
  }
  action: Action
}

type RootState = {
  app: AppState
  basket: BasketState
  customer: CustomerState
  delivery: DeliveryState
  meta: MetaState
  nectar: NectarState
  order: OrderState
  payments: PaymentsState
  promotions: PromosState
  router: RouterProps | undefined
  store: StoreState
  totals: TotalsState
  wallet: WalletState
}

export type {
  RootState,
  AppState,
  BasketState,
  CustomerState,
  DeliveryState,
  MetaState,
  NectarState,
  PaymentsState,
  PromosState,
  WalletState,
  StoreState,
}
