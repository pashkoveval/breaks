/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Проверка заданного значения на null или undefined.
 *
 * @param {*} value
 * @param {boolean} all
 * @returns {boolean}
 */
export default (value: any, all: boolean = false) => {
  const isEmpty = value === null || typeof value === 'undefined'

  if (all) {
    return isEmpty || !value
  }

  return isEmpty
}
