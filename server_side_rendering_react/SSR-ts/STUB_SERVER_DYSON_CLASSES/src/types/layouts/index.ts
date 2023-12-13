import { Brand, OrderSummaryVariant, TotalsState } from '../reducers'

export enum footerEventType {
  PRIVACY_HUB = 'privacyHub',
  PRIVACY_POLICY = 'privacyPolicy',
  COOKIE_POLICY = 'cookiePolicy',
  LIST_OF_COOKIES = 'listOfCookies',
  TERMS_AND_CONDITIONS = 'termsAndConditions',
}

export interface MiniHeaderProps {
  disabled?: boolean
  type: string
  data?: {
    quantity: number
    total: number | null
    url: string
  }
  brand: Brand
}

export interface HeaderProps {
  itemsQuantity: number
  orderSummaryVariant: OrderSummaryVariant
  totals: TotalsState
  brand: Brand
}
