import { DeliveryFlag, ShipmentType } from 'types/api'
import { BookingRequest } from 'types/api/delivery'
import { ArrangeDeliveryFormValues, Slot } from 'types/containers/ArrangeDeliveryContainer'

const priority = [ShipmentType.LARGE_ITEM, ShipmentType.SMALL_ITEM, ShipmentType.CLOTHING]

export const slotToCharge = (slots: (Slot & { index?: number })[]): number => {
  const mostExpensiveSlot = slots.reduce(
    (acc, slot) => {
      if (typeof slot.deliveryCharge === 'undefined' || typeof acc.deliveryCharge === 'undefined') return acc
      if (acc.deliveryCharge < slot.deliveryCharge) return slot
      if (acc.deliveryCharge > slot.deliveryCharge) return acc

      // if it's a tie for most expensive, choose in priority order
      return priority.indexOf(acc.type) < priority.indexOf(slot.type) ? acc : slot
    },
    { type: ShipmentType.LARGE_ITEM, id: '', index: -1, deliveryCharge: 0 },
  )

  return slots.findIndex((slot) => slot.id === mostExpensiveSlot.id)
}

export const isSlotlessConsignmentType = (type: ShipmentType): boolean => {
  return ![ShipmentType.SMALL_ITEM, ShipmentType.LARGE_ITEM, ShipmentType.CLOTHING].includes(type)
}

export const getDeliveryCharges = (slots: Slot[], chargedSlotIndex: number, consignments: any[]) =>
  slots.map(({ deliveryCharge, x, y, type }, index) => {
    if (isSlotlessConsignmentType(type)) return { value: 0 }

    const unchargedDelivery = deliveryCharge !== null && deliveryCharge !== undefined ? 0 : '-'
    const chargedDelivery = deliveryCharge ?? 0

    const consignment = consignments[index]
    const isSpecialDelivery = consignment && consignment.deliveryFlags.includes(DeliveryFlag.SPECIAL_DELIVERY)

    return {
      value: chargedSlotIndex === index ? chargedDelivery : unchargedDelivery,
      detail: !isSpecialDelivery && x && y ? `${x}, ${y}` : undefined,
    }
  })

export const getBookingRequests = (
  consignments: any[],
  values: ArrangeDeliveryFormValues,
): BookingRequest[] => {
  const deliveryCharges = getDeliveryCharges(values.slots, slotToCharge(values.slots), consignments)
  return consignments.map(({ consignmentId }, index) => {
    return {
      consignmentId,
      slotId: values.slots[index].id ?? '',
      deliveryPrice: Number(deliveryCharges[index].value),
      instruction: values[`instruction-${consignmentId}`],
    }
  })
}
