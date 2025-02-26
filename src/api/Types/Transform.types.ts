/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassConstructor, TransformFnParams as ClassTransformFnParams } from 'class-transformer'

export type TransformFnParams<T> = ClassTransformFnParams & {
  propertyType: ClassConstructor<T>
}

export type TransformFn<T> = (params: TransformFnParams<T>) => any
