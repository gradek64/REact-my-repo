import { Dayjs } from 'dayjs'
import { DEFAULT_SLOT_TIMES, SlotTime } from './slotTimes'
import { getDateIsoString, getCurrentDate } from './date'
import { DeliveryChargeType, DeliveryFlag, Slot, SlotAvailability, DeliveryFlags } from 'types/stubs'

const createSlot = ({
  startTime,
  endTime,
  dayIndex = 0,
  slotIndex = 0,
  currentDay,
  isSlotAvailable,
  deliveryCharge,
}: CreateSlotProps): Slot => {
  const [startHour, startMinute] = startTime
  const [endHour, endMinute] = endTime
  const allDay = endHour - startHour > 6.5
  return {
    slotId: `slot-${dayIndex}-${slotIndex}`,
    startDateTime: getDateIsoString(currentDay.set('hour', startHour).set('minute', startMinute)),
    endDateTime: getDateIsoString(currentDay.set('hour', endHour).set('minute', endMinute)),
    isSlotAvailable,
    slotGroup: allDay ? 'All Day' : '',
    deliveryCharge: {
      sku: '123123123',
      deliveryChargeType:
        deliveryCharge?.deliveryChargeType || (allDay ? DeliveryChargeType.STANDARD : DeliveryChargeType.PREMIUM),
      price: deliveryCharge?.price || (allDay ? '2.95' : '4.95'),
    },
  }
}

const getSlotAvailability = (availability: SlotAvailability, partialAvailabilty: boolean) => {
  switch (availability) {
    case SlotAvailability.NONE_AVAILABLE:
      return false
    case SlotAvailability.PARTIALLY_AVAILABLE:
      return partialAvailabilty
    case SlotAvailability.ALL_AVAILABLE:
    default:
      return true
  }
}

export const generateSlots = (availability: SlotAvailability, dateOffset: number, deliveryFlags: DeliveryFlags[]) => {
  const slotStartDate = getCurrentDate().add(dateOffset, 'day')
  const weekSlots: Slot[] = []
  const specialDeliverySlot = createSlot({
    startTime: [0, 0],
    endTime: [23, 0],
    dayIndex: 0,
    slotIndex: 0,
    currentDay: slotStartDate,
    isSlotAvailable: true,
    deliveryCharge: {
      sku: '123123123',
      deliveryChargeType: DeliveryChargeType.PREMIUM,
      price: '12.95',
    },
  })

  if (deliveryFlags.includes(DeliveryFlag.SPECIAL_DELIVERY)) {
    return [specialDeliverySlot]
  }

  for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
    const currentDay = slotStartDate.add(dayIndex, 'day')

    const currentDaySlots = DEFAULT_SLOT_TIMES.map(({ startTime, endTime }, slotIndex) => {
      // Just needed something that gives a psuedo random boolean that's consistent
      // There is no real logic to this I just thought it was prettier
      const partialAvailabilty = ((dayIndex + slotIndex) * (dayIndex + 2 * slotIndex)) % 5 === 0
      const isSlotAvailable = getSlotAvailability(availability, partialAvailabilty)
      return createSlot({ startTime, endTime, dayIndex, slotIndex, currentDay, isSlotAvailable })
    })

    weekSlots.push(...currentDaySlots)
  }

  return weekSlots
}

type CreateSlotProps = {
  startTime: SlotTime
  endTime: SlotTime
  dayIndex: number
  slotIndex: number
  currentDay: Dayjs
  isSlotAvailable: boolean
  deliveryCharge?: { sku: string; deliveryChargeType: DeliveryChargeType; price: string }
}
