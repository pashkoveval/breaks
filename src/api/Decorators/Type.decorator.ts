import { Type } from 'class-transformer'
import type AsyncTransformContext from '../AsyncTransform/AsyncTransformContext'
import pick from '@/helpers/pick'

export default <T>({ propertyType, options }: AsyncTransformContext<T>): PropertyDecorator => {
  const typeOptions = pick(options, ['discriminator', 'keepDiscriminatorProperty'])

  return Type(() => propertyType, typeOptions)
}
