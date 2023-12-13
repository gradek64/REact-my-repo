// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event'
import { compile } from 'path-to-regexp'
import { screen } from '../utils/@testing-library'
import { confirmationPath, manageOrderPath, stockHoldPath } from '../paths'

export const mockValidHttpResponse = (body = {}, status = 200) =>
  jest.fn(() => ({
    status,
    ok: true,
    body,
  })) as jest.Mock

export const mockInvalidHttpResponse = (body = {}, status = 500) =>
  jest.fn(() => ({
    status,
    ok: false,
    body,
  })) as jest.Mock

export const editAddressWithValues = ({
  title,
  firstName,
  lastName,
  country,
  mobileNumber,
  landlineNumber,
  houseNumber,
  road,
  city,
  county,
  postcode,
  preferredAddress,
  email,
}: {
  title?: string
  firstName?: string
  lastName?: string
  country?: string
  mobileNumber?: string
  landlineNumber?: string
  houseNumber?: string
  road?: string
  city?: string
  county?: string
  postcode?: string
  preferredAddress?: boolean
  email?: string
}) => {
  if (title) {
    userEvent.selectOptions(screen.getByLabelText('Title'), title)
  }

  if (email) {
    userEvent.clear(screen.getByTestId('email'))
    userEvent.type(screen.getByTestId('email'), email)
  }

  if (firstName) {
    userEvent.clear(screen.getByLabelText('First name'))
    userEvent.type(screen.getByLabelText('First name'), firstName)
  }

  if (lastName) {
    userEvent.clear(screen.getByLabelText('Last name'))
    userEvent.type(screen.getByLabelText('Last name'), lastName)
  }

  if (country) {
    userEvent.selectOptions(screen.getByLabelText('Country'), country)
  }

  if (mobileNumber) {
    userEvent.clear(screen.getByLabelText('Mobile number'))
    userEvent.type(screen.getByLabelText('Mobile number'), mobileNumber)
  }

  if (landlineNumber) {
    const noMobileButton = screen.queryByRole('button', { name: 'No mobile?' })
    if (noMobileButton) {
      userEvent.click(noMobileButton)
    } else {
      userEvent.clear(screen.getByLabelText('Landline'))
    }

    userEvent.type(screen.getByLabelText('Landline'), landlineNumber)
  }

  if (houseNumber || road || city || county || postcode) {
    const enterAddressManuallyButton = screen.queryByRole('button', {
      name: 'Enter address manually',
    })

    if (enterAddressManuallyButton) {
      userEvent.click(enterAddressManuallyButton)
    }
  }

  if (houseNumber) {
    userEvent.clear(screen.getByLabelText('House number / name'))
    userEvent.type(screen.getByLabelText('House number / name'), houseNumber)
  }

  if (road) {
    userEvent.clear(screen.getByLabelText('Street / road'))
    userEvent.type(screen.getByLabelText('Street / road'), road)
  }

  if (city) {
    userEvent.clear(screen.getByLabelText('Town / city'))
    userEvent.type(screen.getByLabelText('Town / city'), city)
  }

  if (county) {
    userEvent.clear(screen.getByLabelText('County'))
    userEvent.type(screen.getByLabelText('County'), county)
  }

  if (postcode) {
    userEvent.clear(screen.getByLabelText('Postcode'))
    userEvent.type(screen.getByLabelText('Postcode'), postcode)
  }

  if (typeof preferredAddress === 'boolean') {
    const checkbox = document.querySelector<HTMLInputElement>('#contactAddress-label input')

    if (checkbox) {
      const isChecked = checkbox.checked

      const clickCheckbox = () => userEvent.click(screen.getByText('Save as preferred address'))

      if (isChecked && !preferredAddress) {
        clickCheckbox()
      } else if (!isChecked && preferredAddress) {
        clickCheckbox()
      }
    }
  }
}

export const cleanPath = (path: string) => {
  const toPath = compile(path)

  switch (path) {
    case confirmationPath:
      return toPath({ orderId: 1234567890 })
    case manageOrderPath:
      return toPath({ orderId: 1234567890, customerId: '20ec757a-4f50-43fd-aa35-d79bfc3bf506' })
    case stockHoldPath:
      return toPath({ orderId: 1234567890, id: '20ec757a-4f50-43fd-aa35-d79bfc3bf506' })
    default:
      return path
  }
}
