import type { Status } from '../Status'
import { SavedPaymentMethod } from 'types/api'

export interface WalletState {
  savedPaymentMethods: SavedPaymentMethod[]
  error: boolean
  status: Status
  datacashMigrationAlert?: DatacashMigrationAlertType
}

export enum DatacashMigrationAlertType {
  PCI_ONLY = 'PCI only',
  PCI_AND_ARGOS_CARD = 'PCI and Argos Card',
  ARGOS_CARD = 'Argos Card',
}
