import Response from '../../../helpers/API/Response'

export const getConsignmentsResponseData = {
  Success: {
    description: '200: Consignments retrieved (Default)',
    response: new Response({ id: 'Success', statusCode: 200, error: null }),
  },
  BadRequestError: {
    description: '400: Bad request error',
    response: new Response({
      id: 'BadRequestError',
      statusCode: 400,
      error: {
        message: 'Fulfilment missing',
        status: 'FULFILMENT_MISSING',
        details: [{ type: 'type', advice: 'FULFILMENT_MISSING' }],
      },
    }),
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
