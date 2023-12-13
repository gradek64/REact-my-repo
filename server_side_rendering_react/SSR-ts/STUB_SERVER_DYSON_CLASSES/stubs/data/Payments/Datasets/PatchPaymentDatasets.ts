import Response from '../../../helpers/API/Response'

const patchPaymentResponseData = {
  PaymentCaptured: {
    description: '204: Payment captured successfully (Default)',
    response: new Response({
      id: 'PaymentCaptured',
      statusCode: 204,
      error: null,
    }),
  },
  PaymentInvalidAmount: {
    description: '400: Invalid amount',
    response: new Response({
      id: 'PaymentInvalidAmount',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_INVALID_AMOUNT',
          },
        ],
      },
    }),
  },
  PaymentInvalidTwoFaCode: {
    description: '400: Invalid Two factor authentication code',
    response: new Response({
      id: 'PaymentInvalidTwoFaCode',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_INVALID_TWO_FA_CODE',
          },
        ],
      },
    }),
  },
  PaymentInsufficientBalance: {
    description: '400: Insufficient balance',
    response: new Response({
      id: 'PaymentInsufficientBalance',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_INSUFFICIENT_BALANCE',
          },
        ],
      },
    }),
  },
  PaymentTwoFaRequiredSms: {
    description: '400: Two factor authentication required SMS',
    response: new Response({
      id: 'PaymentTwoFaRequiredSms',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_TWO_FA_REQUIRED',
            sentBy: 'sms',
            sentTo: '0******989',
          },
        ],
      },
    }),
  },
  PaymentTwoFaRequiredEmail: {
    description: '400: Two factor authentication required Email',
    response: new Response({
      id: 'PaymentTwoFaRequiredEmail',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_TWO_FA_REQUIRED',
            sentBy: 'email',
            sentTo: 'l****n@argos.co.uk',
          },
        ],
      },
    }),
  },
  PaymentUnsupportedOperation: {
    description: '400: Unsupported operation',
    response: new Response({
      id: 'PaymentUnsupportedOperation',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_UNSUPPORTED_OPERATION',
          },
        ],
      },
    }),
  },
  PaymentAlreadyComplete: {
    description: '400: Payment already complete',
    response: new Response({
      id: 'PaymentAlreadyComplete',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_ALREADY_COMPLETE',
          },
        ],
      },
    }),
  },
  PaymentIncompatiblePaymentMethods: {
    description: '400: Incompatible payment methods',
    response: new Response({
      id: 'PaymentIncompatiblePaymentMethods',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_INCOMPATIBLE_PAYMENT_METHODS',
          },
        ],
      },
    }),
  },
  PaymentMethodNotAvailable: {
    description: '400: Payment method is not available',
    response: new Response({
      id: 'PaymentMethodNotAvailable',
      statusCode: 400,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_METHOD_NOT_AVAILABLE',
          },
        ],
      },
    }),
  },
  OrderSnapshotNotFound: {
    description: "404: Snapshot id requested doesn't exist",
    response: new Response({
      id: 'OrderSnapshotNotFound',
      statusCode: 404,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'ORDER_SNAPSHOT_NOT_FOUND',
          },
        ],
      },
    }),
  },
  PaymentNotFound: {
    description: "404: Payment requested doesn't exist",
    response: new Response({
      id: 'PaymentNotFound',
      statusCode: 404,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_NOT_FOUND',
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
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  ServiceUnreachable: {
    description: '500: Service unreachable',
    response: new Response({
      id: 'ServiceUnreachable',
      statusCode: 500,
      error: {
        message: 'Failed to patch payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.PatchPaymentRequest',
            paymentSessionId: 'PS-4000',
            advice: 'PAYMENT_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
}

export default patchPaymentResponseData
