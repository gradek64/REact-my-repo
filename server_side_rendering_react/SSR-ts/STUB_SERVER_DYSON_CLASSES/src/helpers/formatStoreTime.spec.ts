import { orderConfirmationWithAlternatingStoreTimes } from '../config/testUtils/__mocks__/state/orderConfirmation'
import { formatStoreTime, getTodayIndex } from './formatStoreTime'

describe('Should return the correct formatted times in an array', () => {
  const store = orderConfirmationWithAlternatingStoreTimes.order.confirmation.store

  test('Monday should return 9.01am to 9.01pm', () => {
    const formatted = formatStoreTime(store) || []
    const monday = formatted[0]
    expect(monday).toEqual('9.01am to 9.01pm')
  })

  test('Tuesday should return 9am to 9pm', () => {
    const formatted = formatStoreTime(store) || []
    const tuesday = formatted[1]
    expect(tuesday).toEqual('9am to 9pm')
  })

  test('Wednesday should return 9.02am to 9.02pm', () => {
    const formatted = formatStoreTime(store) || []
    const wednesday = formatted[2]
    expect(wednesday).toEqual('9.02am to 9.02pm')
  })

  test('Thursday should return 9am to 9pm', () => {
    const formatted = formatStoreTime(store) || []
    const thursday = formatted[3]
    expect(thursday).toEqual('9am to 9pm')
  })

  test('Friday should return 9.03am to 9.03pm', () => {
    const formatted = formatStoreTime(store) || []
    const friday = formatted[4]
    expect(friday).toEqual('9.03am to 9.03pm')
  })

  test('Saturday should return 9am to 9pm', () => {
    const formatted = formatStoreTime(store) || []
    const saturday = formatted[5]
    expect(saturday).toEqual('9am to 9pm')
  })

  test('Sunday should return 10.04am to 4.04pm', () => {
    const formatted = formatStoreTime(store) || []
    const sunday = formatted[6]
    expect(sunday).toEqual('10.04am to 4.04pm')
  })
})

test('Should return the index of the current day', () => {
  const todayExpected = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
  const todayActual = getTodayIndex()
  expect(todayActual).toEqual(todayExpected)
})
