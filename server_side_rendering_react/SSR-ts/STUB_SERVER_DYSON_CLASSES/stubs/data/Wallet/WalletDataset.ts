import Wallet from './Wallet'
import {
  SavedDatacashVisaCard,
  SavedDatacashAmexCard,
  SavedDatacashMasterCard,
  SavedDatacashMaestroCard,
  SavedDatacashArgosCard,
  SavedDatacashVisaCardTwo,
  SavedProcessOutVisaCard,
  SavedProcessOutAmexCard,
  SavedProcessOutMasterCard,
  SavedProcessOutMaestroCard,
  SavedProcessOutVisaCardTwo,
  SavedProcessOutArgosCard,
} from './SavedPaymentMethodDataset'
import { WalletScenario } from 'types/stubs'
import { GetWalletAPIErrorAdvice } from 'types/api'

// Stub Setup
const setNoSavedCard = (wallet: Wallet) => {
  wallet.walletType = WalletScenario.NO_SAVED_CARDS
  wallet.reset()
}

const setSingleSavedDatacashCard = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.SINGLE_SAVED_DATACASH_CARD
  wallet.addSavedPayment(SavedDatacashVisaCard)
}

const setSingleSavedProcessOutCard = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.SINGLE_SAVED_PROCESSOUT_CARD
  wallet.addSavedPayment(SavedProcessOutVisaCard)
}

const setSingleSavedArgosCard = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.SINGLE_SAVED_DATACASH_ARGOS_CARD
  wallet.addSavedPayment(SavedDatacashArgosCard)
}

const setSingleSavedProcessOutArgosCard = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.SINGLE_SAVED_PROCESSOUT_ARGOS_CARD
  wallet.addSavedPayment(SavedProcessOutArgosCard)
}

const setMultipleSavedDatacashCards = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.MULTIPLE_SAVED_DATACASH_CARDS
  wallet.addSavedPayment(SavedDatacashVisaCard)
  wallet.addSavedPayment(SavedDatacashMaestroCard)
}

const setMultipleSavedProcessOutCards = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.MULTIPLE_SAVED_PROCESSOUT_CARDS
  wallet.addSavedPayment(SavedProcessOutVisaCard)
  wallet.addSavedPayment(SavedProcessOutMaestroCard)
}

const setSingleSavedProcessOutCardAndArgosCard = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.SINGLE_SAVED_DATACASH_CARD_AND_SINGLE_SAVED_ARGOS_CARD
  wallet.addSavedPayment(SavedProcessOutVisaCard)
  wallet.addSavedPayment(SavedDatacashArgosCard)
}

const setFiveSavedDatacashCards = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.FIVE_SAVED_DATACASH_CARDS
  wallet.addSavedPayment(SavedDatacashMasterCard)
  wallet.addSavedPayment(SavedDatacashVisaCard)
  wallet.addSavedPayment(SavedDatacashAmexCard)
  wallet.addSavedPayment(SavedDatacashVisaCardTwo)
  wallet.addSavedPayment(SavedDatacashArgosCard)
}

const setFiveSavedProcessOutCards = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.FIVE_SAVED_PROCESSOUT_CARDS
  wallet.addSavedPayment(SavedProcessOutMasterCard)
  wallet.addSavedPayment(SavedProcessOutVisaCard)
  wallet.addSavedPayment(SavedProcessOutAmexCard)
  wallet.addSavedPayment(SavedProcessOutVisaCardTwo)
  wallet.addSavedPayment(SavedProcessOutArgosCard)
}

const setFiveSavedProcessOutCardsWithDatacashArgosCard = (wallet: Wallet) => {
  wallet.reset()
  wallet.walletType = WalletScenario.FIVE_SAVED_PROCESSOUT_CARDS
  wallet.addSavedPayment(SavedProcessOutMasterCard)
  wallet.addSavedPayment(SavedProcessOutVisaCard)
  wallet.addSavedPayment(SavedProcessOutAmexCard)
  wallet.addSavedPayment(SavedProcessOutVisaCardTwo)
  wallet.addSavedPayment(SavedDatacashArgosCard)
}

export const walletData: Record<WalletScenario, { description: string; setupWallet: (wallet: Wallet) => void }> = {
  [WalletScenario.NO_SAVED_CARDS]: {
    description: 'No saved cards',
    setupWallet: setNoSavedCard,
  },
  [WalletScenario.SINGLE_SAVED_DATACASH_CARD]: {
    description: 'Single saved Datacash credit/debit card (PCI)',
    setupWallet: setSingleSavedDatacashCard,
  },
  [WalletScenario.SINGLE_SAVED_PROCESSOUT_CARD]: {
    description: 'Single saved ProcessOut credit/debit card (PCI)',
    setupWallet: setSingleSavedProcessOutCard,
  },
  [WalletScenario.SINGLE_SAVED_DATACASH_ARGOS_CARD]: {
    description: 'Single saved Datacash Argos card (AFS)',
    setupWallet: setSingleSavedArgosCard,
  },
  [WalletScenario.SINGLE_SAVED_PROCESSOUT_ARGOS_CARD]: {
    description: 'Single saved ProcessOut Argos card (AFS)',
    setupWallet: setSingleSavedProcessOutArgosCard,
  },
  [WalletScenario.MULTIPLE_SAVED_DATACASH_CARDS]: {
    description: 'Multiple saved Datacash cards',
    setupWallet: setMultipleSavedDatacashCards,
  },
  [WalletScenario.MULTIPLE_SAVED_PROCESSOUT_CARDS]: {
    description: 'Multiple saved ProcessOut cards',
    setupWallet: setMultipleSavedProcessOutCards,
  },
  [WalletScenario.SINGLE_SAVED_DATACASH_CARD_AND_SINGLE_SAVED_ARGOS_CARD]: {
    description: 'Saved ProcessOut credit/debit card (PCI) and saved Datacash Argos card',
    setupWallet: setSingleSavedProcessOutCardAndArgosCard,
  },
  [WalletScenario.FIVE_SAVED_DATACASH_CARDS]: {
    description: 'Five saved Datacash cards',
    setupWallet: setFiveSavedDatacashCards,
  },
  [WalletScenario.FIVE_SAVED_PROCESSOUT_CARDS]: {
    description: 'Five saved ProcessOut cards with ProcessOut Argos card',
    setupWallet: setFiveSavedProcessOutCards,
  },
  [WalletScenario.FIVE_SAVED_PROCESSOUT_CARDS_WITH_DATACASH_ARGOS_CARD]: {
    description: 'Five saved ProcessOut cards with Datacash Argos card',
    setupWallet: setFiveSavedProcessOutCardsWithDatacashArgosCard,
  },
}

const setResponse200 = (wallet: Wallet) => {
  wallet.updateResponse(200)
}

const setResponse400 = (wallet: Wallet) => {
  wallet.updateResponse(400, GetWalletAPIErrorAdvice.MISSING_COOKIES)
}

const setResponse401 = (wallet: Wallet) => {
  wallet.updateResponse(401, GetWalletAPIErrorAdvice.REQUEST_UNAUTHORIZED)
}

const setResponse404 = (wallet: Wallet) => {
  wallet.updateResponse(404, GetWalletAPIErrorAdvice.ACCOUNT_NOT_FOUND)
}

const setResponse424 = (wallet: Wallet) => {
  wallet.updateResponse(424, GetWalletAPIErrorAdvice.REQUEST_REJECTED)
}

const setResponse500 = (wallet: Wallet) => {
  wallet.updateResponse(500, GetWalletAPIErrorAdvice.ACCOUNT_SERVICE_ERROR)
}

export const walletResponseData = {
  200: {
    description: '200 Saved payment methods retrieved successfully',
    setupWallet: setResponse200,
  },
  400: {
    description: '400 Invalid request. Cookies missing',
    setupWallet: setResponse400,
  },
  401: {
    description: '401 WCS returns authorization error',
    setupWallet: setResponse401,
  },
  404: {
    description: '404 User account not found',
    setupWallet: setResponse404,
  },
  424: {
    description: '424 Failed dependency',
    setupWallet: setResponse424,
  },
  500: {
    description: '500 Account internal server error',
    setupWallet: setResponse500,
  },
}
