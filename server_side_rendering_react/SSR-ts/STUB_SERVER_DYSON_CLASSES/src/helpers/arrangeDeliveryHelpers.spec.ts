import { isSlotlessConsignmentType, slotToCharge, getBookingRequests } from './arrangeDeliveryHelpers'
import { ShipmentType } from 'types/api'
import { smallItemAndLargeItemConsignments } from 'mocks/state'

const lowSmallItem = { type: ShipmentType.SMALL_ITEM, id: '1', deliveryCharge: 1 }
const midSmallItem = { type: ShipmentType.SMALL_ITEM, id: '2', deliveryCharge: 2 }
const highSmallItem = { type: ShipmentType.SMALL_ITEM, id: '3', deliveryCharge: 3 }
const lowLargeItem = { type: ShipmentType.LARGE_ITEM, id: '4', deliveryCharge: 1 }
const midLargeItem = { type: ShipmentType.LARGE_ITEM, id: '5', deliveryCharge: 2 }
const highLargeItem = { type: ShipmentType.LARGE_ITEM, id: '6', deliveryCharge: 3 }
const lowClothing = { type: ShipmentType.CLOTHING, id: '7', deliveryCharge: 1 }
const midClothing = { type: ShipmentType.CLOTHING, id: '8', deliveryCharge: 2 }
const highClothing = { type: ShipmentType.CLOTHING, id: '9', deliveryCharge: 3 }

test('slotToCharge', () => {
  expect(slotToCharge([lowSmallItem])).toBe(0)
  expect(slotToCharge([lowLargeItem])).toBe(0)
  expect(slotToCharge([lowClothing])).toBe(0)

  expect(slotToCharge([{ type: ShipmentType.SMALL_ITEM }])).toBe(-1)
  expect(slotToCharge([{ type: ShipmentType.LARGE_ITEM }])).toBe(-1)
  expect(slotToCharge([{ type: ShipmentType.CLOTHING }])).toBe(-1)
  expect(slotToCharge([{ type: ShipmentType.SMALL_ITEM }, { type: ShipmentType.CLOTHING }])).toBe(-1)

  expect(slotToCharge([{ type: ShipmentType.DIGITAL_DOWNLOAD }, lowSmallItem])).toBe(1)
  expect(slotToCharge([{ type: ShipmentType.DIGITAL_DOWNLOAD }, lowLargeItem])).toBe(1)
  expect(slotToCharge([{ type: ShipmentType.DIGITAL_DOWNLOAD }, lowClothing])).toBe(1)

  expect(slotToCharge([lowSmallItem, lowLargeItem, lowClothing])).toBe(1)
  expect(slotToCharge([midSmallItem, midLargeItem, midClothing])).toBe(1)

  expect(slotToCharge([highLargeItem, highSmallItem, highClothing])).toBe(0)
  expect(slotToCharge([highSmallItem, highLargeItem, highClothing])).toBe(1)
  expect(slotToCharge([highClothing, highSmallItem, highLargeItem])).toBe(2)

  expect(slotToCharge([lowSmallItem, lowLargeItem, midClothing])).toBe(2)
  expect(slotToCharge([lowSmallItem, lowLargeItem, highClothing])).toBe(2)

  expect(slotToCharge([lowSmallItem, midLargeItem, lowClothing])).toBe(1)
  expect(slotToCharge([lowSmallItem, highLargeItem, lowClothing])).toBe(1)

  expect(slotToCharge([lowSmallItem, midLargeItem, midClothing])).toBe(1)
  expect(slotToCharge([lowSmallItem, highLargeItem, highClothing])).toBe(1)

  expect(slotToCharge([midSmallItem, lowLargeItem, lowClothing])).toBe(0)
  expect(slotToCharge([highSmallItem, lowLargeItem, lowClothing])).toBe(0)

  expect(slotToCharge([midSmallItem, lowLargeItem, midClothing])).toBe(0)
  expect(slotToCharge([highSmallItem, lowLargeItem, highClothing])).toBe(0)

  expect(slotToCharge([midSmallItem, midLargeItem, lowClothing])).toBe(1)
  expect(slotToCharge([highSmallItem, highLargeItem, lowClothing])).toBe(1)
})

test('isSlotlessConsignmentType', () => {
  expect(isSlotlessConsignmentType(ShipmentType.SMALL_ITEM)).toBe(false)
  expect(isSlotlessConsignmentType(ShipmentType.LARGE_ITEM)).toBe(false)
  expect(isSlotlessConsignmentType(ShipmentType.CLOTHING)).toBe(false)

  expect(isSlotlessConsignmentType(ShipmentType.DIGITAL_DOWNLOAD)).toBe(true)
  expect(isSlotlessConsignmentType(ShipmentType.PRE_ORDER)).toBe(true)
  expect(isSlotlessConsignmentType(ShipmentType.RECYCLING_SERVICE)).toBe(true)
  expect(isSlotlessConsignmentType(ShipmentType.SUPPLIER_DIRECT_FULFILLED)).toBe(true)
  expect(isSlotlessConsignmentType(ShipmentType.WARRANTY)).toBe(true)
})

describe('getBookingRequests', () => {
  it('returns an array containing a booking request object with correct prices', () => {
    const values = {
      slots: [lowSmallItem, lowLargeItem],
      ageRestrictionChecked: true,
      _ageRestrictionShowing: true,
    }

    expect(getBookingRequests(smallItemAndLargeItemConsignments.consignments, values)).toEqual([
      { consignmentId: 'consignmentId1', slotId: '1', deliveryPrice: 0 },
      { consignmentId: 'consignmentId2', slotId: '4', deliveryPrice: 1 },
    ])
  })

  it('returns an array containing a booking request object with delivery intructions', () => {
    const values = {
      slots: [midSmallItem, lowLargeItem],
      'instruction-consignmentId1': '🚗',
      'instruction-consignmentId2': '🚚',
      ageRestrictionChecked: true,
      _ageRestrictionShowing: true,
    }

    expect(getBookingRequests(smallItemAndLargeItemConsignments.consignments, values)).toEqual([
      { consignmentId: 'consignmentId1', slotId: '2', deliveryPrice: 2, instruction: '🚗' },
      { consignmentId: 'consignmentId2', slotId: '4', deliveryPrice: 0, instruction: '🚚' },
    ])
  })
})
