import '../../../config/i18n/test'

import { validate, getErrors } from './validate'

describe('when validating form input values', () => {
  describe('and the form input does not have a validation rule', () => {
    it('should not attempt to validate against a rule with that name', () => {
      expect(validate({ foo: 'bar' })).toEqual({})
    })
  })

  describe('and the value provided is missing', () => {
    it('should provide the error', () => {
      expect(validate({ firstName: '' }, true)).toEqual({ firstName: 'Please enter your first name' })
    })
  })

  describe('and the value provided is invalid', () => {
    it('should provide the error', () => {
      expect(validate({ firstName: 'J2' })).toEqual({ firstName: 'You can only use letters & dashes here' })
    })
  })

  describe('and the value provided is valid', () => {
    it('should not provide any errors', () => {
      expect(validate({ firstName: 'John' })).toEqual({})
    })
  })

  describe('and there is a mix of valid and invalid values', () => {
    it('should only provide the invalid input errors', () => {
      expect(validate({ title: 'Mr', firstName: 'J2', lastName: 'Smith' })).toEqual({
        firstName: 'You can only use letters & dashes here',
      })
    })
  })

  describe('and a valid value is provided with a formName', () => {
    it('should not provide any errors', () => {
      expect(
        validate({ mobilePhone: '+447449867225', _phoneType: 'mobilePhone' }, { formName: 'Partial Billing Address' }),
      ).toEqual({})
    })
  })

  describe('and an invalid value is provided with a formName', () => {
    it('should provide the errors', () => {
      expect(
        validate({ mobilePhone: '+917555568378', _phoneType: 'mobilePhone' }, { formName: 'Partial Billing Address' }),
      ).toEqual({
        mobilePhone: 'Please enter a valid uk phone number',
      })
    })
  })
})

describe('when getting the errors to be displayed', () => {
  describe('and the form has been or is being submitted', () => {
    it('should include all fields', () => {
      expect(
        getErrors({
          submitCount: 1,
          values: { firstName: '123', lastName: '', mobilePhone: '' },
          touched: { firstName: true, lastName: true, mobilePhone: true },
          errors: { firstName: 'Error', lastName: 'Error', mobilePhone: 'Error' },
        }),
      ).toEqual({ firstName: 'Error', lastName: 'Error', mobilePhone: 'Error' })
    })
  })

  describe('and the form has not been submitted yet', () => {
    describe('and the option to validate when touched is enabled', () => {
      it('should only include fields that have been touched and that have a value', () => {
        expect(
          getErrors({
            options: { validateOnTouched: true },
            submitCount: 0,
            values: { firstName: '123', lastName: '', mobilePhone: '' },
            touched: { firstName: true, lastName: true, mobilePhone: false },
            errors: { firstName: 'Error', lastName: 'Error', mobilePhone: 'Error' },
          }),
        ).toEqual({ firstName: 'Error' })
      })
    })

    describe('and the option to validate when touched is disabled (should validate on change)', () => {
      it('should include any fields that have a value', () => {
        expect(
          getErrors({
            options: { validateOnTouched: false },
            submitCount: 0,
            values: { firstName: 'hello', lastName: 'tester', mobilePhone: '' },
            touched: { firstName: false, lastName: true, mobilePhone: false },
            errors: { firstName: 'Error', lastName: 'Error', mobilePhone: 'Error' },
          }),
        ).toEqual({ firstName: 'Error', lastName: 'Error' })
      })
    })
  })
})
