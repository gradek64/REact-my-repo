import { RouterProps } from 'react-router'

export interface CreditPlanContentProps extends RouterProps {
  duration: string | null
  showTitle: boolean
  title: string
  tabIndex: number
}
