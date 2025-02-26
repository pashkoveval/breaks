import dayjs from 'dayjs'

/**
 * Конвертирует Date в строку в заданном формате.
 *
 * @param {Date} date
 * @param {string} [locale='ru']
 * @param {string} [pattern='DD.MM.YYYY']
 * @returns {string}
 */
export default (
  date: string | number | Date | dayjs.Dayjs | null,
  locale: string = 'ru',
  pattern: string = 'DD.MM.YYYY',
) => {
  return dayjs(date).locale(locale).format(pattern)
}
