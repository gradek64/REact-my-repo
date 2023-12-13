import Response from '../../../helpers/API/Response'

const deletePaymentResponseData = {
  PaymentDeleted: {
    description: '204: Payment deleted successfully (Default)',
    response: new Response({
      id: 'PaymentDeleted',
      statusCode: 204,
      error: null,
    }),
  },
  OrderSnapshotNotFound: {
    description: "404: Snapshot id requested doesn't exist",
    response: new Response({
      id: 'OrderSnapshotNotFound',
      statusCode: 404,
      error: {
        message: 'Failed to delete payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.DeletePaymentRequest',
            paymentSessionId: 'PS-3000',
            advice: 'ORDER_SNAPSHOT_NOT_FOUND',
          },
        ],
      },
    }),
  },
  PaymentNotFound: {
    description: "404: Payment requested doesn't exist",
    response: new Response({
      id: 'PaymentNotFound',
      statusCode: 404,
      error: {
        message: 'Failed to delete payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.DeletePaymentRequest',
            paymentSessionId: 'PS-3000',
            advice: 'PAYMENT_NOT_FOUND',
          },
        ],
      },
    }),
  },
  SnapshotLocked: {
    description: '409: Snapshot is locked',
    response: new Response({
      id: 'SnapshotLocked',
      statusCode: 409,
      error: {
        message: 'Snapshot is locked',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.DeletePaymentRequest',
            paymentSessionId: 'PS-3000',
            advice: 'ORDER_SNAPSHOT_UPDATE_NOT_ALLOWED',
          },
        ],
      },
    }),
  },
  ServiceUnreachable: {
    description: '500: Service unreachable',
    response: new Response({
      id: 'ServiceUnreachable',
      statusCode: 500,
      error: {
        message: 'Failed to delete payment',
        details: [
          {
            type: 'uk.co.argos.checkout.prepayservice.dto.request.DeletePaymentRequest',
            paymentSessionId: 'PS-3000',
            advice: 'SERVICE_UNREACHABLE',
          },
        ],
      },
    }),
  },
}

export default deletePaymentResponseData
