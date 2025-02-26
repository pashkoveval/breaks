import dayjs from 'dayjs'
import dayjsTimezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(dayjsTimezone)

type EqualParams = {
  hour: number
  timezone?: string
  strict?: boolean
}

const DEFAULT_PARAMS = {
  hour: 0,
  timezone: 'ru',
  strict: false,
}

/**
 * Сравнивает переданную и текущую даты,
 * если они находятся в диапазоне 1 дня,
 * то сравнивает их часы по заданному условию.
 *
 * @param {Date|string|null} value
 * @param {EqualParams} params
 * @returns {boolean}
 */
export default function (value: Date | string | null, params: EqualParams): boolean {
  params = { ...DEFAULT_PARAMS, ...params }

  const date = dayjs(value)
  const currentDate = dayjs()
  if (!currentDate.isSame(date, 'day')) {
    return true
  }

  const timezonedDate = currentDate.tz(params.timezone)
  const timezonedHour = timezonedDate.hour()

  if (params.strict ? timezonedHour >= params.hour : timezonedHour > params.hour) {
    return false
  }

  return true
}
