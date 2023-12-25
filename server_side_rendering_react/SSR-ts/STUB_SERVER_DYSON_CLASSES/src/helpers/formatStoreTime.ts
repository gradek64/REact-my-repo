import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const formatTimeArray = (days: any[], open: boolean): string[] => {
  return days.map((element) => {
    const elementType = open ? element.open : element.close
    const time = dayjs('1/1/1 '.concat(elementType))
    return time.minute() === 0 ? time.format('ha') : time.format('h.mma')
  })
}

const formatTimes = (openTimes: string[], closeTimes: string[]): string[] => {
  return openTimes.map((element, index) => element.concat(' to ').concat(closeTimes[index]))
}

export const formatStoreTime = (store: any | undefined): string[] | undefined => {
  if (!store || !store.timetable || !store.timetable?.defaultWeek) return undefined

  const defaultWeek = store.timetable.defaultWeek
  const days = [
    defaultWeek.monday[0],
    defaultWeek.tuesday[0],
    defaultWeek.wednesday[0],
    defaultWeek.thursday[0],
    defaultWeek.friday[0],
    defaultWeek.saturday[0],
    defaultWeek.sunday[0],
  ]

  const openTimes = formatTimeArray(days, true)
  const closeTimes = formatTimeArray(days, false)

  return formatTimes(openTimes, closeTimes)
}

export const getTodayIndex = (): number => {
  const today = new Date().getDay()
  return today === 0 ? 6 : today - 1
}
