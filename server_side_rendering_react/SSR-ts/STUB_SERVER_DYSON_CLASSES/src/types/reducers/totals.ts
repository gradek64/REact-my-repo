export interface TotalsState {
  outstanding: number | null
  withSavings: number | null
  withoutSavings: number | null
  saving: number | null
  subtotal?: number
  delivery?: number
}
