import { PaymentMethod, PaymentMethodStatus } from '../../../src/types/api'

export const PaymentMethodNameMapped = {
  'credit debit card': PaymentMethod.CARD_DEBIT,
  'argos card credit plan': PaymentMethod.CARD_ARGOS_CREDIT,
  paypal: PaymentMethod.PAYPAL,
  cape: PaymentMethod.CREDIT_CAPE2,
  mpp: PaymentMethod.CREDIT_MPP,
  'apple pay': PaymentMethod.APPLE_PAY,
}

export const PaymentMethodStatusMapped = {
  available: PaymentMethodStatus.AVAILABLE,
  'temporarily disabled': PaymentMethodStatus.TEMPORARILY_DISABLED,
  'permanently disabled': PaymentMethodStatus.PERMANENTLY_DISABLED,
  'payment complete': PaymentMethodStatus.PAYMENT_COMPLETE,
  incompatible: PaymentMethodStatus.INCOMPATIBLE,
  'over spend limit': PaymentMethodStatus.OVER_SPEND_LIMIT,
}

export const PaymentMethodTitles: Record<PaymentMethod, string> = {
  [PaymentMethod.CARD_DEBIT]: 'Credit/Debit card',
  [PaymentMethod.CARD_ARGOS_CREDIT]: 'Argos Card',
  [PaymentMethod.PAYPAL]: 'PayPal',
  [PaymentMethod.CARD_NECTAR_SPEND]: 'Nectar',
  [PaymentMethod.CARD_GIFT_ARGOS]: 'Argos gift card',
  [PaymentMethod.CARD_GIFT_FLEXECASH]: 'Flexecash gift card',
  [PaymentMethod.APPLE_PAY]: 'Apple Pay',
  [PaymentMethod.CREDIT_CAPE2]: 'CAPE',
  [PaymentMethod.CREDIT_MPP]: 'MPP',
}
