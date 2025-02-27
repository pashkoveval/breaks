import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'
import guid from '@/helpers/guid'

export class ModelBaseElementParams extends Model {
  @ApiProperty({ type: 'string', nullable: true })
  public guid?: string = guid()

  @ApiProperty({ type: 'string' })
  public code: string = ''

  @ApiProperty({ type: 'string' })
  public name: string = ''

  static empty() {
    return new ModelBaseElementParams()
  }
}
