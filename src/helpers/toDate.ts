import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export type ToDateOptions = {
  nullable?: boolean
}

/**
 * Преобразование заданного значения к дате.
 * Возвращает начало дня по UTC, с учетом локального времени пользователя
 * либо локальную полночь
 * 26-05-2023 00:00:00.000+00:00 --> 26-05-2023 03:00:00.000+03:00
 *
 * @param { Date | string | number | null } value
 * @param { ToDateOptions } options
 * @returns { Date | null }
 */
export default (value: Date | string | number | null, options: ToDateOptions = { nullable: false }): Date | null => {
  if (options.nullable && !value) {
    return null
  }

  if (typeof value === 'string') {
    // fix: '14.04.2020' -> '2020-04-14'
    value = value.replace(/^(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1').substring(0, 10)

    return dayjs(value).toDate()
  }

  const formattedDate = dayjs(value).format('YYYY-MM-DD')

  return dayjs(formattedDate).toDate()
}
