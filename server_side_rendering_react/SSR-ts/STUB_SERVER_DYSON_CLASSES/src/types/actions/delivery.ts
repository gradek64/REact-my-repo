import { GetConsignmentsAPIPayload, BookingRequest } from 'types/api'
import { Slot } from 'types/stubs'

export type GetConsignmentsSuccessActionPayload = GetConsignmentsAPIPayload
export type GetSlotsSuccessActionPayload = {
  slots: Slot[]
  consignmentId: string
}

export type CreateBookingActionPayload = {
  bookings: BookingRequest[]
}

export type GetSlotsActionPayload = {
  slotSet: string | 'PREVIOUS' | 'NEXT'
  consignmentId: string
  searchDate?: string
  firstDate?: string
  lastDate?: string
}
