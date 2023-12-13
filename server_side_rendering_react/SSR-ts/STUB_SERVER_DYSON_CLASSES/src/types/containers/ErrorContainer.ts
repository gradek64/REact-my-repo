import React from 'react'
import { ErrorConfirmationPageTypeParam } from '../routes'
import { StockHoldStatus } from '../reducers/meta'

export enum ErrorPagesTypes {
  ORDER_CONFIRMATION = 'order-confirmation',
  GENERAL = 'general',
  OUT_OF_STOCK = 'out-of-stock',
}

export type OrderConfirmErrorPagesParam = {
  promoCode?: string
  type?: ErrorConfirmationPageTypeParam
}
export interface ErrorContainerProps {
  layout: ErrorPagesTypes
}

export type ErrorOrderLayoutProps = {
  children?: React.ReactNode
  pageName: string
  stockHoldStatus: StockHoldStatus
} & ErrorContainerProps

export type ErrorContainerRouteParams = { id: string }
