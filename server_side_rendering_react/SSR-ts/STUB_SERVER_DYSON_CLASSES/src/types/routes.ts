import { Response } from 'express'
import { Loadable } from 'react-loadable'
import { match } from 'react-router'

import { ModalContainerProps } from './containers'
import { DecoratedRequest } from './server'

export interface MatchParams {
  id: string
}

export interface PromoGiftCardMatchParams {
  id: string
  type: 'giftcard' | 'promo'
}

export interface ManageOrderMatchParams {
  orderId: string
  customerId: string
}

export interface OrderConfirmationMatchParams {
  orderId: string
}

export enum ErrorOrderRetrievalPageTypeParam {
  UNSUPPORTED_SHIPMENT_STATUS = 'unsupported_shipment_status',
}

export enum ErrorConfirmationPageTypeParam {
  /** place order */
  ORDER_PLACE = 'place_order',
  ORDER_PLACE_CREDIT = 'credit',
  ORDER_PLACE_MPP = 'monthly_plan',
  ORDER_PLACE_REFUND = 'refund',
}

export enum ErrorPageTypeParam {
  /** get order */
  ORDER_GET = 'get_order',
  ORDER_GET_BRAND_MISMATCH = 'confirmation_brand_mismatch',

  /** prepare for checkout */
  PREPARE_FOR_DELIVERY = 'prepare_for_delivery',

  /** snapshot */
  SNAPSHOT_BRAND_MISMATCH = 'payment_brand_mismatch',

  /** cut of stock */
  INTERNAL_STOCK_ERROR = 'internal_stock_error',

  /** credit application */
  CREDIT_MISSING_PARAMS = 'credit_missing_params',

  /** missing store data */
  STORE_INFO_ERROR = 'internal_store_error',

  /** guest initial calculate prices */
  CALCULATE_PRICES_ERROR = 'calculate_error',

  /** create fulfilment error */
  CREATE_FULFILMENT_ERROR = 'create_fulfilment_error',

  /** misc */
  INTERNAL_ERROR = 'internal_error',

  /** create booking error */
  CREATE_BOOKING_ERROR = 'create_booking_error',
}

export interface AnalyticsProps {
  pageName?: string
  loadEvent?: string
  pageType?: string
  onNavigateAway?: [
    {
      to: string
      eventName: string
      eventAction: string
    },
  ]
  onSubmit?: {
    eventName: string
    eventAction: string
  }
}
export interface DefaultRouteProps {
  path: string
  pageTitle: string
  exact?: boolean
  routes?: DefaultRouteProps[]
  children?: ModalContainerProps
  component?: () => JSX.Element | Loadable
  pageDescription?: string
  pageDataTest?: string
  analytics?: AnalyticsProps
}

export type RouteTreeProps = DefaultRouteProps[]

export enum PaymentPageCreditStatusParam {
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ArgosCardApplicationErrorCode {
  DECLINED = 'declined',
  REFERRED = 'referred',
  INCOMPLETE = 'incomplete',
  TIMED_OUT = 'timed_out',
  CREDIT_SERVICE_ERROR = 'credit_service_error',
  AMEND_DETAILS = 'amend_details',
  OVERLIMIT_DECLINE = 'overlimit_decline',
}

export enum MonthlyPaymentPlanApplicationErrorCode {
  SUCCESS = 'success',
  DECLINED = 'declined',
  INCOMPLETE = 'incomplete',
  TIMED_OUT = 'timed_out',
  CREDIT_SERVICE_ERROR = 'credit_service_error',
  AMEND_DETAILS = 'amend_details',
}

interface PaymentPageNoQueryParams {
  credit: undefined
  // eslint-disable-next-line camelcase
  monthly_plan: undefined
  code: undefined
}

interface PaymentPageArgosCardApplicationQueryParams {
  credit: PaymentPageCreditStatusParam
  // eslint-disable-next-line camelcase
  monthly_plan: undefined
  code: ArgosCardApplicationErrorCode
}

interface PaymentPageMonthlyPaymentPlanApplicationQueryParams {
  credit: undefined
  // eslint-disable-next-line camelcase
  monthly_plan: PaymentPageCreditStatusParam
  code: MonthlyPaymentPlanApplicationErrorCode
}

export type PaymentPageQueryParams =
  | PaymentPageNoQueryParams
  | PaymentPageArgosCardApplicationQueryParams
  | PaymentPageMonthlyPaymentPlanApplicationQueryParams

export interface OrderConfirmationPageQueryParams {
  cookie: string
}

export interface ManageOrderPageQueryParams {
  cookie: string
}

export type GetInitialActionsParams<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouteParams extends { [K in keyof RouteParams]?: string | undefined } = any,
  ReqQuery = unknown,
> = {
  req: DecoratedRequest<RouteParams, ReqQuery>
  res: Response
  match: match<RouteParams>
}
