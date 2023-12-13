import Response from '../../helpers/API/Response'

const snapshotServiceDatasets = {
  snapshotInitialisation: {
    SnapshotInitialised: {
      description: '200: Snapshot initialised (Default)',
      response: new Response({
        id: 'SnapshotInitialised',
        statusCode: 200,
        error: null,
      }),
    },
    StockHoldPartialAllocation: {
      description: '200: Stock Hold Partial Allocation',
      disabled: true, // Dynamically set via stock hold stub dropdown
      response: new Response({
        id: 'StockHoldPartialAllocation',
        statusCode: 200,
        error: {
          message: 'Stock hold could only partially be made',
          status: 'STOCK_HOLD_PARTIAL_ALLOCATION',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'STOCK_HOLD_PARTIAL_ALLOCATION',
            },
          ],
        },
      }),
    },
    SnapshotInitialisedInProgress: {
      description: '202: Order snapshot initialisation in progress',
      response: new Response({
        id: 'SnapshotInitialisedInProgress',
        statusCode: 202,
        error: null,
      }),
    },
    PaymentInvalidIPAddress: {
      description: '400: Invalid IP address',
      response: new Response({
        id: 'PaymentInvalidIPAddress',
        statusCode: 400,
        error: {
          message: 'ipAddress on snapshot.source is missing or invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_IPADDRESS',
            },
          ],
        },
      }),
    },
    PaymentInvalidSalesChannel: {
      description: '400: Invalid Sales Channel',
      response: new Response({
        id: 'PaymentInvalidSalesChannel',
        statusCode: 400,
        error: {
          message: 'salesChannel snapshot.source is missing or invalid (not a numeric value)',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_SALESCHANNEL',
            },
          ],
        },
      }),
    },
    PaymentInvalidSourceData: {
      description: '400: Invalid Source Data',
      response: new Response({
        id: 'PaymentInvalidSourceData',
        statusCode: 400,
        error: {
          message: 'salesChannel, userAgent or deviceDetails on snapshot.source is empty',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_SOURCEDATA',
            },
          ],
        },
      }),
    },
    PaymentInvalidForename: {
      description: '400: Invalid Forename',
      response: new Response({
        id: 'PaymentInvalidForename',
        statusCode: 400,
        error: {
          message: 'firstName on snapshot.customer is missing or invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_FORENAME',
            },
          ],
        },
      }),
    },
    PaymentInvalidSurname: {
      description: '400: Invalid Surname',
      response: new Response({
        id: 'PaymentInvalidSurname',
        statusCode: 400,
        error: {
          message: 'lastName on snapshot.customer is missing or invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_SURNAME',
            },
          ],
        },
      }),
    },
    PaymentInvalidEmail: {
      description: '400: Invalid Email',
      response: new Response({
        id: 'PaymentInvalidEmail',
        statusCode: 400,
        error: {
          message: 'email on snapshot.customer is missing or invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_EMAIL',
            },
          ],
        },
      }),
    },
    PaymentInvalidMobilePhone: {
      description: '400: Invalid Mobile Phone',
      response: new Response({
        id: 'PaymentInvalidMobilePhone',
        statusCode: 400,
        error: {
          message: 'mobile phone on snapshot.customer is invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_MOBILE_PHONE',
            },
          ],
        },
      }),
    },
    PaymentInvalidHomePhone: {
      description: '400: Invalid Home Phone',
      response: new Response({
        id: 'PaymentInvalidHomePhone',
        statusCode: 400,
        error: {
          message: 'home phone on snapshot.customer is invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_HOME_PHONE',
            },
          ],
        },
      }),
    },
    PaymentInvalidTitle: {
      description: '400: Invalid Title',
      response: new Response({
        id: 'PaymentInvalidTitle',
        statusCode: 400,
        error: {
          message: 'title on snapshot.customer is invalid',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INVALID_TITLE',
              customerId: '1787636',
            },
          ],
        },
      }),
    },
    PaymentPhoneMissing: {
      description: '400: Payment Phone Missing',
      response: new Response({
        id: 'PaymentPhoneMissing',
        statusCode: 400,
        error: {
          message: 'mobile and home phones on snapshot.customer are missing',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_PHONE_MISSING',
            },
          ],
        },
      }),
    },
    PaymentMissingLines: {
      description: '400: Payment Missing Lines',
      response: new Response({
        id: 'PaymentMissingLines',
        statusCode: 400,
        error: {
          message: 'Order lines are missing on snapshot',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_MISSING_LINES',
            },
          ],
        },
      }),
    },
    PaymentMissingAddresses: {
      description: '400: Payment Missing Addresses',
      response: new Response({
        id: 'PaymentMissingAddresses',
        statusCode: 400,
        error: {
          message: 'Addresses missing on snapshot',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_MISSING_ADDRESSES',
            },
          ],
        },
      }),
    },
    PaymentMissingBillingAddress: {
      description: '400: Payment Missing Billing Address',
      response: new Response({
        id: 'PaymentMissingBillingAddress',
        statusCode: 400,
        error: {
          message: 'Billing address missing on snapshot. (No type ADDRESS_TYPE_BOTH or ADDRESS_TYPE_BILLING )',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_MISSING_BILLING_ADDRESS',
              customerId: '1787636',
            },
          ],
        },
      }),
    },
    PaymentMissingCustomerDetails: {
      description: '400: Payment Missing Customer Details',
      response: new Response({
        id: 'PaymentMissingCustomerDetails',
        statusCode: 400,
        error: {
          message: 'Customer details object on snapshot is missing',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_MISSING_CUSTOMER_DETAILS',
              customerId: '1787636',
            },
          ],
        },
      }),
    },
    StockHoldQuantityError: {
      description: '400: Stock Hold Quantity Error',
      response: new Response({
        id: 'StockHoldQuantityError',
        statusCode: 400,
        error: {
          message: 'Stock hold input quantity less than 1',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'STOCK_HOLD_QUANTITY_ERROR',
            },
          ],
        },
      }),
    },
    UserCookiesMissing: {
      description: '400: User Cookies Missing',
      response: new Response({
        id: 'UserCookiesMissing',
        statusCode: 400,
        error: {
          message: 'Missing cookies for user data',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'USER_COOKIES_MISSING',
            },
          ],
        },
      }),
    },
    PaymentSourceError: {
      description: '400: Source Error',
      response: new Response({
        id: 'PaymentSourceError',
        statusCode: 400,
        error: {
          message: 'Source error',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'SOURCE_ERROR',
            },
          ],
        },
      }),
    },
    IncompleteBooking: {
      description: '400: Incomplete Booking',
      response: new Response({
        id: 'IncompleteBooking',
        statusCode: 400,
        error: {
          message: 'Booking is incomplete',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'INCOMPLETE_BOOKING',
            },
          ],
        },
      }),
    },
    Unauthorized: {
      description: '401: Authentication Error',
      response: new Response({
        id: 'Unauthorized',
        statusCode: 401,
        error: {
          message: 'Authentication cookies are not valid nor missing',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'UNAUTHORIZED',
            },
          ],
        },
      }),
    },
    OrderSnapshotAccessForbidden: {
      description: '403: Access to snapshot forbidden',
      response: new Response({
        id: 'OrderSnapshotAccessForbidden',
        statusCode: 403,
        status: 'FORBIDDEN',
        error: {
          message: 'ACCESS FORBIDDEN TO SNAPSHOT',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
    StockHoldFailedDependency: {
      description: '424: Stock Hold Failed Dependency',
      disabled: true, // Dynamically set via stock hold stub dropdown
      response: new Response({
        id: 'StockHoldFailedDependency',
        statusCode: 424,
        error: {
          message: `Stock hold could not be made for any product(s)`,
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'STOCK_HOLD_FAILED_ALLOCATION',
            },
          ],
        },
      }),
    },
    OrderSnapshotNotOwned: {
      description: '424: Order Snapshot Not Owned',
      response: new Response({
        id: 'OrderSnapshotNotOwned',
        statusCode: 424,
        error: {
          message: `Customer is not allowed access to the snapshot in case of missing user Id`,
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'ORDER_SNAPSHOT_NOT_OWNED',
            },
          ],
        },
      }),
    },
    PaymentInitialisationError: {
      description: '500: Payment Initialisation Error',
      response: new Response({
        id: 'PaymentInitialisatonError',
        statusCode: 500,
        error: {
          message: 'Failed to initialise the payment',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'PAYMENT_INITIALISATION_ERROR',
            },
          ],
        },
      }),
    },
    OrderSnapshotUpdateFailed: {
      description: '500: Order Snapshot Update Failed',
      response: new Response({
        id: 'OrderSnapshotUpdateFailed',
        statusCode: 500,
        error: {
          message: 'Order snapshot update failed',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'ORDER_SNAPSHOT_UPDATE_FAILED',
            },
          ],
        },
      }),
    },
    StockHoldServiceError: {
      description: '500: Stock Hold Service Error',
      response: new Response({
        id: 'StockHoldServiceError',
        statusCode: 500,
        error: {
          message: `STOCK HOLD HAS AN INTERNAL ERROR`,
          details: [
            {
              type: 'type.argos.co.uk/argos.order.prepay.Get',
              advice: 'STOCK_HOLD_SERVICE_ERROR',
            },
          ],
        },
      }),
    },
    StockHoldProductOrStoreIdError: {
      description: '500: Stock Hold Product or Store ID Error',
      response: new Response({
        id: 'StockHoldProductOrStoreIdError',
        statusCode: 500,
        error: {
          message: 'Stock hold product/Store id Error missing error',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'STOCK_HOLD_PRODUCT_OR_STOREID_ERROR',
            },
          ],
        },
      }),
    },
    StockHoldUnableToReserve: {
      description: '500: Stock Hold Unable to Reserve',
      response: new Response({
        id: 'StockHoldUnableToReserve',
        statusCode: 500,
        error: {
          message: `Couldn't hold the stock`,
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'STOCK_HOLD_UNABLE_TO_RESERVE',
            },
          ],
        },
      }),
    },
    UserDetailsRetrieveError: {
      description: '500: User Details Retrieve Error',
      response: new Response({
        id: 'UserDetailsRetrieveError',
        statusCode: 500,
        error: {
          message: 'User details retrieve error',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.type.OrderSnapshot',
              advice: 'USER_DETAILS_RETRIEVE_ERROR',
            },
          ],
        },
      }),
    },
    GenericError: {
      description: '500: Generic Error',
      response: new Response({
        id: 'GenericError',
        statusCode: 500,
        error: {
          message: 'Generic error',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
  },
  snapshotGet: {
    PaymentGet: {
      description: '200: Get Snapshot (Default)',
      response: new Response({
        id: 'SnapshotGet',
        statusCode: 200,
        error: null,
      }),
    },
    Unauthorized: {
      description: '401: Authentication Error',
      response: new Response({
        id: 'Unauthorized',
        statusCode: 401,
        error: {
          message: 'Authentication cookies are not valid or missing',
          details: [
            {
              type: 'type.argos.co.uk/argos.order.prepay.Get',
              advice: 'REQUEST_UNAUTHORISED',
            },
          ],
        },
      }),
    },
    SnapshotNotFound: {
      description: '404: Snapshot Not Found',
      response: new Response({
        id: 'SnapshotNotFound',
        statusCode: 404,
        error: {
          message: 'The order snapshot could not be found',
          status: 'NOT_FOUND',
          details: [
            {
              type: 'type.argos.co.uk/argos.order.prepay.Get',
              advice: 'ORDER_SNAPSHOT_NOT_FOUND',
            },
          ],
        },
      }),
    },
    OrderSnapshotUpdateFailed: {
      description: '500: Order snapshot update failed',
      response: new Response({
        id: 'OrderSnapshotUpdateFailed',
        statusCode: 500,
        error: {
          message: 'The order snapshot could not be found',
          details: [
            {
              type: 'type.argos.co.uk/argos.order.prepay.Get',
              advice: 'INTERNAL_SERVER_ERROR',
            },
          ],
        },
      }),
    },
  },
  snapshotStatus: {
    SnapshotSuccessfullyInitialised: {
      description: '200: Order snapshot successfully initialised',
      response: new Response({
        id: 'SnapshotSuccessfullyInitialised',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_INITIALISED',
      }),
    },
    OrderSnapshotUpdateSent: {
      description: '200: Order snapshot update sent successfully',
      response: new Response({
        id: 'OrderSnapshotUpdateSent',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_UPDATE_SENT',
      }),
    },
    OrderSnapshotOrderPending: {
      description: '200: Order at pending status after order placed',
      response: new Response({
        id: 'OrderSnapshotOrderPending',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_ORDER_PENDING',
      }),
    },
    OrderSnapshotOrderPlaced: {
      description: '200: Order placed successfully',
      response: new Response({
        id: 'OrderSnapshotOrderPlaced',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_ORDER_PLACED',
      }),
    },
    OrderSnapshotPendingBooking: {
      description: '200: 🚚 Order snapshot yet to complete booking delivery slots for the checkout',
      response: new Response({
        id: 'OrderSnapshotPendingBooking',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_PENDING_BOOKING',
      }),
    },
    OrderSnapshotBookingComplete: {
      description: '200: Order snapshot status after booking a slot has been done',
      response: new Response({
        id: 'OrderSnapshotBookingComplete',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_BOOKING_COMPLETE',
      }),
    },
    OrderSnapshotCreateFulfilmentFailed: {
      description:
        '200: Order snapshot status after create fulfilment (HD) fails due to stockhold being unavailable for all products',
      response: new Response({
        id: 'OrderSnapshotCreateFulfilmentFailed',
        statusCode: 200,
        status: 'ORDER_SNAPSHOT_CREATE_FULFILMENT_FAILED',
      }),
    },
    OrderSnapshotInvalidDetails: {
      description: '500: Invalid order snapshot details submitted',
      response: new Response({
        id: 'OrderSnapshotInvalidDetails',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_INITIALISATION_FAILED',
        error: {
          message: 'ORDER_SNAPSHOT_INITIALISATION_FAILED',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
    OrderSnapshotFailed: {
      description: '500: Failed to store snapshot of the order',
      response: new Response({
        id: 'OrderSnapshotFailed',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_FAILED',
        error: {
          message: 'ORDER_SNAPSHOT_FAILED',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
    OrderSnapshotOrderException: {
      description: '500: Exception received while placing order',
      response: new Response({
        id: 'OrderSnapshotOrderException',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_ORDER_EXCEPTION',
        error: {
          message: 'ORDER_SNAPSHOT_ORDER_EXCEPTION',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
    OrderSnapshotOrderRejected: {
      description: '500: Order rejected while placing order',
      response: new Response({
        id: 'OrderSnapshotOrderRejected',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_ORDER_REJECTED',
        error: {
          message: 'ORDER_SNAPSHOT_ORDER_REJECTED',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
    OrderSnapshotUnrecoverablePaymentError: {
      description: '500: Order rejected due to suspected fraudulent payment',
      response: new Response({
        id: 'OrderSnapshotUnrecoverablePaymentError',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_UNRECOVERABLE_PAYMENT_ERROR',
        error: {
          message: 'ORDER_SNAPSHOT_UNRECOVERABLE_PAYMENT_ERROR',
          details: [
            {
              type: '?',
              advice: 'ORDER_SNAPSHOT_UNRECOVERABLE_PAYMENT_ERROR',
            },
          ],
        },
      }),
    },
    OrderSnapshotInitialisationFailed: {
      description: '500: Order snapshot initialisation failed and should be retried',
      response: new Response({
        id: 'OrderSnapshotInitialisationFailed',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_INITIALISATION_FAILED',
        error: {
          message: 'ORDER_SNAPSHOT_INITIALISATION_FAILED',
          details: [
            {
              type: '?',
              advice: '?',
            },
          ],
        },
      }),
    },
    OrderSnapshotUnrecoverablePromotionError: {
      description: '500: Promotion service return an error',
      response: new Response({
        id: 'OrderSnapshotUnrecoverablePromotionError',
        statusCode: 500,
        status: 'ORDER_SNAPSHOT_UNRECOVERABLE_PROMOTION_ERROR',
        error: {
          message: 'ORDER_SNAPSHOT_UNRECOVERABLE_PROMOTION_ERROR',
          details: [
            {
              type: 'OrderSnapshotUnrecoverablePromotionError',
              advice: 'ORDER_SNAPSHOT_UNRECOVERABLE_PROMOTION_ERROR',
            },
          ],
        },
      }),
    },
  },
  prepareForCheckout: {
    SnapshotSuccessfullyPrepared: {
      description: '200: Order snapshot successfully prepared',
      response: new Response({
        id: 'SnapshotSuccessfullyPrepared',
        statusCode: 200,
        error: null,
      }),
    },
    InvalidSourceData: {
      description: '500: Source data is missing',
      response: new Response({
        id: 'InvalidSourceData',
        statusCode: 500,
        error: {
          message: 'Request has invalid data',
          status: 'VALIDATION_ERROR',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.request.PrepareForCheckoutRequest',
              advice: 'PREPARE_MISSING_SOURCE',
            },
          ],
        },
      }),
    },
    MissingBookingID: {
      description: '424: Missing booking ID',
      response: new Response({
        id: 'MissingBookingID',
        statusCode: 424,
        error: {
          message: 'Booking Id was missing for a bookable item (LARGE/SMALL items) from the hand over call',
          status: 'MISSING_BOOKING_ID',
          details: [
            {
              type: 'uk.co.argos.checkout.prepayservice.dto.request.PrepareForCheckoutRequest',
              advice: 'MISSING_BOOKING_ID',
            },
          ],
        },
      }),
    },
  },
  calculatePrices: {
    CalculatePricesSuccess: {
      description: '200: Calculated prices successfully',
      response: new Response({
        id: 'CalculatePricesSuccess',
        statusCode: 200,
        error: null,
      }),
    },
    SnapshotNotFound: {
      description: '404: Snapshot Not Found',
      response: new Response({
        id: 'SnapshotNotFound',
        statusCode: 404,
        error: {
          message: 'The order snapshot could not be found',
          status: 'NOT_FOUND',
          details: [
            {
              type: 'type.argos.co.uk/argos.order.prepay.Get',
              advice: 'ORDER_SNAPSHOT_NOT_FOUND',
            },
          ],
        },
      }),
    },
    CalculatePricesFailed: {
      description: '500: Calculating prices failed',
      response: new Response({
        id: 'CalculatePricesFailed',
        statusCode: 500,
        error: {
          message: 'ORDER CALCULATION HAS AN INTERNAL ERROR',
          status: 'INTERNAL_SERVER_ERROR',
          details: [
            {
              advice: 'ORDER_CALCULATE_SERVICE_ERROR',
              type: 'type.argos.co.uk/argos.order.prepay.post',
            },
          ],
        },
      }),
    },
  },
}

export default snapshotServiceDatasets
