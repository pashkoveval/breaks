import { Expose } from 'class-transformer'
import type AsyncTransformContext from '../AsyncTransform/AsyncTransformContext'
import pick from '@/helpers/pick'

export default <T>({ options }: AsyncTransformContext<T>): PropertyDecorator => {
  const exposeOptions = pick(options, ['name', 'since', 'until', 'groups', 'toClassOnly', 'toPlainOnly'])

  return Expose(exposeOptions)
}
