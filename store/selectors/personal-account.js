/**
 * Description of personal-account.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 10.09.18 12:53
 */
import { propEq, pipe } from 'ramda'

export const getPositionsParams = (state) => {
  const { positions } = state.personalAccount
  const { currentPage, itemsPerPage, sortOrder } = positions
  return {
    currentPage,
    itemsPerPage,
    sortOrder,
  }
}

export const getVisibleSuggestion = (state) => {
  const id = state.personalAccount.suggests.visibleId
  return state.personalAccount.suggests.items.find(item => item.id === id)
}

export const getPosition = state => state.personalAccount.position.position

export const isPositionLoaded = state => !pipe(getPosition, propEq('id', 0))(state)

export const getSuggests = state => state.personalAccount.suggests

export const getVisibleSuggestId = state => state.personalAccount.suggests.visibleId

export const getSuggestForm = state => state.form.suggestForm

export const getLastCanceledSuggestId = state => state.personalAccount.suggests.canceledId
