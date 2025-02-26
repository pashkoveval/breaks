import { BaseViewListModel } from './BaseViewListModel'
import { ApiProperty } from '@/api'
import { BaseAttrModel } from '@/api/Model/BaseAttr/BaseAttrModel'
import { BaseClassModel } from '@/api/Model/BaseClass/BaseClassModel'

export class ConstructorFormModel extends BaseClassModel {
  @ApiProperty({ type: BaseAttrModel, iterable: true })
  public attrs: BaseAttrModel[] = []

  @ApiProperty({ type: BaseViewListModel })
  public listSettings: BaseViewListModel = BaseViewListModel.create()

  static create() {
    return new ConstructorFormModel()
  }

  public addAttr() {
    this.attrs.push(BaseAttrModel.create())
  }

  public deleteAttr(id: string) {
    const foundIndex = this.attrs.findIndex((attr) => attr.id === id)
    if (foundIndex !== -1) {
      this.attrs.splice(foundIndex, 1)
    } else {
      this.setError('attr', `Атрибут с id ${id} не найден`)
    }
  }
}
