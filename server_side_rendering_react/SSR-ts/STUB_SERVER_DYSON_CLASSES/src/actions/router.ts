import { createAction } from '@reduxjs/toolkit'
import { LOCATION_CHANGE } from 'connected-react-router'
import { RouterLocationChangeActionPayload } from '../types/actions'

export const ROUTER_LOCATION_CHANGE = createAction<RouterLocationChangeActionPayload>(LOCATION_CHANGE)
