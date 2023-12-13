import Response from '../../../helpers/API/Response'

export const createBookingResponseData = {
  BookingCreated: {
    description: '200: Booking created (Default)',
    response: new Response({ id: 'BookingCreated', statusCode: 200, error: null }),
  },
  ValidationError: {
    description: '400: Validation error',
    response: new Response({
      id: 'ValidationError',
      statusCode: 400,
      error: {
        message: 'Address matching postcode saved on snapshot not found',
        status: 'VALIDATION_ERROR',
        details: [{ type: 'type', advice: 'VALIDATION_ERROR' }],
      },
    }),
  },
  BadRequest: {
    description: '400: Bad request',
    response: new Response({
      id: 'BadRequest',
      statusCode: 400,
      error: {
        message: 'Request body does not conform to request definition',
        status: 'BAD_REQUEST',
        details: [{ type: 'type', advice: 'BAD_REQUEST' }],
      },
    }),
  },
  MissingConsignmentId: {
    description: '424: Missing consignment Id',
    response: new Response({
      id: 'MissingConsignmentId',
      statusCode: 424,
      error: {
        message: 'One or more consignments were missing on the request',
        status: 'MISSING_CONSIGNMENT_ID',
        details: [{ type: 'type', advice: 'MISSING_CONSIGNMENT_ID' }],
      },
    }),
  },
  InternalServerError: {
    description: '500: An unknown error occured',
    response: new Response({
      id: 'InternalServerError',
      statusCode: 500,
      error: {
        message: 'Fulfilment creation failed due to unknown error.',
        status: 'INTERNAL_SERVER_ERROR',
        details: [{ type: 'type', advice: 'INTERNAL_SERVER_ERROR' }],
      },
    }),
  },
  RequestTimeout: {
    description: '504: Request timeout',
    response: new Response({
      id: 'RequestTimeout',
      statusCode: 504,
      error: {
        message: 'Request timeout',
        status: 'REQUEST_TIMEOUT',
        details: [{ type: 'type', advice: 'REQUEST_TIMEOUT' }],
      },
    }),
  },
}

export enum CreateBookingResponseTypes {
  BookingCreated = 'BookingCreated',
  ValidationError = 'ValidationError',
  BadRequest = 'BadRequest',
  MissingConsignmentId = 'MissingConsignmentId',
  InternalServerError = 'InternalServerError',
  RequestTimeout = 'RequestTimeout',
}
