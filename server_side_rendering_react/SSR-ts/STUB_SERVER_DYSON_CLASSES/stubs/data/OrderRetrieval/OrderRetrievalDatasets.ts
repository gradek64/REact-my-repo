import Response from '../../helpers/API/Response'
import successResponse from './successResponse'

const errorResponse = (statusCode: number, status: string, message: string) => ({
  status: statusCode,
  body: new Response({
    statusCode,
    error: {
      message,
      status,
      details: [
        {
          type: 'type.argos.co.uk/argos.order.retrieval.Get',
          advice: status,
        },
      ],
    },
  }).toJson(),
})

const orderRetrievalDatasets = {
  OrderRetrieved: {
    description: '200: Order Retrieved (Default)',
    response: ({ req, sessionData }) => successResponse(req, sessionData),
  },
  MalformedRequest: {
    description: '400: Malformatted request',
    response: () => errorResponse(400, 'MALFORMED_REQUEST', 'Unexpected request'),
  },
  Forbidden: {
    description: '403: Forbidden',
    response: () => errorResponse(403, 'FORBIDDEN', 'Forbidden'),
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
  CMCError: {
    description: '500: CMC error',
    response: () => errorResponse(500, 'CMC_SERVICE_ERROR', 'CMC error'),
  },
}

module.exports = orderRetrievalDatasets
