import { PaymentMethod, PaymentMethodsAPIPayload, PaymentMethodStatus } from '../../../src/types/api'
import { Payment } from 'types/reducers'
import { PaymentMethodsStub, SerialisableStubObject } from '../../../src/types/stubs'

const APPLE_PAY_MAX_BALANCE = 125
const CREDIT_CAPE_MAX_BALANCE = 1000
const CREDIT_MPP_MAX_BALANCE = 1000
const CREDIT_MPP_MIN_BALANCE = 50

export default class PaymentMethods implements SerialisableStubObject<PaymentMethodsStub> {
  private _paymentMethods: PaymentMethodsAPIPayload['methods']
  private _paymentMethodAvailability: Record<PaymentMethod, PaymentMethodStatus>

  setDefaults() {
    const paymentMethods = {}
    const paymentMethodsAvailability = {}

    Object.keys(PaymentMethod).forEach((paymentMethod: PaymentMethod) => {
      paymentMethods[paymentMethod] = {
        status: PaymentMethodStatus.AVAILABLE,
        incompatibleWith: [],
      }

      paymentMethodsAvailability[paymentMethod] = PaymentMethodStatus.AVAILABLE
    })

    this._paymentMethods = paymentMethods as PaymentMethodsAPIPayload['methods']
    this._paymentMethodAvailability = paymentMethodsAvailability as Record<PaymentMethod, PaymentMethodStatus>
  }

  constructor() {
    this.setDefaults()
  }

  get paymentMethods() {
    return this._paymentMethods
  }

  toJson(): PaymentMethodsStub {
    return {
      methods: this.paymentMethods,
      availability: this._paymentMethodAvailability,
    }
  }

  fromJson(json: PaymentMethodsStub) {
    this._paymentMethods = json.methods
    this._paymentMethodAvailability = json.availability
  }

  reset() {
    this.setDefaults()
  }

  /**
   * This function resets all of the payment method's statuses to AVAILABLE
   * unless it is currently set as TEMPORARILY_DISABLED or PERMANENTLY_DISABLED in the dashboard.
   *
   * If Apple Pay is AVAILABLE in dashboard but the outstanding amount to pay is over
   * the Apple Pay limit then the status is set to OVER_MAX_SPEND_LIMIT
   */
  resetIncompatibility(outstanding: number, withoutSavings: number) {
    Object.keys(this.paymentMethods).forEach((key: PaymentMethod) => {
      // Persist the TEMPORARILY_DISABLED or PERMANENTLY_DISABLED statuses if they are set in the dashboard
      if (
        this._paymentMethodAvailability[key] === PaymentMethodStatus.TEMPORARILY_DISABLED ||
        this._paymentMethodAvailability[key] === PaymentMethodStatus.PERMANENTLY_DISABLED
      ) {
        this._paymentMethods[key] = {
          status: this._paymentMethodAvailability[key],
          incompatibleWith: [],
        }
        // When CAPE or MPP is being reset, and the outstanding balance is greater than their limit
        // or if apple pay is being reset, and the basket total is greater than their limit
        // Then we should set their status to OVER_MAX_SPEND_LIMIT
      } else if (
        (key === PaymentMethod.APPLE_PAY && withoutSavings > APPLE_PAY_MAX_BALANCE) ||
        (key === PaymentMethod.CREDIT_CAPE2 && outstanding > CREDIT_CAPE_MAX_BALANCE) ||
        (key === PaymentMethod.CREDIT_MPP && outstanding > CREDIT_MPP_MAX_BALANCE)
      ) {
        this._paymentMethods[key] = {
          status: PaymentMethodStatus.OVER_MAX_SPEND_LIMIT,
          incompatibleWith: [],
        }
        // When MPP is being reset, and the outstanding balance is less than the limit
        // Then we should set the status to UNDER_MIN_SPEND_LIMIT
      } else if (key === PaymentMethod.CREDIT_MPP && outstanding < CREDIT_MPP_MIN_BALANCE) {
        this._paymentMethods[key] = {
          status: PaymentMethodStatus.UNDER_MIN_SPEND_LIMIT,
          incompatibleWith: [],
        }

        // When the status being reset is anything except TEMPORARILY_DISABLED or PERMANENTLY_DISABLED
        // We should reset it to AVAILABLE
      } else if (
        this._paymentMethods[key].status !== PaymentMethodStatus.TEMPORARILY_DISABLED &&
        this._paymentMethods[key].status !== PaymentMethodStatus.PERMANENTLY_DISABLED
      ) {
        this._paymentMethods[key] = {
          status: PaymentMethodStatus.AVAILABLE,
          incompatibleWith: [],
        }
      }
    })
  }

  calculateStatuses(payments: Payment[], outstanding: number, withoutSavings: number) {
    this.resetIncompatibility(outstanding, withoutSavings)

    payments.forEach((payment) => {
      switch (payment.paymentMethod) {
        case PaymentMethod.PAYPAL: {
          this.setIncompatibleWithArray(PaymentMethod.PAYPAL, [PaymentMethod.CARD_NECTAR_SPEND])
          break
        }
        case PaymentMethod.APPLE_PAY: {
          this.setIncompatibleWithArray(PaymentMethod.APPLE_PAY, [PaymentMethod.CARD_NECTAR_SPEND])
          if (withoutSavings > APPLE_PAY_MAX_BALANCE) this.setOverLimit(PaymentMethod.APPLE_PAY)
          break
        }
        case PaymentMethod.CARD_NECTAR_SPEND: {
          if (payment.amount !== 0) {
            this.setIncompatibleWithArray(PaymentMethod.CARD_NECTAR_SPEND, [
              PaymentMethod.PAYPAL,
              PaymentMethod.APPLE_PAY,
            ])
            if (withoutSavings > APPLE_PAY_MAX_BALANCE) this.setOverLimit(PaymentMethod.APPLE_PAY)
          }
          break
        }
        default:
      }
    })

    if (outstanding === 0) this.setPaymentMethodsComplete()
  }

  setPaymentMethodsComplete() {
    Object.keys(PaymentMethod)
      .filter(
        (key: PaymentMethod) =>
          !['TEMPORARILY_DISABLED', 'PERMANENTLY_DISABLED'].includes(this._paymentMethods[key].status),
      )
      .forEach((key) => {
        this._paymentMethods[key] = {
          status: PaymentMethodStatus.PAYMENT_COMPLETE,
          incompatibleWith: [],
        }
      })
  }

  setIncompatibleWithArray(selectedPaymentMethod: PaymentMethod, incompatibleWith: PaymentMethod[], append = true) {
    incompatibleWith.forEach((incompatiblePaymentMethod) => {
      // If the status is disabled, do not change it to incompatible
      if (
        this._paymentMethods[incompatiblePaymentMethod].status !== PaymentMethodStatus.PERMANENTLY_DISABLED &&
        this._paymentMethods[incompatiblePaymentMethod].status !== PaymentMethodStatus.TEMPORARILY_DISABLED
      ) {
        this.setIncompatibleWith(incompatiblePaymentMethod, selectedPaymentMethod, append)
      }
    })
  }

  setIncompatibleWith(paymentMethod: PaymentMethod, incompatibleWith: PaymentMethod, append: boolean) {
    this._paymentMethods[paymentMethod].status = PaymentMethodStatus.INCOMPATIBLE
    let existingIncompatibleWithArray = this._paymentMethods[paymentMethod].incompatibleWith
    if (!append) {
      existingIncompatibleWithArray = [incompatibleWith]
    } else if (existingIncompatibleWithArray.indexOf(incompatibleWith) === -1) {
      existingIncompatibleWithArray.push(incompatibleWith)
    }
    this._paymentMethods[paymentMethod].incompatibleWith = existingIncompatibleWithArray
  }

  setOverLimit(paymentMethod: PaymentMethod) {
    this._paymentMethods[paymentMethod].status = PaymentMethodStatus.OVER_MAX_SPEND_LIMIT
  }

  setPaymentMethodStatus(paymentMethod: PaymentMethod, value: PaymentMethodStatus) {
    this._paymentMethods[paymentMethod].status = value
    this._paymentMethodAvailability[paymentMethod] = value
  }
}
