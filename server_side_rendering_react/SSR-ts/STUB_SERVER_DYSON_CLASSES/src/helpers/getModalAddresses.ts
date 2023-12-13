import { SavedAddress } from 'types/reducers'

export const getModalAddresses = (unsortedAddresses: SavedAddress[], modalRoute?: string) => {
  const nonContactAddresses = unsortedAddresses.filter((address) => !address.contactAddress)

  const contactAddress = unsortedAddresses.find((address) => address.contactAddress)
  if (typeof contactAddress === 'undefined') {
    return nonContactAddresses
  }

  return [contactAddress, ...nonContactAddresses].filter(
    (address) => address.lines.country === 'United Kingdom' || modalRoute !== 'delivery',
  )
}
