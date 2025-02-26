/* eslint-disable @typescript-eslint/ban-ts-comment */
import TypeTransformer from './TypeTransformer'

export default class BooleanTransformer extends TypeTransformer<boolean> {
  constructor() {
    // @ts-ignore
    super(Boolean)
  }
}
