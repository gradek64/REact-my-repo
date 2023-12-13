import { GetWalletAPIErrorAdvice, SavedPaymentMethod } from 'types/api'

export enum WalletScenario {
  NO_SAVED_CARDS = 'NoSavedCards',
  SINGLE_SAVED_PROCESSOUT_CARD = 'SingleSavedProcessOutCard',
  SINGLE_SAVED_DATACASH_CARD = 'SingleSavedDatacashCard',
  SINGLE_SAVED_DATACASH_ARGOS_CARD = 'SingleSavedDatacashArgosCard',
  SINGLE_SAVED_PROCESSOUT_ARGOS_CARD = 'SingleSavedProcessOutArgosCard',
  MULTIPLE_SAVED_PROCESSOUT_CARDS = 'MultipleSavedProcessOutCards',
  MULTIPLE_SAVED_DATACASH_CARDS = 'MultipleSavedDatacashCards',
  SINGLE_SAVED_DATACASH_CARD_AND_SINGLE_SAVED_ARGOS_CARD = 'SingleSavedDatacashCardAndSingleSavedArgosCard',
  FIVE_SAVED_DATACASH_CARDS = 'FiveSavedDatacashCards',
  FIVE_SAVED_PROCESSOUT_CARDS = 'FiveSavedProcessOutCards',
  FIVE_SAVED_PROCESSOUT_CARDS_WITH_DATACASH_ARGOS_CARD = 'FiveSavedProcessOutCardsWithDatacashArgosCard',
}

export type WalletStubObject = {
  walletType: WalletScenario
  savedPaymentMethods: SavedPaymentMethod[]
  responseType: number
  response: {
    status: number
    error?: GetWalletAPIErrorAdvice
  }
}
