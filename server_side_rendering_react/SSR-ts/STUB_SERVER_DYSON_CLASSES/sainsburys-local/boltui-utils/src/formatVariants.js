import { sortVariants, defaultMapper, variantFilter } from './sortVariants'

const getVariantTypes = (variants) => variants && variants[0].attributes.map((attribute) => attribute.type)

const getCurrentVariant = (variants, currentPartNumber) =>
  variants.find((variant) => variant.partNumber === currentPartNumber)

// Note: this assumes there are a max of 2 variant types
const formatVariants = (variants, currentPartNumber) => {
  const variantTypes = getVariantTypes(variants)
  const current = getCurrentVariant(variants, currentPartNumber)
  const variantsArray = []

  variantTypes.forEach((type) => {
    const otherAttribute = type === current.attributes[0].type ? 1 : 0

    const filteredProducts =
      variantTypes.length > 1
        ? variants.filter(
            variantFilter(current.attributes[otherAttribute].type, current.attributes[otherAttribute].value)
          )
        : variants

    const variantsThatMatchType = filteredProducts.sort(sortVariants(defaultMapper(type))).map((variant) => {
      const variantAttributes = variant.attributes.filter((attr) => attr.type === type)[0]
      return {
        type,
        partNumber: variant.partNumber,
        value: variantAttributes.value,
        shortValue: variantAttributes.shortValue,
        isActive: variant.partNumber === currentPartNumber,
        title: variantAttributes.title
      }
    })
    variantsArray.push({ type, products: variantsThatMatchType })
  })
  return variantsArray
}

export default formatVariants
export { getCurrentVariant, getVariantTypes }
