import { PaymentMethod, SavedPaymentMethod } from 'types/api'

export const SavedDatacashVisaCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '1111222233334444',
  cardHolderName: 'Mr Bat Man',
  last4Digits: '1234',
  expiryDate: '01/32',
  cardType: 'VISAC',
}

export const SavedDatacashMasterCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '5555666677778888',
  cardHolderName: 'Mr Super Man',
  last4Digits: '5678',
  expiryDate: '01/33',
  cardType: 'MAESTROINT',
}

export const SavedDatacashMaestroCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '6759950847650162',
  last4Digits: '0162',
  cardHolderName: 'test test',
  expiryDate: '01/31',
  cardType: 'MAESTROINT',
}

export const SavedDatacashAmexCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '9999000011112222',
  cardHolderName: 'Ms Wonder Woman',
  last4Digits: '9012',
  expiryDate: '01/43',
  cardType: 'AMEX',
}

export const SavedDatacashArgosCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_ARGOS_CREDIT,
  token: '3333444455556666123',
  cardHolderName: 'Miss Harley Quinn ',
  last4Digits: '3456',
  expiryDate: '01/53',
  cardType: 'ARGOSCARD',
}

export const SavedProcessOutArgosCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_ARGOS_CREDIT,
  token: '3333444455556666wowididntrealisejusthowlong64charactersactuallyis',
  cardHolderName: 'Miss Harley Quinn ',
  last4Digits: '3456',
  expiryDate: '01/53',
  cardType: 'ARGOSCARD',
}

export const SavedDatacashVisaCardTwo: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '2222333344445555',
  cardHolderName: 'Mr Spider Man',
  last4Digits: '2345',
  expiryDate: '01/63',
  cardType: 'VISAC',
}

export const SavedProcessOutVisaCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '1111222233334444wowididntrealisejusthowlong64charactersactuallyis',
  cardHolderName: 'Mr Bat Man',
  last4Digits: '1234',
  expiryDate: '01/32',
  cardType: 'VISAC',
}

export const SavedProcessOutMasterCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '5555666677778888wowididntrealisejusthowlong64charactersactuallyis',
  cardHolderName: 'Mr Super Man',
  last4Digits: '5678',
  expiryDate: '01/33',
  cardType: 'MAESTROINT',
}

export const SavedProcessOutMaestroCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '6759950847650162wowididntrealisejusthowlong64charactersactuallyis',
  last4Digits: '0162',
  cardHolderName: 'test test',
  expiryDate: '01/31',
  cardType: 'MAESTROINT',
}

export const SavedProcessOutAmexCard: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '9999000011112222wowididntrealisejusthowlong64charactersactuallyis',
  cardHolderName: 'Ms Wonder Woman',
  last4Digits: '9012',
  expiryDate: '01/43',
  cardType: 'AMEX',
}

export const SavedProcessOutVisaCardTwo: SavedPaymentMethod = {
  paymentMethod: PaymentMethod.CARD_DEBIT,
  token: '2222333344445555wowididntrealisejusthowlong64charactersactuallyis',
  cardHolderName: 'Mr Spider Man',
  last4Digits: '2345',
  expiryDate: '01/63',
  cardType: 'VISAC',
}
