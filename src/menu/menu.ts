import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { transformMany } from '@/api'
import { ModelBaseMenu } from '@/api/Model/ModelBaseMenu'
import router from '@/router'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<ModelBaseMenu[]>([])

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
    menuList.value = await transformMany(prepareRouts(), ModelBaseMenu)
  }

  setMenuList()

  return { menuList, prepareRouts, setMenuList }
})
