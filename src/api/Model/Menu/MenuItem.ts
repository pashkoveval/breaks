import { MenuItemMeta } from './MenuItemMeta'
import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'

export class MenuItem extends Model {
  @ApiProperty({ type: 'string' })
  public name: string = ''

  @ApiProperty({ type: 'string' })
  public path: string = ''

  @ApiProperty({ type: MenuItemMeta, nullable: true })
  public meta?: null | MenuItemMeta = null

  @ApiProperty({ type: MenuItem, iterable: true })
  public children: MenuItem[] = []

  @ApiProperty({ type: 'boolean' })
  public open: boolean = false

  public collapse() {
    this.open = !this.open
  }

  public checkCanCollapse(name: string | symbol): boolean {
    return !this.children.some((item) => item.name === name || item.children.some(() => this.checkCanCollapse(name)))
  }
}
