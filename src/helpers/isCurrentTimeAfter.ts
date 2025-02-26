import dayjs from 'dayjs'
import dayjsTimezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(dayjsTimezone)

/**
 * Сравнивает текущее время (дефолтно пояс МСК) с переданным часом,
 *
 * Возвращает результат сравнения
 * true, если текущее время больше или равно переданного
 * false, если текущее время меньше переданного
 *
 * @param {Date|string|null} value
 * @param {EqualParams} params
 * @returns {boolean}
 */
export default function (hour: number, timezone = 'ru'): boolean {
  const currentDate = dayjs()
  const currentTimezoneDate = currentDate.tz(timezone)
  const currentTimezoneHour = currentTimezoneDate.hour()

  return Boolean(currentTimezoneHour >= hour)
}
