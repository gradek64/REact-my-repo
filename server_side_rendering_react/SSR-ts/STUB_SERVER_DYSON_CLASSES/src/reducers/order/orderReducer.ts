import { createReducer } from '@reduxjs/toolkit'
import { OrderStatus, OrderState } from '../../types/reducers'
import {
  PlaceOrderErrorDetailsAdvice,
  StatusCode,
  OrderLine,
  FulfilmentType,
  CustomerType,
  ShipmentType,
  ProductAttribute,
} from '../../types/api'

import { ErrorPageTypeParam, ErrorConfirmationPageTypeParam } from '../../types/routes'
import { ShipmentState } from '../../types/reducers/order'

import {
  PLACE_ORDER,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_SUCCESS,
  RESET_PLACE_ORDER,
  GET_ORDER_RETRIEVAL,
  GET_ORDER_RETRIEVAL_FAILURE,
  GET_ORDER_RETRIEVAL_SUCCESS,
  GET_ORDER_CONFIRMATION,
  GET_ORDER_CONFIRMATION_SUCCESS,
  GET_ORDER_CONFIRMATION_FAILURE,
  TOGGLE_PREVIEW_PLACE_ORDER,
  CANCEL_ORDER,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_FAILURE,
  CREATE_USER_ACCOUNT_SUCCESS,
  EXTEND_SHIPMENT,
  EXTEND_SHIPMENT_SUCCESS,
  EXTEND_SHIPMENT_FAILURE,
  VAT_RECEIPT_LINK_SUCCESS,
} from '../../actions'

import {
  getFulfilmentType,
  getFulfilmentStore,
  getOrderTargetingData,
  getBoughtCategories,
  getProductInformation,
  getShipmentStatus,
  orderGetDeliveryAddress,
  sortShipmentsByCollectionStartDate,
  cleanFulfilmentType,
} from '../../helpers/orderHelpers'

import { confirmationError, errorPath, orderRetrievalErrorPath } from '../../paths'

export const initialState: OrderState = {
  id: null,
  customerId: null,
  confirmation: {
    status: null,
    statusDate: null,
    currency: null,
    orderNumber: null,
    creationDate: null,
    advices: [],
    source: null,
    amounts: null,
    payments: {
      payments: [],
      masterReference: null,
      giftCardsTotal: null,
    },
    promotions: [],
    customer: null,
    availableCare: [],
    type: FulfilmentType.COLLECTION,
    shipments: {
      successful: [],
      pending: [],
      failed: [],
    },
    earnings: {
      companyVoucher: {
        eligible: false,
      },
      nectar: {
        isLinked: false,
        points: 0,
      },
    },
    store: {
      id: null,
      name: null,
    },
    fulfilments: [],
    contactAddress: null,
    billingAddress: null,
  },
  retrieval: {
    type: FulfilmentType.COLLECTION,
    isCancellable: false,
    currency: null,
    orderNumber: null,
    creationDate: null,
    amounts: null,
    source: null,
    payments: undefined,
    customer: null,
    availableCare: [],
    earnings: {
      companyVoucher: {
        eligible: false,
      },
      nectar: {
        isLinked: false,
        points: 0,
      },
    },
    store: {
      id: null,
      name: null,
    },
    fulfilments: [],
    shipments: [],
  },
  partNumbers: [],
  productTargeting: {
    PID: '',
    BoughtBrand: '',
    BoughtCat1: '',
    BoughtCat2: '',
    BoughtCat3: '',
    LowLevelCatId: '',
    storeId: null,
    storeName: null,
    orderTotal: null,
    orderType: null,
  },
  productInformation: {},
  placeOrder: {
    placing: false,
    error: false,
    redirectPath: null,
    numberOfAttempts: 0,
  },
  cancelOrder: {
    cancelling: false,
    order: {
      successfullyCancelled: false,
      error: false,
      numberOfAttempts: 0,
    },
    shipments: {},
  },
  getOrder: {
    getting: false,
    error: false,
    redirectPath: null,
  },
  extendOrder: {
    extending: false,
    shipments: {},
  },
  errorGettingProducts: false,
}

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(PLACE_ORDER, (state) => {
      state.placeOrder = {
        placing: true,
        error: initialState.placeOrder.error,
        redirectPath: initialState.placeOrder.redirectPath,
        numberOfAttempts: state.placeOrder.numberOfAttempts,
      }
    })
    .addCase(PLACE_ORDER_SUCCESS, (state, { payload }) => {
      state.placeOrder = initialState.placeOrder
      state.id = payload.order.id
    })
    .addCase(
      PLACE_ORDER_FAILURE,
      (
        state,
        {
          payload: {
            hasArgosCardApplicationPayment,
            hasMonthlyPaymentPlanApplicationPayment,
            errorDetails: { advice, promoCode } = { advice: [], promoCode: '' },
          },
        },
      ) => {
        state.placeOrder = {
          placing: initialState.placeOrder.placing,
          error: true,
          numberOfAttempts: state.placeOrder.numberOfAttempts + 1,
        }

        if (hasArgosCardApplicationPayment) {
          state.placeOrder.redirectPath = `${confirmationError}?type=${ErrorConfirmationPageTypeParam.ORDER_PLACE_CREDIT}`
          return
        }

        if (hasMonthlyPaymentPlanApplicationPayment) {
          state.placeOrder.redirectPath = `${confirmationError}?type=${ErrorConfirmationPageTypeParam.ORDER_PLACE_MPP}`
          return
        }

        switch (advice) {
          case PlaceOrderErrorDetailsAdvice.PROMOTION_CV_DISABLED:
            state.placeOrder.redirectPath = `${confirmationError}?promoCode=${encodeURIComponent(promoCode)}`
            break
          case PlaceOrderErrorDetailsAdvice.PAYMENT_REJECTED:
            state.placeOrder.redirectPath = initialState.placeOrder.redirectPath
            break
          default:
            state.placeOrder.redirectPath = `${confirmationError}?type=${ErrorConfirmationPageTypeParam.ORDER_PLACE}`
        }
      },
    )
    .addCase(RESET_PLACE_ORDER, (state) => {
      state.placeOrder = initialState.placeOrder
    })
    .addCase(VAT_RECEIPT_LINK_SUCCESS, (state, { payload }) => {
      state.retrieval.vatUrl = payload.url
    })
    .addCase(GET_ORDER_RETRIEVAL, (state, { payload }) => {
      state.getOrder = {
        ...initialState.getOrder,
        getting: true,
      }
      state.id = payload.orderId
      state.customerId = 'customerId' in payload && payload.customerId ? payload.customerId : null
    })
    .addCase(GET_ORDER_RETRIEVAL_SUCCESS, (state, { payload: { order } }) => {
      state.getOrder = initialState.getOrder
      state.retrieval = {
        ...order,
        type: order.fulfilments.every((fulfilment) => fulfilment.type === order.fulfilments[0].type)
          ? cleanFulfilmentType(order.fulfilments[0].type)
          : FulfilmentType.MIXED,
        store: order.fulfilments.find((fulfilment) => fulfilment.type === FulfilmentType.COLLECTION)?.location.store,
        shipments: order.fulfilments.flatMap((shipment) => shipment.shipments),
      }

      const { id: storeId, name: storeName } = state.retrieval.store || {}
      const { orderTotal, orderType } = getOrderTargetingData(order.amounts?.total, state.retrieval.type)
      state.productTargeting = {
        storeId,
        storeName,
        orderTotal,
        orderType,
      }
    })
    .addCase(GET_ORDER_RETRIEVAL_FAILURE, (state) => {
      state.retrieval = { ...initialState.retrieval }
      state.getOrder = {
        ...initialState.getOrder,
        error: true,
      }

      state.getOrder.redirectPath = `${orderRetrievalErrorPath}?type=${ErrorPageTypeParam.ORDER_GET}`
    })
    .addCase(CANCEL_ORDER, (state, { payload: { shipmentNumber } }) => {
      state.cancelOrder.cancelling = true

      if (shipmentNumber && !state.cancelOrder.shipments[shipmentNumber]) {
        state.cancelOrder.shipments[shipmentNumber] = {
          successfullyCancelled: false,
          error: false,
          numberOfAttempts: 0,
        }
      }
    })
    .addCase(CANCEL_ORDER_SUCCESS, (state, { payload: { shipmentNumber } }) => {
      state.cancelOrder.cancelling = false

      if (shipmentNumber) {
        state.cancelOrder.shipments[shipmentNumber] = {
          successfullyCancelled: true,
          error: false,
          numberOfAttempts: 0,
        }
      } else {
        state.cancelOrder.order = {
          successfullyCancelled: true,
          error: false,
          numberOfAttempts: 0,
        }
      }
    })
    .addCase(CANCEL_ORDER_FAILURE, (state, { payload: { shipmentNumber } }) => {
      state.cancelOrder.cancelling = false

      if (shipmentNumber) {
        state.cancelOrder.shipments[shipmentNumber] = {
          successfullyCancelled: false,
          error: true,
          numberOfAttempts: state.cancelOrder.shipments[shipmentNumber].numberOfAttempts + 1,
        }
      } else {
        state.cancelOrder.order = {
          successfullyCancelled: false,
          error: true,
          numberOfAttempts: state.cancelOrder.order.numberOfAttempts + 1,
        }
      }
    })
    .addCase(GET_ORDER_CONFIRMATION, (state, { payload }) => {
      state.getOrder = {
        ...initialState.getOrder,
        getting: true,
      }
      state.id = payload.orderId
    })
    .addCase(GET_ORDER_CONFIRMATION_SUCCESS, (state, { payload: { order, partNumbers, products } }) => {
      state.getOrder = initialState.getOrder

      const newState: {
        shipments: {
          successful: ShipmentState[]
          pending: ShipmentState[]
          failed: ShipmentState[]
        }
        productCare: {
          successful: OrderLine[]
          pending: OrderLine[]
          failed: OrderLine[]
        }
      } = {
        shipments: {
          successful: [],
          pending: [],
          failed: [],
        },
        productCare: {
          successful: [],
          pending: [],
          failed: [],
        },
      }

      order.fulfilments.forEach((fulfilment) => {
        const status = getShipmentStatus(fulfilment)
        const shipments: ShipmentState[] = []
        fulfilment.shipments.forEach((shipment) => {
          const orderLines: OrderLine[] = []
          shipment.orderLines.forEach((orderLine: OrderLine) => {
            const hasProductCare =
              orderLine.product.type === ShipmentType.WARRANTY ||
              orderLine.product.attribute === ProductAttribute.PRODUCT_CARE

            if (hasProductCare) {
              newState.productCare[status].push(orderLine)
            } else {
              orderLines.push(orderLine)
            }
          })

          // If the shipment still has products after removing care items, keep it
          if (orderLines.length > 0) {
            shipments.push({
              ...shipment,
              orderLines,
              type: cleanFulfilmentType(fulfilment.type),
              supplier: fulfilment.supplier,
              collectionPin: fulfilment.collectionPin,
            })
          }
        })

        newState.shipments[status].push(...shipments)
      })

      state.confirmation = {
        ...order,
        type: getFulfilmentType(order),
        store: getFulfilmentStore(order),
        productCare: newState.productCare,
        shipments: {
          ...newState.shipments,
          successful:
            getFulfilmentType(order) === FulfilmentType.DELIVERY
              ? newState.shipments.successful
              : newState.shipments.successful.sort(sortShipmentsByCollectionStartDate),
        },
        deliveryAddress: orderGetDeliveryAddress(order),
        advices: order.advices ?? [],
      }

      const { id: storeId, name: storeName } = state.confirmation.store || {}
      const { orderTotal, orderType } = getOrderTargetingData(order.amounts?.total, state.confirmation.type)
      state.errorGettingProducts = false
      state.partNumbers = partNumbers
      state.productTargeting = {
        storeId,
        storeName,
        orderTotal,
        orderType,
        ...getBoughtCategories(partNumbers, products),
      }
      state.productInformation = getProductInformation(products)
    })
    .addCase(GET_ORDER_CONFIRMATION_FAILURE, (state, { payload: { error } }) => {
      state.confirmation = { ...initialState.confirmation }
      state.getOrder = {
        ...initialState.getOrder,
        error: true,
      }

      if (error.status === StatusCode.UNAUTHORIZED) {
        // temp until we fix login (unable to login if basket is empty)
        state.getOrder.redirectPath = '/'
      } else if (state.placeOrder.placing) {
        // show the order pending page if the order was placed but we're unable to get it
        state.confirmation.status = OrderStatus.ORDER_PENDING
      } else {
        // fallback to generic error page
        state.getOrder.redirectPath = `${errorPath}?type=${ErrorPageTypeParam.ORDER_GET}`
      }
    })
    .addCase(TOGGLE_PREVIEW_PLACE_ORDER, (state) => {
      state.placeOrder.placing = !state.placeOrder.placing
    })
    .addCase(CREATE_USER_ACCOUNT_SUCCESS, (state) => {
      if (state.confirmation.customer) {
        state.confirmation.customer.customerType = CustomerType.REGISTERED
      }
    })
    .addCase(EXTEND_SHIPMENT, (state, { payload: { shipmentNumber } }) => {
      state.extendOrder.extending = true
      // set initial values when shipmentNumber is set for the first time
      if (!state.extendOrder.shipments[shipmentNumber]) {
        state.extendOrder.shipments[shipmentNumber] = {
          error: false,
          numberOfAttempts: 0,
          extended: false,
        }
      }
    })
    .addCase(EXTEND_SHIPMENT_SUCCESS, (state, { payload: { shipmentNumber } }) => {
      state.extendOrder.extending = false
      state.extendOrder.shipments[shipmentNumber] = {
        error: false,
        extended: true,
        numberOfAttempts: 0,
      }
    })
    .addCase(EXTEND_SHIPMENT_FAILURE, (state, { payload: { shipmentNumber } }) => {
      state.extendOrder.extending = false
      const currentNumberOfAttempts = state.extendOrder.shipments[shipmentNumber].numberOfAttempts
      state.extendOrder.shipments[shipmentNumber] = {
        error: true,
        extended: false,
        numberOfAttempts: currentNumberOfAttempts + 1,
      }
    })
})

export default orderReducer
