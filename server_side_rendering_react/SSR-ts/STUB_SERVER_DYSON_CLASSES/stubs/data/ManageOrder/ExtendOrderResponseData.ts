import Response from '../../helpers/API/Response'
import { generalManageOrderResponseData, GeneralManageOrderResponsesTypes } from './GeneralResponseData'

export const extendOrderResponseData = {
  SuccessResponse: {
    description: '204: Order successfully extended',
    response: new Response({
      id: 'SuccessResponse',
      statusCode: 204,
      error: null,
    }),
  },
  OrderExtensionNotAllowed: {
    description: "409: Order status prevents extension or shipment number doesn't match",
    response: new Response({
      id: 'OrderExtensionNotAllowed',
      statusCode: 409,
      error: {
        message: 'Order not found',
        status: 'CONFLICT',
        details: [
          {
            type: 'type',
            advice: 'ORDER_EXTENSION_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  ...generalManageOrderResponseData,
}

enum ExtendOrderOnlyResponsesTypes {
  SuccessResponse = 'SuccessResponse',
  OrderExtensionNotAllowed = 'OrderExtensionNotAllowed',
}

export type ExtendOrderResponsesTypes = GeneralManageOrderResponsesTypes | ExtendOrderOnlyResponsesTypes
