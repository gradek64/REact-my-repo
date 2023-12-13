import { showAgeRestrictionMessage } from './showAgeRestrictionMessage'
import { smallItem, unavailableSmallItem } from 'mocks/state'

const [{ productId }] = smallItem.products

describe('showAgeRestrictionMessage', () => {
  it('returns false if there are no age restricted product ids', () => {
    expect(showAgeRestrictionMessage({ ageRestrictedIds: [], unavailableIds: [], consignments: [] })).toEqual(false)
  })

  it('returns false if there is an age restricted product id and no consignments', () => {
    expect(showAgeRestrictionMessage({ ageRestrictedIds: [productId], unavailableIds: [], consignments: [] })).toEqual(
      false,
    )
  })

  it('returns false if there is an unavailable restricted product', () => {
    expect(
      showAgeRestrictionMessage({
        ageRestrictedIds: [productId],
        unavailableIds: [productId],
        consignments: [smallItem],
      }),
    ).toEqual(false)
  })

  it('returns false if there is an available restricted product with no slots', () => {
    expect(
      showAgeRestrictionMessage({
        ageRestrictedIds: [productId],
        unavailableIds: [],
        consignments: [unavailableSmallItem],
      }),
    ).toEqual(false)
  })

  it('returns true if there is an available restricted product with available slots', () => {
    expect(
      showAgeRestrictionMessage({ ageRestrictedIds: [productId], unavailableIds: [], consignments: [smallItem] }),
    ).toEqual(true)
  })
})
