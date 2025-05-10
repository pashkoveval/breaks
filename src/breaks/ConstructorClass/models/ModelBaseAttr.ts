import { ApiProperty } from '@/api'
import { ModelBaseElementAdminFields } from '@/api/Model/ModelBaseElementAdminFields'
import { FieldTypes } from '@/enums/Fields'

export class ModelBaseAttr extends ModelBaseElementAdminFields {
  @ApiProperty({ type: 'string' })
  public type: FieldTypes = FieldTypes.INPUT

  @ApiProperty({ type: 'string', nullable: true })
  public value: null | string = null

  @ApiProperty({ type: 'string', nullable: true })
  public classRef?: string = undefined

  @ApiProperty({ type: 'string', nullable: true })
  public attrRef?: string = undefined

  static empty(): ModelBaseAttr {
    return new ModelBaseAttr()
  }
}
