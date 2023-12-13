import { OrderAdviceInfo, OrderAdviceType } from '../../../src/types/api'

const advicesDatasets = {
  'No advices for the order': {},
  'Nectar account verification error': {
    type: OrderAdviceType.ORDER_ADVICE_FAILURE,
    regarding: OrderAdviceInfo.NECTAR_ACCOUNT_VERIFICATION_ERROR,
    messaging: 'Advice on a information regarding checking the Nectar account verification',
  },
  'Nectar points retrieve error': {
    type: OrderAdviceType.ORDER_ADVICE_FAILURE,
    regarding: OrderAdviceInfo.NECTAR_POINTS_RETRIEVE_ERROR,
    messaging: 'Advice on a information regarding retrieving Nectar points',
  },
  'Company voucher check error': {
    type: OrderAdviceType.ORDER_ADVICE_INFO,
    regarding: OrderAdviceInfo.COMPANY_VOUCHER_CHECK_ERROR,
    messaging: 'Advice on a information regarding checking company voucher status',
  },
  'Payments retrieve error': {
    type: OrderAdviceType.ORDER_ADVICE_FAILURE,
    regarding: OrderAdviceInfo.PAYMENTS_RETRIEVE_ERROR,
    messaging: 'Advice on an error occurred when getting payments information',
  },
  'Delivery slot retrieve error': {
    type: OrderAdviceType.ORDER_ADVICE_FAILURE,
    regarding: OrderAdviceInfo.DELIVERY_SLOT_RETRIEVE_ERROR,
    messaging: 'Advice on an error occurred while retrieving orders delivery slot information',
  },
  'Order attributes retrieve error': {
    type: OrderAdviceType.ORDER_ADVICE_FAILURE,
    regarding: OrderAdviceInfo.ORDER_ATTRIBUTES_ERROR,
    messaging: 'Advice on an error when trying to retrieve order attributes',
  },
}

export default advicesDatasets
