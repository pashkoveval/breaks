import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import MainLayout from '../layout/MainLayout.vue'
import create from './create'
import edit from './edit'
import list from './list'
import { Breaks } from '@/breaks/constants'

const routes: RouteRecordRaw[] = [
  {
    path: `/${ClassRoutsNames.BASE}`,
    name: ClassRoutsNames.BASE,
    component: MainLayout,
    meta: {
      break: Breaks.CLASS,
      title: 'Главная страница конструктора классов',
      button: 'Конструктор классов',
      auth: true,
      roles: [],
    },
    children: [create, list, edit],
  },
]

export default routes
