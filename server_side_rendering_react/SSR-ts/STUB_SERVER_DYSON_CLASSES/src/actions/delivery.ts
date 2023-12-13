import { createAction } from '@reduxjs/toolkit'
import { GetConsignmentsSuccessActionPayload, CreateBookingActionPayload } from 'types/actions'
import { GetSlotsActionPayload, GetSlotsSuccessActionPayload } from 'types/actions/delivery'

export const GET_CONSIGNMENTS = createAction('GET_CONSIGNMENTS')
export const GET_CONSIGNMENTS_SUCCESS = createAction<GetConsignmentsSuccessActionPayload>('GET_CONSIGNMENTS_SUCCESS')
export const GET_CONSIGNMENTS_FAILURE = createAction('GET_CONSIGNMENTS_FAILURE')

export const CREATE_BOOKING = createAction<CreateBookingActionPayload>('CREATE_BOOKING')
export const CREATE_BOOKING_SUCCESS = createAction('CREATE_BOOKING_SUCCESS')
export const CREATE_BOOKING_FAILURE = createAction('CREATE_BOOKING_FAILURE')

export const GET_SLOTS = createAction<GetSlotsActionPayload>('GET_SLOTS')
export const GET_SLOTS_SUCCESS = createAction<GetSlotsSuccessActionPayload>('GET_SLOTS_SUCCESS')
export const GET_SLOTS_FAILURE = createAction<{ consignmentId: string }>('GET_SLOTS_FAILURE')

export const TRACK_DELIVERY_ADDRESS_MODAL = createAction('TRACK_DELIVERY_ADDRESS_MODAL')
