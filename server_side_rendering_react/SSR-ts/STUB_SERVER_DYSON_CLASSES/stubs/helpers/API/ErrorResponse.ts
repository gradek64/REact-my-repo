import ErrorCodes from './ErrorCodes'
import ErrorDetails from './ErrorDetails'
import { ErrorDetail } from '../../../src/types/api/errorResponse'

/**
 * ErrorResponse class to generate stubbed backend error response JSON
 * @param {number} statusCode - HTTP Status code
 * @param {string} message - Generic error message e.g. 'Failed to add payment'
 * @param {array} details - Array of objects containing type & advice properties
 */

class ErrorResponse {
  message: string
  status: string
  details: ErrorDetails[]

  constructor({
    statusCode,
    message,
    details = [],
    status,
  }: {
    statusCode: number
    message: string
    details: ErrorDetail<string>[]
    status?: string
  }) {
    if (!statusCode || !message || typeof details !== 'object' || !(details.length > 0)) {
      throw new Error('[helpers/API/ErrorResponse.js]: missing statusCode, message or details array in dataset')
    }

    this.details = []

    this.message = message

    this.status = status || (ErrorCodes[statusCode] as string)

    if (details.length > 0) {
      details.forEach(({ type, advice, ...props }) => {
        this.details.push(new ErrorDetails({ type, advice, ...props }))
      })
    }
  }

  toJson() {
    return {
      error: {
        message: this.message,
        status: this.status,
        details: this.details.map((detail) => detail.toJson()),
      },
    }
  }
}

export default ErrorResponse
