/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transform } from 'class-transformer'
import type AsyncTransformContext from '../AsyncTransform/AsyncTransformContext'
import inheritOf from '@/helpers/inheritOf'
import isEmpty from '@/helpers/isEmpty'
import pick from '@/helpers/pick'
import toArray from '@/helpers/toArray'

function iterable(type: Function): boolean {
  if (!type) {
    return false
  }
  return inheritOf(type, Array) || inheritOf(type, Set)
}

export default <T>(context: AsyncTransformContext<T>): PropertyDecorator => {
  const { reflectType, propertyType, propertyDefault, options } = context

  const { name, nullable } = options
  const transformOptions = pick(options, ['since', 'until', 'groups', 'toClassOnly', 'toPlainOnly'])

  return Transform((params) => {
    // Переопределяем value, т.к. class-transformer делает неявное преобразование для стандартных
    // типов данных, из-за чего, например, возникает проблема с 'false' => true.
    // @see {$link https://github.com/typestack/class-transformer/blob/develop/src/TransformOperationExecutor.ts#L108}
    const { obj, key } = params
    const rawValue = obj[name || key]

    if (isEmpty(rawValue)) {
      return nullable ? null : propertyDefault
    }

    const transformFn = (value: any) =>
      context.transformFn({
        ...params,
        value,
        propertyType,
      })

    if (iterable(reflectType)) {
      return Promise.all(toArray(rawValue).map(transformFn))
    }

    return transformFn(rawValue)
  }, transformOptions)
}
