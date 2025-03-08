import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/enums/Breaks'

export default {
  path: `/${ClassRoutsNames.BASE}/` + ClassRoutsNames.CREATE_PATH,
  name: ClassRoutsNames.CREATE,
  meta: {
    break: Breaks.CLASS,
    parent: ClassRoutsNames.BASE,
    title: 'Создание класса',
    button: 'К созданию класса',
    auth: true,
    roles: [],
    icon: 'DocumentAdd',
  },
  component: () => import('../item/ItemComponent.vue'),
} as RouteRecordRaw
