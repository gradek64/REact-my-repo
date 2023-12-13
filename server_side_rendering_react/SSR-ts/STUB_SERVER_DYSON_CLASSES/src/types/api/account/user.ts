import { APIResponse, AccountAddress } from '..'
import { Brand } from 'types/reducers'

/**
 * [Gitbook](https://argos-checkout-architecture-reference.int.dev-ie-01.jspaas.uk/docs/orchs/endpoints/account/user.register)
 */

export interface CreateUserAccountReqBody {
  loginCredentials: {
    email: string
    password: string
  }
  billingAddress: AccountAddress
  deliveryAddress: AccountAddress
  marketingPreferenceOptIn: boolean
  channelBrand: Brand
}

export type GuestAccountExistsAPIResponse = APIResponse<{ registered: boolean }>
export type GuestCreateAccountAPIResponse = APIResponse<{ id: string; cookies: Array<Record<string, string>> }>
