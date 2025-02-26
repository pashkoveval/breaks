import type {
  ClassTransformOptions,
  ExposeOptions,
  TypeOptions,
  TransformFnParams,
  ClassConstructor,
} from 'class-transformer'

export type AsyncTransformType<T> = string | ClassConstructor<T>
export type AsyncTransformOptions<T> = ExposeOptions &
  ClassTransformOptions &
  TypeOptions & {
    type?: AsyncTransformType<T>
    iterable?: boolean
    nullable?: boolean
    transform?: (params: TransformFnParams) => T
  }
