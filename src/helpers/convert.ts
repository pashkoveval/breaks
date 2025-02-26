/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassConstructor } from 'class-transformer'
import toArray from '@/helpers/toArray'
import toBoolean from '@/helpers/toBoolean'
import toDate from '@/helpers/toDate'
import toInteger from '@/helpers/toInteger'
import toNumber from '@/helpers/toNumber'
import toString from '@/helpers/toString'

/**
 * Суперфункция для типизации значения.
 *
 * @param {any} value        Значение для преобразования
 * @param {T | string | Date} type    Наименование типа
 * @return { T | Date | null | boolean | undefined | string | any[] | number | any }
 */
function convert(value: any, type: 'undefined' | undefined): undefined
function convert(value: any, type: 'null' | null): null
function convert(value: any, type: 'bool' | 'boolean' | BooleanConstructor): boolean
function convert(value: any, type: 'string' | 'str' | StringConstructor): string
function convert(value: any, type: 'array' | ArrayConstructor): any[]
function convert(
  value: any,
  type: 'int' | 'integer' | 'double' | 'float' | 'real' | 'number' | 'numeric' | NumberConstructor,
): number
function convert(value: any, type: 'date' | 'datetime' | DateConstructor): Date
function convert<T>(value: any, type: ClassConstructor<T>): T
function convert(value: any, type: any): any {
  if (typeof type === 'string') {
    type = type.toLowerCase()
  }

  switch (type) {
    case 'array':
    case Array:
      return toArray(value)
    case 'str':
    case 'string':
    case String:
      return toString(value)
    case 'int':
    case 'integer':
      return toInteger(value)
    case 'double':
    case 'float':
    case 'real':
    case 'number':
    case 'numeric':
    case Number:
      return toNumber(value)
    case 'bool':
    case 'boolean':
    case Boolean:
      return toBoolean(value)
    case 'date':
    case 'datetime':
    case Date:
      return toDate(value, { nullable: true })
    case 'null':
    case null:
      return null
    case 'undefined':
    case undefined:
      return undefined
    default:
  }

  return value
}

export default convert
