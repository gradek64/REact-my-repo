import APILogger from '../../helpers/APILogger'
import { Fulfilment } from '../../../src/types/api'
import { SerialisableStubObject, ConfirmationStub } from '../../../src/types/stubs'

const FULFILMENT_SET = 'fulfilled1Fulfilment'
const SHIPMENT_START_TIME = 'now'
const CONFIRMATION_TYPE = 'OrderPlaced'

class Confirmation implements SerialisableStubObject<ConfirmationStub> {
  private _fulfilments: Fulfilment[]
  private _fulfilmentSet: string
  private _shipmentStartTime: 'now' | 'tomorrow' | 'dayAfterTomorrow'
  private _confirmationType: string

  setDefaults() {
    this._fulfilments = []
    this._fulfilmentSet = FULFILMENT_SET
    this._shipmentStartTime = SHIPMENT_START_TIME
    this._confirmationType = CONFIRMATION_TYPE
  }

  constructor() {
    APILogger('API: Creating Confirmation!')
    this.setDefaults()
  }

  toJson() {
    return {
      fulfilments: this.fulfilments,
      fulfilmentSet: this.fulfilmentSet,
      shipmentStartTime: this.shipmentStartTime,
      confirmationType: this.confirmationType,
    }
  }

  fromJson(json: ConfirmationStub) {
    this.fulfilments = json.fulfilments || []
    this.fulfilmentSet = json.fulfilmentSet || FULFILMENT_SET
    this.shipmentStartTime = json.shipmentStartTime || SHIPMENT_START_TIME
    this.confirmationType = json.confirmationType || CONFIRMATION_TYPE
  }

  reset() {
    this.setDefaults()
  }

  get fulfilments() {
    return this._fulfilments
  }

  set fulfilments(fulfilments) {
    this._fulfilments = fulfilments
  }

  addFulfilment(fulfilment: Fulfilment) {
    this._fulfilments.push(fulfilment)
  }

  get fulfilmentSet() {
    return this._fulfilmentSet
  }

  set fulfilmentSet(type) {
    this._fulfilmentSet = type
  }

  get shipmentStartTime() {
    return this._shipmentStartTime
  }

  set shipmentStartTime(shipmentStartTime) {
    this._shipmentStartTime = shipmentStartTime
  }

  get confirmationType() {
    return this._confirmationType
  }

  set confirmationType(type) {
    this._confirmationType = type
  }
}

export default Confirmation
