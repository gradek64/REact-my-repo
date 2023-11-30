import { Brand, Channel, Fulfilment } from './constants'

export interface Filters {
  brands?: Brand[]
  channels?: Channel[]
  fulfilments?: Fulfilment[]
  value?: string | number | boolean
  // TODO!
}

export type FeatureValue = boolean | string | Filters | Filters[]

export type Features = Record<string, FeatureValue>
