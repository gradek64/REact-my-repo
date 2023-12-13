import {
  createBookingResponseData,
  createFulfilmentResponseData,
  getConsignmentsResponseData,
  getSlotsResponseData,
} from '../../../stubs/data/ArrangeDelivery/Datasets'
import Response from '../../../stubs/helpers/API/Response'

export interface ArrangeDeliveryStub {
  createFulfilmentResponse: Pick<Response, 'statusCode' | 'error' | 'id'>
  createFulfilmentResponseType: keyof typeof createFulfilmentResponseData
  getConsignmentsResponse: Pick<Response, 'statusCode' | 'error' | 'id'>
  getConsignmentsResponseType: keyof typeof getConsignmentsResponseData
  getSlotsResponse: Pick<Response, 'statusCode' | 'error' | 'id'>
  getSlotsResponseType: keyof typeof getSlotsResponseData
  createBookingResponse: Pick<Response, 'statusCode' | 'error' | 'id'>
  createBookingResponseType: keyof typeof createBookingResponseData
}

export enum ModifyArrangeDeliveryType {
  createFulfilment = 'createFulfilment',
  getConsignments = 'getConsignments',
  getSlots = 'getSlots',
  createBooking = 'createBooking',
}
