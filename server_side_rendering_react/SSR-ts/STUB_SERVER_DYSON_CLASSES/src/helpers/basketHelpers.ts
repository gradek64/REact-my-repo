import { ProductIncludeBreadcrumb, ProductIncludeLegalText } from '../types/api'
import { Line } from 'types/api/snapshot'

export const getProductIdsFromItems = (items: Line[]) => items.map((item) => Number(item?.product?.id)).filter(Boolean)

export const getProductCategoryIds = (includedData: ProductIncludeBreadcrumb[]) =>
  includedData?.reduce((productCategoryIds, item) => {
    item?.categories?.forEach((category) => productCategoryIds.push(category?.id))
    return productCategoryIds.filter(Boolean)
  }, [] as string[]) || []

export const getAgeRestrictedIds = (includedData: ProductIncludeLegalText[]) => {
  const ageRestrictedItemIds: string[] = []

  includedData.forEach((item) => {
    if (item.type === 'legalTexts' && item.attributes.safetyText) {
      if (item.attributes.safetyText.match(/\b(age|ages|aged)\b/gi)) {
        ageRestrictedItemIds.push(item.id)
      }
    }
  })

  return ageRestrictedItemIds
}
