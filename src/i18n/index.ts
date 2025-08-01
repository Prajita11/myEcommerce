import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

export const LANGUAGES = ['en', 'np']

i18n
  .use(HttpBackend) // load translations using http (default public/locales)

  .use(
    resourcesToBackend((language: string, namespace: string) => {
      // no reason there is a language called 'dev', just passed it away
      if (language === 'dev') return
      return import(`./locales/${LANGUAGES.includes(language) ? language : `np`}/${namespace}.json`)
    })
  ) // load translations using http (default public/locales)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['auth', 'common', 'homepage'], // <-- Declare all namespaces
    defaultNS: 'common', // <-- Optional, set a default
  })

export default i18n
