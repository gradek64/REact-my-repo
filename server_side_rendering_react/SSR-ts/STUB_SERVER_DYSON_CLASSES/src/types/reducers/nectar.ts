export interface NectarState {
  numOfAddNectarAttempts: number
  updatingNectar: boolean
  addingNectarCard: boolean
  deletingNectarCard: boolean
  deletingNectarCardError: boolean
  error: boolean
  requestCodeError: boolean
  needs2fa: boolean
  invalid2faCode: boolean
  sentBy: string
  sentTo: string
  insufficientBalanceError: boolean
  isLinked: boolean | null
  card?: {
    last4Digits: string
    token: string
  }
  totalEarnPoints: number
}
