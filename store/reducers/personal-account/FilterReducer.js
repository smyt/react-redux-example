/**
 * Description of FilterReducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */

import {
  TOGGLE_COLLAPSE_FILTER_LIST,
  TOGGLE_COLLAPSE_FILTER,
  SELECT_FILTER_ITEM_SELECTION,
  DESELECT_FILTER_ITEM_SELECTION,
  SHOW_MORE_ITEMS,
} from 'Actions/personal-account/types'

import { positionsFilters } from 'Modules/personal-account/PositionsFilter/positionsFilters'

/**
 * initial app settings
 */
const INIT_STATE = {
  isCollapsed: false,
  filters: positionsFilters,
}

function toggleFilterList(state, { isCollapsed }) {
  return { ...state, isCollapsed }
}

function toggleCollapseFilter(state, { name }) {
  const { filters } = state
  const index = filters.findIndex(item => item.name === name)

  return {
    ...state,
    filters: [
      ...filters.slice(0, index),
      {
        ...filters[index],
        isCollapsed: !filters[index].isCollapsed,
      },
      ...filters.slice(index + 1),
    ],
  }
}

function selectFilterItem(state, { name, item }) {
  const { filters } = state
  const index = filters.findIndex(node => node.name === name)

  return {
    ...state,
    filters: [
      ...filters.slice(0, index),
      {
        ...filters[index],
        selected: [...filters[index].selected, item.id],
      },
      ...filters.slice(index + 1),
    ],
  }
}

function deselectFilterItem(state, { name, item }) {
  const { filters } = state
  const index = filters.findIndex(node => node.name === name)

  return {
    ...state,
    filters: [
      ...filters.slice(0, index),
      {
        ...filters[index],
        selected: [...filters[index].selected.filter(node => node !== item.id)],
      },
      ...filters.slice(index + 1),
    ],
  }
}

function showMoreItems(state, { name }) {
  const { filters } = state
  const index = filters.findIndex(node => node.name === name)

  return {
    ...state,
    filters: [
      ...filters.slice(0, index),
      {
        ...filters[index],
        showAll: true,
      },
      ...filters.slice(index + 1),
    ],
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE_FILTER_LIST:
      return toggleFilterList(state, action)
    case TOGGLE_COLLAPSE_FILTER:
      return toggleCollapseFilter(state, action)
    case SELECT_FILTER_ITEM_SELECTION:
      return selectFilterItem(state, action)
    case DESELECT_FILTER_ITEM_SELECTION:
      return deselectFilterItem(state, action)
    case SHOW_MORE_ITEMS:
      return showMoreItems(state, action)
    default:
      return { ...state }
  }
}
