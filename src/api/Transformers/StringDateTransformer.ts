import type { TransformFnParams } from '../Types/Transform.types'
import StringTransformer from './StringTransformer'

export default class StringDateTransformer extends StringTransformer {
  match(): boolean {
    return false
  }

  transform({ value }: TransformFnParams<string>): string | Promise<string> {
    return value!.toString() || ''
  }
}
