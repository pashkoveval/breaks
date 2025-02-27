import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'
import { Breaks } from '@/enums/Breaks'

export class ModelBaseMenuMeta extends Model {
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

export class ModelBaseMenu extends Model {
  @ApiProperty({ type: 'string' })
  public name: string = ''

  @ApiProperty({ type: 'string' })
  public path: string = ''

  @ApiProperty({ type: ModelBaseMenuMeta, nullable: true })
  public meta?: null | ModelBaseMenuMeta = null

  @ApiProperty({ type: ModelBaseMenu, iterable: true })
  public children: ModelBaseMenu[] = []

  @ApiProperty({ type: 'boolean' })
  public open: boolean = false

  public collapse() {
    this.open = !this.open
  }

  public checkCanCollapse(name: string | symbol): boolean {
    return !this.children.some((item) => item.name === name || item.children.some(() => this.checkCanCollapse(name)))
  }
}
