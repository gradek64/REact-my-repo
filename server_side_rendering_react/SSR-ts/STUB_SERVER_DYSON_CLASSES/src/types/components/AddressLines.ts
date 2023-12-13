import { BillingAddress } from 'types/reducers'
import { SnapshotDeliveryAddress } from 'types/api'

export interface AddressLinesProps {
  address: BillingAddress | SnapshotDeliveryAddress
  heading?: string
  addressType?: string
}
