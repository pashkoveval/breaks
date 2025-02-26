/* eslint-disable @typescript-eslint/ban-ts-comment */
import TypeTransformer from './TypeTransformer'

export default class StringTransformer extends TypeTransformer<string> {
  constructor() {
    // @ts-ignore
    super(String)
  }
}
