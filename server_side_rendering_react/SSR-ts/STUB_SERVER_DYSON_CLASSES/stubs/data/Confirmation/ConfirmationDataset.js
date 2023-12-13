import successResponse from './successResponse'
import errorResponse from './errorResponse'

const confirmationDatasets = {
  OrderPlaced: {
    description: '200: Order placed (Default)',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_PLACED'),
  },
  OrderPartiallyPlaced: {
    description: '200: Order partially placed',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_PARTIALLY_PLACED'),
  },
  OrderPartiallyFulfilled: {
    description: '200: Order partially fulfilled',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_PARTIALLY_FULFILLED'),
  },
  OrderPending: {
    description: '200: Order pending',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_PENDING'),
  },
  OrderRejected: {
    description: '200: Order rejected',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_REJECTED'),
  },
  OrderFailed: {
    description: '200: Order failed',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_FAILED'),
  },
  OrderError: {
    description: '200: Order error',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_ERROR'),
  },
  OrderException: {
    description: '200: Order exception',
    response: ({ req, sessionData }) => successResponse(req, sessionData, 'ORDER_EXCEPTION'),
  },
  InvalidTimezone: {
    description: '400: Invalid timezone',
    response: () => errorResponse(400, 'INVALID_TIMEZONE', 'Invalid timezone'),
  },
  MalformedRequest: {
    description: '400: Malformatted request',
    response: () => errorResponse(400, 'MALFORMED_REQUEST', 'Malformatted request'),
  },
  Unauthorized: {
    description: '401: Unauthorized',
    response: () => errorResponse(401, 'ORDER_GET_UNAUTHORIZED', 'Unauthorized'),
  },
  OrderNotFound: {
    description: '404: Order not found',
    response: () => errorResponse(404, 'ORDER_NOT_FOUND', 'Order not found'),
  },
  StoreNotFound: {
    description: '404: Store not found',
    response: () => errorResponse(404, 'STORE_NOT_FOUND', 'Store not found'),
  },
  StoreInfoError: {
    description: '500: Store service error',
    response: () => errorResponse(500, 'STORE_SERVICE_ERROR', 'Store service error'),
  },
  InternalServerError: {
    description: '500: Order service error',
    response: () => errorResponse(500, 'ORDER_SERVICE_ERROR', 'Order service error'),
  },
  ApiTimeout: {
    description: '504: Request timeout',
    response: () => errorResponse(504, 'REQUEST_TIMEOUT', 'Request timeout'),
  },
  JsError: {
    description: 'UI encounters a JavaScript error',
    response: () => {
      throw new Error('Oops, an (intentional) JavaScript error just occurred 😃')
    },
  },
  UiTimeout: {
    description: 'UI call handler time out',
    response: () => ({
      status: 200,
      body: {},
    }),
  },
  ParseError: {
    description: 'Error parsing response',
    response: ({ res }) => {
      res.append('Content-Type', 'application/json')
      return {
        status: 200,
        body: `{"key":"malformed JSON"`,
      }
    },
  },
}

module.exports = confirmationDatasets
