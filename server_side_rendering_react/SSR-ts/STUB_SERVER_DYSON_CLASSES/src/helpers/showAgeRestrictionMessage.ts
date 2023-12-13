import { Consignment } from 'types/reducers/delivery'

export const showAgeRestrictionMessage = ({
  ageRestrictedIds = [],
  unavailableIds = [],
  consignments = [],
}: Props): boolean => {
  if (!ageRestrictedIds.length || !consignments.length) return false

  const hasAvailableRestrictedProducts = ageRestrictedIds.some((id) => !unavailableIds.includes(id))

  if (!hasAvailableRestrictedProducts) return false

  const hasAvailableRestrictedConsignments = consignments.some(
    ({ products, slots }) =>
      products.some((product) => ageRestrictedIds.includes(product.productId)) && slots.some((slot) => !slot.disabled),
  )

  return hasAvailableRestrictedConsignments
}

type Props = {
  ageRestrictedIds: string[]
  unavailableIds: string[]
  consignments: Consignment[]
}
