import { Fulfilment } from '../api'

export interface ConfirmationStub {
  fulfilments: Fulfilment[]
  fulfilmentSet: string
  shipmentStartTime: 'now' | 'tomorrow' | 'dayAfterTomorrow'
  confirmationType: string
}
