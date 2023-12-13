import { errorMessages } from '@sainsburys-tech/bolt-validators'

import config, { GiftCardTypes } from '../../../config/config'

const { giftCardTypes } = config

export const giftCardNumber = (rawValue: string): string | null => {
  if (!rawValue || !rawValue.trim()) {
    return errorMessages.GIFTCARD_NUMBER_REQUIRED
  }

  const value = (+rawValue).toLocaleString('fullwide', { useGrouping: false })

  const type = Object.keys(giftCardTypes).find(
    (card: GiftCardTypes) => giftCardTypes[card].binRange && value.startsWith(giftCardTypes[card].binRange || ''),
  ) as GiftCardTypes | undefined

  // Feature flag is set and we can't match it to an expected type
  if (!type) {
    return 'Sorry, Gift card numbers must start with 98260278, 10000 or 633827. Enter prepaid Gift cards as a Credit/Debit card under Payment options.'
  }

  const { minLength = 0, maxLength = 0 } = giftCardTypes[type]

  if (value.trim().length < minLength || value.trim().length > maxLength) {
    return `Your card number should contain ${minLength} numbers`
  }

  return null
}

export default giftCardNumber
