import type { ProfileUser } from '@/auth/auth'
import dayjs from 'dayjs'
import { ApiProperty } from '@/api'
import { ModelBaseElementParams } from './ModelBaseElementParams'
import { ModelBaseError } from './ModelBaseError'
import { ModelBaseAccess } from './ModelBaseAccess'

export class ModelBaseElementAdminFields extends ModelBaseElementParams {
  @ApiProperty({ type: 'string', nullable: true })
  public description?: string = undefined

  @ApiProperty({ type: 'string', transform: ({ value }) => dayjs(value).toISOString() })
  public created_at: string = dayjs(new Date()).toISOString()

  @ApiProperty({ type: 'string', transform: ({ value }) => dayjs(value).toISOString() })
  public updated_at: string = dayjs(new Date()).toISOString()

  @ApiProperty({ type: ModelBaseAccess, nullable: true })
  public access?: ModelBaseAccess = undefined

  @ApiProperty({ type: 'string', nullable: true })
  public user_id?: ProfileUser['uuid'] = undefined

  @ApiProperty({ type: ModelBaseError, iterable: true, nullable: true })
  public errors?: ModelBaseError[] = undefined

  public setAccess(access = new ModelBaseAccess()) {
    this.access = access
  }

  public setErrors(errors: ModelBaseError[] = []) {
    this.errors = errors
  }

  static empty() {
    return new ModelBaseElementAdminFields()
  }
}
