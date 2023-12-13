import { payment as paymentConfig } from '../config/paypal'

export const formatCheckoutInfo = (totals) => ({
  flow: paymentConfig.flow,
  amount: totals.outstanding,
  currency: paymentConfig.currency,
  enableShippingAddress: paymentConfig.enableShippingAddress,
  shippingAddressEditable: paymentConfig.shippingAddressEditable,
})
