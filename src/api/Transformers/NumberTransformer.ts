/* eslint-disable @typescript-eslint/ban-ts-comment */
import TypeTransformer from './TypeTransformer'

export default class NumberTransformer extends TypeTransformer<number> {
  constructor() {
    // @ts-ignore
    super(Number)
  }
}
