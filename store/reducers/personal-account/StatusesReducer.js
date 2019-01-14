/**
 * Description of StatusesReducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */

import { REQUEST, SUCCESS, FAILURE } from 'Actions/utils'
import {
  STATUSES,
  OPEN_STATUSES_MODAL,
  CLOSE_STATUSES_MODAL,
  OPEN_STATUS_HISTORY_MODAL,
  CLOSE_STATUS_HISTORY_MODAL,
} from 'Actions/personal-account/types'

const historyOptions = {
  id: 0,
  fio: '',
  date: '',
  oldStatus: '',
  newStatus: '',
}

const INIT_STATE = {
  id: 0,
  title: '',
  statuses: [],
  isOpen: false,
  isLoading: false,
  isHistoryOpen: false,
  historyOptions: {
    ...historyOptions,
  },
  errors: [],
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case STATUSES[REQUEST]:
      return { ...state, isLoading: true }

    case STATUSES[SUCCESS]:
      return { ...state, isLoading: false, statuses: action.items }

    case STATUSES[FAILURE]:
      return {
        ...state, isLoading: false, statuses: [], errors: action.errors,
      }

    case OPEN_STATUSES_MODAL:
      return { ...state, ...action.payload, isOpen: true }

    case CLOSE_STATUSES_MODAL:
      return { ...state, ...action.payload, isOpen: false }

    case OPEN_STATUS_HISTORY_MODAL:
      return { ...state, historyOptions: { ...action.payload }, isHistoryOpen: true }

    case CLOSE_STATUS_HISTORY_MODAL:
      return { ...state, historyOptions, isHistoryOpen: false }

    default:
      return { ...state }
  }
}
