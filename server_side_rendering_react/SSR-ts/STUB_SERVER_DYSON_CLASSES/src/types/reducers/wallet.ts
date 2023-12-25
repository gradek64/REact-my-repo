import type { Status } from '../Status'



export enum DatacashMigrationAlertType {
  PCI_ONLY = 'PCI only',
  PCI_AND_ARGOS_CARD = 'PCI and Argos Card',
  ARGOS_CARD = 'Argos Card',
}

export interface WalletState {
  savedPaymentMethods: any[]
  error: boolean
  status: Status
  datacashMigrationAlert?: DatacashMigrationAlertType
}
