import dayjs from 'dayjs'

/**
 * Меняет местами две даты если вторая дата оказывается меньше первой.
 *
 * @param {Date} firstDate
 * @param {Date} secondDate
 * @returns {[Date, Date]}
 */
export default function (firstDate: Date, secondDate: Date) {
  if (dayjs(secondDate).isBefore(firstDate, 'date')) {
    return [secondDate, firstDate]
  }

  return [firstDate, secondDate]
}
