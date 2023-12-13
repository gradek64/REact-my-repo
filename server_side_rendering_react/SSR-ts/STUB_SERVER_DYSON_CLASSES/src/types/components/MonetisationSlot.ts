export type AdSize = [number, number] | 'fluid'

export interface MonetisationSlotProps {
  location: string
  sizes?: AdSize[]
  isCentered?: boolean
}

export interface StyledSlotProps {
  isCentered?: MonetisationSlotProps['isCentered']
}
