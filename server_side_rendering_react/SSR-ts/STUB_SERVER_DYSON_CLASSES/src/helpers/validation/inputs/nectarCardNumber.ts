import { errorMessages, isValidNectarCardNumber } from '@sainsburys-tech/bolt-validators'
import { stripWhitespace } from '../../stringHelpers'
import { config } from '../../../config'

const { binNumber } = config.nectar.CARD_NECTAR

export default (cardNumber: string) =>
  isValidNectarCardNumber(`${binNumber}${stripWhitespace(cardNumber)}`)
    ? null
    : errorMessages.NECTAR_CARD_NUMBER_INVALID
