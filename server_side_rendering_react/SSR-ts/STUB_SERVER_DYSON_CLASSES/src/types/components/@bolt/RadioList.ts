export interface RadioListOptions {
  label?: string
  description?: JSX.Element | string
  id: string
  rightHandElement?: JSX.Element
  rightHandElementAlign?: 'top' | 'bottom' | 'middle'
  dataTest?: string
}

interface Directions {
  column: string
  row: string
}

export interface RadioListProps {
  options: RadioListOptions[]
  onClick?: (selectedId: string) => void
  defaultOption?: string
  direction?: Directions
  border?: boolean
  hasBackground?: boolean
  hasBottomMargin?: boolean
  padding?: string
  optionBottomMargin?: number
  optionRightMargin?: number
  dataTest?: string
}
