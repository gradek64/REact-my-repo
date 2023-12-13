interface NectarPayment {
  id: string
  currency: string
  captureId: string
  amount: number
  paymentMethod: string
  last4Digits: string
  balance: number
  remainingBalance: number
  accountType: string
  redemptionPermission: boolean
  balancePoints: number
  firstName: string
  lastName: string
  title: string
  maxSpendingLimit: number
  maxSpendingLimitPoints: number
  minSpendingLimit: number
  minSpendingLimitPoints: number
  increment: number
  incrementPoints: number
  exchangeRate: number
}

interface OnSuccess {
  (source: void): boolean
}

interface OnFailure {
  (source: void): boolean
}
export default interface payload {
  amount: number
  twoFaCode: number
  nectarPayment: NectarPayment
  onSuccess: OnSuccess
  onFailure: OnFailure
}

export interface NectarSagaInterface {
  payload: {
    amount: number
    twoFaCode: number
    nectarPayment: NectarPayment
    onSuccess: OnSuccess
    onFailure: OnFailure
  }
}
