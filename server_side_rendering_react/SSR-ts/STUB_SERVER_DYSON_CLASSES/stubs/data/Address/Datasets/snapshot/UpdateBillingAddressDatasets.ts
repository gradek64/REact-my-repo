import Response from '../../../../helpers/API/Response'

export const updateBillingAddressResponseData = {
  AddressAdded: {
    description: '200: Address added (Default)',
    response: new Response({
      id: 'AddressAdded',
      statusCode: 200,
      error: null,
    }),
  },
  InvalidData: {
    description: '400: Invalid data',
    response: new Response({
      id: 'InvalidData',
      statusCode: 400,
      error: {
        message: 'Request has invalid data',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.UpdateCustomerAddressRequest',
            advice: 'ADDRESS_MISSING',
          },
        ],
      },
    }),
  },
  Unauthorised: {
    description: '401: Authorisation error',
    response: new Response({
      id: 'Unauthorised',
      statusCode: 401,
      error: {
        message: 'Authentication cookies are not valid or missing',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.UpdateCustomerAddressRequest',
            advice: 'REQUEST_UNAUTHORISED',
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
        message: 'Snapshot is in one of the final states post order placement, and update is tried',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.UpdateCustomerAddressRequest',
            advice: 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
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
        message: 'Account service had an error check with tech team',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.UpdateCustomerAddressRequest',
            advice: 'ACCOUNT_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
}
