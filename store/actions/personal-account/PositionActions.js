/**
 *
 */
import { REQUEST, action } from 'Actions/utils'
import {
  POSITION,
  OPEN_POSITION_VIEW_MODAL,
  CLOSE_POSITION_VIEW_MODAL,
  RESET_CURRENT_POSITION,
} from './types'

/**
 * Redux action for load information about one position.
 * @param {integer} id ID position
 */
export const loadPositionAction = id => action(POSITION[REQUEST], { id })

/**
 * Redux Action for open view modal window for one position.
 * @param id int Id position
 * @param title string Position title
 */
export const openPositionViewModalAction = (id, title) => action(OPEN_POSITION_VIEW_MODAL, { id, title })

/**
 * Redux Action for close position view modal.
 */
export const closePositionViewModalAction = () => action(CLOSE_POSITION_VIEW_MODAL)

/**
 * Redux Action for reset information about position in the store after close modal view.
 */
export const resetCurrentPositionAction = () => action(RESET_CURRENT_POSITION)
