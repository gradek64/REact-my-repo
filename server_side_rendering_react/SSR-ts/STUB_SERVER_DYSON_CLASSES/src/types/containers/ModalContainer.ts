import { RouteComponentProps } from 'react-router-dom'
import { RouteTreeProps } from '../routes'
import { AddressState } from '../reducers'

interface ParamsProps {
  id: string
  type: string
}

export interface ModalContainerLocationState {
  updatingFromCreditApplication: boolean
}

export interface ModalContainerProps extends RouteComponentProps<ParamsProps> {
  routes: RouteTreeProps
  addresses: AddressState[]
  toggleModalDisableEscClose: boolean
}
