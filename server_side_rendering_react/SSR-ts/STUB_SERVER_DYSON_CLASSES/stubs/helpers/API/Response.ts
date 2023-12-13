import ErrorResponse from './ErrorResponse'

interface Error {
  message: string
  status?: string
  details: {
    type: string
    advice: string
    customerId?: string
    paymentSessionId?: string
    sentBy?: string
    sentTo?: string
    promoCode?: string[]
  }[]
}

interface ResponseParams {
  id?: string
  statusCode: number
  error?: Error | null
  body?: unknown
  [key: string]: unknown
}

/**
 * Response class to generate stubbed backend response JSON
 */
class Response {
  id?: string
  statusCode: number
  error: ErrorResponse | null
  body: Record<string, unknown>

  constructor(response: ResponseParams) {
    const { id, statusCode, error, ...rest } = response

    if (error) {
      const { details, message, status } = error
      this.error = new ErrorResponse({
        statusCode,
        message,
        status,
        details,
      })

      this.body = rest
    } else {
      this.body = response
    }

    this.id = id
    this.statusCode = statusCode
  }

  toJson() {
    if (this.error) {
      return this.error.toJson()
    }

    if (Object.keys(this.body).length) {
      return this.body
    }

    return {}
  }
}

export default Response
