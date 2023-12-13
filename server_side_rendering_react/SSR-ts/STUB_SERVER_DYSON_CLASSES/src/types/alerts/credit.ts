export enum ArgosCardApplicationAlerts {
  NOTHING_TO_PAY = 'NOTHING_TO_PAY',
  OVER_MAX_SPEND_LIMIT = 'OVER_MAX_SPEND_LIMIT',
  FAILED_APPLICATION = 'FAILED_APPLICATION',
}

export enum MonthlyPaymentPlanAlerts {
  NOTHING_TO_PAY = 'NOTHING_TO_PAY',
  OVER_MAX_SPEND_LIMIT = 'OVER_MAX_SPEND_LIMIT',
  UNDER_MIN_SPEND_LIMIT = 'UNDER_MIN_SPEND_LIMIT',
  FAILED_APPLICATION = 'FAILED_APPLICATION',
}

export enum CreditApplicationUpdateContactAddressAlerts {
  FOREIGN_CONTACT_ADDRESS = 'FOREIGN_CONTACT_ADDRESS',
  SINGLE_CHARACTER_FIRST_NAME = 'SINGLE_CHARACTER_FIRST_NAME',
}

export enum CreditApplicationUpdateDeliveryAddressAlerts {
  SINGLE_CHARACTER_FIRST_NAME = 'SINGLE_CHARACTER_FIRST_NAME',
}

export type CreditExclusionAlertKind = 'monthlyPaymentPlanAccordion' | 'monthlyPaymentPlanDrawer'

export interface CreditExclusionAlert {
  show: boolean
  component: (props: { kind: CreditExclusionAlertKind }) => JSX.Element
  type:
    | 'CONTAINS_PRODUCT_CARE_ITEMS'
    | 'CONTAINS_TU_CLOTHING_ITEMS'
    | 'CONTAINS_DIGITAL_DOWNLOAD_ITEMS'
    | 'TEMPORARILY_DISABLED'
}
