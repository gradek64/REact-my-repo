import Response from '../../helpers/API/Response'

const errorResponse = (statusCode, status, message) => ({
  status: statusCode,
  body: new Response({
    statusCode,
    error: {
      message,
      status,
      details: [
        {
          type: 'type.argos.co.uk/argos.order.retrieval.Get',
          advice: status,
        },
      ],
    },
  }).toJson(),
})

module.exports = errorResponse
