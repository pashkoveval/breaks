import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'
import { ViewSize } from '@/enums/View'

export enum ViewSingleElement {
  CARD = 'UiCard',
}

export class BaseViewElement extends Model {
  @ApiProperty({ type: 'boolean', nullable: true })
  public showActions?: boolean = false

  @ApiProperty({ type: 'string', nullable: true })
  public actions?: string[] = []

  @ApiProperty({ type: 'boolean', nullable: true })
  public showUtils?: boolean = false

  @ApiProperty({ type: 'string', nullable: true })
  public utils?: string[] = []

  static create() {
    return new BaseViewElement()
  }
}

export class BaseViewListSingleElementModel extends BaseViewElement {
  @ApiProperty({ type: 'string', nullable: true })
  public type?: ViewSingleElement = ViewSingleElement.CARD

  @ApiProperty({ type: 'string', nullable: true })
  public size?: ViewSize = ViewSize.L

  @ApiProperty({ type: 'string', nullable: true })
  public round?: ViewSize = ViewSize.L

  @ApiProperty({ type: 'string', nullable: true })
  public padding?: ViewSize = ViewSize.L

  static create() {
    return new BaseViewListSingleElementModel()
  }
}

export class BaseViewListElementModel extends BaseViewElement {
  @ApiProperty({ type: 'string', nullable: true })
  public type?: ViewSingleElement = ViewSingleElement.CARD

  @ApiProperty({ type: 'string', nullable: true })
  public size?: ViewSize = ViewSize.L

  @ApiProperty({ type: 'string', nullable: true })
  public round?: ViewSize = ViewSize.L

  @ApiProperty({ type: 'string', nullable: true })
  public padding?: ViewSize = ViewSize.L

  static create() {
    return new BaseViewListSingleElementModel()
  }
}
