import dayjs from 'dayjs'

export const getDateTime = (timeZone = 'Europe/London'): Date => {
  // Get a date string representing the provided timezone
  const date = new Date().toLocaleString('en-US', { timeZone })
  // Return a regular Date object representing the timezone.
  // This still adds the UTC 'Z' identifier, which should be wrong?
  return new Date(date)
}

export const getUTCFormattedDate = (date: Date, sendTimeZoneIdentifier: boolean): string => {
  // Optionally adding the UTC 'Z' identifier
  return sendTimeZoneIdentifier ? date.toISOString() : dayjs(date).format('YYYY-MM-DDTHH:mm:ss.sss')
}
