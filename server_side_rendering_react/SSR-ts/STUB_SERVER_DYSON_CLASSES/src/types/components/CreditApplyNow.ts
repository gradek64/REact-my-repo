import { CreditPaymentMethod } from '../api'

export interface CreditApplyNowProps {
  icon: string
  title: string
  updateHeight: () => void
  accordionOpen: boolean
  creditType: CreditPaymentMethod
  ariaLabel: string
  dataTest?: string
}

export type Kind = 'argosCardAccordion' | 'monthlyPaymentPlanAccordion' | 'argosCardDrawer' | 'monthlyPaymentPlanDrawer'
