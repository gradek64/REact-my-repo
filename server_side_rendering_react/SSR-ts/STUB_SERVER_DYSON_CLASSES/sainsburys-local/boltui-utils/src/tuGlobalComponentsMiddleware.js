import memoize from 'memoizee'

const withCache = (fn, cacheTime) => (cacheTime ? memoize(fn, { maxAge: cacheTime, promise: true }) : fn)

const GLOBAL_COMPONENTS_CACHE_TIME = 60 * 60 * 1000 // 1 hour

const getGlobalComponentsHost = (env) => {
  switch (env) {
    case 'staging':
      return 'https://tu-global-components.public.eu-west-1.staging.deveng.systems'
    case 'production':
      return 'https://tu-global-components.public.eu-west-1.production.deveng.systems'
    default:
      return 'https://tu-global-components.public.eu-west-1.dev.deveng.systems'
  }
}

const versionParam = '&version=canary' // request canary version for full Tu migration changes

const uncachedFetchGlobalComponents = async (host, modules, pageType) => {
  const pageTypeParam = pageType ? `&pageType=${pageType}` : '' // Type of page requesting global components. Used to change props passed to components based on page type.
  const result = await fetch(`${host}/manifest?modules=${modules}${pageTypeParam}${versionParam}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache'
    }
  })
  return result.json()
}
const fetchGlobalComponents = withCache(uncachedFetchGlobalComponents, GLOBAL_COMPONENTS_CACHE_TIME)

const tuGlobalComponentsMiddleware = (env, modules = ['header', 'footer'], pageType = '') => async (req, res, next) => {
  const host = getGlobalComponentsHost(env)
  try {
    const manifest = await fetchGlobalComponents(host, modules.join(), pageType)

    const {
      markup,
      assets: { scripts, styles }
    } = manifest

    const moduleMarkups = {}
    modules.forEach((module) => {
      moduleMarkups[module] = `<div data-ui-version="2" data-use-max-width>${markup[module]}</div>`
    })

    req.globalComponents = {
      ...moduleMarkups,
      scripts: `
      <script crossorigin src="https://cdn.tu.co.uk/assets/react/prop-types.min.js"></script>
      ${scripts}
      `,
      styles
    }

    next()
  } catch {
    next()
  }
}

export { tuGlobalComponentsMiddleware, getGlobalComponentsHost }
