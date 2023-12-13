import MockDate from 'mockdate'

import {
  GET_CONSIGNMENTS,
  GET_CONSIGNMENTS_FAILURE,
  GET_CONSIGNMENTS_SUCCESS,
  GET_SLOTS,
  GET_SLOTS_FAILURE,
  FULFILMENT_CREATED_FAILURE,
} from '../../actions'
import deliveryReducer, { initialState } from './deliveryReducer'
import { getConsignmentsSmallItem } from '../../config/testUtils/__mocks__/responses'
import { smallItemAndLargeItemConsignments } from 'mocks/state'

const initAction = { type: '', payload: undefined }

beforeEach(() => {
  MockDate.set(new Date(1696374000000)) // 04/10/23
})

afterEach(() => {
  MockDate.reset()
})

test('should set an initial state', () => {
  expect(deliveryReducer(undefined, initAction)).toEqual(initialState)
})

test('FULFILMENT_CREATED_FAILURE should reset state', () => {
  const newState = deliveryReducer(
    { ...initialState, gettingConsignments: { loading: true, error: false, numberOfAttempts: 2 } },
    FULFILMENT_CREATED_FAILURE({ error: new Error('error'), fatal: false }),
  )
  expect(newState).toEqual(initialState)
})

test('should correctly set when GET_CONSIGNMENTS fired', () => {
  const newState = deliveryReducer(
    {
      ...initialState,
      gettingConsignments: {
        loading: false,
        error: false,
        numberOfAttempts: 0,
      },
    },
    GET_CONSIGNMENTS(),
  )
  expect(newState.gettingConsignments).toEqual({
    loading: true,
    error: false,
    numberOfAttempts: 0,
  })
})

test('should correctly set when GET_CONSIGNMENTS_FAILURE fired', () => {
  const newState = deliveryReducer(
    {
      ...initialState,
      gettingConsignments: {
        loading: true,
        error: false,
        numberOfAttempts: 0,
      },
    },
    GET_CONSIGNMENTS_FAILURE(),
  )
  expect(newState.gettingConsignments).toEqual({
    loading: false,
    error: true,
    numberOfAttempts: 1,
  })
})

test('should save a successful response into state', () => {
  const newState = deliveryReducer(initialState, GET_CONSIGNMENTS_SUCCESS(getConsignmentsSmallItem))
  const { consignmentId, allowInstructions, products, slots } = newState.consignments[0]

  expect(newState.gettingConsignments).toEqual({
    loading: false,
    error: false,
    numberOfAttempts: 0,
  })
  expect(newState.consignments.length).toEqual(1)
  expect(consignmentId).toEqual('15876d62-17e9-42ef-8647-136653dd9520')
  expect(allowInstructions).toEqual(false)
  expect(products).toEqual([
    { freeDelivery: false, isDeliverable: true, itemType: 'SMALL_ITEM', productId: '8198471', quantity: 1 },
    { freeDelivery: false, isDeliverable: true, itemType: 'SMALL_ITEM', productId: '8097761', quantity: 1 },
  ])
  expect(newState.stockHoldInformation).toEqual({
    masterStockHoldId: '98765',
    fullyReserved: true,
    stockHolds: [
      {
        allocated: 1,
        dateRequested: '2023-08-15T21:46:55.015Z',
        fulfilmentLocationId: '140',
        productId: '8198471',
        requested: 1,
        status: 'FULLY_AVAILABLE',
      },
      {
        allocated: 1,
        dateRequested: '2023-08-15T21:46:55.015Z',
        fulfilmentLocationId: '140',
        productId: '8097761',
        requested: 1,
        status: 'FULLY_AVAILABLE',
      },
    ],
  })

  const allDayToday = slots[0]
  const timedToday = slots[1]
  const allDayTomorrow = slots[6]
  const timedTomorrow = slots[7]
  const allDayTwoDaysTime = slots[12]
  const timedTwoDaysTime = slots[13]

  // -------- TODAY --------
  // all day slot today that is available
  expect(allDayToday).toEqual({
    deliveryCharge: 2.95,
    ariaLabel: 'Today, 8:30am - 7pm, £2.95',
    disabled: false,
    id: 'slot-0-0',
    segment: 'All Day',
    today: true,
    tomorrow: false,
    value: '£2.95',
    x: 'Today',
    y: '8:30am - 7pm',
    startDateTime: '2023-10-04T07:30:00Z',
    endDateTime: '2023-10-04T18:00:00Z',
  })

  // timed slot today that is available
  expect(timedToday).toEqual({
    deliveryCharge: 4.95,
    ariaLabel: 'Today, 8:30am - 12pm, £4.95',
    disabled: false,
    id: 'slot-0-1',
    segment: 'Timed Slot',
    today: true,
    tomorrow: false,
    value: '£4.95',
    x: 'Today',
    y: '8:30am - 12pm',
    startDateTime: '2023-10-04T07:30:00Z',
    endDateTime: '2023-10-04T11:00:00Z',
  })

  // -------- TOMORROW --------
  // All day tomorrow that is available
  expect(allDayTomorrow).toEqual({
    deliveryCharge: 2.95,
    ariaLabel: 'Thu 5 Oct, 8:30am - 7pm, £2.95',
    disabled: false,
    id: 'slot-1-0',
    segment: 'All Day',
    today: false,
    tomorrow: true,
    value: '£2.95',
    x: 'Thu 5 Oct',
    y: '8:30am - 7pm',
    endDateTime: '2023-10-05T18:00:00Z',
    startDateTime: '2023-10-05T07:30:00Z',
  })

  // timed slot tomorrow that is not available
  expect(timedTomorrow).toEqual({
    deliveryCharge: 4.95,
    ariaLabel: 'Thu 5 Oct, 8am - 12:30pm, Unavailable',
    disabled: true,
    id: 'slot-1-1',
    segment: 'Timed Slot',
    today: false,
    tomorrow: true,
    value: 'Unavailable',
    x: 'Thu 5 Oct',
    y: '8am - 12:30pm',
    startDateTime: '2023-10-05T07:00:00Z',
    endDateTime: '2023-10-05T11:30:00Z',
  })

  // -------- DAY AFTER TOMORROW --------
  // all day slot the day after tomorrow that is not available
  expect(allDayTwoDaysTime).toEqual({
    deliveryCharge: 2.95,
    ariaLabel: 'Fri 6 Oct, 8am - 7pm, Unavailable',
    disabled: true,
    id: 'slot-2-0',
    segment: 'All Day',
    today: false,
    tomorrow: false,
    value: 'Unavailable',
    x: 'Fri 6 Oct',
    y: '8am - 7pm',
    startDateTime: '2023-10-06T07:00:00Z',
    endDateTime: '2023-10-06T18:00:00Z',
  })

  // timed slot the day after tomorrow that is available and has no delivery charge
  expect(timedTwoDaysTime).toEqual({
    deliveryCharge: 0,
    ariaLabel: 'Fri 6 Oct, 8am - 12:30pm, Free',
    disabled: false,
    id: 'slot-2-1',
    segment: 'Timed Slot',
    today: false,
    tomorrow: false,
    value: 'Free',
    x: 'Fri 6 Oct',
    y: '8am - 12:30pm',
    startDateTime: '2023-10-06T07:00:00Z',
    endDateTime: '2023-10-06T11:30:00Z',
  })
})

test('should reset gettingConsignments when GET_CONSIGNMENTS_SUCCESS fired from a retry', () => {
  const newState = deliveryReducer(
    {
      ...initialState,
      gettingConsignments: {
        loading: true,
        error: true,
        numberOfAttempts: 1,
      },
    },
    GET_CONSIGNMENTS_SUCCESS(getConsignmentsSmallItem),
  )
  expect(newState.gettingConsignments).toEqual({
    loading: false,
    error: false,
    numberOfAttempts: 1,
  })
})

test('should correctly set when GET_SLOTS fired', () => {
  const newState = deliveryReducer(
    {
      ...smallItemAndLargeItemConsignments,
    },
    GET_SLOTS({ slotSet: 'NEXT', consignmentId: 'consignmentId1', searchDate: 'Mon 11 Feb' }),
  )
  expect(newState.consignments[0].loadingMoreSlots).toEqual(true)
  expect(newState.consignments[1].loadingMoreSlots).toEqual(false)
})

test('should correctly set when GET_SLOTS_FAILURE fired', () => {
  const newState = deliveryReducer(
    {
      ...smallItemAndLargeItemConsignments,
    },
    GET_SLOTS_FAILURE({ consignmentId: 'consignmentId1' }),
  )
  expect(newState.consignments[0].loadingMoreSlots).toEqual(false)
  expect(newState.consignments[1].loadingMoreSlots).toEqual(false)
})
