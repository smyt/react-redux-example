/**
 * Description of account.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.09.18 13:58
 */
import {
  REQUEST, SUCCESS, FAILURE,
  action,
} from 'Actions/utils' // eslint-disable-line
import {
  POSITIONS,
  STATUSES,
  CHANGE_POSITIONS_LIST_PAGE,
  CHANGE_POSITIONS_ITEMS_PER_PAGE,
  CHANGE_POSITIONS_LIST_SORT_ORDER,
  SELECT_FILTER_ITEM_SELECTION,
  DESELECT_FILTER_ITEM_SELECTION,
  OPEN_STATUSES_MODAL,
  POSITION,
  OPEN_POSITION_VIEW_MODAL,
  TRY_MINIMIZE_SUGGESTION,
  MINIMIZE_SUGGESTION,
  TRY_MAXIMIZE_SUGGESTION,
  MAXIMIZE_SUGGESTION,
} from 'Actions/personal-account/types' // eslint-disable-line
import {
  put, call, takeLatest, takeEvery, select, take, fork,
} from 'redux-saga/effects'
import {
  getPositionsParams,
  getSuggestForm,
  getLastCanceledSuggestId,
} from 'Selectors/personal-account' // eslint-disable-line
import {
  fetchPositions,
  fetchStatuses,
  fetchPositionItem,
} from 'Api' // eslint-disable-line

/**
 * Positions sagas
 */

function* loadPositions() {
  try {
    const params = yield select(getPositionsParams)
    const {
      items, totalCount, message, success,
    } = yield call(fetchPositions, params)

    if (success) {
      yield put(action(POSITIONS[SUCCESS], { items, totalCount }))
    } else {
      yield put(action(POSITIONS[SUCCESS], { errors: [message] }))
    }
  } catch (e) {
    yield put(action(POSITIONS[FAILURE], { errors: [e] }))
  }
}

function* requestPositions() {
  yield put(action(POSITIONS[REQUEST]))
}

export function* watchChangePositionsPage() {
  yield takeEvery(CHANGE_POSITIONS_LIST_PAGE, requestPositions)
}

export function* watchChangePositionsItemsPerPage() {
  yield takeEvery(CHANGE_POSITIONS_ITEMS_PER_PAGE, requestPositions)
}

export function* watchChangePositionsSortOrder() {
  yield takeEvery(CHANGE_POSITIONS_LIST_SORT_ORDER, requestPositions)
}

export function* watchChangePositionsFilterSelect() {
  yield takeEvery(SELECT_FILTER_ITEM_SELECTION, requestPositions)
}

export function* watchChangePositionsFilterDeselect() {
  yield takeEvery(DESELECT_FILTER_ITEM_SELECTION, requestPositions)
}

export function* watchLoadPositions() {
  yield takeLatest(POSITIONS[REQUEST], loadPositions)
}

/**
 * Single position sagas
 */

function* loadPositionItem(id) {
  try {
    const { item, message, success } = yield call(fetchPositionItem, id)
    if (success) {
      yield put(action(POSITION[SUCCESS], { position: item }))
    } else {
      yield put(action(POSITION[SUCCESS], { errors: [message] }))
    }
  } catch (e) {
    yield put(action(POSITION[FAILURE], { errors: [e] }))
  }
}

export function* watchLoadPosition() {
  while (true) {
    const { id } = yield take(POSITION[REQUEST])
    yield fork(loadPositionItem, id)
  }
}

export function* watchOpenPositionViewModal() {
  while (true) {
    const { id } = yield take(OPEN_POSITION_VIEW_MODAL)
    yield put(action(POSITION[REQUEST], { id }))
  }
}

/**
 * Statuses sagas
 */

function* loadStatuses(id) {
  yield put(action(STATUSES[REQUEST]))
  try {
    const { items, message, success } = yield call(fetchStatuses, id)
    if (success) {
      yield put(action(STATUSES[SUCCESS], { items }))
    } else {
      yield put(action(STATUSES[SUCCESS], { errors: [message] }))
    }
  } catch (e) {
    yield put(action(STATUSES[FAILURE], { errors: [e] }))
  }
}

export function* watchOpenStatusesWindow() {
  while (true) {
    const { id } = yield take(OPEN_STATUSES_MODAL)
    yield fork(loadStatuses, id)
  }
}

/**
 * Suggestions sagas
 */

export function* watchTryMinimizeSuggestion() {
  while (true) {
    const { id } = yield take(TRY_MINIMIZE_SUGGESTION)
    // We must check suggestion, may be this suggestion is canceled.
    const lastCanceledId = yield select(getLastCanceledSuggestId)
    if (id !== lastCanceledId) {
      const form = yield select(getSuggestForm)
      yield put(action(MINIMIZE_SUGGESTION, {
        id,
        values: form ? form.values : {},
      }))
    }
  }
}

export function* watchTryMaximizeSuggestion() {
  while (true) {
    const { id } = yield take(TRY_MAXIMIZE_SUGGESTION)
    const form = yield select(getSuggestForm)
    yield put(action(MAXIMIZE_SUGGESTION, {
      id,
      values: form ? form.values : {},
    }))
  }
}
