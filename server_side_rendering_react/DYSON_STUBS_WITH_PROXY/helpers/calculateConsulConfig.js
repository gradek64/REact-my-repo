/**
 * Checks if the given value is NOT in the list of values that the condition
 * accepts. If the condition has no possible values, then all values are a
 * match.
 */
const conditionDoesNotMatchValue = (possibleValues, value) => Array.isArray(possibleValues)
 && !possibleValues.map(possibleValue => String(possibleValue).toLowerCase()).includes(String(value).toLowerCase())


/**
 * Checks if any of the given values are NOT in the list of values that the
 * condition accepts. Only one of the values needs to match. If the condition
 * has no possible values, then all values are a match.
 */
const conditionDoesNotMatchAnyValue = (possibleValues, values) => Array.isArray(possibleValues)
 && !possibleValues.some(item => values.map(value => String(value).toLowerCase()).includes(String(item).toLowerCase()),)

const getConsulValue = (consulValue, conditionKeyValueMap) => {
  if (typeof consulValue === 'boolean' || typeof consulValue === 'string' || typeof consulValue === 'number') {
    return consulValue
  }

  if (typeof consulValue !== 'object' || consulValue === null) {
    return false
  }

  const conditionNotSatisfied = Object.entries(conditionKeyValueMap).some(([conditionKey, conditionValue]) => (Array.isArray(conditionValue)
    ? conditionDoesNotMatchAnyValue(consulValue[conditionKey], conditionValue)
    : conditionDoesNotMatchValue(consulValue[conditionKey], conditionValue)),)

  if (conditionNotSatisfied) {
    return false
  }

  if (typeof consulValue.value !== 'undefined') {
    return consulValue.value
  }

  return true
}

export const calculateRequestConfig = (config, details) => {
  const flatConfig = {}

  Object.entries(config).forEach(([consulKey, consulValue]) => {
    if (Array.isArray(consulValue)) {
      for (let i = 0; i < consulValue.length; i += 1) {
        const consulOption = consulValue[i]
        const actualConsulValue = getConsulValue(consulOption, details)

        if (actualConsulValue !== false) {
          flatConfig[consulKey] = actualConsulValue
          return
        }
      }
      flatConfig[consulKey] = false
      return
    }

    flatConfig[consulKey] = getConsulValue(consulValue, details)
  })

  return flatConfig
}