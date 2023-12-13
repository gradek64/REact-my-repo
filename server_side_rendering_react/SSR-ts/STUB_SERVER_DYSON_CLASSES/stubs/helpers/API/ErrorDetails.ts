import { ErrorDetail } from '../../../src/types/api/errorResponse'

/**
 * ErrorDetails class to generate specific error advice
 * @param {string} type - The type link for the error. E.g. type.argos.co.uk/argos.payment.Payment
 * @param {string} advice - The advice for the error. E.g. 'PAYMENT_INVALID_TWO_FA_CODE'
 */

class ErrorDetails {
  type: string
  advice: string
  sentBy?: string
  sentTo?: string

  constructor({ type, advice, sentBy, sentTo, ...props }: ErrorDetail<string> & { sentBy?: string; sentTo?: string }) {
    if (!type || !advice) {
      throw new Error('[helpers/API/ErrorDetails.js]: missing type or advice in dataset')
    }

    this.type = type
    this.advice = advice

    // PAYMENT_TWO_FA_REQUIRED
    this.sentBy = sentBy
    this.sentTo = sentTo

    /* optionial args */
    Object.assign(this, { ...props })
  }

  toJson() {
    return {
      type: this.type,
      advice: this.advice,
      ...(this.sentBy && { sentBy: this.sentBy }),
      ...(this.sentTo && { sentTo: this.sentTo }),
    }
  }
}

export default ErrorDetails
