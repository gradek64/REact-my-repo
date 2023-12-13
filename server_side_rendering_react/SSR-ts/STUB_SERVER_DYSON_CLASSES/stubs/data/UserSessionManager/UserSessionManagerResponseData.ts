import Response from '../../helpers/API/Response'

export const userSessionManagerResponseData = {
  AnonymousSessionCreated: {
    description: '201: Anonymous Session Created',
    response: new Response({
      id: 'AnonymousSessionCreated',
      statusCode: 201,
      error: null,
    }),
  },
  BrandMissingOrInvalid: {
    description: '400: Brand is missing or invalid',
    response: new Response({
      id: 'BrandMissingOrInvalid',
      statusCode: 400,
      error: {
        message: 'Brand is missing or invalid',
        status: 'BAD_REQUEST',
        details: [
          {
            type: 'type',
            advice: 'INVALID_REQUEST',
          },
        ],
      },
    }),
  },
  InternalServerError: {
    description: '500: Failed to process the request due to an internal server error',
    response: new Response({
      id: 'InternalServerError',
      statusCode: 500,
      error: {
        message: 'Failed to process the request due to an internal server error',
        status: 'INTERNAL_SERVER_ERROR',
        details: [
          {
            type: 'type',
            advice: 'UNKNOWN_ERROR',
          },
        ],
      },
    }),
  },
}
