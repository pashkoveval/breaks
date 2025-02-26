import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/breaks/constants'

export default {
  path: ClassRoutsNames.LIST_PATH,
  name: ClassRoutsNames.LIST,
  meta: {
    break: Breaks.CLASS,
    parent: ClassRoutsNames.BASE,
    title: 'Список форм',
    button: 'К списку форм',
    auth: true,
    roles: [],
  },
  component: () => import('../list/ListComponent.vue'),
} as RouteRecordRaw
