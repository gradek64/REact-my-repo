import { APIResponse } from 'types/api'

export type CreateSessionResponsePayload = {
  token: string
}

export type CreateAnonymousSessionAPIRequest = {
  brand: 'arg' | 'hab' | 'tu'
}

export type CreateAnonymousSessionAPIResponse = APIResponse<CreateSessionResponsePayload>
