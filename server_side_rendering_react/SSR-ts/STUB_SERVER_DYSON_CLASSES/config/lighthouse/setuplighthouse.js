const superagent = require('superagent')

function getCookies(response) {
  const userId = response.userId
  return `NPAC=true; UserPersistentSessionCookie=${response.UserPersistentSessionCookie}; WC_ACTIVEPOINTER=${response.WC_ACTIVEPOINTER}; WC_USERACTIVITY_${userId}=${response.WCUserActivityCookie}; WC_AUTHENTICATION_${userId}=${response.WCAuthenticationCookie}`
}

const getDetails = async () => {
  const login = await superagent
    .post('https://uat2.test-arg-uk.com/wcs/resources/store/10151/loginidentity')
    .send({ logonId: 'boffins.test.5@gmail.com', logonPassword: 'Welcome123' })
    .type('json')
    .set({ Cookie: 'NPAC=true' })
  const snapshotBody = {
    storeId: '9055',
    products: [
      {
        product: { id: '9805938', title: 'Duracell Specialty Alkaline MN21 Battery', price: 5.0, type: 'ADDO' },
        quantity: 1,
      },
    ],
    source: {
      salesChannel: 'WEB',
      ipAddress: '1.1.1.1',
      channelBrand: 'ARGOS',
      userAgent: 'node-superagent/3.8.3',
    },
  }
  const snapshotResponse = await superagent
    .post(
      'https://checkout-gateway-v2-uat2-external.public.eu-west-1.staging.deveng.systems/checkout-api-v2/checkouts',
      snapshotBody,
    )
    .type('json')

  const loginBody = login.body

  const snapshotId = snapshotResponse.body.id

  const userId = loginBody.userId

  await superagent
    .post(
      `https://checkout-gateway-v2-uat2-external.public.eu-west-1.staging.deveng.systems/checkout-api-v2/checkouts/${snapshotId}:initialise`,
    )
    .send({ initNectar: true })
    .type('json')
    .set({ 'X-Checkout-User-Id': userId })
    .set({ Cookie: `${getCookies(loginBody)}` })

  return {
    cookies: getCookies(loginBody),
    url: `https://ui-payment-uat2.public.eu-west-1.staging.deveng.systems/checkout/${snapshotId}/payment`,
  }
}

const baseConfig = {
  collect: {
    numberOfRuns: 5,
  },
  assert: {
    assertions: {
      'categories:performance': ['warn', { aggregationMethod: 'median-run', minScore: 0.5 }],
      'categories:accessibility': ['warn', { minScore: 0.8 }],
      'categories:best-practices': ['warn', { minScore: 0.7 }],
    },
  },
  upload: {
    target: 'lhci',
    serverBaseUrl: 'http://pdp-lighthouse-server.service.eu-west-1.staging.deveng.systems/',
    token: '956b306e-d755-43a2-8afa-4c038f3d0e75',
  },
}

getDetails()
  .then((result) => {
    baseConfig.collect = {
      ...baseConfig.collect,
      url: result.url,
      settings: {
        extraHeaders: { Cookie: `${result.cookies}` },
      },
    }
    console.log(`module.exports = {
    ci: ${JSON.stringify(baseConfig)}
  }`)
  })
  .catch((err) => {
    console.log(err)
  })
