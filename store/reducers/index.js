/**
 * App Reducers
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Core
import settings from './settings/SettingsReducer'
import windows from './core/WindowsReducer'
import sidebarReducer from './core/SidebarReducer'
import dictionariesReducer from './core/DictionariesReducer'
import authReducer from './core/AuthUserReducer'

// Modules
import personalAccount from './personal-account'

const reducers = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  dictionaries: dictionariesReducer,
  settings,
  windows,
  personalAccount,
  form: formReducer,
})

export default reducers
