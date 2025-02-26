import dayjs from 'dayjs'

export type ToDateOptions = {
  nullable: boolean
  format?: string
}

/**
 * Преобразование заданного значения к строковой дате без времени.
 * 26-05-2023 00:00:00.000+00:00 --> 2023-05-26
 *
 * @param { Date | string | null | undefined } value
 * @param { ToDateOptions } options
 * @returns { string | null }
 */
export default (
  value: Date | string | null | undefined,
  options: ToDateOptions = { nullable: false, format: 'YYYY-MM-DD' },
): string | null => {
  if (options.nullable && !value) {
    return null
  }

  if (typeof value === 'string') {
    // fix: '14.04.2020' -> '2020-04-14'
    // fix: '2020-04-14 00:00:00.000+00:00' -> '2020-04-14'
    value = value.replace(/^(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1').substring(0, 10)
  }

  return dayjs(value).format(options.format ?? 'YYYY-MM-DD')
}
