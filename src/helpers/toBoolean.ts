/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Преобразование заданного значения к булеву типу.
 *
 * @example
 * 'true' -> true
 * 'false' -> false
 *
 * @param {*} value
 * @returns {boolean}
 */
export default (value: any) => {
  if (typeof value === 'string') {
    switch (value.toLowerCase()) {
      case 'true':
        return true
      case 'false':
        return false
      default:
    }
  }

  if (typeof value === 'number') {
    return value > 0
  }

  return Boolean(value)
}
