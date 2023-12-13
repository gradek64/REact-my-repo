import Response from '../../../helpers/API/Response'

const creditPlansResponseDatasets = {
  Success: {
    description: '200: Successfully fetched credit plans (Default)',
    setupCreditPlansResponse: new Response({
      id: 'Success',
      statusCode: 200,
      error: null,
    }),
  },
  Failure: {
    description: '500: Failed to fetch credit plans',
    setupCreditPlansResponse: new Response({
      id: 'Failure',
      statusCode: 500,
      error: null,
    }),
  },
}

export { creditPlansResponseDatasets }
