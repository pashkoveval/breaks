import dayjs from 'dayjs'
import toDate from './toDate'

/**
 * Возвращает возраст по дате рождения.
 *  1. Получить текущую дату
 *  2. Из текущей даты вычесть дату, которая приходит в первом аргументе.
 *  3. Вернуть количество полных лет в числовом виде.
 *
 * @param {Date} date
 * @returns {number}
 */
export default (date: Date | string): number => {
  return dayjs().diff(toDate(date), 'year') || 0
}
