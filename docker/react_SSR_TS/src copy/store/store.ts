import { configureStore } from '@reduxjs/toolkit'
import featureReducer, { initialState } from '../reducers/featureReducer'

export type RootState = typeof initialState

export const createStore = (preloadedState: RootState) => {
  return configureStore({
    reducer: featureReducer,
    devTools: true,
    preloadedState,
  })
}
