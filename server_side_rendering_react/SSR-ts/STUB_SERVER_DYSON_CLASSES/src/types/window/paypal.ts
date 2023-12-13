import type { PayPalCheckout } from 'braintree-web'
import type { PayPalCheckoutTokenizationOptions } from 'braintree-web/paypal'

export interface PayPalButtonOptions {
  style?: {
    layout?: string
    color?: string
    shape?: string
    label?: string
    tagline?: boolean
  }
  fundingSource?: string
  onClick?: () => void
  createOrder: () => ReturnType<PayPalCheckout['createPayment']>
  onApprove?: (data: PayPalCheckoutTokenizationOptions) => ReturnType<PayPalCheckout['tokenizePayment']>
  onCancel: () => void
  onError: (error: string) => void
}
