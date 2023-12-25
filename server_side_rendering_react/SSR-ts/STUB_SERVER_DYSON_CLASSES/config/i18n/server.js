import fs from 'fs'
import i18n from 'i18next'
import Backend from 'i18next-node-fs-backend'

import format from './formatting'
import * as routerModules from '../../src/routes'

export const defaultLng = 'en-ARG'

export const defaultNamespace = 'common'

export const namespaces = Object.entries(routerModules).reduce((acc, [moduleName]) => {
  if (moduleName.endsWith('Route')) {
    const locale = moduleName.replace('Route', '')
    if (
      fs.existsSync(`public/locales/en/${locale}.json`) ||
      fs.existsSync(`public/locales/en-ARG/${locale}.json`) ||
      fs.existsSync(`public/locales/en-HAB/${locale}.json`) ||
      fs.existsSync(`public/locales/en-TU/${locale}.json`)
    ) {
      acc.push(locale)
    }
  }
  return acc
}, [])

i18n.use(Backend).init({
  lng: defaultLng,
  fallbackLng: ['en-ARG', 'en'],
  returnEmptyString: false,

  ns: [defaultNamespace, ...namespaces],
  defaultNS: defaultNamespace,
  preload: ['en', 'en-ARG', 'en-HAB', 'en-TU'],

  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    format,
  },
  react: {
    useSuspense: false,
  },
  backend: {
    loadPath: 'public/locales/{{lng}}/{{ns}}.json',
    jsonIndent: 2,
  },
})

export default i18n
