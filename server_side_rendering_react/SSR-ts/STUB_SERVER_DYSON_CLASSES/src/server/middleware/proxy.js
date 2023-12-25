import url from 'url';
import proxy from 'express-http-proxy';

import { nconf } from '../../../config/envconfig/envConfig';

const isStub =
  nconf.get('NODE_ENV') === 'stub' || nconf.get('ENV_CONFIG') === 'remoteStub';

export const receiptServiceProxy = proxy(nconf.get('RECEIPT_API'), {
  proxyReqPathResolver: (req) => url.parse(req.url).path,
});

export const checkoutServiceProxy = proxy(nconf.get('GATEWAY_API'), {
  proxyReqPathResolver: (req) => `/checkout-api-v2${url.parse(req.url).path}`,
});

export const marketingPreferenceServiceProxy = proxy(
  nconf.get('MARKETING_PREFERENCE_API'),
  {
    proxyReqPathResolver: (req) => `/cpm/consents${url.parse(req.url).path}`,
  }
);

export const accountServiceProxy = proxy(nconf.get('ACCOUNT_API'), {
  proxyReqPathResolver: (req) => `/account-api${url.parse(req.url).path}`,
});

export const wcsProxy = (req, res, next) => {
  if (
    url.parse(req.url).pathname === '/DoLookupAddress' ||
    url.parse(req.url).pathname === '/TrolleyYourDetails'
  ) {
    return next();
  }

  return proxy(nconf.get('WCS_API'), {
    proxyReqPathResolver: (proxyReq) =>
      `/webapp/wcs/stores/servlet${url.parse(proxyReq.url).path}`,
  })(req, res, next);
};

export const tealiumProxy = proxy('https://tags.tiqcdn.com', {
  proxyReqPathResolver: (req) =>
    `/utag/argos/${getTealiumBrand(req.brand)}/${getTealiumEnv()}/${
      url.parse(req.url).path
    }`,
});

export const stubDashboardProxy = proxy(nconf.get('GATEWAY_API'), {
  proxyReqPathResolver: (req) => {
    console.log('PROXY ==> req.url', req.url);
    return url.parse(req.url).path;
  },
});

export const stubEndpointProxy = proxy(nconf.get('GATEWAY_API'), {
  proxyReqPathResolver: (req) => `/payment-stub${url.parse(req.url).path}`,
});

export const stubProxy = (req, res, next) => {
  return proxy(nconf.get('GATEWAY_API'), {
    proxyReqPathResolver: (proxyReq) => {
      const path = proxyReq.originalUrl.split('/proxy')[1];
      return `${path}`;
    },
  })(req, res, next);
};

export const productGatewayProxy = (req, res, next) => {
  if (isStub) {
    return stubProxy(req, res, next);
  }

  if (!req.vault.pdp.url || !req.vault.pdp.key) {
    res
      .status(500)
      .send('Missing config. Please check the Vault config is working.');
    return null;
  }

  const { origin, pathname } = new URL(req.vault.pdp.url);

  // Proxy to product-api
  return proxy(origin, {
    proxyReqOptDecorator: (proxyReqOpts) => {
      proxyReqOpts.headers.accept = 'application/vnd.argos-product.v1.5+json';
      proxyReqOpts.headers['x-api-key'] = req.vault.pdp.key;
      if (nconf.get('ENV_CONFIG') !== 'remoteStub')
        delete proxyReqOpts.headers.cookie;
      return proxyReqOpts;
    },
    proxyReqPathResolver: (proxyReq) => {
      const productsPath = proxyReq.originalUrl.split('/product-gateway')[1];

      return `${pathname}${productsPath}`;
    },
  })(req, res, next);
};

export const sessionManagerProxy = (req, res, next) => {
  if (isStub) {
    return stubProxy(req, res, next);
  }

  // Proxy to Session Manager
  return proxy(nconf.get('SESSION_MANAGER_API'), {
    proxyReqPathResolver: (proxyReq) => {
      return proxyReq.originalUrl.split('/session-manager')[1];
    },
  })(req, res, next);
};

export const wishlistMock = (req, res) => {
  res.json({
    data: {
      wishlists: [
        {
          items: [
            { partNumber: '8087159' },
            { partNumber: '8559199' },
            { partNumber: '8268497' },
          ],
        },
      ],
    },
  });
};
