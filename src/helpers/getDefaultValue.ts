/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Смотрит на тип передаваемого значения и возвращает дефолтное значение по типу.
 *
 * @param {any} value
 * @returns {String | Number | Object | Array<T> | Boolean | null}
 */

type OtherType<T> = Exclude<any, string | number | object | Array<T> | boolean>

function getDefaultValue(value: string): ''
function getDefaultValue(value: number): 0
function getDefaultValue<T>(value: Array<T>): []
function getDefaultValue(value: boolean): false
function getDefaultValue<T extends object>(value: T): object
function getDefaultValue<T>(value: OtherType<T>): null
function getDefaultValue(value: any): any {
  switch (value?.constructor) {
    case String:
      return ''
    case Number:
      return 0
    case Object:
      return {}
    case Array:
      return []
    case Boolean:
      return false
    default:
      return null
  }
}

export default getDefaultValue
