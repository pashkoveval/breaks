import Transformer from '../Contracts/Transformer'
import type { TransformFnParams } from '../Types/Transform.types'
import convert from '@/helpers/convert'

export default class TypeTransformer<T> extends Transformer<T> {
  transform({ value }: TransformFnParams<T>): T | Promise<T> {
    return convert(value, this.type)
  }
}
