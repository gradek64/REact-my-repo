import Response from '../../helpers/API/Response'

export const generalManageOrderResponseData = {
  InvalidOrderNumber: {
    description: '400: Invalid order number',
    response: new Response({
      id: 'InvalidOrderNumber',
      statusCode: 400,
      error: {
        message: 'Invalid order number',
        status: 'BAD_REQUEST',
        details: [
          {
            type: 'type',
            advice: 'INVALID_ORDER_NUMBER',
          },
        ],
      },
    }),
  },
  OrderAccessDenied: {
    description: '403: Order access denied',
    response: new Response({
      id: 'OrderAccessDenied',
      statusCode: 403,
      error: {
        message: 'Order access denied',
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
  OrderNotFound: {
    description: '404: Order not found',
    response: new Response({
      id: 'OrderNotFound',
      statusCode: 404,
      error: {
        message: 'Order not found',
        status: 'NOT_FOUND',
        details: [
          {
            type: 'type',
            advice: 'ORDER_NOT_FOUND',
          },
        ],
      },
    }),
  },
  CMCServiceError: {
    description: '500: Error from CMC',
    response: new Response({
      id: 'CMCServiceError',
      statusCode: 500,
      error: {
        message: 'Order not found',
        status: 'INTERNAL_SERVER_ERROR',
        details: [
          {
            type: 'type',
            advice: 'CMC_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
}

export enum GeneralManageOrderResponsesTypes {
  InvalidOrderNumber = 'InvalidOrderNumber',
  OrderAccessDenied = 'OrderAccessDenied',
  OrderNotFound = 'OrderNotFound',
  CMCServiceError = 'CMCServiceError',
}
