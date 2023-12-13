import { Request } from 'express'
import { Brand, SubBrand, Channel, Theme } from '../reducers'

/**
 * We decorate the Express request with a few of our own properties to pass
 * between our server middlware and getInitialActions.
 *
 * I think we should be using `req.locals` for this, which would allow us to
 * use generics to do this instead of creating our own type...
 */
export type DecoratedRequest<RouteParams = unknown, ReqQuery = unknown> = Request<
  RouteParams,
  unknown,
  unknown,
  ReqQuery
> & {
  brand: Brand
  subBrand: SubBrand
  channel: Channel
  theme: Theme

  // Consul
  consulReady?: boolean
  configMapReady?: boolean
  // consulState: TODO
  // features: TODO

  // Vault
  vault: {
    ready: boolean
    pdp: {
      url?: string
      key?: string
    }
  }
}
