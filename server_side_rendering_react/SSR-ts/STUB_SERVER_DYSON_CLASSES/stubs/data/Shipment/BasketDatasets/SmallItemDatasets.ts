import { DeliveryBasketType } from '../../../../src/types/stubs'
import Product from '../../Products/Product'
import { productDatasets } from '../../Products/ProductDatasets'

import { defaultBasket, largeBasket, quantityBasket, singleItemBasket } from './CollectionDatasets'

const smallItemDatasets = {
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
    products: largeBasket.slice(0, -1), // don't include the tv
  },
  [DeliveryBasketType.AGE_RESTRICTED]: {
    description: 'Age restricted item',
    products: [
      new Product({
        ...productDatasets.gas,
        allocated: 1,
      }),
    ],
  },
  [DeliveryBasketType.FOUR_ITEM_BASKET]: {
    description: '4 item basket',
    products: largeBasket.slice(0, 4),
  },
  [DeliveryBasketType.FIVE_ITEM_BASKET]: {
    description: '5 item basket',
    products: largeBasket.slice(0, 5),
  },
}

export default smallItemDatasets
