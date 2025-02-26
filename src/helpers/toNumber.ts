/* eslint-disable @typescript-eslint/no-explicit-any */
import defaultTo from 'lodash/defaultTo'
import toNumber from 'lodash/toNumber'

/**
 * Преобразование заданного значения в число.
 *
 * @example
 * '123,53' -> '123.54'
 * '123m55' -> '123'
 * 's123,3.5' -> '123.3'
 * null -> 0
 * undefined -> 0
 * '' -> 0
 *
 * @param {*} value
 * @returns {number}
 */
export default (value: any) => {
  if (typeof value === 'string') {
    value = value.replace(',', '.')
    value = value.replace(/^\D*(\d+(\.\d+)?).*$/, '$1')
  }

  value = toNumber(value)

  // fix: toNumber(undefined) returns null.
  return defaultTo<number>(value, 0)
}
