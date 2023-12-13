import Response from '../../../helpers/API/Response'

export const createFulfilmentResponseData = {
  FulfilmentServiceStockHoldPartialAllocation: {
    description: '200: Stock Hold Partial Allocation',
    disabled: true, // Dynamically set via stock hold stub dropdown
    response: new Response({
      id: 'FulfilmentServiceStockHoldPartialAllocation',
      statusCode: 200,
      error: {
        message: 'Stock hold could only partially be made',
        status: 'STOCK_HOLD_PARTIAL_ALLOCATION',
        details: [
          {
            type: 'type',
            advice: 'STOCK_HOLD_PARTIAL_ALLOCATION',
          },
        ],
      },
    }),
  },
  FulfilmentCreated: {
    description: '200: Fulfilment created successfully (Default)',
    response: new Response({ id: 'FulfilmentCreated', statusCode: 200, error: null }),
  },
  SnapshotIncorrectOwnership: {
    description: '403: Access to snapshot forbidden',
    response: new Response({
      id: 'SnapshotIncorrectOwnership',
      statusCode: 403,
      status: 'FORBIDDEN',
      error: {
        message: 'ACCESS FORBIDDEN TO SNAPSHOT',
        details: [{ type: 'type', advice: 'FORBIDDEN' }],
      },
    }),
  },
  SnapshotUpdateNotAllowed: {
    description: '409: Snapshot update not allowed',
    response: new Response({
      id: 'SnapshotUpdateNotAllowed',
      statusCode: 409,
      error: {
        message: 'Snapshot update not allowed',
        status: 'CONFLICT',
        details: [{ type: 'type', advice: 'CONFLICT' }],
      },
    }),
  },
  PostcodeMismatchError: {
    description: '424: Postcode mismatch',
    response: new Response({
      id: 'PostcodeMismatchError',
      statusCode: 424,
      error: {
        message: 'Address matching postcode saved on snapshot not found',
        status: 'POSTCODE_MISMATCH',
        details: [{ type: 'type', advice: 'POSTCODE_MISMATCH' }],
      },
    }),
  },
  FulfilmentServiceStockHoldFailedAllocation: {
    description: '424: Stock Hold Failed Dependency',
    disabled: true, // Dynamically set via stock hold stub dropdown
    response: new Response({
      id: 'FulfilmentServiceStockHoldFailedAllocation',
      statusCode: 424,
      error: {
        message: 'Stock hold could not be made for any product(s)',
        status: 'FAILED_DEPENDENCY',
        details: [{ type: 'type', advice: 'STOCK_HOLD_FAILED_ALLOCATION' }],
      },
    }),
  },
  StockHoldExclusionFailure: {
    description: '424: All products on the basket are excluded for the postcode',
    response: new Response({
      id: 'StockHoldExclusionFailure',
      statusCode: 424,
      error: {
        message: 'All products on the basket are excluded for the postcode',
        status: 'FAILED_DEPENDENCY',
        details: [{ type: 'type', advice: 'STOCK_HOLD_EXCLUSION_FAILURE' }],
      },
    }),
  },
  InternalServerError: {
    description: '500: An unknown error occured',
    response: new Response({
      id: 'InternalServerError',
      statusCode: 500,
      error: {
        message: 'Fulfilment creation failed due to unknown error.',
        status: 'INTERNAL_SERVER_ERROR',
        details: [{ type: 'type', advice: 'INTERNAL_SERVER_ERROR' }],
      },
    }),
  },
}
