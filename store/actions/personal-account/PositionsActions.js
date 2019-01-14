/**
 * Positions actions
 */

import { REQUEST, action } from 'Actions/utils'
import {
  POSITIONS,
  CHANGE_POSITIONS_LIST_PAGE,
  CHANGE_POSITIONS_ITEMS_PER_PAGE,
  CHANGE_POSITIONS_LIST_SORT_ORDER,
} from './types'

export const loadPositionsAction = () => action(POSITIONS[REQUEST])

export const changePositionsListPageAction = page => action(CHANGE_POSITIONS_LIST_PAGE, { page })

export const changePositionsItemsPerPageAction = count => action(CHANGE_POSITIONS_ITEMS_PER_PAGE, { count })

export const changePositionsListSortOrderAction = order => action(CHANGE_POSITIONS_LIST_SORT_ORDER, { order })
