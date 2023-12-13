import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.sofa,
    allocated: 1,
    leadTimeDays: '15',
  }),
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 4,
    saving: 2.0,
    leadTimeDays: '10',
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.sofa,
    allocated: 1,
    leadTimeDays: '15',
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.sofa,
    allocated: 3,
    leadTimeDays: '15',
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.sofa,
    allocated: 1,
    leadTimeDays: '15',
  }),
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 1,
    leadTimeDays: '14',
  }),
  new Product({
    ...productDatasets.bed,
    allocated: 1,
    leadTimeDays: '13',
  }),
  new Product({
    ...productDatasets.fan,
    allocated: 1,
    leadTimeDays: '12',
  }),
  new Product({
    ...productDatasets.iphone,
    allocated: 1,
    leadTimeDays: '11',
  }),
]

const supplierDirectFulfilledDatasets = {
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

export default supplierDirectFulfilledDatasets
