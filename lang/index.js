/**
 * App Language Provider
 * Add more locales here
 */
import { addLocaleData } from 'react-intl'
import enLang from './entries/en_US'
import ruLang from './entries/ru_RU'

const AppLocale = {
  en: enLang,
  ru: ruLang,
}

addLocaleData(AppLocale.en.data)
addLocaleData(AppLocale.ru.data)

export default AppLocale
