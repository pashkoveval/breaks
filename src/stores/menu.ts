import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { transformMany } from '@/api'
import { MenuItem } from '@/api/Model/Menu/MenuItem'
import router from '@/router'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<MenuItem[]>([])

  const prepareRouts = () => {
    const mapRoute = (el: RouteRecordRaw) => {
      if (el?.children?.length) {
        el.children = el.children.filter((el) => !el.path.includes(':')).map(mapRoute)
      }
      return el
    }

    return [...router.options.routes].map(mapRoute)
  }

  const setMenuList = async () => {
    menuList.value = await transformMany(prepareRouts(), MenuItem)
  }

  setMenuList()

  return { menuList, prepareRouts, setMenuList }
})
