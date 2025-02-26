import toArray from 'lodash/toArray'

/**
 * Преобразование значения в массив.
 *
 * @example
 * null -> []
 * undefined -> []
 * { name: 123 } -> [123]
 *
 * @param {*} value
 * @returns {[]}
 */
export default toArray
