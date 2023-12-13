import { canUseDom } from '@sainsburys-tech/boltui-utils'
import config from '../config/config'

export const prepayApiEndpoint = (endpoint = ''): string =>
  `${canUseDom() ? '' : config.prepayApiServer}${config.prepayApiBaseUrl}${endpoint}`

export const accountApiEndpoint = (endpoint = ''): string =>
  `${canUseDom() ? '' : config.accountApiServer}${config.accountApiBaseUrl}${endpoint}`

export const orderApiEndpoint = (endpoint = ''): string =>
  `${canUseDom() ? '' : config.prepayApiServer}${config.orderApiBaseUrl}${endpoint}`

export const productApiEndpoint = (endpoint = ''): string =>
  `${canUseDom() ? '' : config.productApiServer}${config.productApiBaseUrl}${endpoint}`

export const sessionManagerEndpoint = (endpoint = ''): string =>
  `${canUseDom() ? '' : config.sessionManagerServer}${config.sessionManagerBaseUrl}${endpoint}`

export const getUserInfoApiEndpoint = (): string =>
  `${canUseDom() ? '' : config.getUserInfoApiServer}${config.getUserInfoApiBaseUrl}`

export const getVatReceiptEndpoint = (): string =>
  `${canUseDom() ? '' : config.getVatReceiptServer}${config.getVatReceiptApiBaseUrl}`

export const marketingPreferencesApiEndpoint = (): string =>
  `${canUseDom() ? '' : config.marketingApiServer}${config.marketingApiBaseUrl}`
