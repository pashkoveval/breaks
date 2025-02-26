/**
 * Возвращает сконкатенированное полное имя.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} [patronymic]
 * @returns {string}
 */
export default (firstName: string, lastName: string, patronymic: string | null = null) => {
  return [lastName, firstName, patronymic].filter(Boolean).join(' ')
}
