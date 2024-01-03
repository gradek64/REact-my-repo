import { APIResponse } from '..'

/**
 * [Gitbook](https://argos-checkout-architecture-reference.int.dev-ie-01.jspaas.uk/docs/orchs/endpoints/account/user.register)
 */

export interface CreateUserAccountReqBody {
  loginCredentials: {
    email: string
    password: string
  }
  billingAddress: any
  deliveryAddress: any
  marketingPreferenceOptIn: boolean
  channelBrand: any
}

export type GuestAccountExistsAPIResponse = APIResponse<{ registered: boolean }>
export type GuestCreateAccountAPIResponse = APIResponse<{ id: string; cookies: Array<Record<string, string>> }>
