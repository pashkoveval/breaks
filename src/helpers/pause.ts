/**
 * Асинхронная задержка на заданное количество миллисекунд.
 *
 * @param {number} milliseconds
 * @returns {Promise}
 */
export default (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}
