import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'

export class ModelBaseError extends Model {
  @ApiProperty({ type: 'string' })
  public message: string = ''

  @ApiProperty({ type: 'string' })
  public code: string = ''

  @ApiProperty({ type: ModelBaseError, iterable: true, nullable: true })
  public group?: ModelBaseError[] = []

  public createGroup(message: string, code: string, errors: ModelBaseError[] = []) {
    this.group = errors
    this.message = message || this.message
    this.code = code || this.code
  }

  public clearAll() {
    this.message = ''
    this.code = ''
    this.clearGroup()
  }

  public clearGroup() {
    this.group = []
  }

  public deleteItemInGroupByCode(code: string) {
    const index = this.group?.findIndex((error) => error.code === code)
    if (index !== undefined && index !== -1) {
      this.group?.splice(index, 1)
    }
  }
}
