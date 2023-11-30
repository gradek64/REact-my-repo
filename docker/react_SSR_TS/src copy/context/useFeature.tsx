import React, { createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setPendingFeature,
  clearPendingFeature,
  addAndRule as addAndRuleRedux,
  addOrRule as addOrRuleRedux,
  updateRule as updateRuleRedux,
} from '../reducers/featureReducer'
import { RootState } from '../store/store'
import { Features, FeatureValue, Filters } from '../types/features'

import configs from '../../configs'

type ValueTypes = 'select' | 'boolean'
type SelectValues = Record<string, string>

interface Config {
  features: Record<
    string,
    {
      description?: string
      valueType?: ValueTypes
      selectValues?: SelectValues
    }
  >
}

// TODO: do this based on value defined in env var
// TODO: try to remove the need for casting
const config = configs.uiPayment as Config

interface FeatureContextValue {
  featureName: string
  featureValue: FeatureValue
  isEnabled: boolean
  pendingValue?: FeatureValue
  isPending: boolean
  setPendingValue: (FeatureValue: FeatureValue) => void
  clearPendingValue: () => void
  addFilter: (filter: Filters) => void
  addAndRule: ({
    ruleIndex,
    rule,
  }: {
    ruleIndex: number
    rule: Record<string, string | number>
  }) => void
  addOrRule: ({ rule }: { rule: Record<string, string | number> }) => void
  rules: Record<string, string | number>[][]
  updateRule: ({
    orRuleIndex,
    andRuleIndex,
  }: {
    orRuleIndex: number
    andRuleIndex: number
    rule: Record<string, string | number>
  }) => void
  hasFilter: boolean
  description?: string
  valueType: ValueTypes
  selectValues: SelectValues
}

const FeatureContext = createContext<FeatureContextValue | undefined>(undefined)

const FeatureProvider = ({
  children,
  featureName,
  featureValue,
}: {
  children: React.ReactNode
  featureName: string
  featureValue: FeatureValue
}) => {
  const dispatch = useDispatch()

  // const pendingValue = useSelector(
  //   (state: RootState) => state.pendingFeatures[featureName]
  // )

  // TODO: fix naming
  const setPendingValue = (value: FeatureValue) => {
    dispatch(setPendingFeature({ featureName, featureValue: value }))
  }

  const clearPendingValue = () => dispatch(clearPendingFeature({ featureName }))

  const addAndRule: FeatureContextValue['addAndRule'] = ({ rule, ruleIndex }) =>
    dispatch(addAndRuleRedux({ featureName, ruleIndex, rule }))
  const addOrRule: FeatureContextValue['addOrRule'] = ({ rule }) =>
    dispatch(addOrRuleRedux({ featureName, rule }))
  const updateRule: FeatureContextValue['updateRule'] = ({
    orRuleIndex,
    andRuleIndex,
    rule,
  }) =>
    dispatch(updateRuleRedux({ featureName, orRuleIndex, andRuleIndex, rule }))
  const rules = useSelector(
    (state: RootState) => state.pendingFeatures[featureName]
  )

  // const isPending = typeof pendingValue !== 'undefined'
  const isPending = false

  const addFilter = (filter: Filters) => {
    // TODO: check if pendingValue is already a filter??? AND append to other filters

    setPendingValue(filter)
  }

  const hasFilter = typeof featureValue === 'object'

  const featureConfig = config.features[featureName] ?? {}

  const value: FeatureContextValue = {
    featureName,
    featureValue,
    isEnabled: featureValue !== false,
    pendingValue: {},
    isPending,
    setPendingValue,
    clearPendingValue,
    addFilter,
    addAndRule,
    addOrRule,
    updateRule,
    rules,
    hasFilter,
    description: featureConfig.description,
    valueType: featureConfig.valueType ?? 'boolean',
    selectValues: featureConfig.selectValues ?? {},
  }

  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  )
}

function useFeature() {
  const context = useContext(FeatureContext)
  if (context === undefined) {
    throw new Error('useFeature must be used within a FeatureProvider')
  }
  return context
}

export { FeatureProvider, useFeature }
