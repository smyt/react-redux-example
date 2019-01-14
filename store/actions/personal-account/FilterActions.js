/**
 * Position filters actions
 */
import { action } from 'Actions/utils'
import {
  TOGGLE_COLLAPSE_FILTER_LIST,
  TOGGLE_COLLAPSE_FILTER,
  SELECT_FILTER_ITEM_SELECTION,
  DESELECT_FILTER_ITEM_SELECTION,
  SHOW_MORE_ITEMS,
} from './types'

/**
 * Redux Action To Emit Collapse Filter List
 * @param {boolean} isCollapsed
 */
export const toggleFilterListAction = isCollapsed => action(TOGGLE_COLLAPSE_FILTER_LIST, { isCollapsed: !isCollapsed })

/**
 * Redux Action To Select filter item
 * @param {string} name
 * @param {object} item
 */
export const selectFilterItem = (name, item) => action(SELECT_FILTER_ITEM_SELECTION, { name, item })

/**
 * Redux Action To Deselect filter item
 * @param {string} name
 * @param {object} item
 */
export const deselectFilterItem = (name, item) => action(DESELECT_FILTER_ITEM_SELECTION, { name, item })

/**
 * Redux Action To Emit Collapse Filter Item
 * @param {string} name
 */
export const toggleFilterAction = name => action(TOGGLE_COLLAPSE_FILTER, { name })

/**
 * Redux Action To show more items in the filter list
 * @param {string} name
 */
export const showMoreItemsAction = name => action(SHOW_MORE_ITEMS, { name })
