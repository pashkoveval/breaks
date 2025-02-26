import { ApiProperty } from '@/api'
import { BaseAttrModel } from '@/api/Model/BaseAttr/BaseAttrModel'
import { BaseClassModel } from '@/api/Model/BaseClass/BaseClassModel'

export class ConstructorClassModel extends BaseClassModel {
  @ApiProperty({ type: BaseAttrModel, iterable: true })
  public attrs: BaseAttrModel[] = []

  static create(access?: boolean) {
    const element = new ConstructorClassModel()
    if (!access) {
      element.access = undefined
    }
    return element
  }

  public addAttr(access?: boolean) {
    this.attrs.push(BaseAttrModel.create(access))
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
