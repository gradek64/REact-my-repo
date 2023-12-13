export interface orderDetails {
  orderNumber?: string
  orderDate?: string
  giftCards?: number
  nectar?: number
  nectarPoints?: number
  total: number
  totalSavings?: number
}

export interface deliveryDetails {
  address?: string
  person?: string
  date?: string
  days?: number
  email?: string
  hours?: number
  quantity?: number
  type?: 'single' | 'multiple' | 'digital' | 'thirdParty' | 'preOrder'
  changeAddressLink?: string
  handleChangeAddressClick?: () => void
}

export interface PriceGridProps {
  className?: string
  priceDetails?: {
    subtotal?: number
    collection?: number
    collectionLocation?: string
    delivery?: number
    specialOffers?: number
    promos?: number
    giftCards?: number
    nectar?: number
    total: number
  }
  orderDetails?: orderDetails
  deliveryDetails?: deliveryDetails
}
