import dayjs from 'dayjs'
import { AccessBaseModel } from '../BaseAccess/BaseAccessModel'
import { ErrorsModel } from '../BaseErrors/BaseErrorsModel'
import { ApiProperty } from '@/api'
import Model from '@/api/Model/Model'
import guid from '@/helpers/guid'
import type { ProfileUser } from '@/auth/auth'

export class BaseClassModel extends Model {
  @ApiProperty({ type: 'string', nullable: true })
  public id?: string = guid()

  @ApiProperty({ type: 'string' })
  public code: string = ''

  @ApiProperty({ type: 'string' })
  public name: string = ''

  @ApiProperty({ type: 'string', nullable: true })
  public description?: string = undefined

  @ApiProperty({ type: 'string', transform: ({ value }) => dayjs(value).toISOString() })
  public created_at: string = dayjs(new Date()).toISOString()

  @ApiProperty({ type: 'string', transform: ({ value }) => dayjs(value).toISOString() })
  public updated_at: string = dayjs(new Date()).toISOString()

  @ApiProperty({ type: AccessBaseModel })
  public access?: AccessBaseModel = new AccessBaseModel()

  @ApiProperty({ type: 'string', nullable: true })
  public user_id?: undefined | ProfileUser['uuid'] = undefined

  @ApiProperty({ type: ErrorsModel, iterable: true, nullable: true })
  public errors?: ErrorsModel[] = undefined

  static create() {
    return new BaseClassModel()
  }

  public setError(code: string, message: string, errors: undefined | ErrorsModel[] = undefined) {
    if (this.errors === undefined) {
      this.errors = []
    }
    const error = new ErrorsModel()
    error.code = code
    error.message = message
    error.group = errors
    this.errors.push(error)
  }

  public setAccess(access: AccessBaseModel) {
    this.access = access || new AccessBaseModel()
  }
}
