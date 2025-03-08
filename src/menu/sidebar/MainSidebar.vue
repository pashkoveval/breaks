<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useMenuStore } from '@/menu/menu'
import UiMenuItem from '@/ui/UiMenuItem/UiMenuItem.vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'MainSidebar' })

const route = useRoute()
const isCollapse = ref(false)

const menu = useMenuStore()

onBeforeMount(async () => {
  if (!menu.menuList.length) {
    await menu.setMenuList()
    console.log('menu.menuList', menu.menuList)
  }
})
</script>

<template>
  <el-button class="collapse" :icon="isCollapse ? DArrowRight : DArrowLeft" circle @click="isCollapse = !isCollapse" />

  <el-menu
    :default-active="route.path"
    class="sidebar"
    unique-opened
    router
    :collapse="isCollapse"
    background-color="var(--color-background)"
  >
    <div class="sidebar-body">
      <el-scrollbar max-height="100dvh">
        <UiMenuItem v-for="item in menu.menuList" :key="item.path" :item="item" :collapse="isCollapse" />
      </el-scrollbar>
    </div>
  </el-menu>
</template>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  overflow: hidden;

  &-body {
    overflow: hidden;
  }
}

.collapse {
  position: absolute;
  top: 15px;
  right: -15px;
  z-index: 3;
}
</style>
