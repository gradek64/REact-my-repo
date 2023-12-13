import { APIResponse } from 'types/api'
import { FulfilmentStub } from 'types/stubs'

export type GetConsignmentsAPIResponse = APIResponse<FulfilmentStub>
export type GetConsignmentsAPIPayload = FulfilmentStub

export interface BookingRequest {
  consignmentId: string
  slotId: string
  deliveryPrice: number
  instruction?: string
}
