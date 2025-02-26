import dayjs from 'dayjs'

type LocaleDateParams = {
  locale?: string
  pattern?: string
  timezone?: string
}

/**
 * Конвертирует Date в строку в заданном формате.
 *
 */
export default (date: Date, options: LocaleDateParams = {}): string => {
  const locale = options.locale || 'ru'
  const pattern = options.pattern || 'DD.MM.YYYY'
  const timezone = options.timezone === 'local' ? dayjs.tz.guess() : options.timezone || 'ru'

  return dayjs.tz(date, timezone).locale(locale).format(pattern)
}
