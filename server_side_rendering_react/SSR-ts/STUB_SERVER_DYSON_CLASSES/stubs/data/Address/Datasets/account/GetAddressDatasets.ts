import Response from '../../../../helpers/API/Response'

export const getAddressResponseData = {
  AddressReturned: {
    description: '200 Addresses returned successfully',
    response: new Response({
      id: 'AddressReturned',
      statusCode: 200,
      error: null,
    }),
  },
  AddressInvalidRequest: {
    description: '400 Invalid request. Cookies missing (WCS authorisation cookies are required)',
    response: new Response({
      id: 'AddressInvalidRequest',
      statusCode: 400,
      error: {
        message: 'Cookies missing (WCS authorisation cookies are required)',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'MISSING_COOKIES',
          },
        ],
      },
    }),
  },
  AddressAuthorizationError: {
    description: '401 WCS returns authorization error',
    response: new Response({
      id: 'AddressAuthorizationError',
      statusCode: 401,
      error: {
        message: 'WCS returns 401 authorization error',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'REQUEST_UNAUTHORISED',
          },
        ],
      },
    }),
  },
  UserAccountNotFound: {
    description: '404 WCS returns not found error',
    response: new Response({
      id: 'UserAccountNotFound',
      statusCode: 404,
      error: {
        message: 'WCS Failed dependency',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ACCOUNT_NOT_FOUND',
          },
        ],
      },
    }),
  },
  AddressRequestRejected: {
    description: '424 WCS Failed dependency',
    response: new Response({
      id: 'AddressRequestRejected',
      statusCode: 424,
      error: {
        message: 'WCS Failed dependency',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'REQUEST_REJECTED',
          },
        ],
      },
    }),
  },
  AccountServiceError: {
    description: '500 General error while processing',
    response: new Response({
      id: 'AccountServiceError',
      statusCode: 500,
      error: {
        message: 'Account service had an error check with tech team',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ACCOUNT_SERVICE_ERROR',
          },
        ],
      },
    }),
  },
}
