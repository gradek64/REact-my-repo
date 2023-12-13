import { cleanPath } from './testHelpers'
import { confirmationPath, manageOrderPath, stockHoldPath } from '../paths'

describe('cleanPath function', () => {
  it('should handle confirmatin path', () => {
    const result = cleanPath(confirmationPath)
    expect(result).toBe('/confirmation/1234567890')
  })
  it('should handle manage order path', () => {
    const result = cleanPath(manageOrderPath)
    expect(result).toBe('/order/tracking/1234567890/20ec757a-4f50-43fd-aa35-d79bfc3bf506')
  })
  it('should handle stock hold path', () => {
    const result = cleanPath(stockHoldPath)
    expect(result).toBe('/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/stock')
  })
})
