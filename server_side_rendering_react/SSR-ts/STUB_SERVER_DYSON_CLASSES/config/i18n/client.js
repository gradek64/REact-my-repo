import i18n from 'i18next'

import format from './formatting'

i18n.init({
  lng: window.initialLanguage,
  resources: window.initialI18nStore,
  fallbackLng: ['en-ARG', 'en'],
  returnEmptyString: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    format,
  },
})

export default i18n
