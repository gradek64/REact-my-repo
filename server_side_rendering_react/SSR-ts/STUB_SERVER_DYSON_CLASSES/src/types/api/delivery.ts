import { APIResponse, GetSnapshotAPIPayload } from 'types/api'
import { FulfilmentStub } from 'types/stubs'

export type GetConsignmentsAPIResponse = APIResponse<FulfilmentStub>
export type GetConsignmentsAPIPayload = FulfilmentStub

export interface BookingRequest {
  consignmentId: string
  slotId: string
  deliveryPrice: number
  instruction?: string
}

export enum SoftErrorType {
  STOCK_HOLD_PARTIAL_ALLOCATION = 'STOCK_HOLD_PARTIAL_ALLOCATION',
}

export interface CreateFulfilmentBody extends GetSnapshotAPIPayload {
  id: string
  errorCodes?: SoftErrorType[]
}

export type CreateFulfilmentAPIResponse = APIResponse<CreateFulfilmentBody>

export enum CreateFulfilmentAPIErrorAdvice {
  POSTCODE_MISMATCH = 'POSTCODE_MISMATCH',
  STOCK_HOLD_EXCLUSION_FAILURE = 'STOCK_HOLD_EXCLUSION_FAILURE',
  STOCK_HOLD_FAILED_ALLOCATION = 'STOCK_HOLD_FAILED_ALLOCATION',
}
