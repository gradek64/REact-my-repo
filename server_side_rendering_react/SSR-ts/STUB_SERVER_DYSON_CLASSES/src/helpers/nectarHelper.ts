import { formatPrice } from '@sainsburys-tech/boltui-utils'
import { isValidNectarCardNumber } from '@sainsburys-tech/bolt-validators'
import { formatThousandthSeperator } from './numberHelpers'

import { NectarPayment, TotalsState } from '../types/reducers'
import { stripNonNumbers } from './stringHelpers'

export const poundsToPoints = (pounds: number) => {
  return Math.round(pounds * 200)
}

export const calculateNumberOfSteps = (nectarPayment: NectarPayment, outstanding: number) => {
  return Math.floor(
    Math.min(nectarPayment.maxSpendingLimit, nectarPayment.balance, outstanding) / nectarPayment.increment,
  )
}

export const isPossibleToPayFullAmount = (balance: number, outstanding: number) => {
  if (balance >= outstanding) return true
  return false
}

export const setNextCursorPosition = (
  oldValue: string,
  newValue: string,
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const prevPos = event.target.selectionEnd as number

  let nextPos: number
  if (oldValue.length === prevPos) {
    nextPos = newValue.length
  } else {
    const oldRawValue = oldValue.slice(0, prevPos).replace(/\s/g, '')
    const newRawValue = newValue.slice(0, prevPos).replace(/\s/g, '')
    const lengthOffset = oldRawValue.length - newRawValue.length
    nextPos = prevPos + lengthOffset
  }

  window.requestAnimationFrame(() => {
    event.target.setSelectionRange(nextPos, nextPos)
  })

  return nextPos
}

export const formatNectarCard = (cardNumber: string) => {
  const strippedCardNumber = stripNonNumbers(cardNumber)

  // if a user types/pastes in a full valid nectar card number only take the needed last 11 digits
  const parsedCardNumber = isValidNectarCardNumber(strippedCardNumber)
    ? strippedCardNumber.slice(8)
    : strippedCardNumber

  const formattedCardNumber = parsedCardNumber.replace(/(\d{8})(\d{0,3})/g, '$1 $2 ').trim()

  return formattedCardNumber
}

/**
 * Step builder returns an array to populate a dropdown selector
 * It calculates the number of steps as the lowest of outstanding, maxSpendingLimit, balance
 * It checks if the total can be paid with only nectar points, if so adds that option first
 * Then loops over the calculated number of steps and builds up the options.
 */
export const stepBuilder = (totals: TotalsState, nectarPayment: NectarPayment) => {
  const options: { title: string; value: number }[] = []
  const totalOutstandingExcludingExistingNectarPayment = (totals.outstanding || 0) + nectarPayment.amount

  const numberOfSteps = calculateNumberOfSteps(nectarPayment, totalOutstandingExcludingExistingNectarPayment)
  if (
    totalOutstandingExcludingExistingNectarPayment <= nectarPayment.maxSpendingLimit &&
    isPossibleToPayFullAmount(nectarPayment.balance, totalOutstandingExcludingExistingNectarPayment)
  ) {
    options.push({
      title: `${formatPrice(totalOutstandingExcludingExistingNectarPayment)} (${formatThousandthSeperator(
        Math.ceil(poundsToPoints(totalOutstandingExcludingExistingNectarPayment)),
      )} points)`,
      value: totalOutstandingExcludingExistingNectarPayment,
    })
  }

  for (let i = 0; i <= numberOfSteps; i += 1) {
    options.push({
      title: `${formatPrice(nectarPayment.increment * i)} (${formatThousandthSeperator(
        nectarPayment.incrementPoints * i,
      )} points)`,
      value: nectarPayment.increment * i,
    })
  }

  return options
}
