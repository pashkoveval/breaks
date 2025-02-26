/* eslint-disable @typescript-eslint/no-explicit-any */
import isArray from './isArray'

/**
 * @example
 * var x = { a: 1, b: 2, c: 3 };
 * var y = [1, 2, 3];
 *
 * transform(x, toString);
 * // => { a: '1', b: '2', c: '3' }
 *
 * transform(y, toString);
 * // => ['1', '2', '3']
 *
 * @param {object|array} object
 * @param {function} iteratee
 * @returns {object|array}
 */
export default (object: object | Array<any>, iteratee: (value: any, key?: string | number, object?: object) => any) => {
  if (isArray(object)) {
    return object.map(iteratee)
  }

  if (typeof object === 'object') {
    return Object.entries(object).reduce((carry, [key, value]) => {
      return {
        ...carry,
        [key]: iteratee(value, key, object),
      }
    }, {})
  }

  return object
}
