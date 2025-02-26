/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassConstructor } from 'class-transformer'
import type Transformer from '../Contracts/Transformer'
import type { AsyncTransformOptions, AsyncTransformType } from '../Types/AsyncTransform.types'
import type { TransformFn, TransformFnParams } from '../Types/Transform.types'
import type TransformerStorage from './TransformerStorage'
import 'reflect-metadata'

function normalizeOptions<T>(options: AsyncTransformType<T> | AsyncTransformOptions<T>): AsyncTransformOptions<T> {
  if (typeof options === 'function' || typeof options === 'string') {
    return {
      type: options,
    }
  }

  return options
}

function getReflectType<T>(targetClass: any, propertyKey: string | symbol): ClassConstructor<T> {
  return Reflect.getMetadata('design:type', targetClass, propertyKey)
}

function defaultTransform<T>({ value }: TransformFnParams<T>): any {
  return value
}

export default class AsyncTransformContext<T> {
  public targetClass: any
  public propertyKey: string | symbol
  public options: AsyncTransformOptions<T>
  public reflectType: ClassConstructor<T>
  public transformer?: Transformer<T>

  constructor(
    targetClass: any,
    propertyKey: string | symbol,
    options: AsyncTransformType<T> | AsyncTransformOptions<T>,
    transformers: TransformerStorage,
  ) {
    const getType = (options: AsyncTransformOptions<T> = {}) => {
      let type = null
      if (options.type === 'string') {
        type = String
      } else if (options.type === 'number') {
        type = Number
      } else if (options.type === 'boolean') {
        type = Boolean
      } else if (options.iterable) {
        type = Array
      } else {
        type = options.type
      }

      Reflect.defineMetadata('design:type', type, targetClass, propertyKey)
    }

    this.targetClass = targetClass
    this.propertyKey = propertyKey
    this.options = normalizeOptions<T>(options)
    getType(this.options)
    this.reflectType = getReflectType<T>(targetClass, propertyKey)
    this.transformer = transformers.resolve<Transformer<T>>(this.optionsType)
  }

  get propertyType(): ClassConstructor<T> {
    if (typeof this.options.type === 'function') {
      return this.options.type
    }

    return this.reflectType
  }

  get optionsType(): string | ClassConstructor<T> {
    if (typeof this.options.type === 'string') {
      return this.options.type
    }

    return this.propertyType
  }

  get propertyDefault(): T {
    return this.targetClass[this.propertyKey]
  }

  get transformFn(): TransformFn<T> {
    if (this.options.transform) {
      return this.options.transform
    }

    if (this.transformer) {
      return this.transformer.transform.bind(this.transformer)
    }

    return defaultTransform<T>
  }
}
