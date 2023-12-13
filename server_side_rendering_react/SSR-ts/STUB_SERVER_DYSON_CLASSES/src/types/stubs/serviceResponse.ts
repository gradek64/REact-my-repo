import Response from '../../../stubs/helpers/API/Response'

export interface SessionResponseStub {
  response: Pick<Response, 'statusCode' | 'error' | 'id'>
  responseType: string
}
