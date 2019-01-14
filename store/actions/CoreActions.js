/**
 * Redux App Settings Actions
 */
import { REQUEST } from 'Actions/utils'
import {
  COLLAPSED_SIDEBAR,
  TOGGLE_MENU,
  MINI_SIDEBAR,
  SET_LANGUAGE,
  DICTIONARIES,
  TRY_ADD_WINDOW_BUTTON,
  REMOVE_WINDOW_BUTTON,
  TOGGLE_WINDOW_TOOLBAR,
} from './types'

import { action } from './utils'

/**
 * Redux Action To Emit Collapse Sidebar
 * @param {boolean} isCollapsed
 */
export const collapsedSidebarAction = isCollapsed => action(COLLAPSED_SIDEBAR, { isCollapsed })

/**
 * Redux Action To Toggle Sidebar Menus
 */
export const onToggleMenu = selectedMenu => action(TOGGLE_MENU, { selectedMenu })

/**
 * Redux Action To Emit Mini Sidebar
 */
export const miniSidebarAction = isMiniSidebar => action(MINI_SIDEBAR, { isMiniSidebar })

/**
 * Redux Action To Set Language
 */
export const setLanguage = language => action(SET_LANGUAGE, { language })

/**
 * Redux Action to load different dictionaries
 */
export const loadDictionaries = () => action(DICTIONARIES[REQUEST])

/**
 * Redux Action add new window on windows panel.
 */
export const addWindowButton = ({
  id, title, showAction, removeAction,
}) => action(TRY_ADD_WINDOW_BUTTON, {
  payload: {
    id,
    title: title.length > 0 ? title : 'Новое окно',
    showAction,
    removeAction,
  },
})

/**
 * Redux Action remove window from windows panel
 */
export const removeWindowButton = id => action(REMOVE_WINDOW_BUTTON, { id })

/**
 * Redux Action the window on windows panel
 */
export const toggleWindowToolbar = () => action(TOGGLE_WINDOW_TOOLBAR)
