import { errorMessages } from '@sainsburys-tech/bolt-validators'

import config from '../../../config/config'

const {
  giftCardTypes: { CARD_GIFT_FLEXECASH: flexecashConfig },
} = config

export const giftCardFlexecashCode = (value: string) => {
  if (!value) {
    return errorMessages.FLEXECASH_PIN_REQUIRED
  }

  if (value.length !== flexecashConfig.securityCodeLength) {
    return errorMessages.FLEXECASH_PIN_LENGTH
  }

  return null
}

export default giftCardFlexecashCode
