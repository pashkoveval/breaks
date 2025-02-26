/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'

const now = dayjs().format('YYYY-MM-DD')

/**
 * Преобразование заданного значения к строке со временем в формат HH:mm.
 *
 * @param {*} value
 * @returns {string}
 */
export default (value: any): string => {
  if (!value) {
    return ''
  }

  if (typeof value === 'string') {
    value = `${now} ${value}`
  }

  const date = dayjs(value)

  if (!date.isValid()) {
    return ''
  }

  return date.format('HH:mm')
}
