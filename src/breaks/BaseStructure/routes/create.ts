import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/enums/Breaks'

export default {
  path: ClassRoutsNames.CREATE,
  name: ClassRoutsNames.CREATE,
  meta: {
    break: Breaks.BASE,
    parent: ClassRoutsNames.BASE,
    title: 'Создание раздела',
    auth: true,
    roles: [],
  },
  component: () => import('../item/ItemComponent.vue'),
} as RouteRecordRaw
