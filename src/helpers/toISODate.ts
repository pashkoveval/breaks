/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'
import toDate from '@/helpers/toDate'

export type ToISODateOptions = {
  nullable?: boolean
  dateOnly?: boolean
}

/**
 * Преобразование даты к формату ISO8601.
 *
 * @param {*} value
 * @param {ToISODateOptions} options
 * @returns {String|null}
 */
export default (value: any, options: ToISODateOptions = { nullable: false, dateOnly: false }): string | null => {
  if (options.nullable && !value) {
    return null
  }

  const date = toDate(value)

  if (options.dateOnly) {
    return dayjs(date).format('YYYY-MM-DD')
  }

  return dayjs(date).format('YYYY-MM-DD HH:mm:ss.SSSZ')
}
