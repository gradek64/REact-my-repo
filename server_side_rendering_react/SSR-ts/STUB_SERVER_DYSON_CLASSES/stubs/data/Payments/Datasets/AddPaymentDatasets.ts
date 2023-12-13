import Response from '../../../helpers/API/Response'

const addPaymentResponseData = {
  PaymentAdded: {
    description: '201: New payment added successfully (Default)',
    response: new Response({
      id: 'PaymentAdded',
      statusCode: 201,
      error: null,
    }),
  },
  PaymentNotInitialised: {
    description: '400: Payment has to be initialised before requested operation',
    response: new Response({
      id: 'PaymentNotInitialised',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_NOT_INITIALISED',
          },
        ],
      },
    }),
  },
  PaymentInvalidAmount: {
    description: '400: Payment amount greater than outstanding amount on snapshot',
    response: new Response({
      id: 'PaymentInvalidAmount',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_INVALID_AMOUNT',
          },
        ],
      },
    }),
  },
  PaymentInvalidCurrency: {
    description: '400: currency on snapshot is missing or invalid',
    response: new Response({
      id: 'PaymentInvalidCurrency',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_INVALID_CURRENCY',
          },
        ],
      },
    }),
  },
  PaymentMissingCreditPlanId: {
    description: '400: Credit plan id in the request is missing',
    response: new Response({
      id: 'PaymentMissingCreditPlanId',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_MISSING_CREDIT_PLAN_ID',
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
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_INCOMPATIBLE_PAYMENT_METHODS',
          },
        ],
      },
    }),
  },
  PaymentMethodNotAvailable: {
    description: '400: Payment method is not available at the moment',
    response: new Response({
      id: 'PaymentMethodNotAvailable',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_METHOD_NOT_AVAILABLE',
          },
        ],
      },
    }),
  },
  PaymentAlreadyComplete: {
    description: '400: All necessary payment methods have been collected and no new payment methods are needed',
    response: new Response({
      id: 'PaymentAlreadyComplete',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_ALREADY_COMPLETE',
          },
        ],
      },
    }),
  },
  PaymentGiftCardExists: {
    description: '400: Same gift card added before for this order',
    response: new Response({
      id: 'PaymentGiftCardExists',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_GIFT_CARD_EXISTS',
          },
        ],
      },
    }),
  },
  PaymentGiftCardInvalid: {
    description: '400: Invalid gift card',
    response: new Response({
      id: 'PaymentGiftCardInvalid',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_GIFT_CARD_INVALID',
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
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_INSUFFICIENT_BALANCE',
          },
        ],
      },
    }),
  },
  PaymentMaxLimitReached: {
    description: '400: Number of payments added for the certain type is more than allowed limit for that type',
    response: new Response({
      id: 'PaymentMaxLimitReached',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_MAX_LIMIT_REACHED',
          },
        ],
      },
    }),
  },
  PaymentInvalidPaymentMethod: {
    description: '400: Given payment method is null/empty',
    response: new Response({
      id: 'PaymentInvalidPaymentMethod',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_INVALID_PAYMENT_METHOD',
          },
        ],
      },
    }),
  },
  PaymentMissingSavedPaymentMethodField: {
    description: '400: The token/cardHolderName/cardType field(s) are missing',
    response: new Response({
      id: 'PaymentMissingSavedPaymentMethodField',
      statusCode: 400,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_MISSING_SAVED_PAYMENT_METHOD_FIELD',
          },
        ],
      },
    }),
  },
  PaymentNonUKAddress: {
    description: '400: Payment Non UK Address',
    response: new Response({
      id: 'PaymentNonUKAddress',
      statusCode: 400,
      error: {
        message: 'Non UK addresses is not allowed for CAPE2 credit payment method',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_NON_UK_ADDRESS',
          },
        ],
      },
    }),
  },
  PaymentAddressMismatch: {
    description: '400: Payment Address Mismatch',
    response: new Response({
      id: 'PaymentAddressMismatch',
      statusCode: 400,
      error: {
        message:
          'Addresses should be compatible with the credit payment methods. E.g. CAPE2 application requires contact, billing and delivery address must be same',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_ADDRESS_MISMATCH',
          },
        ],
      },
    }),
  },
  PaymentAddressNameMismatch: {
    description: '400: Payment Address Name Mismatch',
    response: new Response({
      id: 'PaymentAddressNameMismatch',
      statusCode: 400,
      error: {
        message: 'The contact and billing person details should match for credit payment methods',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_ADDRESS_NAME_MISMATCH',
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
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  PaymentRejected: {
    description: '424: Payment service rejected the request',
    response: new Response({
      id: 'PaymentRejected',
      statusCode: 424,
      error: {
        message: 'Failed to add payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.AddPaymentRequest',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_REJECTED',
          },
        ],
      },
    }),
  },
  CreditServiceError: {
    description: '500: Credit service error',
    response: new Response({
      id: 'CreditServiceError',
      statusCode: 500,
      error: {
        message: 'MPP or CAPE2 credit service had an error check with tech team',
        details: [
          {
            type: 'type.argos.co.uk/argos.payment.Get',
            paymentSessionId: 'PS-2000',
            advice: 'CREDIT_SERVICE_ERROR',
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
        message: 'Failed to add payment',
        details: [
          {
            type: 'type.argos.co.uk/argos.payment.Get',
            paymentSessionId: 'PS-2000',
            advice: 'PAYMENT_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
}

export default addPaymentResponseData
