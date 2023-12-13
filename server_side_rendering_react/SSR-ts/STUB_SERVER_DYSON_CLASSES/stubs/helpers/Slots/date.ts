import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const getCurrentDate = () => dayjs.utc().startOf('day')

export const getDateIsoString = (date: Dayjs) => dayjs.utc(date).format()
