/**
 * Description of PositionsReducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */
import { REQUEST, SUCCESS, FAILURE } from 'Actions/utils'
import {
  POSITIONS,
  CHANGE_POSITIONS_LIST_PAGE,
  CHANGE_POSITIONS_ITEMS_PER_PAGE,
  CHANGE_POSITIONS_LIST_SORT_ORDER,
} from 'Actions/personal-account/types'

// Temporary decision. May be it will go to the backend.
const sortOrderItems = [{
  name: 'По сумме зарплаты возрастание',
  value: 1,
}, {
  name: 'По сумме зарплаты убывание',
  value: 2,
}, {
  name: 'По дедлайну возрастание',
  value: 3,
}, {
  name: 'По дедлайну убывание',
  value: 4,
}, {
  name: 'По id вакансии возрастания',
  value: 5,
}, {
  name: 'По id вакансии убывание',
  value: 6,
}, {
  name: 'По количеству кандидатов возрастание',
  value: 7,
}, {
  name: 'По количеству кандидатов убывание',
  value: 8,
}]

const INIT_STATE = {
  items: [],
  currentPage: 1,
  totalItems: 0,
  itemsPerPage: 5,
  sortOrder: 1,
  statusModalOpen: false,
  reqModalOpen: false,
  isLoading: false,
  isLoaded: false,
  errors: [],
  sortOrderItems,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case POSITIONS[REQUEST]:
      return { ...state, isLoading: true, isLoaded: false }

    case POSITIONS[SUCCESS]:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: action.items,
        totalItems: action.totalCount,
      }

    case POSITIONS[FAILURE]:
      return {
        ...state, isLoading: false, items: [], errors: action.errors,
      }

    case CHANGE_POSITIONS_LIST_PAGE:
      return { ...state, currentPage: action.page }

    case CHANGE_POSITIONS_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.count, currentPage: 1 }

    case CHANGE_POSITIONS_LIST_SORT_ORDER:
      return { ...state, sortOrder: action.order }

    default:
      return { ...state }
  }
}
