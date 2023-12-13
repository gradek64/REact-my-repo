import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.tuIronMan,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuDarthVader,
    allocated: 4,
    saving: 2.0,
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.tuIronMan,
    allocated: 1,
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.tuIronMan,
    allocated: 3,
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.tuItem,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuIronMan,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuTshirt,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuTrousers,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuJumper,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuDarthVader,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuDressingGown,
    allocated: 1,
  }),
]

const clothingDatasets = {
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

export default clothingDatasets
