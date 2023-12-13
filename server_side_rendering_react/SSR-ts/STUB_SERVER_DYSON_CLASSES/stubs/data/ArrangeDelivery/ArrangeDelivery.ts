import {
  createFulfilmentResponseData,
  getConsignmentsResponseData,
  getSlotsResponseData,
  createBookingResponseData,
} from './Datasets'
import { ArrangeDeliveryStub, SerialisableStubObject } from 'types/stubs'

class ArrangeDelivery implements SerialisableStubObject<ArrangeDeliveryStub> {
  private _createFulfilmentResponse: ArrangeDeliveryStub['createFulfilmentResponse']
  private _createFulfilmentResponseType: ArrangeDeliveryStub['createFulfilmentResponseType']
  private _getConsignmentsResponse: ArrangeDeliveryStub['getConsignmentsResponse']
  private _getConsignmentsResponseType: ArrangeDeliveryStub['getConsignmentsResponseType']
  private _getSlotsResponse: ArrangeDeliveryStub['getSlotsResponse']
  private _getSlotsResponseType: ArrangeDeliveryStub['getSlotsResponseType']
  private _createBookingResponse: ArrangeDeliveryStub['createBookingResponse']
  private _createBookingResponseType: ArrangeDeliveryStub['createBookingResponseType']

  setDefaults() {
    this.updateCreateFulfilmentResponse(createFulfilmentResponseData.FulfilmentCreated.response)
    this.updateGetConsignmentsResponse(getConsignmentsResponseData.Success.response)
    this.updateGetSlotsResponse(getSlotsResponseData.Success.response)
    this.updateCreateBookingResponse(createBookingResponseData.BookingCreated.response)
  }

  constructor() {
    this.setDefaults()
  }

  get createFulfilmentResponse() {
    return this._createFulfilmentResponse
  }

  set createFulfilmentResponse(response) {
    this._createFulfilmentResponse = response
  }

  get createFulfilmentResponseType() {
    return this._createFulfilmentResponseType
  }

  set createFulfilmentResponseType(type) {
    this._createFulfilmentResponseType = type
  }

  get getConsignmentsResponse() {
    return this._getConsignmentsResponse
  }

  set getConsignmentsResponse(response) {
    this._getConsignmentsResponse = response
  }

  get getConsignmentsResponseType() {
    return this._getConsignmentsResponseType
  }

  set getConsignmentsResponseType(type) {
    this._getConsignmentsResponseType = type
  }

  get getSlotsResponse() {
    return this._getSlotsResponse
  }

  set getSlotsResponse(response) {
    this._getSlotsResponse = response
  }

  get getSlotsResponseType() {
    return this._getSlotsResponseType
  }

  set getSlotsResponseType(type) {
    this._getSlotsResponseType = type
  }

  get createBookingResponse() {
    return this._createBookingResponse
  }

  set createBookingResponse(response) {
    this._createBookingResponse = response
  }

  get createBookingResponseType() {
    return this._createBookingResponseType
  }

  set createBookingResponseType(type) {
    this._createBookingResponseType = type
  }

  updateCreateFulfilmentResponse({ statusCode, error, id }: ArrangeDeliveryStub['createFulfilmentResponse']) {
    this._createFulfilmentResponse = { statusCode, error }
    this._createFulfilmentResponseType = id as ArrangeDeliveryStub['createFulfilmentResponseType']
  }

  updateGetConsignmentsResponse({ statusCode, error, id }: ArrangeDeliveryStub['getConsignmentsResponse']) {
    this._getConsignmentsResponse = { statusCode, error }
    this._getConsignmentsResponseType = id as ArrangeDeliveryStub['getConsignmentsResponseType']
  }

  updateGetSlotsResponse({ statusCode, error, id }: ArrangeDeliveryStub['getSlotsResponse']) {
    this._getSlotsResponse = { statusCode, error }
    this._getSlotsResponseType = id as ArrangeDeliveryStub['getSlotsResponseType']
  }

  updateCreateBookingResponse({ statusCode, error, id }: ArrangeDeliveryStub['createBookingResponse']) {
    this._createBookingResponse = { statusCode, error }
    this._createBookingResponseType = id as ArrangeDeliveryStub['createBookingResponseType']
  }

  toJson() {
    return {
      createFulfilmentResponse: this._createFulfilmentResponse,
      createFulfilmentResponseType: this._createFulfilmentResponseType,
      getConsignmentsResponse: this._getConsignmentsResponse,
      getConsignmentsResponseType: this._getConsignmentsResponseType,
      getSlotsResponse: this._getSlotsResponse,
      getSlotsResponseType: this._getSlotsResponseType,
      createBookingResponse: this._createBookingResponse,
      createBookingResponseType: this._createBookingResponseType,
    }
  }

  fromJson(json: ArrangeDeliveryStub) {
    this._createFulfilmentResponse = json.createFulfilmentResponse
    this._createFulfilmentResponseType = json.createFulfilmentResponseType
    this._getConsignmentsResponse = json.getConsignmentsResponse
    this._getConsignmentsResponseType = json.getConsignmentsResponseType
    this._getSlotsResponse = json.getSlotsResponse
    this._getSlotsResponseType = json.getSlotsResponseType
    this._createBookingResponse = json.createBookingResponse
    this._createBookingResponseType = json.createBookingResponseType
  }

  reset() {
    this.setDefaults()
  }
}

export default ArrangeDelivery
