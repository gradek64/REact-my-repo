import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'

import { productDatasets } from '../../Products/ProductDatasets'

const defaultBasket = [
  new Product({
    ...productDatasets.digitalDownloadGame,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.digitalDownloadXboxLive,
    allocated: 4,
    saving: 2.0,
  }),
]

const singleItemBasket = [
  new Product({
    ...productDatasets.digitalDownloadGame,
    allocated: 1,
  }),
]

const quantityBasket = [
  new Product({
    ...productDatasets.digitalDownloadGame,
    allocated: 3,
  }),
]

const largeBasket = [
  new Product({
    ...productDatasets.digitalDownloadGame,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.digitalDownloadXboxLive,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.digitalDownloadWarzone,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.digitalDownloadFifa,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.digitalDownloadMinecraft,
    allocated: 1,
  }),
]

const singleGiftCard = [
  new Product({
    ...productDatasets.costaGiftCard,
    allocated: 1,
  }),
]

const digitalDownloadDatasets = {
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
  [DeliveryBasketType.SINGLE_GIFT_CARD]: {
    description: 'Single item basket containing gift card',
    products: singleGiftCard,
  },
}

export default digitalDownloadDatasets
