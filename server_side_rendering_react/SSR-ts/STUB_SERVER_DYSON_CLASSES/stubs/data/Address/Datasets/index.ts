// Account
export { addAddressResponseData } from './account/AddAddressDatasets'
export { getAddressResponseData } from './account/GetAddressDatasets'
export { updateAddressResponseData } from './account/UpdateAddressDatasets'

// Snapshot
// contact address and delivery address currently have the same response types as billing address
// -> note: this might change in the future!
export {
  updateBillingAddressResponseData,
  updateBillingAddressResponseData as updateContactAddressResponseData,
  updateBillingAddressResponseData as updateDeliveryAddressResponseData,
} from './snapshot/UpdateBillingAddressDatasets'
