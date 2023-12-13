import { RouterProps } from 'react-router'
import { ArgosCardCreditPlan } from '../reducers'

export interface CreditPlanOptionsProps extends RouterProps {
  defaultOption: ArgosCardCreditPlan
  options: ArgosCardCreditPlan[]
  onChange: (selectedPlan: string) => void
  onSubmit: () => void
  selectedOption: ArgosCardCreditPlan
  tabIndex: number
  totalPrice: number
  submittingPlan: boolean
  numOfAddArgosCardAttempts: number
  handleAbort: () => void
}
