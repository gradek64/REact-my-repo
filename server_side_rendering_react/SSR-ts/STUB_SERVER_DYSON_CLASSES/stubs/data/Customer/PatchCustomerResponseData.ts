import Response from '../../helpers/API/Response'

export const patchCustomerResponseData = {
  CustomerAssignedToSnapshot: {
    description: '201: Customer assigned to snapshot',
    response: new Response({
      id: 'CustomerAssignedToSnapshot',
      statusCode: 201,
      error: null,
    }),
  },
  OperationNotAllowed: {
    description: '403: Operation not allowed',
    response: new Response({
      id: 'OperationNotAllowed',
      statusCode: 403,
      error: {
        message: 'Operation not allowed',
        status: 'FORBIDDEN',
        details: [
          {
            type: 'type',
            advice: 'FORBIDDEN',
          },
        ],
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
        details: [
          {
            type: 'type',
            advice: 'CONFLICT',
          },
        ],
      },
    }),
  },
  GeneralError: {
    description: '500: General error',
    response: new Response({
      id: 'GeneralError',
      statusCode: 500,
      error: {
        message: 'General error',
        status: 'INTERNAL_SERVER_ERROR',
        details: [
          {
            type: 'type',
            advice: 'INTERNAL_SERVER_ERROR',
          },
        ],
      },
    }),
  },
  RequestTimeout: {
    description: '504: Request timeout',
    response: new Response({
      id: 'RequestTimeout',
      statusCode: 504,
      error: {
        message: 'Request timeout',
        status: 'GATEWAY_TIMEOUT',
        details: [
          {
            type: 'type',
            advice: 'GATEWAY_TIMEOUT',
          },
        ],
      },
    }),
  },
}

export enum PatchCustomerResponsesTypes {
  CustomerAssignedToSnapshot = 'CustomerAssignedToSnapshot',
  OperationNotAllowed = 'OperationNotAllowed',
  SnapshotUpdateNotAllowed = 'SnapshotUpdateNotAllowed',
  GeneralError = 'GeneralError',
  RequestTimeout = 'RequestTimeout',
}
