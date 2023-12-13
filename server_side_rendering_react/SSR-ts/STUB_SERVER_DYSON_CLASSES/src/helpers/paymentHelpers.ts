import Logger from '../utils/Logger'

import {
  PaymentMethodsAPIPayload,
  PaymentMethodStatus,
  PaymentMethod,
  ArgosCardCreditPlanAPI,
  MonthlyPaymentCreditPlanAPI,
} from '../types/api'
import { MonthlyPaymentCreditPlan, ArgosCardCreditPlan, PaymentMethodsStatuses } from '../types/reducers'

/**
 * Extracts a plain object of boolean status flags, per each given payment method
 */
export function setStatuses(methods: PaymentMethodsAPIPayload['methods']): PaymentMethodsStatuses {
  const statuses: PaymentMethodsStatuses = {
    [PaymentMethod.CARD_DEBIT]: {},
    [PaymentMethod.CARD_ARGOS_CREDIT]: {},
    [PaymentMethod.PAYPAL]: {},
    [PaymentMethod.APPLE_PAY]: {},
    [PaymentMethod.CARD_NECTAR_SPEND]: {},
    [PaymentMethod.CARD_GIFT_ARGOS]: {},
    [PaymentMethod.CARD_GIFT_FLEXECASH]: {},
    [PaymentMethod.CREDIT_CAPE2]: {},
    [PaymentMethod.CREDIT_MPP]: {},
  }

  Object.keys(methods).forEach((method: keyof PaymentMethodsStatuses) => {
    if (!statuses[method]) return

    statuses[method] = {
      temporarilyDisabled: methods[method].status === PaymentMethodStatus.TEMPORARILY_DISABLED,
      available: methods[method].status === PaymentMethodStatus.AVAILABLE,
      permanentlyDisabled: methods[method].status === PaymentMethodStatus.PERMANENTLY_DISABLED,
      incompatible: methods[method].status === PaymentMethodStatus.INCOMPATIBLE,
      paymentComplete: methods[method].status === PaymentMethodStatus.PAYMENT_COMPLETE,
      maxLimitReached: methods[method].status === PaymentMethodStatus.MAX_LIMIT_REACHED,
      overMaxSpendLimit:
        methods[method].status === PaymentMethodStatus.OVER_SPEND_LIMIT ||
        methods[method].status === PaymentMethodStatus.OVER_MAX_SPEND_LIMIT,
      underMinSpendLimit: methods[method].status === PaymentMethodStatus.UNDER_MIN_SPEND_LIMIT,
      incompatibleWith: methods[method].incompatibleWith,
    }
  })
  return statuses
}

/**
 * Extracts the array of credit plans
 */

export function formatArgosCardCreditPlans(plans?: ArgosCardCreditPlanAPI[]): ArgosCardCreditPlan[] | null {
  if (!plans) return null
  return plans
    .slice()
    .sort((first, second) => (first.priority > second.priority ? 1 : first.priority === second.priority ? 0 : -1)) // sort by longest duration first
    .map((item) => {
      const isNormalPlan = item.description.includes('Normal')
      const duration = !isNormalPlan ? item.description.split(' Months')[0] : null
      const title = !isNormalPlan
        ? item.description.replace(/Month/, 'month').replace(/Now/, 'Now,')
        : item.description.replace(/Credit/, 'credit')
      return {
        planNumber: item.planNumber.toString(),
        title,
        duration,
        apr: item.apr,
      }
    })
}

export function formatMonthlyPaymentCreditPlan(plan?: MonthlyPaymentCreditPlanAPI): MonthlyPaymentCreditPlan | null {
  if (!plan) return null
  const title = `Get longer to pay: from ${plan.minimumDuration} to ${plan.maximumDuration} monthly payments`
  return {
    planNumber: plan.planNumber.toString(),
    title,
    apr: plan.apr,
    minimumDuration: plan.minimumDuration,
    maximumDuration: plan.maximumDuration,
    effectiveTo: plan.effectiveTo,
  }
}

/**
 * Sagas helper which rejects if payment id is missing, raising an error and logging the message
 */
export function checkPaymentResponse(paymentId: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (!paymentId) {
      const errorMsg = 'Payment ID is missing'
      Logger.fatal(errorMsg)
      reject(errorMsg)
      return
    }

    resolve(paymentId)
  })
}

export const getBinRange = (cardNumber: string) => {
  if (cardNumber.startsWith('98260278')) return '98260278'
  if (cardNumber.startsWith('10000')) return '10000'
  if (cardNumber.startsWith('633827')) return '633827'
  return 'UNKNOWN'
}
