import type { Breaks } from './constants'

export type BreaksENV = {
  [key in Breaks]: boolean
}
