import { BaseViewFieldModel } from './BaseViewFieldModel'
import { BaseViewElement, BaseViewListElementModel } from './BaseViewListElementModel'
import { ApiProperty } from '@/api'
import type { BaseAttrModel } from '@/api/Model/BaseAttr/BaseAttrModel'
import Model from '@/api/Model/Model'
import { FieldViewTypes } from '@/base/Fields'
import { InputTypes } from '@/base/Inputs'
import { BreakPoints } from '@/base/View'

export enum ViewElement {
  LIST = 'UiElementsList',
  TABLE = 'UiTable',
}

export class BaseElementStyleView extends Model {
  @ApiProperty({ type: 'number', nullable: true })
  public viewSingleElementGap?: undefined | number = 0

  @ApiProperty({ type: 'number', nullable: true })
  public viewSingleElementCount?: undefined | number = 1
}

type PointElement = {
  point: BreakPoints
  gap: number
  count: number
}
export class BaseBreakPointView extends BaseElementStyleView {
  @ApiProperty({ type: 'number', nullable: true })
  public point?: BreakPoints = BreakPoints.XL

  static preferPoints: PointElement[] = [
    { point: BreakPoints.XS, gap: 0, count: 12 },
    { point: BreakPoints.S, gap: 0, count: 12 },
    { point: BreakPoints.M, gap: 2, count: 6 },
    { point: BreakPoints.L, gap: 2, count: 4 },
    { point: BreakPoints.XL, gap: 2, count: 3 },
    { point: BreakPoints.XXL, gap: 3, count: 2 },
    { point: BreakPoints.XXXL, gap: 3, count: 2 },
  ]

  static create(list: PointElement[]) {
    return list.map((element) => {
      const { point, gap, count } = element
      const pointElement = new BaseBreakPointView()
      pointElement.point = point
      pointElement.viewSingleElementGap = gap
      pointElement.viewSingleElementCount = count
      return pointElement
    })
  }

  static createBase() {
    return this.create(this.preferPoints)
  }
}

export class BaseViewListModel extends BaseViewElement {
  @ApiProperty({ type: BaseViewFieldModel, iterable: true })
  public fields: BaseViewFieldModel[] = []

  @ApiProperty({ type: 'string' })
  public viewElement: ViewElement = ViewElement.LIST

  @ApiProperty({ type: BaseViewListElementModel, nullable: true })
  public viewSingleElement?: BaseViewListElementModel = BaseViewListElementModel.create()

  @ApiProperty({ type: 'number', nullable: true })
  public viewSingleElementGap?: undefined | number = 2

  @ApiProperty({ type: 'number', nullable: true })
  public viewSingleElementCount?: undefined | number = 2

  @ApiProperty({ type: 'number', nullable: true, iterable: true })
  public breakPoints?: BaseBreakPointView[] = []

  public addField(attr: null | BaseAttrModel = null, value?: BaseViewFieldModel) {
    const element = value || BaseViewFieldModel.create()
    element.viewType = FieldViewTypes.READONLY
    element.attrCode = attr?.code || ''
    element.attrType = attr?.type || InputTypes.STRING
    this.fields.push(element)
  }

  public addBreakPoints(preferPoints: PointElement[] = []) {
    this.breakPoints = preferPoints.length ? BaseBreakPointView.create(preferPoints) : BaseBreakPointView.createBase()
    return this.breakPoints
  }

  static create(type: ViewElement = ViewElement.LIST) {
    const model = new BaseViewListModel()
    model.addBreakPoints()

    switch (type) {
      case ViewElement.TABLE:
        model.viewSingleElement = undefined
        model.viewSingleElementGap = undefined
        model.viewSingleElementCount = undefined
        break
      default:
        model.showActions = undefined
        model.actions = undefined
        model.showUtils = undefined
        model.utils = undefined
        break
    }
    return model
  }
}
