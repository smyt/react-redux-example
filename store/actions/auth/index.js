/**
 * Description of auth.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.10.18 14:18
 */
import { REQUEST } from 'Actions/utils'
import {
  USER_STATUS,
  LOGIN_USER,
  LOGOUT_USER,
  LOAD_USER_INFO_FROM_STORE,
} from './types'

import { action } from '../utils'

/**
 * User login action
 * @param email string
 * @param password string
 */
export const loginAction = (email, password) => action(LOGIN_USER[REQUEST], { email, password })

/**
 * User logout action
 */
export const logoutAction = () => action(LOGOUT_USER)

/**
 * Update user status action
 */
export const loadStatusAction = () => action(USER_STATUS[REQUEST])

/**
 * Load user info from localStore or Cookies
 */
export const loadUserInfoFromStoreAction = () => action(LOAD_USER_INFO_FROM_STORE)
