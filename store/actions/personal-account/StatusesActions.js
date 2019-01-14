/**
 * Position candidate statuses actions
 */
import { REQUEST, action } from 'Actions/utils'
import {
  STATUSES,
  OPEN_STATUSES_MODAL,
  CLOSE_STATUSES_MODAL,
  OPEN_STATUS_HISTORY_MODAL,
  CLOSE_STATUS_HISTORY_MODAL,
} from './types'

/**
 * @param {integer} id ID vacancy
 */
export const loadStatusesAction = id => action(STATUSES[REQUEST], { id })

/**
 * @param id int
 * @param title string
 */
export const openStatusesModalAction = (id, title) => action(OPEN_STATUSES_MODAL, { id, title })

/**
 *
 */
export const closeStatusesModalAction = () => action(CLOSE_STATUSES_MODAL, {
  id: 0,
  title: '',
  statuses: [],
  errors: [],
})

/**
 *
 * @param id int
 */
export const openStatusHistoryModalAction = id => action(OPEN_STATUS_HISTORY_MODAL, {
  payload: {
    id,
    fio: 'Пупкин Иван Васильевич',
    date: '2018-06-04',
    oldStatus: 'На собеседовании',
    newStatus: 'Отказ',
    comment: 'Не прошел собеседование...',
  },
})

/**
 *
 */
export const closeStatusHistoryModalAction = () => action(CLOSE_STATUS_HISTORY_MODAL)
