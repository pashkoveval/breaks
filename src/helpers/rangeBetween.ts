import range from './range'

/**
 * Генерирует диапазон, начиная со start, размером size влево и вправо, в размере указанного шага.
 *
 * @param {number} start
 * @param {number} size
 * @param {number} step
 * @returns {number[]}
 */

function rangeBetween(start: number, size: number, step: number = 1): number[] {
  const leftDiff = start - size * step
  const min = leftDiff < 1 ? 1 : leftDiff

  const left = range(min, start, step)
  const right = range(start, start + size * step + 1, step)

  return [...left, ...right]
}

export default rangeBetween
