/* eslint-disable no-param-reassign */
export const queryParamsReducer = (acc, action) => {
  if (action && acc === '') {
    acc += `?${action}`
  } else if (action) {
    acc += `&${action}`
  }
  return acc
}
