import Response from '../../../../helpers/API/Response'

export const addAddressResponseData = {
  AddressAdded: {
    description: '200 Address added successfully',
    response: new Response({
      id: 'AddressAdded',
      statusCode: 200,
      error: null,
    }),
  },
  AddressMissing: {
    description: '400 The address in the request is missing',
    response: new Response({
      id: 'AddressMissing',
      statusCode: 400,
      error: {
        message: 'The address in the request is missing',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_MISSING',
          },
        ],
      },
    }),
  },
  InvalidAddressHouse: {
    description: '400 The address house in the request is invalid',
    response: new Response({
      id: 'InvalidAddressHouse',
      statusCode: 400,
      error: {
        message: 'The address house in the request is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_ADDRESS_HOUSE',
          },
        ],
      },
    }),
  },
  InvalidAddressHouseLineOne: {
    description: '400 The first line in the address is invalid',
    response: new Response({
      id: 'InvalidAddressHouseLineOne',
      statusCode: 400,
      error: {
        message: 'The first line in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_ADDRESS_LINE_ONE',
          },
        ],
      },
    }),
  },
  InvalidAddressHouseLineTwo: {
    description: '400 The second line in the address is invalid',
    response: new Response({
      id: 'InvalidAddressHouseLineTwo',
      statusCode: 400,
      error: {
        message: 'The second line in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_ADDRESS_LINE_TWO',
          },
        ],
      },
    }),
  },
  InvalidCity: {
    description: '400 The city in the address is invalid',
    response: new Response({
      id: 'InvalidCity',
      statusCode: 400,
      error: {
        message: 'The city in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_CITY',
          },
        ],
      },
    }),
  },
  InvalidCounty: {
    description: '400 The county in the address is invalid',
    response: new Response({
      id: 'InvalidCity',
      statusCode: 400,
      error: {
        message: 'The county in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_COUNTY',
          },
        ],
      },
    }),
  },
  InvalidPostCode: {
    description: '400 The postcode in the address is invalid',
    response: new Response({
      id: 'InvalidPostCode',
      statusCode: 400,
      error: {
        message: 'The postcode in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_POSTCODE',
          },
        ],
      },
    }),
  },
  InvalidCountry: {
    description: '400 The country in the address is invalid',
    response: new Response({
      id: 'InvalidCountry',
      statusCode: 400,
      error: {
        message: 'The country in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_COUNTRY',
          },
        ],
      },
    }),
  },
  InvalidHomePhone: {
    description: '400 The homephone in the address is invalid',
    response: new Response({
      id: 'InvalidHomePhone',
      statusCode: 400,
      error: {
        message: 'The homephone in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_HOMEPHONE',
          },
        ],
      },
    }),
  },
  InvalidMobilePhone: {
    description: '400 The mobilephone in the address is invalid',
    response: new Response({
      id: 'InvalidMobilePhone',
      statusCode: 400,
      error: {
        message: 'The mobilephone in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_MOBILEPHONE',
          },
        ],
      },
    }),
  },
  InvalidPerson: {
    description: '400 The person details in the address is invalid',
    response: new Response({
      id: 'InvalidMobilePhone',
      statusCode: 400,
      error: {
        message: 'The person details in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_PERSON',
          },
        ],
      },
    }),
  },
  InvalidTitle: {
    description: '400 The title in the address is invalid',
    response: new Response({
      id: 'InvalidTitle',
      statusCode: 400,
      error: {
        message: 'The title in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_TITLE',
          },
        ],
      },
    }),
  },
  InvalidFirstname: {
    description: '400 The firstname in the address is invalid',
    response: new Response({
      id: 'InvalidFirstname',
      statusCode: 400,
      error: {
        message: 'The firstname in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_FIRSTNAME  ',
          },
        ],
      },
    }),
  },
  InvalidLastname: {
    description: '400 The lastname in the address is invalid',
    response: new Response({
      id: 'InvalidLasttname',
      statusCode: 400,
      error: {
        message: 'The lastname in the address is invalid',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_INVALID_LASTNAME  ',
          },
        ],
      },
    }),
  },
  WCSAddressMaxLimit: {
    description: '400 Max address limit reached',
    response: new Response({
      id: 'WCSAddressMaxLimit',
      statusCode: 400,
      error: {
        message: 'Max address limit reached',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'WCS_ADDRESS_MAX_LIMIT',
          },
        ],
      },
    }),
  },
  AddressUnknownError: {
    description: '400 Unknown validation error occured on WCS side',
    response: new Response({
      id: 'AddressUnknownError',
      statusCode: 400,
      error: {
        message: 'Unknown validation error occured on WCS side',
        details: [
          {
            type: 'uk.co.argos.account.domain.types.customer.address.Address',
            advice: 'ADDRESS_UNKNOWN_ERROR',
          },
        ],
      },
    }),
  },
  MissingCookies: {
    description: '400 Cookies missing (WCS authorisation cookies are required)',
    response: new Response({
      id: 'MissingCookies',
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
  AddressRequestRejected: {
    description: '424 Failed WCS dependency',
    response: new Response({
      id: 'AddressRequestRejected',
      statusCode: 424,
      error: {
        message: '424 Failed WCS dependency',
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
    description: '500 Service unreachable',
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
