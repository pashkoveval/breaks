/* eslint-disable @typescript-eslint/no-explicit-any */
import isArray from '@/helpers/isArray'

/**
 * Проверка является ли заданное значение объектом (не `null`).
 *
 * @param {any} value
 * @returns {boolean}
 */
export default (value: any): boolean => {
  return value !== null && typeof value === 'object' && !isArray(value)
}
