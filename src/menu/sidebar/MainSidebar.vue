<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useMenuStore } from '@/menu/menu'
import UiMenuItem from '@/ui/UiMenuItem/UiMenuItem.vue'

defineOptions({ name: 'MainSidebar' })

const menu = useMenuStore()

onBeforeMount(async () => {
  if (!menu.menuList.length) {
    await menu.setMenuList()
  }
})
</script>

<template>
  <nav class="main-sidebar">
    <UiMenuItem v-for="item in menu.menuList" :key="item.name" :item="item" />
  </nav>
</template>

<style scoped lang="scss">
.main-sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav__list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  dd {
    margin-left: 40px;

    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
