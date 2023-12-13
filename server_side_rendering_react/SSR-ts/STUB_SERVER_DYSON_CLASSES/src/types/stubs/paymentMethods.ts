import { PaymentMethod, PaymentMethodsAPIPayload, PaymentMethodStatus } from '../api'

export interface PaymentMethodsStub {
  methods: PaymentMethodsAPIPayload['methods']
  availability: Record<PaymentMethod, PaymentMethodStatus>
}
