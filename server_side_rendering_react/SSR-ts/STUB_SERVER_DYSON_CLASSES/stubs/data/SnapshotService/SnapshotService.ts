import Response from '../../helpers/API/Response'
import snapshotServiceDatasets from './SnapshotServiceDatasets'
import {
  SerialisableStubObject,
  SnapshotServiceStub,
  SnapshotStubResponse,
  SnapshotStubSource,
  SnapshotStubStatus,
  CustomerType,
} from 'types/stubs'

class SnapshotService implements SerialisableStubObject<SnapshotServiceStub> {
  brandMismatch: boolean
  customerType: CustomerType
  private orderId: string | null
  private source: SnapshotStubSource
  private _isWcsHandover: boolean

  snapshotInitialisation: SnapshotStubResponse
  snapshotGet: SnapshotStubResponse
  prepareForCheckout: SnapshotStubResponse
  calculatePrices: SnapshotStubResponse
  snapshotStatus: SnapshotStubStatus

  setDefaults() {
    this.setSnapshotInitialisation(snapshotServiceDatasets.snapshotInitialisation.SnapshotInitialised)
    this.setSnapshotGet(snapshotServiceDatasets.snapshotGet.PaymentGet)
    this.setPrepareForCheckout(snapshotServiceDatasets.prepareForCheckout.SnapshotSuccessfullyPrepared)
    this.setCalculatePrices(snapshotServiceDatasets.calculatePrices.CalculatePricesSuccess)
    this.setSnapshotStatus({
      type: 'SnapshotSuccessfullyInitialised',
      status: 200,
      body: { status: 'ORDER_SNAPSHOT_INITIALISED' },
      error: null,
    })
    this.customerType = 'REGISTERED'
    this.orderId = null
    this.brandMismatch = false
    this.source = {
      deviceId: '4d84b94d-96ef-4b50-b8f5-35e85662e05d',
      salesChannel: null,
      ipAddress: '1.1.1.1',
      userAgent:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    }
    this._isWcsHandover = false
  }

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      snapshotInitialisation: this.snapshotInitialisation,
      snapshotGet: this.snapshotGet,
      prepareForCheckout: this.prepareForCheckout,
      calculatePrices: this.calculatePrices,
      snapshotStatus: this.snapshotStatus,
      customerType: this.customerType,
      orderId: this.orderId,
      brandMismatch: this.brandMismatch,
      source: this.source,
      isWcsHandover: this._isWcsHandover,
    }
  }

  fromJson(json: SnapshotServiceStub) {
    this.snapshotInitialisation = json.snapshotInitialisation
    this.snapshotGet = json.snapshotGet
    this.prepareForCheckout = json.prepareForCheckout
    this.calculatePrices = json.calculatePrices
    this.snapshotStatus = json.snapshotStatus
    this.customerType = json.customerType
    this.orderId = json.orderId
    this.brandMismatch = json.brandMismatch
    this.source = json.source
    this._isWcsHandover = json.isWcsHandover
  }

  reset() {
    this.setDefaults()
  }

  setSnapshotInitialisation({ response }: { response: Response }) {
    const { id, statusCode, error } = response

    this.snapshotInitialisation = {
      type: id,
      status: statusCode,
      error,
    }
  }

  setSnapshotGet({ response }: { response: Response }) {
    const { id, statusCode, error } = response

    this.snapshotGet = {
      type: id,
      status: statusCode,
      error,
    }
  }

  setSnapshotStatus({
    type,
    status,
    body,
    error,
  }: {
    type: Response['id']
    status: Response['statusCode']
    body: Response['body']
    error: Response['error']
  }) {
    this.snapshotStatus = {
      type,
      httpStatus: status,
      status: body.status,
      error,
    }
  }

  updateSnapshotStatus({ response }: { response: Response }) {
    const { id, statusCode, error, body } = response

    this.snapshotStatus = {
      type: id,
      httpStatus: statusCode,
      status: body.status,
      error,
    }
  }

  setCustomerType(value: CustomerType) {
    this.customerType = value
  }

  setOrderId(id: string) {
    this.orderId = id
  }

  setBrandMismatch(isMismatch: boolean) {
    this.brandMismatch = isMismatch
  }

  setPrepareForCheckout({ response }: { response: Response }) {
    const { id, statusCode, error } = response

    this.prepareForCheckout = {
      type: id,
      status: statusCode,
      error,
    }
  }

  setCalculatePrices({ response }: { response: Response }) {
    const { id, statusCode, error } = response

    this.calculatePrices = {
      type: id,
      status: statusCode,
      error,
    }
  }

  getSnapshotCustomer() {
    return {
      id: '2044798',
      type: this.customerType === 'NONE' ? undefined : this.customerType,
    }
  }

  get isWcsHandover() {
    return this._isWcsHandover
  }

  set isWcsHandover(value: boolean) {
    this._isWcsHandover = value
  }
}

export default SnapshotService
