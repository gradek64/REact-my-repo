import email, { isMXDomainValid } from './email'
import '../../../../config/i18n/test'

describe('When validating an email address', () => {
  it('and no value is entered', () => {
    expect(email('', undefined, { validatedMXDomains: {} })).toBe('Please enter your email address')
  })

  it('and the email is a valid email, but not valid by argos standards', () => {
    expect(email('foo+bar@baz.com', undefined, { validatedMXDomains: {} })).toBe('Please enter a valid email address')
  })

  it('and the top level domain is too long', () => {
    expect(email('foo@bar.london', undefined, { validatedMXDomains: {} })).toBe(
      "We can't accept addresses with more than 4 characters after the 'dot'. Please try a different email address.",
    )
  })

  it('and the email is valid by all argos standards', () => {
    expect(email('anakin.skywalker@darkside.com', undefined, { validatedMXDomains: {} })).toBeNull()
  })

  it('and the email address does not have a valid mx domain', () => {
    expect(
      email('anakin.skywalker@darkside.com', undefined, {
        validatedMXDomains: {
          'anakin.skywalker@darkside.com': false,
        },
      }),
    ).toBe("Sorry, this email address isn't set up to send/receive messages")
  })

  it('and the email address has a valid mx domain', () => {
    expect(
      email('anakin.skywalker@darkside.com', undefined, {
        validatedMXDomains: {
          'anakin.skywalker@darkside.com': true,
        },
      }),
    ).toBeNull()
  })
})

describe('when calling isMXDomainValid', () => {
  it('and the email is invalid', async () => {
    const fetch = jest.fn()

    expect(await isMXDomainValid('anakin.skywalker')).toBe(false)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('and the email domain is within the common email domain lists it does not make an api call', async () => {
    const fetch = jest.fn()

    const isEmailDomainValid = await isMXDomainValid('anakin.skywalker@gmail.com')
    expect(isEmailDomainValid).toBe(true)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('and the email domain is not within the common email domain lists it calls the api', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
      }),
    ) as jest.Mock

    const isEmailDomainValid = await isMXDomainValid('anakin.skywalker@totallylegitemaildomain.com')
    expect(isEmailDomainValid).toBe(true)
    expect(fetch).toHaveBeenCalled()
  })
})
