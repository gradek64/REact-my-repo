import dayjs, { Dayjs } from 'dayjs'
import { createReducer } from '@reduxjs/toolkit'
import {
  GET_CONSIGNMENTS,
  GET_CONSIGNMENTS_SUCCESS,
  GET_CONSIGNMENTS_FAILURE,
  GET_SLOTS_SUCCESS,
  GET_SLOTS,
  GET_SLOTS_FAILURE,
  FULFILMENT_CREATED_FAILURE,
} from '../../actions'
import { convertToTimezone } from '../../helpers/orderHelpers'
import { DeliveryState } from 'types/reducers'
import { Consignment } from 'types/reducers/delivery'
import { Slot } from 'types/stubs'

export const initialState: DeliveryState = {
  gettingConsignments: {
    loading: false,
    error: false,
    numberOfAttempts: 0,
  },
  consignments: [],
  stockHoldInformation: {
    stockHolds: [],
    masterStockHoldId: '',
    fullyReserved: false,
  },
  gettingSlots: {},
}

const getFormattedSlotTime = (slotTime: Dayjs) => {
  const timeFormat = slotTime.minute() > 0 ? 'h:mma' : 'ha'
  return slotTime.format(timeFormat)
}
let data: Consignment['slots'] = []
export const formatSlots = (slots: Slot[]): Consignment['slots'] => {
  return slots?.map((slot) => {
    const currentDate = dayjs(convertToTimezone(new Date().toUTCString()))
    const startDateTime = dayjs(convertToTimezone(slot.startDateTime))
    const endDateTime = dayjs(convertToTimezone(slot.endDateTime))
    const isCurrentDay = startDateTime.isSame(currentDate, 'day')

    const isNextDay = startDateTime.isSame(currentDate.add(1, 'day'), 'day')
    // Format the time to be like '9am - 2pm'
    const formattedSlotTime = `${getFormattedSlotTime(startDateTime)} - ${getFormattedSlotTime(endDateTime)}`
    // Get the length of the slot in hours to determine if it's an 'All Day' slot or a 'Timed Slot'
    const segment = endDateTime.diff(startDateTime, 'hour') > 7 ? 'All Day' : 'Timed Slot'
    // Format the date to be like 'Today' or 'Tue 3 Nov'
    const slotDate = isCurrentDay ? 'Today' : startDateTime.format('ddd D MMM')
    // Set the value for the slot to be like '£2.95', 'Free' or 'Unavailable'
    const deliveryCharge = parseFloat(slot.deliveryCharge.price)
    const value = slot.isSlotAvailable ? (deliveryCharge !== 0 ? `£${deliveryCharge}` : 'Free') : 'Unavailable'

    data.push({
      id: slot.slotId,
      y: formattedSlotTime,
      x: slotDate,
      ariaLabel: `${slotDate}, ${formattedSlotTime}, ${value}`,
      value,
      segment,
      disabled: !slot.isSlotAvailable,
      today: isCurrentDay,
      tomorrow: isNextDay,
      deliveryCharge,
      startDateTime: slot.startDateTime,
      endDateTime: slot.endDateTime,
    })

    console.log('data For Grid:', data)

    return {
      id: slot.slotId,
      y: formattedSlotTime,
      x: slotDate,
      ariaLabel: `${slotDate}, ${formattedSlotTime}, ${value}`,
      value,
      segment,
      disabled: !slot.isSlotAvailable,
      today: isCurrentDay,
      tomorrow: isNextDay,
      deliveryCharge,
      startDateTime: slot.startDateTime,
      endDateTime: slot.endDateTime,
    }
  })
}

const getConsignmentIndex = (consignments: Consignment[], consignmentId: string) => {
  return consignments.findIndex((consignment) => {
    return consignment.consignmentId === consignmentId
  })
}

const deliveryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FULFILMENT_CREATED_FAILURE, () => {
      return { ...initialState }
    })
    .addCase(GET_CONSIGNMENTS, (state) => {
      state.gettingConsignments.loading = true
    })
    .addCase(GET_CONSIGNMENTS_SUCCESS, (state, { payload }) => {
      state.gettingConsignments.loading = false
      state.gettingConsignments.error = false
      state.consignments = payload.consignments.map(
        ({
          allowInstructions,
          consignmentId,
          parcelItems,
          booking,
          slots,
          consignmentType,
          startDate,
          deliverableDays,
          deliveryFlags,
        }) => ({
          allowInstructions,
          consignmentId,
          products: parcelItems,
          booking,
          consignmentType,
          slots: formatSlots(slots),
          startDate,
          deliverableDays,
          deliveryFlags: deliveryFlags ?? [],
          loadingMoreSlots: false,
        }),
      )
      state.stockHoldInformation = payload.stockHoldInformation
    })
    .addCase(GET_CONSIGNMENTS_FAILURE, (state) => {
      state.gettingConsignments.loading = false
      state.gettingConsignments.error = true
      state.gettingConsignments.numberOfAttempts += 1
    })
    .addCase(GET_SLOTS, (state, { payload }) => {
      const index = getConsignmentIndex(state.consignments, payload.consignmentId)

      state.consignments[index].loadingMoreSlots = true
    })
    .addCase(GET_SLOTS_SUCCESS, (state, { payload }) => {
      const index = getConsignmentIndex(state.consignments, payload.consignmentId)

      state.consignments[index].loadingMoreSlots = false

      if (index > -1) {
        state.consignments[index].slots = formatSlots(payload.slots)
      }
    })
    .addCase(GET_SLOTS_FAILURE, (state, { payload }) => {
      const index = getConsignmentIndex(state.consignments, payload.consignmentId)
      state.consignments[index].loadingMoreSlots = false
      state.gettingSlots[payload.consignmentId] = { error: true }
    })
})

export default deliveryReducer
