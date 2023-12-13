export interface AddNectarCardPayload {
  cardNumber: string
  onSuccess?: () => void
  onFailure?: () => void
}

export interface AddNectarCardSuccessPayload {
  cardNumber: string
}
export interface AddNectarCardFailurePayload {
  error: Error
  cardNumber?: string
}

export interface DeleteNectarCardPayload {
  last4Digits: string
  token: string
  onSuccess?: () => void
  onFailure?: () => void
}

export interface DeleteNectarCardSuccessPayload {
  last4Digits: string
  token: string
}
export interface DeleteNectarCardFailurePayload {
  error: Error
  last4Digits: string
  token: string
}

export interface UpdateNectarSuccessActionPayload {
  has2FaCode: boolean
  amount: number
}
export interface Toggle2faRequiredActionPayload {
  sentBy: string
  sentTo: string
  needs2fa: boolean
}
