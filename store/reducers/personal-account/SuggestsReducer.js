/**
 * Description of SuggestReducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */
import { remove } from 'ramda'
import rs from 'randomstring'

import { REQUEST, SUCCESS, FAILURE } from 'Actions/utils'
import {
  ADD_SUGGESTION,
  SAVE_SUGGESTION,
  CANCEL_SUGGESTION,
  MINIMIZE_SUGGESTION,
  MAXIMIZE_SUGGESTION,
} from 'Actions/personal-account/types'

import { SUGGEST_DEFAULT_VALUES } from 'Constants/PersonalAccount'

const INIT_STATE = {
  items: [],
  canceledId: '',
  visibleId: '',
  isLoading: false,
  error: '',
}

function addSuggestion(state, { vacancyId }) {
  const items = [...state.items]
  const id = rs.generate(16)
  items.push({ ...SUGGEST_DEFAULT_VALUES, id, vacancyId: +vacancyId })
  return {
    items,
    visibleId: id,
  }
}

function cancelSuggestion(state, { id }) {
  const index = state.items.findIndex(item => item.id === id)
  const items = remove(index, 1, state.items)

  return {
    ...state,
    visibleId: state.visibleId === id ? '' : state.visibleId,
    items,
    canceledId: id,
  }
}

function maximizeSuggestion(state, { id, values }) {
  let items

  if (state.visibleId && state.visibleId !== id) {
    const prevIndex = state.items.findIndex(item => item.id === state.visibleId)
    items = [
      ...state.items.slice(0, prevIndex),
      {
        ...values,
        workTime: { ...values.workTime },
        workPlace: { ...values.workPlace },
      },
      ...state.items.slice(prevIndex + 1),
    ]
  } else {
    items = state.items
  }

  return {
    ...state,
    items: [
      ...items,
    ],
    visibleId: id,
  }
}

function minimizedSuggestion(state, { id, values }) {
  const index = state.items.findIndex(item => item.id === id)

  return {
    ...state,
    items: [
      ...state.items.slice(0, index),
      {
        ...values,
        workTime: { ...values.workTime },
        workPlace: { ...values.workPlace },
      },
      ...state.items.slice(index + 1),
    ],
    visibleId: '',
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_SUGGESTION:
      return addSuggestion(state, action)

    case MINIMIZE_SUGGESTION:
      return minimizedSuggestion(state, action)

    case MAXIMIZE_SUGGESTION:
      return maximizeSuggestion(state, action)

    case SAVE_SUGGESTION[REQUEST]:
      return { ...state, ...action.payload }

    case SAVE_SUGGESTION[SUCCESS]:
      return { ...state, ...action.payload }

    case SAVE_SUGGESTION[FAILURE]:
      return { ...state, ...action.payload }

    case CANCEL_SUGGESTION:
      return cancelSuggestion(state, action)

    default:
      return { ...state }
  }
}
