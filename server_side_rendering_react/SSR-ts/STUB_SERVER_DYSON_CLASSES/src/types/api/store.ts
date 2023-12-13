/**
 * The store the user will collect their order from.
 *
 * [Gitbook](http://gitbook-checkout-arch.service.eu-west-1.dev.deveng.systems/docs/orchs/endpoints/checkout/types/orders.html#orderstore)
 */
export interface Store {
  id: string
  legacyName?: string
  name?: string
  town?: string
  postcode?: string
  addressLine?: (string | null)[]
}
