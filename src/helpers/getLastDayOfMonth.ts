import dayjs from 'dayjs'

/**
 * Последний день текущего месяца.
 *
 * @returns {Date}
 */
export default function (date: Date | string | null): Date {
  return dayjs(date).endOf('month').toDate()
}
