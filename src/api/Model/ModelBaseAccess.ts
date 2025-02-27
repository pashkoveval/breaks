import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'

export class ModelBaseAccess extends Model {
  @ApiProperty({ type: 'boolean' })
  public create: boolean = true

  @ApiProperty({ type: 'boolean' })
  public read: boolean = true

  @ApiProperty({ type: 'boolean' })
  public update: boolean = true

  @ApiProperty({ type: 'boolean' })
  public delete: boolean = true
}
