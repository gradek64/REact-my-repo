import { Brand } from '../types/reducers'

export const isArgos = (brand: string): boolean => brand === Brand.ARGOS
export const isHabitat = (brand: string): boolean => brand === Brand.HABITAT
export const isTu = (brand: string): boolean => brand === Brand.TU

export const getBrandDisplayName = (brand: Brand): string => {
  switch (brand) {
    case Brand.HABITAT:
      return 'Habitat'
    case Brand.TU:
      return 'Tu'
    case Brand.ARGOS:
    default:
      return 'Argos'
      break
  }
}
