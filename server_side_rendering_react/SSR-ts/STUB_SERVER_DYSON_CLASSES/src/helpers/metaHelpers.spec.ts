import { getProductInformation, getProductPromotion, hasOutOfStockProducts } from './metaHelpers'
import { GetProductsAPIPayload, ProductMeta, ProductInclude } from '../types/api'
import {
  snapshotWithMultipleItemsFullyReserved,
  snapshotWithAllItemsAvailable,
  snapshotWithSingleItemOutOfStock,
  snapshotWithMultipleItemsOutOfStock,
} from '../config/testUtils/__mocks__/responses'

test('getProductPromotion receives PDP response and returns the badge url and promotion offer', () => {
  const PDPResponseWithIncludedPricesBadgeTaxonomy: ProductInclude[] = [
    {
      id: '9802766',
      type: 'prices',
      attributes: { now: 4 },
    },
    {
      id: 290984,
      type: 'badges',
      attributes: {
        badgeReference: 'VALUE_2_for_5_50',
      },
    },
    {
      id: 'breadcrumb',
      type: 'taxonomy',
      categories: [
        {
          id: '30218',
          type: 'PLP',
          name: 'Batteries',
          url: '/browse/technology/household-batteries-and-battery-chargers/batteries/c:30218/',
        },
      ],
    },
  ]
  const meta: ProductMeta = {
    priority: {
      BADGE_VALUE: [290984],
    },
  }

  expect(getProductPromotion(PDPResponseWithIncludedPricesBadgeTaxonomy, meta)).toEqual({
    url: `//media.4rgos.it/i/Argos/VALUE_2_for_5_50?$PDPBadge$`,
    promo: 'VALUE_2_for_5_50',
  })
})

test('getProductInformation receives stock hold information and pdp response (no badge promotion) and returns the out of stock state', () => {
  const mockPDPResponse: GetProductsAPIPayload[] = [
    {
      data: {
        id: '8198471',
        attributes: {
          brand: '',
          channels: ['ARGOS_UK_WEB'],
        },
      },
      included: [
        {
          id: '8198471',
          type: 'prices',
          attributes: { now: 29.99 },
        },
        {
          id: 'breadcrumb',
          type: 'taxonomy',
          categories: [
            {
              id: '29560',
              type: 'PLP',
              name: 'Kettles',
              url: '/browse/appliances/kettles/c:29560/',
            },
          ],
        },
      ],
    },
  ]

  const mockHolds = [
    {
      id: '2be67645-7cab-4c02-a21e-27596a799f72',
      productId: '8198471',
      requested: 1,
      allocated: 0,
      fullyReserved: false,
      title: 'Russell Hobbs 25510 Worcester Kettle - Red Stainless Steel',
    },
  ]
  const newOutOfStockState = {
    outOfStockProductState: [
      {
        allocated: 0,
        product: {
          badge: null,
          category: 'Kettles',
          categoryId: '29560',
          id: '8198471',
          price: 29.99,
          promoOffer: null,
          title: 'Russell Hobbs 25510 Worcester Kettle - Red Stainless Steel',
          url: '/browse/appliances/kettles/c:29560/',
        },
        quantity: 1,
        requested: 1,
        total: { saving: 0, withSavings: 29.99, withoutSavings: 29.99 },
      },
    ],
    excludedProducts: [],
  }
  expect(getProductInformation(mockPDPResponse, mockHolds)).toEqual(newOutOfStockState)
})

test('getProductInformation receives stock hold information and pdp response with badge promotion and returns an out of stock state', () => {
  const mockPDPResponseWithPromotionalBadge: GetProductsAPIPayload[] = [
    {
      data: {
        id: '9802766',
        attributes: {
          brand: '',
          channels: ['ARGOS_UK_WEB'],
        },
      },
      included: [
        {
          id: '9802766',
          type: 'prices',
          attributes: { now: 4 },
        },
        {
          id: 290984,
          type: 'badges',
          attributes: {
            badgeReference: 'VALUE_2_for_5_50',
          },
        },

        {
          id: 'breadcrumb',
          type: 'taxonomy',
          categories: [
            {
              id: '30218',
              type: 'PLP',
              name: 'Batteries',
              url: '/browse/technology/household-batteries-and-battery-chargers/batteries/c:30218/',
            },
          ],
        },
      ],
      meta: {
        priority: {
          BADGE_VALUE: [290984],
        },
      },
    },
  ]

  const mockHolds = [
    {
      id: 'ba63d7ca-966c-4bda-9d4e-b454d67c4c56',
      productId: '9802766',
      requested: 2,
      allocated: 1,
      fullyReserved: false,
      title: 'Duracell Plus Power Alkaline AA Batteries - Pack of 4',
    },
  ]
  const newOutOfStockState = {
    outOfStockProductState: [
      {
        allocated: 1,
        product: {
          badge: '//media.4rgos.it/i/Argos/VALUE_2_for_5_50?$PDPBadge$',
          category: 'Batteries',
          categoryId: '30218',
          id: '9802766',
          price: 4,
          promoOffer: 'VALUE_2_for_5_50',
          title: 'Duracell Plus Power Alkaline AA Batteries - Pack of 4',
          url: '/browse/technology/household-batteries-and-battery-chargers/batteries/c:30218/',
        },
        quantity: 1,
        requested: 2,
        total: { saving: 0, withSavings: 4, withoutSavings: 4 },
      },
    ],
    excludedProducts: [],
  }
  expect(getProductInformation(mockPDPResponseWithPromotionalBadge, mockHolds)).toEqual(newOutOfStockState)
})

describe('hasOutOfStockProducts', () => {
  it('it should return false when stockHold array has single product which is not fullyReserved', () => {
    expect(hasOutOfStockProducts(snapshotWithSingleItemOutOfStock)).toEqual(true)
  })

  it('it should return true when stockHold array has multiple products and one of them is fullyReserved', () => {
    expect(hasOutOfStockProducts(snapshotWithMultipleItemsOutOfStock)).toEqual(true)
  })

  it('it should return false when all items are available, stockHold is empty', () => {
    expect(hasOutOfStockProducts(snapshotWithAllItemsAvailable)).toEqual(false)
  })

  it('it should return false when stockHold has multiple products and both are fullyReserved', () => {
    expect(hasOutOfStockProducts(snapshotWithMultipleItemsFullyReserved)).toEqual(false)
  })
})
