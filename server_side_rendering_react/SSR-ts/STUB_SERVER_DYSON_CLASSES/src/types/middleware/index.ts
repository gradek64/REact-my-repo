export enum GuestCheckoutConfigOptions {
  ENABLED = 'true',
  DISABLED = 'false',
  COLLECTION_ONLY = '{"fulfilments":["COLLECTION"]}',
  DELIVERY_ONLY = '{"fulfilments":["DELIVERY"]}',
}

export * from './newrelic'
