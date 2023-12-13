import { FormikProps } from 'formik'
import { RouteComponentProps, StaticContext } from 'react-router'
import { AddressState, SavedAddress } from '../reducers'
import { AddressListContainerFormValues } from '../forms/values'
import { UpdateSnapshotAddressType } from 'types/actions'

interface ParamsProps {
  id: string
}

export interface LocationStateProps {
  scrollPosition?: number
  disableNavigateAway?: boolean
  openCreditAccordion?: boolean
}

export interface AddressListContainerProps
  extends RouteComponentProps<ParamsProps, StaticContext, LocationStateProps>,
    FormikProps<AddressListContainerFormValues> {
  isSubmitting: boolean
  values: { currentAddress: string }
  addresses: SavedAddress[]
  handleSubmit: () => void
  currentAddress: AddressState
  setFieldValue: (fieldValue: string, selectedId: string) => void
  onResetAddressSubmission: () => void
  setPendingAddressId: (selectedId: string) => void
  onCloseModal: () => void
  pendingSnapshotAddressId: string
  updateAddress: (props: {
    address: AddressState | undefined
    type: UpdateSnapshotAddressType
    onSuccess: () => void
    onFailure: () => void
  }) => void
  numberOfAttempts: number
  modalRoute: 'delivery' | 'payment'
}
