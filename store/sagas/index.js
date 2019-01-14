/**
 * Description of index.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.09.18 12:46
 */
import { all } from 'redux-saga/effects'

import {
  watchLoadDictionaries,
  watchTryAddWindowButton,
} from './core'

import {
  watchLoadPositions,
  watchChangePositionsPage,
  watchChangePositionsItemsPerPage,
  watchChangePositionsSortOrder,
  watchOpenStatusesWindow,
  watchChangePositionsFilterSelect,
  watchChangePositionsFilterDeselect,
  watchOpenPositionViewModal,
  watchTryMinimizeSuggestion,
  watchTryMaximizeSuggestion,
  watchLoadPosition,
} from './modules/personal-account'

import {
  watchAuth,
} from './modules/auth'

export default function* rootSaga() {
  yield all([
    watchLoadDictionaries(),
    watchTryAddWindowButton(),
    watchLoadPositions(),
    watchChangePositionsPage(),
    watchChangePositionsItemsPerPage(),
    watchChangePositionsSortOrder(),
    watchChangePositionsFilterSelect(),
    watchChangePositionsFilterDeselect(),
    watchOpenStatusesWindow(),
    watchOpenPositionViewModal(),
    watchTryMinimizeSuggestion(),
    watchTryMaximizeSuggestion(),
    watchLoadPosition(),
    watchAuth(),
  ])
}
