export const receiptsDatasets = {
  SuccessWithReceipt: {
    description: '200: Receipt Retrieved (Default)',
    response: () => ({
      status: 200,
      body: {
        receipts: [
          {
            transaction_id: '7777000002020',
            url: 'http://apps.ereceipts.co.uk/receipts/5c5ad22b09d9039a8dce55a5?signature=jep77ECwiclUnm3ARE8XsGT4UxcM3SVqX8%2BP2Wdcg6c%3D',
          },
        ],
      },
    }),
  },
  SuccessWithNoReceipt: {
    description: '200: No Receipt Retrieved',
    response: () => ({
      status: 200,
      body: {
        receipts: [],
      },
    }),
  },
  BadRequest: {
    description: '400: Malformatted request',
    response: () => ({
      status: 400,
      body: {
        errors: [
          {
            description: 'items is missing',
            location: 'body',
            name: 'items',
          },
        ],
      },
    }),
  },
}
