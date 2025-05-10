import type { Breaks } from './constants/Breaks'

export type BreaksENV = {
  [key in Breaks]: boolean
}
