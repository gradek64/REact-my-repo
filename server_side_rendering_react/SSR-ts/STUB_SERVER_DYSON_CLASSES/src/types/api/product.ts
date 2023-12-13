export enum ProductAPIFlags {
  TAXONOMY_BREADCRUMB = 'taxonomy_breadcrumb',
  BADGES = 'badges',
  PRICE = 'price',
  AGE_RESTRICTED = 'legalText',
}

export type ProductChannel =
  | 'TU_UK'
  | 'ARGOS_UK_WEB'
  | 'ARGOS_UK_CAT'
  | 'ARGOS_UK_KIOSK'
  | 'ARGOS_ROI_WEB'
  | 'ARGOS_ROI_CAT'
  | 'HABITAT_UK'

export type ProductIncludeFlags = ProductAPIFlags[]

export type ProductInclude =
  | ProductIncludeBreadcrumb
  | ProductIncludePrice
  | ProductIncludeBadge
  | ProductIncludeLegalText

export type ProductIncludeBreadcrumb = {
  id: string
  type: 'taxonomy'
  attributes?: {
    templateType: string
  }
  categories: {
    id: string
    type: string
    name: string
    url: string
    isWCS?: boolean
    browsePresentable?: boolean
  }[]
}

export type ProductIncludePrice = {
  id: string
  type: 'prices'
  attributes: {
    now: number
  }
}

export type ProductIncludeBadge = {
  id: number
  type: 'badges'
  attributes: {
    badgeType?: string
    badgeText?: string
    badgeReference: string
    startDate?: string
    endDate?: string
    componentBadge?: []
  }
}

export type ProductIncludeLegalText = {
  id: string
  type: 'legalTexts'
  attributes: {
    safetyText: string
  }
}

export type ProductMeta = {
  priority: {
    BADGE_VALUE: number[]
  }
}

export type ProductError = {
  title: string
  detail: string
}

export type ProductData = {
  id: string
  type?: string
  attributes: {
    brand: string
    channels: ProductChannel[]
    parentId?: string
  }
  links?: {
    self: string
  }
}

export interface GetProductsAPIPayload {
  data: ProductData | ProductData[]
  included?: ProductInclude[]
  errors?: ProductError[]
  meta?: ProductMeta
}

export type GetOutOfStockProductInfoPayload = {
  productInfo: OutOfStockProductInfo
}

export type OutOfStockProductInfo = {
  [key: string]: {
    id: string
    category: string
    url: string
    price: number
    badge: string | null
  }
}
