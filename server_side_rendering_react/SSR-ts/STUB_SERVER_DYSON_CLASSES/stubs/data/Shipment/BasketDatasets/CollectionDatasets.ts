import Product from '../../Products/Product'
import { productDatasets } from '../../Products/ProductDatasets'
import { CollectionBasketType } from '../../../../src/types/stubs'

export const defaultBasket = [
  new Product({
    ...productDatasets.redKettle,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.game,
    allocated: 4,
    saving: 2.0,
  }),
]

const singleTuItemBasket = [
  new Product({
    ...productDatasets.tuItem,
    allocated: 1,
  }),
]

const singleHabitatItemBasket = [
  new Product({
    ...productDatasets.habitatMug,
    allocated: 1,
  }),
]

export const singleItemBasket = [
  new Product({
    ...productDatasets.game,
    allocated: 1,
  }),
]

const singleCareItemBasket = [
  new Product({
    ...productDatasets.furnitureCare,
    allocated: 1,
  }),
]

const multipleCareItemsBasket = [
  new Product({
    ...productDatasets.game,
    allocated: 3,
  }),
  new Product({
    ...productDatasets.breakdownCare,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tv,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.furnitureCare,
    allocated: 1,
  }),
]

export const quantityBasket = [
  new Product({
    ...productDatasets.game,
    allocated: 3,
  }),
]

export const largeBasket = [
  new Product({
    ...productDatasets.kettle,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.fan,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuItem,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tennisRacket,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.redKettle,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.iphone,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.game,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.battery,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tv,
    allocated: 1,
  }),
]

const multipleItemsBasket = [
  new Product({
    ...productDatasets.kettle,
    allocated: 4,
    saving: 2,
  }),
  new Product({
    ...productDatasets.fan,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.tuItem,
    allocated: 4,
  }),
  new Product({
    ...productDatasets.tennisRacket,
    allocated: 1,
    saving: 6.0,
  }),
  new Product({
    ...productDatasets.redKettle,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.iphone,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.game,
    allocated: 2,
    saving: 6.0,
  }),
]

const savingBasket = [
  new Product({
    ...productDatasets.redKettle,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.game,
    allocated: 1,
    saving: 6.0,
  }),
]

const singleItemOutOfStockBasket = [
  new Product({
    ...productDatasets.redKettle,
    requested: 1,
    allocated: 0,
  }),
]

const singleItemOutOfStockWithPromotionBasket = [
  new Product({
    ...productDatasets.productWithPromotionBadge,
    requested: 1,
    allocated: 0,
  }),
]

const singleItemPartialAvailabilityBasket = [
  new Product({
    ...productDatasets.game,
    requested: 2,
    allocated: 1,
  }),
]

const singleItemPartialAvailabilityWithPromotionBasket = [
  new Product({
    ...productDatasets.productWithPromotionBadge,
    requested: 2,
    allocated: 1,
  }),
]

const multipleItemsOutOfStockBasket = [
  new Product({
    ...productDatasets.game,
    requested: 1,
    allocated: 0,
  }),
  new Product({
    ...productDatasets.redKettle,
    requested: 1,
    allocated: 0,
  }),
]

const multipleItemsOutOfStockWithPromotionBasket = [
  new Product({
    ...productDatasets.productWithPromotionBadge,
    requested: 1,
    allocated: 0,
  }),
  new Product({
    ...productDatasets.anotherProductWithPromotionBadge,
    requested: 1,
    allocated: 0,
  }),
]

const multipleItemsSomeOutOfStockBasket = [
  new Product({
    ...productDatasets.game,
    requested: 1,
    allocated: 0,
  }),
  new Product({
    ...productDatasets.redKettle,
    requested: 1,
    allocated: 1,
  }),
]

const multipleItemsSomePartialAvailabilityBasket = [
  new Product({
    ...productDatasets.game,
    requested: 2,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.redKettle,
    requested: 2,
    allocated: 1,
  }),
]

const multipleItemsSomePartialAvailabilityWithPromotionBasket = [
  new Product({
    ...productDatasets.productWithPromotionBadge,
    requested: 2,
    allocated: 1,
  }),
  new Product({
    ...productDatasets.anotherProductWithPromotionBadge,
    requested: 2,
    allocated: 1,
  }),
]

const collectionDatasets = {
  [CollectionBasketType.DEFAULT]: {
    description: 'Default development basket',
    products: defaultBasket,
  },
  [CollectionBasketType.SINGLE]: {
    description: 'Single item basket',
    products: singleItemBasket,
  },
  [CollectionBasketType.SINGLE_TU]: {
    description: 'Single Tu clothing item basket',
    products: singleTuItemBasket,
  },
  [CollectionBasketType.SINGLE_HABITAT]: {
    description: 'Single Habitat item basket',
    products: singleHabitatItemBasket,
  },
  [CollectionBasketType.QUANTITY]: {
    description: 'Item with quantity basket',
    products: quantityBasket,
  },
  [CollectionBasketType.LARGE]: {
    description: 'Large basket',
    products: largeBasket,
  },
  [CollectionBasketType.SAVING]: {
    description: 'Items with savings basket',
    products: savingBasket,
  },
  [CollectionBasketType.MULTIPLE]: {
    description: 'Multiple items basket',
    products: multipleItemsBasket,
  },
  Divider: {
    description: '---------------------------',
    products: [],
  },
  [CollectionBasketType.SINGLE_CARE]: {
    description: 'Single care item basket',
    products: singleCareItemBasket,
  },
  [CollectionBasketType.MULTIPLE_CARE]: {
    description: 'Multiple item with care basket',
    products: multipleCareItemsBasket,
  },
  Divider2: {
    description: '---------------------------',
    products: [],
  },
  [CollectionBasketType.SINGLE_ITEM_OUT_OF_STOCK]: {
    description: 'Single item out of stock',
    products: singleItemOutOfStockBasket,
  },
  [CollectionBasketType.SINGLE_ITEM_OUT_OF_STOCK_WITH_PROMOTION]: {
    description: 'Single item out of stock with promotion',
    products: singleItemOutOfStockWithPromotionBasket,
  },
  [CollectionBasketType.SINGLE_ITEM_PARTIAL_AVAILABILITY]: {
    description: 'Single item with partial availability',
    products: singleItemPartialAvailabilityBasket,
  },
  [CollectionBasketType.SINGLE_ITEM_PARTIAL_AVAILABILITY_WITH_PROMOTION]: {
    description: 'Single promotional item with partial availability',
    products: singleItemPartialAvailabilityWithPromotionBasket,
  },
  [CollectionBasketType.MULTIPLE_ITEMS_OUT_OF_STOCK]: {
    description: 'Multiple items out of stock',
    products: multipleItemsOutOfStockBasket,
  },
  [CollectionBasketType.MULTIPLE_ITEMS_OUT_OF_STOCK_WITH_PROMOTION]: {
    description: 'Multiple items out of stock with promotion',
    products: multipleItemsOutOfStockWithPromotionBasket,
  },
  [CollectionBasketType.MULTIPLE_ITEMS_SOME_OUT_OF_STOCK]: {
    description: 'Multiple items with some out of stock',
    products: multipleItemsSomeOutOfStockBasket,
  },
  [CollectionBasketType.MULTIPLE_ITEMS_SOME_PARTIAL_AVAILABILITY]: {
    description: 'Multiple items with some items partial availability',
    products: multipleItemsSomePartialAvailabilityBasket,
  },
  [CollectionBasketType.MULTIPLE_ITEMS_SOME_PARTIAL_AVAILABILITY_WITH_PROMOTION]: {
    description: 'Multiple items with promotion and some items partially available',
    products: multipleItemsSomePartialAvailabilityWithPromotionBasket,
  },
}

export default collectionDatasets
