/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'

const now = dayjs().format('YYYY-MM-DD')

/**
 * Преобразование времени к формату ISO8001.
 *
 * @param {*} value
 * @returns {string|null}
 */
export default (value: any): string | null => {
  if (!value) {
    return null
  }

  if (typeof value === 'string') {
    value = `${now} ${value}`
  }

  const date = dayjs(value)

  if (!date.isValid()) {
    return null
  }

  return date.format('HH:mm')
}
