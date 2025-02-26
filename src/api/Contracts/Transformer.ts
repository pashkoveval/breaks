/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassConstructor } from 'class-transformer'
import type { TransformFnParams } from '../Types/Transform.types'
import inheritOf from '@/helpers/inheritOf'

export default abstract class Transformer<T> {
  constructor(public type: ClassConstructor<T>) {}

  match(type: any): boolean {
    if (typeof type === 'function') {
      return inheritOf(type, this.type)
    }

    return false
  }

  transform({ value }: TransformFnParams<T>): T | Promise<T> {
    return value
  }
}
