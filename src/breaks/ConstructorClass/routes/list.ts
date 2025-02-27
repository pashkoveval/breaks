import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/enums/Breaks'

export default {
  path: ClassRoutsNames.LIST_PATH,
  name: ClassRoutsNames.LIST,
  meta: {
    break: Breaks.CLASS,
    parent: ClassRoutsNames.BASE,
    title: 'Список классов',
    button: 'К списку классов',
    auth: true,
    roles: [],
  },
  component: () => import('../list/ListComponent.vue'),
} as RouteRecordRaw
