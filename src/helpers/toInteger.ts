/* eslint-disable @typescript-eslint/no-explicit-any */
import toInteger from 'lodash/toInteger'
import toNumber from './toNumber'

/**
 * Преобразование заданного значения к целочисленному.
 *
 * @example
 * null -> 0
 * undefined -> 0
 * '' -> 0
 *
 * @param {*} value
 * @returns {number}
 */
export default (value: any) => toInteger(toNumber(value))
