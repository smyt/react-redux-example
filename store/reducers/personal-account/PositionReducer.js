/**
 * Description of Position Reducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */
import { REQUEST, SUCCESS, FAILURE } from 'Actions/utils'
import {
  POSITION,
  OPEN_POSITION_VIEW_MODAL,
  CLOSE_POSITION_VIEW_MODAL,
  RESET_CURRENT_POSITION,
} from 'Actions/personal-account/types'

import { POSITION_INIT } from 'Constants/PersonalAccount'

const INIT_STATE = {
  isOpen: false,
  isLoading: false,
  position: POSITION_INIT,
  errors: [],
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case POSITION[REQUEST]:
      return { ...state, isLoading: true }

    case POSITION[SUCCESS]:
      return { ...state, isLoading: false, position: action.position }

    case POSITION[FAILURE]:
      return { ...state, isLoading: false, errors: action.errors }

    case OPEN_POSITION_VIEW_MODAL:
      return { ...state, isOpen: true, position: { ...POSITION_INIT, ...action.payload } }

    case CLOSE_POSITION_VIEW_MODAL:
      return { ...state, position: POSITION_INIT, isOpen: false }

    case RESET_CURRENT_POSITION:
      return { ...state, position: POSITION_INIT }

    default:
      return { ...state }
  }
}
