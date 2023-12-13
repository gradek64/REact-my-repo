import {
  GET_COLLECTION_SNAPSHOT_SUCCESS,
  INIT_COLLECTION_SNAPSHOT_SUCCESS,
  MODAL_CLOSE,
  GET_ADDRESSES,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESSES_FAILURE,
  SET_PENDING_SNAPSHOT_ADDRESS_ID,
  UPDATE_SNAPSHOT_ADDRESS,
  UPDATE_SNAPSHOT_ADDRESS_SUCCESS,
  UPDATE_SNAPSHOT_ADDRESS_FAILURE,
  ADD_ADDRESS,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,
  ADD_MISSING_ADDRESS,
  DISABLE_CLOSE_MODAL,
  ADD_MISSING_ADDRESS_SUCCESS,
  ADD_MISSING_ADDRESS_FAILURE,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_CONTACT_ADDRESS_SUCCESS,
  UPDATE_CONTACT_ADDRESS_FAILURE,
  UPDATE_ADDRESS_FAILURE,
  RESET_ADDRESS_SUBMISSION,
  ADD_ACCOUNT_ADDRESS_SUCCESS,
  ADD_ACCOUNT_ADDRESS_FAILURE,
  UPDATE_CONTACT_AND_BILLING_ADDRESS_FAILURE,
  UPDATE_CONTACT_AND_BILLING_ADDRESS_SUCCESS,
  UPDATE_CONTACT_AND_BILLING_ADDRESS,
  CHECK_USER_ACCOUNT_EXISTS_SUCCESS,
  CHECK_USER_ACCOUNT_EXISTS_FAILURE,
  GET_MARKETING_PREFERENCES_SUCCESS,
  GET_MARKETING_PREFERENCES_FAILURE,
  START_GUEST_CHECKOUT_SUCCESS,
} from '../../actions'
import customerReducer, { initialState } from './customerReducer'

import { betterInitialGetSnapshotResponse } from '../../config/testUtils/__mocks__/responses'
import { UpdateSnapshotAddressType } from '../../types/actions'

const initAction = { type: '', payload: undefined }

describe('When the page is first loaded', () => {
  it('should set an initial state', () => {
    expect(customerReducer(undefined, initAction)).toEqual(initialState)
  })

  describe('and the customer & address data is loaded', () => {
    it('should save it', () => {
      const newState = customerReducer(
        initialState,
        GET_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: betterInitialGetSnapshotResponse.snapshot }),
      )

      expect(newState).toEqual({
        ...initialState,
        id: '2044798',
        type: 'REGISTERED',
        email: 'anakin.skywalker@darkside.com',
        billingAddress: betterInitialGetSnapshotResponse.snapshot.billingAddress,
        contactAddress: {
          ...betterInitialGetSnapshotResponse.snapshot.contactAddress,
          contactAddress: true,
        },
      })
    })
  })
})

describe('When the page is re-loaded', () => {
  describe('and the basket data is loaded', () => {
    it('should save it', () => {
      const newState = customerReducer(
        initialState,
        INIT_COLLECTION_SNAPSHOT_SUCCESS({ snapshot: betterInitialGetSnapshotResponse.snapshot }),
      )
      expect(newState).toEqual({
        ...initialState,
        id: '2044798',
        type: 'REGISTERED',
        email: 'anakin.skywalker@darkside.com',
        billingAddress: betterInitialGetSnapshotResponse.snapshot.billingAddress,
      })
    })
  })
})

describe('When starting a guest checkout session', () => {
  it('should set the customers details for an existing session', () => {
    const newState = customerReducer(
      initialState,
      START_GUEST_CHECKOUT_SUCCESS({ snapshot: betterInitialGetSnapshotResponse.snapshot }),
    )

    const { customer, contactAddress } = betterInitialGetSnapshotResponse.snapshot

    expect(newState).toEqual({
      ...initialState,
      id: customer.id,
      type: customer.type,
      email: contactAddress.person.email,
      contactAddress: { ...contactAddress, contactAddress: true },
    })
  })
})

describe('When getting addresses', () => {
  it('should flag as getting addresses', () => {
    const newState = customerReducer(initialState, GET_ADDRESSES())
    expect(newState).toEqual({ ...initialState, gettingAddresses: true })
  })

  describe('successfully', () => {
    it('should save the addresses', () => {
      const newState = customerReducer(
        initialState,
        GET_ADDRESSES_SUCCESS({
          addresses: [
            { id: 'address1', lines: {} },
            { id: 'address2', lines: {} },
            { id: 'address3', lines: { country: 'United Kingdom' } },
          ],
        }),
      )
      expect(newState).toEqual({
        ...initialState,
        gettingAddresses: false,
        addresses: [
          { id: 'address1', lines: {} },
          { id: 'address2', lines: {} },
          { id: 'address3', lines: { country: 'United Kingdom' } },
        ],
      })
    })
  })

  describe('unsuccessfully', () => {
    it('should set an error', () => {
      const newState = customerReducer(initialState, GET_ADDRESSES_FAILURE())
      expect(newState).toEqual({
        ...initialState,
        gettingAddresses: false,
        errors: { ...initialState.errors, getAddresses: true },
      })
    })
  })
})

describe('When toggling the selected address radio buttons', () => {
  it('should save the selected address id as pending', () => {
    const newState = customerReducer(initialState, SET_PENDING_SNAPSHOT_ADDRESS_ID('MyAddressId'))
    expect(newState).toEqual({ ...initialState, pendingSnapshotAddressId: 'MyAddressId' })
  })

  describe('and then closing the modal', () => {
    it('should clear the pending selected address id', () => {
      const newState = customerReducer({ ...initialState, pendingSnapshotAddressId: 'MyAddressId' }, MODAL_CLOSE())
      expect(newState.pendingSnapshotAddressId).toBe(null)
    })
  })
})

describe('When updating the selected address', () => {
  it('should flag as updating selected address within the snapshot', () => {
    const newState = customerReducer(initialState, UPDATE_SNAPSHOT_ADDRESS())
    expect(newState).toEqual({
      ...initialState,
      updatingSnapshotAddress: { ...initialState.updatingSnapshotAddress, loading: true },
    })
  })

  describe('successfully for billing address', () => {
    const newState = customerReducer(
      { ...initialState, pendingSnapshotAddressId: 'hey' },
      UPDATE_SNAPSHOT_ADDRESS_SUCCESS({ address: 'newSelectedAddress', type: UpdateSnapshotAddressType.BILLING }),
    )
    it('should save the new selected address', () => {
      expect(newState).toEqual({
        ...initialState,
        pendingSnapshotAddressId: null,
        isBillingAddressSaved: true,
        isDeliveryAddressSaved: false,
        showConfirmAddressAlert: false,
        updatingSnapshotAddress: initialState.updatingSnapshotAddress,
        billingAddress: 'newSelectedAddress',
      })
    })

    it('should clear the pending selected address id', () => {
      expect(newState.pendingSnapshotAddressId).toBe(null)
    })
  })

  describe('DISABLE_CLOSE_MODAL action', () => {
    const newState = customerReducer({ ...initialState, showConfirmAddressAlert: true }, DISABLE_CLOSE_MODAL())
    it('should set flag showConfirmAddressAlert', () => {
      expect(newState).toEqual({
        ...initialState,
        showConfirmAddressAlert: true,
      })
    })
  })

  describe('successfully for delivery address', () => {
    const newState = customerReducer(
      { ...initialState, pendingSnapshotAddressId: 'hey' },
      UPDATE_SNAPSHOT_ADDRESS_SUCCESS({ address: 'newSelectedAddress', type: UpdateSnapshotAddressType.DELIVERY }),
    )
    it('should save the new selected address', () => {
      expect(newState).toEqual({
        ...initialState,
        pendingSnapshotAddressId: null,
        isBillingAddressSaved: false,
        isDeliveryAddressSaved: true,
        updatingSnapshotAddress: initialState.updatingSnapshotAddress,
        deliveryAddress: 'newSelectedAddress',
      })
    })

    it('should clear the pending selected address id', () => {
      expect(newState.pendingSnapshotAddressId).toBe(null)
    })
  })

  describe('unsuccessfully', () => {
    it('should set an error', () => {
      const newState = customerReducer(initialState, UPDATE_SNAPSHOT_ADDRESS_FAILURE())
      expect(newState).toEqual({
        ...initialState,
        updatingSnapshotAddress: {
          loading: false,
          numberOfAttempts: 1,
          error: true,
        },
      })
    })
  })
})

describe('When adding a new address', () => {
  it('should flag as adding a new address within the snapshot', () => {
    const newState = customerReducer(initialState, ADD_ADDRESS())
    expect(newState).toEqual({
      ...initialState,
      addingAddress: {
        ...initialState.addingAddress,
        loading: true,
      },
    })
  })

  describe('successfully', () => {
    it('should remove the adding new address flag & update address list & set new billing address', () => {
      const newState = customerReducer(
        {
          ...initialState,
          addingAddress: {
            ...initialState.addingAddress,
            numberOfAttempts: 3,
          },
          addresses: ['address1'],
        },
        ADD_ADDRESS_SUCCESS({ address: 'address2' }),
      )
      expect(newState).toEqual({
        ...initialState,
        addingAddress: initialState.addingAddress,
        addresses: ['address1', 'address2'],
      })
    })
  })

  describe('unsuccessfully', () => {
    it('should remove the adding new address flag', () => {
      const newState = customerReducer(
        { ...initialState, addingAddress: { ...initialState.addingAddress, loading: true } },
        ADD_ADDRESS_FAILURE(),
      )
      expect(newState).toEqual({
        ...initialState,
        addingAddress: {
          error: true,
          loading: false,
          numberOfAttempts: 1,
          addedAccountAddressId: null,
        },
      })
    })
  })
})

describe('When an address is only added to the account service', () => {
  it('should toggle the saved account address flag', () => {
    const newState = customerReducer({ ...initialState }, ADD_ACCOUNT_ADDRESS_SUCCESS({ address: { id: '123' } }))
    expect(newState).toEqual({
      ...initialState,
      addingAddress: {
        ...initialState.addingAddress,
        addedAccountAddressId: '123',
      },
      isAccountAddressSaved: true,
    })
  })
})

describe('When an address fails to be added to the account service', () => {
  it('should toggle the saved account address flag', () => {
    const newState = customerReducer({ ...initialState }, ADD_ACCOUNT_ADDRESS_FAILURE())
    expect(newState).toEqual({
      ...initialState,
      addingAddress: {
        ...initialState.addingAddress,
        error: true,
      },
    })
  })
})

describe('When updating an address', () => {
  it('should flag as being updated', () => {
    const newState = customerReducer(initialState, UPDATE_ADDRESS())
    expect(newState).toEqual({
      ...initialState,
      updatingAddress: {
        ...initialState.updatingAddress,
        loading: true,
      },
    })
  })

  describe('successfully', () => {
    let newState

    const mockExistingAddresses = [
      { id: 'first', addres1: 'argos' },
      { id: 'second', address1: 'painsburys' },
      { id: 'third', address1: 'tuclothing' },
    ]

    const updatedContactAddress = { id: 'second-new', address1: 'sainsburys' }

    beforeAll(() => {
      newState = customerReducer(
        {
          ...initialState,
          addresses: mockExistingAddresses,
          updatingAddress: { ...initialState.updateAddress, loading: true },
        },
        UPDATE_ADDRESS_SUCCESS({ previousAddressId: mockExistingAddresses[1].id, newAddress: updatedContactAddress }),
      )
    })

    it('should remove the updating flag', () => {
      expect(newState.updatingAddress.loading).toBeFalsy()
    })

    it('should replace the previous address with the newly updated address', () => {
      expect(newState.addresses).toEqual([
        { id: 'first', addres1: 'argos' },
        { id: 'second-new', address1: 'sainsburys' },
        { id: 'third', address1: 'tuclothing' },
      ])
    })
  })

  describe('unsuccessfully', () => {
    it('should remove the updating flag', () => {
      const newState = customerReducer(
        { ...initialState, updatingAddress: { ...initialState.updatingAddress, loading: true } },
        UPDATE_ADDRESS_FAILURE(),
      )
      expect(newState).toEqual({
        ...initialState,
        updatingAddress: {
          loading: false,
          numberOfAttempts: 1,
          error: true,
        },
      })
    })
  })
})

describe('When updating a contact address', () => {
  const mockExistingAddresses = [
    { id: 'first', address1: 'argos', contactAddress: false, type: 'ADDRESS_TYPE_BOTH' },
    { id: 'second', address1: 'sainsbury', contactAddress: false, type: 'ADDRESS_TYPE_BOTH' },
    { id: 'third', address1: 'tuclothing', contactAddress: false, type: 'ADDRESS_TYPE_BOTH' },
    { id: 'fourth', address1: 'tuclothing', contactAddress: true, type: 'ADDRESS_TYPE_RESIDENTIAL' },
  ]

  const updatedContactAddress = { ...mockExistingAddresses[1], contactAddress: true, type: 'ADDRESS_TYPE_RESIDENTIAL' }
  const stateWithAddresses = {
    ...initialState,
    contactAddress: { ...mockExistingAddresses[3], type: 'ADDRESS_TYPE_RESIDENTIAL' },
    addresses: mockExistingAddresses,
  }
  // address updated successfully
  test('successfully', () => {
    const secondState = customerReducer(
      stateWithAddresses,
      UPDATE_CONTACT_ADDRESS_SUCCESS({ address: updatedContactAddress }),
    )

    expect(secondState).toEqual({
      ...initialState,
      addresses: [
        mockExistingAddresses[0],
        updatedContactAddress,
        mockExistingAddresses[2],
        {
          ...mockExistingAddresses[3],
          contactAddress: false,
          type: 'ADDRESS_TYPE_BOTH',
        },
      ],
      contactAddress: updatedContactAddress,
      isContactAddressSaved: true,
    })
  })
  test('unsuccessfully', () => {
    const secondState = customerReducer(
      stateWithAddresses,
      UPDATE_CONTACT_ADDRESS_FAILURE({ address: updatedContactAddress }),
    )

    // should leave previous address as it was
    expect(secondState).toEqual({
      ...initialState,
      addresses: mockExistingAddresses,
      contactAddress: mockExistingAddresses[3],
      isContactAddressSaved: false,
    })
  })
})

describe('When resetting address form submission states', () => {
  it('should reset to original state', () => {
    const newState = customerReducer(
      {
        ...initialState,
        updatingAddress: { ...initialState.updatingAddress, error: true },
        addingAddress: { ...initialState.addingAddress, error: true },
        updatingSnapshotAddress: { ...initialState.updatingSnapshotAddress, error: true },
      },
      RESET_ADDRESS_SUBMISSION(),
    )
    expect(newState).toEqual({ ...initialState })
  })
})

describe('When adding a missing address because snapshot initialise failed.', () => {
  it('should flag as adding a new address within the snapshot', () => {
    const newState = customerReducer(initialState, ADD_MISSING_ADDRESS())
    expect(newState).toEqual({
      ...initialState,
      addingMissingAddress: {
        ...initialState.addingMissingAddress,
        loading: true,
      },
    })
  })

  describe('successfully', () => {
    it('should remove the adding new address flag', () => {
      const newState = customerReducer(
        {
          ...initialState,
          addingMissingAddress: {
            ...initialState.addingMissingAddress,
            loading: true,
            numberOfAttempts: 3,
          },
        },
        ADD_MISSING_ADDRESS_SUCCESS({ id: 'newAddressId' }),
      )
      expect(newState).toEqual({
        ...initialState,
        addingMissingAddress: initialState.addingMissingAddress,
      })
    })
  })

  describe('unsuccessfully', () => {
    it('should remove the adding new address flag', () => {
      const newState = customerReducer(
        {
          ...initialState,
          addingMissingAddress: {
            ...initialState.addingMissingAddress,
            error: true,
          },
        },
        ADD_MISSING_ADDRESS_FAILURE(),
      )
      expect(newState).toEqual({
        ...initialState,
        addingMissingAddress: {
          ...initialState.addingMissingAddress,
          loading: false,
          numberOfAttempts: 1,
          error: true,
        },
      })
    })
  })
})

describe('When updating guest billing and contact addresses.', () => {
  it('should flag as updating the addresses within the snapshot', () => {
    const newState = customerReducer(initialState, UPDATE_CONTACT_AND_BILLING_ADDRESS())
    expect(newState).toEqual({
      ...initialState,
      updatingContactAndBillingAddress: {
        ...initialState.updatingContactAndBillingAddress,
        loading: true,
      },
    })
  })

  describe('successfully', () => {
    it('should remove the updating address flag', () => {
      const newState = customerReducer(
        {
          ...initialState,
          updatingContactAndBillingAddress: {
            ...initialState.updatingContactAndBillingAddress,
            loading: true,
            numberOfAttempts: 3,
          },
        },
        UPDATE_CONTACT_AND_BILLING_ADDRESS_SUCCESS(),
      )
      expect(newState).toEqual({
        ...initialState,
        updatingContactAndBillingAddress: initialState.updatingContactAndBillingAddress,
      })
    })
  })

  describe('unsuccessfully', () => {
    it('should remove the updating address flag', () => {
      const newState = customerReducer(
        {
          ...initialState,
          updatingContactAndBillingAddress: {
            ...initialState.updatingContactAndBillingAddress,
            error: true,
          },
        },
        UPDATE_CONTACT_AND_BILLING_ADDRESS_FAILURE(),
      )
      expect(newState).toEqual({
        ...initialState,
        updatingContactAndBillingAddress: {
          ...initialState.updatingContactAndBillingAddress,
          loading: false,
          numberOfAttempts: 1,
          error: true,
        },
      })
    })
  })
})

describe('When checking if the user account exists', () => {
  describe('successfully', () => {
    it('should remove the updating address flag', () => {
      const newState = customerReducer(
        {
          ...initialState,
          userAccountCheck: {
            ...initialState.userAccountCheck,
            loading: true,
            numberOfAttempts: 2,
          },
        },
        CHECK_USER_ACCOUNT_EXISTS_SUCCESS({ userAccountExists: true }),
      )
      expect(newState).toEqual({
        ...initialState,
        userAccountCheck: {
          ...initialState.userAccountCheck,
          exists: true,
        },
      })
    })
  })

  describe('unsuccessfully', () => {
    it('should remove the updating address flag', () => {
      const newState = customerReducer(
        {
          ...initialState,
          userAccountCheck: {
            ...initialState.userAccountCheck,
            error: false,
            loading: true,
          },
        },
        CHECK_USER_ACCOUNT_EXISTS_FAILURE(),
      )
      expect(newState).toEqual({
        ...initialState,
        userAccountCheck: {
          ...initialState.userAccountCheck,
          loading: false,
          numberOfAttempts: 1,
          error: true,
        },
      })
    })
  })
})

describe('When checking to see a users marketing preferences', () => {
  describe('successfully', () => {
    it('should save the consents into state', () => {
      const newState = customerReducer(
        {
          ...initialState,
          marketingPreferences: {
            ...initialState.marketingPreferences,
            loading: true,
          },
        },
        GET_MARKETING_PREFERENCES_SUCCESS({
          consents: [
            {
              mission: 'ARGOS',
              missionConsents: [
                {
                  mission: 'ARGOS',
                  consent: 'LI',
                },
              ],
            },
          ],
        }),
      )
      expect(newState).toEqual({
        ...initialState,
        marketingPreferences: {
          ...initialState.marketingPreferences,
          consents: [
            {
              mission: 'ARGOS',
              consent: 'LI',
            },
          ],
        },
      })
    })
  })

  describe('unsuccessfully', () => {
    it('should remove loading and set an error', () => {
      const state = customerReducer(initialState, GET_MARKETING_PREFERENCES_FAILURE({ error: { status: 500 } }))

      expect(state).toEqual({
        ...initialState,
        marketingPreferences: {
          ...initialState.marketingPreferences,
          loading: false,
          error: true,
        },
      })
    })
    it('should remove loading, set notFoundEmail flag and not set an error', () => {
      const state = customerReducer(initialState, GET_MARKETING_PREFERENCES_FAILURE({ error: { statusCode: 404 } }))
      expect(state).toEqual({
        ...initialState,
        marketingPreferences: {
          ...initialState.marketingPreferences,
          loading: false,
          notFoundEmail: true,
          error: false,
        },
      })
    })
  })
})
