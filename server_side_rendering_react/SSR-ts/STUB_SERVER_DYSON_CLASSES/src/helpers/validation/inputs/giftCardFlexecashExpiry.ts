import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { errorMessages } from '@sainsburys-tech/bolt-validators'

dayjs.extend(customParseFormat)

export const giftCardFlexecashExpiry = (value: { month: string; year: string }) => {
  if (!value.month && !value.year) {
    return errorMessages.FLEXECASH_EXPIRY_REQUIRED
  }

  if (value.month.length !== 2 || value.year.length !== 2) {
    return errorMessages.FLEXECASH_EXPIRY_INVALID
  }

  if (+value.month > 12) {
    return errorMessages.FLEXECASH_EXPIRY_INVALID
  }

  const cardExpiryDate = dayjs(`${value.month}/${value.year}`, 'MM/YY')

  if (dayjs().startOf('month').isAfter(cardExpiryDate)) {
    return errorMessages.FLEXECASH_EXPIRY_EXPIRED
  }

  return null
}

export default giftCardFlexecashExpiry
