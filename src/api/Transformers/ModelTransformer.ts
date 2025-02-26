import camelcaseKeys from 'camelcase-keys'
import type { ClassConstructor, ClassTransformOptions } from 'class-transformer'
import { plainToInstance } from 'class-transformer'
import type PostTransform from '../AsyncTransform/PostTransform.ts'
import Transformer from '../Contracts/Transformer'
import type Model from '../Model/Model.ts'
import type { TransformFnParams } from '../Types/Transform.types'

export default class ModelTransformer<T extends Model> extends Transformer<T> {
  constructor(
    public type: ClassConstructor<T>,
    public postTransform: PostTransform,
  ) {
    super(type)
  }

  transform({ value, propertyType, options }: TransformFnParams<T>): Promise<T> {
    return this.transformClass(value, propertyType, options)
  }

  transformClass(
    plain: Record<string, unknown>,
    Class: ClassConstructor<T>,
    options?: ClassTransformOptions,
  ): Promise<T> {
    const transformed = plainToInstance(Class, camelcaseKeys(plain), {
      enableImplicitConversion: true,
      exposeDefaultValues: false,
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
      strategy: 'exposeAll',
      ...options,
    })

    return this.postTransform.execute(transformed)
  }
}
