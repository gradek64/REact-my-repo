import {
  GetSnapshotAPIPayload,
  GetProductsAPIPayload,
  StockHold,
  OutOfStockProductInfo,
  ProductIncludeBreadcrumb,
  ProductIncludePrice,
  ProductIncludeBadge,
  ProductMeta,
  ProductInclude,
  StockHoldProductStatus,
} from '../types/api'

/**
 * Checks if out of stock products exist in the snapshot
 */
export const hasOutOfStockProducts = (payload: GetSnapshotAPIPayload): boolean => {
  if (!payload.snapshot.stockHolds) return false
  return payload.snapshot.stockHolds.some(
    ({ holds }: { holds: StockHold[] }) => Array.isArray(holds) && holds.some((hold) => !hold.fullyReserved),
  )
}

/**
 * Checks if the snapshot contains in stock products
 */
export const hasInStockProducts = (payload: GetSnapshotAPIPayload): boolean => {
  return payload.snapshot.lines.length > 0
}

const squeeze = (str: string): string => str.replace(/\s/g, '')

/**
 * Returns object including the badge url and the promotion offer for out of stock products
 */
export const getProductPromotion = (
  included: ProductInclude[],
  meta: ProductMeta,
): { url: string; promo: string } | null => {
  const {
    priority: { BADGE_VALUE },
  } = meta

  const isBadgeInclude = (include: ProductInclude): include is ProductIncludeBadge =>
    include.type === 'badges' && include.id === BADGE_VALUE[0]
  const badgeObject = included.find(isBadgeInclude)

  if (badgeObject) {
    const {
      attributes: { badgeReference },
    } = badgeObject

    const squeezedReference = squeeze(badgeReference)

    const productPromoInfo = {
      url: `//media.4rgos.it/i/Argos/${squeezedReference}?$PDPBadge$`,
      promo: squeezedReference,
    }

    return productPromoInfo
  }

  return null
}

export const getOutOfStockProducts = (holds: StockHold[]): any[] => {
  const outOfStock = holds
    .filter((hold) => hold.fullyReserved === false)
    .map(({ productId: id, title, requested, allocated }) => ({
      product: { id, title, price: 0, badge: null },
      total: {
        withoutSavings: 0,
        withSavings: 0,
        saving: 0,
      },
      quantity: requested - allocated,
      requested,
      allocated,
    }))
  return outOfStock
}

export const getProductsWithStockHoldStatus = (holds: StockHold[]): any[] => {
  const outOfStock = holds
    .filter((hold) => hold.status)
    .map(({ productId: id, title, requested, allocated, status }) => ({
      product: { id, title, price: 0, badge: null },
      total: {
        withoutSavings: 0,
        withSavings: 0,
        saving: 0,
      },
      quantity: requested - allocated,
      status,
      requested,
      allocated,
    }))
  return outOfStock
}

/**
 * Returns the product information for the out of stock products
 */
export const getProductInformation = (responses: GetProductsAPIPayload[], holds: StockHold[]) => {
  const outOfStockProducts = getOutOfStockProducts(holds)
  const productsWithStockHoldStatus = getProductsWithStockHoldStatus(holds)
  const outOfStockProductInfo: OutOfStockProductInfo = {}

  let price: number
  let productCategory: string
  let productCategoryId: string
  let productCategoryLink: string

  responses.forEach((response) => {
    // Will never actually happen but makes TypeScript happy. This is needed
    // because the product API will return an array if you ask it for multiple
    // products in the same request, but we know that we don't do that.
    // TODO: refactor the other product API calls in our app to use the same
    // approach, so we can fix our types.
    if (Array.isArray(response.data)) return

    const { included = [], meta } = response
    let badge: string | null = null
    let promoOffer: string | null = null

    if (meta) {
      const promotionObject = getProductPromotion(included, meta)
      if (promotionObject) {
        badge = promotionObject.url
        promoOffer = promotionObject.promo
      }
    }

    const isPriceInclude = (include: ProductInclude): include is ProductIncludePrice => include.type === 'prices'
    const isBreadcrumbInclude = (include: ProductInclude): include is ProductIncludeBreadcrumb =>
      include.type === 'taxonomy'
    const pricesObject = included.find(isPriceInclude)
    const categoriesObject = included.find(isBreadcrumbInclude)

    if (pricesObject) {
      price = pricesObject.attributes.now
    }
    if (categoriesObject) {
      const categories = categoriesObject.categories
      productCategory = categories[categories.length - 1].name
      productCategoryId = categories[categories.length - 1].id
      productCategoryLink = categories[categories.length - 1].url
    }

    const productInfo = {
      id: response.data.id,
      category: productCategory,
      categoryId: productCategoryId,
      url: productCategoryLink,
      price,
      badge,
      promoOffer,
    }
    outOfStockProductInfo[response.data.id] = productInfo
  })

  const outOfStockProductState: any[] = outOfStockProducts.map((item) => ({
    ...item,
    product: { ...item.product, ...outOfStockProductInfo[item.product.id] },
    total: {
      ...item.total,
      withoutSavings: outOfStockProductInfo[item.product.id].price * item.quantity,
      withSavings: outOfStockProductInfo[item.product.id].price * item.quantity,
    },
  }))

  const excludedProducts: any[] = productsWithStockHoldStatus
    .map((item) => ({
      ...item,
      product: { ...item.product, ...outOfStockProductInfo[item.product.id] },
    }))
    .filter(({ status }) => status === StockHoldProductStatus.EXCLUDED)

  return { outOfStockProductState, excludedProducts }
}
