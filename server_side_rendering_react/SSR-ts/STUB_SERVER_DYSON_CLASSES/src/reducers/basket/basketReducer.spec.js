import basketReducer, { initialState } from './basketReducer'
import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  GET_STOCK_HOLD_INFO_SUCCESS,
  START_GUEST_CHECKOUT_SUCCESS,
} from '../../actions'
import { multipleItems, singleClothingItem, singleItem } from '../../config/testUtils/__mocks__/state'

import {
  betterInitialGetSnapshotResponse,
  collectionShipment,
  clothingShipment,
  smallItemShipment,
  preOrderShipment,
} from '../../config/testUtils/__mocks__/responses'
import { FulfilmentType } from '../../types/api'

const collectionSnapshot = {
  ...betterInitialGetSnapshotResponse.snapshot,
  shipments: [collectionShipment],
  lines: multipleItems(collectionShipment.id),
}

const deliverySnapshot = {
  ...betterInitialGetSnapshotResponse.snapshot,
  fulfilmentType: FulfilmentType.DELIVERY,
  shipments: [clothingShipment, smallItemShipment],
  lines: [singleClothingItem(clothingShipment.id), singleItem(smallItemShipment.id)],
}
const deliveryPreOrderSnapshot = {
  ...betterInitialGetSnapshotResponse.snapshot,
  fulfilmentType: FulfilmentType.DELIVERY,
  shipments: [preOrderShipment],
  lines: [singleItem(preOrderShipment.id)],
}

describe('When GET_COLLECTION_SNAPSHOT_SUCCESS is dispatched', () => {
  test('and the snapshot contains a collection shipment, Then the shipment and line items should be saved to state', () => {
    const newState = basketReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: collectionSnapshot }))
    expect(newState).toEqual({
      ...initialState,
      products: collectionSnapshot.lines,
      shipments: [
        {
          ...collectionShipment,
          products: collectionSnapshot.lines,
        },
      ],
    })
  })

  test('and the snapshot contains multiple delivery shipments, Then the shipments and line items should be saved to state', () => {
    const newState = basketReducer(initialState, GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: deliverySnapshot }))
    expect(newState).toEqual({
      ...initialState,
      products: deliverySnapshot.lines,
      shipments: [
        {
          ...clothingShipment,
          products: [singleClothingItem(clothingShipment.id)],
        },
        {
          ...smallItemShipment,
          products: [singleItem(smallItemShipment.id)],
        },
      ],
    })
  })
  test('and the snapshot contains pre-order delivery shipments with delivery notes', () => {
    const newState = basketReducer(
      initialState,
      GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: deliveryPreOrderSnapshot }),
    )

    expect(newState).toEqual({
      ...initialState,
      products: deliveryPreOrderSnapshot.lines,
      shipments: [
        {
          ...preOrderShipment,
          products: [singleItem(preOrderShipment.id)],
        },
      ],
    })
  })
})

test('When the page is re-loaded it should save the basket items to state', () => {
  const newState = basketReducer(initialState, INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: collectionSnapshot }))
  expect(newState).toEqual({
    ...initialState,
    products: collectionSnapshot.lines,
  })
})

test('When START_GUEST_CHECKOUT_SUCCESS is dispatched', () => {
  const newState = basketReducer(initialState, START_GUEST_CHECKOUT_SUCCESS({ snapshot: collectionSnapshot }))
  expect(newState).toEqual({
    ...initialState,
    products: collectionSnapshot.lines,
    shipments: [],
  })
})

test('When all items in the basket are out of stock, update the out of stock state', () => {
  const payloadWithMultipleItemsOutOfStock = {
    outOfStock: [
      {
        product: {
          id: '8198471',
          title: 'Russell Hobbs 25510 Worcester Kettle - Red Stainless Steel',
          category: 'Kettles',
          url: '/browse/appliances/kettles/c:29560/',
          price: 29.99,
        },
        total: { withoutSavings: 29.99 },
        quantity: 1,
      },
      {
        product: {
          id: '9805244',
          title: 'Duracell Ultra AAA Alkaline Batteries - Pack of 4',
          category: 'Batteries and rechargeable batteries',
          url: '/browse/technology/household-batteries-and-battery-chargers/batteries-and-rechargeable-batteries/c:30218/',
          price: 5.0,
        },
        total: { withoutSavings: 20.0 },
        quantity: 4,
      },
    ],
  }
  const newState = basketReducer(initialState, GET_STOCK_HOLD_INFO_SUCCESS(payloadWithMultipleItemsOutOfStock))
  expect(newState).toEqual({
    ...initialState,
    outOfStock: [...payloadWithMultipleItemsOutOfStock.outOfStock],
  })
})

test('When a single item in the basket is partially available, update the out of stock state', () => {
  const payloadWithSingleItemPartiallyAvailable = {
    outOfStock: [
      {
        product: {
          id: '9805244',
          title: 'Duracell Ultra AAA Alkaline Batteries - Pack of 4',
          category: 'Batteries and rechargeable batteries',
          url: '/browse/technology/household-batteries-and-battery-chargers/batteries-and-rechargeable-batteries/c:30218/',
          price: 5.0,
        },
        total: { withoutSavings: 5.0 },
        quantity: 1,
      },
    ],
  }

  const newState = basketReducer(initialState, GET_STOCK_HOLD_INFO_SUCCESS(payloadWithSingleItemPartiallyAvailable))

  expect(newState).toEqual({
    ...initialState,
    outOfStock: [...payloadWithSingleItemPartiallyAvailable.outOfStock],
  })
})

test('When multiple items in the basket with some out of stock, update the out of stock state', () => {
  const payloadWithMultipleItemsAndSomeOutOfStock = {
    outOfStock: [
      {
        product: {
          id: '8198471',
          title: 'Russell Hobbs 25510 Worcester Kettle - Red Stainless Steel',
          category: 'Kettles',
          url: '/browse/appliances/kettles/c:29560/',
          price: 30.99,
        },
        total: { withoutSavings: 30.99 },
        quantity: 1,
      },
    ],
  }
  const newState = basketReducer(initialState, GET_STOCK_HOLD_INFO_SUCCESS(payloadWithMultipleItemsAndSomeOutOfStock))
  expect(newState).toEqual({
    ...initialState,
    outOfStock: [...payloadWithMultipleItemsAndSomeOutOfStock.outOfStock],
  })
})

test('When there are multiple items in the basket with some partially available, update the out of stock state', () => {
  const payloadWithMultipleItemsAndSomePartiallyOutOfStock = {
    outOfStock: [
      {
        product: {
          id: '9805244',
          title: 'Duracell Ultra AAA Alkaline Batteries - Pack of 4',
          category: 'Batteries and rechargeable batteries',
          url: '/browse/technology/household-batteries-and-battery-chargers/batteries-and-rechargeable-batteries/c:30218/',
          price: 5.0,
        },
        total: { withoutSavings: 5.0 },
        quantity: 1,
      },
    ],
  }
  const newState = basketReducer(
    initialState,
    GET_STOCK_HOLD_INFO_SUCCESS(payloadWithMultipleItemsAndSomePartiallyOutOfStock),
  )
  expect(newState).toEqual({
    ...initialState,
    outOfStock: [...payloadWithMultipleItemsAndSomePartiallyOutOfStock.outOfStock],
  })
})
