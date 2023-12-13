import { ProductIncludeLegalText } from 'types/api'

export const response: ProductIncludeLegalText[] = [
  {
    id: '1234',
    type: 'legalTexts',
    attributes: {
      safetyText: 'Age restricted item',
    },
  },
  {
    id: '5678',
    type: 'legalTexts',
    attributes: {
      safetyText: 'Also and AgE restricted item',
    },
  },
  {
    id: '9012',
    type: 'legalTexts',
    attributes: {
      safetyText: 'You have to be aged 18 or over to buy this item',
    },
  },
  {
    id: '3456',
    type: 'legalTexts',
    attributes: {
      safetyText: 'Belive it or not, this item is only available to ages 18 or over',
    },
  },
  {
    id: '7890',
    type: 'legalTexts',
    attributes: {
      safetyText: 'BUT, this item is not 4ge restricted',
    },
  },
  {
    id: '1111',
    type: 'legalTexts',
    attributes: {
      safetyText: 'Should only match full words, i.e. not: page, pages, paged, ageless',
    },
  },
]
