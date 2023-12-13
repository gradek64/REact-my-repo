import { OrderConfirmationState } from '../reducers/order'
import {
  getOrderRedirectPath,
  getOrderStatus,
  getTargetingData,
  getOrderDeliveryCharge,
  hasConfirmationBrandMismatch,
} from '../../selectors'

export type OrderConfirmationContext = OrderConfirmationState & {
  targetingData: ReturnType<typeof getTargetingData>
  orderStatus: ReturnType<typeof getOrderStatus>
  getOrderErrorRedirectPath: ReturnType<typeof getOrderRedirectPath>
  brandMismatch: ReturnType<typeof hasConfirmationBrandMismatch>
  deliveryCharge: ReturnType<typeof getOrderDeliveryCharge>
}
