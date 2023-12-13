import Response from '../../../helpers/API/Response'

export const getSlotsResponseData = {
  Success: {
    description: '200: Slots retrieved (Default)',
    response: new Response({ id: 'Success', statusCode: 200, error: null }),
  },
  FulfilmentMissing: {
    description: '400: Fulfilment missing',
    response: new Response({
      id: 'FulfilmentMissing',
      statusCode: 400,
      error: {
        message: 'Fulfilment missing',
        status: 'FULFILMENT_MISSING',
        details: [{ type: 'type', advice: 'FULFILMENT_MISSING' }],
      },
    }),
  },
  ConsignmentMissing: {
    description: '400: Consignment missing',
    response: new Response({
      id: 'ConsignmentMissing',
      statusCode: 400,
      error: {
        message: 'consignment missing',
        status: 'CONSIGNMENT_MISSING',
        details: [{ type: 'type', advice: 'CONSIGNMENT_MISSING' }],
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
