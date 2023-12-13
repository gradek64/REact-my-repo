import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.washingMachine,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 4,
    saving: 2.0,
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.washingMachine,
    allocated: 1,
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.washingMachine,
    allocated: 3,
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.washingMachine,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.sofa,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.bed,
    allocated: 1,
  }),
]

const recyclingServiceDatasets = {
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

export default recyclingServiceDatasets
