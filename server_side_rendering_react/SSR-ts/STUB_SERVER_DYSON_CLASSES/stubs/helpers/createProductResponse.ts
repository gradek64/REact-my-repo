import ProductDetailsDatasets from '../data/Products/ProductDetailsDatasets'
import {
  ProductData,
  ProductAPIFlags,
  ProductInclude,
  ProductError,
  ProductMeta,
  GetProductsAPIPayload,
} from '../../src/types/api'

const createProductResponse = (productStr = '', includeStr = ''): GetProductsAPIPayload => {
  const data: ProductData[] = []
  const included: ProductInclude[] = []
  const errors: ProductError[] = []
  let meta: ProductMeta | undefined

  const products = productStr.split(',')
  const includes = includeStr.split(',')

  // Populate the `data`, `included` and `errors` for each product
  products.forEach((id: string) => {
    const product = ProductDetailsDatasets[id]

    // Add the product details to the response
    if (product) {
      data.push({
        id,
        attributes: product.attributes,
      })
    } else {
      errors.push({
        title: 'Resource not found',
        detail: `${id} not found`,
      })
    }

    // Add the prices to the response
    if (includes.includes(ProductAPIFlags.PRICE)) {
      if (product && product.price) {
        included.push({
          id,
          type: 'prices',
          attributes: {
            now: product.price,
          },
        })
      } else {
        errors.push({
          title: 'Resource not found',
          detail: `prices for ${id} not found`,
        })
      }
    }

    // Add the taxonomy breadcrumb to the response
    if (includes.includes(ProductAPIFlags.TAXONOMY_BREADCRUMB)) {
      if (product && product.categories) {
        included.push({ id: 'breadcrumb', type: 'taxonomy', categories: product.categories })
      } else {
        errors.push({
          title: 'Resource not found',
          detail: `taxonomy breadcrumb for ${id} not found`,
        })
      }
    }

    // Add the badges & badge priority to the response
    if (includes.includes(ProductAPIFlags.BADGES)) {
      if (product && product.badge) {
        included.push({
          id: 123456,
          type: 'badges',
          attributes: {
            badgeReference: product.badge,
          },
        })

        meta = {
          priority: {
            BADGE_VALUE: [123456],
          },
        }
      } else {
        errors.push({
          title: 'Resource not found',
          detail: `badges for ${id} not found`,
        })
      }
    }

    if (includes.includes(ProductAPIFlags.AGE_RESTRICTED)) {
      if (product && product.ageRestricted) {
        included.push({
          id,
          type: 'legalTexts',
          attributes: {
            safetyText: 'why is this how we have to work out if something is an Age restricted item?',
          },
        })
      } else {
        errors.push({
          title: 'Resource not found',
          detail: `legal text for ${id} not found`,
        })
      }
    }
  })

  return {
    data: products.length > 1 ? data : data[0],
    included: included.length > 0 ? included : undefined,
    errors: errors.length > 0 ? errors : undefined,
    meta,
  }
}

export default createProductResponse
