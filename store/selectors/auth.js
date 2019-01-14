/**
 * Description of auth.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.10.18 13:45
 */

export const authDomain = state => state.auth

export const isAuth = state => state.auth.isAuth

export const authToken = state => state.auth.authToken

export const user = state => state.auth.user
