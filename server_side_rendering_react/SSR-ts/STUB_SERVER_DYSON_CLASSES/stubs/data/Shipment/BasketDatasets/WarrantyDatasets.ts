import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.furnitureCare,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.breakdownCare,
    allocated: 4,
    saving: 2.0,
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.furnitureCare,
    allocated: 1,
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.furnitureCare,
    allocated: 3,
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.furnitureCare,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.breakdownCare,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.breakdownCare,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.breakdownCare,
    allocated: 1,
  }),
]

const digitalDatasets = {
  [DeliveryBasketType.DEFAULT]: {
    description: 'Default development basket',
    products: defaultBasket,
  },
  [DeliveryBasketType.SINGLE]: {
    description: 'Single item basket',
    products: singleItemBasket,
  },
  [DeliveryBasketType.QUANTITY]: {
    description: 'Single item basket with quantity',
    products: quantityBasket,
  },
  [DeliveryBasketType.LARGE]: {
    description: 'Large basket',
    products: largeBasket,
  },
}

export default digitalDatasets
