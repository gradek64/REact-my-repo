import fetch from 'isomorphic-unfetch'

const config = {
  CACHE_EXPIRY: 30,
  VARIANTS: {
    default: 'default'
  },
  ENDPOINTS: {
    development: 'https://navigation-header-service.public.eu-west-1.dev.deveng.systems',
    feature: 'https://navigation-header-service-v2.public.eu-west-1.dev.deveng.systems', // temporary feature header-service on dev
    staging: 'https://navigation-header-service.public.eu-west-1.staging.deveng.systems',
    production: 'https://navigation-header-service.public.eu-west-1.production.deveng.systems'
  },
  MANIFEST_PATH: '/manifest',
  REQUEST_HEADERS: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache'
    }
  },
  ERR_SCRIPT_LOAD_FAIL: 'Navigation HAAS unreachable. Exception when requesting:'
}

const requestEndpoint = (env, brand) => {
  const brandParam = brand ? `?brand=${brand}` : ''
  return `${config.ENDPOINTS[env]}${config.MANIFEST_PATH}${brandParam}`
}

const logError = (msg, path) => {
  const errorLog = { type: 'nav-haas-error', msg, path }
  console.error(JSON.stringify(errorLog))
}

const shouldInvalidateCache = (variant) => {
  const difference = Math.abs(Date.now() - variant.lastUpdated)
  const minutes = Math.floor(difference / 1000 / 60)
  return minutes >= config.CACHE_EXPIRY
}

const navigationHeaderFetcher = (environment, brand = '') => {
  /* Default requests to Akamai unless specifically provided */
  const env = environment || 'production'

  /* Default to the full header */
  const variant = config.VARIANTS.default

  /* Ensures the internal node cache is populated on first request */
  let firstRequest = true

  /* Flag to invalidate the internal cache and re-populate the header data */
  let cacheIsExpired = false

  const endpoint = requestEndpoint(env, brand) /* HAAS environment & file path where the server side fetch is made */

  return (req, res, next) => {
    const cacheBrand = brand ? `-${brand}` : ''
    const cacheKey = `${variant}${cacheBrand}`

    /* Determine if first or subsequent request for the particular header variant being asked for */
    if (global.navigationHeaderService && global.navigationHeaderService[cacheKey]) {
      firstRequest = false
    }

    /* Check on every request if the cached response is within the 30 minute TTL */
    if (!firstRequest) {
      cacheIsExpired = shouldInvalidateCache(global.navigationHeaderService[cacheKey])
    }

    if (firstRequest || cacheIsExpired) {
      fetch(endpoint, config.REQUEST_HEADERS)
        .then((result) => result.json())
        .then((json) => {
          global.navigationHeaderService = {
            ...global.navigationHeaderService,
            [cacheKey]: {
              ...json,
              lastUpdated: Date.now()
            }
          }

          if (firstRequest) {
            req.navigationHeaderService = global.navigationHeaderService[cacheKey]
            next()
          }
        })
        .catch(() => {
          logError(`${config.ERR_SCRIPT_LOAD_FAIL} ${endpoint}`, req.path)
          if (firstRequest) {
            next()
          }
        })
    }

    req.navigationHeaderService = (global.navigationHeaderService && global.navigationHeaderService[cacheKey]) || {}
    if (!firstRequest) next()
  }
}

const navigationHeaderProxy = (environment) => {
  return (req, res, next) => {
    let navigationHeaderPath
    if (environment === 'development' || environment === 'staging' || environment === 'feature') {
      navigationHeaderPath = config.ENDPOINTS[environment]
    } else {
      if (environment !== 'production')
        console.warn("HAAS: You didn't specify a valid environment, defaulting to production")
      navigationHeaderPath = config.ENDPOINTS.production
    }
    req.navigationHeaderPath = navigationHeaderPath
    next()
  }
}

export { navigationHeaderFetcher, navigationHeaderProxy, config }
