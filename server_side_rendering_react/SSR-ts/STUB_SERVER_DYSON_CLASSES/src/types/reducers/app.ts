import { DeliveryShipmentType } from 'types/api/snapshot'

export interface AppState {
  theme: Theme
  brandUrl: Brand
  channel: Channel
  config: ConfigState
  features: FeaturesState
  accountUrl: string
  orderSummaryVariant: OrderSummaryVariant
  placeOrderPreview: boolean
}

export interface ConfigState {
  creditRate: number | undefined
  dfpUrl: string
  deliveryDisplayOrder: DeliveryShipmentType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any /* @todo: Remove this once legacy config is completely migrated */
}

export interface ConsulConfig extends Omit<ConfigState, 'deliveryDisplayOrder'> {
  deliveryDisplayOrder: {
    value: DeliveryShipmentType[]
  }
}

export interface FeaturesState {
  season: Season
  cape: boolean
  mpp: boolean
  paypalFallback: boolean
  capeIsTopPosition: boolean
  arrangeDeliveryVariant: ArrangeDeliveryVariant
  guest: boolean
  nectar: boolean
  argosCardReminderPosition: ArgosCardReminderPosition
  payIn3: boolean
  createAccount: boolean
  setupApplePay: boolean
  suppressFTNumber: boolean
  alternativeCheckoutLayout: boolean
  paymentOptionsCTA: PaymentOptionsVariant
  pciAndArgosCard: boolean
  pciOnly: boolean
  argosCardOnly: boolean
  vatReceipt: boolean
  guestMarketingPreferences: boolean
  billingAddressVariant: boolean
  removeCollectionCopyMPP: boolean
  showSameDayLabel: boolean
  showNextDayLabel: boolean
}

export enum OrderSummaryVariant {
  FULL = '2',
  MINI = '3',
  HEADER = '4',
}

export enum PaymentOptionsVariant {
  CONTROL = 'CONTROL',
  LOGOS_ABOVE = 'LOGOS_ABOVE',
  DYNAMIC_CTA = 'DYNAMIC_CTA',
  DYNAMIC_CTA_AND_LOGOS_ABOVE = 'DYNAMIC_CTA_AND_LOGOS_ABOVE',
}

export enum ArrangeDeliveryVariant {
  LIST = 'list',
  GRID = 'grid',
}

export enum ArgosCardReminderPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum Brand {
  ARGOS = 'ARGOS',
  HABITAT = 'HABITAT',
  TU = 'TU',
}
export enum SubBrand {
  ARGOS_TU = 'ARGOS_TU',
  ARGOS_DIGITAL = 'ARGOS_DIGITAL',
  HABITAT_DIGITAL = 'HABITAT_DIGITAL',
  SAINSBURYS_TU = 'SAINSBURYS_TU',
}

export enum Channel {
  WEB = 'WEB',
  APP = 'APP',
}

export enum Theme {
  ARGOS = 'ARGOS',
  HABITAT = 'HABITAT',
  TU = 'TU',
}

export enum Season {
  XMAS = 'xmas',
  DEFAULT = 'default',
  DEFAULT_TU = 'defaultTu',
  XMAS_TU = 'xmasTu',
  DEFAULT_HABITAT = 'defaultHabitat',
  XMAS_HABITAT = 'xmasHabitat',
  HALLOWEEN = 'halloween',
  PRIDE = 'pride',
  PRIDE_TU = 'prideTu',
  PRIDE_HABITAT = 'prideHabitat',
  BLACK_HISTORY_MONTH = 'blackHistoryMonth',
  BLACK_HISTORY_MONTH_HABITAT = 'blackHistoryMonthHabitat',
  BLACK_HISTORY_MONTH_TU = 'blackHistoryMonthTu',
}
