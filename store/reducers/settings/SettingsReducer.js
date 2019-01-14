/**
 * App Settings Reducers
 */
import {
  COLLAPSED_SIDEBAR,
  SET_LANGUAGE,
  MINI_SIDEBAR,
} from 'Actions/types'

// app config
import AppConfig from 'Constants/AppConfig'

/**
 * initial app settings
 */
const INIT_STATE = {
  navCollapsed: AppConfig.navCollapsed,
  boxLayout: AppConfig.boxLayout,
  miniSidebar: AppConfig.miniSidebar,
  themes: [
    {
      id: 1,
      name: 'primary',
    },
    {
      id: 2,
      name: 'secondary',
    },
  ],
  activeTheme: {
    id: 1,
    name: 'primary',
  },
  locale: AppConfig.locale,
  languages: [
    {
      languageId: 'english',
      locale: 'en',
      name: 'English',
      icon: 'en',
    },
    {
      languageId: 'russian',
      locale: 'ru',
      name: 'Russian',
      icon: 'ru',
    },
  ],
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COLLAPSED_SIDEBAR:
      return { ...state, navCollapsed: action.isCollapsed }
    case MINI_SIDEBAR:
      return { ...state, miniSidebar: action.payload }
    case SET_LANGUAGE:
      return { ...state, locale: action.payload }
    default:
      return { ...state }
  }
}
