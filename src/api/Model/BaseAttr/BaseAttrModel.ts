import { BaseClassModel } from '../BaseClass/BaseClassModel'
import { ApiProperty } from '@/api'
import { FieldTypes } from '@/enums/Fields'

export class BaseAttrModel extends BaseClassModel {
  @ApiProperty({ type: 'string' })
  public type: FieldTypes = FieldTypes.INPUT

  @ApiProperty({ type: 'string', nullable: true })
  public value: null | string = null

  static create(access?: boolean) {
    const element = new BaseAttrModel()
    if (!access) {
      element.access = undefined
    }
    return element
  }
}
