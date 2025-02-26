import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * Преобразование заданного значения к единому часовому поясу.
 * Возвращает дату в Московском часовом поясе.
 *
 * @param {string | null } value
 * @returns { string | null }
 */
export default (value: string | null): Date | null => {
  if (!value) {
    return null
  }

  return dayjs(value).tz('ru').toDate()
}
