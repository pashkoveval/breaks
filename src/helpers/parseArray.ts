/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Парсит значение в массив строк.
 *
 * @example
 * null -> []
 * undefined -> []
 * '1,2,3' -> ['1', '2', '3']
 *
 * @param {string} value
 * @param {string|RegExp} [separator=',']
 * @returns {string[]}
 */
export default (value: string | Array<any>, separator = ',') => {
  if (value instanceof Array) {
    return value
  }

  if (typeof value !== 'string') {
    return []
  }

  return value.split(separator)
}
