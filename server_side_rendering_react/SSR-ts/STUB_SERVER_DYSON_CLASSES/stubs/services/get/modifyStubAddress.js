import { AddressType } from '../../../src/types/stubs'
import {
  addAddressResponseData,
  getAddressResponseData,
  updateAddressResponseData,
  updateBillingAddressResponseData,
  updateContactAddressResponseData,
  updateDeliveryAddressResponseData,
} from '../../data/Address'
import addressDatasets from '../../data/Address/AddressDatasets'

const SessionManager = require('../../data/SessionManager')
const snapshotServiceDatasets = require('../../data/SnapshotService/SnapshotServiceDatasets').default

const modifyStubAddress = {
  path: '/payment-stub/address',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query
    const { value } = query
    const sessionData = SessionManager.getSession(req)
    const user = sessionData.user
    const snapshotService = sessionData.snapshotService

    if (query.type === 'addressData') {
      if (addressDatasets[value]) {
        user.addresses.setAddressType(value)
        console.log(`API: Set address - ${addressDatasets[value].description}`)

        // When setting addresses to 0 also set snapshot initialisation to missing billing address error
        if (value === AddressType.NO_ADDRESSES) {
          const newState = snapshotServiceDatasets.snapshotInitialisation.PaymentMissingBillingAddress
          snapshotService.setSnapshotInitialisation(newState)
          console.log(`API: Setup snapshot service - snapshot initialisation - ${newState.description}`)
        }
      } else {
        return { error: `Invalid value: ${value}` }
      }
    }

    // Account addresses

    if (query.type === 'addAddressResponseData') {
      if (!addAddressResponseData[value]) {
        return { error: `Invalid addAddressResponseData value: ${value}` }
      }

      user.addresses.setAddAccountAddressResponseType(value)
      console.log(`API: Set addAddressResponseData - ${addAddressResponseData[value].description}`)
    }

    if (query.type === 'getAddressResponseData') {
      if (!getAddressResponseData[value]) {
        return { error: `Invalid getAddressResponseData value: ${value}` }
      }

      user.addresses.setGetAccountAddressesResponseType(value)
      console.log(`API: Set getAddressResponseData - ${getAddressResponseData[value].description}`)
    }

    if (query.type === 'updateAddressResponseData') {
      if (!updateAddressResponseData[value]) {
        return { error: `Invalid updateAddressResponseData value: ${value}` }
      }

      user.addresses.setUpdateAccountAddressResponseType(value)
      console.log(`API: Set updateAddressResponseData - ${updateAddressResponseData[value].description}`)
    }

    // Snapshot addresses

    if (query.type === 'updateBillingAddressResponseData') {
      if (!updateBillingAddressResponseData[value]) {
        return {
          error: `Invalid updateBillingAddressResponseData value: ${value}`,
        }
      }

      user.addresses.setUpdateBillingAddressResponseType(value)
      console.log(`API: Update Billing Address response - ${updateBillingAddressResponseData[value].description}`)
    }

    if (query.type === 'updateContactAddressResponseData') {
      if (!updateContactAddressResponseData[value]) {
        return { error: `Invalid updateContactAddressResponseData value: ${value}` }
      }

      user.addresses.setUpdateContactAddressResponseType(value)
      console.log(`API: Update Contact Address response - ${updateContactAddressResponseData[value].description}`)
    }

    if (query.type === 'updateDeliveryAddressResponseData') {
      if (!updateDeliveryAddressResponseData[value]) {
        return { error: `Invalid updateDeliveryAddressResponseData value: ${value}` }
      }

      user.addresses.setUpdateDeliveryAddressResponseType(value)
      console.log(`API: Update Delivery Address response - ${updateDeliveryAddressResponseData[value].description}`)
    }

    SessionManager.saveSession(sessionData, req)
    return user.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubAddress
