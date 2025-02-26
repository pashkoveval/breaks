/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassConstructor, ClassTransformOptions } from 'class-transformer'
import type Transformer from '../Contracts/Transformer.ts'
import Expose from '../Decorators/Expose.decorator.ts'
import Transform from '../Decorators/Transform.decorator.ts'
import Type from '../Decorators/Type.decorator.ts'
import type Model from '../Model/Model.ts'
import type ModelTransformer from '../Transformers/ModelTransformer.ts'
import type { AsyncTransformOptions, AsyncTransformType } from '../Types/AsyncTransform.types.ts'
import AsyncTransformContext from './AsyncTransformContext'
import PostTransform from './PostTransform.ts'
import TransformerStorage from './TransformerStorage.ts'

export default class AsyncTransformExecutor {
  public transformers = new TransformerStorage()
  public postTransform = new PostTransform()

  registerTransformer<T extends Transformer<any>>(transformer: T, aliases: string[] = []): void {
    this.transformers.register(transformer, aliases)
  }

  decorate<T>(options: AsyncTransformType<T> | AsyncTransformOptions<T> = {}): PropertyDecorator {
    return (targetClass: any, propertyKey: string | symbol): void => {
      const context = new AsyncTransformContext(targetClass, propertyKey, options, this.transformers)

      this.postTransform.add(targetClass, propertyKey)

      Expose<T>(context)(targetClass, propertyKey)
      Transform<T>(context)(targetClass, propertyKey)
      Type<T>(context)(targetClass, propertyKey)
    }
  }

  transform<T extends Model>(
    plain: Record<string, unknown>,
    Class: ClassConstructor<T>,
    options?: ClassTransformOptions,
  ): Promise<T> {
    return this.transformers.resolve<ModelTransformer<T>>(Class)!.transformClass(plain, Class, options)
  }

  transformMany<T extends Model>(
    plains: any[],
    Class: ClassConstructor<T>,
    options?: ClassTransformOptions,
  ): Promise<T[]> {
    return Promise.all(
      plains.map((it) => {
        return this.transform(it, Class, options)
      }),
    )
  }
}
