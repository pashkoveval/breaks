import { ApiProperty } from '@/api'
import { ModelBaseElementAdminFields } from '@/api/Model/ModelBaseElementAdminFields'
import { ModelBaseAttr } from './ModelBaseAttr'

export class ModelBaseClass extends ModelBaseElementAdminFields {
  @ApiProperty({ type: ModelBaseAttr, iterable: true })
  public attrs: ModelBaseAttr[] = []

  static empty(): ModelBaseClass {
    return new ModelBaseClass()
  }

  public addAttribute() {
    const attr = ModelBaseAttr.empty()
    attr.setCreateUserId(this.update_user_id)
    this.attrs.push(attr)
  }

  public removeAttribute(attr: ModelBaseAttr) {
    const index = this.attrs.indexOf(attr)
    if (index > -1) {
      this.attrs.splice(index, 1)
    }
  }
  public clearAttributes() {
    this.attrs = []
  }
}
