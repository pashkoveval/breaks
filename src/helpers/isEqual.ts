import isEqual from 'lodash/isEqual'

/**
 * Сравнение заданных значений.
 *
 * @example
 * var object = { a: 1 };
 * var other = { a: 1 };
 *
 * isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 *
 * @param {*} value
 * @param {*} other
 * @returns {boolean}
 */
export default isEqual
