import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import toDate from '@/helpers/toDate'

dayjs.extend(customParseFormat)

export const isEqualDates = (firstItem: Date | string | null, secondItem: Date | string | null) => {
  const formattedFirstDate = dayjs(toDate(firstItem)).format('YYYY-MM-DD')
  const formattedSecondDate = dayjs(toDate(secondItem)).format('YYYY-MM-DD')

  if (
    dayjs(formattedFirstDate, 'YYYY-MM-DD', true).isValid() &&
    dayjs(formattedSecondDate, 'YYYY-MM-DD', true).isValid()
  ) {
    return formattedFirstDate === formattedSecondDate
  }

  return false
}
