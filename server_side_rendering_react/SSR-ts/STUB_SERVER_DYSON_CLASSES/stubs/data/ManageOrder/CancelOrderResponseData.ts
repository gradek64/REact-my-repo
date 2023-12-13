import Response from '../../helpers/API/Response'
import { generalManageOrderResponseData, GeneralManageOrderResponsesTypes } from './GeneralResponseData'

export const cancelOrderResponseData = {
  SuccessResponse: {
    description: '204: Order successfully cancelled',
    response: new Response({
      id: 'SuccessResponse',
      statusCode: 204,
      error: null,
    }),
  },
  OrderCancellationNotAllowed: {
    description: "409: Order status prevents cancellation or shipment number doesn't match",
    response: new Response({
      id: 'OrderCancellationNotAllowed',
      statusCode: 409,
      error: {
        message: 'Order not found',
        status: 'CONFLICT',
        details: [
          {
            type: 'type',
            advice: 'ORDER_CANCELLATION_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  ...generalManageOrderResponseData,
}

enum CancelOrderOnlyResponsesTypes {
  SuccessResponse = 'SuccessResponse',
  OrderCancellationNotAllowed = 'OrderCancellationNotAllowed',
}

export type CancelOrderResponsesTypes = GeneralManageOrderResponsesTypes | CancelOrderOnlyResponsesTypes
