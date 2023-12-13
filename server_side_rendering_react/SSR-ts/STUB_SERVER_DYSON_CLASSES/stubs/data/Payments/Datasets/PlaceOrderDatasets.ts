import Response from '../../../helpers/API/Response'

const placeOrderResponseData = {
  OrderPlaced: {
    description: '201: The order has been accepted and placed by downstream APIs (Default)',
    response: new Response({
      id: 'OrderPlaced',
      statusCode: 201,
      error: null,
    }),
  },
  BasketItemRemovalError: {
    description: '2xx: The removal of items from WCS basket was unsuccessful',
    response: new Response({
      id: 'BasketItemRemovalError',
      statusCode: 202,
      error: {
        message: 'The removal of items from WCS basket was unsuccessful',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'BASKET_ITEM_REMOVAL_ERROR',
          },
        ],
      },
    }),
  },
  OrderAttributesPublishingFailure: {
    description: '2xx: Sending of order attributes to order management has failed',
    response: new Response({
      id: 'OrderAttributesPublishingFailure',
      statusCode: 202,
      error: {
        message: 'Sending of order attributes to order management has failed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_ATTRIBUTES_PUBLISHING_FAILURE',
          },
        ],
      },
    }),
  },
  OrderAcceptedNotPlaced: {
    description: '202: The order has been accepted but still not completely placed',
    response: new Response({
      id: 'OrderAcceptedNotPlaced',
      statusCode: 202,
      error: null,
    }),
  },
  PaymentMissingApplePayFields: {
    description: '400: The Apple Pay object is missing field(s)',
    response: new Response({
      id: 'PaymentMissingApplePayFields',
      statusCode: 400,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'PAYMENT_MISSING_APPLE_PAY_FIELDS',
          },
        ],
      },
    }),
  },
  PaymentMissingPaypalNonce: {
    description: '400: The request is missing the paypalNonce field',
    response: new Response({
      id: 'PaymentMissingPaypalNonce',
      statusCode: 400,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'PAYMENT_MISSING_PAYPAL_NONCE',
          },
        ],
      },
    }),
  },
  OrderSnapshotNotFound: {
    description: '404: The requested snapshot not found for the customer',
    response: new Response({
      id: 'OrderSnapshotNotFound',
      statusCode: 404,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_SNAPSHOT_NOT_FOUND',
          },
        ],
      },
    }),
  },
  PromotionVoucherNotValid: {
    description: '400: Invalid voucher in the request',
    response: new Response({
      id: 'PromotionVoucherNotValid',
      statusCode: 400,
      error: {
        message: 'INVALID VOUCHER IN THE REQUEST',
        status: 'BAD_REQUEST',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.prepay.Post',
            paymentSessionId: 'PS-5000',
            advice: 'PROMOTION_VOUCHER_NOT_VALID',
          },
        ],
      },
    }),
  },
  PromotionVoucherNotActive: {
    description: '409: Company voucher is not active',
    response: new Response({
      id: 'PromotionVoucherNotActive',
      statusCode: 409,
      error: {
        message: 'COMPANY VOUCHER DISABLED',
        status: 'CONFLICT',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.prepay.Post',
            paymentSessionId: 'PS-5000',
            advice: 'PROMOTION_CV_DISABLED',
            promoCode: ['A309644DV702', 'A309644LV902'],
          },
        ],
      },
    }),
  },
  PaymentNotExactAmount: {
    description: '409: Sum of payments total amount does not equal basket total amount (with savings)',
    response: new Response({
      id: 'PaymentNotExactAmount',
      statusCode: 409,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'PAYMENT_NOT_EXACT_AMOUNT',
          },
        ],
      },
    }),
  },
  SnapshotLocked: {
    description: '409: Snapshot is locked',
    response: new Response({
      id: 'SnapshotLocked',
      statusCode: 409,
      error: {
        message: 'Snapshot is locked',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  PaymentRejected: {
    description: '424: Payment rejected by payment service',
    response: new Response({
      id: 'PaymentRejected',
      statusCode: 424,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'PAYMENT_REJECTED',
          },
        ],
      },
    }),
  },
  PaymentNotProcessable: {
    description: '424: Payment rejected by payment service due to suspected fraud',
    response: new Response({
      id: 'PaymentNotProcessable',
      statusCode: 424,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'PAYMENT_NOT_PROCESSABLE',
          },
        ],
      },
    }),
  },
  OrderServiceRejected: {
    description: '424: Order service return a 4xx client error',
    response: new Response({
      id: 'OrderServiceRejected',
      statusCode: 424,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_SERVICE_REJECTED',
          },
        ],
      },
    }),
  },
  PaymentServiceError: {
    description: '500: Payment service return a 5xx server error',
    response: new Response({
      id: 'PaymentServiceError',
      statusCode: 500,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'PAYMENT_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
  OrderServiceError: {
    description: '500: Order service return a 5xx server error',
    response: new Response({
      id: 'OrderServiceError',
      statusCode: 500,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
  OrderStatusOrderRejected: {
    description: '500: Order rejected by order service',
    response: new Response({
      id: 'OrderStatusOrderRejected',
      statusCode: 500,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_STATUS_ORDER_REJECTED',
          },
        ],
      },
    }),
  },
  OrderStatusOrderException: {
    description: '500: Order status returned as ORDER_EXCEPTION by order service',
    response: new Response({
      id: 'OrderStatusOrderException',
      statusCode: 500,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_STATUS_ORDER_EXCEPTION',
          },
        ],
      },
    }),
  },
  OrderStatusOrderError: {
    description: '500: Unknown order service error',
    response: new Response({
      id: 'OrderStatusOrderError',
      statusCode: 500,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'ORDER_STATUS_ORDER_ERROR',
          },
        ],
      },
    }),
  },
  RequestTimeout: {
    description: '504: Time out',
    response: new Response({
      id: 'RequestTimeout',
      statusCode: 504,
      error: {
        message: 'The order could not be placed',
        details: [
          {
            type: 'type.argos.co.uk/argos.order',
            paymentSessionId: 'PS-5000',
            advice: 'REQUEST_TIMEOUT',
          },
        ],
      },
    }),
  },
}

export default placeOrderResponseData
