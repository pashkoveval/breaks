/**
 * @description Удаляет время у даты.
 * @param {Date} date
 * @returns {Date}
 */
export default function (date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
