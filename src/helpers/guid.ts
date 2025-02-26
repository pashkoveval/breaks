/**
 * Возвращает guid строку.
 *
 * @returns {string}
 */
export default () => {
  const guidTemplate = 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'
  return guidTemplate.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0

    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
