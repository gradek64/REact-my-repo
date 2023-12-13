import orderReducer, { initialState } from './orderReducer'

import {
  PLACE_ORDER,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
  GET_ORDER_CONFIRMATION,
  GET_ORDER_CONFIRMATION_SUCCESS,
  GET_ORDER_CONFIRMATION_FAILURE,
  GET_ORDER_RETRIEVAL,
  GET_ORDER_RETRIEVAL_FAILURE,
  GET_ORDER_RETRIEVAL_SUCCESS,
  CREATE_USER_ACCOUNT_SUCCESS,
  EXTEND_SHIPMENT,
  EXTEND_SHIPMENT_SUCCESS,
} from '../../actions'

import {
  getOrderResponse,
  getOrderResponseWithMixedShipmentsSort,
  getOrderResponseWithFailedFulfilment,
  getOrderResponseWithRejectedFulfilment,
  getOrderRetrievalResponse,
  expectedGetOrderStateWithMixedShipmentsSort,
  expectedGetOrderStateWithFailedFulfilment,
  expectedGetOrderStateWithRejectedFulfilment,
  getProductsResponse,
  getOrderResponseWithDeliveryFulfilment,
  expectedGetOrderStateWithDeliveryFulfilment,
  getOrderResponseWithHomeDeliveryFulfilment,
} from '../../config/testUtils/__mocks__/responses'
import {
  setOrderConfirmationWithSingleFulfilment,
  stateSingleProductCare,
  stateMixBasketProductCareAndRegularProduct,
  stateMixBasketProductCareAndRegularProductFailed,
  orderConfirmationIsGuestHasNoAccountState,
} from '../../config/testUtils/__mocks__/state'
import { FulfilmentStatus, CustomerType } from '../../types/api'

import {
  singleFulfilmentProductCare,
  singleFulfilmentMixBasketWithProductCare,
  failedSingleFulfilmentMixBasketWithProductCare,
} from '../../config/testUtils/__mocks__/responses/orderConfirmation'

const getProductsResponseWithSetProducts = (productDetails) => {
  const products = Array.isArray(productDetails) ? productDetails : [productDetails]
  const response = []

  products.forEach(({ productId }) => {
    response.unshift({
      ...getProductsResponse.data[0],
      id: productId,
      attributes: {
        ...getProductsResponse.data[0].attributes,
      },
    })
  })

  return { data: [...response] }
}

const errorPlacingState = {
  ...initialState,
  placeOrder: {
    placing: false,
    error: true,
    redirectPath: '/confirmation/error',
    numberOfAttempts: 0,
  },
}

const errorGettingState = {
  ...initialState,
  getOrder: {
    ...initialState.getOrder,
    error: true,
  },
}

const loadingPlacedState = {
  ...initialState,
  placeOrder: {
    placing: true,
    error: false,
    redirectPath: null,
    numberOfAttempts: 0,
  },
}

const loadingGettingState = {
  ...initialState,
  getOrder: {
    ...initialState.getOrder,
    getting: true,
  },
}

const extendingState = {
  ...initialState,
  extendOrder: {
    extending: false,
    shipments: {},
  },
}

const initAction = { type: '', payload: undefined }
const mockPlaceOrder = { order: { id: '123456' } }
const mockGetOrder = getOrderResponse
const mockGetProducts = { partNumbers: ['123', '456'], products: getProductsResponse }
const mockShipmentNumber = 'FT191919'
const mockHttpResponse = (body = {}, status = 200, ok = true) => ({ body, status, ok })

describe('When the prepay state is initialised', () => {
  it('should have the correct starting values', () => {
    expect(orderReducer(undefined, initAction)).toEqual(initialState)
  })
})

describe('When the place order loading state is idle', () => {
  describe('and a place order call is triggered', () => {
    it('should remove the current error and activate the loading state', () => {
      const newState = orderReducer(errorPlacingState, PLACE_ORDER())
      expect(newState).toEqual({
        ...initialState,
        placeOrder: { placing: true, error: false, redirectPath: null, numberOfAttempts: 0 },
      })
    })
  })

  describe('and a get order call is triggered', () => {
    it('should remove the current error and activate the loading state when called from the order confirmation page', () => {
      const newState = orderReducer(errorGettingState, GET_ORDER_CONFIRMATION({ orderId: '9876543210', cookie: null }))
      expect(newState).toEqual({
        ...errorGettingState,
        getOrder: {
          getting: true,
          error: false,
          redirectPath: null,
        },
        id: '9876543210',
      })
    })

    it('should remove the current error and activate the loading state when called from order retrieval page', () => {
      const newState = orderReducer(
        errorGettingState,
        GET_ORDER_RETRIEVAL({ orderId: '9876543210', customerId: 'a1b2c3def456', cookie: null }),
      )
      expect(newState).toEqual({
        ...errorGettingState,
        getOrder: {
          getting: true,
          error: false,
          redirectPath: null,
        },
        id: '9876543210',
        customerId: 'a1b2c3def456',
      })
    })
  })
})

describe('When the loading state is active', () => {
  const prevState = { ...loadingPlacedState }

  describe('and a place order call is successful', () => {
    const newState = orderReducer(prevState, PLACE_ORDER_SUCCESS(mockPlaceOrder))

    it('should disable the loading state and store order info', () => {
      expect(newState).toEqual({
        ...initialState,
        placeOrder: { placing: false, error: false, redirectPath: null, numberOfAttempts: 0 },
        id: '123456',
      })
    })
  })

  describe('and a place order call fails', () => {
    it('should disable the placing state and add the error with the default redirect path', () => {
      const mockError = {
        error: { body: 'I am an Error' },
        errorDetails: { advice: 'be good', type: 'I am a type' },
      }
      const newState = orderReducer(prevState, PLACE_ORDER_FAILURE(mockError))
      expect(newState).toEqual({
        ...prevState,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: '/confirmation/error?type=place_order',
          numberOfAttempts: 1,
        },
      })
    })

    it('should set the redirect path as order confirmation error if the payload contains fraud advice', () => {
      const mockError = {
        error: { body: 'I am an Error' },
        errorDetails: { advice: 'PAYMENT_NOT_PROCESSABLE', type: 'I am a type' },
      }
      const newState = orderReducer(prevState, PLACE_ORDER_FAILURE(mockError))
      expect(newState).toEqual({
        ...prevState,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: '/confirmation/error?type=place_order',
          numberOfAttempts: 1,
        },
      })
    })

    it('should set the redirect path as order confirmation error with promo reference in the url path when a used company voucher is applied', () => {
      const mockError = {
        error: { body: 'I am an Error' },
        errorDetails: { advice: 'PROMOTION_CV_DISABLED', type: 'I am a type', promoCode: '20%-furniture_off' },
      }
      const newState = orderReducer(prevState, PLACE_ORDER_FAILURE(mockError))
      expect(newState).toEqual({
        ...prevState,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: `/confirmation/error?promoCode=${encodeURIComponent('20%-furniture_off')}`,
          numberOfAttempts: 1,
        },
      })
    })

    it('should not set the redirect path if the payment is rejected', () => {
      const mockError = {
        error: { body: 'I am an Error' },
        errorDetails: { advice: 'PAYMENT_REJECTED', type: 'I am a type' },
      }
      const newState = orderReducer(prevState, PLACE_ORDER_FAILURE(mockError))
      expect(newState).toEqual({
        ...prevState,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: null,
          numberOfAttempts: 1,
        },
      })
    })

    it('should set the redirect path if place order failed with Credit Application payment', () => {
      const mockError = {
        error: { body: 'I am an Error' },
        hasArgosCardApplicationPayment: true,
        hasMonthlyPaymentPlanApplicationPayment: false,
        errorDetails: { advice: 'PAYMENT_REJECTED', type: 'I am a type' },
      }
      const newState = orderReducer(prevState, PLACE_ORDER_FAILURE(mockError))
      expect(newState).toEqual({
        ...prevState,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: '/confirmation/error?type=credit',
          numberOfAttempts: 1,
        },
      })
    })

    it('should set the redirect path if place order failed with Monthly Payment Plan Application payment', () => {
      const mockError = {
        error: { body: 'I am an Error' },
        hasArgosCardApplicationPayment: false,
        hasMonthlyPaymentPlanApplicationPayment: true,
        errorDetails: { advice: 'PAYMENT_REJECTED', type: 'I am a type' },
      }
      const newState = orderReducer(prevState, PLACE_ORDER_FAILURE(mockError))
      expect(newState).toEqual({
        ...prevState,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: '/confirmation/error?type=monthly_plan',
          numberOfAttempts: 1,
        },
      })
    })
  })
})

describe('When the loading get order state is active', () => {
  const prevState = { ...loadingGettingState }

  describe('and a get order retrieval call is successful', () => {
    const newState = orderReducer(prevState, GET_ORDER_RETRIEVAL_SUCCESS({ order: getOrderRetrievalResponse }))

    it('should disable the loading state', () => {
      expect(newState.getOrder.getting).toEqual(false)
    })

    it('should store the order info in state', () => {
      expect(newState.retrieval.creationDate).toEqual('2018-09-26T10:40:32.765')
      expect(newState.retrieval.orderNumber).toEqual('6587794916')
      expect(newState.retrieval.type).toEqual(getOrderRetrievalResponse.fulfilments[0].type)
      expect(newState.retrieval.store).toEqual(getOrderRetrievalResponse.fulfilments[0].location.store)
      expect(newState.retrieval.shipments).toEqual([getOrderRetrievalResponse.fulfilments[0].shipments[0]])
    })

    it('should pick out any targeting data that is readily available', () => {
      expect(newState.productTargeting).toEqual({
        ...newState.productTargeting,
        storeId: '9044',
        storeName: 'Stevenage',
        orderTotal: 'under10',
        orderType: 'fast-track',
      })
    })
  })

  describe('and a get order confirmation call fails', () => {
    it('should disable the loading state and add the error', () => {
      const newState = orderReducer(
        prevState,
        GET_ORDER_CONFIRMATION_FAILURE({ error: mockHttpResponse({}, 404, false) }),
      )

      expect(newState).toEqual({
        ...initialState,
        getOrder: { error: true, getting: false, redirectPath: '/checkout/error?type=get_order' },
      })
    })

    describe('and the response status is 401 (Unauthorized)', () => {
      const newState = orderReducer(
        prevState,
        GET_ORDER_CONFIRMATION_FAILURE({ error: mockHttpResponse({}, 401, false) }),
      )

      it('should disable the loading state, add the error and set the redirect path', () => {
        expect(newState).toEqual({
          ...initialState,
          getOrder: { error: true, getting: false, redirectPath: '/' },
        })
      })
    })

    describe('and the order is in the middle of being placed', () => {
      it('should set the order status to pending', () => {
        const newState = orderReducer(
          {
            ...prevState,
            placeOrder: loadingPlacedState.placeOrder,
          },
          GET_ORDER_CONFIRMATION_FAILURE({ error: mockHttpResponse({}, 404, false) }),
        )

        expect(newState).toEqual({
          ...initialState,
          confirmation: { ...initialState.confirmation, status: 'ORDER_PENDING' },
          placeOrder: { ...initialState.placeOrder, placing: true },
          getOrder: { error: true, getting: false, redirectPath: null },
        })
      })
    })
  })

  describe('and a get order retrieval call fails', () => {
    it('should disable the loading state and add the error', () => {
      const newState = orderReducer(prevState, GET_ORDER_RETRIEVAL_FAILURE({ error: mockHttpResponse({}, 404, false) }))

      expect(newState).toEqual({
        ...initialState,
        getOrder: { error: true, getting: false, redirectPath: '/order/tracking/error?type=get_order' },
      })
    })
  })
})

describe('When GET_ORDER_CONFIRMATION_SUCCESS is called', () => {
  const prevState = { ...loadingPlacedState }
  const { partNumbers, products } = mockGetProducts
  const newState = orderReducer(
    prevState,
    GET_ORDER_CONFIRMATION_SUCCESS({ order: mockGetOrder, partNumbers, products }),
  )

  test('should disable the loading state', () => {
    expect(newState.getOrder.getting).toEqual(false)
  })

  test('should store the order info in state', () => {
    expect(newState.confirmation.creationDate).toEqual('2018-09-26T10:40:32.765')
    expect(newState.confirmation.orderNumber).toEqual('6587794916')
    expect(newState.confirmation.type).toEqual(mockGetOrder.fulfilments[0].type)
    expect(newState.confirmation.store).toEqual(mockGetOrder.fulfilments[0].location.store)
    expect(newState.confirmation.shipments.successful[0].collectionPin).toEqual(
      mockGetOrder.fulfilments[0].collectionPin,
    )
  })

  test('should pick out any targeting data that is readily available', () => {
    expect(newState.productTargeting).toEqual({
      ...newState.productTargeting,
      storeId: '9044',
      storeName: 'Stevenage',
      orderTotal: 'under10',
      orderType: 'fast-track',
    })
  })

  test('should store the products & part numbers in state', () => {
    expect(newState.partNumbers).toEqual(['123', '456'])

    expect(newState.productTargeting).toEqual({
      ...newState.productTargeting,
      PID: '123,456',
      BoughtBrand: 'Duracell,Energizer,Energizer',
      BoughtCat1: '29949 - Technology,29949 - Technology,29949 - Technology',
      BoughtCat2:
        '29962 - Household batteries and battery chargers,29962 - Household batteries and battery chargers,29962 - Household batteries and battery chargers',
      BoughtCat3: '30218 - Batteries,30218 - Batteries,30218 - Batteries',
      LowLevelCatId: '30218,30218,30218',
    })

    expect(newState.productInformation).toEqual({
      4996873: {
        categoryId: '30218',
        isHabitatProduct: false,
      },
      9805237: {
        categoryId: '30218',
        isHabitatProduct: false,
      },
      9162011: {
        categoryId: '30218',
        isHabitatProduct: false,
      },
    })
  })
  test('Should sort each shipment by start date', () => {
    const state = orderReducer(
      { ...loadingGettingState },
      GET_ORDER_CONFIRMATION_SUCCESS({
        order: getOrderResponseWithMixedShipmentsSort,
        partNumbers,
        products,
      }),
    )

    expect(state.confirmation.shipments).toEqual(expectedGetOrderStateWithMixedShipmentsSort.shipments)
  })

  test('Should filter out failed fulfilments from a partially placed order into their own section', () => {
    const state = orderReducer(
      { ...loadingGettingState },
      GET_ORDER_CONFIRMATION_SUCCESS({
        order: getOrderResponseWithFailedFulfilment,
        partNumbers,
        products,
      }),
    )

    expect(state.confirmation.shipments).toEqual(expectedGetOrderStateWithFailedFulfilment.shipments)
  })

  test('Should filter out rejected fulfilments from a partially placed order into their own section', () => {
    const state = orderReducer(
      { ...loadingGettingState },
      GET_ORDER_CONFIRMATION_SUCCESS({
        order: getOrderResponseWithRejectedFulfilment,
        partNumbers,
        products,
      }),
    )
    expect(state.confirmation.shipments).toEqual(expectedGetOrderStateWithRejectedFulfilment.shipments)
  })

  describe('with product care', () => {
    test('When the users basket has a single product care item, it should have no shipment', () => {
      const productSkuWithCare = '8209762'
      const state = orderReducer(
        setOrderConfirmationWithSingleFulfilment([productSkuWithCare]),
        GET_ORDER_CONFIRMATION_SUCCESS({
          order: { ...mockGetOrder, fulfilments: singleFulfilmentProductCare },
          partNumbers: [productSkuWithCare],
          products: getProductsResponseWithSetProducts([{ productId: productSkuWithCare, isCareProduct: true }]),
        }),
      )

      expect(state.confirmation.shipments).toEqual(stateSingleProductCare.shipments)
      expect(state.confirmation.productCare).toEqual(stateSingleProductCare.productCare)
    })

    test('When the users basket has a mix of product care and a product in a fulfilled shipment, it should extract the product care from the shipment', () => {
      const productSkuWithCare = '8209762'
      const regularProduct = '4572383'
      const state = orderReducer(
        setOrderConfirmationWithSingleFulfilment([productSkuWithCare, regularProduct]),
        GET_ORDER_CONFIRMATION_SUCCESS({
          order: {
            ...mockGetOrder,
            fulfilments: singleFulfilmentMixBasketWithProductCare,
          },
          partNumbers: [productSkuWithCare, regularProduct],
          products: getProductsResponseWithSetProducts([
            { productId: productSkuWithCare, isCareProduct: true },
            { productId: regularProduct },
          ]),
        }),
      )

      expect(state.confirmation.shipments).toEqual(stateMixBasketProductCareAndRegularProduct.shipments)
      expect(state.confirmation.productCare).toEqual(stateMixBasketProductCareAndRegularProduct.productCare)
    })

    test('When the users basket has a mix of product care and a product in a failed shipment, it should extract the product care from the shipment', () => {
      const productSkuWithCare = '8209762'
      const regularProduct = '4572383'
      const state = orderReducer(
        setOrderConfirmationWithSingleFulfilment([productSkuWithCare, regularProduct], FulfilmentStatus.FAILED),
        GET_ORDER_CONFIRMATION_SUCCESS({
          order: {
            ...mockGetOrder,
            fulfilments: failedSingleFulfilmentMixBasketWithProductCare,
          },
          partNumbers: [productSkuWithCare, regularProduct],
          products: getProductsResponseWithSetProducts([
            { productId: productSkuWithCare, isCareProduct: true },
            { productId: regularProduct },
          ]),
        }),
      )

      expect(state.confirmation.shipments).toEqual(stateMixBasketProductCareAndRegularProductFailed.shipments)
      expect(state.confirmation.productCare).toEqual(stateMixBasketProductCareAndRegularProductFailed.productCare)
    })
  })

  test('When the fulfilment has a delivery, order should have deliveryAddress', () => {
    const state = orderReducer(
      { ...loadingGettingState },
      GET_ORDER_CONFIRMATION_SUCCESS({
        order: getOrderResponseWithDeliveryFulfilment,
        partNumbers,
        products,
      }),
    )
    expect(state.confirmation.deliveryAddress).toEqual(expectedGetOrderStateWithDeliveryFulfilment.deliveryAddress)
  })

  test('When the fulfilmentType is HD, it should be transformed to DELIVERY in state', () => {
    const state = orderReducer(
      { ...loadingGettingState },
      GET_ORDER_CONFIRMATION_SUCCESS({
        order: getOrderResponseWithHomeDeliveryFulfilment,
        partNumbers,
        products,
      }),
    )
    expect(state.confirmation.type).toEqual('DELIVERY')
  })
})

describe('When CREATE_USER_ACCOUNT_SUCCESS is called', () => {
  const prevState = { ...orderConfirmationIsGuestHasNoAccountState.order }
  const newState = orderReducer(prevState, CREATE_USER_ACCOUNT_SUCCESS())

  test('should store the order info in state', () => {
    expect(prevState.confirmation.customer.customerType).toEqual(CustomerType.GUEST)
    expect(newState.confirmation.customer.customerType).toEqual(CustomerType.REGISTERED)
  })
})

describe('When EXTEND_SHIPMENT is called', () => {
  const prevState = { ...extendingState }
  const newState = orderReducer(prevState, EXTEND_SHIPMENT({ shipmentNumber: 'FO100' }))

  test('extending should be set to true', () => {
    expect(prevState.extendOrder.extending).toEqual(false)
    expect(newState.extendOrder.extending).toEqual(true)
  })
})

describe('When EXTEND_SHIPMENT_SUCCESS is called', () => {
  const prevState = { ...extendingState }
  const shipmentNumber = mockShipmentNumber
  const expectedShipment = {
    FT191919: {
      error: false,
      numberOfAttempts: 0,
      extended: true,
    },
  }
  const newState = orderReducer(prevState, EXTEND_SHIPMENT_SUCCESS({ shipmentNumber }))

  test('should set extending to false', () => {
    expect(newState.extendOrder.extending).toEqual(false)
  })

  test('should store shipment as object containing error set to false, numberOfAttempts set to 0 and extended set to true', () => {
    expect(newState.extendOrder.shipments).toMatchObject(expectedShipment)
  })
})
