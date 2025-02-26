import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'
import { Breaks } from '@/breaks/constants'

export class MenuItemMeta extends Model {
  @ApiProperty({ type: 'string', nullable: true })
  public break: Breaks = Breaks.BASE

  @ApiProperty({ type: 'string', nullable: true })
  public parent?: null | string = ''

  @ApiProperty({ type: 'string', nullable: true })
  public title?: null | string = ''

  @ApiProperty({ type: 'string', nullable: true })
  public button?: null | string = ''

  @ApiProperty({ type: 'boolean', nullable: true })
  public auth: boolean = false

  @ApiProperty({ type: 'boolean', nullable: true })
  public roles: boolean = false
}
