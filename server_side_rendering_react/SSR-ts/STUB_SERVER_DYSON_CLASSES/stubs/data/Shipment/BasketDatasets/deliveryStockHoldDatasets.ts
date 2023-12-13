import Product from '../../Products/Product'
import { productDatasets } from '../../Products/ProductDatasets'
import { DeliveryBasketType } from '../../../../src/types/stubs'
import { ShipmentType, StockHoldProductStatus } from '../../../../src/types/api/snapshot'

const setItemByProductType = (productType: ShipmentType, single = true) => {
  switch (productType) {
    case ShipmentType.SMALL_ITEM:
      return single ? [productDatasets.redKettle] : [productDatasets.redKettle, productDatasets.fan]
    case ShipmentType.LARGE_ITEM:
      return single ? [productDatasets.tv] : [productDatasets.tv, productDatasets.fridgeFreezer]
    case ShipmentType.CLOTHING:
      return single ? [productDatasets.tuIronMan] : [productDatasets.tuIronMan, productDatasets.tuItem]
    case ShipmentType.SUPPLIER_DIRECT_FULFILLED:
      return single ? [productDatasets.sofa] : [productDatasets.sofa, productDatasets.tv]
    case ShipmentType.RECYCLING_SERVICE:
      return single ? [productDatasets.washingMachine] : [productDatasets.washingMachine, productDatasets.fridgeFreezer]
    default:
      return []
  }
}

const singleItemOutOfStockBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType)[0],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.UNAVAILABLE,
  }),
]

const singleItemErrorBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType)[0],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.ERROR,
  }),
]

const singleItemPartialAvailabilityBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType)[0],
    requested: 2,
    allocated: 1,
    status: StockHoldProductStatus.PARTIALLY_AVAILABLE,
  }),
]

const singleItemExcludedBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType)[0],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.EXCLUDED,
  }),
]

const multipleItemsOutOfStockBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.UNAVAILABLE,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.UNAVAILABLE,
  }),
]

const multipleItemsSomeOutOfStockBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.UNAVAILABLE,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.FULLY_AVAILABLE,
  }),
]

const multipleItemsSomePartialAvailabilityBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 2,
    allocated: 1,
    status: StockHoldProductStatus.PARTIALLY_AVAILABLE,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.FULLY_AVAILABLE,
  }),
]

const multipleItemsExcludedBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.EXCLUDED,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.EXCLUDED,
  }),
]

const multipleItemsSomeExcludedBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.FULLY_AVAILABLE,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.EXCLUDED,
  }),
]

const multipleItemsSomeOutOfStockSomeExcludedBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.UNAVAILABLE,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 0,
    status: StockHoldProductStatus.EXCLUDED,
  }),
]

const multipleItemsCancelledBasket = (productType: ShipmentType) => [
  new Product({
    ...setItemByProductType(productType, false)[0],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.CANCELLED,
  }),
  new Product({
    ...setItemByProductType(productType, false)[1],
    requested: 1,
    allocated: 1,
    status: StockHoldProductStatus.CANCELLED,
  }),
]

const deliveryStockHoldDatasets = (shipmentType: ShipmentType) => {
  return {
    [DeliveryBasketType.SINGLE_ITEM_OUT_OF_STOCK]: {
      description: 'Single item out of stock',
      products: singleItemOutOfStockBasket(shipmentType),
    },
    [DeliveryBasketType.SINGLE_ITEM_PARTIAL_AVAILABILITY]: {
      description: 'Single item with partial availability',
      products: singleItemPartialAvailabilityBasket(shipmentType),
    },
    [DeliveryBasketType.SINGLE_ITEM_EXCLUDED]: {
      description: 'Single item excluded',
      products: singleItemExcludedBasket(shipmentType),
    },
    [DeliveryBasketType.SINGLE_ITEM_ERROR]: {
      description: 'Single item error',
      products: singleItemErrorBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_OUT_OF_STOCK]: {
      description: 'Multiple items out of stock',
      products: multipleItemsOutOfStockBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_SOME_OUT_OF_STOCK]: {
      description: 'Multiple items with some out of stock',
      products: multipleItemsSomeOutOfStockBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_SOME_PARTIAL_AVAILABILITY]: {
      description: 'Multiple items with some items partial availability',
      products: multipleItemsSomePartialAvailabilityBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_SOME_EXCLUDED]: {
      description: 'Multiple items some excluded',
      products: multipleItemsSomeExcludedBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_EXCLUDED]: {
      description: 'Multiple items excluded',
      products: multipleItemsExcludedBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_SOME_OUT_OF_STOCK_SOME_EXCLUDED]: {
      description: 'Multiple items with some out of stock and some excluded',
      products: multipleItemsSomeOutOfStockSomeExcludedBasket(shipmentType),
    },
    [DeliveryBasketType.MULTIPLE_ITEMS_CANCELLED]: {
      description: 'Multiple items cancelled',
      products: multipleItemsCancelledBasket(shipmentType),
    },
  }
}

export default deliveryStockHoldDatasets
