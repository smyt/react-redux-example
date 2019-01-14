/**
 * Description of auth.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.10.18 13:43
 */
import {
  put, call, take, select,
} from 'redux-saga/effects'
import {
  REQUEST, SUCCESS, FAILURE, action,
} from 'Actions/utils'
import {
  LOGIN_USER,
  USER_STATUS,
  LOGOUT_USER,
  LOAD_USER_INFO_FROM_STORE,
} from 'Actions/auth/types'

import appConfig from 'Api/config'
import {
  fetchUserStatusByToken,
  loginUserByCredentials,
  logoutUser,
} from 'Api'
import { getUserData, setUserData, removeUserData } from 'Util/helpers'
import {
  authDomain,
  authToken,
  user,
  isAuth,
} from 'Selectors/auth'

function* checkAuthToken(token) {
  try {
    const { data, message, success } = yield call(fetchUserStatusByToken, token)
    if (success) {
      yield put(action(USER_STATUS[SUCCESS], { ...data }))
    } else {
      yield put(action(USER_STATUS[FAILURE], { error: message }))
    }
    return data
  } catch (e) {
    yield put(action(USER_STATUS[FAILURE], { error: e }))
  }
}

function* login(username, password) {
  try {
    const { data, message, success } = yield call(loginUserByCredentials, username, password)
    if (success) {
      yield put(action(LOGIN_USER[SUCCESS], { ...data }))
    } else {
      yield put(action(LOGIN_USER[FAILURE], { error: message }))
    }
  } catch (e) {
    yield put(action(LOGIN_USER[FAILURE], { error: e }))
  }
}

function* logout() {
  try {
    const token = yield select(accessToken)
    const { message, success } = yield call(logoutUser, token)
    if (success) {
      yield put(removeUserData, token)
    } else {
      console.error('Error logout user', message)
    }
  } catch (e) {
    console.error('Error logout user', e)
  }
}

/**
 * User auth saga
 */
export function* watchAuth() {
  const tokeName = appConfig.apiTokenName

  while (true) {
    let isAuth = false

    // Get user info from local store and put this information to the redux store
    const token = yield call(getUserData, tokeName)

    // Auth token checking
    if (token) {
      const data = yield call(checkAuthToken, token)

      // Save token to the store
      const domain = yield select(authDomain)
      isAuth = domain.isAuth
      // const {accessToken} = data
      if (isAuth) {
        yield call(setUserData, tokeName, domain.accessToken)
      }
    }

    // User is not authorized. Wait user login action
    if (!isAuth) {
      const { payload } = yield take(LOGIN_USER[REQUEST])
      yield call(login, { ...payload })
      // Save token to the store
      const { accessToken, isAuth } = yield select(authDomain)
      if (isAuth) {
        yield call(setUserData, tokeName, accessToken)
      }
    } else {
      yield take(LOGOUT_USER)
      yield call(logoutUser, token)
      yield put(removeUserData, tokeName)
    }
  }
}
