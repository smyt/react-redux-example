/**
 * Description of core.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.09.18 13:57
 */
import {
  put, call, takeEvery, take, select, fork, all,
} from 'redux-saga/effects'
import {
  REQUEST, SUCCESS, FAILURE, action,
} from 'Actions/utils'
import {
  DICTIONARIES,
  TRY_ADD_WINDOW_BUTTON,
  ADD_WINDOW_BUTTON,
} from 'Actions/types'
import { fetchDictionaries } from 'Api'
import { getLastCanceledSuggestId } from 'Selectors/personal-account'

/**
 * Dictionaries sagas
 */

function* loadDictionaries() {
  try {
    const { dictionaries, message, success } = yield call(fetchDictionaries)
    if (success) {
      yield put({ type: DICTIONARIES[SUCCESS], payload: dictionaries })
    } else {
      yield put({ type: DICTIONARIES[FAILURE], errors: [message] })
    }
  } catch (e) {
    yield put({ type: DICTIONARIES[FAILURE], errors: [e] })
  }
}

export function* watchLoadDictionaries() {
  yield takeEvery(DICTIONARIES[REQUEST], loadDictionaries)
}

/**
 * Windows toolbar sagas
 */
export function* watchTryAddWindowButton() {
  while (true) {
    const { payload } = yield take(TRY_ADD_WINDOW_BUTTON)
    const lastCanceledId = yield select(getLastCanceledSuggestId)
    if (payload.id !== lastCanceledId) {
      yield put(action(ADD_WINDOW_BUTTON, { payload }))
    }
  }
}

export default function* coreSaga() {
  yield all([
    fork(watchTryAddWindowButton),
    fork(watchLoadDictionaries),
  ])
}
