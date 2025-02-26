import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/breaks/constants'

export default {
  path: `${ClassRoutsNames.EDIT_PATH}:id`,
  name: ClassRoutsNames.EDIT,
  meta: {
    break: Breaks.CLASS,
    parent: ClassRoutsNames.BASE,
    title: 'Редактирование класса',
    button: 'К редактированию класса',
    auth: true,
    roles: [],
  },
  component: () => import('../item/ItemComponent.vue'),
} as RouteRecordRaw
