import { errorMessages } from '@sainsburys-tech/bolt-validators'

import config from '../../../config/config'

const {
  giftCardTypes: { CARD_GIFT_ARGOS: giftCardConfig },
} = config

export const giftCardArgosPin = (value: string) => {
  if (!value) {
    return errorMessages.GIFTCARD_PIN_REQUIRED
  }

  if (value.length !== giftCardConfig.pinNumberLength) {
    return errorMessages.GIFTCARD_PIN_LENGTH
  }

  return null
}

export default giftCardArgosPin
