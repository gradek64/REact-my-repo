import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.tennisRacket,
    allocated: 1,
    notes: 'Between 1st July & 4th July 2022 via Royal Mail',
  }),
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 4,
    saving: 2.0,
    notes: 'TBC 2022 via Royal Mail',
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 1,
    notes: 'Between 1st July & 4th July 2022 via Royal Mail',
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 3,
    notes: 'Between 1st July & 4th July 2022 via Royal Mail',
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.fridgeFreezer,
    allocated: 1,
    notes: 'Between 1st July & 4th July 2022 via Royal Mail',
  }),
  new Product({
    ...productDatasets.tennisRacket,
    allocated: 1,
    notes: 'TBC 2022 via Royal Mail',
  }),
  new Product({
    ...productDatasets.redKettle,
    allocated: 1,
    notes: 'Between 8th July & 14th July 2022 via Royal Mail',
  }),
  new Product({
    ...productDatasets.washingMachine,
    allocated: 1,
    notes: 'TBC 2022 via Royal Mail',
  }),
  new Product({
    ...productDatasets.sofa,
    allocated: 1,
    notes: 'Between 21st July & 28th July 2022 via Royal Mail',
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
