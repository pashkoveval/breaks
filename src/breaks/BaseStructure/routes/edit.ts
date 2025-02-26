import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/breaks/constants'

export default {
  path: `${ClassRoutsNames.EDIT}:id`,
  name: ClassRoutsNames.BASE,
  meta: {
    break: Breaks.BASE,
    parent: ClassRoutsNames.BASE,
    title: 'Редактирование раздела',
    auth: true,
    roles: [],
  },
  component: () => import('../item/ItemComponent.vue'),
} as RouteRecordRaw
