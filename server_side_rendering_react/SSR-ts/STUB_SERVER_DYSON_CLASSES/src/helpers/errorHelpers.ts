import { APIResponse } from 'types/api'
import { ErrorDetail, ErrorResponse } from 'types/api/errorResponse'

// Type guard
export function isAPIErrorResponseType<T, D>(
  response: APIResponse<ErrorResponse<T>, D> | Error,
): response is APIResponse<ErrorResponse<T>, D> {
  if (response instanceof Error) return false

  return response?.body?.error?.details !== undefined && Array.isArray(response.body.error.details)
}

export function hasErrorDetails<T, D>(response: APIResponse<ErrorResponse<T>, D> | Error): boolean {
  if (!isAPIErrorResponseType(response)) {
    return false
  }
  return response.body.error.details.length > 0
}

export function getAdviceFromErrorDetails<T extends string, D = undefined>(
  response: APIResponse<ErrorResponse<T>, D> | Error,
  advice: string | string[],
): ErrorDetail<T> | undefined {
  if (!isAPIErrorResponseType(response)) {
    return undefined
  }
  if (!hasErrorDetails(response)) return undefined
  if (Array.isArray(advice)) {
    return response.body.error.details.find((detail) => advice.find((element) => element === detail.advice))
  }
  return response.body.error.details.find((detail) => detail.advice === advice)
}
