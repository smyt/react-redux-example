/**
 * Description of DictionariesReducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */
import { remove } from 'ramda'
import {
  ADD_WINDOW_BUTTON,
  REMOVE_WINDOW_BUTTON,
  TOGGLE_WINDOW_TOOLBAR,
} from 'Actions/types'

/**
 * Алгоритм работы панели для сворачивания окон.
 *
 * При добавлении кнопки на панель (т.е. при сворачивании какого либо окна) мы вызываем action
 * ADD_WINDOW_BUTTON этого редьюсера.
 * При этом в items сохраняется объект, в котором есть роут для отображения этого окна и
 * actions, которые надо вызвать, чтобы загрузились данные в это окно.
 *
 * item : {
 *      id: integer,
 *      title: string,
 *      isVisible: bool,
 *      showAction: func,
 *      removeAction: func
 *  }
 * @type {{items: Array}}
 */
const INIT_STATE = {
  items: [],
  isCollapsed: false,
}

/**
 * Add or minimized window
 * @param state
 * @param action
 * @returns {{items: [*,*]}}
 */
function addWindowButton(state, action) {
  let items = []

  const index = state.items.findIndex(item => item.id === action.payload.id)

  if (index === -1) {
    items = [
      ...state.items,
      {
        ...action.payload,
        isVisible: true,
      },
    ]
  } else {
    items = [
      ...state.items.slice(0, index),
      {
        ...state.items[index],
        isVisible: false,
      },
      ...state.items.slice(index + 1),
    ]
  }

  return {
    ...state,
    items,
  }
}

/**
 * Remove window button from windows toolbar
 * @param state
 * @param action
 * @returns {{items: *}}
 */
function removeWindowButton(state, action) {
  const index = state.items.findIndex(node => node.id === action.id)
  return {
    ...state,
    items: index !== -1 ? remove(index, 1, state.items) : state.items,
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_WINDOW_BUTTON:
      return addWindowButton(state, action)

    case REMOVE_WINDOW_BUTTON:
      return removeWindowButton(state, action)

    case TOGGLE_WINDOW_TOOLBAR:
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      }

    default:
      return { ...state }
  }
}
