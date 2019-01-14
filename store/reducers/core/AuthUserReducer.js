/**
 * Auth User Reducers
 */
import { REQUEST, SUCCESS, FAILURE } from 'Actions/utils'
import {
  LOGIN_USER,
  USER_STATUS,
  LOGOUT_USER,
  LOAD_USER_INFO_FROM_STORE,
} from 'Actions/auth/types'
// import { getUserData } from 'Util/helpers'

/**
 * Initial auth user
 */
const INIT_USER = {
  id: 0,
  firstname: '',
  lastname: '',
  age: 0,
  permissions: [],
}

const INIT_STATE = {
  isAuth: false,
  accessToken: '',
  expireDate: '',
  user: { ...INIT_USER },
  loading: true,
  error: '',
}

function loadStart(state) {
  return {
    ...state, user: { ...state.user }, loading: true, error: '',
  }
}

function loadError(state, { error }) {
  return {
    ...state, user: { ...state.user }, loading: false, error,
  }
}

function loadUserInfoFromStore(state, { accessToken }) {
  return { ...state, accessToken }
}

function userActionSuccess(state, { accessToken, user }) {
  return {
    ...state, user: { ...user }, accessToken, isAuth: true, loading: false, error: '',
  }
}

function userLogout(state) {
  return {
    ...state, user: { ...INIT_USER }, accessToken: '', expireDate: '',
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER[REQUEST]:
      return loadStart(state)

    case LOGIN_USER[SUCCESS]:
      return userActionSuccess(state, action)

    case LOGIN_USER[FAILURE]:
      return loadError(state, action)

    case USER_STATUS[REQUEST]:
      return loadStart(state)

    case USER_STATUS[SUCCESS]:
      return userActionSuccess(state, action)

    case USER_STATUS[FAILURE]:
      return loadError(state, action)

    case LOGOUT_USER:
      return userLogout(state)

    case LOAD_USER_INFO_FROM_STORE:
      return loadUserInfoFromStore(state)

    default:
      return { ...state }
  }
}
