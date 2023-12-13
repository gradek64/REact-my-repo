import {
  isEmail,
  isEmailBasic,
  isValidArgosEmailCharacters,
  isValidArgosEmailTopLevelDomain,
  errorMessages,
} from '@sainsburys-tech/bolt-validators'
import { commonEmailDomains } from '@sainsburys-tech/boltui-utils'

import { mxValidatePath } from '../../../paths'

const emailValidator = (
  value: string,
  _,
  { validatedMXDomains }: { validatedMXDomains: Record<string, boolean> },
): string | null => {
  if (!value) {
    return errorMessages.EMAIL_REQUIRED
  }

  if (!isEmailBasic(value)) {
    return errorMessages.EMAIL_INVALID
  }

  if (!(isValidArgosEmailCharacters(value) && isEmail(value))) {
    return errorMessages.EMAIL_INVALID
  }

  if (!isValidArgosEmailTopLevelDomain(value)) {
    return errorMessages.EMAIL_INVALID_ARGOS_TOP_LEVEL_DOMAIN
  }

  if (validatedMXDomains[value] === false) {
    return errorMessages.EMAIL_INVALID_MX_DOMAIN
  }

  return null
}

export const isMXDomainValid = async (email: string) => {
  if (!email || typeof email !== 'string' || !isEmail(email)) {
    return false
  }

  const emailDomain = email.split('@')[1]
  if (commonEmailDomains.includes(emailDomain)) return true

  const response = await fetch(mxValidatePath, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    return true
  }

  return false
}

export default emailValidator
