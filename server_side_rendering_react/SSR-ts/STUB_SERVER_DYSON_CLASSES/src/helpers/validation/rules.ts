import {
  hasFewerCharactersThan,
  hasMoreCharactersThan,
  isFirstName,
  isLastName,
  isAddressLine,
  isAddressLine2,
  isUkPostcode,
  isPostcode,
  isCounty,
  errorMessages,
  isUkMobilePhone,
  isMobilePhone,
  isPhone,
  isCity,
} from '@sainsburys-tech/bolt-validators'
import i18n from 'i18next'

import {
  giftCardNumber,
  giftCardArgosPin,
  giftCardFlexecashCode,
  giftCardFlexecashExpiry,
  promoReference,
  nectar2faCode,
  nectarCardNumber,
  email,
} from './inputs'

import { isSlotlessConsignmentType } from '../arrangeDeliveryHelpers'
import { stripWhitespace, trimWhitespace } from '../stringHelpers'
import { AddressFormValues } from 'types/components'
import { ShipmentType } from 'types/api'
import { ArrangeDeliveryFormValues } from 'types/containers'

export const rules = {
  /* AD page */
  ageRestrictionChecked: (value: boolean, values: ArrangeDeliveryFormValues) => {
    if (!values._ageRestrictionShowing) return null

    return value ? null : 'Age restriction box has not been checked'
  },
  /* Address */
  title: (value: string) => {
    const temp = !value ? errorMessages.TITLE_REQUIRED : null
    return temp
  },
  firstName: (value: string) => {
    if (!value) return errorMessages.FISRT_NAME_REQUIRED
    if (!isFirstName(value)) return errorMessages.FIRST_NAME_INVALID
    if (hasMoreCharactersThan(20, value)) return errorMessages.FIRST_NAME_TOO_LONG
    return null
  },
  lastName: (value: string) => {
    if (!value) return errorMessages.LAST_NAME_REQUIRED
    if (!isLastName(value)) return errorMessages.LAST_NAME_INVALID
    if (hasFewerCharactersThan(2, value)) return errorMessages.LAST_NAME_TOO_SHORT
    if (hasMoreCharactersThan(40, value)) return errorMessages.LAST_NAME_TOO_LONG
    return null
  },
  addressFinder: () => {
    return 'Please select an address'
  },
  address1: (value: string) => {
    if (!value) return errorMessages.ADDRESS1_REQUIRED
    if (!isAddressLine2(value)) return errorMessages.ADDRESS1_INVALID
    if (hasMoreCharactersThan(29, value)) return errorMessages.ADDRESS1_TOO_LONG
    return null
  },
  address2: (value: string) => {
    if (!value) return errorMessages.ADDRESS2_REQUIRED
    if (!isAddressLine2(value)) return errorMessages.ADDRESS2_INVALID
    if (hasMoreCharactersThan(34, value)) return errorMessages.ADDRESS2_TOO_LONG
    return null
  },
  address3: (value: string) => {
    if (!value) return null // optional
    if (!isAddressLine(value)) return errorMessages.ADDRESS3_INVALID
    if (hasMoreCharactersThan(50, value)) return errorMessages.ADDRESS3_TOO_LONG
    return null
  },
  postcode: (value: string, { country }: AddressFormValues) => {
    if (!value) return errorMessages.POSTCODE_REQUIRED
    const trimmedValue = trimWhitespace(value)
    if (!trimmedValue) return errorMessages.POSTCODE_REQUIRED
    if (country === 'United Kingdom') {
      if (hasFewerCharactersThan(5, trimmedValue)) return errorMessages.POSTCODE_UK_TOO_SHORT
      if (hasMoreCharactersThan(8, trimmedValue)) return errorMessages.POSTCODE_UK_TOO_SHORT
      if (!isUkPostcode(trimmedValue)) return errorMessages.POSTCODE_UK_INVALID
    } else if (!isPostcode(trimmedValue)) return errorMessages.POSTCODE_INVALID
    return null
  },
  mobilePhone: (value: string, values: AddressFormValues, { formName }: { formName: string }) => {
    if (values._phoneType === 'mobilePhone') {
      if (!value) return errorMessages.MOBILE_PHONE_REQUIRED
      const strippedValue = stripWhitespace(value)
      if (!strippedValue) return errorMessages.MOBILE_PHONE_REQUIRED
      if (hasFewerCharactersThan(11, strippedValue)) return errorMessages.MOBILE_PHONE_TOO_SHORT
      if (hasMoreCharactersThan(20, strippedValue)) return errorMessages.MOBILE_PHONE_TOO_LONG
      if (!isMobilePhone(strippedValue)) return errorMessages.MOBILE_PHONE_INVALID
      if (formName === i18n.t('address:formNames:partialBillingAddress') && !isUkMobilePhone(strippedValue))
        return errorMessages.MOBILE_PHONE_UK_INVALID
    }
    return null
  },
  homePhone: (value: string, values: AddressFormValues) => {
    if (values._phoneType === 'homePhone') {
      if (!value) return errorMessages.HOME_PHONE_REQUIRED
      const strippedValue = stripWhitespace(value)
      if (!strippedValue) return errorMessages.HOME_PHONE_REQUIRED
      if (hasFewerCharactersThan(10, strippedValue)) return errorMessages.HOME_PHONE_TOO_SHORT
      if (hasMoreCharactersThan(20, strippedValue)) return errorMessages.HOME_PHONE_TOO_LONG
      if (!isPhone(strippedValue)) return errorMessages.HOME_PHONE_INVALID
    }
    return null
  },
  county: (value: string) => {
    if (!value) return null // optional
    if (!isCounty(value)) return errorMessages.COUNTY_INVALID
    if (hasMoreCharactersThan(20, value)) return errorMessages.COUNTY_TOO_LONG
    return null
  },
  city: (value: string) => {
    if (!value) return errorMessages.CITY_REQUIRED
    if (!isCity(value)) return errorMessages.CITY_INVALID
    if (hasFewerCharactersThan(3, value)) return errorMessages.CITY_TOO_SHORT
    if (hasMoreCharactersThan(50, value)) return errorMessages.CITY_TOO_LONG
    return null
  },
  orderNumber: (value: string) => {
    if (!value) return errorMessages.ORDER_NUMBER_REQUIRED
    return null
  },
  slots: (slots: { id: string; type: ShipmentType }[]) => {
    const hasValues = slots.every(({ id, type }) => !!id || isSlotlessConsignmentType(type))
    return hasValues ? null : slots.map(({ id, type }) => (id || isSlotlessConsignmentType(type) ? null : true))
  },
  email,
  giftCardNumber,
  giftCardArgosPin,
  giftCardFlexecashCode,
  giftCardFlexecashExpiry,
  promoReference,
  nectar2faCode,
  nectarCardNumber,
}
