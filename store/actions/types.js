/**
 * App Redux Action Types
 */
import createRequestTypes from './utils'

export const COLLAPSED_SIDEBAR = 'COLLAPSED_SIDEBAR'
export const MINI_SIDEBAR = 'MINI_SIDEBAR'
export const TOGGLE_SIDEBAR_IMAGE = 'TOGGLE_SIDEBAR_IMAGE'
export const SET_SIDEBAR_IMAGE = 'SET_SIDEBAR_IMAGE'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const TOGGLE_MENU = 'TOGGLE_MENU'

// Dictionaries
export const DICTIONARIES = createRequestTypes('DICTIONARIES')

// Windows toolbar
export const ADD_WINDOW_BUTTON = 'ADD_WINDOW_BUTTON'
export const TRY_ADD_WINDOW_BUTTON = 'TRY_ADD_WINDOW_BUTTON'
export const REMOVE_WINDOW_BUTTON = 'REMOVE_WINDOW_BUTTON'
export const TOGGLE_WINDOW_TOOLBAR = 'TOGGLE_WINDOW_TOOLBAR'
