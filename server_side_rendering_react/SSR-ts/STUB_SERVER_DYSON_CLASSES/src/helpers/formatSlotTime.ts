import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export const formatSlotTime = (start: string, end: string): string => {
  const startTime = dayjs(start)
  const endTime = dayjs(end)

  const startTimeFormat = startTime.minute() === 0 ? 'ddd D MMM, ha' : 'ddd D MMM, h.mma'
  const endTimeFormat = endTime.minute() === 0 ? 'ha' : 'h.mma'

  return `${startTime.format(startTimeFormat)} to ${endTime.format(endTimeFormat)}`
}
