// import { performance } from 'perf_hooks' NEEDS NODE 9+

import { sortVariants, defaultMapper, typeMapper, variantFilter } from './sortVariants'

import {
  ordinaryColours,
  legacyLongSizes,
  numberSizes,
  ageSizes,
  ageRangeSizes,
  mixedAgeRangeSizes,
  mixedAgeSizes,
  shortSizes,
  trousersSizes,
  mixedShortSizes,
  mixedBraSizes,
  bedSizes,
  unexpectedSizes,
  partialServices,
  unknownServices
} from './sortVariants.data'

import { tshirt, jeans, vest } from './sortVariants.data.json'

const validateType = (type, input) => {
  const { list, expected } = input
  expect(list.sort(sortVariants(typeMapper(type)))).toEqual(expected)
}

describe('orderVariants helper', () => {
  describe('Produces correct ordering', () => {
    test('should order colours correclty', () => {
      validateType('colour', ordinaryColours)
    })

    test('should order legacy long sizes correctly', () => {
      validateType('size', legacyLongSizes)
    })

    test('should order numeric sizes correctly', () => {
      validateType('size', numberSizes)
    })

    test('should order age sizes correctly', () => {
      validateType('size', ageSizes)
    })

    test('should order age range sizes correctly', () => {
      validateType('size', ageRangeSizes)
    })

    test('should order age range sizes correctly', () => {
      validateType('size', mixedAgeRangeSizes)
    })

    test('should order mixed age sizes correctly', () => {
      validateType('size', mixedAgeSizes)
    })

    test('should order short sizes correctly', () => {
      validateType('size', shortSizes)
    })

    test('should order trousers sizes correctly', () => {
      validateType('size', trousersSizes)
    })

    test('should order mixed short sizes correctly', () => {
      validateType('size', mixedShortSizes)
    })

    test('should order mixed bra sizes correclty', () => {
      validateType('size', mixedBraSizes)
    })

    test('should order bed sizes correclty', () => {
      validateType('size', bedSizes)
    })

    test('should order unknown sizes appropriately', () => {
      validateType('size', unexpectedSizes)
    })

    test('should order partial services correctly', () => {
      validateType('service', partialServices)
    })

    test('should order unknown services appropriately', () => {
      validateType('service', unknownServices)
    })

    test('should work as expected for tshirt sizes', () => {
      const { list, expected } = tshirt
      expect(
        list
          .sort(sortVariants(defaultMapper('Size')))
          .map(defaultMapper('Size'))
          .map(({ value }) => value)
      ).toEqual(expected)
    })

    test('should work as expected for jeans sizes', () => {
      const { list, expected } = jeans
      expect(
        list
          .sort(sortVariants(defaultMapper('Size')))
          .map(defaultMapper('Size'))
          .map(({ value }) => value)
      ).toEqual(expected)
    })

    test('should work as expected for vest sizes and colours', () => {
      const { list, expected } = vest
      expect(
        list
          .sort(sortVariants(defaultMapper('Size')))
          .filter(variantFilter('Colour', 'RED'))
          .map(defaultMapper('Size'))
          .map(({ value }) => value)
      ).toEqual(expected.sizes)
      expect(
        list
          .sort(sortVariants(defaultMapper('Colour')))
          .filter(variantFilter('Size', '8'))
          .map(defaultMapper('Colour'))
          .map(({ value }) => value)
      ).toEqual(expected.colours)
    })
  })
})

describe('variantsFilter', () => {
  describe('when filtering out products with no matching attributes', () => {
    it('should filter the correct products', () => {
      // These products have a color attribute of black
      const validProducts = [
        { attributes: [{ type: 'Color', value: 'Black' }] },
        {
          attributes: [
            { type: 'Color', value: 'Black' },
            { type: 'Size', value: 'L' }
          ]
        },
        {
          attributes: [
            { type: 'Service', value: 'HomeDelivery' },
            { type: 'Color', value: 'Black' }
          ]
        }
      ]

      // These products don't have a color attribute of black
      const invalidProducts = [
        { attributes: [{ type: 'Color', value: 'Red' }] },
        { attributes: [{ type: 'Size', value: 'L' }] },
        { attributes: [{ type: 'Service', value: 'HomeDelivery' }] }
      ]

      const products = [...validProducts, ...invalidProducts]

      expect(products.filter(variantFilter('Color', 'Black'))).toEqual(validProducts)
    })
  })
})
