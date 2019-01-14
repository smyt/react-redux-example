/**
 * Action types for personal-account module actions
 */

import createRequestTypes from '../utils'

export const LOGIN_USER = createRequestTypes('LOGIN_USER')
export const USER_STATUS = createRequestTypes('USER_STATUS')
export const SIGNUP_USER = createRequestTypes('SIGNUP_USER')
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOAD_USER_INFO_FROM_STORE = 'LOAD_USER_INFO_FROM_STORE'
