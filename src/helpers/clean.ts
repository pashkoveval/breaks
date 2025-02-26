import isArray from './isArray'
import isObject from './isObject'

type CleanParams = {
  allowFalse?: boolean
  allowZero?: boolean
  allowNull?: boolean
  recursive?: boolean
}

type DefaultParams = {
  allowFalse: false
  allowZero: false
  allowNull: false
  recursive: false
}

const defaultParams: DefaultParams = {
  allowFalse: false,
  allowZero: false,
  allowNull: false,
  recursive: false,
}

/**
 * @description Очистка объекта от nullable значений.
 * - объекты без параметров
 * - пустые массивы
 * - пустые строки
 * - null
 * - undefined
 * - false
 * - 0
 *
 * @param {object} cleanObj
 * @param {CleanParams} cleanParams
 * @param {boolean} cleanParams.allowFalse false
 * @param {boolean} cleanParams.allowZero false
 * @param {boolean} cleanParams.allowNull false
 * @param {boolean} cleanParams.recursive false
 * @returns {object}
 */
function clean(cleanObj: object, cleanParams?: CleanParams): object {
  const isAllowedException = (val: boolean | number) =>
    Boolean(
      (cleanParams!.allowFalse && val === false) ||
        (cleanParams!.allowZero && val === 0) ||
        (cleanParams!.allowNull && val === null),
    )

  cleanParams = {
    ...defaultParams,
    ...cleanParams,
  }

  let entries = Object.entries(cleanObj)

  if (cleanParams.recursive) {
    entries = entries.map(([key, value]) => {
      if (isObject(value)) {
        value = clean(value, cleanParams)
      }

      return [key, value]
    })
  }

  return entries
    .filter(([, value]) => {
      if (isArray(value)) {
        return value.length
      }

      if (isObject(value)) {
        return Object.keys(value!).length
      }

      if (isAllowedException(value)) {
        return true
      }

      return value
    })
    .reduce((carry, [key, value]) => {
      return {
        ...carry,
        [key]: value,
      }
    }, {})
}

export default clean
