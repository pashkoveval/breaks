import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'

export class ErrorsModel extends Model {
  @ApiProperty({ type: 'string' })
  public message: string = ''

  @ApiProperty({ type: 'string' })
  public code: string = ''

  @ApiProperty({ type: ErrorsModel, iterable: true, nullable: true })
  public group?: ErrorsModel[] = []

  public createGroup(message: string, code: string, errors: ErrorsModel[] = []): ErrorsModel {
    this.group = errors
    this.message = message || this.message
    this.code = code || this.code
    return this
  }

  public clearGroup(): ErrorsModel {
    this.group = this.group ? [] : undefined
    this.message = ''
    this.code = ''
    return this
  }
}
