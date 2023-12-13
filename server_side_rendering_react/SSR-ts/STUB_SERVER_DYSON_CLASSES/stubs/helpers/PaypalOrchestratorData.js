const CreateSession = {
  url: 'https://payments-hub.service.eu-west-1.dev.deveng.systems/payments/sessions',
  auth: {
    username: 'chui-20210716-C36zrvqRMq',
    password: '7d69211e-298e-40eb-a2d3-61d9dfa026ca',
  },
  body: {
    customerInformation: {
      customerId: '1787636',
      forename: 'Jane',
      surname: 'Doe',
      title: 'Mrs',
      email: 'jane@mail.com',
      phoneNumber: '07984555666',
      deliveryAddress: {
        streetAddress1: 'Argos Ltd 489-499, Avebury Boulevard',
        streetAddress2: '',
        streetAddress3: 'MILTON KEYNES',
        streetAddress4: 'Buckinghamshire',
        country: '826',
        postcode: 'MK92NW',
      },
      billingAddress: {
        streetAddress1: 'Argos Ltd 489-499, Avebury Boulevard',
        streetAddress2: '',
        streetAddress3: 'MILTON KEYNES',
        streetAddress4: 'Buckinghamshire',
        country: '826',
        postcode: 'MK92NW',
      },
      ipAddress: '1.1.1.1',
      deviceId: '1234',
      browser: {
        acceptHeaders: 'text/html,application/xhtml+',
        userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36',
      },
    },
    orderInformation: {
      channel: 'WEB',
      distributionChannel: 'delivery',
      currency: 'GBP',
      brand: 'sainsburys',
      products: [
        {
          description: 'description',
          code: '2682330',
          quantity: 3,
          price: 2.99,
        },
        {
          description: 'description',
          code: '2682331',
          quantity: 2,
          price: 4.99,
        },
      ],
    },
  },
}

const CreateInstrumentPaypal = {
  url: 'https://payments-hub.service.eu-west-1.dev.deveng.systems/payments/sessions/{{sessionId}}/instruments',
  method: 'POST',
  json: true,
  auth: {
    username: 'chui-20210716-C36zrvqRMq',
    password: '7d69211e-298e-40eb-a2d3-61d9dfa026ca',
  },
  body: {
    PayPal: {
      amount: 1000,
      description: 'blah',
    },
  },
}

module.exports = {
  CreateSession,
  CreateInstrumentPaypal,
}
