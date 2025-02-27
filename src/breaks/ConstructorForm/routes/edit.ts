import type { RouteRecordRaw } from 'vue-router'
import { ClassRoutsNames } from '../constants'
import { Breaks } from '@/enums/Breaks'

export default {
  path: `${ClassRoutsNames.EDIT_PATH}:id`,
  name: ClassRoutsNames.EDIT,
  meta: {
    break: Breaks.BASE,
    parent: ClassRoutsNames.BASE,
    title: 'Редактирование формы',
    button: 'К редактированию формы',
    auth: true,
    roles: [],
  },
  component: () => import('../item/ItemComponent.vue'),
} as RouteRecordRaw
