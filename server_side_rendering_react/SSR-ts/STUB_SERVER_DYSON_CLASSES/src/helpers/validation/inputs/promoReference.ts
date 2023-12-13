import config from '../../../config/config'

const {
  giftCardTypes: {
    CARD_GIFT_ARGOS: { binRange: argosGiftCardBinRange = '' },
    CARD_GIFT_FLEXECASH: { binRange: flexecashBinRange = '' },
    NEW_GIFT_CARD_ARGOS: { binRange: newArgosGiftCardBinRange = '' },
  },
} = config
export const promoReference = (value: string) => {
  if (!value || !value.trim()) {
    return 'Please enter the code to get your discount'
  }
  if (
    value.startsWith(newArgosGiftCardBinRange) ||
    value.startsWith(argosGiftCardBinRange) ||
    value.startsWith(flexecashBinRange)
  ) {
    return "It looks like you've entered the number for a giftcard, {giftcardLink}"
  }
  return null
}
export default promoReference
