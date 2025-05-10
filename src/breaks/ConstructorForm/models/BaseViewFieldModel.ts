import { ApiProperty } from '@/api'
import { BaseAttrModel } from '@/api/Model/BaseAttr/BaseAttrModel'
// import { BaseClassModel } from '@/api/Model/BaseClass/BaseClassModel';
import Model from '@/api/Model/Model'
import { FieldTypes, FieldViewTypes } from '@/enums/Fields'
import { InputTypes } from '@/enums/Inputs'
import guid from '@/helpers/guid'

export class BaseViewFieldModel extends Model {
  @ApiProperty({ type: 'string', nullable: true })
  public id?: string = guid()

  @ApiProperty({ type: 'string' })
  public type: FieldTypes = FieldTypes.INPUT

  @ApiProperty({ type: 'string' })
  public attrCode: BaseAttrModel['code'] = ''

  @ApiProperty({ type: 'string' })
  public attrType: BaseAttrModel['type'] = FieldTypes.INPUT

  @ApiProperty({ type: 'string' })
  public viewType: FieldViewTypes = FieldViewTypes.EDIT

  static create() {
    return new BaseViewFieldModel()
  }
}

export class FieldTypeElement extends Model {
  @ApiProperty({ type: 'string' })
  public type: FieldTypes = FieldTypes.INPUT

  @ApiProperty({ type: 'string' })
  public name?: string = ''

  @ApiProperty({ type: 'string', iterable: true })
  public inputTypes?: InputTypes[] = []

  static create() {
    return new FieldTypeElement()
  }
}

export class BaseFieldsTypeList {
  private allElements: FieldTypeElement[] = [
    {
      type: FieldTypes.INPUT,
      name: 'Поле ввода',
      inputTypes: [InputTypes.STRING, InputTypes.NUMBER],
    },
    {
      type: FieldTypes.PASSWORD,
      name: 'Поле ввода: пароль',
      inputTypes: [InputTypes.PASSWORD],
    },
    {
      type: FieldTypes.EMAIL,
      name: 'Поле ввода: Email',
      inputTypes: [InputTypes.EMAIL],
    },
    {
      type: FieldTypes.URL,
      name: 'Поле ввода: URL',
      inputTypes: [InputTypes.URL],
    },
    {
      type: FieldTypes.TEL,
      name: 'Поле ввода: Телефон',
      inputTypes: [InputTypes.TEL],
    },
    {
      type: FieldTypes.TEXTAREA,
      name: 'Большое поле ввода',
      inputTypes: [InputTypes.STRING, InputTypes.JSON],
    },
    {
      type: FieldTypes.CHECKBOX,
      name: 'Чекбокс',
      inputTypes: [InputTypes.BOOLEAN],
    },
    {
      type: FieldTypes.RADIO,
      name: 'Радио',
      inputTypes: [InputTypes.BOOLEAN],
    },
    {
      type: FieldTypes.DATE_TIME,
      name: 'Дата',
      inputTypes: [InputTypes.DATE, InputTypes.TIME, InputTypes.DATETIME],
    },
    {
      type: FieldTypes.SELECT,
      name: 'Поле выбора',
      inputTypes: [InputTypes.SELECT, InputTypes.MULTISELECT, InputTypes.COLOR, InputTypes.REF, InputTypes.BACK_REF],
    },
    {
      type: FieldTypes.FILE,
      name: 'Файл',
      inputTypes: [InputTypes.FILE, InputTypes.IMAGE],
    },
    {
      type: FieldTypes.SEARCH,
      name: 'Поиск',
      inputTypes: [InputTypes.SEARCH],
    },
    {
      type: FieldTypes.BUTTON,
      name: 'Кнопка',
      inputTypes: [],
    },
  ]

  public inputType?: null | InputTypes

  public get list(): FieldTypeElement[] {
    return this.allElements.filter((field) => {
      return this.inputType ? field.inputTypes?.includes(this.inputType) : true
    })
  }

  static create() {
    return new BaseFieldsTypeList()
  }
}
