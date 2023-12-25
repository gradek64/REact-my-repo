import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import locales from '../../public/locales'
import format from './formatting'

import { defaultNamespace, namespaces } from './server'

i18n.use(initReactI18next).init({
  lng: 'en-ARG',
  fallbackLng: ['en-ARG', 'en'],
  returnEmptyString: false,

  // have a common namespace used around the full app
  ns: [defaultNamespace, ...namespaces],
  defaultNS: defaultNamespace,

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
    format,
  },

  resources: { ...locales },
})

export default i18n
