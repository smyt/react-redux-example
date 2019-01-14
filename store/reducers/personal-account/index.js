/**
 * Description of index.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 12.09.18 13:15
 */

import { combineReducers } from 'redux'
import filtersReducer from './FilterReducer'
import positionsReducer from './PositionsReducer'
import statusesReducer from './StatusesReducer'
import positionReducer from './PositionReducer'
import suggestsReducer from './SuggestsReducer'

export default combineReducers({
  filters: filtersReducer,
  positions: positionsReducer,
  position: positionReducer,
  statuses: statusesReducer,
  suggests: suggestsReducer,
})
