import { formatSlotTime } from './formatSlotTime'

test('Should not show the minutes when time slot falls on the hour', () => {
  const formatted = formatSlotTime('2021-08-27T07:00:00.000', '2021-08-27T16:00:00.000')
  expect(formatted).toEqual('Fri 27 Aug, 7am to 4pm')
})

test('Should show the minutes when time slot is not on the hour', () => {
  const formatted = formatSlotTime('2021-08-27T07:30:00.000', '2021-08-27T16:30:00.000')
  expect(formatted).toEqual('Fri 27 Aug, 7.30am to 4.30pm')
})
