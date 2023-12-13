export const datacashErrorDatasets = {
  Default: {
    description: 'No error',
    type: 'Default',
    errorMessage: '',
  },
  CardError: {
    description: 'Credit/Debit error',
    type: 'CardError',
    errorMessage: 'Wrong Card Number',
  },
  MonthError: {
    description: 'Expiry date error',
    type: 'MonthError',
    errorMessage: 'Dates are hard',
  },
  CvvError: {
    description: 'CVV error',
    type: 'CvvError',
    errorMessage: 'What even is a CVV',
  },
}

export default datacashErrorDatasets
