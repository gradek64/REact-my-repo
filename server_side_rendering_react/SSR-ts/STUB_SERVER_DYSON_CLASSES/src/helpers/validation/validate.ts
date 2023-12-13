import { rules } from './rules'

/**
 * Helper method to validate Formik's `values` object
 * @param {object} Formik `values` object containing input name and input value
 * @param {string} formName optional, the name of the form the validation is being applied to
 * @returns {object} key/value pairing of input name and error message
 */

export const validate = (
  values: Record<string, string | boolean | undefined>,
  options?: Record<string, unknown>,
): Record<string, string | null> => {
  const errors: Record<string, string | null> = {}

  // Run validation on each rule if present in `rules` object
  Object.keys(values).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    errors[key] = rules[key] ? rules[key](values[key], values, options) : null
  })

  // Get the error, if any, for each value
  return Object.keys(errors).reduce((acc, field) => {
    if (errors[field]) acc[field] = errors[field]
    return acc
  }, {})
}

/**
 * Helper method to retrieve Formik errors based on our validation UX
 * @param {object.options.validateOnTouchd} set errors only when field is touched
 * @param {object.values} Formik values object
 * @param {object.touched} Formik touched object
 * @param {object.errors} Formik errors object
 * @returns {object} key/value pairing of input name and error message e.g. { firstName: 'Too short', lastName: 'required' }
 */
export const getErrors = ({
  options = { validateOnTouched: true },
  submitCount,
  values,
  touched,
  errors,
}): Record<string, string> => {
  return Object.keys(errors).reduce((acc, field) => {
    /* always validate after form is submitted */
    if (submitCount > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      acc[field] = errors[field]
    }

    if (submitCount === 0) {
      /* validate after field is touched & contains an error */
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (options.validateOnTouched && values[field] && touched[field]) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        acc[field] = errors[field]
      }

      /* validate before or after field is touched & contains an error */
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (!options.validateOnTouched && values[field]) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        acc[field] = errors[field]
      }
    }

    return acc
  }, {})
}
