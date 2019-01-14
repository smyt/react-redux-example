/**
 * Description of helpers.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 22.03.18 13:51
 */
import Cookies from 'js-cookie'
import moment from 'moment'
import { keys } from 'lodash'

function delay(ms, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb()
      resolve()
    }, ms)
  })
}

function delayAnswer(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, ms)
  })
}

/**
 * Save user data to localStorage or Cookies
 * @param name
 * @param value
 */
function setUserData(name, value) {
  if (window.localStorage) { // eslint-disable-line
    window.localStorage.setItem(name, value) // eslint-disable-line
  } else {
    Cookies.set(name, value, { expires: 7 })
  }
}

/**
 * Get user data from localStorage or Cookies
 * @param name
 */
function getUserData(name) {
  let token
  if (window.localStorage) { // eslint-disable-line
    token = window.localStorage.getItem(name) // eslint-disable-line
  } else {
    token = Cookies.get(name)
  }
  return token
}

/**
 * Remove user data from localStorage or Cookies
 * @param name
 */
function removeUserData(name) {
  if (window.localStorage) { // eslint-disable-line
    window.localStorage.removeItem(name) // eslint-disable-line
  } else {
    Cookies.remove(name)
  }
}

/**
 * Remove null, undefined, or empty string properties from object.
 * @param object
 * @returns {{}}
 */
function removeEmpty(object) {
  const result = {}
  keys(object).forEach((prop) => {
    if (object[prop]) {
      result[prop] = object[prop]
    }
  })
  return result
}

/**
 * Function to convert hex to rgba
 */
function hexToRgbA(hex, alpha) {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`
    const rgba = [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') // eslint-disable-line
    return `rgba(${rgba},${alpha})`
  }
  throw new Error('Bad Hex')
}

/**
 * Text Truncate
 */
function textTruncate(str, length, ending) {
  const l = length || 100
  const e = ending || '...'
  if (str.length > l) {
    return str.substring(0, l - e.length) + e
  }
  return str
}

/**
 * Get Date
 */
function getTheDate(timestamp, format) {
  const time = timestamp * 1000
  const formatDate = format || 'MM-DD-YYYY'
  return moment(time).format(formatDate)
}

/**
 * Convert Date To Timestamp
 */
function convertDateToTimeStamp(date, format) {
  const formatDate = format || 'YYYY-MM-DD'
  return moment(date, formatDate).unix()
}

/**
 * Function to return current app layout
 */
function getAppLayout(url) {
  const location = url.pathname.split('/')
  return location[1]
}

/**
 * Check
 * @param object {one: true, two: false}
 * @param countToPass int
 * @return bool
 */
function checkObjectPropsTrueFalse(object, countToPass = 1) {
  let count = 0
  keys(object).forEach((prop) => {
    if (object[prop]) {
      count += 1
    }
  })
  return count >= countToPass
}

export {
  delay,
  delayAnswer,
  setUserData,
  getUserData,
  removeUserData,
  removeEmpty,
  hexToRgbA,
  textTruncate,
  getTheDate,
  convertDateToTimeStamp,
  getAppLayout,
  checkObjectPropsTrueFalse,
}
