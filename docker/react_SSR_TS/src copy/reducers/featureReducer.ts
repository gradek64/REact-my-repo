import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Features, FeatureValue } from '../types/features'

type Rule = Record<string, string | number>

export interface FeatureInitialState {
  features: Features
  pendingFeatures: Record<string, Rule[][]>
  hash: string
}

export const initialState: FeatureInitialState = {
  features: {},
  pendingFeatures: {},
  hash: '',
}

export const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    setPendingFeature: (
      state,
      {
        payload: { featureName, featureValue },
      }: PayloadAction<{ featureName: string; featureValue: FeatureValue }>
    ) => {
      // if (featureValue === state.features[featureName]) {
      //   delete state.pendingFeatures[featureName]
      // } else {
      //   state.pendingFeatures[featureName] = featureValue
      // }
    },
    clearPendingFeature: (
      state,
      { payload: { featureName } }: PayloadAction<{ featureName: string }>
    ) => {
      // delete state.pendingFeatures[featureName]
    },
    setFeatures: (state, action: PayloadAction<Features>) => {
      state.features = action.payload
    },
    setFeaturesAndClearPending: (state, action: PayloadAction<Features>) => {
      state.features = action.payload
      // state.pendingFeatures = initialState.pendingFeatures
    },
    setHash: (state, action: PayloadAction<string>) => {
      state.hash = action.payload
    },
    // TODO: improve types
    addAndRule: (
      state,
      action: PayloadAction<{
        featureName: string
        ruleIndex: number
        rule: Rule
      }>
    ) => {
      const newState = state.pendingFeatures[action.payload.featureName].slice()
      state.pendingFeatures[action.payload.featureName][
        action.payload.ruleIndex
      ] = [...newState[action.payload.ruleIndex], action.payload.rule]
    },
    addOrRule: (
      state,
      action: PayloadAction<{ featureName: string; rule: Rule }>
    ) => {
      state.pendingFeatures[action.payload.featureName] = [
        ...state.pendingFeatures[action.payload.featureName],
        [action.payload.rule],
      ]
    },
    updateRule: (
      state,
      action: PayloadAction<{
        featureName: string
        rule: Rule
        orRuleIndex: number
        andRuleIndex: number
      }>
    ) => {
      state.pendingFeatures[action.payload.featureName][
        action.payload.orRuleIndex
      ][action.payload.andRuleIndex] = action.payload.rule
    },
  },
})

export const {
  setPendingFeature,
  clearPendingFeature,
  setFeatures,
  setFeaturesAndClearPending,
  setHash,
  addAndRule,
  addOrRule,
  updateRule,
} = featureSlice.actions

export default featureSlice.reducer
