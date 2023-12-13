import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.sofa,
    allocated: 2,
  }),
  new Product({
    ...productDatasets.tv,
    allocated: 1,
    saving: 10.0,
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.tv,
    allocated: 1,
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.tv,
    allocated: 2,
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.sofa,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tv,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.washingMachine,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.bed,
    allocated: 1,
  }),
]

const largeItemDatasets = {
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

export default largeItemDatasets
