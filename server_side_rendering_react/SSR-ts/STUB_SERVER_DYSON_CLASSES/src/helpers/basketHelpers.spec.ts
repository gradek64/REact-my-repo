import { getProductIdsFromItems, getProductCategoryIds, getAgeRestrictedIds } from './basketHelpers'
import { response } from '../reducers/basket/__mocks__/productWithBreadcrumb'
import { response as responseWithLegalText } from '../reducers/basket/__mocks__/productWithLegalText'
import { multipleItemBasketAllAvailable } from 'mocks/state'

describe('When getting product ID numbers from a shipment', () => {
  test('should return an array of product IDs', () => {
    const { products } = multipleItemBasketAllAvailable.basket
    const result = getProductIdsFromItems(products)
    expect(result).toEqual([5399235, 7067462])
  })
})

describe('Getting product category ID numbers from the product response', () => {
  test('should return an array of product category IDs', () => {
    const result = getProductCategoryIds(response)
    expect(result).toEqual(['11111', '22222'])
  })
})

describe('Getting age restricted IDs from the product response', () => {
  test('should return an array of age restricted IDs', () => {
    const result = getAgeRestrictedIds(responseWithLegalText)
    expect(result).toEqual(['1234', '5678', '9012', '3456'])
  })
})
