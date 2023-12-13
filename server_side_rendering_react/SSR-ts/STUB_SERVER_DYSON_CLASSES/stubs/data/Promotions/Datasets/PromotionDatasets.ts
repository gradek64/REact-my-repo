import Response from '../../../helpers/API/Response'
import Basket from '../../Basket/Basket'
import { PromotionType } from 'types/api'
import { PromoType } from 'types/stubs'

function setupNoPromos(snapshot: Basket) {
  snapshot.promoType = PromoType.Default
  snapshot.clearPromos()
}

function setupSinglePromo(snapshot: Basket) {
  snapshot.promoType = PromoType.Single
  snapshot.clearPromos()
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_CODE,
    reference: 'DISCOUNT10',
    amount: 10,
    message: '10% off order total',
  })
}

function setupMultiplePromos(snapshot: Basket) {
  snapshot.promoType = PromoType.MultiplePromos
  snapshot.clearPromos()
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_CODE,
    reference: 'DISCOUNT10',
    amount: 10,
    message: '10% off order total',
  })
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_CODE,
    reference: '10OFF',
    amount: 10,
    message: '10% off order total',
  })
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_VOUCHER,
    reference: 'VOUCHER10OFF',
    amount: 10,
    message: '10% voucher off order total',
  })
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_VOUCHER,
    reference: 'VOUCHEREXPIRED',
    amount: 0,
    message: 'This voucher has expired',
  })
}

function setupExclusiveWithNonExclusivePromo(snapshot: Basket) {
  snapshot.promoType = PromoType.ExclusiveWithNonExclusivePromo
  snapshot.clearPromos()
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_CODE,
    reference: '5POUNDEXCLUSIVE',
    amount: 5,
    message: '5 pounds off total',
  })
  snapshot.addPromo({
    type: PromotionType.PROMOTION_TYPE_CODE,
    reference: '10OFF',
    amount: 10,
    message: '10% off order total',
  })
}

// Methods to add and clear promotions are in basket
const promotionDatasets = {
  Default: {
    description: 'No Promos',
    setupPromos: setupNoPromos,
  },
  Single: {
    description: 'Single Discount',
    setupPromos: setupSinglePromo,
  },
  MultiplePromos: {
    description: 'Multiple Promo Codes',
    setupPromos: setupMultiplePromos,
  },
  ExclusiveWithNonExclusivePromo: {
    description: 'Exclusive with Non-Exclusive Promo',
    setupPromos: setupExclusiveWithNonExclusivePromo,
  },
}

/* NOTE: Promotion Error Responses are still WIP from backend team */
const addPromotionResponseDatasets = {
  PromotionApplied: {
    description: '201 Promotion applied (Default)',
    response: new Response({
      id: 'PromotionApplied',
      statusCode: 201,
      error: null,
    }),
  },
  PromotionCodeInvalid: {
    description: '400 Promotion code invalid',
    response: new Response({
      id: 'PromotionCodeInvalid',
      statusCode: 400,
      error: {
        message: 'Promotion code is invalid',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CODE_INVALID',
          },
        ],
      },
    }),
  },
  PromotionCodeExpired: {
    description: '400 Promotion code expired',
    response: new Response({
      id: 'PromotionCodeExpired',
      statusCode: 400,
      error: {
        message: 'Promotion code expired',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CODE_EXPIRED',
          },
        ],
      },
    }),
  },
  PromotionCodeInapplicable: {
    description: '400 Promotion code is not eligible',
    response: new Response({
      id: 'PromotionCodeInapplicable',
      statusCode: 400,
      error: {
        message: 'Promotion code is not eligible for the basket',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CODE_INAPPLICABLE',
          },
        ],
      },
    }),
  },
  PromotionCodeDuplicated: {
    description: '400 Promotion code already applied',
    response: new Response({
      id: 'PromotionCodeDuplicated',
      statusCode: 400,
      error: {
        message: 'Promotion code already applied to your basket',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CODE_DUPLICATED',
          },
        ],
      },
    }),
  },
  PromotionCodeOtherIssue: {
    description: '400 Promotion is rejected with other reason',
    response: new Response({
      id: 'PromotionCodeOtherIssue',
      statusCode: 400,
      error: {
        message: 'Promotion is rejected with other reasons by WCS',
        status: 'VALIDATION_ERROR',
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'PROMOTION_CODE_OTHER_ISSUE',
          },
        ],
      },
    }),
  },
  PromotionGeneralError: {
    description: '500 Promotion general error',
    response: new Response({
      id: 'PromotionGeneralError',
      statusCode: 500,
      error: {
        message: 'Promotion general error',
        status:
          'ERROR_PROMOTION_INAPPLICABLE' /* this is inconsistent with format of backend errors - TBC in pregroom with Arun & Ilker */,
        details: [
          {
            type: 'type.argos.co.uk/argos.order.Promotions',
            advice: 'Choose different promotion to apply to this order',
          },
        ],
      },
    }),
  },
}

export { promotionDatasets, addPromotionResponseDatasets }
