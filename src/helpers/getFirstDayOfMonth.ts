import dayjs from 'dayjs'

/**
 * Первый день текущего месяца.
 *
 * @returns {Date}
 */
export default function (date: Date | string | null): Date {
  return dayjs(date).startOf('month').toDate()
}
