/**
 * Description of DictionariesReducer.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 11:43
 */

import { REQUEST, SUCCESS, FAILURE } from 'Actions/utils'
import { DICTIONARIES } from 'Actions/types'

const INIT_STATE = {
  technologies: [],
  workTime: [],
  countries: [],
  places: [],
  priorities: [],
  englishLevel: [],
  experience: [],
  education: [],
  isLoading: false,
  error: '',
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DICTIONARIES[REQUEST]:
      return { ...state, isLoading: true }

    case DICTIONARIES[SUCCESS]:
      return { ...state, isLoading: false, ...action.payload }

    case DICTIONARIES[FAILURE]:
      return { ...state, isLoading: false, error: action.error }

    default:
      return { ...state }
  }
}
