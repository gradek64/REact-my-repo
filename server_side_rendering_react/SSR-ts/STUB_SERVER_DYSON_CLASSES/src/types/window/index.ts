import type { PayPalButtonOptions } from './paypal'
import { NewRelicAttributes } from '../middleware/newrelic'
import { LogLevel } from '../../utils/Logger'
import { DigitalData } from './analytics'

export {}

declare global {
  interface Window {
    ApplePaySession?: typeof ApplePaySession
    paypal?: {
      Buttons: (options: PayPalButtonOptions) => {
        render: (element: string) => void
        isEligible: () => boolean
      }
    }
    newrelic: {
      addPageAction: (actionType: string, newRelicAttributes: NewRelicAttributes) => void
      noticeError: (error: Error, newRelicAttributes?: NewRelicAttributes) => void
    }

    LOG_LEVEL: LogLevel
    digitalData: DigitalData
  }
}
