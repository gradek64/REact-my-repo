import { ShipmentType } from '../../../../src/types/api/snapshot'
import deliveryStockHoldDatasets from './deliveryStockHoldDatasets'
import CollectionDatasets from './CollectionDatasets'
import SmallItemDatasets from './SmallItemDatasets'
import LargeItemDatasets from './LargeItemDatasets'
import DigitalDownloadDatasets from './DigitalDownloadDatasets'
import ClothingDatasets from './ClothingDatasets'
import PreOrderDatasets from './PreOrderDatasets'
import WarrantyDatasets from './WarrantyDatasets'
import SupplierDirectFulfilledDatasets from './SupplierDirectFulfilledDatasets'
import RecyclingServiceDatasets from './RecyclingServiceDatasets'
import Product from '../../Products/Product'

// TODO: try to improve the types!
const basketDatasets: Record<
  ShipmentType,
  Record<
    string,
    {
      description: string
      products: Product[]
    }
  >
> = {
  [ShipmentType.PREPAY]: CollectionDatasets,
  [ShipmentType.SMALL_ITEM]: { ...SmallItemDatasets, ...deliveryStockHoldDatasets(ShipmentType.SMALL_ITEM) },
  [ShipmentType.LARGE_ITEM]: { ...LargeItemDatasets, ...deliveryStockHoldDatasets(ShipmentType.LARGE_ITEM) },
  [ShipmentType.CLOTHING]: { ...ClothingDatasets, ...deliveryStockHoldDatasets(ShipmentType.CLOTHING) },
  [ShipmentType.DIGITAL_DOWNLOAD]: DigitalDownloadDatasets,
  [ShipmentType.WARRANTY]: WarrantyDatasets,
  [ShipmentType.PRE_ORDER]: PreOrderDatasets,
  [ShipmentType.SUPPLIER_DIRECT_FULFILLED]: {
    ...SupplierDirectFulfilledDatasets,
    ...deliveryStockHoldDatasets(ShipmentType.SUPPLIER_DIRECT_FULFILLED),
  },
  [ShipmentType.RECYCLING_SERVICE]: RecyclingServiceDatasets,
}

export default basketDatasets
