import ErrorResponse from '../../../stubs/helpers/API/ErrorResponse'
import Response from '../../../stubs/helpers/API/Response'

export type CustomerType = 'REGISTERED' | 'GUEST' | 'NONE'

export interface SnapshotStubResponse {
  type: string | undefined
  status: number
  error: ErrorResponse | null
}

export interface SnapshotStubStatus {
  type: Response['id']
  httpStatus: Response['statusCode']
  status: Response['body']['status']
  error: Response['error']
}

export interface SnapshotStubSource {
  deviceId: string
  salesChannel: null
  ipAddress: string
  userAgent: string
}

export interface SnapshotServiceStub {
  customerType: CustomerType
  orderId: string | null
  brandMismatch: boolean
  source: SnapshotStubSource
  snapshotInitialisation: SnapshotStubResponse
  snapshotGet: SnapshotStubResponse
  prepareForCheckout: SnapshotStubResponse
  calculatePrices: SnapshotStubResponse
  snapshotStatus: SnapshotStubStatus
  isWcsHandover: boolean
}
