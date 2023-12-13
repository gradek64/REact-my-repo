export { PaymentAlerts } from './payment'
export {
  ArgosCardApplicationAlerts,
  MonthlyPaymentPlanAlerts,
  CreditApplicationUpdateContactAddressAlerts,
  CreditApplicationUpdateDeliveryAddressAlerts,
} from './credit'
export type { CreditExclusionAlertKind } from './credit'

export enum AlertTypes {
  COMPATIBILITY = 'COMPATIBILITY',
  DEFAULT = 'DEFAULT',
}

export enum AlertKind {
  info = 'info',
  error = 'error',
}

interface AlertMetadata {
  dataTest: string
  message: string
  interpolation?: Record<string, string>
}

export interface Alert {
  show: boolean
  type: AlertTypes
  metadata: AlertMetadata
  kind?: AlertKind
  animate?: boolean
}
