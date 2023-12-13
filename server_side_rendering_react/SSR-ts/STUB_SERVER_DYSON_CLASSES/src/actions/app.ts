import { createAction } from '@reduxjs/toolkit'
import { Brand, ConfigState, FeaturesState, OrderSummaryVariant, Theme } from '../types/reducers'
import { ConsulConfig } from 'types/reducers/app'

export const MODAL_OPEN = createAction('MODAL_OPEN')
export const MODAL_CLOSE = createAction('MODAL_CLOSE')
export const SET_ORDER_SUMMARY_VARIANT = createAction<OrderSummaryVariant>('SET_ORDER_SUMMARY_VARIANT')
export const SET_BRAND = createAction<Brand>('SET_BRAND')
export const SET_THEME = createAction<Theme>('SET_THEME')
export const TOGGLE_PREVIEW_PLACE_ORDER = createAction('TOGGLE_PREVIEW_PLACE_ORDER')
export const SET_FEATURE_TOGGLE = createAction<Partial<FeaturesState>>('SET_FEATURE_TOGGLE')
export const SET_FEATURES = createAction<FeaturesState>('SET_FEATURES')
export const SET_CONFIG = createAction<ConfigState>('SET_CONFIG')
export const SET_CHANNEL_TOGGLE = createAction('SET_CHANNEL_TOGGLE')
export const SET_CONFIG_COOKIE = createAction<ConsulConfig>('SET_CONFIG_COOKIE')
export const TRACK_AD_CONTINUE_ERROR = createAction<string>('TRACK_AD_CONTINUE_ERROR')
