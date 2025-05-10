import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/enums/Breaks'

export default {
  path: `/${ClassRoutsNames.BASE}` + ClassRoutsNames.LIST_PATH,
  name: ClassRoutsNames.LIST,
  meta: {
    break: Breaks.CLASS,
    parent: ClassRoutsNames.BASE,
    title: 'Список форм',
    button: 'К списку форм',
    auth: true,
    roles: [],
    icon: 'List',
  },
  component: () => import('../list/ListComponent.vue'),
} as RouteRecordRaw
