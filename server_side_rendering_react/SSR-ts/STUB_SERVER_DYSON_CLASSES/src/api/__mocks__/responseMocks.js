import addressListMock from '../../containers/__mocks__/AddressList'

export default {
  initSnapshot: {
    path: '/checkout-api-v2/checkouts/snapshotId:initialise',
    response: {
      status: {},
      currency: 'GBP',
      customer: {},
      contactAddress: {},
      billingAddress: {},
      lines: [],
      amounts: {},
      stockHolds: [],
      promotions: [],
      payments: {
        sessionId: 'PS-b66cd6d5-10b0-43c3-877f-ee7ea97e4afb',
        payments: [],
      },
      store: {},
    },
  },
  getSnapshot: {
    path: '/checkout-api-v2/checkouts/snapshotId',
    response: {
      status: {},
      currency: 'GBP',
      customer: {},
      contactAddress: {},
      billingAddress: {},
      lines: [],
      amounts: {},
      stockHolds: [],
      promotions: [],
      payments: {
        sessionId: 'PS-b66cd6d5-10b0-43c3-877f-ee7ea97e4afb',
        payments: [],
      },
      store: {},
    },
  },
  getPaymentMethods: {
    path: '/checkout-api-v2/checkouts/snapshotId/paymentMethods',
    response: {
      methods: [],
    },
  },
  getAddresses: {
    path: '/account-api/users/myUserId/addresses',
    response: {
      addresses: addressListMock,
    },
  },
  getCreditPlans: {
    path: '/checkout-api-v2/checkouts/snapshotId/creditplans',
    response: {
      bestAnnualRate: 19,
      period: 24,
      plans: [],
    },
  },
  updateContactAddress: {
    path: '/checkout-api-v2/checkouts/snapshotId/contactAddress',
    response: {},
  },
  updateBillingAddress: {
    path: '/checkout-api-v2/checkouts/snapshotId/billingAddress',
    response: {},
  },
  updateAddress: {
    path: '/account-api/users/myUserId/address/myAddressId',
    response: {
      id: 'myAddressId',
      type: 'ADDRESS_TYPE_BOTH',
      person: {
        title: 'Dr',
        firstName: 'Test',
        lastName: 'User',
        mobilePhone: '07890123456',
        homePhone: '02890123456',
      },
      lines: {
        address1: '12 Test Road',
        address2: '',
        address3: '',
        county: 'London',
        city: 'London',
        postcode: 'NW3',
      },
    },
  },
  getWallet: {
    path: '/account-api/users/userId/wallet',
    response: {
      savedPaymentMethods: [
        {
          paymentMethod: 'CARD_ARGOS_BUSINESS',
          token: '7777888899990000',
          cardHolderName: 'Mrs Poison Ivy',
          last4Digits: '7890',
          expiryDate: '01/53',
          cardType: 'CORPLINK',
        },
      ],
    },
  },
  addPayment: {
    path: '/checkout-api-v2/checkouts/snapshotId/payments',
    response: {
      id: '123456',
    },
  },
  deletePayment: {
    path: '/checkout-api-v2/checkouts/snapshotId/payments/paymentId',
    data: undefined,
  },
  placeOrder: {
    path: '/checkout-api-v2/checkouts/snapshotId:place',
    response: {
      order: {
        id: '123',
      },
    },
  },
  getOrder: {
    path: '/checkout-api-v2/orders/123?includeCare=true',
    response: {
      orderNumber: '6586587637',
      creationDate: '',
      fulfilments: [],
      total: {
        withSavings: '',
        withoutSavings: '',
        saving: '',
      },
      status: {
        status: 'ORDER_PLACED',
        date: '',
      },
    },
  },
  retrieveOrder: {
    path: '/checkout-api-v2/orders/123?customerId=abc',
    response: {
      orderNumber: '6586587637',
      creationDate: '',
      fulfilments: [],
    },
  },
  getProducts: {
    path: 'http://localhost:8080/checkout/proxy/product-gateway/product/9805237,4996873?include=taxonomy_breadcrumb,badges',
    response: {
      data: [],
      included: [],
      errors: [],
    },
  },
  addPromotion: {
    path: '/checkout-api-v2/checkouts/snapshotId/promotions',
    response: {},
  },
  deletePromotion: {
    path: '/checkout-api-v2/checkouts/snapshotId/promotions',
    response: {},
  },
  getUserInfo: {
    path: '/webapp/wcs/stores/servlet/GetUserInfo',
    response: {
      userId: '2044798',
      userState: 'LOGGEDIN',
      emailAddress: 'anakin.skywalker@darkside.com',
      trolleyCount: 6,
      firstName: 'Anakin',
      postCode: 'SW1V 1DT',
    },
  },
  checkUserAccountExists: {
    path: '/account-api/users:check',
    response: {
      registered: true,
    },
  },
}
