import type { PublicSchema } from './database'

export type Handbook = keyof PublicSchema['Tables']
export type Role = PublicSchema['Tables']['roles']['Row']
