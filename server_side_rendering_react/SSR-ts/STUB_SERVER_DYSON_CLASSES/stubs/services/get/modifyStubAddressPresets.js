import cloneDeep from 'lodash/cloneDeep'
import { fakeAddresses as addressBook, initialIds } from '../../data/Address/AddressDatasets'

const SessionManager = require('../../data/SessionManager')

/**
 * Helpers to quickly switch an address into specific presets
 */
const modifyStubAddressPresets = {
  path: '/payment-stub/address-presets',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const { type = '' } = req.query || {}
    const sessionData = SessionManager.getSession(req)
    const addresses = sessionData.user.addresses

    const billing = cloneDeep(addresses.getSnapshotBillingAddress())
    const contact = cloneDeep(addresses.getSnapshotContactAddress())
    const delivery = cloneDeep(addresses.getSnapshotDeliveryAddress())

    let newBilling = { ...billing, id: initialIds[1] }
    let newContact = { ...contact, id: initialIds[2] }
    let newDelivery = { ...delivery, id: initialIds[3] }

    if (type === 'setBillingUK') newBilling.lines.country = 'United Kingdom'
    if (type === 'setBillingInternational') newBilling.lines.country = 'Argentina'
    if (type === 'setBillingMultiCharFirstName') newBilling.person.firstName = 'Anakin'
    if (type === 'setBillingSingleCharFirstName') newBilling.person.firstName = 'A'
    if (type === 'setBillingMatchContact') newBilling = contact
    if (type === 'setBillingMatchDelivery') newBilling = delivery
    if (type === 'setBillingUnique') newBilling.lines = addressBook[1]

    if (type === 'setContactUK') newContact.lines.country = 'United Kingdom'
    if (type === 'setContactInternational') newContact.lines.country = 'Argentina'
    if (type === 'setContactMultiCharFirstName') newContact.person.firstName = 'Anakin'
    if (type === 'setContactSingleCharFirstName') newContact.person.firstName = 'A'
    if (type === 'setContactMatchBilling') newContact = billing
    if (type === 'setContactMatchDelivery') newContact = delivery
    if (type === 'setContactUnique') newContact.lines = addressBook[2]

    if (type === 'setDeliveryMultiCharFirstName') newDelivery.person.firstName = 'Anakin'
    if (type === 'setDeliverySingleCharFirstName') newDelivery.person.firstName = 'A'
    if (type === 'setDeliveryOnlyLocalizedPostcode') {
      newDelivery = { lines: { postcode: 'N22 5HY', country: 'UK' } }
    }

    if (type === 'setDeliveryMatchBilling') newDelivery = billing
    if (type === 'setDeliveryMatchContact') newDelivery = contact
    if (type === 'setDeliveryUnique') newDelivery.lines = addressBook[3]

    if (type.startsWith('setBilling')) addresses.updateBillingAddress(newBilling)
    if (type.startsWith('setContactMatch')) addresses.updateContactAddress(newContact)
    if (type.startsWith('setDelivery')) addresses.updateDeliveryAddress(newDelivery)

    // When we're creating a new address to use as the contact address (as
    // opposed to using the existing billing/delivery address)
    if (type.startsWith('setContact') && !type.startsWith('setContactMatch')) {
      const accountAddress = addresses.updateAccountAddress(newContact.id, { ...newContact, contactAddress: true })
      addresses.updateContactAddress(accountAddress)
    }

    SessionManager.saveSession(sessionData, req)
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.sendStatus(200)
  },
}

module.exports = modifyStubAddressPresets
