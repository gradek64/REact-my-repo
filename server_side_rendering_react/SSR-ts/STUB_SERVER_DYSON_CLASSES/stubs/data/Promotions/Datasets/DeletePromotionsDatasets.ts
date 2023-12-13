import Response from '../../../helpers/API/Response'

export const deletePromotionResponseData = {
  PromotionDeleted: {
    description: '204: Promotion Deleted (Default)',
    response: new Response({
      id: 'PromotionDeleted',
      statusCode: 204,
      error: null,
    }),
  },
  MissingPromotionCode: {
    description: '400: Missing Promotion Code',
    response: new Response({
      id: 'MissingPromotionCode',
      statusCode: 400,
      error: {
        message: 'Missing Promotion Code',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CODE_NOT_FOUND',
          },
        ],
      },
    }),
  },
  PromotionNotFound: {
    description: '404: Promotion Not Found',
    response: new Response({
      id: 'PromotionNotFound',
      statusCode: 404,
      error: {
        message: 'Promotion Not Found',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'Promotion not found',
          },
        ],
      },
    }),
  },
  NotAllowed: {
    description: '409: Not Allowed Due To Finalised Order State',
    response: new Response({
      id: 'NotAllowed',
      statusCode: 409,
      error: {
        message: 'Not Allowed Due To Finalised Order State',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  PromotionGeneralError: {
    description: '500: Promotion general error',
    response: new Response({
      id: 'PromotionGeneralError',
      statusCode: 500,
      error: {
        message: 'Promotion general error',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CALCULATE_ERROR',
          },
        ],
      },
    }),
  },
}
