import Response from '../../../helpers/API/Response'

export const createUserAccountServiceResponseData = {
  UserRegistered: {
    description: '201: User registered successfully',
    response: new Response({
      id: 'UserRegistered',
      statusCode: 201,
      error: null,
    }),
  },
  ValidationError: {
    description: '400: Request has invalid data (VALIDATION_ERROR)',
    response: new Response({
      id: 'ValidationError',
      statusCode: 400,
      error: {
        message: 'Request has invalid data',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'Email',
            advice: 'INVALID_EMAIL',
          },
        ],
      },
    }),
  },
  FailedDependencyError: {
    description: '424: Failed dependency - rejected',
    response: new Response({
      id: 'FailedDependencyError',
      statusCode: 424,
      error: {
        message: 'Request failed due to WCS dependency',
        status: 'REQUEST_REJECTED',
        details: [
          {
            type: 'type',
            advice: 'REQUEST_REJECTED',
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
        status: 'ACCOUNT_SERVICE_ERROR',
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

export enum CreateUserResponsesTypes {
  UserRegistered = 'UserRegistered',
  ValidationError = 'ValidationError',
  FailedDependencyError = 'FailedDependencyError',
  InternalServerError = 'InternalServerError',
}
