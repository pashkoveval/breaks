/**
 * Проверка на наследование.
 *
 * @example
 * inheritOf(Array, Array) -> true
 *
 * class Arrayable extends Array {}
 * inheritOf(Arrayable, Array) -> true
 *
 * class SecondArrayable extends Arrayable {}
 * inheritOf(SecondArrayable, Array) -> true
 *
 * @param {Function} type
 * @param {Function} checkType
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default (type: Function, checkType: Function = Array): boolean => {
  type = type.prototype

  do {
    if (type === checkType.prototype) {
      return true
    }

    type = Object.getPrototypeOf(type)
  } while (type)

  return false
}
