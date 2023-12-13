import dayjs from 'dayjs'
import { getDateTime } from '../dateHelper'
import { DEFAULT_SLOT_TIMES } from './slotTimes'

export function buildSlotTimes(slotId?: string): { startTime: string; endTime: string } {
  const now = getDateTime()
  if (!slotId) {
    const tomorrowMorning = dayjs(now).add(1, 'day').hour(7).minute(0).second(0).millisecond(0)
    const tomorrowEvening = tomorrowMorning.clone().hour(19)
    return {
      startTime: tomorrowMorning.format('YYYY-MM-DDTHH:mm:ss.SSS'),
      endTime: tomorrowEvening.format('YYYY-MM-DDTHH:mm:ss.SSS'),
    }
  }

  const [, dayOffset, slotOnDay] = slotId?.split('-')
  const { startTime, endTime } = DEFAULT_SLOT_TIMES[Number(slotOnDay)]

  const [startHour, startMinute] = startTime
  const [endHour, endMinute] = endTime

  const slotStartTime = dayjs(now)
    .add(Number(dayOffset), 'day')
    .hour(startHour)
    .minute(startMinute)
    .second(0)
    .millisecond(0)
  const slotEndTime = slotStartTime.clone().hour(endHour).minute(endMinute)
  return {
    startTime: slotStartTime.format('YYYY-MM-DDTHH:mm:ss.SSS'),
    endTime: slotEndTime.format('YYYY-MM-DDTHH:mm:ss.SSS'),
  }
}
