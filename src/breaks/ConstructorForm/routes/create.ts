import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/enums/Breaks'

export default {
  path: `/${ClassRoutsNames.BASE}` + ClassRoutsNames.CREATE_PATH,
  name: ClassRoutsNames.CREATE,
  meta: {
    break: Breaks.BASE,
    parent: ClassRoutsNames.BASE,
    title: 'Создание формы',
    button: 'К созданию формы',
    auth: true,
    roles: [],
  },
  component: () => import('../item/ItemComponent.vue'),
} as RouteRecordRaw
