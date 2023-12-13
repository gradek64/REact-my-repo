import { LocationChangePayload } from 'connected-react-router'

export type RouterLocationChangeActionPayload = LocationChangePayload<{
  disableNavigateAway?: boolean
  disablePageLoad?: boolean
}>
