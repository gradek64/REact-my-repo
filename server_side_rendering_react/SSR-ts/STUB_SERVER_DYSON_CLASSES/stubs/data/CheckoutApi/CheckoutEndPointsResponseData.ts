import Response from '../../helpers/API/Response'

export const CheckoutEndPointsResponseData = {
  Success: {
    description: '2xx: Success',
    response: new Response({
      id: 'Success',
      statusCode: 200,
      error: null,
    }),
  },
  Unauthorized: {
    description: '401: Unauthorized `checkout-api-v2/*`',
    response: new Response({
      id: 'Unauthorized',
      statusCode: 401,
      error: {
        message: 'Authorization Required',
        status: 'UNAUTHORIZED',
        details: [
          {
            type: 'type',
            advice: 'UNAUTHORIZED',
          },
        ],
      },
    }),
  },
  OperationNotAllowed: {
    description: '403: Operation not allowed `checkout-api-v2/*`',
    response: new Response({
      id: 'OperationNotAllowed',
      statusCode: 403,
      error: {
        message: 'Operation not allowed',
        status: 'FORBIDDEN',
        details: [
          {
            type: 'type',
            advice: 'FORBIDDEN',
          },
        ],
      },
    }),
  },
  NotFound: {
    description: '404: NotFound `checkout-api-v2/*`',
    response: new Response({
      id: 'NotFound',
      statusCode: 404,
      error: {
        message: 'Not Found - Failed dependency',
        status: 'NOT_FOUND',
        details: [
          {
            type: 'type',
            advice: 'NOT_FOUND',
          },
        ],
      },
    }),
  },
  DataConstrained: {
    description: '409: Conflict `checkout-api-v2/*`',
    response: new Response({
      id: 'DataConstrained',
      statusCode: 409,
      error: {
        message: 'Conflict in request',
        status: 'CONFLICT_REQUEST',
        details: [
          {
            type: 'type',
            advice: 'CONFLICT_REQUEST',
          },
        ],
      },
    }),
  },
  InternalServerError: {
    description: '500: Failed to process checkout-api-v2/*',
    response: new Response({
      id: 'InternalServerError',
      status: 'UNKNOWN_ERROR',
      statusCode: 500,
      error: {
        message: 'Failed to process the request due to an internal server error',
        status: 'INTERNAL_SERVER_ERROR',
        details: [
          {
            type: 'type',
            advice: 'UNKNOWN_ERROR',
          },
        ],
      },
    }),
  },
}

export enum CheckoutApiErrorResponseTypes {
  Success = 'Success',
  Unauthorized = 'Unauthorized',
  OperationNotAllowed = 'OperationNotAllowed',
  NotFound = 'NotFound',
  DataConstrained = 'DataConstrained',
  InternalServerError = 'InternalServerError',
}
