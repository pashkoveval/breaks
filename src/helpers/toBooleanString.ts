/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Преобразование заданного значения к булеву типу с учетом false: string.
 *
 * @example
 * 'true' -> true
 * 'false' -> 'false'
 *
 * @param {*} value
 * @returns {boolean | string}
 */
export default (value: any): boolean | string => {
  if (typeof value === 'string') {
    switch (value.toLowerCase()) {
      case 'true':
        return true
      case 'false':
        return 'false'
      default:
    }
  }

  if (typeof value === 'number') {
    return value > 0 ? true : 'false'
  }

  return Boolean(value)
}
